/**
 * @file Add Component 逻辑
 */
'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');
const inquirer = require('inquirer');

const log = require('./utils/log');
const suffix = require('./utils/suffix');

module.exports = async (api) => {
  // 交互式命令行参数 获取组件信息
  const { componentName } = await inquirer.prompt([
    {
      name: 'componentName',
      type: 'input',
      message: `Please input your component name. ${chalk.yellow(
        '( PascalCase )'
      )}`,
      description: `You should input a ${chalk.yellow(
        'PascalCase'
      )}, it will be used to name new component.`,
      default: 'HelloWorld'
    }
  ]);

  // 组件名称校验
  if (!componentName.trim() || /[^A-Za-z0-9]/g.test(componentName)) {
    log.error(
      `Error: Please input a correct name. ${chalk.bold('( PascalCase )')}`
    );
    return;
  }

  const baseDir = `${api.getCwd()}/src/components`;
  const existComponent = glob.sync(`${baseDir}/*`);

  const existComponentName = existComponent.map((name) =>
    name.replace(`${baseDir}/`, '')
  );

  // 判断组件是否已存在
  const isExist = existComponentName.some((name) => {
    const reg = new RegExp(
      `^(${componentName}.[vue|jsx|tsx])$|^(${componentName})$`,
      'g'
    );
    return reg.test(name);
  });

  if (isExist) {
    log.error(`Error: Component ${chalk.bold(componentName)} already exists.`);
    return;
  }

  // 交互式命令行 获取组件信息
  const {
    componentType,
    componentStyleType,
    shouldMkdir
  } = await inquirer.prompt([
    {
      name: 'componentType',
      type: 'list',
      message: `Please select your component type. ${chalk.yellow(
        '( .vue / .tsx / .jsx )'
      )}`,
      choices: [
        { name: 'SFC (.vue)', value: 'sfc' },
        { name: 'TSX (.tsx)', value: 'tsx' },
        { name: 'JSX (.jsx)', value: 'jsx' }
      ],
      default: 'sfc'
    },
    {
      name: 'componentStyleType',
      type: 'list',
      message: `Please select your component style type. ${chalk.yellow(
        '( .css / .sass / .scss / .less / .styl )'
      )}`,
      choices: [
        { name: 'CSS (.css)', value: '.css' },
        { name: 'SCSS (.scss)', value: '.scss' },
        { name: 'Sass (.sass)', value: '.sass' },
        { name: 'Less (.less)', value: '.less' },
        { name: 'Stylus (.styl)', value: '.styl' }
      ],
      default: '.scss'
    },
    {
      name: 'shouldMkdir',
      type: 'confirm',
      message: `Should make a directory for new component? ${chalk.yellow(
        '( Suggest to create. )'
      )}`,
      default: true
    }
  ]);

  let src = path.resolve(
    __dirname,
    `../generator/template/component/${componentType}/Template${suffix(
      componentType
    )}`
  );
  let dist = `${baseDir}/${componentName}${suffix(componentType)}`;
  let styleSrc = path.resolve(
    __dirname,
    `../generator/template/component/style/index${componentStyleType}`
  );
  let styleDist = `${baseDir}/${componentName}${componentStyleType}`;

  if (shouldMkdir) {
    try {
      fs.mkdirSync(`${baseDir}/${componentName}`);
      dist = `${baseDir}/${componentName}/${componentName}${suffix(
        componentType
      )}`;
      styleDist = `${baseDir}/${componentName}/index${componentStyleType}`;
    } catch (e) {
      log.error(e);
      return;
    }
  }

  // 生成 SFC/TSX/JSX 及 CSS/SCSS/Sass/Less/Stylus
  try {
    const template = fs.readFileSync(src).toString();
    const style = fs.readFileSync(styleSrc).toString();
    if (componentType === 'sfc') {
      fs.writeFileSync(
        dist,
        template.replace(/helloworld/gi, componentName).replace(
          /<style>\s<\/style>/gi,
          () => `<style${
            componentStyleType !== '.css'
              ? ` lang="${componentStyleType.replace('.', '')}"`
              : ''
          }>\n${style}</style>`
        )
      );
    } else {
      fs.writeFileSync(
        dist,
        template
          .replace(/helloworld/gi, componentName)
          .replace(
            /import '\.\/index\.css';/gi,
            `import './${
              shouldMkdir ? 'index' : `${componentName}`
            }${componentStyleType}';`
          )
      );
      fs.writeFileSync(styleDist, style.replace(/helloworld/gi, componentName));
    }
    log.success(
      `Success: Component ${chalk.bold(
        componentName
      )} was created in ${chalk.bold(dist)}`
    );
  } catch (e) {
    log.error(e);
    return;
  }
};

/**
 * @file Add Component 逻辑
 */
const fs = require('fs');
const glob = require('glob');
const chalk = require('chalk');
const inquirer = require('inquirer');

const log = require('./utils/log');

module.exports = async (api, options) => {
  // 交互式命令行参数 获取组件信息
  const { componentType, componentName } = await inquirer.prompt([
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
      `^(${componentName}.[vue|jsx|tsx])|(${componentName})`,
      'g'
    );
    return reg.test(name);
  });

  if (isExist) {
    log.error(`Error: Component ${chalk.bold(componentName)} already exists.`);
    return;
  }

  const { shouldMkDir } = await inquirer.prompt([
    {
      name: 'shouldMkDir',
      type: 'confirm',
      message: `Should make a directory for new component? ${chalk.yellow(
        '( Suggest to create. )'
      )}`,
      default: true
    }
  ]);
  // TODO: 完成文件读取写入逻辑
};

/**
 * @file Generator
 */
'use strict';

const chalk = require('chalk');

const log = require('../src/utils/log');

module.exports = (api) => {
  // 执行脚本
  const extendScript = {
    scripts: {
      'add-component': 'vue-cli-service add-component',
      'add-page': 'vue-cli-service add-page'
    }
  };
  api.extendPackage(extendScript);

  console.log('');
  log.success(`Success: Add plugin success.`);
  console.log('');
  console.log('You can use it with:');
  console.log('');
  console.log(`   ${chalk.cyan('yarn add-component')}`);
  console.log('   or');
  console.log(`   ${chalk.cyan('yarn add-page')}`);
  console.log('');
  console.log('to create a component or page.');
  console.log('');
  console.log(`${chalk.green.bold('Enjoy it!')}`);
  console.log('');
};

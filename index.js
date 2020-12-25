/**
 * @file Service 插件
 */
'use strict';

const addComponent = require('./src/add-component');
const addPage = require('./src/add-page');

module.exports = (api, options) => {
  api.registerCommand(
    'add-component',
    {
      // TODO: 添加命令详细描述
    },
    async () => {
      await addComponent(api);
    }
  );

  api.registerCommand(
    'add-page',
    {
      // TODO: 添加命令详细描述
    },
    async () => {
      await addPage(api);
    }
  );
};

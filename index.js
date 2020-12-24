/**
 * @file Service 插件
 */
const addComponent = require('./src/add-component');

module.exports = (api, options) => {
  api.registerCommand(
    'add-component',
    {
      // TODO: 添加命令详细描述
    },
    async () => {
      await addComponent(api, options);
    }
  );

  api.registerCommand(
    'add-page',
    {
      // TODO: 添加命令详细描述
    },
    async () => {
      // TODO: 添加创建页面逻辑
    }
  );
};

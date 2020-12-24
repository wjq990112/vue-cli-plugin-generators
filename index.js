/**
 * @file Service 插件
 */
module.exports = (api, options) => {
  api.registerCommand(
    'add-component',
    {
      // TODO: 添加命令详细描述
    },
    (args) => {
      console.log('🔥 Test Add Component.');
    }
  );

  api.registerCommand(
    'add-page',
    {
      // TODO: 添加命令详细描述
    },
    (args) => {
      console.log('🔥 Test Add Page.');
    }
  );
};

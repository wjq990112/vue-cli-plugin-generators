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
      description:
        'use SFC/TSX/JSX & CSS/Sass/SCSS/Less/Stylus to add components.',
      usage: 'vue-cli-service add-component'
    },
    async () => {
      await addComponent(api);
    }
  );

  api.registerCommand(
    'add-page',
    {
      description: 'use SFC/TSX/JSX & CSS/Sass/SCSS/Less/Stylus to add pages.',
      usage: 'vue-cli-service add-page'
    },
    async () => {
      await addPage(api);
    }
  );
};

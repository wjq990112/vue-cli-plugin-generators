/**
 * @function 生成文件后缀名
 * @param {'sfc' | 'tsx' | 'jsx'} componentType 组件类型
 * @returns {'.vue' | '.tsx' | '.jsx'} 文件后缀名
 */
const suffix = (componentType) => {
  switch (componentType) {
    case 'sfc':
      return '.vue';

    case 'tsx':
      return '.tsx';

    case 'jsx':
      return '.jsx';

    default:
      return '.vue';
  }
};

module.exports = suffix;

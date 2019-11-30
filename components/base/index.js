/**
 * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象
 * @param {String} selector 节点选择器
 */
const getCtx = (selector) => {
  const pages = getCurrentPages();
  const ctx = pages[pages.length - 1];
  const componentCtx = ctx.selectComponent(selector);

  if (!componentCtx) {
    throw new Error('无法找到对应的组件，请按文档说明使用组件');
    return console.error('无法找到对应的组件，请按文档说明使用组件');
  }
  return componentCtx
}

// 顶部消息组件 toptip
const $toptip = (options) => {
  const {
    selector = '#toptip'
  } = options;
  const ctx = getCtx(selector);
  ctx.handleShow(options)
}
const $stopRefresh = (selector = '#v-refresher', ctx) => getCtx(selector, ctx).finishPullToRefresh()

module.exports = {
  $toptip,
  $stopRefresh,
}
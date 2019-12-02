const {
  $toptip
} = require('../../../../components/base/index');

Page({
  handleDefault() {
    $toptip({
      content: '这是一条普通提醒'
    });
  },
  handleSuccess() {
    $toptip({
      content: '这是一条成功提醒',
      type: 'success'
    });
  },
  handleWarning() {
    $toptip({
      content: '这是一条警告提醒',
      type: 'warning'
    });
  },
  handleError() {
    $toptip({
      content: '这是一条错误提醒',
      type: 'error'
    });
  },
  handleDuration() {
    $toptip({
      content: '我将在 5 秒后消失',
      duration: 5
    });
  }
});
Component({
  properties: {
    value: {
      type: [Number, String],
      value: 0
    },
    max: {
      type: [Number, String],
      value: 99
    },
    type: {
      type: String,
      value: 'number'
    },
  },
  attached() {
    let ta = this.data,
      max = parseInt(ta.max),
      value = parseInt(ta.value);

    // 超出 max 范围显示 max+
    (value && max && value > max) && this.setData({
      value: max + '+'
    })
  }

})
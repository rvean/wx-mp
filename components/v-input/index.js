Component({
  behaviors: ['wx://form-field'],
  externalClasses: ['v-class'],

  properties: {
    // 输入框的值
    value: {
      type: String,
      value: ''
    },
    // 标题
    title: {
      type: String
    },
    // 输入类型  text || textarea || password || number
    type: {
      type: String,
      value: 'text'
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ''
    },
    // 自动聚焦
    focus: {
      type: Boolean,
      value: false
    },
    // 输入框模式 normal || wrapped
    mode: {
      type: String,
      value: 'normal'
    },
    // 文字方向
    right: {
      type: Boolean,
      value: false
    },
    // 显示报错样式
    error: {
      type: Boolean,
      value: false
    },
    // 最大输入长度
    maxlength: {
      type: Number,
      value: 140
    },
    // 背景色
    bgColor: {
      type: String,
      value: '#fff'
    },
    // 是否显示底线
    border: Boolean,
    // 可以清空
    clearable: Boolean,
    // placeholder-style
    placeholderStyle: {
      type: String,
      value: 'color: #bbb;'
    },
  },

  data: {
    showClear: false
  },

  methods: {
    // 键盘输入
    onInput(e) {
      const val = e.detail.value.replace(/\s+/g, '');

      this.setData({
        value: val,
        showClear: val && val.length > 0
      })

      this.triggerEvent('input', e);
    },
    // 输入框聚焦
    onFocus(e) {
      const val = e.detail.value.replace(/\s+/g, '');
      this.setData({
        showClear: val && val.length > 0
      })

      this.triggerEvent('focus', e);
    },
    // 输入框失去焦点
    onBlur(e) {
      this.setData({
        showClear: false
      })
      this.triggerEvent('blur', e)
    },
    // bindconfirm 完成按钮
    onConfirm(e) {
      this.triggerEvent('confirm', e);
    },
    // 清空  必须用 bindtouchstart ，不然 bindblur 会比 bindtap 先触发
    onClear() {
      this.setData({
        value: '',
        showClear: false
      })

      this.triggerEvent('clear', '')
    },

  }
});
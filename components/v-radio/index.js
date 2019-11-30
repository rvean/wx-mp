Component({
  externalClasses: ['v-class'],
  relations: {
    '../v-radio-group/index': {
      type: 'parent'
    }
  },
  properties: {
    value: {
      type: String,
      value: ''
    },
    checked: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: '#2d8cf0'
    },
    bgColor: {
      type: String,
      value: '#fff'
    },
    // 选择框位置 左/右
    position: {
      type: String,
      value: 'left', //left right
    },
    border: Boolean,
  },

  data: {
    checked: true,
  },

  methods: {
    changeCurrent(current) {
      this.setData({
        checked: current
      });
    },
    radioChange() {
      if (this.data.disabled) return;
      const item = {
        current: !this.data.checked,
        value: this.data.value
      };
      const parent = this.getRelationNodes('../v-radio-group/index')[0];
      parent ? parent.emitEvent(item) : this.triggerEvent('change', item);
    },
  }
});
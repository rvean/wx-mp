function addNum(num1, num2) {
  let sq1, sq2, m;
  try {
    sq1 = num1.toString().split('.')[1].length;
  } catch (e) {
    sq1 = 0;
  }
  try {
    sq2 = num2.toString().split('.')[1].length;
  } catch (e) {
    sq2 = 0;
  }
  m = Math.pow(10, Math.max(sq1, sq2));
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
}

Component({
  externalClasses: ['v-class'],
  properties: {
    // default || middle || large
    size: String,
    // 输入框的值
    value: {
      type: Number,
      value: 1
    },
    // 最小值
    min: {
      type: Number,
      value: -Infinity
    },
    // 最大值
    max: {
      type: Number,
      value: Infinity
    },
    // 加减步数
    step: {
      type: Number,
      value: 1
    }
  },

  methods: {
    handleChangeStep(e, type) {
      const disabled = e.currentTarget.dataset.disabled;
      const step = this.data.step;
      let value = this.data.value;

      if (disabled) return;

      if (type === 'minus') {
        value = addNum(value, -step);
      } else if (type === 'plus') {
        value = addNum(value, step);
      }

      if (value < this.data.min || value > this.data.max) return;

      this.handleEmit(value, type);
    },
    // 减
    handleMinus(e) {
      this.handleChangeStep(e, 'minus');
    },
    // 加
    handlePlus(e) {
      this.handleChangeStep(e, 'plus');
    },
    // 输入框失焦
    handleBlur(e) {
      let value = e.detail.value;
      const {
        min,
        max
      } = this.data;

      if (!value) {
        setTimeout(() => {
          this.handleEmit(value);
        }, 16);
        return;
      }

      value = +value;
      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      }

      this.handleEmit(value);
    },
    handleEmit(value, type) {
      const data = {
        value: value
      };
      if (type) data.type = type;

      this.triggerEvent('change', data);
    }
  }
})
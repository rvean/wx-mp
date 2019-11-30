Component({
  externalClasses: ['v-class'],
  relations: {
    '../v-radio/index': {
      type: 'child',
      linked() {
        this.changeCurrent();
      },
      linkChanged() {
        this.changeCurrent();
      },
      unlinked() {
        this.changeCurrent();
      }
    }
  },
  properties: {
    current: {
      type: [Array, String],
      observer: 'changeCurrent'
    },
    // 单选/复选
    type: {
      type: String,
      value: 'radio'
    }
  },
  methods: {
    changeCurrent(val = this.data.current) {
      let items = this.getRelationNodes('../v-radio/index')
      let type = this.data.type
      const len = items.length

      if (type == 'radio' && len > 0) { // 单选
        items.forEach(item => {
          item.changeCurrent(val === item.data.value)
        })
      } else if (type == 'checkbox' && len > 0) { // 复选
        items.forEach(item => {
          item.changeCurrent(val.indexOf(item.data.value) !== -1)
        })
      }
    },
    emitEvent(current) {
      this.triggerEvent('change', current)
    }
  }
});
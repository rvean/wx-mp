Component({
  externalClasses: ['v-class'],

  relations: {
    './step': {
      type: 'child',
      linked() {
        this.updateCurrent()
      },
      linkChanged() {
        this.updateCurrent()
      },
      unlinked() {
        this.updateCurrent()
      }
    },
  },

  properties: {
    // 指定当前步骤，从 0 开始记数
    current: {
      type: Number,
      value: 0,
      observer: 'updateCurrent'
    },
    // step 样式，可选值为 vertical、horizontal
    direction: {
      type: String,
      value: 'horizontal'
    },
  },

  methods: {
    updateCurrent() {
      const elements = this.getRelationNodes('./step')
      const {
        current,
        direction
      } = this.data

      if (elements.length > 0) {
        elements.forEach((element, index) => {
          element.updateCurrent({
            length: elements.length,
            index,
            current,
            direction,
          })
        })
      }
    }
  }

})
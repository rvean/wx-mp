Component({
  properties: {
    items: {
      type: Array,
      value: []
    },
    name: {
      type: String,
      value: ''
    },
    checkedValue: {
      type: String,
      value: ''
    },
    activeColor: {
      type: String,
      value: '#ff4444'
    }
  },

  methods: {
    handleSelectChange(e) {
      this.triggerEvent('change', { value: e.detail.value });
    }
  }
})
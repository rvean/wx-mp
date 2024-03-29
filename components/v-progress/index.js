Component({
  properties: {
    percent: {
      type: [Number, String],
      value: 100
    },
    strokeWidth: {
      type: [Number, String],
      value: 16
    },
    activeLineColor: {
      type: Array,
      value: []
    },
    activeColor: {
      type: [String, Array],
      value: '#ffca49, #ffb262'
    },
    backgroundColor: {
      type: String,
      value: '#e5e5e5'
    },
    radius: {
      type: [Number, String],
      value: 15
    },
    // normal/active
    status: {
      type: String,
      value: 'normal'
    },
  },
  data: {},
  attached() {
    let activeColor = this.data.activeColor;

    if (!!~activeColor.indexOf(',')) {
      this.setData({
        activeLineColor: activeColor.split(',')
      });
    }
  }
})
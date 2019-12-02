// 引入地区数据
const CITYDATA = require('./region.js')

Component({
  options: {
    multipleSlots: true
  },
  properties: {
    target: {
      type: Array,
      value: [],
      observer: 'update'
    },
  },
  data: {
    value: [0, 0, 0], // 地区数组下标，用于查找选中的对应地区
    region: [], // 地区列表数据
  },

  attached() {
    let pl = Object.keys(CITYDATA)
    let cl = Object.keys(CITYDATA[pl[0]])
    let al = CITYDATA[pl[0]][cl[0]]

    this.setData({
      region: [pl, cl, al]
    })
  },

  methods: {
    // 根据省市选中下标
    update(newVal) {
      let rg0 = this.data.region[0]
      if (!newVal || newVal.length < 2 || !rg0.length) return;
      let province = newVal[0];
      let city = newVal[1];
      let area = newVal[2];

      // 省下标
      let idx0 = rg0.indexOf(province);
      if (idx0 < 0) return;

      // 市下标
      let rg1 = Object.keys(CITYDATA[province])
      let idx1 = rg1.indexOf(city);
      if (idx1 < 0) return;

      // // 区下标
      let rg2 = CITYDATA[province][city]
      let idx2 = rg2.indexOf(area);
      if (idx2 < 0) return;

      this.setData({
        value: [idx0, idx1, idx2],
        region: [rg0, rg1, rg2]
      })
    },
    // 确认
    bindchange(e) {
      const val = e.detail.value
      if (!val || val.length < 2) return;

      let rg = this.data.region
      let province = rg[0][val[0]]
      let city = rg[1][val[1]]
      let area = rg[2][val[2]]
      let region = [province, city, area]

      this.triggerEvent('change', {
        province,
        city,
        area,
        region
      })
    },
    // 改变列数据跟着改变
    bindcolumnchange(e) {
      let ed = e.detail
      if (ed.column === 2) return;

      let region0 = this.data.region[0]
      let eVal = ed.value
      let val0 = eVal
      let val1 = 0
      // 改变第一列
      let province = region0[eVal];
      let region1 = Object.keys(CITYDATA[province])
      let region2 = CITYDATA[province][region1[0]]
      // 改变第二列
      if (ed.column === 1) {
        let val = this.data.value
        province = region0[val[0]]
        region1 = Object.keys(CITYDATA[province])
        region2 = CITYDATA[province][region1[eVal]]
        val0 = val[0]
        val1 = eVal
      }

      this.setData({
        region: [region0, region1, region2],
        value: [val0, val1, 0]
      })
    },
  },
})
Component({
  externalClasses: ['v-class'],
  properties: {
    // 接收时间日期
    target: {
      type: String,
      observer: 'getFormat'
    },
    // 是否显示天数
    showDay: Boolean,
    // 倒计时格式
    format: Array,
    // 手动清除定时
    clearTimer: Boolean
  },
  data: {
    time: '', // 倒计时间
    resultFormat: [], // 实际格式
    changeFormat: false, // 是否自定义格式
  },
  // 组件移除清除定时
  detached() {
    clearInterval(this.timer);
  },
  methods: {
    // 获取时间格式
    getFormat() {
      const data = this.data;
      const format = data.format;
      const len = format.length;

      !data.showDay && data.resultFormat.push('');
      if (len >= 3) {
        for (let i = 0; i < len; i++) {
          if (data.resultFormat.length >= 4) break;
          format[i] && data.resultFormat.push(format[i].toString());
        }
        // 自定义时间格式
        (data.resultFormat.length >= 4) && (data.changeFormat = true);
      }

      this.init()
    },
    // 初始化 开始计时
    init() {
      const self = this;
      self.getCountTime();
      self.timer = setInterval(() => {
        self.getCountTime()
      }, 1000);
    },
    getCountTime() {
      const data = this.data;
      const fm = data.resultFormat;
      const target = data.target;
      // 判断接收的时间为 毫秒格式 / 日期格式  2020-02-02 12:12:12
      const _target = /^\d+$/.test(target) ? Number(target) : new Date(target.replace(/-/g, '/')).getTime();
      const gap_time = Math.ceil((_target - new Date().getTime()) / 1000);

      let result = '';
      let time = '00:00:00';
      let day = '00';

      if (gap_time > 0) {
        day = this.formatNum(parseInt(gap_time / 86400));
        let lastTime = gap_time % 86400;
        const hour = this.formatNum(parseInt(lastTime / 3600));
        lastTime = lastTime % 3600;
        const minute = this.formatNum(parseInt(lastTime / 60));
        const second = this.formatNum(lastTime % 60);

        time = data.changeFormat ? `${hour}${fm[1]}${minute}${fm[2]}${second}${fm[3]}` : `${hour}:${minute}:${second}`;

        data.clearTimer && clearInterval(this.timer);
      } else {
        clearInterval(this.timer);
        this.endCallback();
      }
      // 是否 显示天数
      if (data.showDay && data.changeFormat) {
        result = `${day}${fm[0]} ${time}`
      } else if (data.showDay && !data.changeFormat) {
        result = `${day}d ${time}`
      } else if (!data.showDay) {
        result = time
      }

      this.setData({
        time: result
      })
    },
    // 补零
    formatNum(num) {
      return num > 9 ? num : `0${num}`;
    },
    // 倒计时结束回调
    endCallback() {
      this.triggerEvent('callback', {});
    }
  }
});
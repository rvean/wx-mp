const defaultStatus = ['wait', 'process', 'finish', 'error']
const defaultIcon = 'success1'

Component({
  externalClasses: ['v-class'],

  relations: {
    './steps': {
      type: 'parent',
    },
  },

  properties: {
    // 指定状态，可选值为 wait、process、finish、error
    status: {
      type: String,
      value: '',
    },
    // 标题
    title: {
      type: String,
      value: '',
    },
    // 步骤的详情描述
    content: {
      type: String,
      value: '',
    },
    // 步骤图标
    icon: {
      type: String,
      value: '',
    },
  },

  data: {
    width: '100%',
    length: 1,
    index: 0,
    current: 0,
    direction: 'horizontal',
  },

  methods: {
    updateCurrent(opts = {}) {
      const width = opts.direction === 'horizontal' ? 100 / opts.length + '%' : '100%'
      const index = defaultStatus.indexOf(this.data.status)
      const hasIcon = opts.index < opts.current || this.data.icon
      const thumb = this.data.icon || defaultIcon
      const suffix = index !== -1 ? defaultStatus[index] : opts.index < opts.current ? 'finish' : opts.index === opts.current ? 'process' : ''
      const className = `v-step--${suffix}`
      const options = Object.assign({
        width,
        className,
        hasIcon,
        thumb,
      }, opts)

      this.setData(options)
    },
  },
  attached() {
    this.updateCurrent(this.data)
  },

})
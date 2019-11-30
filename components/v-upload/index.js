Component({
  properties: {
    // 最大图片张数，设置为 -1 的时不限制张数
    max: {
      type: Number,
      value: -1,
      observer: 'updated',
    },
    // 从相册选图时，最多可以选择的图片张数
    count: {
      type: Number,
      value: 9,
      observer: 'updated',
    },
    // original 原图，compressed 压缩图
    sizeType: {
      type: Array,
      value: ['original', 'compressed'],
    },
    // album 从相册选图，camera 使用相机
    sourceType: {
      type: Array,
      value: ['album', 'camera'],
    },
    // 上传地址
    url: {
      type: String,
      value: '',
    },
    // 文件对应的 key
    name: {
      type: String,
      value: 'file',
    },
    // HTTP 请求 Header, header 中不能设置 Referer
    header: {
      type: Object,
      value: {},
    },
    // HTTP 请求中其他额外的 form data
    formData: {
      type: Object,
      value: {},
    },
    // 默认的上传行为
    uploaded: {
      type: Boolean,
      value: true,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      value: false,
    },
    // 是否监听上传进度变化
    progress: {
      type: Boolean,
      value: false,
    },
    // 上传列表的内建样式，可选值为 text、picture
    listType: {
      type: String,
      value: 'text',
    },
    // 默认已经上传的文件列表，当 controlled 为 false 时才生效
    defaultFileList: {
      type: Array,
      value: [],
    },
    // 已经上传的文件列表，当 controlled 为 true 时才生效
    fileList: {
      type: Array,
      value: [],
      observer(newVal) {
        if (this.data.controlled) {
          this.setData({
            uploadFileList: newVal,
          })
        }
      },
    },
    // 是否受控
    controlled: {
      type: Boolean,
      value: false,
    },
    // 是否展示上传文件列表
    showUploadList: {
      type: Boolean,
      value: true,
    },
    // 是否展示删除图标
    showRemoveIcon: {
      type: Boolean,
      value: true,
    },
  },

  data: {
    uploadMax: -1,
    uploadCount: 9,
    uploadFileList: [],
  },

  methods: {
    /** 
     * 计算最多可以选择的图片张数
     */
    updated() {
      const {
        count,
        max
      } = this.data
      const {
        uploadMax,
        uploadCount
      } = this.calcValue(count, max)

      // 判断是否需要更新
      if (this.data.uploadMax !== uploadMax || this.data.uploadCount !== uploadCount) {
        this.setData({
          uploadMax,
          uploadCount,
        })
      }
    },
    /**
     * 计算最多可以选择的图片张数
     */
    calcValue(count, max) {
      const realCount = parseInt(count)
      const uploadMax = parseInt(max) > -1 ? parseInt(max) : -1
      let uploadCount = realCount

      // 限制总数时
      if (uploadMax !== -1 && uploadMax <= 9 && realCount > uploadMax) {
        uploadCount = uploadMax
      }

      return {
        uploadMax,
        uploadCount,
      }
    },
    /**
     * 从本地相册选择图片或使用相机拍照
     */
    onSelect() {
      const {
        uploadCount,
        uploadMax,
        sizeType,
        sourceType,
        uploaded,
        disabled,
        uploadFileList: fileList,
      } = this.data
      const {
        uploadCount: count
      } = this.calcValue(uploadCount, uploadMax - fileList.length)
      const success = (res) => {
        this.tempFilePaths = res.tempFilePaths.map((item) => ({
          url: item,
          uid: this.getUid()
        }))
        this.triggerEvent('before', { ...res,
          fileList
        })

        // 判断是否取消默认的上传行为
        if (uploaded) {
          this.uploadFile()
        }
      }

      // disabled
      if (disabled) return

      wx.chooseImage({
        count,
        sizeType,
        sourceType,
        success,
      })
    },
    /**
     * 上传文件改变时的回调函数
     * @param {Object} info 文件信息
     */
    onChange(info = {}) {
      if (!this.data.controlled) {
        this.setData({
          uploadFileList: info.fileList,
        })
      }

      this.triggerEvent('change', info)
    },
    /**
     * 开始上传文件的回调函数
     * @param {Object} file 文件对象
     */
    onStart(file) {
      const targetItem = {
        ...file,
        status: 'uploading',
      }

      this.onChange({
        file: targetItem,
        fileList: [...this.data.uploadFileList, targetItem],
      })
    },
    /**
     * 上传文件成功时的回调函数
     * @param {Object} file 文件对象
     * @param {Object} res 请求响应对象
     */
    onSuccess(file, res) {
      const fileList = [...this.data.uploadFileList]
      const index = fileList.map((item) => item.uid).indexOf(file.uid)

      if (index !== -1) {
        const targetItem = {
          ...file,
          status: 'done',
          res,
        }
        const info = {
          file: targetItem,
          fileList,
        }

        // replace
        fileList.splice(index, 1, targetItem)

        this.triggerEvent('success', info)

        this.onChange(info)
      }
    },
    /**
     * 上传文件失败时的回调函数
     * @param {Object} file 文件对象
     * @param {Object} res 请求响应对象
     */
    onFail(file, res) {
      const fileList = [...this.data.uploadFileList]
      const index = fileList.map((item) => item.uid).indexOf(file.uid)

      if (index !== -1) {
        const targetItem = {
          ...file,
          status: 'error',
          res,
        }
        const info = {
          file: targetItem,
          fileList,
        }

        // replace
        fileList.splice(index, 1, targetItem)

        this.triggerEvent('fail', info)

        this.onChange(info)
      }
    },
    /**
     * 监听上传进度变化的回调函数
     * @param {Object} file 文件对象
     * @param {Object} res 请求响应对象
     */
    onProgress(file, res) {
      const fileList = [...this.data.uploadFileList]
      const index = fileList.map((item) => item.uid).indexOf(file.uid)

      if (index !== -1) {
        const targetItem = {
          ...file,
          progress: res.progress,
          res,
        }
        const info = {
          file: targetItem,
          fileList,
        }

        // replace
        fileList.splice(index, 1, targetItem)

        this.triggerEvent('progress', info)

        this.onChange(info)
      }
    },
    /**
     * 上传文件，支持多图递归上传
     */
    uploadFile() {
      if (!this.tempFilePaths.length) return

      const {
        url,
        name,
        header,
        formData,
        disabled,
        progress
      } = this.data
      const file = this.tempFilePaths.shift()
      const {
        uid,
        url: filePath
      } = file

      if (!url || !filePath || disabled) return

      this.onStart(file)

      this.uploadTask[uid] = wx.uploadFile({
        url,
        filePath,
        name,
        header,
        formData,
        success: (res) => this.onSuccess(file, res),
        fail: (res) => this.onFail(file, res),
        complete: (res) => {
          delete this.uploadTask[uid]
          this.triggerEvent('complete', res)
          this.uploadFile()
        },
      })

      // 判断是否监听上传进度变化
      if (progress) {
        this.uploadTask[uid].onProgressUpdate((res) => this.onProgress(file, res))
      }
    },
    /**
     * 点击文件时的回调函数
     * @param {Object} e 参数对象
     */
    onPreview(e) {
      this.triggerEvent('preview', { ...e.currentTarget.dataset,
        fileList: this.data.uploadFileList
      })
    },
    /**
     * 点击删除图标时的回调函数
     * @param {Object} e 参数对象
     */
    onRemove(e) {
      const {
        file
      } = e.currentTarget.dataset
      const fileList = [...this.data.uploadFileList]
      const index = fileList.map((item) => item.uid).indexOf(file.uid)

      if (index !== -1) {
        const targetItem = {
          ...file,
          status: 'remove',
        }
        const info = {
          file: targetItem,
          fileList,
        }

        // delete
        fileList.splice(index, 1)

        this.triggerEvent('remove', { ...e.currentTarget.dataset,
          ...info
        })

        this.onChange(info)
      }
    },
    /**
     * 中断上传任务
     * @param {String} uid 文件唯一标识
     */
    abort(uid) {
      const {
        uploadTask
      } = this

      if (uid) {
        if (uploadTask[uid]) {
          uploadTask[uid].abort()
          delete uploadTask[uid]
        }
      } else {
        Object.keys(uploadTask).forEach((uid) => {
          if (uploadTask[uid]) {
            uploadTask[uid].abort()
            delete uploadTask[uid]
          }
        })
      }
    },
  },
  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行
   */
  created() {
    this.index = 0
    this.createdAt = Date.now()
    this.getUid = () => `v-upload--${this.createdAt}-${++this.index}`
    this.uploadTask = {}
    this.tempFilePaths = []
  },
  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执
   */
  attached() {
    const {
      defaultFileList,
      fileList,
      controlled
    } = this.data
    const uploadFileList = controlled ? fileList : defaultFileList

    this.setData({
      uploadFileList
    })
  },
  /**
   * 组件生命周期函数，在组件实例被从页面节点树移除时执行
   */
  detached() {
    this.abort()
  },
})
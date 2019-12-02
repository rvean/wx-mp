Page({
  data: {
    fileList: [{
        uid: 0,
        status: 'uploading',
        url: 'https://avatar.kancloud.cn/7c/bf0cbc15b49953900d3af5a6248954!large',
      },
      {
        uid: 1,
        status: 'done',
        url: 'https://avatar.kancloud.cn/7c/bf0cbc15b49953900d3af5a6248954!large',
      },
      {
        uid: 2,
        status: 'error',
        url: 'https://avatar.kancloud.cn/7c/bf0cbc15b49953900d3af5a6248954!large',
      }
    ],
  },
  onChange(e) {
    console.log('onChange', e)
    const {
      file
    } = e.detail
    if (file.status === 'uploading') {
      this.setData({
        progress: 0,
      })
      wx.showLoading()
    } else if (file.status === 'done') {
      this.setData({
        imageUrl: file.url,
      })
    }
  },
  onSuccess(e) {
    console.log('onSuccess', e)
  },
  onFail(e) {
    console.log('onFail', e)
  },
  onComplete(e) {
    console.log('onComplete', e)
    wx.hideLoading()
  },
  onProgress(e) {
    console.log('onProgress', e)
    this.setData({
      progress: e.detail.file.progress,
    })
  },
  onPreview(e) {
    console.log('onPreview', e)
    const {
      file,
      fileList
    } = e.detail
    wx.previewImage({
      current: file.url,
      urls: fileList.map((n) => n.url),
    })
  },
  onRemove(e) {
    const {
      file,
      fileList
    } = e.detail
    wx.showModal({
      content: '确定删除？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            fileList: fileList.filter((n) => n.uid !== file.uid),
          })
        }
      },
    })
  },
})
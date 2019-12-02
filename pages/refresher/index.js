import {
  $stopRefresh
} from '../../components/base/index'

Page({
  data: {
    items: [{
        title: '111111',
        content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      },
      {
        title: '222222',
        content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      }
    ]
  },
  onLoad() {},

  onPulling() {
    console.log('onPulling')
  },

  onRefresh() {
    console.log('onRefresh')

    setTimeout(() => {
      this.setData({
        items: [{
          title: '123',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        }, ...this.data.items],
      })

      $stopRefresh()
    }, 2000)
  },
})
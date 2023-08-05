// index.js
Page({
  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '和小鹿的游记'
        })
      }, 2000)
    })
    return {
      title: '和小鹿的游记',
      path: 'pages/home/index',
    }
  },
  onShareTimeline() {
    return {
      title: '和小鹿的游记'
    }
  },
  data: {
    background: [
        {
            text:'demo-text-1',
            imgUrl:'https://open-static.muji.com.cn/test/crm/resource/banner/202301/1675066823734.jpg'
        }, 
        {
            text:'demo-text-2',
            imgUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F6a2ddc65-d756-430a-b23b-238e7edee9cb%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693822122&t=4b19718b5fbaf125fb685c25207ea204'
        },
        {
            text:'demo-text-3',
            imgUrl:'https://img2.baidu.com/it/u=3406942807,1282342701&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800'
        }, 
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 200000,
    duration: 500
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})

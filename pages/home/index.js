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
  }
})

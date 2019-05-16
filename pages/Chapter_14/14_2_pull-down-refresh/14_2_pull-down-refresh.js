// pages/Chapter_14/14_2_pull-down-refresh/14_2_pull-down-refresh.js
Page({
  onPullDownRefresh() {
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    console.log('onPullDownRefresh', new Date())
  },

  stopPullDownRefresh() {
    wx.stopPullDownRefresh({
      complete(res) {
        wx.hideToast()
        console.log(res, new Date())
      }
    })
  }
})

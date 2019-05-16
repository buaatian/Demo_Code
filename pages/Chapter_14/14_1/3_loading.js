// pages/Chapter_14/14_1/3_loading.js
Page({
  showloading() {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 3000)
  },
})
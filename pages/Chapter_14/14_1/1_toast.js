// pages/Chapter_14/14_1/1_toast.js
Page({
  toast1Tap() {
    wx.showToast({
      title: '默认'
    })
  },

  toast2Tap() {
    wx.showToast({
      title: 'duration 3000',
      duration: 3000
    })
  },

  toast3Tap() {
    wx.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 5000
    })
  },

  hideToast() {
    wx.hideToast()
  }
})

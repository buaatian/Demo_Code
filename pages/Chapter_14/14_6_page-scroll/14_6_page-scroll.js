// pages/Chapter_14/14_6_page-scroll/14_6_page-scroll.js
Page({
  scrollToTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  scrollToBottom() {
    wx.pageScrollTo({
      scrollTop: 3000,
      duration: 300
    })
  }
})

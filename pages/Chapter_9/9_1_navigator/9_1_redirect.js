// pages/Chapter_9/9_1_navigator/9_1_redirect.js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      title: options.title
    })
  },
})
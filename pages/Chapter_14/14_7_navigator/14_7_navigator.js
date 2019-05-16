// pages/Chapter_14/14_7_navigator/14_7_navigator.js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad：页面加载")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady：页面初次渲染完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow：页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide：页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload：页面卸载")
  },
  navigateTo() {
    wx.navigateTo({ url: './14_7_navigator' })
  },

  navigateBack() {
    wx.navigateBack()
  },

  redirectTo() {
    wx.redirectTo({ url: './14_7_navigator' })
  },

  switchTab() {
    wx.switchTab({ url: '/pages/index/index' })
  },

  reLaunch() {
    wx.reLaunch({ url: '/pages/index/index' })
  }
})
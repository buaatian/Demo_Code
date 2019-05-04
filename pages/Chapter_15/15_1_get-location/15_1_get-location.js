// pages/Chapter_15/15_1_get-location/15_1_get-location.js
Page({
  data: {
    hasLocation: false,
  },
  getLocation() {
    const that = this
    wx.getLocation({
      success(res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          latitude:res.latitude,
          longitude:res.longitude
        })
      }
    })
  },
  clear() {
    this.setData({
      hasLocation: false
    })
  }
})

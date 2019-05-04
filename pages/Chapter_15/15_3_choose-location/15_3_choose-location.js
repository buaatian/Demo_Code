// pages/Chapter_15/15_3_choose-location/15_3_choose-location.js
Page({
  data: {
    hasLocation: false,
  },
  chooseLocation() {
    const that = this
    wx.chooseLocation({
      success(res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          longitude:res.longitude,
          latitude:res.latitude,
          locationAddress: res.address
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

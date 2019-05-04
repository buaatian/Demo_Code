// pages/Chapter_11/11_8_load-font/11_8_load-font.js
Page({
  data: {
    fontFamily: 'Bitstream Vera Serif Bold',
    loaded: false,
  },

  onLoad() {
    this.setData({
      loaded: false
    })
  },

  loadFontFace() {
    const self = this
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("https://mini.ecbc413.cn/Pacifico.ttf")',
      success(res) {
        console.log(res.status)
        self.setData({ loaded: true })
      },
      fail(res) {
        console.log(res.status)
      },
      complete(res) {
        console.log(res.status)
      }
    })
  },

  clear() {
    this.setData({ loaded: false })
  }
})

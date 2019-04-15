// pages/Chapter_10/10_1_request/10_1_request.js
const duration = 2000
Page({
  data:{
    data_from_server:"点击向服务器发起请求",
    loading:false
  },
  makeRequest() {
    const self = this
    self.setData({
      loading: true
    })
    wx.request({
      url: "https://mini.ecbc413.cn",
      data: {
        id:"001"
      },
      success(result) {
        self.setData({
          loading: false,
          data_from_server:result.data.name
        })
        console.log('request success', result)
      },

      fail({ errMsg }) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  }
})

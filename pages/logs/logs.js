//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function (options) {
    console.log("日志页加载", options)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow: function () {
    console.log("日志页显示")
  },
  onReady: function () {
    console.log("日志页渲染完成")
  },
  onHide: function () {
    console.log("日志页隐藏")
  },
  onUnload: function () {
    console.log("日志页卸载")
  }
})

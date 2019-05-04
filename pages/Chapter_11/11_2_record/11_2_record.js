// pages/Chapter_11/11_2_record/11_2_record.js
const recorder = wx.getRecorderManager()
recorder.onStart(function () {
  console.log("开始录音");
})
recorder.onStop(function (res) {
  console.log(res.tempFilePath)
})
Page({
  data: {
    recording: false,
  },
  startRecord() {
    recorder.start();
    this.setData({
      recording: true
    })
  },
  stopRecord() {
    this.setData({recording:false})
    recorder.stop();
  }
})

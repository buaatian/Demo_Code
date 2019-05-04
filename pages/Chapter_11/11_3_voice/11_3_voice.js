// pages/Chapter_11/11_3_voice/11_3_voice.js
const recorder = wx.getRecorderManager()
const voice = wx.createInnerAudioContext()
recorder.onStart(function () {
  console.log("开始录音");
})
Page({
  data: {
    recording: false,
    playing: false,
    hasRecord: false,
  },
  startRecord() {
    recorder.start();
    this.setData({
      recording: true
    })
  },
  stopRecord() {
    const self  = this;
    recorder.stop();
    recorder.onStop(function (res) {
      console.log(res.tempFilePath)
      self.setData({
        recording:false,
        hasRecord: true,
        tempFilePath: res.tempFilePath,
      })
    })
  },
  playVoice() {
    const self = this;
    voice.src = this.data.tempFilePath;
    voice.play();
    voice.onPlay(function(){
      console.log("开始播放");
      self.setData({ playing: true })
    })
  },
  pauseVoice() {
    const self = this;
    voice.pause();
    voice.onPause(function(){
      console.log("暂停播放");
      self.setData({
        playing: false
      })
    });
  },
  stopVoice() {
    const self = this;
    voice.stop();
    voice.onStop(function(){
      console.log("停止播放");
      self.setData({
        playing: false
      })
    });
  },
  clear() {
    voice.stop();
    this.setData({
      playing: false,
      hasRecord: false,
      tempFilePath: '',
    })
  }
})
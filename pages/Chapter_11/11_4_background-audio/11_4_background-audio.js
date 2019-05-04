// pages/Chapter_11/11_4_background-audio/11_4_background-audio.js
const audio = wx.getBackgroundAudioManager()
audio.onError((res) => {
  console.log(res.errCode)
})
Page({
  onReady() {
    const self = this;
    if(audio.paused){
      this.setData({
        playing:true
      })
    }else{
      this.setData({
        playing:false
      })
    }
    audio.onTimeUpdate(() => {
      self.setData({
        playTime: audio.currentTime
      })
    }),
    audio.onStop(() => {
      console.log("音乐停止")
      self.setData({
        playing: false,
        playTime: 0,
      })
    }),
    audio.onPause(() => {
      console.log("音乐暂停")
      self.setData({
        playing: false
      })
    }),
    audio.onPlay(() => {
      console.log("音乐播放")
      self.setData({
        playing: true,
      })
    }),
    audio.onCanplay(() => {
      self.setData({
        length: audio.duration
      })
    })
  },
  data: {
    playing: false,
    playTime:0,
    length: 0,
  },
  play() {
    console.log("点击了开始播放按钮")
    audio.title = '此时此刻'
    audio.epname = '此时此刻'
    audio.singer = '许巍'
    audio.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    audio.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    audio.play();  
  },
  seek(e) {
    audio.seek(e.detail.value)
  },
  pause() {
    audio.pause();
  },
  stop() {
    audio.stop()
  },
})

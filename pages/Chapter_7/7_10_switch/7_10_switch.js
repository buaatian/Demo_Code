// pages/Chapter_7/7_10_switch/7_10_switch.js
Page({
  switch1Change(e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switch2Change(e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  }
})
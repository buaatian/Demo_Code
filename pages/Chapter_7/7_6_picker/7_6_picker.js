// pages/Chapter_7/7_6_picker/7_6_picker.js
Page({
  data: {
    array: ['中国', '美国', '巴西', '日本'],
    index: 0,
    date: '2019-05-01',
    time: '12:01'
  },

  bindPickerChange(e) {
    console.log('地区选择器发生改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  bindDateChange(e) {
    console.log('日期选择器发生改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange(e) {
    console.log('时间选择器发生改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  }
})

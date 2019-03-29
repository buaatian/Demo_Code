// pages/Chapter_7/7_8_radio/7_8_radio.js
Page({
  data: {
    items: [
      { value: 'USA', name: '美国' },
      { value: 'CHN', name: '中国', checked: 'true' },
      { value: 'BRA', name: '巴西' },
      { value: 'JPN', name: '日本' },
      { value: 'ENG', name: '英国' },
      { value: 'FRA', name: '法国' },
    ]
  },

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
})
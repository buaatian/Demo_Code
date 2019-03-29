// pages/Chapter_7/7_9_slider/7_9_slider.js
const pageData = { }
for (let i = 1; i < 4; ++i) {
  (function (index) {
    pageData['slider' + index + 'change'] = function (e) {
      console.log('slider' + index + '发生change事件，携带值为', e.detail.value)
    }
  }(i))
}
Page(pageData)
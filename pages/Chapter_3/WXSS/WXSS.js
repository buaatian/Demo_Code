// pages/Chapter_3/WXSS/WXSS.js
Page({
  data: {
    colorArray: ["#1AAD19", "#2782D7", "#F1F1F1"],
  },
  changeColor:function() {
    const length = this.data.colorArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.colorArray[x]
      this.data.colorArray[x] = this.data.colorArray[y]
      this.data.colorArray[y] = temp
    }
    this.setData({
      colorArray: this.data.colorArray
    })
  }
})
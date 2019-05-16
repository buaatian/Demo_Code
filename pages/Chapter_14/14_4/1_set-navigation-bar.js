// pages/Chapter_14/14_4/1_set-navigation-bar.js
Page({
  data: {
    radioItems: [{
        name: '黑色：#000000',value: '#000000',checked: true
      },
      {
        name: '白色：#ffffff',value: '#ffffff'
      }
    ],
  },
  radioChange: function(e) {
    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }
    this.setData({
      radioItems: radioItems
    });
  },
  setNaivgationBarTitle(e) {
    const title = e.detail.value.title
    const front_color = e.detail.value.front_color
    const background_color = e.detail.value.background_color
    console.log(title, front_color, background_color)
    wx.setNavigationBarTitle({
      title,
      success() {
        console.log('setNavigationBarTitle success')
      },
      fail(err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
    })
    wx.setNavigationBarColor({
      frontColor: front_color,
      backgroundColor: background_color,
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      },
      success() {
        console.log('setNavigationBarColor success')
      },
      fail(err) {
        console.log('setNavigationBarColor fail, err is', err)
      }
    })
  }
})
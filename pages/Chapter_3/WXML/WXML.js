// pages/Chapter_3/WXML/WXML.js
Page({
  data: {
    array:[1],
    name:'MINA'
  },
  addNewMultiplier:function(){
    this.setData({
      array:[this.data.array[this.data.array.length-1]+1]
    })
  }
})
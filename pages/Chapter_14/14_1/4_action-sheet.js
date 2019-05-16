// pages/Chapter_14/14_1/4_action-sheet.js
Page({
  actionSheetTap() {
    wx.showActionSheet({
      itemList: ['item1', 'item2', 'item3', 'item4'],
      success(e) {
        console.log(e.tapIndex)
      }
    })
  }
})
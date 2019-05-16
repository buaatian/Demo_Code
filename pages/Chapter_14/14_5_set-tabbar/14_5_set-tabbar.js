// pages/Chapter_14/14_5_set-tabbar/14_5_set-tabbar.js
const defaultTabBarStyle = {
  color: '#7A7E83',
  selectedColor: '#3cc51f',
  backgroundColor: '#ffffff',
}

const defaultItemName = '设置tabbar'

Page({
  data: {
    hasSetTabBarBadge: false,
    hasShownTabBarRedDot: false,
    hasCustomedStyle: false,
    hasCustomedItem: false,
    hasHiddenTabBar: false,
  },
  setTabBarBadge() {
    if (this.data.hasSetTabBarBadge) {
      this.removeTabBarBadge()
      return
    }
    this.setData({
      hasSetTabBarBadge: true
    })
    wx.setTabBarBadge({
      index: 1,
      text: '1',
    })
  },

  removeTabBarBadge() {
    this.setData({
      hasSetTabBarBadge: false
    })
    wx.removeTabBarBadge({
      index: 1,
    })
  },

  showTabBarRedDot() {
    if (this.data.hasShownTabBarRedDot) {
      this.hideTabBarRedDot()
      return
    }
    this.setData({
      hasShownTabBarRedDot: true
    })
    wx.showTabBarRedDot({
      index: 1
    })
  },

  hideTabBarRedDot() {
    this.setData({
      hasShownTabBarRedDot: false
    })
    wx.hideTabBarRedDot({
      index: 1
    })
  },

  showTabBar() {
    this.setData({ hasHiddenTabBar: false })
    wx.showTabBar()
  },

  hideTabBar() {
    if (this.data.hasHiddenTabBar) {
      this.showTabBar()
      return
    }
    this.setData({ hasHiddenTabBar: true })
    wx.hideTabBar()
  },

  customStyle() {
    if (this.data.hasCustomedStyle) {
      this.removeCustomStyle()
      return
    }
    this.setData({ hasCustomedStyle: true })
    wx.setTabBarStyle({
      color: '#FFF',
      selectedColor: '#1AAD19',
      backgroundColor: '#000000',
    })
  },

  removeCustomStyle() {
    this.setData({ hasCustomedStyle: false })
    wx.setTabBarStyle(defaultTabBarStyle)
  },

  customItem() {
    if (this.data.hasCustomedItem) {
      this.removeCustomItem()
      return
    }
    this.setData({ hasCustomedItem: true })
    wx.setTabBarItem({
      index: 1,
      text: 'new text'
    })
  },

  removeCustomItem() {
    this.setData({ hasCustomedItem: false })
    wx.setTabBarItem({
      index: 1,
      text: defaultItemName
    })
  }
})


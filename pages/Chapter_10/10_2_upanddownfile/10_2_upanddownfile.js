// pages/Chapter_10/10_2_upanddownfile/10_2_upanddownfile.js
Page({
  chooseImage() {
    const self = this

    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success(res) {
        console.log('chooseImage success, temp path is', res.tempFilePaths[0])

        const imageSrc = res.tempFilePaths[0]

        wx.uploadFile({
          url: "https://mini.ecbc413.cn/index.php/index/Index/upload",
          filePath: imageSrc,
          name: 'image',
          success(res) {
            console.log('uploadImage success, res is:', res)

            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1000
            })

            self.setData({
              imageSrc
            })
          },
          fail({ errMsg }) {
            console.log('uploadImage fail, errMsg is', errMsg)
          }
        })
      },

      fail({ errMsg }) {
        console.log('chooseImage fail, err is', errMsg)
      }
    })
  },
  downloadImage() {
    const self = this

    wx.downloadFile({
      url: "https://mini.ecbc413.cn/index.php/index/Index/download",
      success(res) {
        console.log('downloadFile success, res is', res)

        self.setData({
          imageDownloadSrc: res.tempFilePath
        })
      },
      fail({ errMsg }) {
        console.log('downloadFile fail, err is:', errMsg)
      }
    })
  }
})

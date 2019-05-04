// pages/Chapter_15/15_4_map-control/15_4_map-control.js
Page({
  onReady(e) {
    this.mapCtx = wx.createMapContext('map')
  },
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id:1,
      latitude: 23.099994,
      longitude: 113.324520,
    },{
      id:2,
      latitude:23.10229,
      longitude:113.3345211,
    },{
      id:3,
      latitude: 23.00229,
      longitude: 113.3345211
    }
    ],
  },
  getCenterLocation(){
    this.mapCtx.getCenterLocation({
      success(res) {
        console.log("当前地图中心地点的经度是：", res.longitude, "纬度是：", res.latitude)
      }
    }) 
  },
  getRegion(){
    this.mapCtx.getRegion({
      success(res){
        console.log("当前视野范围西南角的经纬度是：", res.southwest, "东北角的经纬度是：", res.northeast)
      }
    })
  },
  getScale(){
    this.mapCtx.getScale({
      success(res){
        console.log("当前地图的缩放值为：", res.scale)
      }
    })
  },
  includePoints(){
    this.mapCtx.includePoints({
      padding:[10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      },{
        latitude: 23.099994,
        longitude: 113.324520,
      }]
    })
  },
  moveToLocation(){
    this.mapCtx.moveToLocation()
  },
  translateMarker(){
    this.mapCtx.translateMarker({
      markerId:1,
      destination: { longitude: 113.325420, latitude: 23.099994},
      autoRotate:true,
    })
  }
})

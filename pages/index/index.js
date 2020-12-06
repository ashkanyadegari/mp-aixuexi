//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  goToShow: function(event) {
    const id = event.currentTarget.dataset.id
    console.log(event)
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let page = this
    wx.request({
      url: getApp().globalData.host + 'api/v1/courses',
      success(res){
        console.log(res.data.courses)
        const courses = res.data.courses
        page.setData({courses})
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

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
  
  getUserInfo: function (event) {
    console.log(event)
    app.globalData.userInfo = event.detail.userInfo
    console.log(app.globalData.userInfo)
    this.setData({
      userInfo: event.detail.userInfo
    })
    console.log(this.data.userInfo)
    wx.switchTab({
      url: '/pages/profile/profile',
    })
    const params = {
      avatar: this.data.userInfo.avatarUrl,
      name: this.data.userInfo.nickName
    }
    let page = this
    wx.request({
      url: app.globalData.host + `api/v1/users/${app.globalData.user.id}`,
      data: params,
      method: 'PUT',
      success: (res) =>{
        console.log(res)
        app.globalData.user = res.data.user
        const user = app.globalData.user
        this.setData({user})
      }

    })
  },
  
  goToShow: function(event) {
    const id = event.currentTarget.dataset.id
    console.log(event)
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
    const params = {
      user_id: getApp().globalData.user.id,
      course_id: id
    }
    wx.request({
      url: app.globalData.host + 'api/v1/joincourse',
      method: 'POST',
      data: params,
      success(res){
        console.log(res)
      }
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

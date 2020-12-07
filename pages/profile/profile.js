// pages/profile/profile.js
let app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    loggedIn: false,
  },

  logIn: function() {
    console.log(this.data)
    this.setData({userInfo: getApp().globalData.userInfo})
    this.setData({loggedIn: true})
    this.setData({activeTab:0})
  },


  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo
  //   })
  // },

  goToShow: function() {
    wx.navigateTo({
      url: '/pages/show/show?id=27',
    })
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

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const user_id = app.globalData.user.id
    const params = {
      user_id: user_id
    }
    wx.request({
      url: app.globalData.host + 'api/v1/getusercourses',
      data: params,
      method: 'GET',
      success: (res) => {
        console.log(res.data)
        const courses = res.data
        this.setData(courses)
      }
    })

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    const params = {
      avatar: getApp().globalData.user.avatar,
      name: getApp().globalData.user.name
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
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
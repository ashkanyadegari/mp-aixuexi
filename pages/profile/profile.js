// pages/profile/profile.js
let app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {

  },

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
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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
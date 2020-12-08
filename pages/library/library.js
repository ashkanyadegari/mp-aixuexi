// pages/library/library.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  inputTyping: function(event) {
    this.setData({
      inputVal: event.detail.value
    });
  },
  search: function(event) {
    console.log(event.detail.value)
    let page = this
    const query = event.detail.value
    wx.request({
      url: `http://localhost:3000/api/v1/courses?query=${query}`,
      success(res) {
        console.log('success?', res)
        const courses = res.data.courses
        page.setData({courses})
      }
    })
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
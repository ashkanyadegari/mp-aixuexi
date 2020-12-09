// pages/library/library.js
let app = getApp()
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
      url: getApp().globalData.host + `api/v1/courses?query=${query}`,
      success(res) {
        console.log('success?', res)
        const courses = res.data.courses
        page.setData({courses})
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
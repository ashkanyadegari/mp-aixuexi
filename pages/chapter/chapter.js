// pages/chapter/chapter.js
let app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)
    const id = options.id
    let page = this

    wx.request({
      url: getApp().globalData.host + `/api/v1/chapters/${id}`,
      method: 'GET',
      success(res){
        console.log(res.data)
        const chapter = res.data
        page.setData(chapter)

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
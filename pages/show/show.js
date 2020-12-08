// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {
    wechat: false,
    video: "https://lewagon.oss-cn-beijing.aliyuncs.com/videoplayback.mp4"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options.id)
    let id = 37
    if (options.id == undefined) {
      id = 37
    } else {
      id = options.id
    }
    let page = this
    
    wx.request({
      url: getApp().globalData.host + `api/v1/courses/${id}`,
      success(res){
        console.log(res.data)
        const course = res.data
        page.setData(course)
      }
    })

  },

  goToQuiz: function(event) {
    console.log(event)
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/quiz/quiz?id=${id}`,
    })

  },

  goToShow: function() {
    wx.switchTab({
      url: '/pages/index/index',
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
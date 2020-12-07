// pages/result/result.js
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

    const params = {user_id: getApp().globalData.user.id, course_id: options.course}
    this.setData({course_id: options.course})
    let page = this 
    wx.request({
      url: getApp().globalData.host + '/api/v1/useranswer',
      data: params,
      method: 'GET',
      success(res){
        console.log(res)
        const results = res.data
        page.setData(results)

      }
    })

  },

  goToCourse: function(event){
    console.log(event)
    const id = event.currentTarget.dataset.id
    wx.reLaunch({
      url: `/pages/show/show?id=${id}`,
    })
  },

  goToHome: function(){
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
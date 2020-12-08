// pages/statistics/statistics.js
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

  },

  formSubmit: function(event) {
    console.log(event.detail.value.company)
    const q = event.detail.value.company
    const user = getApp().globalData.user.id
    const params = {
      code: q,
      user: user
    }

    wx.request({
      url: getApp().globalData.host + 'api/v1/getcompany',
      data: params,
      method: 'GET',
      success(res){
        console.log(res)
        const compId = res.data.company.id
        getApp().globalData.user.company_id = compId
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

    if (getApp().globalData.user.company_id !== null){
      let page = this
      const id = getApp().globalData.user.company_id
      const params = {
        company_id: id
      }
      wx.request({
        url: getApp().globalData.host + 'api/v1/getcolleagues',
        data: params,
        method: 'GET',
        success(res) {
          console.log(res)
          const users = res.data.users
          page.setData({users})
        }
      })
    }

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
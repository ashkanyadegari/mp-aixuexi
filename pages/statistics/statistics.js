// pages/statistics/statistics.js
import event from '../../utils/event'

Page({
  data: {

  },

  onShow: function (options) {
    this.setPageData()
    event.on("hasUserId", this, this.setPageData)
  },

  onHide: function(){
    console.log("im on hide")
  },

  formSubmit: function(event) {
    let page = this
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
      success: (res) => {
        console.log(res)
        const compId = res.data.company.id
        getApp().globalData.user.company_id = compId

        this.setPageData()
      }
    })
  },

  setPageData: function () {
    console.log("im in setPageData!!")
    let page = this
    let user = getApp().globalData.user.id
    const params = {
      user_id: user
    }
    wx.request({
      url: getApp().globalData.host + '/api/v1/userstats',
      data: params,
      method: 'GET',
      success(res){
        console.log("checking stat onshow", res)
        const stats = res.data.data
        page.setData(stats)
      }
    })

    if (getApp().globalData.user.company_id !== null){
      console.log("company id != null", getApp().globalData.user.company_id)
      let page = this
      const id = getApp().globalData.user.company_id
      const params = {
        company_id: id
      }
      page.setData({
        company_id: id
      })
      wx.request({
        url: getApp().globalData.host + 'api/v1/getcolleagues',
        data: params,
        method: 'GET',
        success(res) {
          console.log(res)
          const users = res.data.users
          page.setData({users})
          wx.setStorageSync('company_id', users[0].company_id)
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
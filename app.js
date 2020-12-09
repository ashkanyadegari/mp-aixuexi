//app.js
import event from 'utils/event'

App({
  onLaunch: function () {
    const host = this.globalData.host
    console.log('beginning login')
    wx.showLoading({
      
    })
    wx.login({
      success: (res) => {
        console.log(res)
      // insert next code here
      wx.request({
        url: host + 'login',
        method: 'post',
        data: {
          code: res.code
        },
      // insert next code here
      success: (res) => {
        console.log("i have user id!", res)
        this.globalData.user = res.data.user
        wx.hideLoading({
          success: (res) => {},
        })
        wx.setStorageSync('company_id', this.globalData.user.company_id)
        event.emit("hasUserId")
      }
      })
      }
    })
  },
  
  globalData: {
     host: 'http://localhost:3000/',
  //  host : 'https://aixuexi.wogengapp.cn/',
   // ## place holder for dooku server ##
  }
})
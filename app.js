//app.js
App({
  onLaunch: function () {
    const host = this.globalData.host
    console.log('beginning login')
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
        console.log(res)
        this.globalData.user = res.data.user
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
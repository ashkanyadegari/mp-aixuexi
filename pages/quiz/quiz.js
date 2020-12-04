// pages/quiz/quiz.js
Page({

  /**
   * Page initial data
   */
  data: {
    currentQuestionId: 0,
    answers: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    let page = this
    let params = {course_id: 8 }
    wx.request({
      url: 'http://localhost:3000/api/v1/questions/',
      method: 'GET',
      data: params,
      success(res){
        console.log(res.data)
        const questions = res.data
        console.log(questions)
        page.setData(questions)
      }
    })
  },

  chooseAnswer: function(event){
    const choiceId = event.currentTarget.dataset.choiceId
    const questionId = event.currentTarget.dataset.questionId
    const userId = getApp().globalData.user.id
    const currentAnswers = this.data.answers
    const answer = {"user_id": userId, "question_id": questionId, "choice_id": choiceId}
      function search(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].question_id === nameKey) {
                return true;
            }
        }
    }
    if (search(questionId, currentAnswers)) {
      const myanswer = currentAnswers.find((element) => element.question_id === questionId)
      myanswer.choice_id = choiceId
      console.log(this.data.answers)
    } else {
    this.setData({
      answers: [...currentAnswers, answer]
    })
    console.log(this.data.answers)
    }
  },

  next: function(){
    this.setData({
      currentQuestionId: this.data.currentQuestionId + 1,
    })
    console.log(this.data.currentQuestionId)
  },

  back: function(){
    this.setData({
      currentQuestionId: this.data.currentQuestionId - 1,
    })
    console.log(this.data.currentQuestionId)  
  },

  submitQuiz: function(){
    if (this.data.answers.length < this.data.questions.length ) {
      console.log("You havent filled in all the answers")
    } else {
      console.log("Submitted")
      console.log(this.data.answers)
      const ans = this.data.answers
      wx.request({
        url: 'http://localhost:3000/api/v1/useranswer',
        method: 'POST',
        data: { answer: ans },
        success(res){
          console.log(res)

          wx.navigateTo({
            url: `/pages/result/result?course=8`,
          })
        }
      })
    }
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
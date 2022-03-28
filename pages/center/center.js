// pages/center/center.js
const app = getApp()
const examrecord = wx.cloud.database().collection('examrecord')
var openid = wx.getStorageSync("openid");
Page({
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
     
      },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        /**
         * 获取用户信息
         */
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      examrecord.where({_openid:openid
      }).get().then(sco =>{
      console.log('考试数据',sco)
      let user_score = sco.data[0].score
      console.log('考试记录获取的考试数据',user_score)
     this.setData({
       user_score
     })
    })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
     onLoad: function (options){
      
      console.log("openid："+openid);
      // 获取用户信息
        var that = this
        console.log(app.globalData.userInfo)
          this.setData({
            username:app.globalData.userInfo.nickName,
            face:app.globalData.userInfo.avatarUrl
          })
      // 设置延时
      setTimeout(function () {
        console.log(openid)
        that.setData({
          myOpenid: openid
        })
      },2000)
      
    }
     
})
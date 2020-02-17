//index.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database()
const _ = db.command
const recordsNum = app.globalData.recordsNum

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    alphabets: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L', 'M', 'N', 'O',
      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Z'
    ],
    randomIsm: {},
    randomIsm_: [],
    zh: false,
    showHint: true
  },

  //事件处理函数
  onRandom: function() {
    var that = this
    var randomNo = Math.floor((Math.random() * recordsNum));

    db.collection('isms').where({
        index: _.eq(randomNo)
      })
      .get({
        success: function(res) {
          that.setData({
            randomIsm: res.data[0]
          });
        }
      })
  },

  switchLang: function() {
    this.setData({
      zh: !this.data.zh
    })
  },

  // getRecordsNum : function(){
  //   var that = this
  //   wx.cloud.database().collection('isms').count({
  //     success: function (res) {
  //       console.log(res.total)
  //       that.setData({
  //         recordsNum: res.total
  //       })
  //     }
  //   })
  // },

  onLoad: function() {
    this.onRandom();
    this.setData({
      showHint: app.globalData.showHint
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
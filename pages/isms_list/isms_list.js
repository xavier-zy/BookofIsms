// pages/isms_list/isms_list.js
var wordsData = require('../../data/words.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    position: '',
    dataList: [],
    alphabets: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L', 'M', 'N', 'O',
      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Z'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const data = wordsData.words;
    this.setData({
      dataList: data,
      position: options.position
    });

    if (this.data.position == 'W-Z') {
      const query = this.createSelectorQuery();
      query.select('#Z').boundingClientRect();
      query.selectViewport().scrollOffset();
      query.exec((res) => {
        if (res[0] && res[1]) {
          wx.pageScrollTo({
            scrollTop: res[0].top + res[1].scrollTop,
            duration: 300,
            fail: function() {
              console.log("fail")
            },
            success: function() {
              console.log("success")
            }
          });
        }
      })
    } else {
      const query = this.createSelectorQuery();
      query.select('#' + this.data.position).boundingClientRect();
      query.selectViewport().scrollOffset();
      query.exec((res) => {
        if (res[0] && res[1]) {
          wx.pageScrollTo({
            scrollTop: res[0].top + res[1].scrollTop,
            duration: 300,
            fail: function() {
              console.log("fail")
            },
            success: function() {
              console.log("success")
            }
          });
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
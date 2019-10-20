// pages/isms_list/isms_list.js
var jsonData = require('../../data/Isms2.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    position: '',
    dataList: [],
    countList: [],
    alphabets: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L', 'M', 'N', 'O',
      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Z'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      position: options.position
    });

    var word_count = [];
    var words = [];
    const data = jsonData.isms;

    var count = 0
    words.push(data[0].word);
    for (var i = 1; i < data.length; i++) {
      words.push(data[i].word);
      if (data[i].word[0] == data[i - 1].word[0]) {
        count++;
      } else {
        word_count.push(count + 1);
        count = 0;
      }
    };
    word_count.push(count + 1);

    var data_list = new Array();
    var temp = 0;

    word_count.forEach((cnt, index) => {
      data_list[index] = new Array(words.slice(temp, cnt + temp));
      temp += cnt;
    });

    this.setData({
      countList: word_count,
      dataList: data_list
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
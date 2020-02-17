// pages/isms/isms.js
import event from '../../utils/event'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeName: '1',
    show: false,
    alphabets: ['*', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L', 'M', 'N', 'O',
      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W-Z'
    ],
    showGrid: true,
    position: '',
    language: {},
  },

  showGrid(e) {
    this.setData({
      showGrid: e.detail
    });
  },

  showPopup() {
    this.setData({
      show: true
    });
  },

  toListPage(event){
    wx.navigateTo({
      url: '../isms_list/isms_list?position=' + event.target.id,
    })
    this.setData({
      showGrid: false,
      position: event.target.id
    });
  },

  onChange(event) {
    this.setData({
      activeName: event.detail,
    });
  },

  setLanguage() {
    this.setData({
      language: wx.T.getLanguage()
    });
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setLanguage();	// (1)
    event.on("languageChanged", this, this.setLanguage); // (2)
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
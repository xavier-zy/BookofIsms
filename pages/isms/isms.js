// pages/isms/isms.js
var jsonData = require('../../data/Isms2.js');

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
    position: ''
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
    console.log(event.target.id);
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var temp = [];
    jsonData.isms.slice(0, 20).forEach(function(item, index) {
      temp.push(item.word);
    });
    this.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      dataList: jsonData.isms.slice(0, 20),
      adapterSource: temp
    });

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
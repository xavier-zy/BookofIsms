// pages/isms/isms.js
var jsonData = require('../../data/Isms2.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeName: '1',
    show: false,
    adapterSource: [],
    bindSource: [],
    showSuggest: false,
    alphabets: ['*', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L', 'M', 'N', 'O',
      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W-Z'
    ],
    value: '',
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

  onClear() {
    this.setData({
      showSuggest: false
    });
  },

  onChange(event) {
    this.setData({
      activeName: event.detail,
    });
  },

  onInput(event) {
    this.setData({
      value: event.detail,
    });
    var prefix = event.detail //用户实时输入值
    var newSource = [] //匹配的结果
    if (prefix.length >= 2) {
      prefix = prefix.toLowerCase();
      prefix = prefix.replace(prefix[0], prefix[0].toUpperCase());
      this.data.adapterSource.forEach(function(word) {
        if (word.indexOf(prefix) != -1) {
          newSource.push(word)
        }
      })
    }

    if (newSource.length != 0) {
      this.setData({
        bindSource: newSource,
        showSuggest: true
      })
    } else {
      this.setData({
        bindSource: [],
        showSuggest: false
      })
    }
  },

  itemtap: function(event) {
    this.setData({
      value: event.target.id,
      bindSource: [],
      showSuggest: false
    })
  },

  onSearch() {
    console.log(this.data.value);
    this.setData({
      showSuggest: false,
      value: ''
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
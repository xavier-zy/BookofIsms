//index.js
//获取应用实例
var wordsData = require('../../data/words.js');
var explainsData = require('../../data/explains.js');

const app = getApp()

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
    randomWord: {}
  },
  //事件处理函数
  onRandom: function() {
    var randomNo = Math.floor((Math.random() * 24));
    var data = explainsData.explains;
    var letter = this.data.alphabets[randomNo];
    var words = wordsData.words;

    var randomNo_ = Math.floor((Math.random() * words[letter].length));
    var word = words[letter][randomNo_]

    this.setData({
      randomWord: {
        "word": word,
        "explain": data[letter][word]
      }
    });
  },
  onLoad: function () {
    this.onRandom();
  }
})

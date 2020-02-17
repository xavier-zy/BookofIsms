// pages/components/search/search.js
var wordsData = require('../../../data/words.js');

const db = wx.cloud.database()
const _ = db.command

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    word: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: '',
    showSuggest: false,
    bindSource: [],
    adapterSource: {},
    showCard: false,
    result: {}
  },

  lifetimes: {
    attached: function() {
      this.setData({
        adapterSource: wordsData.words,
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSearch() {
      // const data_ = explainsData.explains;

      if (this.data.value == '') {
        this.setData({
          showCard: false
        })
      }

      var word = this.data.value;
      try {
        word = word.replace(word[0], word[0].toUpperCase());
      } catch (err) {
        wx.showToast({
          title: '请重新输入',
          icon: 'none',
          image: '../../data/failure.png',
          duration: 1000
        })
      }

      // var alphabet = word[0];
      var that = this
      db.collection('isms').where({
          word: _.eq(word)
        })
        .get({
          success: function(res) {
            console.log(res.data.length == 0)
            if (res.data.length == 0) {
              wx.showToast({
                title: '请重新输入',
                icon: 'none',
                image: '../../data/failure.png',
                duration: 1000
              })
            } else {
              that.setData({
                result: res.data[0],
                showSuggest: false,
                value: '',
                showCard: true
              })
            }
          },
          fail: function() {
            wx.showToast({
              title: '没有结果',
              icon: 'none',
              image: '../../data/failure.png',
              duration: 1000
            })
          }
        })
    },

    onInput(event) {
      this.setData({
        value: event.detail,
      });
      var prefix = event.detail //用户实时输入值
      var valid_prefix = prefix.match(/[A-Za-z]+/);
      var newSource = [] //匹配的结果
      if (valid_prefix != null && valid_prefix[0].length >= 2) {
        prefix = prefix.trim();
        prefix = prefix.toLowerCase();
        prefix = prefix.replace(prefix[0], prefix[0].toUpperCase());
        this.data.adapterSource[prefix[0]].forEach(function(word) {
          if (word[0].indexOf(prefix) != -1) {
            newSource.push(word[0])
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

    onClear() {
      this.setData({
        showSuggest: false
      });
    },

    itemtap: function(event) {
      this.setData({
        value: event.target.id,
        bindSource: [],
        showSuggest: false
      })
      this.onSearch();
    }
  },

  observers: {
    'word': function() {
      if (this.data.word != "") {
        var that = this

        var word = this.data.word;
        db.collection('isms').where({
            word: _.eq(word)
          })
          .get({
            success: function(res) {
              that.setData({
                result: res.data[0],
                showSuggest: false,
                value: '',
                showCard: true
              })
            }
          })
      }
    }
  }
})
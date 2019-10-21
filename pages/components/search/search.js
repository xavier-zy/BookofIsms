// pages/components/search/search.js
var wordsData = require('../../../data/words.js');
var explainsData = require('../../../data/explains.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
        adapterSource: wordsData.words
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSearch() {
      const data_ = explainsData.explains;

      if (this.data.value == '') {
        this.setData({
          showCard: false
        })
      }

      var word = this.data.value;
      word = word.replace(word[0], word[0].toUpperCase());
      var alphabet = word[0];
      if (data_[alphabet] == null) {
        this.setData({
          result: "",
          showSuggest: false,
          value: '',
          showCard: false
        })
      } else if (data_[alphabet][word] == null) {
        this.setData({
          result: "",
          showSuggest: false,
          value: ''
        })
      } else {
        this.setData({
          result: {
            "word": word,
            "explain": data_[alphabet][word]
          },
          showSuggest: false,
          value: '',
          showCard: true
        })
      }
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
  }
})
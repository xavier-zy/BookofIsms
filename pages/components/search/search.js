// pages/components/search/search.js
var jsonData = require('../../../data/Isms2.js');

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
    adapterSource: []
  },

  lifetimes: {
    attached: function() {
      var temp = [];
      jsonData.isms.slice(0, 20).forEach(function(item, index) {
        temp.push(item.word);
      });
      this.setData({
        //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
        dataList: jsonData.isms.slice(0, 20),
        adapterSource: temp
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSearch() {
      console.log(this.data.value);
      this.setData({
        showSuggest: false,
        value: ''
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
    }
  }
})
// pages/components/list/index.js
var jsonData = require('../../../data/Isms2.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    position: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    dataList: [],
    countList: [],
    alphabets: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L', 'M', 'N', 'O',
      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Z'
    ],
  },

  lifetimes: {
    attached: function() {
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
        //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
        countList: word_count,
        dataList: data_list
      });

      if (this.data.position == 'W-Z') {
        const query = this.createSelectorQuery();
        query.select('#W' + this.data.position).boundingClientRect();
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
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
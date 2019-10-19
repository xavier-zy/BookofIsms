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
    dataList: []
  },

  lifetimes: {
    attached: function() {
      this.setData({
        //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
        dataList: jsonData.isms.slice(0, 20),
      });
      if (this.data.position == '') {

      } else {
        const query = this.createSelectorQuery();
        query.select('#' + this.data.position).boundingClientRect();
        console.log(query);
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
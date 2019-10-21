// pages/components/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showCard: Boolean,
    searchResult: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    result: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.setData({
        show: false
      });
    }
  },

  observers:{
    'searchResult': function () {
      this.setData({
        show: this.data.showCard,
        result: this.data.searchResult
      });
    }
  }
})
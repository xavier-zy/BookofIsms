// pages/components/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    showCard: true
  },

  lifetimes: {
    attached: function () {
      this.setData({
        show: this.data.show
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo(event) {
      console.log(event.detail);
    },

    onClose() {
      this.setData({
        close: false
      });
    }
  }
})
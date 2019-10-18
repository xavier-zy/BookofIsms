// pages/components/menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabNo: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0
  },

  lifetimes: {
    attached: function() {
      this.setData({
        active: parseInt(this.data.tabNo)
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange: function(event) {
      console.log(event.detail);
    },
  },

  onLoad: function(options) {
    console.log("dsf");
    this.active = this.tabNo;
  }
})
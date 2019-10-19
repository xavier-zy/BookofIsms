// pages/components/menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabNo: String,
    showGrid: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    show: false,
    checked_lang: true,
    checked_prez: true
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
      if (event.detail==0){
        wx.navigateTo({
          url: '../index/index',
        })
      } else if (event.detail == 1){
        wx.navigateTo({
          url: '../isms/isms',
        })
      }
    },
    
    onShowSetting: function() {
      var tabNo = parseInt(this.data.tabNo);
      this.setData({
        show: !this.data.show,
        active: this.data.show ? 2 : tabNo
      })
    },

    onClose() {
      this.setData({
        show: false,
        active: parseInt(this.data.tabNo)
      });
    },

    onSwitchLang() {
      // 需要手动对 checked 状态进行更新
      this.setData({
        checked_lang: !this.data.checked_lang
      });
    },

    // onSwitchPrez() {
    //   // 需要手动对 checked 状态进行更新
    //   this.setData({
    //     checked_prez: !this.data.checked_prez
    //   });
    //   this.triggerEvent("showGrid", this.data.checked_prez);
    // }
  },

})
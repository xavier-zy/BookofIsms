// pages/components/menu.js
import event from '../../../utils/event'

const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabNo: String,
    showList: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    show: false,
    checked_lang: wx.getStorageSync('langIndex') === 1 ? true : false,
    showList_: false,
    langIndex: 0,
    language: {}
  },

  lifetimes: {
    attached: function() {
      this.setLanguage();
      this.setData({
        active: parseInt(this.data.tabNo),
        showList_: this.data.showList,
        langIndex: wx.getStorageSync('langIndex')
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange: function(event) {
      // 使不再显示首页提示栏
      app.globalData.showHint = false
      if (event.detail == 0) {
        wx.navigateTo({
          url: '../index/index',
        })
      } else if (event.detail == 1) {
        wx.navigateTo({
          url: '../isms/isms',
        })
      }
    },

    onShowGrid() {
      this.setData({
        showGrid: true
      })
    },

    onShowSetting: function() {
      var tabNo = parseInt(this.data.tabNo);
      this.setData({
        show: !this.data.show,
        active: this.data.show ? tabNo : 2
      })
    },

    onClose() {
      console.log("on close Tab No: " + this.data.tabNo);

      this.setData({
        show: false,
        active: parseInt(this.data.tabNo)
      });
    },

    onSwitchLang(e) {
      // 需要手动对 checked 状态进行更新
      let index = e.detail === false ? 0 : 1;
      this.setData({
        langIndex: index
      });
      wx.T.setLocaleByIndex(index);
      this.setLanguage();
      event.emit('languageChanged');

      wx.setStorage({
        key: 'langIndex',
        data: this.data.langIndex
      })
      this.setData({
        checked_lang: !this.data.checked_lang
      });
    },

    setLanguage() {
      this.setData({
        language: wx.T.getLanguage()
      });
    }
  },

})
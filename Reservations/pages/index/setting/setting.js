// pages/index/setting/setting.js
// pages/index/setting/setting.js
 
const util = require('../../../utils/util.js')
 
Page({
 
  /**
   * 页面的初始数据
   */
 
  data: {
 
    info:["头像","名称","当前系统版本"],
 
    tx:"",
 
    name:"",
 
    currentDate:util.formatTime(new Date(), '-', false),
 
    phone:""
 
 
 
 
  },
 
  bindDateChange: function (e) {
 
    console.log(e.detail.value)
 
    this.setData({
 
      currentDate:e.detail.value
 
    }) },
 
      chooseAddress() {
 
        wx.chooseAddress({
 
          success (res) {
 
            console.log(res.userName)
 
          }
 
        })
 
    },
 
  /**
   * 生命周期函数--监听页面加载
   */
 
  onLoad: function (options) {
 
    var useInfo = wx.getStorageSync('userInfo')
 
    var that = this;
 
    that.setData({
 
    tx:useInfo.avatarUrl,
 
    name:useInfo.nickName,})
 
 
 
  },
 
  houtai(){
 
    wx.navigateTo({
 
      url: '/pages/index/setting/about/about',
 
    })
 
  },
 
  version(){
 
    wx.showToast({
 
      title: '当前已是最新版本~',
 
    })
 
 
 
  },
 
  logout:function() {
 
    wx.removeStorage({
 
      key: 'userInfo',
 
      success (res) {
 
        wx.showModal({
 
          title: '提示',
 
          content: '真的要退出了吗',
 
          cancelText:'我骗你的',
 
          confirmText:'是的没错',
 
          confirmColor:'#000000',
 
          cancelColor:'#576b95',
 
          success (res) {
 
            if (res.confirm) {
 
              wx.reLaunch({
 
                url: '/pages/index/index',
 
              })
 
            } else if (res.cancel) {
 
              console.log('用户点击取消')
 
            }
 
          }
 
        })
 
        
 
      }
 
    })
 
 
 
  }
 
 
 
})
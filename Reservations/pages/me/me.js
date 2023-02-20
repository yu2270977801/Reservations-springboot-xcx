// pages/me/me.js
Page({
 
    /**
     * 页面的初始数据
     */
   
    data: {
   
      avatarUrl:"",
   
      name: "",
   
      m:"0",
   
      mySet:[
   
         {
   
           'name':"我的预约",
   
           'img':"../../image/me/want.png"
   
         },
   
         {
   
         'name':"我的收藏",
   
          'img':"../../image/me/like.png"
   
        },
   
        {
   
         'name':"个人设置",
   
          'img':"../../image/me/setting.png"
   
        },
   
      ]
   
    },
   
    /**
     * 生命周期函数--监听页面加载
     */
   
    onLoad: function (options) {
   
      
   
    },
   
      /**
     * 用户信息获取权限
     */
   
    getUserProfile: function () {
   
      if(this.data.m==0){
   
     
   
      wx.getUserProfile({
   
        desc: '信息仅作为个人展示',
   
        success: (res) => {
   
          console.log('获取成功', res)
   
          wx.setStorage({
   
            data: res.userInfo,
   
            key: 'userInfo',
   
          });
   
          this.setData({
   
            m:1
   
          })
   
          this.onShow();
   
        }})
   
      
   
      }else{
   
        wx.showToast({
   
          title: '您已登录啦',
   
        })
   
      }     
   
      },
   
      /**
     * 点击我的预约等板块后进行页面跳转
     */
   
    onMySet:function(e){
   
    if(e.currentTarget.dataset.type=="个人设置"){
   
      wx.navigateTo({
   
        url: '/pages/index/setting/setting',
   
      })
   
    }
    else if(e.currentTarget.dataset.type=="我的预约"){
   
      wx.navigateTo({
   
        url: 'pages/index/want/want',
   
      })
   
    }
    else (e.currentTarget.dataset.type=="我的收藏")
    {
   
      wx.navigateTo({
   
        url: '/pages/index/like/like',
   
      })
   
    }
   
  },
   
    /**
     * 生命周期函数--监听页面显示
     */
   
    onShow: function () {
   
      var useInfo = wx.getStorageSync('userInfo')
   
      var that = this;
   
      that.setData({
   
      avatarUrl:useInfo.avatarUrl,
   
      name:useInfo.nickName,
   
    })
   
   }
   
  })
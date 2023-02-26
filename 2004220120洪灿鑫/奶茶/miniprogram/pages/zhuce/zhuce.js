// pages/zhuce/zhuce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:'',
    pass:''
},
sign:function(e){
    var flag=true;
    console.log(e)
    if(e.detail.value.user==''){
        this.setData({
            user:'用户名不能为空'
        }) 
        flag=false;
    }else{
       const db = wx.cloud.database()
       var _this=this
       db.collection('student').where({
           user:e.detail.value.user
       })
       .get({
           success:function(res){
               console.log(res.data)
               if(res.data.length==0){
                   _this.setData({
                       user:"进入下一步"
                   })
                   if(flag){
                    const db = wx.cloud.database()
                    db.collection('student').add({
                        data:{
                            user:e.detail.value.user,
                            pass:e.detail.value.pass,
                        },
                        success:function(res){
                            console.log(res)
                            wx.navigateTo({
                                url:'/pages/denglu/denglu',
                            })
                        }
                    })
                }
                   
               }else{
                   _this.setData({
                       user:'存在了'
                   })
                   flag=false
               }
           }
       })
    }
    if(e.detail.value.pass==''){
        this.setData({
           pass:'密码不能为空'
        }) 
        flag=false
    }else{
        this.setData({
            pass:''
        })
    }
   
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
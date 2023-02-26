// pages/name/name.js
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.src='cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/r.m4a'
Page({

    /**
     * 页面的初始数据
     */
    
    data: {
        src:'cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/作业/a2.jpg',
        num:1
    },
    change:function(){
        if(this.data.num==0){
            this.setData({
                num:1
            })
            innerAudioContext.play()
        }else{
            this.setData({
                num:0
            })
            innerAudioContext.pause()
        }
    },
    quit:function(){
        wx.setStorageSync('user', '')
        wx.switchTab({
          url: '/pages/shouye/shouye',
        })
      },
    chooseImg:function(){
        var _this=this;
        //选择图片
        wx.chooseImage({
          //限制最多选择几张
          count: 1,
          //文件类型
          sizeType:['original','compressed'],
          //文件来源
          sourceType:['album','camera'],
          //success成功以后的代码
          success(res){
            //tempFilePath可以作为img标签的src属性显示图片
            //成功以后会把代码储存到缓存里面
            const tempFilePaths = res.tempFilePaths
            console.log(res)
            //上传图片
              wx.cloud.uploadFile({
                cloudPath:Math.random()+'png' ,    //上传到云端的路径
                filePath:tempFilePaths[0],//小程序临时文件路径
                success:res =>{
                  //返回文件id
                  console.log(res.fileID)
                  _this.setData({
                    src:res.fileID
                  })
                },
                fail:console.error
              })
          }
        })
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
        innerAudioContext.play()
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
        innerAudioContext.stop()
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
// pages/caidan/caidan.js
Page({

    /**
     * 页面的初始数据
     */
        data: {
            list:['饮料','美食','咖啡'],
            num:0,
            con:['1全国政协十三届五次会议会期6天热','冬残奥会比赛项目科普热','531省份新增61例本土确诊 广东22例热','531省份新增61例本土确诊 广东22例热','531省份新增61例本土确诊 广东22例热','531省份新增61例本土确诊 广东22例热'],
            srcs:[
                {
                   src:'cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/作业/dd.jpg',
                   src:'https://wap.luckincoffeecdn.com/coffee/assets/9df6e190f386724d7670ad6de4e94273.png'
                }
            ]
        },
        change(e){
            this.setData({
                num:e.target.dataset.id
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
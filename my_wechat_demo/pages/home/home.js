// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
        name: '我是第一个小程序',
        students: [
            { id: 1, name: '科比', age: '21' },
            { id: 2, name: '科比2', age: '22' },
            { id: 3, name: '科比3', age: '36' }
        ],
        studentsList: [
            { id: 1, name: '杜兰特', age: '21' },
            { id: 2, name: '汤姆森', age: '22' },
            { id: 3, name: '保罗', age: '36' }
        ],
        count:0
        
    },
    /**
     * @description 点击加 1
     */
    clickAddOne: function() {
        this.setData({students: this.data.studentsList})
        this.setData({count:this.data.count+1})
        this.setData({ msg: "Hello World" })
    },
    /**
     * @description 点击减 1
     */
    clickReduceOne: function() {
        this.setData({count:this.data.count - 1})
        this.setData({ msg: "Hello World" })
    },
    /**
     * @description 开始刷新
     * @param {*} options 
     */
    startRefresh:function name(params) {
        wx.startPullDownRefresh({
            complete: (res) => {console.log('开始刷新')},
          })
    },
    /**
     * @description 结束刷新
     * @param {*} options 
     */
    stopRefresh:function name(params) {
        wx.stopPullDownRefresh({
            complete: (res) => {console.log('结束刷新')},
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
    console.log('全局刷新了')
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
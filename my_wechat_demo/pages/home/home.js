// pages/home/home.js
// getApp获取APP()产生的示例对象
const app = getApp()
// 导入自定义工具js
const utils = require("../../utils/util.js");
let { name, age } = app.globalData
console.log('全局属性', name, age);
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
        count:0,
        globalName: name,
        item: { //自定义模板数据
            index: 0,
            msg: 'this is a template',
            time: '2020-12-12'
        },
        currentTime: new Date().toLocaleString(),
        num: 2.5555555555,
        counter: 0
    },
    options: {
        addGlobalClass: true
    },
    /**
     * @description 监听子组件传出的事件并赋值
     */
    handleAdd(value){
        console.log('听到了子组件事件',value)
        this.setData({counter: this.data.counter+1})
    },
    /**
     * @description 手指触摸后，超过350ms再离开
     * @param {*} event 
     */
    hanldeLongPress (event) { 
        wx.showModal({
            title: '提示',
            content: event.currentTarget.dataset.str,
            success (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
    },
    /**
     * @description 手指触摸动作开始
     * @param {@} event 
     */
    hanldeTouchStart (event) { 
        wx.showToast({
            title: event.currentTarget.dataset.str,
            icon: 'success',
            duration: 2000
        })
    },
    /**
     * @description 手指触摸后马上离开
     */
    hanldeTouchTap (event) {
        console.log(event,55)
        wx.showToast({
            title: event.currentTarget.dataset.str,
            icon: 'success',
            duration: 2000
        })
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
     * @description 点击获取用户权限
     * @param {@} options 
     */
    handleGetUserInfos (event) {
        console.log(event);
     },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 使用自定义方法，保留两位小数
    this.setData({num: utils.twoDecimal(this.data.num)})
    // 赋值动态显示时间
    setInterval(() =>{
        this.setData({
            currentTime: new Date().toLocaleString()
        })
    }, 1000)
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
    console.log('下拉刷新')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面到底部，可以用于上拉加载更多')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/home/home.js
// getApp获取APP()产生的示例对象
const app = getApp()
// 导入自定义工具js
const utils = require("../../utils/util.js");
let { name, age } = app.globalData
console.log('全局属性', name, age);
import request from '../../requests/network.js'
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
        counter: 0,
        tabTitle: ''
    },
    options: {
        addGlobalClass: true
    },
    /**
     * @description 自定义tab-control组件事件传递
     */
    handleTabControlClick (event) { 
        this.setData({
            tabTitle: event.detail.title
        })
        console.log(event);
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
     * @description 父组件给子组件传值方法
     */
    handleGiveValueToChild(){
        // 最终目的：修改子组件my-select里的 counter值
        const myselect = this.selectComponent("#myselect");
        // 方法一：父组件修改子组件内值
        // myselect.setData({
        //    counter: myselect.data.counter + 20
        // })

        // 方法二：父组件修改子组件内值 incrementCounter在子组件my-select中定义的方法
        myselect.incrementCounter(10)
        console.log(myselect,'获取子组件对象')
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
        // 发起数据请求，域名或接口ip必须进行配置，否则报错
        // wx.request({
        //     url: 'http://123.207.32.32:8000/recommend',
        //     method: 'get',
        //     success:function (res) {
        //         console.log('网络请求结果',res);
        //     }
        // })
        wx.request({
            url: 'http://httpbin.org/post',
            method: 'post',
            data: {
                name: '邱南亚',
                age: 154,
                height: 152
            },
            success:function (res) {
                console.log('网络请求结果',res);
            },
            fail:function (res){
                console.log(res)
            }
            
        })

        // 使用自己封装好的方法进行调用
        let obj = {
            url:'http://httpbin.org/post',
            method: 'post',
            data:{
                name: '邱南亚',
                age: 154,
                height: 152
            }
        }
        request(obj)    

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
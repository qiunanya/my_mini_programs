//app.js
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
     console.log('onLaunch', options);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
      console.log('onShow', options);
      // 1、判断小程序的进入场景
      switch (options.scene) {
          case 1001:
              
              break;
          case 1005:
        
              break;
          default:
              break;
      }
      // 2、获取用户信息，并且获取到用户信息之后，将用户信息传递给服务器保存, getUserInfo后期可能废弃掉
      // 废掉后建议使home.js/home.wxml用按钮获取用户信息方式
      wx.getUserInfo({
          complete: (res) => {
              console.log('获取用户信息一', res);
        },
      })

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
      console.log('onHide');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('onError',msg);
    },
  /**
   * 定义全局属性，其他地方都可以用
   */
    globalData: {
        name: '我是来自app.js的data属性（全局的）',
        age:120
    }
})

//app.js
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * @description 小程序登录最佳位置，加载完成就可以进行登录验证
   * 交互微信服务器需要三个参数：wx.login请求返回的code(只有五分钟的有效期)，和小程序官网提供的开发模块里的appid和appsecret（可以重新设置的参数）
   * 登录步骤：
   * 1、调用微信登录接口wx.login获得返回的code，到微信小程序官网获取appid和appsecret
   * 我的小程序appid: wx78ee831455a4207a, appsecret: 6b0a064891f0bfedcacd7bac2de5356f
   * 2、获取code之后，将code传给自己公司服务器后端，最好加账号和密码，以便绑定账号，不成功继续让用户输入账号和密码
   * 3、和微信服务器交完后拿到openid，保存到数据库，可以用作当前用户的唯一标识，和自己的服务器登录接口交互，保存后端的认证标识即可完成登录
   */
  onLaunch: function (options) {
     console.log('onLaunch', options);
     wx.login({
        success: function(res) {
            console.log('登录wx.login打印数据-》',res)
            //获取code之后，将code传给自己公司服务器后端，最好加账号和密码，以便绑定账号

        },
        fail: function(res) {
            console.log('调用接口失败打印-》', res)
        },
        complete: (res) => {},
     })
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

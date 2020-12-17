/**
 * @description 全局统一封装请求方式
 * @param {*} options 封装请求数据信息，包括参数，请求url，请求方式 
 */

// 默认请求超时时间
const outTime = 15000
export default function request(options){
    return new Promise((resolve, reject) =>{
        wx.request({
            url: options.url,
            method: options.method || 'get',
            data: options.data || {},
            timeout: outTime,
            success: function(res) {
                resolve(res)
            },
            fail: function(err) {
                wx.showToast({
                    title: err,
                    duration: 30000
                })
                reject(err)
            }
        })
    })

}
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * @since 2020-12-12
 * @description 自定义保留两位小数的方法并导出
 */
 const twoDecimal = data => {
    console.log(data, '保留两位小数')
    return data.toFixed(2)
 }

module.exports = {
  formatTime: formatTime,
  twoDecimal: twoDecimal
}

export default function formatDate(date:any, fmt:any) {
    if (/(y+)/.test(fmt)) {
   // y+代表一个或者多个y
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
  //  RegExp.$1为全局对象匹配的字符串
  //  (date.getFullYear() + '')是将转化的年份转化为字符串
  //substr(4 - RegExp.$1.length)是对数据进行截取
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
  };
  //padLeftZero 这个函数可以让数字一定是两位，当出现一个数字会用0占位
  function padLeftZero (str:any) {
    return ('00' + str).substr(str.length);
  };
  
  
  
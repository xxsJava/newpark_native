/**
 * 代码描述: 时间转换
 * 作者:cxr
 * 创建时间:2023/12/26 11:58:11
 */

export const parserDateString = (dateString: string) => {
    const regEx = new RegExp('\\-', 'gi');
    const validDateStr = dateString.replace(regEx, '/');
    const milliseconds = Date.parse(validDateStr);
    return new Date(milliseconds);
}

export const dateToMsgTime = (dataString: number) => {
    // const dateTime = parserDateString(dataString);
    // const now = new Date();
    // const nowTimeSpan = now.getTime();
    const oldTimeSpan = dataString;
    let result = '';
    // const milliseconds = nowTimeSpan-oldTimeSpan;
    if (oldTimeSpan <= 1000 * 60 * 1) {
      result = '刚刚';
    }else if(1000 * 60 * 1 < oldTimeSpan && oldTimeSpan <= 1000 * 60 * 60) {
      result = `${Math.round((oldTimeSpan / (1000 * 60)))}分钟前`;
    }else if(1000 * 60 * 60 * 1 < oldTimeSpan && oldTimeSpan <= 1000 * 60 * 60 * 24) {
      result = `${Math.round(oldTimeSpan / (1000 * 60 * 60))}小时前`;
    }else if(1000 * 60 * 60 * 24 < oldTimeSpan && oldTimeSpan <= 1000 * 60 * 60 * 24 * 2) {
    //   result = `一天前${dataString.slice(11,5)}`;
      result = '一天前'
    }else if(1000 * 60 * 60 * 24*2 < oldTimeSpan && oldTimeSpan <= 1000 * 60 * 60 * 24 * 3) {
    //   result = `两天前${dataString.slice(11,5)}`;
      result = '两天前'
    }else{
    //   result = dataString.slice(0,10);
      result = dataString.toString()
    }
    return result;
  }


/*
 * @Author: xxs
 * @Date: 2023-11-01 09:14:00
 * @LastEditTime: 2023-11-01 16:28:08
 * @FilePath: \newpark_native\src\utils\DateTimeUtils.tsx
 * @Description: desc
 */
import Moment from 'moment';

//默认格式
const formattDate1 = 'YYYY-MM-DD';
const formattDate = 'YYYY-MM-DD hh:mm:ss';

export default class DateTimeUtils {
  //时间戳 (秒)
  static timestamps = () =>{
    return  Math.floor(Date.now() / 1000);;
  }

  //时间戳转格式
  static formattedDateTime = (dateTimes: number, format?: string) => {
    if(format != null || format != undefined){
      return Moment.unix(dateTimes).format(format);
    }
    return Moment.unix(dateTimes).format(formattDate);
  };

  //格式时间转时间戳
  static formattedDateStr = (dateTimes: string, format?: string) => {
    if(format != null || format != undefined){
      return Moment(dateTimes, format).unix();
    }
    return Moment(dateTimes, formattDate).unix();
  };
}

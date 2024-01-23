
/**
* 代码描述: OPNE-IM 接口
* 作者: xxs
* 创建时间:2024/01/04 16:06:58
*/
import request from '../../config/axios'
import DateTimeUtils from '../../utils/DateTimeUtils';
import { MsgInfo } from './type';

/**
 * 获取OpenIm配置
 */
export const getOpenIMConfig = (data:any)=>{
    return request.post({
        url: '/api/auth/user_token',
        data: data,
        operationID: DateTimeUtils.timestamps+"",
    });
}

export const getGroupsInfo = (data:any,token:any) =>{
    return request.post({
        url: '/v1/groupGetGroupsInfo',
        token: token,
        data: data
    });
}

export const sendMsg = (params:MsgInfo) =>{
    return request.post({
        url: '/api/msg/send_msg',
        operationID: DateTimeUtils.timestamps,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJvcGVuSU0xMjM0NTYiLCJQbGF0Zm9ybUlEIjoyLCJleHAiOjE3MTIyMjMwMzcsIm5iZiI6MTcwNDQ0NjczNywiaWF0IjoxNzA0NDQ3MDM3fQ.XhAqxP6oZOOgPw-_33aRgWCYs61nkcW8H1_lEgljT9c',
        data: params
    });
}
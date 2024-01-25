/*
 * @Author: xxs
 * @Date: 2024-01-25 10:22:05
 * @LastEditTime: 2024-01-25 10:34:24
 * @FilePath: \newpark_native\src\api\imApi\index.tsx
 * @Description: desc
 */

/**
* 代码描述: OPNE-IM 接口
* 作者: xxs
* 创建时间:2024/01/04 16:06:58
*/
import request from '../../config/axios';
import DateTimeUtils from '../../utils/DateTimeUtils';
// 这里有改动
// import { MsgInfo } from './type';

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

export const getGroupsInfo = (data:any) =>{
    return request.post({
        url: '/v1/groupGetGroupsInfo',
        data: data
    });
}

export const sendMsg = (params:any) =>{
    return request.post({
        url: '/api/msg/send_msg',
        data: params
    });
}

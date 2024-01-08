/*
 * @Author: xxs
 * @Date: 2024-01-04 16:06:26
 * @LastEditTime: 2024-01-05 17:55:42
 * @FilePath: \newpark_native\src\api\IMAPI\index.tsx
 * @Description: desc
 */
/**
* 代码描述: OPNE-IM 接口
* 作者: xxs
* 创建时间:2024/01/04 16:06:58
*/
import request from '../../config/axios'
import DateTimeUtils from '../../utils/DateTimeUtils';

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

export const getGroupsInfo = (data:any,token:string) =>{
    return request.post({
        url: '/api/group/get_groups_info',
        openIMToken: token,
        operationID: DateTimeUtils.timestamps+"",
        data: data
    });
}
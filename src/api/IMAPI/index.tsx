
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

export const getGroupsInfo = (data:any,token:any) =>{
    return request.post({
        url: '/v1/groupGetGroupsInfo',
        token: token,
        data: data
    });
}
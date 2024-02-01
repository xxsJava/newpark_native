
/**
* 代码描述: OPNE-IM 接口
* 作者: xxs
* 创建时间:2024/01/04 16:06:58
*/
import request from '../../config/axios';

/**
 * 获取OpenIm配置
 */
export const getOpenIMConfig = (data:any): Promise<IResponse>=>{
    return request.post({
        url: '/api/auth/user_token',
        data: data
    });
}

export const getGroupsInfo = (data:any): Promise<IResponse> =>{
    return request.post({
        url: '/v1/groupGetGroupsInfo',
        data: data
    });
}

export const getClientConfig = (): Promise<IResponse> => {
    return request.post({
        url: '/v1/getClientConfig'
    });
}

export const sendMsg = (params:any): Promise<IResponse> =>{
    return request.post({
        url: '/api/msg/send_msg',
        data: params
    });
}

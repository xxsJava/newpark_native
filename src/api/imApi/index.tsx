
/**
* 代码描述: OPNE-IM 接口
* 作者: xxs
* 创建时间:2024/01/04 16:06:58
*/
import request from '../../config/axios';
// import {dataList} from './type';
/**
 * 获取OpenIm配置
 */
export const getOpenIMConfig = (data:any): Promise<IResponse>=>{
    return request.post({
        url: '/api/auth/user_token',
        data: data
    });
}

/**
 * 群组信息
 * @param data 
 * @returns 
 */
export const getGroupsInfo = (data:any): Promise<IResponse> =>{
    return request.post({
        url: '/api/group/get_groups_info',
        data: {"groupIDs":data}
    });
}

/**
 * 获取配置
 * @returns 
 */
export const getClientConfig = (): Promise<IResponse> => {
    return request.post({
        url: '/v1/getClientConfig'
    });
}

/**
 * 发送信息
 * @param params 
 * @returns 
 */
export const sendMsg = (params:any): Promise<IResponse> =>{
    return request.post({
        url: '/api/msg/send_msg',
        data: params
    });
}

/**
 * 获取用户
 * @param params 
 * @returns 
 */
export const getUseList = (params:any): Promise<IResponse> =>{
        return request.post({
            url:'/api/user/get_users',
            data:params
        })
}

/**
 * 获取指定用户的好友列表。
 * @param params 
 * @returns 
 */
export const getFriendList = (params:any): Promise<IResponse> =>{
    return request.post({
        url:'/api/friend/get_friend_list',
        data:params
    })
}

/*
 * @Author: xxs
 * @Date: 2024-04-20 09:00:27
 * @LastEditTime: 2024-04-25 11:38:24
 * @FilePath: \newpark_native\src\api\imApi\index.tsx
 * @Description: desc
 */

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

/**
 * 发送好友申请
 * @param params 
 * @returns 
 */
export const addFriend = (params:any): Promise<IResponse> =>{
    return request.post({
        url:'/api/friend/add_friend',
        data:params
    })
}

/**
 * 查询用户是否注册
 * @param params 
 * @returns 
 */
export const accountCheck = (params:any): Promise<IResponse> =>{
    return request.post({
        url:'/api/user/account_check',
        data:params
    })
}
/**
 * 获取已加入的群组
 * @param params 
 * @returns 
 */
export const joinedGroup = (params:any): Promise<IResponse> =>{
    return request.post({
        url:'/api/group/get_joined_group_list',
        data:params
    })
}
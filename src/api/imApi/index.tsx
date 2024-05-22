/*
 * @Author: xxs
 * @Date: 2024-04-20 09:00:27
 * @LastEditTime: 2024-05-13 16:10:14
 * @FilePath: \newpark_native\src\api\imApi\index.tsx
 * @Description: desc
 */

/**
* 代码描述: OPNE-IM 接口
* 作者: xxs
* 创建时间:2024/01/04 16:06:58
*/
import request from '../../config/axios';
import {handleFriendType,friAddBlackType,friRemoveBlackType,delFriendType,getOnlineStatType,modifyFriRemarkType,createGroupType,listSessionType,getFriendListType} from './type';
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
export const getFriendList = (params:getFriendListType): Promise<IResponse> =>{
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

/**
 * 获取收到的好友申请
 * @param params 
 * @returns 
 */
export const applyList = (params:any): Promise<IResponse> =>{
    return request.post({
        url:'/api/friend/get_friend_apply_list',
        data:params
    })
}

/**
 * 处理好友申请
 * @param params
 * @returns
 */
export const handleFriend = (params:handleFriendType):Promise<IResponse> => {
    return request.post({
        url:'/api/friend/add_friend_response',
        data:params
    })
}
/**
 * 添加黑名单
 * @param params
 * @returns
 */
export const friAddBlack = (params:friAddBlackType):Promise<IResponse> => {
    return request.post({
        url:'/api/friend/add_black',
        data:params
    })
}

/**
 * 移除黑名单
 * @param params
 * @returns
 */
export const friRemoveBlack = (params:friRemoveBlackType):Promise<IResponse> => {
    return request.post ({
        url:'/api/friend/remove_black',
        data:params
    })
}
/**
 * 删除好友
 * @param params
 * @returns
 */
export const delFriend = (params:delFriendType):Promise<IResponse> => {
    return request.post({
        url:'/api/friend/delete_friend',
        data:params
    })
}
/**
 * 获取指定用户在线状态
 * user/get_users_online_status
 * @param params
 * @returns
 */
export const getOnlineStat = (params:getOnlineStatType):Promise<IResponse> => {
        return request.post({
            url:'/api/user/get_users_online_status',
            data:params
        })
}

/**
 * 修改好友备注
 * friend/set_friend_remark
 * @param params
 * @returns
 */
export const modifyFriRemark = (params:modifyFriRemarkType):Promise<IResponse> =>{
    return request.post({
        url:'/api/friend/set_friend_remark',
        data:params
    })
}
/**
 * 创建群组
 * group/create_group
 * @param params
 * @returns
 */
export const createGroup = (params:createGroupType):Promise<IResponse> =>{
    return request.post({
        url:'/api/group/create_group',
        data:params
    })
}
/**
 * 获取排序后的会话列表
 * conversation/get_sorted_conversation_list
 * @param params
 * @returns
 */
export const listSession = (params:listSessionType):Promise<IResponse> => {
    return request.post({
        url:'/api/conversation/get_sorted_conversation_list',
        data:params
    })
}
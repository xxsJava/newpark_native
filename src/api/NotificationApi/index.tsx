/*
 * @Author: xxs
 * @Date: 2023-12-16 15:50:12
 * @LastEditTime: 2023-12-16 16:05:46
 * @FilePath: \newpark_native\src\api\NotificationApi\index.tsx
 * @Description: desc
 */
import request from '../../config/axios'

/**
 * 获取通知
 * @param token 
 * @returns 
 */
export const getNotification = (token:string)=>{
    return request.get({
        url: '/notice/noticeApi',
        token: token
    });
}
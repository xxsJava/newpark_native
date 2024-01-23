/*
 * @Author: xxs
 * @Date: 2023-12-16 15:50:12
 * @LastEditTime: 2024-01-23 17:59:27
 * @FilePath: \newpark_native\src\api\notificationApi\index.tsx
 * @Description: desc
 */
import request from '../../config/axios'

/**
 * 获取通知
 * @param token 
 * @returns 
 */
export const getNotification = ()=>{
    return request.get({
        url: '/notice/noticeApi',
    });
}
/*
 * @Author: xxs
 * @Date: 2024-01-04 16:06:26
 * @LastEditTime: 2024-01-05 14:05:12
 * @FilePath: \newpark_native\src\api\IMAPI\index.tsx
 * @Description: desc
 */
/**
* 代码描述: OPNE-IM 接口
* 作者: xxs
* 创建时间:2024/01/04 16:06:58
*/
import request from '../../config/axios'

/**
 * 获取OpenIm配置
 */
export const getOpenIMConfig = (data:any,operationID:String)=>{
    return request.post({
        url: '/api/auth/user_token',
        data: data,
        operationID: operationID
    });
}
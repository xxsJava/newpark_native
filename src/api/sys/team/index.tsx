/**
* 代码描述: 社区的页面
* 作者: zhn
* 创建时间:2024/04/24 16:06:58
*/

import request from '../../../config/axios';
import {chatRoomType} from './type';


/**
 * 聊天室分类
 * @param data 
 * @returns 
 */
export const chatRoom = (data:any): Promise<IResponse> =>{
    return request.get({
        url: '/v1/chatRoomFindALL',
        data: data
    });
}

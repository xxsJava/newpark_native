/*
 * @Author: xxs
 * @Date: 2023-10-30 15:18:58
 * @LastEditTime: 2024-04-22 14:48:09
 * @FilePath: \newpark_native\src\api\sys\newpark\index.tsx
 * @Description: desc
 */
import request from '../../../config/axios';
import { Pages } from "./types";

export const getChatRoomFindALL = (data:Pages): Promise<IResponse> => {
  console.log('热门聊天分类参数--------------->',data);
  return request.get({
    url:'/v1/chatRoomFindALL',
    params: data
  })
}

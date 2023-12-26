/**
 * 代码描述: home页api
 * 作者:cxr
 * 创建时间:2023/12/25 09:44:11
 */

import request from '../../../config/axios';
import { postListType } from './types'

/**
 * 帖子列表api
 * @returns
 */
export const postList = (token:string,data:postListType): Promise<IResponse> => {
    return request.get({
      url: '/posts/postsApi',
      data: data,
      token:token
    });
  };
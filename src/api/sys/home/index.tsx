/*
 * @Author: xxs
 * @Date: 2024-01-02 11:34:24
 * @LastEditTime: 2024-01-23 17:38:04
 * @FilePath: \newpark_native\src\api\sys\home\index.tsx
 * @Description: desc
 */
/**
 * 代码描述: home页api
 * 作者:cxr
 * 创建时间:2023/12/25 09:44:11
 */

import request from '../../../config/axios';
import { postListType,postLikeParam, postCommentsData } from './types'

/**
 * 帖子列表api
 * @returns
 */
export const postList = (data:postListType): Promise<IResponse> => {
  return request.get({
    url: '/posts/postsApi',
    params: data
  });
};

/**
 * 点赞api
 * @returns
 */
export const postLike = (data:postLikeParam): Promise<IResponse> => {
  return request.post({
    url: '/posts-usr-like/postsUsrLikeApi',
    data: data
  });
};

/**
 * 评论api
 * @returns
 */
export const postComments = (data:postCommentsData): Promise<IResponse> => {
  return request.get({
    url: '/postsComments/postsCommentsApi',
    params:data
  });
};
/**
 * 代码描述: home页api
 * 作者:cxr
 * 创建时间:2023/12/25 09:44:11
 */

import request from '../../../config/axios';
import { postListType,postLikeParam,postCommentsParam } from './types'

/**
 * 帖子列表api
 * @returns
 */
export const postList = (token:string,data:postListType): Promise<IResponse> => {
  return request.get({
    url: '/posts/postsApi',
    params: data,
    token:token
  });
};

/**
 * 点赞api
 * @returns
 */
export const postLike = (token:string,data:postLikeParam): Promise<IResponse> => {
  return request.get({
    url: '/posts-usr-like/postsUsrLikeApi',
    params: data,
    token:token
  });
};

/**
 * 评论api
 * @returns
 */
export const postComments = (token:string,params:postCommentsParam): Promise<IResponse> => {
  return request.get({
    url: '/postsComments/postsCommentsApi',
    params: params,
    token:token
  });
};
/*
 * @Author: zhn
 * @Date: 2024-3-5 15:18:58
 * @FilePath: \newpark_native\src\api\sys\post\index.tsx
 * @Description: 帖子
 */
 
import request from '../../../config/axios';
import {PostsType} from './types';

/**
 * 登录api
 * @param data 登录数据
 * @returns
 */
export const postApi = (data: PostsType): Promise<IResponse> => {
  return request.get({
    url: '/posts/postsApi',
    data,
  });
};


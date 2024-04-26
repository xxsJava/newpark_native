
/**
 * 代码描述: 文件上传功能
 * 作者:zhn
 * 创建时间:2024/3/22 9:38:11
 */

import request from '../../../config/axios';
import {uploadFileType}  from './types'
  /**
 * 悬赏发布api
 * @returns
 */
// body传参
export const uploadApi = (data:uploadFileType): Promise<IResponse> => {
    return request.post({
      url: '/uploadFile/filesApi', data
    });
  };

/**
 * 文件批量上传API
 * body传参
 * @returns
 */
export const fileUp = (data:any): Promise<IResponse> => {
  return request.post({
    url:'/uploadFile/filesApi',data
  })
}

/**
 * 代码描述: 悬赏功能api
 * 作者:cxr
 * 创建时间:2023/12/27 18:20:11
 */

import request from '../../../config/axios';
import { rewardListType, rewardPublishType,rewardOneApiType } from './types';


/**
 * 悬赏浏览api
 * @returns
 */
// params传参
export const rewardListApi = (data:rewardListType): Promise<IResponse> => {
    return request.get({
      url: '/reward/rewardApi',
      params: data
    });
  };

  /**
 * 悬赏发布api
 * @returns
 */
// body传参
export const rewardPublishApi = (data:rewardPublishType): Promise<IResponse> => {
  return request.post({
    url: '/reward/rewardApi', data
  });
};
  /**
 * 单条条件浏览悬赏api
 * body传参
 * @returns
 */
export const rewardOneApi = (data:rewardOneApiType): Promise<IResponse> => {
  return request.get({
    url:'/reward/rewardOneApi',data
  })
}
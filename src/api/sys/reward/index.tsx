/**
 * 代码描述: 悬赏功能api
 * 作者:cxr
 * 创建时间:2023/12/27 18:20:11
 */

import request from '../../../config/axios';
import {rewardListType} from './types'


/**
 * 悬赏浏览api
 * @returns
 */
export const rewardListApi = (data:rewardListType): Promise<IResponse> => {
    return request.get({
      url: '/reward/rewardApi',
      params: data
    });
  };
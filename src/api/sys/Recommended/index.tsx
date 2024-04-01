/*
 * @Author: zhn
 * @Date: 2024-2-28 15:18:58
 * @FilePath: \newpark_native\src\api\sys\Recommended\index.tsx
 * @Description: 推荐页面
 */
import request from '../../../config/axios';
import {productType,productpType,recommLookType} from './types';

/**
 * 交易圈的商品
 * 浏览商品
 * @param 
 * @returns
 */
export const productApi = (data: productType): Promise<IResponse> => {
  return request.get({
    url: '/product/productApi',
    params: data
  });
};
/**
 * 交易圈的商品
 * 发布商品
 * @body
 * @returns
 */
export const productApip = (data: productpType): Promise<IResponse> => {
  return request.post({
    url: '/product/productApi',data,
  });
};
// 社区查看ApI
export const recommLook = (data:recommLookType):Promise<IResponse> => {
  return request.get({
    url:'/v1/comFindBy',
    params: data
  })
}

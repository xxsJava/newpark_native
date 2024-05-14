/*
 * @Author: xxs
 * @Date: 2024-05-11 14:41:32
 * @LastEditTime: 2024-05-11 14:42:15
 * @FilePath: \newpark_native\src\api\sys\product\index.tsx
 * @Description: desc
 */
import request from '../../../config/axios';

export const productInfoApi = (pId:string): Promise<IResponse> => {
    return request.get({
      url: '/product/productInfoFindApi/'+pId,
    });
  };
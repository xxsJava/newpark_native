/*
 * @Author: xxs
 * @Date: 2023-10-30 15:18:58
 * @LastEditTime: 2023-10-30 18:31:12
 * @FilePath: \newpark_native\src\api\sys\lgoin\index.tsx
 * @Description: desc
 */
import request from '../../../config/axios';
import {SmsLoginType, UserLoginType} from './types';

/**
 * 登录api
 * @param data 登录数据
 * @returns
 */
export const loginApi = (data: UserLoginType): Promise<IResponse> => {
  return request.post({
    url: '/usr/login',
    data,
  });
};

/**
 * 登出api
 * @returns
 */
export const loginOutApi = (): Promise<IResponse> => {
  return request.get({
    url: '/usr/loginOut',
  });
};

/**
 * 短信验证api
 * @returns
 */
export const smsLoginApi = (data: SmsLoginType): Promise<IResponse> => {
  return request.post({
    url: '/usr/smsLogin',data
  });
};

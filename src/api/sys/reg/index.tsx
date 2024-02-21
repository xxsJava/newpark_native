/*
 * @Author: zhn
 * @Date: 2024-1-26 10:06:58
 * @LastEditTime:
 * @FilePath: \newpark_native\src\api\sys\reg\index.tsx
 * @Description:注册接口
 */
import request from '../../../config/axios';
import {UserRegType,selectSchoolType} from './types';

/**
 * 注册api
 * @param data 注册数据
 * @returns
 */
export const regApi = (data: UserRegType): Promise<IResponse> => {
  return request.post({
    url: '/usr/registeredInfo',
    data,
  });
};
/**
 * 查询学校api
 * @param data 查询学校数据
 * @returns
 */
export const selSchoolApi = (data: selectSchoolType): Promise<IResponse> => {
    return request.get({
      url: '/usr/schoolFindAll', data
    });
  };
  /**
 * token登录api
 * @param data token登录
 * @returns
 */
export const tokenApi = (): Promise<IResponse> => {
  return request.post({
    url: '/usr/loginToken'
  });
};
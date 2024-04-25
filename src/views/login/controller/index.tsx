/*
 * @Author: xxs
 * @Date: 2023-10-24 17:48:22
 * @LastEditTime: 2024-04-25 09:25:23
 * @FilePath: \newpark_native\src\views\login\controller\index.tsx
 * @Description: 登录控制器
 */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { getOpenIMConfig } from '../../../api/imApi';
import { loginTokenApi } from '../../../api/sys/lgoin';
import OpenIMConfig from '../../../config/im/OpenIMConfig';
import { navigate } from '../../../config/routs/NavigationContainer';
import IMSDKRN from '../../../plugins/IMSDKRN';
import LoginStacker from '../../../routes/stacker/Login';
import Storage from '../../../utils/AsyncStorageUtils';
import DateTimeUtils from '../../../utils/DateTimeUtils';

console.log('进入登录控制器');

const Stack = createNativeStackNavigator();

let isLoginFlag = false;
//验证登录直接放行
const loginVal = async () => {
  
  const tokenStr = await Storage.get('usr-token');
  console.log('获取到用户token', tokenStr);
  if (tokenStr == null || tokenStr == undefined) {
    isLoginFlag = false;
    return;
  }

  //token校验
  const loginTokenAPI = await loginTokenApi();
  if (loginTokenAPI.code === 200) {
    console.log(loginTokenAPI.data);
  
    //更新用户token
    Storage.set('usr-token', loginTokenAPI.data.usrToken);
    const uId:any = loginTokenAPI.data.uId;
    Storage.set('usr-uId',uId);
    console.log('获取登录UID----------->',uId);
    OpenIMConfig.userID = uId;
    //OpenIM 连接
    console.log('------------------->连接OpenIm');
    const openIMRes = await getOpenIMConfig(OpenIMConfig);
    console.log('------------------->',openIMRes);
    Storage.set('openim-token',openIMRes.data.token);
    //oepnIm 登录
    
    IMSDKRN.login(uId, openIMRes.data.token);
    isLoginFlag = true;
    return;
  }
  isLoginFlag = false;
};

loginVal();


const Islogin = () => {
  console.log('获取到当前时间戳', DateTimeUtils.timestamps())
  console.log("转时间戳",DateTimeUtils.formattedDateStr('2023-11-01 00:00:00'))
  console.log("时间戳转格式",DateTimeUtils.formattedDateTime(1698827125))
  console.log('查看登录状态------>', isLoginFlag);
  
  return isLoginFlag ? (
    // return true ? (
    <Stack.Navigator initialRouteName="RootMain">
      <Stack.Screen
        name="RootMain"
        initialParams={{routName: 'LoginHome'}}
        component={LoginStacker}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        initialParams={{routName: 'LoginStacker'}}
        component={LoginStacker}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Islogin;

//忘记密码
export const forgetPass = () => {
  navigate('ForgetPass');
};

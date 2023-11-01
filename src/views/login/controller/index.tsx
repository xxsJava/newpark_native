import {BommonTab} from '../../../routes/stacker';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Storage from '../../../utils/AsyncStorageUtils';
import LoginStacker from '../../../routes/stacker/Login';
<<<<<<< HEAD
import { useNavigation } from '@react-navigation/native';
import { navigate } from '../../../config/routs/NavigationContainer';
=======
import {navigate} from '../../../config/routs/NavigationContainer';
import {useCounter} from '../../../hooks/state';
import {useToast} from 'native-base';
import {loginTokenApi, smsLoginApi} from '../../../api/sys/lgoin';
import {SmsLoginType} from '../../../api/sys/lgoin/types';
import  DateTimeUtils  from '../../../utils/DateTimeUtils';
>>>>>>> 730c22b2e88dadf99ce1f4112a858aa907cffc30

/*
 * @Author: xxs
 * @Date: 2023-10-24 17:48:22
 * @LastEditTime: 2023-11-01 15:16:51
 * @FilePath: \newpark_native\src\views\login\controller\index.tsx
 * @Description: 登录控制器
 */
console.log('进入登录控制器');

const Stack = createNativeStackNavigator();

let isLoginFlag = false;
//验证登录直接放行
const loginVal = async () => {
<<<<<<< HEAD
  // const login = await Storage.isGet('usr-login');
  // isFlag = login;
  // return login;
  navigate('LoginHome')
=======
  
  const tokenStr = await Storage.get('usr-token');
  console.log('获取到用户token', tokenStr);

  if (tokenStr == null || tokenStr == undefined) {
    return;
  }

  //token校验
  const loginTokenAPI = await loginTokenApi(tokenStr);
  if (loginTokenAPI.code === 200) {
    console.log(loginTokenAPI);
  
    //更新用户token
    Storage.set('usr-token', loginTokenAPI.data);
    isLoginFlag = true;
    return;
  }
  isLoginFlag = false;
>>>>>>> 730c22b2e88dadf99ce1f4112a858aa907cffc30
};

loginVal();

<<<<<<< HEAD
export const isLogin = () => {
  console.log('查看登录状态' + isFlag);
  return true ? (
=======
const Islogin = () => {
  console.log('获取到当前时间戳', DateTimeUtils.timestamps())
  console.log("转时间戳",DateTimeUtils.formattedDateStr('2023-11-01 00:00:00'))
  console.log("时间戳转格式",DateTimeUtils.formattedDateTime(1698827125))
  console.log('查看登录状态------>', isLoginFlag);
  
  return isLoginFlag ? (
>>>>>>> 730c22b2e88dadf99ce1f4112a858aa907cffc30
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

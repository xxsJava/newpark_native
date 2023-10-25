/*
 * @Author: xxs
 * @Date: 2023-10-24 16:42:40
 * @LastEditTime: 2023-10-25 10:34:41
 * @FilePath: \newpark_native\src\config\routs\index.tsx
 * @Description: 路由配置
 */

import { RouteProp } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

/**
 * 定义路由
 */
export type RootStackParamList = {
  Root: undefined;
  Login: undefined;
  LoginHome: undefined;
  Home: undefined;
  NewPatk: undefined;
  Profile: {userId: string};
};

export type RootScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Root'>;
};

export type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export type NewPatkScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'NewPatk'>;
};

type ProfileScreenProps = {
  route: RouteProp<RootStackParamList, 'Profile'>;
};

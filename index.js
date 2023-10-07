/*
 * @Author: xxs
 * @Date: 2023-10-04 23:22:00
 * @LastEditTime: 2023-10-08 00:33:22
 * @FilePath: \newpark_native\index.js
 * @Description: desc
 */
/**
 * @format
 */
import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.log("项目开始运行")

AppRegistry.registerComponent(appName, () => App);

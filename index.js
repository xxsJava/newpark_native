/*
 * @Author: xxs
 * @Date: 2023-10-04 23:22:00
 * @LastEditTime: 2023-10-31 16:40:15
 * @FilePath: \newpark_native\index.js
 * @Description: desc
 */
/**
 * @format
 */
import './src/config/run-conrig'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.log("项目开始启动运行")

AppRegistry.registerComponent(appName, () => App);

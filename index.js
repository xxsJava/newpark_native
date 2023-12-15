/*
 * @Author: xxs
 * @Date: 2023-10-04 23:22:00
 * @LastEditTime: 2023-12-13 15:20:03
 * @FilePath: \newpark_native\index.js
 * @Description: desc
 */
import './src/config/run-conrig'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.log("项目开始启动运行")

AppRegistry.registerComponent(appName, () => App);

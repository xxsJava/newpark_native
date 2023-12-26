/*
 * @Author: xxs
 * @Date: 2023-10-04 23:22:00
 * @LastEditTime: 2023-12-26 10:56:03
 * @FilePath: \newpark_native\index.js
 * @Description: desc
 */
import './src/config/run-conrig'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

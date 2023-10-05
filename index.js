/**
 * @format
 */
import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.log("项目新建")

AppRegistry.registerComponent(appName, () => App);

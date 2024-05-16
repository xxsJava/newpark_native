/*
 * @Author: xxs
 * @Date: 2023-10-14 16:08:59
 * @LastEditTime: 2024-05-15 14:33:16
 * @FilePath: \newpark_native\src\styles\index.tsx
 * @Description: 全局样式
 */
import { StyleSheet } from 'react-native';

const StylesALL = StyleSheet.create({
  //画线
  BORDER_TEST: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
  },
  //路由导航样式
  navText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  imgSize:{
    width:'100%',
    height:'100%'
  },
  fWeBold:{
    fontWeight:'bold'
  }
});

export default StylesALL;

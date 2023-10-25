/*
 * @Author: xxs
 * @Date: 2023-10-25 10:53:48
 * @LastEditTime: 2023-10-25 17:39:40
 * @FilePath: \newpark_native\src\views\home\controller\index.tsx
 * @Description: Home页面业务逻辑控制器
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  GestureHandlerRootView,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import {postsOrdinary} from '../components';

//帖子列表遍历
export const postsList = (item: any, index: any, separators: any) => {
  return (
    <GestureHandlerRootView>
      {
        //普通帖子
        postsOrdinary(item, index, separators)
      }
    </GestureHandlerRootView>
  );
};

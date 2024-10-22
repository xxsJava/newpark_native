/*
 * @Author: xxs
 * @Date: 2023-10-25 10:53:48
 * @LastEditTime: 2024-05-29 14:53:19
 * @FilePath: \newpark_native\src\views\home\controller\index.tsx
 * @Description: Home页面业务逻辑控制器
 */

import React from 'react';
import {
  GestureHandlerRootView
} from 'react-native-gesture-handler';
import postsOrdinary from '../components';

//帖子列表遍历
export const postsList = ({item, index, separators}:any) => {
  return (
    <GestureHandlerRootView>
      {
        //帖子
        postsOrdinary(item,index, separators)
      }
    </GestureHandlerRootView>
  );
};

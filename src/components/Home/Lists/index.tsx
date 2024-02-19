/*
 * @Author: xxs
 * @Date: 2023-10-14 16:08:59
 * @LastEditTime: 2024-02-19 09:46:21
 * @FilePath: \newpark_native\src\components\Home\Lists\index.tsx
 * @Description: desc
 */

import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {postsList} from '../../../views/home/controller';
import ColumnType from '../ColumnType'


//渲染列表
export const LsitRecommend = (props:any) => {
  const [loadTrue, loadFalse] = useState(true);
  //上拉加载更多数据
  const loadMoreData = () => {
    setTimeout(() => {
      console.log('上拉加载数据');
      loadFalse(false);
    }, 3000);
  };
  console.log('传递的参数',props.message)
  
  return (
    <FlatList
      data={props.message}
      ListHeaderComponent={<ColumnType></ColumnType>}
      onEndReached={() => loadMoreData()}
      renderItem={postsList}
      // onEndReachedThreshold={0.1}
      ItemSeparatorComponent={() => {
        return <View style={{height: 5}} />;
      }}
      keyExtractor={item => item.index}
    />
  );
};

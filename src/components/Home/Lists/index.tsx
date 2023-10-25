/*
 * @Author: xxs
 * @Date: 2023-10-14 16:08:59
 * @LastEditTime: 2023-10-25 12:39:11
 * @FilePath: \newpark_native\src\components\Home\Lists\index.tsx
 * @Description: desc
 */

import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {postsList} from '../../../views/home/controller';
import {renderLoadMoreView} from '../../Load';
import { postsData } from '../../../views/home/mock';

//渲染列表
export const LsitRecommend = () => {
  const [loadTrue, loadFalse] = useState(true);
  //上拉加载更多数据
  const loadMoreData = () => {
    setTimeout(() => {
      console.log('上拉加载数据');
      loadFalse(false)
    }, 3000);
  };
  return (
    <FlatList
      data={postsData}
      ListFooterComponent={renderLoadMoreView(loadTrue)}
      onEndReached={() => loadMoreData()}
      renderItem={({item, index, separators}) =>
        postsList(item, index, separators)
      }
      keyExtractor={item => item.key}
    />
  );
};

/*
 * @Author: xxs
 * @Date: 2023-10-13 10:09:01
 * @LastEditTime: 2024-04-08 16:05:03
 * @FilePath: \newpark_native\src\components\Home\index.tsx
 * @Description: Home 页菜单
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { postList } from '../../api/sys/home';
import { postListType } from '../../api/sys/home/types';
import { LsitRecommend } from './Lists';


//菜单组件数据
const menusData = [
  {
    title: 'home.help',
    desc: 'home.help1',
    type: true,
  },
  {
    title: 'home.order',
    desc: 'home.order1',
    type: false,
  },
];

const postType: postListType = {
  pageNo:1,
  pageSize:5
};

const HomeComponents = () => {
  const [postListData,setPostListData] = React.useState([])

  const PostsData = async () => {
      const postListAPI = await postList(postType);
      setPostListData(postListAPI.data)
      console.log('postVal',postListAPI)
  }

  React.useEffect(() => {
    PostsData()
  }, []); // 只在组件挂载时调用一次

  // PostsData()

  return (
    <>
      <View style={styles.postsList}>
        <LsitRecommend message={postListData} />
        
      </View>
    </>
  )
}

export default HomeComponents;

const styles = StyleSheet.create({
  postsList: {
    flex: 1,
    width: '98%',
    marginLeft: '1%',
    marginTop: '1%',
    borderRadius: 5,
  },
});


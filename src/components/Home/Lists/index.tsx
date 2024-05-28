/*
 * @Author: xxs
 * @Date: 2023-10-14 16:08:59
 * @LastEditTime: 2024-05-28 17:18:44
 * @FilePath: \newpark_native\src\components\Home\Lists\index.tsx
 * @Description: desc
 */

import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { postsList } from '../../../views/home/controller';
import ColumnType from '../ColumnType';


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
      data={postsTestData}
      ListHeaderComponent={<ColumnType></ColumnType>}
      onEndReached={() => loadMoreData()}
      renderItem={postsList}
      // onEndReachedThreshold={0.1}
      ItemSeparatorComponent={() => {
        return <View style={{height: 1}} />;
      }}
      keyExtractor={item => item.index}
    />
  );
};

const postsTestData = [
  {
    "labs": [], 
    "postsComments": [], 
    "schoolId": 1764, 
    "tauthorId": 10000, 
    "tbrowseCount": null, 
    "tcomCount": 0, 
    "tcontext": "跟着我一起享受自由！！！", 
    "tforwardCount": 0, 
    "tid": 1222214740396478500, 
    "tlastTime": 1000000000, 
    "tlikeCount": 0, 
    "tpubTime": 1716863947, 
    "ttype": "3", 
    "ttypeId": 2, 
    "unikname": "小学牛", 
    "upath": "https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg",
    "imgs": [],
    "musicPath": 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/video/1.mp4'
  },{
    "labs": [], 
    "postsComments": [], 
    "schoolId": 1764, 
    "tauthorId": 10000, 
    "tbrowseCount": null, 
    "tcomCount": 0, 
    "tcontext": "今天看见一个非常好看的电影", 
    "tforwardCount": 0, 
    "tid": 1222214740396478500, 
    "tlastTime": 1000000000, 
    "tlikeCount": 0, 
    "tpubTime": 1716863947, 
    "ttype": "2", 
    "ttypeId": 2, 
    "unikname": "小学牛", 
    "upath": "https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg",
    "imgs": [],
    "videoPath": 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/video/1.mp4'
  },
  {
    "labs": [],
    "postsComments": [],
    "schoolId": 1764, 
    "tauthorId": 10000,
    "tbrowseCount": null, 
    "tcomCount": 0, 
    "tcontext": "我是一个标题", 
    "tforwardCount": 0, 
    "tid": 1189994043138117600, 
    "tlastTime": 1000000000, 
    "tlikeCount": 0, 
    "tpubTime": 1716863922, 
    "ttype": "0", 
    "ttypeId": 1, 
    "unikname": "小学牛", 
    "upath": "https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg",
    "imgs": [
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
    ]
  }, 
  {
    "labs":[], 
    "postsComments": [], 
    "schoolId": 1764, 
    "tauthorId": 1742430171993788400, 
    "tbrowseCount": null, 
    "tcomCount": 0, 
    "tcontext": "测试标题,发布帖子", 
    "tforwardCount": 0, 
    "tid": 1189995816540180500, 
    "tlastTime": 1000000000, 
    "tlikeCount": 0, 
    "tpubTime": 1716863947, 
    "ttype": "0", 
    "ttypeId": 1, 
    "unikname": "回忆往昔", 
    "upath": "https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%2811%29.jpg",
    "imgs": [
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
    ]
  }, 
  {
    "labs": [], 
    "postsComments": [], 
    "schoolId": 1764, 
    "tauthorId": 10000, 
    "tbrowseCount": null, 
    "tcomCount": 0, 
    "tcontext": "测试标题,发布帖子", 
    "tforwardCount": 0, 
    "tid": 1222214740396478500, 
    "tlastTime": 1000000000, 
    "tlikeCount": 0, 
    "tpubTime": 1716863947, 
    "ttype": "0", 
    "ttypeId": 1, 
    "unikname": "小学牛", 
    "upath": "https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg",
    "imgs": [
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
    ]
  }, 
  {
    "labs": [], 
    "postsComments": [], 
    "schoolId": 1764, 
    "tauthorId": 10000, 
    "tbrowseCount": null, 
    "tcomCount": 0, 
    "tcontext": "测试标题,发布帖子", 
    "tforwardCount": 0, 
    "tid": 1222214740396478500, 
    "tlastTime": 1000000000, 
    "tlikeCount": 0, 
    "tpubTime": 1716863947, 
    "ttype": "0", 
    "ttypeId": 1, 
    "unikname": "小学牛", 
    "upath": "https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg",
    "imgs": [
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
    ]
  }, 
  {
    "labs": [], 
    "postsComments": [], 
    "schoolId": 1764, 
    "tauthorId": 10000, 
    "tbrowseCount": null, 
    "tcomCount": 0, 
    "tcontext": "测试标题,发布帖子", 
    "tforwardCount": 0, 
    "tid": 1222214740396478500, 
    "tlastTime": 1000000000, 
    "tlikeCount": 0, 
    "tpubTime": 1716863947, 
    "ttype": "0", 
    "ttypeId": 1, 
    "unikname": "小学牛", 
    "upath": "https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg",
    "imgs": [
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
    ]
  }, 
  {
    "labs": [], 
    "postsComments": [], 
    "schoolId": 1764, 
    "tauthorId": 10000, 
    "tbrowseCount": null, 
    "tcomCount": 0, 
    "tcontext": "测试标题,发布帖子", 
    "tforwardCount": 0, 
    "tid": 1222214740396478500, 
    "tlastTime": 1000000000, 
    "tlikeCount": 0, 
    "tpubTime": 1716863947, 
    "ttype": "0", 
    "ttypeId": 1, 
    "unikname": "小学牛", 
    "upath": "https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg",
    "imgs": [
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
    ]
  }, 
  {
    "labs": [], 
    "postsComments": [], 
    "schoolId": 1764, 
    "tauthorId": 10000, 
    "tbrowseCount": null, 
    "tcomCount": 0, 
    "tcontext": "测试标题,发布帖子", 
    "tforwardCount": 0, 
    "tid": 1222214740396478500, 
    "tlastTime": 1000000000, 
    "tlikeCount": 0, 
    "tpubTime": 1716863947, 
    "ttype": "0", 
    "ttypeId": 1, 
    "unikname": "小学牛", 
    "upath": "https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg",
    "imgs": [
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
    ]
  }, 
  {
    "labs": [], 
    "postsComments": [], 
    "schoolId": 1764, 
    "tauthorId": 10000, 
    "tbrowseCount": null, 
    "tcomCount": 0, 
    "tcontext": "测试标题,发布帖子", 
    "tforwardCount": 0, 
    "tid": 1222214740396478500, 
    "tlastTime": 1000000000, 
    "tlikeCount": 0, 
    "tpubTime": 1716863947, 
    "ttype": "0", 
    "ttypeId": 1, 
    "unikname": "小学牛", 
    "upath": "https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg",
    "imgs": [
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
    ]
  }, 
  {
    "labs": [], 
    "postsComments": [], 
    "schoolId": 1764, 
    "tauthorId": 10000, 
    "tbrowseCount": null, 
    "tcomCount": 0, 
    "tcontext": "测试标题,发布帖子", 
    "tforwardCount": 0, 
    "tid": 1222214740396478500, 
    "tlastTime": 1000000000, 
    "tlikeCount": 0, 
    "tpubTime": 1716863947, 
    "ttype": "0", 
    "ttypeId": 1, 
    "unikname": "小学牛", 
    "upath": "https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg",
    "imgs": [
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
        'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg',
    ]
  }, 
  {
    "labs": [], 
    "postsComments": [], 
    "schoolId": 1764, 
    "tauthorId": 10000, 
    "tbrowseCount": null, 
    "tcomCount": 0, 
    "tcontext": "看山不是山,看山还是山,看山不是山,看山还是山,看山不是山,看山还是山,看山不是山,看山还是山，看山不是山,看山还是山", 
    "tforwardCount": 0, 
    "tid": 1222214740396478500, 
    "tlastTime": 1000000000, 
    "tlikeCount": 0, 
    "tpubTime": 1716863947, 
    "ttype": "0", 
    "ttypeId": 1, 
    "unikname": "小学牛", 
    "upath": "https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg",
    "imgs": []
  }, 
  
]
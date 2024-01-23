import React, { useState } from 'react';
import { View, Text, FlatList, RefreshControl,Button } from 'react-native';

import { postListType } from '../../../../api/sys/home/types';
import { navigate } from '../../../../config/routs/NavigationContainer';
const YourComponent = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([
   {
    id:1,
    title:'小学生'
   },
   {
    id:2,
    title:'初中'
   },
   {
    id:3,
    title:'高中'
   },
  ]
  ); // 假设这是你要展示的数据

  const onRefresh = () => {
    setRefreshing(true);
    // 在这里可以触发数据刷新的操作，比如从服务器获取最新数据

    setTimeout(() => {
      // 模拟异步操作，实际情况下可以是网络请求等
      setData([
          {
            id:1,
            title:'小学生1'
           },
           {
            id:2,
            title:'初中1'
           },
           {
            id:3,
            title:'高中1'
           },
      ]);
      setRefreshing(false);
    }, 1000);
  };

  return (
   <View>
     <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      keyExtractor={(item) => item.id}
      refreshControl={
        <RefreshControl
        colors={['#FABA3C', '#FA953C', '#FA3C3C']} // 设置刷新指示器颜色
        progressBackgroundColor="#ffffff" // 设置刷新指示器背景色
        size="large" // 设置刷新指示器大小
        title='loding'
        titleColor='#FABA3C'
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
    <Button
  onPress={() =>navigate('SanJiLiand')}
  title='测试三级联动'
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
   </View>
  );
};

export default YourComponent;
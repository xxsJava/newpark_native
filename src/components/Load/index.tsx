import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';


//上拉加载布局
export const renderLoadMoreView = (isLoad: boolean) => {
  console.log('加载上拉布局');
  return (
    <View style={styles.loadMore}>
      <ActivityIndicator size={'large'} color={'red'} animating={isLoad} />
      <Text>正在加载更多</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadMore: {
    alignItems: 'center',
  },
});

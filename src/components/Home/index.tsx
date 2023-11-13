/*
 * @Author: xxs
 * @Date: 2023-10-13 10:09:01
 * @LastEditTime: 2023-10-25 17:14:49
 * @FilePath: \newpark_native\src\components\Home\index.tsx
 * @Description: Home 页菜单
 */

import React from 'react';
import MenusComponents from './Menu';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import SortTabNav from './SortType';
import {LsitRecommend} from './Lists';
import StylesALL from '../../styles';
import ColumnType from './ColumnType'


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

const HomeComponents = () => (
  <>
    <ColumnType></ColumnType>
    <View style={styles.postsList}>
      <LsitRecommend />
    </View>
  </>
);

const styles = StyleSheet.create({
  styleAll: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
  },
  wd: {
    width: '40%',
    height: 80,
    borderRadius: 5,
    marginLeft: '4%',
    marginRight: '4%',
    shadowOpacity: 0,
    elevation: 0,
  },
  back: {
    backgroundColor: '#24C78C',
  },
  back1: {
    backgroundColor: '#008ACC',
  },
  menuTabNav: {
    width: '98%',
    height: 40,
    backgroundColor: '#FFF',
    elevation: 5,
    marginLeft: '1%',
    borderRadius: 3,
    position: 'relative',
    flexDirection: 'row',
  },
  postsList: {
    flex: 1,
    width: '98%',
    marginLeft: '1%',
    marginTop: '1%',
    borderRadius: 5,
  },
});

export default HomeComponents;

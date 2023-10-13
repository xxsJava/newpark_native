/*
 * @Author: xxs
 * @Date: 2023-10-13 10:09:01
 * @LastEditTime: 2023-10-13 17:48:07
 * @FilePath: \newpark_native\src\components\Home\index.tsx
 * @Description:
 */

import React from 'react';
import MenusComponents from './Menu';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
  StyleProp,
  ViewProps,
  ViewStyle,
  SafeAreaView,
} from 'react-native';
import SortTabNav from './SortType';
import {LsitRecommend} from './Lists';

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
  <View>
    <View style={styles.styleAll}>
      <View style={[styles.wd, styles.back]}>
        <MenusComponents props={menusData[0]} />
      </View>
      <View style={[styles.wd, styles.back1]}>
        <MenusComponents props={menusData[1]} />
      </View>
    </View>

    <View style={styles.menuTabNav}>
      <SortTabNav />
    </View>

    <View style={styles.postsList}>
      <SafeAreaView>
        <LsitRecommend />
      </SafeAreaView>
    </View>
  </View>
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
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 15,
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
    width: '96%',
    marginLeft: '2%',
    marginTop: '2%',
    borderRadius: 5,
  },
});

export default HomeComponents;

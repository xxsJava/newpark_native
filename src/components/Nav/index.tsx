/*
 * @Author: xxs
 * @Date: 2023-10-13 09:29:33
 * @LastEditTime: 2023-10-13 17:30:25
 * @FilePath: \newpark_native\src\components\Nav\index.tsx
 * @Description: 顶部tab 导航文件
 */
import * as React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

const HomeNav = () => (
  <Appbar.Header>
    <View style={styles.navWiidtha}>
      <View style={styles.schoolTypeNava}>
        <Text style={styles.shoolTextCent}>全国</Text>
      </View>
      <View style={styles.schoolTypeNavb}>
        <Text style={styles.shoolTextCent}>本校</Text>
      </View>
    </View>
    <View style={styles.searchNav} />
    <Appbar.Action
      icon={require('../../assets/images/3.0x/goods_collect.png')}
      onPress={() => {}}
    />
  </Appbar.Header>
);

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navWiidtha: {
    width: Dimensions.get('window').width * 0.2,
  },
  schoolTypeNava: {
    width: 35,
    height: 35,
    backgroundColor: '#FABA3C',
    borderRadius: 50,
    justifyContent: 'center',
    margin: 10,
  },
  schoolTypeNavb: {
    width: 35,
    height: 35,
    backgroundColor: '#FDE5B4',
    borderRadius: 50,
    justifyContent: 'center',
    position: 'absolute',
    left: 25,
    top: 10,
    zIndex: -1,
  },
  shoolTextCent: {
    textAlign: 'center',
    color: '#FFF',
  },
  searchNav: {
    width: Dimensions.get('window').width * 0.65,
    height: 35,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
  },
});

export default HomeNav;

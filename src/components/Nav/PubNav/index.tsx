/*
 * @Author: xxs
 * @Date: 2023-10-27 09:46:08
 * @LastEditTime: 2023-10-27 10:39:03
 * @FilePath: \newpark_native\src\components\Nav\PubNav\index.tsx
 * @Description: 公共顶部导航条
 */

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native-animatable';

const PubNav = (desc:string) => {

  const navigation = useNavigation();
  return (
    <View style={styles.navTop}>
      <View style={styles.navLeft}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.tinyLogo}
            source={require('../../../assets/images/3.0x/go_left_arrow.png')}
            accessibilityLabel='图片'
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text allowFontScaling={false} style={styles.contentText}>{desc}</Text>
      </View>
      <View style={styles.navRight} />
    </View>
  );
};

const styles = StyleSheet.create({
  navTop: {
    height: 50,
    flexDirection: 'row',
    position: 'relative',
    top: 0,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#BBBBBB'
  },
  navLeft: {
    width: '15%',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '70%',
  },
  navRight: {
    width: '15%',
    // backgroundColor: '#fff',
  },
  tinyLogo: {
    width: 26,
    height: 26,
  },
  contentText: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 50,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default PubNav;

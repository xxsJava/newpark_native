/*
 * @Author: xxs
 * @Date: 2023-10-14 16:08:59
 * @LastEditTime: 2023-10-25 14:37:26
 * @FilePath: \newpark_native\src\components\Home\SortType\index.tsx
 * @Description: desc
 */
import React, {useState} from 'react';
import StylesALL from '../../../styles';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {useTranslation, Trans} from 'react-i18next';

/**
 * 代码描述: home页 排序导航布局
 * 作者: xxs
 * 创建时间:2023/10/13 15:10:11
 */
const SortTabNav = () => {
  const [activeTab, setActiveTab] = useState('sort1');
  const {t} = useTranslation();

  const handleTabPress = (tab: string) => {
    console.log('Tab状态' + tab);
    setActiveTab(tab);
  };

  return (
    <>
      <View style={[styles.menuTabNavLeft]}>
        <View style={styles.padd}>
          <TouchableOpacity onPress={() => handleTabPress('sort1')}>
            <Text
              style={[
                styles.menuFont,
                activeTab === 'sort1' && StylesALL.FONT_SYS,
              ]}>
              <Trans>sort.sortType</Trans>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.padd}>
          <TouchableOpacity onPress={() => handleTabPress('sort2')}>
            <Text
              style={[
                styles.menuFont,
                activeTab === 'sort2' && StylesALL.FONT_SYS,
              ]}>
              <Trans>sort.sortType1</Trans>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.padd}>
          <TouchableOpacity onPress={() => handleTabPress('sort3')}>
            <Text
              style={[
                styles.menuFont,
                activeTab === 'sort3' && StylesALL.FONT_SYS,
              ]}>
              <Trans>sort.sortType2</Trans>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.padd}>
          <TouchableOpacity onPress={() => handleTabPress('sort4')}>
            <Text
              style={[
                styles.menuFont,
                activeTab === 'sort4' && StylesALL.FONT_SYS,
              ]}>
              <Trans>sort.sortType3</Trans>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.menuTabNavRight}>
        <Text style={[styles.menuFont, styles.mentSort]}>
          <Trans>sort.sorts</Trans>
        </Text>
        <Text style={styles.icons}>
          <Icons name="chevron-down-outline" color={'#BBBBBB'} />
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  menuTabNavLeft: {
    width: '50%',
    flexDirection: 'row',
  },
  menuFont: {
    lineHeight: 40,
    fontSize: 14,
  },
  padd: {
    paddingLeft: '10.5%',
  },
  menuTabNavRight: {
    width: '15%',
    height: '100%',
    position: 'absolute',
    flexDirection: 'row',
    right: 8,
  },
  mentSort: {
    fontSize: 12,
    color: '#BBBBBB',
  },
  icons: {
    lineHeight: 39,
  },
});

export default SortTabNav;

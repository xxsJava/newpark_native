import React from 'react';
import StylesALL from '../../../styles';
import {StyleSheet, Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
/**
 * 代码描述: home页 排序导航布局
 * 作者: xxs
 * 创建时间:2023/10/13 15:10:11
 */
const SortTabNav = () => {
    const {t} = useTranslation()
  return (
    <>
      <View style={[styles.menuTabNavLeft]}>
        <View style={styles.padd}>
          <Text
            style={[styles.menuFont, StylesALL.FONT_SYS, StylesALL.FONT_SIZE]}>
            {t('sort.sortType')}
          </Text>
        </View>
        <View style={styles.padd}>
          <Text style={styles.menuFont}>{t('sort.sortType1')}</Text>
        </View>
        <View style={styles.padd}>
          <Text style={styles.menuFont}>{t('sort.sortType2')}</Text>
        </View>
        <View style={styles.padd}>
          <Text style={styles.menuFont}>{t('sort.sortType3')}</Text>
        </View>
      </View>
      <View style={styles.menuTabNavRight}>
        <Text style={[styles.menuFont, styles.mentSort]}>{t('sort.sorts')}</Text>
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

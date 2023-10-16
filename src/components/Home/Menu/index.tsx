import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import StylesALL from '../../../styles';
import {useTranslation, Trans} from 'react-i18next';
/*
 * @Author: xxs
 * @Date: 2023-10-13 10:15:06
 * @LastEditTime: 2023-10-16 12:10:16
 * @FilePath: \newpark_native\src\components\Home\Menu\index.tsx
 * @Description: 菜单 帮助 和 商品
 */
const MenusComponents = (params?: any) => {
  // const {t} = useTranslation();
  return (
    <View style={[styles.pucs]}>
      <View>
        <Text style={StylesALL.FONT_STY}><Trans>{params.props.title}</Trans></Text>
        <Text style={[StylesALL.FONT_STY, styles.fontSty]}>
          <Trans>{params.props.desc}</Trans>
        </Text>
      </View>
      <View style={styles.imgSty}>
        <Image
          style={styles.imageSize}
          source={
            params.props.type
              ? require('../../../assets/images/3.0x/niuniu_icon.png')
              : require('../../../assets/images/3.0x/fuckniuniu.png')
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  pucs: {
    borderRadius: 10,
    position: 'relative',
    marginTop: 20,
    marginLeft: 10,
  },
  fontSty: {
    fontSize: 10,
  },
  imgSty: {
    width: 41,
    height: 51,
    position: 'absolute',
    right: 10,
  },
  imageSize: {
    width: 41,
    height: 41,
  },
});

export default MenusComponents;

/**
 * 代码描述: home页 顶部推荐栏目布局
 * 作者:cxr
 * 创建时间:2023/11/10 15:42:11
 */
import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform
} from 'react-native';
import {Text} from 'react-native-animatable';
import MenusComponents from '../Menu';
import {useTranslation, Trans} from 'react-i18next';
import {navigate} from '../../../config/routs/NavigationContainer';
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const navigateData = [
  {
    index: 1,
    text: 'sort.sortType',
    icon: require('../../../assets/images/Like-copy.png'),
  },
  {
    index: 2,
    text: 'sort.sortType1',
    icon: require('../../../assets/images/Favorite.png'),
  },
  {
    index: 3,
    text: 'sort.sortType4',
    icon: require('../../../assets/images/Refresh.png'),
  },
];

//菜单组件数据
const menusData = [
    {
      index:0,
      title: 'home.help',
      desc: 'home.help1',
      type: true,
    },
    {
      index:1,
      title: 'home.order',
      desc: 'home.order1',
      type: false,
    },
];

const ColumnType = () => {
  const [selectedVal, onSelected] = React.useState(1);
  return (
    <View style={styles.typeStyle}>
      <View style={styles.navigationStyle}>
        {navigateData.map(item => {
          return (
            <View key={item.index}>
              <TouchableOpacity
                style={[
                  styles.navigationItem,
                  selectedVal === item.index
                    ? styles.onSelectedBorder
                    : styles.selectedBorder,
                ]}
                onPress={() => onSelected(item.index)}>
                <Image style={styles.navigationItemImage} source={item.icon} />
                <Text allowFontScaling={false} style={styles.navigationItemText}>
                  <Trans>{item.text}</Trans>
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={styles.modalAll}>
        <TouchableOpacity
        key={menusData[0].index}
          style={[styles.wd, styles.back]}
          onPress={() => navigate('HelpCircleRoute')}>
          <View>
            <MenusComponents props={menusData[0]} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          key={menusData[1].index}
          style={[styles.wd, styles.back1]}
          onPress={() => navigate('ProductRoute')}>
          <View>
            <MenusComponents props={menusData[1]} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  typeStyle: {
    width: windowWidth,
    // height:60
  },
  modalAll:{
    marginTop:5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wd: {
    width: '45%',
    height: 110,
    borderRadius: 18,
    marginLeft: '2%',
    marginRight: '2%',
    shadowOpacity: 0,
    marginBottom:10,
    ...Platform.select({
        ios: {
          shadowColor: '#999', //设置阴影色
          shadowOffset: {width: 0, height: 0}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
          shadowOpacity: 1,
          shadowRadius: 6.5, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
        },
        android: {
          elevation: 2,
        },
    }),
  },
  back: {
    backgroundColor: '#24C78C',
  },
  back1: {
    backgroundColor: '#008ACC',
  },
  navigationStyle: {
    width: windowWidth - 30,
    height: 50,
    marginTop: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navigationItem: {
    width: 88,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navigationItemImage: {
    width: 26,
    height: 26,
    marginTop: 5,
    marginRight: 5,
  },
  navigationItemText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    letterSpacing: 1,
    lineHeight: 35,
  },
  selectedBorder: {
    borderColor: '#6a1b9a',
  },
  onSelectedBorder: {
    borderColor: '#faba3c',
  },
});

export default ColumnType;

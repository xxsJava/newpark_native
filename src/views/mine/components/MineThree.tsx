/*
 * @Author: xxs
 * @Date: 2023-10-13 10:09:01
 * @LastEditTime: 2023-10-25 17:14:49
 * @FilePath: \newpark_native\src\components\Home\index.tsx
 * @Description: Home 页菜单
 */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { useTranslation, Trans } from 'react-i18next';
import LinearGradinet from 'react-native-linear-gradient';
import { navigate } from '../../../config/routs/NavigationContainer';
import PersonalDataView from '../components/setup/PersonalData'
import HomePageView from '../components/homepage'

import {
  Text,
  StyleSheet,
  Platform,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import {red} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const list1 = [
  {
    index:1,
    img: require('../../../assets/images/tup/z3.png'),
    title: '邀请达人',
    text: '已邀请了10人'
  },
  {
    index:2,
    img: require('../../../assets/images/tup/z4.png'),
    title: '有梗达人',
    text: '已有50人关注您'
  },
  {
    index:3,
    img: require('../../../assets/images/tup/z1.png'),
    title: '组队达人',
    text: '您已组织了五个团队'
  },
  {
    index:4,
    img: require('../../../assets/images/tup/z2.png'),
    title: '社交达人',
    text: '您已有200个好友'
  },
  {
    index:5,
    img: require('../../../assets/images/tup/z5.png'),
    title: '签到达人',
    text: '您已连续签到20天'
  },
  {
    index:6,
    img: require('../../../assets/images/tup/z6.png'),
    title: '消息达人',
    text: '您已发布了80个帖子'
  },
  {
    index:7,
    img: require('../../../assets/images/tup/z7.png'),
    title: '交易达人',
    text: '您已完成5场交易'
  },
]
const list2 = [
  {
    index:1,
    type:'商品',
    img:require('../../../assets/images/tup/cd.png'),
    title:'未开封的毛绒白猫',
    price:'500'
  },
  {
    index:2,
    type:'商品',
    img:require('../../../assets/images/tup/erji.jpg'),
    title:'全新耳机',
    price:'600'
  },
  {
    index:3,
    type:'商品',
    img:require('../../../assets/images/tup/cd.png'),
    title:'吃饭搭子',
    price:'0.01'
  },
  {
    index:4,
    type:'悬赏',
    text:'去学校东门买六根烤肠，不要辣，多抹点酱！！！',
    title:'去校门口买个烤肠',
    price:'2.5'
  },
]

const MineVIew = () => {
  const [tabVal, onTabPress] = React.useState(1)
  return (
    <SafeAreaView style={styles.safeStyle}>
      <View style={styles.parentLevel}>
        <ScrollView style={styles.scrollStyle} alwaysBounceVertical={true}>
          <View>
            <View style={styles.bgBox}>
              <TouchableOpacity onPress={() => navigate('SetUpRoute')}>
                <Icon
                  name="cog"
                  size={30}
                  color="white"
                  style={styles.boxIcon}

                />
              </TouchableOpacity>
              <View style={styles.boxnNav}>
                <View style={styles.boxItem}>
                  <Text allowFontScaling={false} >0</Text>
                  <Text allowFontScaling={false} style={styles.navTabColor}>
                    <Trans>mineNav.navTab1</Trans>
                  </Text>
                </View>
                <View style={styles.boxItem}>
                  <Text allowFontScaling={false}>0</Text>
                  <Text allowFontScaling={false} style={styles.navTabColor}>
                    <Trans>mineNav.navTab2</Trans>
                  </Text>
                </View>
                <View style={styles.boxItem} >
                  <Text allowFontScaling={false} style={styles.navTab3} >
                    <Trans>mineNav.navTab3</Trans>
                  </Text>
                </View>
                <View style={styles.boxItem}>
                  <Text allowFontScaling={false}>0</Text>
                  <Text allowFontScaling={false} style={styles.navTabColor}>
                    <Trans>mineNav.navTab4</Trans>
                  </Text>
                </View>
                <View style={styles.boxItem} >
                  <Text allowFontScaling={false} >0</Text>
                  <Text allowFontScaling={false} style={styles.navTabColor}>
                    <Trans>mineNav.navTab5</Trans>
                  </Text>
                </View>
              </View>
              <View style={styles.boxAvatarParent}>
                {/* 这个是我的里的头像 */}
                <View style={styles.boxAvatar} />
                <View style={styles.avatarView}>
                  <Text allowFontScaling={false} style={styles.avatarnText}>
                    <Trans>mineNav.navTab3</Trans>
                    {/* <Icon name="gem" /> */}
                  </Text>
                  <Image

                    style={styles.avatarnImage}
                    source={require('../../../assets/images/alimom/V1.png')}
                  />
                </View>
                <View style={styles.uidFrame}
                >
                  <View style={styles.uidBg}>
                    <LinearGradinet
                      colors={[
                        'rgba(247, 27, 147,0.90)',
                        'rgba(247, 27, 147,0.20)',
                      ]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.uidBgJb}>
                      <Text allowFontScaling={false} style={styles.uidText} >UID:099624</Text>
                    </LinearGradinet>
                  </View>
                </View>
              </View>
            </View>

          </View>
          <View style={styles.nullk}>

          </View>
          {/* <PersonalDataView></PersonalDataView> */}
          {/* <HomePageView></HomePageView> */}
          <View style={styles.bottBox}>
            <TouchableOpacity onPress={() => onTabPress(1)}>
              <Text allowFontScaling={false} style={[styles.tabText, tabVal == 1 ? styles.tabColor : null]}>帖子</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onTabPress(2)}>
              <Text allowFontScaling={false} style={[styles.tabText, tabVal == 2 ? styles.tabColor : null]}>悬赏/商品</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onTabPress(3)}>
              <Text allowFontScaling={false} style={[styles.tabText, tabVal == 3 ? styles.tabColor : null]}>成就</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.nullf}>
              {list1.map(item => {
                return <View key={item.index}>
                  <View style={tabVal == 3 ? styles.xian : styles.hidd}>
                    <View style={styles.box}>
                      <Image source={item.img} style={styles.listimg}></Image>
                      <View>
                        <Text style={styles.listTit}>{item.title}</Text>
                      </View>
                      <View style={styles.textBox}>
                        <Text style={styles.listText}>{item.text}</Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <View>
                      {list2.map(item =>{
                        return <View key={item.index}>

                        </View>
                      })}
                    </View>
                  </View>
                </View>
              })}
            </View>

          </View>
        </ScrollView>

      </View>
    </SafeAreaView>

  );
}
export default MineVIew;
const styles = StyleSheet.create({
  nullf: {

    zIndex: 9999,
    // position:'absolute',
    // bottom:0,
    // right:0,
    backgroundColor: '#FBF2F7',
    height: 600,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tabColor: {
    fontSize: 17,
    color: '#FABA3C',
    fontWeight: 'bold'
  },
  tabText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 50
  },
  bottBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16
  },
  nullk: {
    height: 50
  },
  safeStyle: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#F49F0B',
    ...Platform.select({
      ios: {
        height: 180
      },
    }),
  },
  parentLevel: {
    width: windowWidth,
    ...Platform.select({
      ios: {
        height: windowHeight - 120,
      },
      android: {
        height: windowHeight - 45,
      }
    })
  },
  scrollStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bgBox: {
    width: windowWidth,
    height: 140,
    alignItems: 'flex-end',
    paddingTop: 15,
    backgroundColor: '#F8B032',
    zIndex: -10,
    position: 'relative',
  },
  boxIcon: {
    marginRight: 15,
  },
  boxnNav: {
    width: windowWidth,
    height: 100,
    borderRadius: 50,
    marginTop: 40,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#999', //设置阴影色
        shadowOffset: { width: 0, height: 0 }, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
        shadowOpacity: 1,
        shadowRadius: 2.5, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
      },
      android: {
        elevation: 7,
      },
    }),
  },
  boxItem: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    paddingTop: 20,
  },
  navTab3: {
    display: 'none',
  },
  navTabColor: {
    color: '#dbdbdb',
  },
  boxAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      ios: {
        shadowColor: '#999', //设置阴影色
        shadowOffset: { width: 0, height: 0 }, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
        shadowOpacity: 1,
        shadowRadius: 3.5, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
      },
      android: {
        elevation: 9,
      },
    }),
  },
  boxAvatarParent: {
    width: 100,
    height: 100,
    zIndex: 20,
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    right: windowWidth / 2.6,
  },
  avatarnText: {
    color: '#000',
    fontSize: 15,
  },
  avatarView: {
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatarnImage: {
    width: 15,
    height: 15
  },
  uidFrame: {
    width: 130,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    position: 'absolute',
    top: -57,
    right: windowWidth / 4.5,
    zIndex: 99,
  },
  uidBg: {
    width: 120,
    position: 'absolute',
    top: 50,
    paddingLeft: 2,
  },
  uidBgJb: {
    height: 30,
    borderRadius: 8,
  },
  uidText: {
    color: '#FFFFFF',
    fontSize: 17,
    lineHeight: 30,
    paddingLeft: 6,
  },
  bell: {
    position: 'absolute',
    bottom: 56,
    right: 1
  },
  listimg: {
    width: 60,
    height: 60
  },
  listTit: {
    color: 'black',
    fontSize: 16
  },
  textBox: {
    width: 60,
    marginVertical: 4,
    justifyContent: 'center'
  },
  listText: {
    textAlign: 'center'
  },
  box: {
    marginVertical: 8,
    marginHorizontal: 23,
  },
  hidd: {
    display: 'none'
  },
  xian: {
    display: 'flex'
  }
});

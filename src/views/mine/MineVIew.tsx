/*
 * @Author: xxs
 * @Date: 2023-10-13 10:09:01
 * @LastEditTime: 2023-10-25 17:14:49
 * @FilePath: \newpark_native\src\components\Home\index.tsx
 * @Description: Home 页菜单
 */
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {useTranslation, Trans} from 'react-i18next';
import LinearGradinet from 'react-native-linear-gradient';

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
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import {red} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const serviceData1 = [
  {
    index: 1,
    text: 'minService.serviceOption1',
    icon: require('../../assets/images/alimom/pay.png'),
  },
  {
    index: 2,
    text: 'minService.serviceOption2',
    icon: require('../../assets/images/alimom/order.png'),
  },
  {
    index: 3,
    text: 'minService.serviceOption3',
    icon: require('../../assets/images/alimom/sc.png'),
  },
  {
    index: 4,
    text: 'minService.serviceOption4',
    icon: require('../../assets/images/alimom/jf.png'),
  },
];
const serviceData2 = [
  {
    index: 1,
    text: 'minService.serviceOption5',
    icon: require('../../assets/images/alimom/shdz.png'),
  },
  {
    index: 2,
    text: 'minService.serviceOption6',
    icon: require('../../assets/images/alimom/posts.png'),
  },
  {
    index: 3,
    text: 'minService.serviceOption7',
    icon: require('../../assets/images/alimom/fk.png'),
  },
  {
    index: 4,
    text: 'minService.serviceOption8',
    icon: require('../../assets/images/alimom/kf.png'),
  },
];

export default class MineVIew extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeStyle}>
        <View style={styles.parentLevel}>
          <View>
            <View style={styles.bgBox}>
              <Icon name="cog" size={30} color="white" style={styles.boxIcon} />
              <View style={styles.boxnNav}>
                <View style={styles.boxItem}>
                  <Text>0</Text>
                  <Text style={styles.navTabColor}>
                    <Trans>mineNav.navTab1</Trans>
                  </Text>
                </View>
                <View style={styles.boxItem}>
                  <Text>0</Text>
                  <Text style={styles.navTabColor}>
                    <Trans>mineNav.navTab2</Trans>
                  </Text>
                </View>
                <View style={styles.boxItem}>
                  <Text style={styles.navTab3}>
                    <Trans>mineNav.navTab3</Trans>
                  </Text>
                </View>
                <View style={styles.boxItem}>
                  <Text>0</Text>
                  <Text style={styles.navTabColor}>
                    <Trans>mineNav.navTab4</Trans>
                  </Text>
                </View>
                <View style={styles.boxItem}>
                  <Text>0</Text>
                  <Text style={styles.navTabColor}>
                    <Trans>mineNav.navTab5</Trans>
                  </Text>
                </View>
              </View>
              <View style={styles.boxAvatarParent}>
                <View style={styles.boxAvatar} />
                <View style={styles.avatarView}>
                  <Text style={styles.avatarnText}>
                    <Trans>mineNav.navTab3</Trans>
                    {/* <Icon name="gem" /> */}
                  </Text>
                  <Image style={styles.avatarnImage} source={require('../../assets/images/alimom/V1.png')}></Image>
                </View>
                <View style={styles.uidFrame}>
                  <View style={styles.uidBg}>
                    <LinearGradinet
                      colors={[
                        'rgba(247, 27, 147,0.90)',
                        'rgba(247, 27, 147,0.20)',
                      ]}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      style={styles.uidBgJb}>
                      <Text style={styles.uidText}>UID:099624</Text>
                    </LinearGradinet>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.orderCard}>
            <View style={styles.orderTop}>
              <View style={styles.titleFlex}>
                <Text style={styles.titleText1}>
                  <Trans>minOrder.orderName</Trans>
                </Text>
              </View>
              <View style={styles.titleFlex}>
                <Text style={styles.titleText2}>
                  <Trans>minOrder.orderMore</Trans>
                  <Feather name="chevron-right" size={18} color="#dbdbdb" />
                </Text>
              </View>
            </View>
            <View style={styles.orderList}>
              <View style={styles.orderItem}>
                <Image style={styles.itemImage} source={require('../../assets/images/alimom/dpay.png')}></Image>
                <Text style={styles.itemText}>
                  <Trans>minOrder.orderOption1</Trans>
                </Text>
              </View>
              <View style={styles.orderItem}>
              <Image style={styles.itemImage} source={require('../../assets/images/alimom/dsh.png')}></Image>
                <Text style={styles.itemText}>
                  <Trans>minOrder.orderOption2</Trans>
                </Text>
              </View>
              <View style={styles.orderItem}>
              <Image style={styles.itemImage} source={require('../../assets/images/alimom/dk.png')}></Image>
                <Text style={styles.itemText}>
                  <Trans>minOrder.orderOption3</Trans>
                </Text>
              </View>
              <View style={styles.orderItem}>
              <Image style={styles.itemImage} source={require('../../assets/images/alimom/sh.png')}></Image>
                <Text style={styles.itemText}>
                  <Trans>minOrder.orderOption4</Trans>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.serviceCard}>
            <View style={styles.orderTop}>
              <View style={styles.titleFlex}>
                <Text style={styles.titleText1}>
                  <Trans>minService.serviceName</Trans>
                </Text>
              </View>
              <View style={styles.titleFlex}>
                <Text style={styles.titleText2}>
                  <Trans>minService.serviceMore</Trans>
                  <Feather name="chevron-right" size={18} color="#dbdbdb" />
                </Text>
              </View>
            </View>
            <View style={styles.orderList}>
              {serviceData1.map(item => {
                return (
                  <View style={styles.orderItem} key={item.index}>
                    <Image style={styles.itemImages} source={item.icon}></Image>
                    <Text style={styles.serviceText}>
                      <Trans>{item.text}</Trans>
                    </Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.orderList}>
              {serviceData2.map(item => {
                return (
                  <View style={styles.orderItem} key={item.index}>
                    <Image style={styles.itemImages} source={item.icon}></Image>
                    <Text style={styles.serviceText}>
                      <Trans>{item.text}</Trans>
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeStyle: {
    height: 50,
    backgroundColor: '#F8B032',
  },
  parentLevel: {
    width: windowWidth,
    height: windowHeight,
  },
  bgBox: {
    width: windowWidth,
    height: 140,
    alignItems: 'flex-end',
    paddingTop: 15,
    backgroundColor: '#F8B032',
    zIndex: -99,
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
        shadowColor: '#999',  //设置阴影色
        shadowOffset:{width:0,height:0},  //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
        shadowOpacity: 1,
        shadowRadius: 2.5,  //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
      },
      android: {
        elevation: 7,
      },
    })
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
        shadowColor: '#999',  //设置阴影色
        shadowOffset:{width:0,height:0},  //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
        shadowOpacity: 1,
        shadowRadius: 3.5,  //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
      },
      android: {
        elevation: 9,
      },
    })
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
  avatarView:{
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatarnImage:{
    width:15,
    height:15,
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
  orderCard: {
    width: windowWidth - 24,
    height: 140,
    marginTop: 65,
    marginHorizontal: 12,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
  },
  orderTop: {
    width: windowWidth - 24,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemImage:{
    width:40,
    height:35
  },
  itemImages:{
    width:38,
    height:38
  },
  titleFlex: {
    paddingHorizontal: 15,
  },
  titleText1: {
    lineHeight: 45,
    fontSize: 17,
    color: '#000',
  },
  titleText2: {
    lineHeight: 45,
    color: '#dbdbdb',
  },
  orderList: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:16
  },
  orderItem: {
    flex: 1,
    alignItems: 'center',
  },
  itemText: {
    paddingTop: 15,
    color:'#808080',
    ...Platform.select({
      ios:{
        fontSize:15
      }
    })
  },
  serviceCard: {
    width: windowWidth - 24,
    height: 225,
    marginTop: 25,
    marginHorizontal: 12,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
  },
  serviceText:{
    paddingTop: 8,
    color:'#808080',
    ...Platform.select({
      ios:{
        fontSize:15
      }
    })
  }
});
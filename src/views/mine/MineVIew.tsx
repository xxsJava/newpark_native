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
import {navigate} from '../../config/routs/NavigationContainer';
import PersonalDataView from './components/setup/PersonalData'
import HomePageView from './components/homepage'

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
const orderData = [
  {
    index: 1,
    route: 'PaymentRoute',
    text: 'minOrder.orderOption1',
    icon: require('../../assets/images/alimom/dpay.png'),
  },
  {
    index: 2,
    route: 'ReceiptRoute',
    text: 'minOrder.orderOption2',
    icon: require('../../assets/images/alimom/dsh.png'),
  },
  {
    index: 3,
    route: 'EvaluateRoute',
    text: 'minOrder.orderOption3',
    icon: require('../../assets/images/alimom/dk.png'),
  },
  {
    index: 4,
    route: 'AfterSalesRoute',
    text: 'minOrder.orderOption4',
    icon: require('../../assets/images/alimom/sh.png'),
  },
];
const serviceData1 = [
  {
    index: 1,
    route: 'WalletRoute',
    text: 'minService.serviceOption1',
    icon: require('../../assets/images/alimom/pay.png'),
  },
  {
    index: 2,
    route: 'MyOrderRoute',
    text: 'minService.serviceOption2',
    icon: require('../../assets/images/alimom/order.png'),
  },
  {
    index: 3,
    route: 'CollectionRoute',
    text: 'minService.serviceOption3',
    icon: require('../../assets/images/alimom/sc.png'),
  },
  {
    index: 4,
    route: 'MemberServicesRoute',
    text: 'minService.serviceOption4',
    icon: require('../../assets/images/alimom/jf.png'),
  },
];
const serviceData2 = [
  {
    index: 1,
    route: 'AddressManagementRoute',
    text: 'minService.serviceOption5',
    icon: require('../../assets/images/alimom/shdz.png'),
  },
  {
    index: 2,
    route: 'MyPostRoute',
    text: 'minService.serviceOption6',
    icon: require('../../assets/images/alimom/posts.png'),
  },
  {
    index: 3,
    route: 'FeedbackRoute',
    text: 'minService.serviceOption7',
    icon: require('../../assets/images/alimom/fk.png'),
  },
  {
    index: 4,
    route: 'CustomerServiceRoute',
    text: 'minService.serviceOption8',
    icon: require('../../assets/images/alimom/kf.png'),
  },
];
const communitData=[{
  index:1,
  bg:require('../../assets/images/csBj.jpg'),
  tx:require('../../assets/images/mcTx.jpg'),
  title:'跑腿那些事',
  personnel:'1.2w',
  follow:'2.2w'
},{
  index:2,
  bg:require('../../assets/images/yhBj.jpg'),
  tx:require('../../assets/images/nvshengTx1.jpg'),
  title:'学院表白墙',
  personnel:'0.2w',
  follow:'1.4w'
},{
  index:3,
  bg:require('../../assets/images/csBg2.jpg'),
  tx:require('../../assets/images/nanshengTx1.jpg'),
  title:'旅游美拍',
  personnel:'1.6w',
  follow:'2.4w'
},{
  index:4,
  bg:require('../../assets/images/fjBg2.jpg'),
  tx:require('../../assets/images/katongTx1.jpg'),
  title:'周边美食有哪些',
  personnel:'3000',
  follow:'4005'
},{
  index:5,
  bg:require('../../assets/images/fjBg1.jpg'),
  tx:require('../../assets/images/nvshengTx2.jpg'),
  title:'英语每日打卡',
  personnel:'500',
  follow:'1000'
}]

export default class MineVIew extends Component {
  render() {
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
                    <Image
                      style={styles.avatarnImage}
                      source={require('../../assets/images/alimom/V1.png')}
                    />
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
            {/* <PersonalDataView></PersonalDataView> */}
            <HomePageView></HomePageView>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeStyle: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#F8B032',
    // ...Platform.select({
    //   ios: {
    //     height: 180,
    //   },
    // }),
  },
  parentLevel: {
    width: windowWidth,
    ...Platform.select({
      ios:{
        height: windowHeight - 120,
      },
      android:{
        height: windowHeight - 45,
      }
    })
  },
  scrollStyle: {
    flex:1,
    backgroundColor: '#f2f2f2',
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
        shadowOffset: {width: 0, height: 0}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
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
        shadowOffset: {width: 0, height: 0}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
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
    height: 15,
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
});

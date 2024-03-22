/**
 * 代码描述: 个人资料页面  设置
 * 作者:cxr
 * 修改时间:2023/12/08 16:10:11
 */

import React from "react";
import { Trans } from 'react-i18next';
import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { navigate } from '../../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const orderData = [
    {
      index: 1,
      route: 'PaymentRoute',
      type:'type2',
      text: 'minOrder.orderOption1',
      icon: require('../../../../assets/images/alimom/dpay.png'),
    },
    {
      index: 2,
      route: 'ReceiptRoute',
      type:'type3',
      text: 'minOrder.orderOption2',
      icon: require('../../../../assets/images/alimom/dsh.png'),
    },
    {
      index: 3,
      route: 'EvaluateRoute',
      type:'type4',
      text: 'minOrder.orderOption3',
      icon: require('../../../../assets/images/alimom/dk.png'),
    },
    {
      index: 4,
      route: 'AfterSalesRoute',
      type:'',
      text: 'minOrder.orderOption4',
      icon: require('../../../../assets/images/alimom/sh.png'),
    },
  ];
  const serviceData1 = [
    {
      index: 1,
      route: 'WalletRoute',
      text: 'minService.serviceOption1',
      icon: require('../../../../assets/images/alimom/pay.png'),
    },
    // {
    //   index: 2,
    //   route: 'MyOrderRoute',
    //   text: 'minService.serviceOption2',
    //   icon: require('../../../../assets/images/alimom/order.png'),
    // },
    {
      index: 2,
      route: 'MyPostRoute',
      text: 'minService.serviceOption6',
      icon: require('../../../../assets/images/alimom/posts.png'),
    },
    {
      index: 3,
      route: 'CollectionRoute',
      text: 'minService.serviceOption3',
      icon: require('../../../../assets/images/alimom/sc.png'),
    },
    {
      index: 4,
      route: 'MemberServicesRoute',
      text: 'minService.serviceOption4',
      icon: require('../../../../assets/images/alimom/jf.png'),
    },
  ];
  const serviceData2 = [
    {
      index: 1,
      route: 'AddressManagementRoute',
      text: 'minService.serviceOption5',
      icon: require('../../../../assets/images/alimom/shdz.png'),
    },
    {
      index: 2,
      route: 'InviteFriendsRoute',
      text: 'minService.serviceOption9',
      icon: require('../../../../assets/images/alimom/invite_icon.png'),
    },
    {
      index: 3,
      route: 'FeedbackRoute',
      text: 'minService.serviceOption7',
      icon: require('../../../../assets/images/alimom/fk.png'),
    },
    {
      index: 4,
      route: 'CallCustom',
      text: 'minService.serviceOption8',
      icon: require('../../../../assets/images/alimom/kf.png'),
    },
  ];
  const communitData=[{
    index:1,
    bg:require('../../../../assets/images/csBj.jpg'),
    tx:require('../../../../assets/images/mcTx.jpg'),
    title:'跑腿那些事',
    personnel:'1.2w',
    follow:'2.2w'
  },{
    index:2,
    bg:require('../../../../assets/images/yhBj.jpg'),
    tx:require('../../../../assets/images/nvshengTx1.jpg'),
    title:'学院表白墙',
    personnel:'0.2w',
    follow:'1.4w'
  },{
    index:3,
    bg:require('../../../../assets/images/csBg2.jpg'),
    tx:require('../../../../assets/images/nanshengTx1.jpg'),
    title:'旅游美拍',
    personnel:'1.6w',
    follow:'2.4w'
  },{
    index:4,
    bg:require('../../../../assets/images/fjBg2.jpg'),
    tx:require('../../../../assets/images/katongTx1.jpg'),
    title:'周边美食有哪些',
    personnel:'3000',
    follow:'4005'
  },{
    index:5,
    bg:require('../../../../assets/images/fjBg1.jpg'),
    tx:require('../../../../assets/images/nvshengTx2.jpg'),
    title:'英语每日打卡',
    personnel:'500',
    follow:'1000'
  }]

const HomePageView = () => {
    return(
        <View>
            <View style={styles.communityCard}>
              <View style={styles.orderTop}>
                <View style={styles.titleFlex}>
                  <Text allowFontScaling={false} style={styles.titleText1}>
                    <Trans>minCommunity.communityName</Trans>
                  </Text>
                </View>
                <View style={styles.titleFlex}>
                  <Text allowFontScaling={false} style={styles.titleText2}>
                    <Trans>minCommunity.communityMore</Trans>
                    <Feather name="chevron-right" size={18} color="red" />
                  </Text>
                </View>
              </View>
              <View style={styles.communitList}>
                {/* 设置的没有滚动条 */}
                <ScrollView horizontal={true} style={styles.communitScroll} showsHorizontalScrollIndicator={false}>
                  {communitData.map(item =>{
                    return(
                      <TouchableOpacity style={styles.communitItem} key={item.index} onPress={() => navigate('CommunityChannelRoute')}>
                        <View style={styles.communitItemTop}>
                          <Image
                            style={styles.communitImage}
                            blurRadius={7}
                            source={item.bg}
                            accessibilityLabel='背景图'
                            alt="头像"
                          />
                        </View>
                        <View style={styles.communitItemBottom}>
                          <View style={styles.communitItemTitle}>
                            <Text allowFontScaling={false} style={styles.communitTitleText}>{item.title}</Text>
                          </View>
                          <View style={styles.communitItemTextView}>
                            <Text allowFontScaling={false} style={styles.communitText}>{item.personnel}成员</Text>
                            <Text allowFontScaling={false}>·</Text>
                            <Text allowFontScaling={false} style={styles.communitText}>{item.follow}关注</Text>
                          </View>
                        </View>
                        <View style={styles.communitAvatar}>
                          <Image style={styles.communitAvatarImage} source={item.tx} accessibilityLabel='头像' alt="头像"></Image>
                        </View>
                      </TouchableOpacity>
                    )
                  })}
                </ScrollView>
              </View>
              <View />
            </View>
            <View style={styles.orderCard}>
              <View style={styles.orderTop}>
                <View style={styles.titleFlex}>
                  <Text allowFontScaling={false} style={styles.titleText1}>
                    <Trans>minOrder.orderName</Trans>
                  </Text>
                </View>
                <View style={styles.titleFlex}>
                  <Text allowFontScaling={false} style={styles.titleText2}>
                    <Trans>minOrder.orderMore</Trans>
                    <Feather name="chevron-right" size={18} color="#dbdbdb" />
                  </Text>
                </View>
              </View>
              <View style={styles.orderList}>
                {orderData.map(item => {
                  return (
                    <View style={styles.orderItem} key={item.index}>
                      <TouchableOpacity
                        onPress={() => navigate('MyOrderRoute',{type:item.type})}
                        style={styles.orderRoute}>
                        <Image style={styles.itemImage} source={item.icon} accessibilityLabel='图片' alt="头像"/>
                        <Text allowFontScaling={false} style={styles.itemText}>
                          <Trans>{item.text}</Trans>
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={styles.serviceCard}>
              <View style={styles.orderTop}>
                <View style={styles.titleFlex}>
                  <Text allowFontScaling={false} style={styles.titleText1}>
                    <Trans>minService.serviceName</Trans>
                  </Text>
                </View>
                <View style={styles.titleFlex}>
                  <Text allowFontScaling={false} style={styles.titleText2}>
                    <Trans>minService.serviceMore</Trans>
                    <Feather name="chevron-right" size={18} color="#dbdbdb" />
                  </Text>
                </View>
              </View>
              <View style={styles.orderList}>
                {serviceData1.map(item => {
                  return (
                    <View style={styles.orderItem} key={item.index}>
                      {item.index == 2?
                      <TouchableOpacity
                        onPress={() => navigate(item.route,{type:'type1'})}
                        style={styles.orderRoute}>
                        <Image style={styles.itemImages} source={item.icon} accessibilityLabel='图片' alt="头像"/>
                        <Text allowFontScaling={false} style={styles.serviceText}>
                          <Trans>{item.text}</Trans>
                        </Text>
                      </TouchableOpacity>:
                      <TouchableOpacity
                      onPress={() => navigate(item.route)}
                      style={styles.orderRoute}>
                      <Image style={styles.itemImages} source={item.icon} accessibilityLabel='图片' alt="头像"/>
                      <Text allowFontScaling={false} style={styles.serviceText}>
                        <Trans>{item.text}</Trans>
                      </Text>
                    </TouchableOpacity>}
                    </View>
                  );
                })}
              </View>
              <View style={styles.orderList}>
                {serviceData2.map(item => {
                  return (
                    <View style={styles.orderItem} key={item.index}>
                      <TouchableOpacity
                        onPress={() => navigate(item.route)}
                        style={styles.orderRoute}>
                        <Image style={styles.itemImages} source={item.icon} accessibilityLabel='图片' alt="头像"/>
                        <Text allowFontScaling={false} style={styles.serviceText}>
                          <Trans>{item.text}</Trans>
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </View>
        </View>
    )
}

export default HomePageView;

const styles = StyleSheet.create({
    orderTop: {
        width: windowWidth - 24,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    communityCard: {
        width: windowWidth - 24,
        height: 200,
        marginTop: 65,
        marginHorizontal: 12,
        borderRadius: 14,
        backgroundColor: '#FFF',
    },
    communitList: {
        width: windowWidth - 24,
        height:150, 
        paddingHorizontal: 10,
    },
    communitScroll:{
        flex:1
    },
    communitItem: {
        width: 130,
        height: 130,
        borderRadius: 12,
        backgroundColor: '#FFF',
        position:'relative',
        marginHorizontal:5,
        ...Platform.select({
          ios: {
            shadowColor: '#DDD', //设置阴影色
            shadowOffset: {width: 0, height: 3}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
            shadowOpacity: 1,
            shadowRadius: 4, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
          },
          android: {
            elevation: 7,
          },
        }),
    },
    communitItemTop: {
        width: 130,
        height: 65,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'#000'
    },
    communitItemBottom: {
        width: 130,
        height: 65,
        paddingHorizontal:12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    communitImage: {
        width: 130,
        height: 65,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    communitItemTitle: {
        height:30,
        marginTop:5
    },
    communitTitleText:{
        fontSize:14,
        color:'#000',
        fontWeight:'600',
        lineHeight:45
    },
    communitItemTextView: {
        marginTop:7,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    communitText:{
        fontSize:10,
        color:'#000'
    },
    communitAvatar:{
        width:46,
        height:46,
        borderRadius:23,
        position:'absolute',
        borderColor:'#FFF',
        borderWidth:0.7,
        top:32,
        left:16
    },
    communitAvatarImage:{
        width:45,
        height:45,
        borderRadius:22.5,
    },
    orderCard: {
        width: windowWidth - 24,
        height: 140,
        marginTop: 25,
        marginHorizontal: 12,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
    },
    itemImage: {
        width: 40,
        height: 35,
    },
    itemImages: {
        width: 38,
        height: 38,
    },
    orderList: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
    },
    orderItem: {
        flex: 1,
        alignItems: 'center',
    },
    orderRoute: {
        alignItems: 'center',
    },
    itemText: {
        paddingTop: 15,
        color: '#808080',
        ...Platform.select({
          ios: {
            fontSize: 15,
          },
        }),
    },
    serviceCard: {
        width: windowWidth - 24,
        height: 225,
        marginTop: 25,
        marginHorizontal: 12,
        marginBottom:40,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
    },
    serviceText: {
        paddingTop: 8,
        color: '#808080',
        ...Platform.select({
          ios: {
            fontSize: 15,
          },
        }),
    },
})
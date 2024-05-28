/*
 * @Author: xxs
 * @Date: 2023-10-26 09:38:45
 * @LastEditTime: 2024-05-28 18:31:17
 * @FilePath: \newpark_native\src\routes\stacker\index.tsx
 * @Description: desc
 */
import { useTranslation } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef, useState } from 'react';

import { Image } from '@gluestack-ui/themed';
import { Animated, Dimensions, Easing, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BellView from '../../components/Bell';
import { DeviceEvent } from '../../config/listener';
import routsConfig from '../../config/routs-config';
import { navigate } from '../../config/routs/NavigationContainer';
import { useCounter } from '../../hooks/state';
const windowWidth = Dimensions.get('window').width;
// import { Stagger, useDisclose} from 'native-base';
/*
 * @Author: xxs
 * @Date: 2023-10-24 16:56:09
 * @LastEditTime: 2023-10-24 18:18:15
 * @FilePath: \newpark_native\src\routes\stacker\index.tsx
 * @Description: 底部标签
 */
export const BommonTab = () => {
  const Tab = createBottomTabNavigator();
  const [isVisible, setIsVisible] = useState(false);
  
  const { t } = useTranslation();

  const { corner, incrementsetCorner } = useCounter();

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.bezier(0.42, 0, 0.58, 1), // 使用贝塞尔曲线
      useNativeDriver: true,
    }).start();
  },[animatedValue])

  useEffect(() => {

    DeviceEvent.addListener('onRecvNewMessage', async resp => {
      // incrementsetCorner();
      console.log('corner--------->', corner);
      incrementsetCorner(corner);
    })

  }, [])

  const pubAnm = () =>{
    console.log('点击加号');
    setIsVisible(!isVisible);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.bezier(0.42, 0, 0.58, 1), // 使用贝塞尔曲线
      useNativeDriver: true,
    }).start();
  }
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // screenOptions={() => ({
          tabBarActiveTintColor: '#F8B032',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 16
          },
          tabBarStyle: {
            height: Platform.OS == 'ios' ? 80 : 60
          },
          lazy:true
        })}>
          
        {Object.entries(routsConfig).map(([key, value]) => {
          if (key === 'Routes') {
            const subArray = Object.entries(value);
            return subArray.map(([routeKey, routeValue]) => {
              const option: any = {
                tabBarLabel: t(routeValue.label),
                tabBarIcon: ({ focused, size, color }: any) => {
                  let iconName = focused
                    ? routeValue.SelectedIcon
                    : routeValue.UnSelectedIcon;
                  return (
                    <Ionicons name={iconName} size={size} color={color} />
                  );
                },
              };

              //添加角标
              if (routeKey === 'Socializing') {
                option['tabBarBadge'] = corner;
              }

              // 路由遍历
              return (
                <Tab.Screen
                  name={routeKey}
                  key={routeKey}
                  component={routeValue.component}
                  options={option}
                />
              );
            });
          }
        })}
      </Tab.Navigator>
      <Animated.View
          style={[
            styles.container,
            isVisible?{
              transform: [
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, -100], // 垂直方向上移动 100 个单位
                  }),
                },
                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.2], // 缩放效果
                  }),
                },
              ],
            }:{display:'none'},
          ]}
      >
          <View style={styles.content}>
            <View style={styles.contentA}>
              <View style={styles.closeIcon}>
                <TouchableOpacity onPress={() => { setIsVisible(!isVisible) }}>
                  <Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/alimom/close_icon.png')} alt="网络异常"/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.contentB}>
              <TouchableOpacity style={styles.funs} onPress={() => navigate('RewardRoute')}>
                  <Image style={styles.conIcon} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/fbxs.png'}} alt="网络异常" />
                  <Text style={styles.conFont}>
                    发布悬赏
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.funs} onPress={() => navigate('PublishProductsRoute')}>
                  <Image style={styles.conIcon} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/fbsp.png'}} alt="网络异常" />
                  <Text style={styles.conFont}>
                    发布商品
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.funs} onPress={() => navigate('ReleasePost')}>
                  <Image style={styles.conIcon} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/fbtz.png'}} alt="网络异常" />
                  <Text style={styles.conFont}>
                    发布帖子
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.funs} onPress={() => navigate('ClockInViewRoute')}>
                  <Image style={styles.conIcon} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/dk.png'}} alt="网络异常" />
                  <Text style={styles.conFont}>
                    打卡
                  </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

        {/* 遮掩罩 */}
        <TouchableOpacity style={[styles.bottomMain,isVisible?{}:{display:'none'}]} onPress={()=>setIsVisible(!isVisible)} activeOpacity={0}>
          <View style={styles.bottomMain}></View>
        </TouchableOpacity>

      <View style={styles.tabPub}>
        <TouchableOpacity onPress={pubAnm}>
          <Image style={styles.bthImg} source={require('../../assets/images/3.0x/add_btn.png')} accessibilityLabel='图片' alt="网络异常" />
        </TouchableOpacity>
      </View>

      <View style={styles.ld}>
        <BellView />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tabPub: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 50 : 18,
    left: windowWidth / 2 - 32,
    borderWidth: 2,
    borderColor: '#F8B032',
    width: 64,
    height: 64,
    borderRadius: 50
  },
  bthImg: {
    marginLeft: 8,
    marginTop: 8,
    width: 44,
    height: 44
  },
  ld: {
    position: 'relative',
    bottom: '8%'
  },
  zhong: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  nav1Text:{
    fontSize:13,
    color:'#000'
  },
  bottomMain:{
    width:'100%',
    height:'100%',
    backgroundColor:'#000',
    position:'absolute',
    zIndex: 100,
    bottom:0,
    flex:1,
    opacity:0.5
  },container: {
    zIndex: 101,
    position:'absolute',
    bottom: -80,
    width:'100%',
    height: '20%'
  },
  content: {
    backgroundColor: 'white',
    width:'100%',
    height: '100%',
    position: 'absolute',
    bottom:0,
    borderTopLeftRadius:100,
    borderTopRightRadius:100,
  },
  contentA:{
    // borderWidth:1,
    position:'absolute',
    bottom:15,
    width:'100%',
    height:'20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon:{
    width:30,
    height:30
  },
  contentB:{
    // borderWidth:1,
    position:'absolute',
    bottom:'28%',
    width:'100%',
    height:'50%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  funs:{
    width:65,
    height:65,
    // borderWidth:1,
    marginLeft:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  conFont:{
    color:'#000',
    fontSize:10,
    fontWeight:'bold'
  },
  conIcon:{
    width:40,
    height:40
  }
});

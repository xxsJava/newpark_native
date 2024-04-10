/*
 * @Author: xxs
 * @Date: 2023-10-26 09:38:45
 * @LastEditTime: 2024-03-06 10:37:00
 * @FilePath: \newpark_native\src\routes\stacker\index.tsx
 * @Description: desc
 */
import { useTranslation } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import * as Animatable from 'react-native-animatable';

import { Image, Text } from '@gluestack-ui/themed';
import { Dimensions, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
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

  useEffect(() => {

    DeviceEvent.addListener('onRecvNewMessage', async resp => {
      // incrementsetCorner();
      console.log('corner--------->', corner);
      incrementsetCorner(corner);
    })

  }, [])
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
          }
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
      <View style={styles.tabPub}>
        <TouchableOpacity onPress={() => { setIsVisible(!isVisible) }}>
          <Image style={styles.bthImg} source={require('../../assets/images/3.0x/add_btn.png')} accessibilityLabel='图片' alt="头像"/>
        </TouchableOpacity>
        {
          isVisible ?
            <View>
              <TouchableOpacity onPress={() => navigate('ClockInViewRoute')}>
                <Animatable.View style={[styles.aniNav1, { display: 'flex', flexDirection: 'row' }]} animation='fadeInLeftBig'>
                  <View style={{ backgroundColor: '#fff', borderRadius: 20 }}>
                    <Text style={[styles.nav1Text, { marginRight: 6, marginTop: 8 }]}>打卡</Text>
                  </View>
                  <View style={[styles.nav1, { backgroundColor: '#26C78C', }]}></View>
                </Animatable.View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate('PubGood')}>
                <Animatable.View style={[styles.aniNav3, { display: 'flex', flexDirection: 'row' }]} animation='fadeInLeftBig'>
                  <View style={{ backgroundColor: '#fff', borderRadius: 20 }}>
                    <Text style={[styles.nav1Text, { marginRight: 3, marginTop: 8 }]}>发布商品</Text>
                  </View>
                  <View style={[styles.nav1, { backgroundColor: '#C6C6C6', }]}></View>
                </Animatable.View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate('ChatRoom')}>
                <Animatable.View style={styles.aniNav4} animation='fadeInLeftBig' >
                  <View style={{ backgroundColor: '#fff', borderRadius: 20, width: 80, marginLeft:'-50%'}}>
                    <Text style={[styles.nav1Text, { padding: 5,fontSize:12}]}>创建聊天室</Text>
                  </View>
                  <View style={[styles.nav1, { backgroundColor: '#FB4886', }]}></View>
                </Animatable.View>
              </TouchableOpacity>
              {/* <TouchableOpacity  onPress={()=>navigate('Uplode')}> */}
              <TouchableOpacity onPress={() => navigate('ReleasePost')}>
                <Animatable.View style={[styles.aniNav5, { display: 'flex', flexDirection: 'row' }]} animation='fadeInRightBig'>
                  <View style={[styles.nav1, { backgroundColor: '#90C486', }]}></View>
                  <View style={{ backgroundColor: '#fff', borderRadius: 20 }}>
                    <Text style={[styles.nav1Text, { marginTop: 10 }]}>发布帖子</Text>
                  </View>
                </Animatable.View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate('Uplode')}>
                <Animatable.View style={[styles.aniNav2, { display: 'flex', flexDirection: 'row' }]} animation='fadeInRightBig'>
                  <View style={[styles.nav1, { backgroundColor: '#FBBA3F' }]}></View>
                  <View style={{ backgroundColor: '#fff', borderRadius: 20 }}>
                    <Text style={[styles.nav1Text, { lineHeight: 44 }]}>发布悬赏</Text>
                  </View>
                </Animatable.View>
              </TouchableOpacity>
            </View>
            : ''
        }
      </View>

        <View style={styles.ld}>
          <BellView />
        </View>
      
    </>
  );
};

const styles = StyleSheet.create({
  tabPub:{
    position:'absolute',
    bottom: Platform.OS === 'ios'? 50:18,
    left:windowWidth/2-32,
    borderWidth:2,
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
  nav1: {
    width: 42,
    height: 42,
    borderRadius: 50
  },
  aniNav1: {
    position: 'absolute',
    right: windowWidth / 4 - 10,
    bottom: 30
  },
  aniNav3: {
    position: 'absolute',
    right: windowWidth / 4 - 34,
    bottom: 83
  },
  aniNav4: {
    position: 'absolute',
    right: 0,
    bottom: 100
  },
  aniNav5: {
    position: 'absolute',
    right: windowWidth / 4 - 210,
    bottom: 83
  },
  nav1Text: {
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 14,
    color: '#FFB700',
    fontWeight: 'bold'
  },
  aniNav2: {
    position: 'absolute',
    left: windowWidth / 4,
    bottom: 30
  },
  ld:{
    position:'relative',
    bottom: '8%'
  }
});

/*
 * @Author: xxs
 * @Date: 2023-10-26 09:38:45
 * @LastEditTime: 2024-02-22 14:29:37
 * @FilePath: \newpark_native\src\routes\stacker\index.tsx
 * @Description: desc
 */
import { useTranslation } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import * as Animatable from 'react-native-animatable';

import { Image, Text } from '@gluestack-ui/themed';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { DeviceEvent } from '../../config/listener';
import routsConfig from '../../config/routs-config';
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
  const {t} = useTranslation();

  const { corner,incrementsetCorner } = useCounter();

  useEffect(() =>{

    DeviceEvent.addListener('onRecvNewMessage', async resp => {
      // incrementsetCorner();
      console.log('corner--------->',corner);
      incrementsetCorner(corner);
    })

  },[])

  return (
    <>
    
      <Tab.Navigator
        screenOptions={({route}) => ({
          // screenOptions={() => ({
          tabBarActiveTintColor: '#F8B032',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 16
          },
          tabBarStyle:{
            height:60
          }
        })}>
        {Object.entries(routsConfig).map(([key, value]) => {
          if (key === 'Routes') {
            const subArray = Object.entries(value);
            return subArray.map(([routeKey, routeValue]) => {
              const option:any = {
                tabBarLabel: t(routeValue.label),
                tabBarIcon: ({focused, size, color}:any) => {
                  let iconName = focused
                    ? routeValue.SelectedIcon
                    : routeValue.UnSelectedIcon;
                  return (
                    <Ionicons name={iconName} size={size} color={color} />
                  );
                },
              };

              //添加角标
              if(routeKey === 'Socializing'){
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
          <TouchableOpacity onPress={()=>{ setIsVisible(!isVisible)}}>
            <Image style={styles.bthImg} source={require('../../assets/images/3.0x/add_btn.png')}/>
          </TouchableOpacity>
      {
        
          isVisible?
          <View>
            <TouchableOpacity>
          <Animatable.View style={styles.aniNav1} animation='fadeInLeftBig'>
            <View style={styles.nav1}></View>
            <Text style={styles.nav1Text}>发布</Text>
          </Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity>
          <Animatable.View style={styles.aniNav2} animation='fadeInRightBig'>
            <View style={styles.nav1}></View>
            <Text style={styles.nav1Text}>活动</Text>
          </Animatable.View>
          </TouchableOpacity>
          </View>
          :''
      }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tabPub:{
    position:'absolute',
    bottom:25,
    left:windowWidth/2-32,
    borderWidth:2,
    borderColor: '#F8B032',
    width:64,
    height:64,
    borderRadius:50
  },
  bthImg:{
    marginLeft:8,
    marginTop:8,
    width:44,
    height:44
  },
  nav1:{
    width: 42,
    height: 42,
    backgroundColor:'green',
    borderRadius:50
  },
  aniNav1:{
    position:'absolute',
    right: windowWidth/4-30,
    bottom:30
  },
  nav1Text:{
    alignContent:'center',
    textAlign:'center',
    fontSize: 14,
    color:'#000',
    fontWeight:'bold'
  },
  aniNav2:{
    position:'absolute',
    left: windowWidth/4-30,
    bottom:30
  }
});

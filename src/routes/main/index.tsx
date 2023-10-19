/*
 * @Author: xxs
 * @Date: 2023-10-05 12:52:53
 * @LastEditTime: 2023-10-19 11:07:32
 * @FilePath: \newpark_native\src\routes\main\index.tsx
 * @Description: 路由
 */
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation   } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeStacker from '../stacker/HomeStacker';
import NewPatkStacker from '../stacker/NewPatkStacker';
import PublishStacker from '../stacker/PublishStacker';
import SocializingStacker from '../stacker/SocializingStacker';
import MineStacker from '../stacker/MineStacker';

const Tab = createBottomTabNavigator();

function BommonTab(){
  return (
    <Tab.Navigator screenOptions={({route})=>({
       tabBarIcon:({focused,size,color})=>{
        let iconName = ''
        
          if(route.name == '推荐'){
            iconName =focused ? 'storefront' : 'storefront-outline';
          }else if(route.name == '圈子'){
            iconName =focused ? 'disc-outline' : 'radio-button-on';
          }else if(route.name == '发布'){
            iconName =focused ? 'add-circle' : 'add-circle-outline';
          }else if(route.name == '消息'){
            iconName =focused ? 'chatbubbles' : 'chatbubbles-outline';
          }else if(route.name == '我的'){
            iconName =focused ? 'person' : 'person-outline';
          }
        return <Ionicons name={iconName} size={size} color={color} />;
       },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle:{
            height: 60
          }
    }
    )}
    >
        <Tab.Screen  name="推荐" component={HomeStacker} />
        <Tab.Screen  name="圈子" component={NewPatkStacker} />
        <Tab.Screen  name="发布" component={PublishStacker} />
        <Tab.Screen  name="消息" component={SocializingStacker} />
        <Tab.Screen name="我的" component={MineStacker} />
    </Tab.Navigator>
  );
}

export default class index extends Component {
  render(){
    return (
      BommonTab()
    );
  }
}

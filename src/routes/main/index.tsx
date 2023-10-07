/*
 * @Author: xxs
 * @Date: 2023-10-05 12:52:53
 * @LastEditTime: 2023-10-07 17:45:04
 * @FilePath: \newpark_native\src\routes\main\index.tsx
 * @Description: desc
 */
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useTranslation   } from 'react-i18next';
import HomeView from '../../views/home/HomeView';
import MineVIew from '../../views/mine/MineVIew';
import NewPatkView from '../../views/newpark/NewPatkView';
import PublishView from '../../views/publish/PublishView';
import SocializingView from '../../views/socializing/SocializingView';

const Tab = createBottomTabNavigator();

function BommonTab(){
  return (
    <Tab.Navigator>
        <Tab.Screen name="推荐" component={HomeView} />
        <Tab.Screen name="新园" component={NewPatkView} />
        <Tab.Screen name="发布" component={PublishView} />
        <Tab.Screen name="社交" component={SocializingView} />
        <Tab.Screen name="我的" component={MineVIew} />
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

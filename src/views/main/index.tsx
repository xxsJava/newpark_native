/*
 * @Author: xxs
 * @Date: 2023-10-05 12:52:53
 * @LastEditTime: 2023-10-07 16:37:31
 * @FilePath: \newpark_native\src\views\main\index.tsx
 * @Description: desc
 */
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useTranslation   } from 'react-i18next';


const Tab = createBottomTabNavigator();

function HomeScreen() {
  const {t} = useTranslation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!{t('homeTab.recommend')}</Text>
    </View>
  );
}


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function BommonTab(){
  return (
    <Tab.Navigator>
        <Tab.Screen name="推荐" component={HomeScreen} />
        <Tab.Screen name="新园" component={SettingsScreen} />
        <Tab.Screen name="发布" component={HomeScreen} />
        <Tab.Screen name="社交" component={SettingsScreen} />
        <Tab.Screen name="我的" component={HomeScreen} />
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

import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStacker from '../stacker/HomeStacker';
import NewPatkStacker from '../stacker/NewPatkStacker';
import PublishStacker from '../stacker/PublishStacker';
import SocializingStacker from '../stacker/SocializingStacker';
import MineStacker from '../stacker/MineStacker';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginView from '../../views/login';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
/*
 * @Author: xxs
 * @Date: 2023-10-24 16:56:09
 * @LastEditTime: 2023-10-24 18:18:15
 * @FilePath: \newpark_native\src\routes\stacker\index.tsx
 * @Description: 底部标签
 */
export const BommonTab = () => {
  const Tab = createBottomTabNavigator();

  const {t} = useTranslation();
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName = '';
            if (route.name == 'Home') {
              iconName = focused ? 'storefront' : 'storefront-outline';
            } else if (route.name == 'newPark') {
              iconName = focused ? 'disc-outline' : 'radio-button-on';
            } else if (route.name == 'publish') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name == 'socializing') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            } else if (route.name == 'mine') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#F8B032',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarLabelStyle:{
            fontSize:16,
            fontWeight:'bold'
          }
        })}>
        <Tab.Screen
          name="Home"
          component={HomeStacker}
          options={{
            tabBarLabel: t('homeTab.recommend'),
          }}
        />
        <Tab.Screen
          name="newPark"
          component={NewPatkStacker}
          options={{
            tabBarLabel: t('homeTab.newPark'),
          }}
        />
        <Tab.Screen
          name="publish"
          component={PublishStacker}
          options={{
            tabBarLabel: t('homeTab.publish')
          }}
        />
        <Tab.Screen
          name="socializing"
          component={SocializingStacker}
          options={{
            tabBarLabel: t('homeTab.socializing'),
          }}
        />
        <Tab.Screen
          name="mine"
          component={MineStacker}
          options={{
            tabBarLabel: t('homeTab.mine')
          }}
        />
      </Tab.Navigator>
    </>
  );
};

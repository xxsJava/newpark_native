import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStacker from '../stacker/HomeStacker';
import NewPatkStacker from '../stacker/NewPatkStacker';
import PublishStacker from '../stacker/PublishStacker';
import SocializingStacker from '../stacker/SocializingStacker';
import MineStacker from '../stacker/MineStacker';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginView from '../../views/login';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import routsConfig from '../../config/routs-config';
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

  //路由数据
  const routsData = Object.entries(routsConfig);

  useEffect(() => {});

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#F8B032',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
        })}>
        {routsData.map(([key, value]) => {
          if (key === 'BotomTab') {
            const subArray = Object.entries(value);
            return subArray.map(([routeKey, routeValue]) => {
              // 路由遍历
              console.log('tab路由加载');
              return (
                <Tab.Screen
                  name={routeKey}
                  key={routeKey}
                  component={routeValue.component}
                  options={{
                    tabBarLabel: t(routeValue.label),
                    tabBarIcon: ({focused, size, color}) => {
                      let iconName = focused
                        ? routeValue.SelectedIcon
                        : routeValue.UnSelectedIcon;
                      return (
                        <Ionicons name={iconName} size={size} color={color} />
                      );
                    },
                  }}
                />
              );
            });
          }
        })}
      </Tab.Navigator>
    </>
  );
};

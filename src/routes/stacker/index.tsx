/*
 * @Author: xxs
 * @Date: 2023-10-26 09:38:45
 * @LastEditTime: 2023-12-22 10:44:55
 * @FilePath: \newpark_native\src\routes\stacker\index.tsx
 * @Description: desc
 */
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';

import React, {useEffect} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import routsConfig from '../../config/routs-config';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import { Stagger, useDisclose} from 'native-base';
import { Icon, IconButton, Avatar, Button} from 'react-native-paper';
import {navigate} from '../../config/routs/NavigationContainer'
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

  // const {isOpen, onToggle} = useDisclose();

  const test = () => {
     
  }

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // screenOptions={() => ({
          tabBarActiveTintColor: '#F8B032',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 14,
          },
        })}>
        {Object.entries(routsConfig).map(([key, value]) => {
          if (key === 'Routes') {
            const subArray = Object.entries(value);
            return subArray.map(([routeKey, routeValue]) => {
              // 路由遍历
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

const styles = StyleSheet.create({
  // publishImg: {width: 64, height: 64,},
});

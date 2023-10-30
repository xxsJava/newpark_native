/*
 * @Author: xxs
 * @Date: 2023-10-26 09:38:45
 * @LastEditTime: 2023-10-30 09:07:32
 * @FilePath: \newpark_native\src\routes\stacker\index.tsx
 * @Description: desc
 */
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';

import React, { useEffect, useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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

  const [route, setRoute]: any = useState([]);
  //路由数据
  const routsData = Object.entries(routsConfig);

  useEffect(() => {
    
  }, []);


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

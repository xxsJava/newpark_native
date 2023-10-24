/*
 * @Author: xxs
 * @Date: 2023-10-05 12:52:53
 * @LastEditTime: 2023-10-24 10:48:31
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

  const {t} = useTranslation();

  return (
    <Tab.Navigator screenOptions={({route})=>({
      
       tabBarIcon:({focused,size,color})=>{
        let iconName = ''
          if(route.name == 'Home'){
            iconName =focused ? 'storefront' : 'storefront-outline';
          }else if(route.name == 'newPark'){
            iconName =focused ? 'disc-outline' : 'radio-button-on';
          }else if(route.name == 'publish'){
            iconName =focused ? 'add-circle' : 'add-circle-outline';
          }else if(route.name == 'socializing'){
            iconName =focused ? 'chatbubbles' : 'chatbubbles-outline';
          }else if(route.name == 'mine'){
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
        <Tab.Screen  name="Home" component={HomeStacker} options={{
          tabBarLabel:t('homeTab.recommend')
        }} />
        <Tab.Screen  name="newPark" component={NewPatkStacker} options={{
          tabBarLabel:t('homeTab.newPark')
        }}/>
        <Tab.Screen  name="publish" component={PublishStacker} options={{
          tabBarLabel:t('homeTab.publish')
        }}/>
        <Tab.Screen  name="socializing" component={SocializingStacker} options={{
          tabBarLabel:t('homeTab.socializing')
        }}/>
        <Tab.Screen name="mine" component={MineStacker} options={{
          tabBarLabel:t('homeTab.mine')
        }}/>
    </Tab.Navigator>
  );
}

 const index = () => {

    return (
      BommonTab()
    );
}

export default index

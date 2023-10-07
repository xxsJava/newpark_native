import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
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

export default class index extends Component {
  render() {
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
}

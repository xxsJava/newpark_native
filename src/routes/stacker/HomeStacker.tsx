/*
 * @Author: xxs
 * @Date: 2023-10-07 18:27:52
 * @LastEditTime: 2023-10-13 08:53:56
 * @FilePath: \newpark_native\src\routes\stacker\HomeStacker.tsx
 * @Description: Home路由
 */
import {StackView, createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import HomeView from '../../views/home/HomeView';
import {Appbar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Stack = createStackNavigator();

const MyComponent = () => (
  <Appbar.Header>
    <View style={styles.navWiidtha}>
      <View style={styles.schoolTypeNava}>
        <Text style={styles.shoolTextCent}>全国</Text>
      </View>
      <View style={styles.schoolTypeNavb}>
        <Text style={styles.shoolTextCent}>本校</Text>
      </View>
    </View>

    <View style={styles.searchNav} />

    <Appbar.Action icon={require('../../assets/images/collect.png')} onPress={()=>{}} />
  </Appbar.Header>
);

export default class HomeStacker extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HomeStackNav"
          component={MyComponent}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeView}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  navWiidtha: {
    width: Dimensions.get('window').width * 0.2,
  },
  schoolTypeNava: {
    width: 35,
    height: 35,
    backgroundColor: '#FABA3C',
    borderRadius: 50,
    justifyContent: 'center',
    margin: 10,
  },
  schoolTypeNavb: {
    width: 35,
    height: 35,
    backgroundColor: '#FDE5B4',
    borderRadius: 50,
    justifyContent: 'center',
    position: 'absolute',
    left: 25,
    top: 10,
    zIndex: -1,
  },
  shoolTextCent: {
    textAlign: 'center',
    color: '#FFF',
  },
  searchNav: {
    width: Dimensions.get('window').width * 0.65,
    height: 35,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
  },
});

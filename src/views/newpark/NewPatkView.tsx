/*
 * @Author: xxs
 * @Date: 2023-10-07 17:42:15
 * @LastEditTime: 2023-10-24 18:27:37
 * @FilePath: \newpark_native\src\views\newpark\NewPatkView.tsx
 * @Description: desc
 */
import {NavigationContainer, RouteProp} from '@react-navigation/native';

import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {
  HomeScreenProps,
  NewPatkScreenProps,
  RootStackParamList,
} from '../../config/routs';

const NewPatkView: React.FC<NewPatkScreenProps> = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Home');
  };
  
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="跳转调试,Home" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewPatkView;

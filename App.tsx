
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Index from './src/views/BommonTab/index'

export default function App(): JSX.Element {
  
  return (
    // <View>
    //   <Text>项目初始化</Text>
    // </View>
    <NavigationContainer>
      <Index/>
    </NavigationContainer>
  );
}

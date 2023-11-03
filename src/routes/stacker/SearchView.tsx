import React, {Component} from 'react';
import { View,Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-animatable';
import IndexBar from './IndexBarView'
import MyComponent from '../../views/login/components/ForgetPass/listIndex';

const ForgetPass: React.FC = () => {
  

    return (
      <View style={{flex: 1}}>
        {/* <IndexBar/> */}
        <MyComponent></MyComponent>
      </View>
    );
  };

  export default ForgetPass;
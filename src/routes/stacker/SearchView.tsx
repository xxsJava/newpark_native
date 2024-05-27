import React from 'react';
import { View,Text } from 'react-native';
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
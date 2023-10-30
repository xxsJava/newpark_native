/*
 * @Author: xxs
 * @Date: 2023-10-07 17:42:15
 * @LastEditTime: 2023-10-30 09:16:08
 * @FilePath: \newpark_native\src\views\newpark\NewPatkView.tsx
 * @Description: desc
 */
import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {
  NewPatkScreenProps,
} from '../../config/routs';


const NewPatkView: React.FC<NewPatkScreenProps> = ({navigation}) => {
  const handlePress = () => {
    
    navigation.navigate('LoginStacker');
  };
  
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="跳转调试,Login" onPress={handlePress} />
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

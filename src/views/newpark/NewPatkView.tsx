/*
 * @Author: xxs
 * @Date: 2023-10-07 17:42:15
 * @LastEditTime: 2023-10-30 11:58:17
 * @FilePath: \newpark_native\src\views\newpark\NewPatkView.tsx
 * @Description: desc
 */
import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {
  NewPatkScreenProps,
} from '../../config/routs';
import { router } from '../../config/routs/lib/routs';
import { useNavigation } from '@react-navigation/native';




const NewPatkView: React.FC<NewPatkScreenProps> = ({navigation}) => {
  
  const navigators = useNavigation()

  const handlePress = () => {
    
    navigation.navigate('Login');
    // navigators.navigate()
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



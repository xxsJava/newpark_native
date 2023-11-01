/*
 * @Author: xxs
 * @Date: 2023-10-07 17:42:15
 * @LastEditTime: 2023-10-31 17:33:50
 * @FilePath: \newpark_native\src\views\newpark\NewPatkView.tsx
 * @Description: desc
 */
import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {NewPatkScreenProps} from '../../config/routs';
import {loginOutApi} from '../../api/sys/lgoin';
import {useToast} from 'native-base';
import Storage from '../../utils/AsyncStorageUtils';
import { navigate } from '../../config/routs/NavigationContainer';

const NewPatkView: React.FC<NewPatkScreenProps> = ({navigation}) => {
  const toast = useToast();

  const handlePress = () => {
    navigate('ForgetPass');
  };

  const loginOut = async () => {
    //登录出
    const loginOutAPI = await loginOutApi();

    if (loginOutAPI.code === 200) {
      toast.show({
        description: '退出成功',
        placement: 'top',
      });
      //清空用户缓存
      Storage.clean();
      navigation.navigate('LoginStacker');
    }
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="跳转调试,Login" onPress={handlePress} />
      <Button title="登出调试" onPress={loginOut} />
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

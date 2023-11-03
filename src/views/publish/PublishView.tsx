/*
 * @Author: xxs
 * @Date: 2023-10-07 17:43:58
 * @LastEditTime: 2023-11-03 11:48:37
 * @FilePath: \newpark_native\src\views\publish\PublishView.tsx
 * @Description: 发布帖子页面
 */
import {useToast} from 'native-base';
import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {loginOutApi} from '../../api/sys/lgoin';
import Storage from '../../utils/AsyncStorageUtils';
import { navigate } from '../../config/routs/NavigationContainer';

export default class PublishView extends Component {
  render() {
    // const toast = useToast();

    const loginOut = async () => {
      const tokenStr = await Storage.get('usr-token');
      console.log('token-->',tokenStr)
      //登录出
      const loginOutAPI = await loginOutApi(tokenStr + '');

      if (loginOutAPI.code === 200) {
        // toast.show({
        //   description: '退出成功',
        //   placement: 'top',
        // });
        //清空用户缓存
        Storage.clean();
        navigate('LoginStacker');
      }
    };

    return (
      <View style={styles.centerText}>
        <Text> PublishView </Text>
        <Button title="登出调试" onPress={loginOut} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/*
 * @Author: xxs
 * @Date: 2023-10-27 14:27:03
 * @LastEditTime: 2023-10-29 00:04:25
 * @FilePath: \newpark_native\src\views\login\components\Registered\index.tsx
 * @Description: 注册信息
 */

import {View} from 'react-native-animatable';
import {RegisteredScreenProps} from '../../../../config/routs';
import React, {useEffect, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Center, Icon, Image, Radio} from 'native-base';
import LottieView from 'lottie-react-native';

const Registered: React.FC<RegisteredScreenProps> = ({navigation}) => {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    console.log('开始执行动画');
  }, []);

  return (
    <SafeAreaView style={styles.content}>
      <KeyboardAwareScrollView enableOnAndroid={true} style={{flex: 1}}>
        <View style={styles.content}>
          <View style={styles.camera}>
            <Center>
              <View style={styles.cameraImg}>
                <View style={styles.img}>
                  <Image
                    size={60}
                    source={require('../../../../assets/images/3.0x/chat_takephoto.png')}
                    alt="网络错误"
                  />
                </View>

                <View>
                  <Image
                    size={120}
                    borderRadius={60}
                    source={{
                      uri: 'https://www.w3schools.com/css/img_lights.jpg',
                    }}
                    alt="网络错误"
                  />
                </View>
              </View>
            </Center>
          </View>

          <View style={styles.test}>
            <LottieView
              source={require('../../../../assets/json/gg.json')}
              autoPlay 
              loop
              style={{ height: '100%',width:'100%' }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  camera: {
    paddingTop: '5%',
  },
  cameraImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  img: {
    position: 'absolute',
    zIndex: 1,
    right: 30,
    top: 30,
  },
  radioView: {
    flexDirection: 'row',
  },
  radioT: {
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: '10%',
  },
  test: {
    height: '100%',
    width: '100%',
    borderWidth: 1,
    position: 'absolute',
    zIndex: -1
  },
});
export default Registered;

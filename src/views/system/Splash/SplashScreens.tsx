/*
 * @Author: xxs
 * @Date: 2023-10-26 10:25:45
 * @LastEditTime: 2024-01-23 17:22:37
 * @FilePath: \newpark_native\src\views\system\Splash\SplashScreens.tsx
 * @Description: desc
 */
import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import StatusBar from '../../../components/StatusBar';
import StylesALL from '../../../styles';
import IsLogin from '../../login/controller';

const Splashs= () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    //删除计时器
    if (count == -1) {
      clearTimeout(timer);
    }
    return () => clearInterval(timer);
  }, [count]);

  return (
    <>
      <StatusBar />
      {count >= 0 ? (
        <ImageBackground
          source={require('../../../assets/images/loginBG.png')}
          resizeMode="cover"
          style={styles.img}>
          <SafeAreaView style={{flex: 1}}>
            <View style={styles.nav}>
              <TouchableOpacity
                onPress={() => {
                  setCount(-1);
                }}>
                <View style={styles.navTime}>
                  <Text allowFontScaling={false} style={styles.navText}>{count}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.body}>
              <Animatable.View animation="tada">
                <Image
                  style={styles.tinyLogo}
                  source={require('../../../assets/images/logo.png')}
                />
              </Animatable.View>
            </View>

            <View style={styles.bodyText}>
              <Animatable.View animation="bounceInLeft">
                <Text
                allowFontScaling={false}
                  style={[
                    styles.bodyTexta,
                    styles.navText,
                    StylesALL.FONT_SIZE,
                  ]}>
                  走进校园 发现美好
                </Text>
              </Animatable.View>

              <Animatable.View animation="bounceInRight">
                <Text
                allowFontScaling={false}
                  style={[
                    styles.bodyTextb,
                    styles.navText,
                    StylesALL.FONT_SIZE,
                  ]}>
                  打开NewPark 发现新世界
                </Text>
              </Animatable.View>
            </View>

            <View style={styles.footer}>
              <Text allowFontScaling={false} style={styles.footerText}>
                © 2023 山东新园建业科技发展有限公司
              </Text>
            </View>
          </SafeAreaView>
        </ImageBackground>
      ) : (
        <IsLogin />
      )}
    </>
  );
};


const styles = StyleSheet.create({
  img: {
    flex: 1,
    position: 'relative',
  },
  nav: {
    flex: 0.1,
    // backgroundColor: '#fff',
  },
  navTime: {
    width: 60,
    backgroundColor: '#F1CA7D',
    borderRadius: 20,
    position: 'absolute',
    right: '5%',
    top: '40%',
  },
  navText: {
    textAlign: 'center',
    color: '#fff',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  body: {
    paddingLeft: '30%',
    paddingRight: '30%',
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  bodyText: {
    flex: 0.2,
    borderBlockColor: '#fff',
  },
  bodyTexta: {
    paddingRight: '40%',
    paddingTop: '5%',
  },
  bodyTextb: {
    paddingLeft: '30%',
    paddingTop: '4%',
  },
  footer: {
    width: '100%',
    // backgroundColor: '#fff',
    position: 'absolute',
    bottom: '4%',
  },
  footerText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
  },
});

export default Splashs
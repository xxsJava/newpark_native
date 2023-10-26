/*
 * @Author: xxs
 * @Date: 2023-10-26 10:25:45
 * @LastEditTime: 2023-10-26 15:59:09
 * @FilePath: \newpark_native\src\views\system\splash\SplashScreen.tsx
 * @Description: desc
 */
import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import StylesALL from '../../../styles';
import * as Animatable from 'react-native-animatable';
import {isLogin} from '../../login/controller';

export const Splash = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <>
      {count >= 0 ? (
        <ImageBackground
          source={require('../../../assets/images/loginBG.png')}
          resizeMode="cover"
          style={styles.img}>
          <View style={styles.nav}>
            <TouchableOpacity onPress={()=>{setCount(-1)}}>
              <View style={styles.navTime}>
                <Text style={styles.navText}>{count}</Text>
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
                style={[styles.bodyTexta, styles.navText, StylesALL.FONT_SIZE]}>
                走进校园 发现美好
              </Text>
            </Animatable.View>

            <Animatable.View animation="bounceInRight">
              <Text
                style={[styles.bodyTextb, styles.navText, StylesALL.FONT_SIZE]}>
                打开NewPark 发现新世界
              </Text>
            </Animatable.View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              © 2023 山东新园建业科技发展有限公司
            </Text>
          </View>
        </ImageBackground>
      ) : (
        isLogin()
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

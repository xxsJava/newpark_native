// import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';

import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, TextInput} from 'react-native-paper';
import {LoginScreenProps} from '../../config/routs';
import Storage from '../../utils/AsyncStorageUtils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginView: React.FC<LoginScreenProps> = ({navigation}) => {
  const handlePress = () => {
    //模拟登录成功
    Storage.set('usr-login', 'test');

    console.log('点击登录');
    navigation.navigate('Home');

    console.log('模拟登录成功');
  };

  return (
    <ImageBackground
      style={styles.imgbgc}
      source={require('../../assets/images/loginBG.png')}>
      <KeyboardAwareScrollView enableOnAndroid={true} style={{flex: 1}}>
        <View style={styles.top}>
          <Image
            style={styles.img}
            source={require('../../assets/images/logo.png')}
          />
        </View>

        <View style={styles.box}>
          <View>
            <Text style={styles.text}>欢迎大家加入NewPark大家庭</Text>
          </View>

          <View style={styles.num}>
            <TextInput
              // label="请输入手机号"
              placeholder="请输入手机号"
              placeholderTextColor="#fff"
              underlineColor="#fff"
              activeUnderlineColor="#fff"
              textColor="#fff"
              keyboardType="number-pad"
              style={styles.inp}
            />
          </View>

          <View style={styles.pawoed}>
            <TextInput
              style={styles.inp}
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
              placeholder="请输入密码"
              placeholderTextColor="#fff"
              underlineColor="#fff"
              textColor="#fff"
              activeUnderlineColor="#fff"
            />
          </View>

          <View style={styles.login}>
            <Button
              contentStyle={styles.loginBox}
              mode="contained"
              buttonColor="#fff"
              textColor="#000"
              onPress={handlePress}>
              登录
            </Button>
          </View>
          <View style={styles.verify}>
            <Text style={styles.underline}>短信验证</Text>

            <Text style={styles.underline}>忘记密码</Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.line} />
            <Text>第三方登录</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.wx}>
            <Image
              source={require('../../assets/images/2.0x/weixin_icon.png')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  top: {
    width: windowWidth,
    height: 250,
  },
  imgbgc: {
    width: windowWidth,
    height: windowHeight,
  },
  img: {
    position: 'absolute',
    top: 40,
    left: windowWidth / 2 - 95,
    width: 190,
    height: 190,
  },
  text: {
    color: '#fff',
    fontSize: 27,
  },
  box: {
    width: windowWidth,
    height: 500,
    padding: 20,
  },
  inp: {
    flex: 1,
    justifyContent: 'space-between',
    color: '#fff',
    backgroundColor: '',
  },
  arrows: {
    marginLeft: 10,
    marginRight: 10,
    transform: [{rotate: '-90deg'}],
  },
  num: {
    width: '100%',
    height: 50,
  },
  pawoed: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  eyes: {
    marginBottom: 12,
  },
  login: {
    width: '100%',
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginBox: {
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingLeft: '30%',
    paddingRight: '30%',
  },
  loginText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  underline: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  verify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  line: {
    width: 90,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  bottom: {
    marginTop: 50,
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wx: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginView;

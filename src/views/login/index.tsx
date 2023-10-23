import React, {Component} from 'react';

import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import {red} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class MineVIew extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.imgbgc}
        source={require('../../assets/images/loginBG.png')}>
        <View style={styles.top}>
          <Image
            style={styles.img}
            source={require('../../assets/images/logo.png')}
          />
        </View>

        <View style={styles.box}>
          <View>
            <Text style={styles.text}>请输入手机号</Text>
          </View>
          <View style={styles.num}>
            {/* <Text style={{color: '#fff', fontSize: 20}}>+86</Text>
            <Image
              style={styles.arrows}
              source={require('../../assets/images/go_left_arrow.png')}
            /> */}
            <TextInput
              placeholder="请输入手机号"
              placeholderTextColor="#fff"
              underlineColor="#fff"
              activeUnderlineColor="#fff"
              textColor="#fff"
              style={styles.inp}
            />
            {/* <Image source={require('../../assets/images/newcancel_btn.png')} /> */}
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
            {/* <Image
              style={styles.eyes}
              source={require('../../assets/images/newcancel_btn.png')}
            /> */}
          </View>
          <View style={styles.login}>
            {/* <View style={styles.loginBox}> */}
              {/* <Text style={styles.loginText}>登录</Text> */}
              <Button
                style={styles.loginBox}
                // icon="camera"
                mode="contained"
                buttonColor='#fff'
                textColor='#000'
                onPress={() => console.log('Pressed')}>
                登录
              </Button>
            {/* </View> */}
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
      </ImageBackground>
    );
  }
}

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
    flexDirection: 'row',
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
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',
    height: 50,
    // borderBottomWidth: 1,
    // borderBottomColor: 'white',
  },
  pawoed: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'flex-end',

    // borderBottomWidth: 1,
    // borderBottomColor: 'white',
  },
  eyes: {
    marginBottom: 12,
  },
  login: {
    width: '100%',
    height: 100,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginBox: {
    width: 270,
    height: 50,
    // backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    // borderTopWidth: 1,
    borderColor: '#fff',
  },
  bottom: {
    // position: 'absolute',
    // left: '50%',
    // transform: [{translateX: -50}],
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

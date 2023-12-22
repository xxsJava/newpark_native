// import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, TextInput} from 'react-native-paper';
import {LoginScreenProps} from '../../config/routs';
import Storage from '../../utils/AsyncStorageUtils';
import * as Animatable from 'react-native-animatable';
// import {useToast} from 'native-base';
import { useToast, Toast, ToastTitle } from '@gluestack-ui/themed';
import {loginApi, smsLoginApi} from '../../api/sys/lgoin';
import {useTranslation, Trans} from 'react-i18next';
import {SmsLoginType, UserLoginType} from '../../api/sys/lgoin/types';
import {forgetPass} from './controller';
import {navigate} from '../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width;

const LoginView: React.FC<LoginScreenProps> = () => {
  const toast = useToast();
  //获取输入框的手机号
  const [phone, setPhone] = useState('');

  //获取输入框的密码
  const [pass, setPass] = useState('');

  const [securePass, setSecurePass] = useState(true);

  const [load, setLoad] = useState(false);

  const usrData: UserLoginType = {
    uPhone: phone,
    uEmail: '',
    password: pass,
  };

  const smsLogin: SmsLoginType = {
    phone: phone,
    code: 'phone',
  };

  const onLogin = async () => {
    setLoad(true);
    console.log('登录点击');

    console.log('输入框数据' + phone + '-' + pass);

    if (phone.length != 11) {
      toast.show({
        placement: 'bottom',
        render: () => {
          return (
            <Text>手机号有误</Text>
          )
        },
      });
      setLoad(false);
      return;
    }

    const loginAPI = await loginApi(usrData);

    console.log(loginAPI);

    //用户不存在自动注册
    if (loginAPI.code === 1114) {
      toast.show({
        placement: 'bottom',
        render: () => {
          return (
            <Text>验证码发送，请注意查收</Text>
          )
        },
      });
      navigate('Verification');
    } else if (loginAPI.code === 200) {
      //用户token存本地
      Storage.set('usr-token', loginAPI.data);
      navigate('LoginHome');
      toast.show({
        placement: 'top',
        render: () => {
          return (
            <Text>登录成功，可享受功能</Text>
          )
        },
      });
    } else if (loginAPI.code === 1110) {
      toast.show({
        placement: 'top',
        render: () => {
          return (
            <Text>账号有误</Text>
          )
        },
      });
    }
    setLoad(false);
  };

  const smsVerIf = async () => {
    if (phone.length != 11) {
      toast.show({
        placement: 'top',
        render: () => {
          return (
            <Text>请输入手机号</Text>
          )
        },
      });
      return;
    }
    Storage.set('usr-phone', phone);
    const smsLoginAPI = await smsLoginApi(smsLogin);
    console.log(smsLoginAPI);
    toast.show({
      placement: 'top',
      render: () => {
        return (
          <Text>{smsLoginAPI.msg}</Text>
        )
      },
    });
    //发送验证码
    navigate('Verification');
  };

  //输入验证码
  const changePhoneText = (text: string) => {
    setPhone(text);
    //确保存入手机号进行下步验证码发送
    if (text.length == 11) {
      Storage.set('usr-phone', text);
    }
  };

  return (
    <Animatable.View animation="fadeIn">
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
                placeholder="请输入手机号"
                placeholderTextColor="#fff"
                underlineColor="#fff"
                activeUnderlineColor="#fff"
                textColor="#fff"
                maxLength={11}
                keyboardType="number-pad"
                onChangeText={changePhoneText}
                style={styles.inp}
              />
            </View>

            <View style={styles.pawoed}>
              <TextInput
                style={styles.inp}
                secureTextEntry={securePass}
                right={
                  <TextInput.Icon
                    icon="eye"
                    onLongPress={() => setSecurePass(false)}
                    onPressOut={() => setSecurePass(true)}
                  />
                }
                placeholder="请输入密码"
                placeholderTextColor="#fff"
                underlineColor="#fff"
                textColor="#fff"
                maxLength={16}
                activeUnderlineColor="#fff"
                onChangeText={text => setPass(text)}
              />
            </View>

            <View style={styles.login}>
              <Button
                contentStyle={styles.loginBox}
                loading={load}
                disabled={load}
                mode="contained"
                buttonColor="#fff"
                textColor="#000"
                onPress={onLogin}>
                <Trans>loginText.text1</Trans>
              </Button>
            </View>
            <View style={styles.verify}>
              <TouchableOpacity onPress={smsVerIf}>
                <Text style={styles.underline}>
                  <Trans>loginText.text2</Trans>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={forgetPass}>
                <Text style={styles.underline}>
                  <Trans>loginText.text3</Trans>
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
              <View style={styles.line} />
              <Text>
                <Trans>loginText.text4</Trans>
              </Text>
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
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  top: {
    width: windowWidth,
    height: 250,
  },
  imgbgc: {
    width: windowWidth,
    height: '100%',
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
    marginBottom: 30,
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

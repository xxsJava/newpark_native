//import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, TextInput } from 'react-native-paper';
import { LoginScreenProps } from '../../config/routs';
import Storage from '../../utils/AsyncStorageUtils';
// import {useToast} from 'native-base';
import { Toast, useToast } from '@gluestack-ui/themed';
import { Trans } from 'react-i18next';
import { getOpenIMConfig } from '../../api/imApi';
import { loginApi, smsLoginApi } from '../../api/sys/lgoin';
import { SmsLoginType, UserLoginType } from '../../api/sys/lgoin/types';
import { navigate } from '../../config/routs/NavigationContainer';
import IMSDKRN from '../../plugins/IMSDKRN';
import ClausePopup from '../../views/login/components/ClausePopup';
import { forgetPass } from './controller';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginView: React.FC<LoginScreenProps> = () => {
  const [visible, setVisible] = useState(false)
  const toast = useToast();
  //获取输入框的手机号
  const [phone, setPhone] = useState('');

  //获取输入框的密码
  const [pass, setPass] = useState('');

  const [securePass, setSecurePass] = useState(true);
  // 这是密码登录的地方
  const [recode , setrecode] = useState(true);


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
    // navigate('passWord')
    setrecode(!recode)
    console.log('输入框数据' + phone + '-' + pass);

    if (phone.length != 11) {
      toast.show({
        placement: 'bottom',
        render: () => {
          return (
            <Toast action="attention" variant="solid">
              <Text allowFontScaling={false}>手机号有误</Text>
            </Toast>
          )
        },
      });
      setLoad(false);
      return;
    }

    const loginAPI = await loginApi(usrData);

    console.log(loginAPI.data);

    //用户不存在自动注册
    if (loginAPI.code === 1114) {
      toast.show({
        placement: 'bottom',
        render: () => {
          return (
            <Toast action="attention" variant="solid">
              <Text allowFontScaling={false}>验证码发送，请注意查收</Text>
            </Toast>
          )
        },
      });
      navigate('Verification');
    } else if (loginAPI.code === 200) {
      //用户token存本地
      Storage.set('usr-token', loginAPI.data.usrToken);

      //用户OPEN-配置
      const openIMConfig = {
        secret: "openIM123",
        platformID: 2,
        userID: loginAPI.data.uId
      }

      // console.log("获取到用户UID---->",typeof(openIMConfig.userID))
      const openIMRes = await getOpenIMConfig(openIMConfig);
      console.log('获取到Open-IM-token1---->', openIMRes.data.token);
      Storage.set('openim-token',openIMRes.data.token);
      //oepnIm 登录
      IMSDKRN.login(loginAPI.data.uId, openIMRes.data.token);
      //用户uid存本地
      Storage.set('uid', loginAPI.data.uId);
      navigate('LoginHome');
      toast.show({
        placement: 'top',
        render: () => {
          return (
            <Toast action="attention" variant="solid">
              <Text allowFontScaling={false}>登录成功，可享受功能</Text>
            </Toast>
          )
        },
      });
    } else if (loginAPI.code === 1110) {
      toast.show({
        placement: 'top',
        render: () => {
          return (
            <Toast action="attention" variant="solid">
              <Text allowFontScaling={false}>账号有误</Text>
            </Toast>
          )
        },
      });
    }
    setLoad(false);
  };
// 这里是手机号登录会执行的操作
  const onLoginsj = async () => {
     setrecode(!recode)
    setLoad(true);
    console.log('登录点击');
    // navigate('passWord')
    setrecode(!recode)
    console.log('输入框数据' + phone + '-' + pass);
    // text = ''
    if (phone.length != 11) {
      toast.show({
        placement: 'bottom',
        render: () => {
          return (
            <Toast action="attention" variant="solid">
              <Text allowFontScaling={false}>手机号有误</Text>
            </Toast>
          )
        },
      });
      setLoad(false);
      return;
    }
    //这是手机号登录的地方
    const onLoginmm = async () => {
      setrecode(!recode)
      // setLoad(true);
      // console.log('登录点击');
      // navigate('passWord')
      // setrecode(!recode)
      // console.log('输入框数据' + phone + '-' + pass);
      // // text = ''
      // if (phone.length != 11) {
      //   toast.show({
      //     placement: 'bottom',
      //     render: () => {
      //       return (
      //         <Toast action="attention" variant="solid">
      //           <Text allowFontScaling={false}>手机号有误</Text>
      //         </Toast>
      //       )
      //     },
      //   });
      //   setLoad(false);
      //   return;
      }

    const loginAPI = await loginApi(usrData);

    console.log(loginAPI.data);

    //用户不存在自动注册
    if (loginAPI.code === 1114) {
      toast.show({
        placement: 'bottom',
        render: () => {
          return (
            <Toast action="attention" variant="solid">
              <Text allowFontScaling={false}>验证码发送，请注意查收</Text>
            </Toast>
          )
        },
      });
      navigate('Verification');
    } else if (loginAPI.code === 200) {
      //用户token存本地
      Storage.set('usr-token', loginAPI.data.usrToken);

      //用户OPEN-配置
      const openIMConfig = {
        secret: "openIM123",
        platformID: 2,
        userID: loginAPI.data.uId
      }

      // console.log("获取到用户UID---->",typeof(openIMConfig.userID))
      let openImToken = await Storage.get("openim-token");

      if(openImToken === null){
        const openIMRes = await getOpenIMConfig(openIMConfig);
        console.log('获取到Open-IM-token1---->', openIMRes.data.token);
        console.log('设置openim-token3---->',Storage.set('openim-token',openIMRes.data.token));
        openImToken = await Storage.get("openim-token");
      }
      
      //oepnIm 登录
      IMSDKRN.login(loginAPI.data.uId, openImToken);
      //用户uid存本地
      Storage.set('uid', loginAPI.data.uId);
      navigate('LoginHome');
      toast.show({
        placement: 'top',
        render: () => {
          return (
            <Toast action="attention" variant="solid">
              <Text allowFontScaling={false}>登录成功，可享受功能</Text>
            </Toast>
          )
        },
      });
    } else if (loginAPI.code === 1110) {
      toast.show({
        placement: 'top',
        render: () => {
          return (
            <Toast action="attention" variant="solid">
              <Text allowFontScaling={false}>账号有误</Text>
            </Toast>
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
            <Toast action="attention" variant="solid">
              <Text allowFontScaling={false}>请输入手机号</Text>
            </Toast>
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
          <Toast action="attention" variant="solid">
            <Text allowFontScaling={false}>{smsLoginAPI.msg}</Text>
          </Toast>
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
        {/* style={{flex: 1}} */}
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <View style={styles.top}>
            <Image
              style={styles.img}
              source={require('../../assets/images/logo.png')}
            />
          </View>

          <View style={styles.box}>
            <View>
              <Text allowFontScaling={false} style={[styles.text,recode? null :{display:'none'}]}>
                请手机号登录
              </Text>
              <Text allowFontScaling={false} style={[styles.text,recode? {display:'none'} : null]}>
                请密码登录
              </Text>
            </View>
            {/* <View style={styles.heng}>
            <Button style={styles.buttonStyle} labelStyle={styles.buttonText} rippleColor='#ddd' onPress={() => console.log('登录')}>登录</Button>
            <Button style={styles.buttonStyle} labelStyle={styles.buttonText} rippleColor='#ddd' onPress={() => console.log('注册')}>注册</Button>
            </View> */}
            <View style={styles.num}>
              <TextInput
                allowFontScaling={false}
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

            <View style={[styles.pawoed,recode? {display:'none'} : null]} >
            <TextInput
                allowFontScaling={false}
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

            <View style={[styles.login,recode ? {display:'none'} : null]}>
              <Button
                contentStyle={styles.loginBox}
                loading={load}
                disabled={load}
                mode="contained"
                buttonColor="#fff"
                textColor="#E8AE0E"
                // onPress={() => setrecode(!recode)}
                onPress={onLogin}
                >
                {/* <Text>手机号登录</Text> */}
                <Trans>确认密码登录</Trans>
                {/* passWord */}
              </Button>
            </View>
            <View style={[styles.login,recode ? null :{display:'none'}]}>
              <Button
                contentStyle={styles.loginBox}
                loading={load}
                disabled={load}
                mode="contained"
                buttonColor="#fff"
                textColor="#E8AE0E"
                onPress={() => {navigate('Verification')}}>
                <Trans>loginText.text1</Trans>
                {/* passWord */}
              </Button>
            </View>
            {/* {navigate('Verification')} */}
            <View style={[styles.center, recode ? null : {display:'none'}]}>
              <TouchableOpacity onPress={() => setrecode(!recode)}>
                <Text allowFontScaling={false} style={styles.underline}>
               <Text>密码登录</Text>
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.center, recode ? {display:'none'} : null]}>
              <TouchableOpacity onPress={() => setrecode(!recode)} >
                <Text allowFontScaling={false} style={styles.underline}>
                <Text>手机号登录</Text>
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.verify}>
            <TouchableOpacity onPress={smsVerIf}>
                <Text allowFontScaling={false} style={styles.underline}>
                  <Trans>loginText.text2</Trans>
                </Text>
              </TouchableOpacity>
            {/* <TouchableOpacity onPress={() =>{}}>
                <Text allowFontScaling={false} style={styles.underline}>
                  注册
                </Text>
              </TouchableOpacity> */}
              <TouchableOpacity onPress={forgetPass}>
                <Text allowFontScaling={false} style={styles.underline}>
                  <Trans>loginText.text3</Trans>
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
              <View style={styles.line} />
              <Text allowFontScaling={false} style={styles.san}>
                <Trans>loginText.text4</Trans>
              </Text>
              <View style={styles.line} />
            </View>
            <View style={styles.wx}>
              <Image
                source={require('../../assets/images/2.0x/weixin_icon.png')}
              />
              <Text style={{color:'#fff'}}>微信登录</Text>
            </View>
            <TouchableOpacity onPress={() => setVisible(true)} style={styles.heng1}>
              <Image source={require('../../assets/images/tup/tongyi.png')} style={styles.icon}></Image>
              <Text>我已同意并阅读</Text>
              <Text style={{ color: 'blue' }}>服务条款</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
      <ClausePopup visible={visible} onClose={() => setVisible(false)}></ClausePopup>
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
    fontSize: 29,
    marginBottom: 30,
    fontWeight: 'bold'
  },
  box: {
    width: windowWidth,
    height: 600,
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
    transform: [{ rotate: '-90deg' }],
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
    marginBottom:20
  },
  loginBox: {
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingLeft: '25%',
    paddingRight: '25%',
    fontSize: 30
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
  buttonText: {
    fontSize: 18,
    color: '#F0BA38',
    lineHeight: 25
  },
  buttonStyle: {
    width: 120,
    height: 48,
    marginTop: 10,
    marginHorizontal: '16%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 24
  },
  heng: {
    flexDirection: 'row',
    width: '60%'
  },
  heng1: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'flex-end',
    marginTop:20
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  san:{
    color:'#fff',
    fontSize:16
  },
  icon:{
    width:15,
    height:15,
    margin:3
  }

});

export default LoginView;
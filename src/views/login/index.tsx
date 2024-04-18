import { useToast } from '@gluestack-ui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, TextInput } from 'react-native-paper';
import { getClientConfig, getOpenIMConfig } from '../../api/imApi';
import { loginApi, smsLoginApi } from '../../api/sys/lgoin';
import { SmsLoginType, UserLoginType } from '../../api/sys/lgoin/types';
import ToastCompent from '../../components/Toast';
import OpenIMConfig from '../../config/im/OpenIMConfig';
import { LoginScreenProps } from '../../config/routs';
import { navigate } from '../../config/routs/NavigationContainer';
import { initDataDir } from '../../config/storagePermissionStatus';
import IMSDKRN from '../../plugins/IMSDKRN';
import Storage from '../../utils/AsyncStorageUtils';
import ClausePopup from '../../views/login/components/ClausePopup';
import { forgetPass } from './controller';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const LoginView: React.FC<LoginScreenProps> = () => {
  const [visible, setVisible] = useState(false);
  const toast = useToast();
  // 改正
  //获取输入框的手机号
  const [phone, setPhone] = useState('18206571241');
  //获取输入框的密码
  const [pass, setPass] = useState('Ee123456');
  const [securePass, setSecurePass] = useState(true);
  // 这是密码登录的地方
  const [recode, setrecode] = useState(true);
  const [load, setLoad] = useState(false);

  const toasts = (directional:any,text:string) => {
    toast.show({
      placement: directional,
      render: () => ToastCompent(text),
    });
  }

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
    const networkState = await NetInfo.fetch();
    console.log('当前网络状态--------------->'+ networkState.isConnected);

    if (phone.length != 11) {
      if (phone.length == 0) {
        toasts('bottom','手机号为空');
        return;
      }

      toasts('bottom','手机号有误');
      setLoad(false);
      return;
    }

    const loginAPI = await loginApi(usrData);
    const uId = loginAPI.data.uId;
    OpenIMConfig.userID = uId;

    //用户不存在自动注册
    if (loginAPI.code === 1114) {
      toasts('bottom','验证码发送，请注意查收');
      navigate('Registered');
    } else if (loginAPI.code === 200) {
      //用户token存本地
      Storage.set('usr-token', loginAPI.data.usrToken);

      const openIMRes = await getOpenIMConfig(OpenIMConfig);
      console.log('获取到Open-IM-token1---->', openIMRes.data.token);
      Storage.set('openim-token',openIMRes.data.token);
      //oepnIm 登录
      IMSDKRN.login(uId, openIMRes.data.token);
      const imAuth = await getClientConfig();
      Storage.set('im-auth',imAuth.data.token);
      //用户uid存本地
      Storage.set('uid', uId);
      //android获取设备权限
      initDataDir(uId);

      toasts('top','登录成功,开始享受快乐人生');
    } else if (loginAPI.code === 1110) {
      setLoad(true);
      toasts('top','账号有误');
      return false;
    }
    setLoad(false);
    // 这个是跳转到主页面的
    navigate('LoginHome')
  };

  const smsVerIf = async () => {
    if (phone.length != 11) {
      toasts('top','请输入手机号');
      return;
    }
    Storage.set('usr-phone', phone);
    const smsLoginAPI = await smsLoginApi(smsLogin);
    console.log(smsLoginAPI);
    toasts('top',smsLoginAPI.msg);
    await AsyncStorage.setItem('uphone', phone);
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
              accessibilityLabel='图片'
              alt="头像"
            />
          </View>
          {/* 手机号登录 */}
          <View style={styles.box}>
            <View style={recode ? null : { display: 'none' }}>
              <Text allowFontScaling={false} style={styles.text}>
                请手机号登录
              </Text>
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
                  style={[styles.inp]}
                  value={phone}                />
              </View>
              <View style={styles.login}>
                <Button
                  contentStyle={styles.loginBox}
                  loading={load}
                  disabled={load}
                  mode="contained"
                  buttonColor="#fff"
                  textColor="#E8AE0E"
                  onPress={() => smsVerIf()}>
                  <Trans>loginText.text1</Trans>
                </Button>
              </View>
              <View style={styles.center}>
                <TouchableOpacity onPress={() => setrecode(!recode)}>
                  <Text allowFontScaling={false} style={styles.underline}>
                    <Text>密码登录</Text>
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={!recode ? null : { display: 'none' }}>
            <Text allowFontScaling={false} style={styles.text}>
                请密码登录
            </Text>
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
                style={[styles.inp, { paddingLeft: 18 }]}
                value={phone}
              />
            </View>
            <View style={styles.pawoed} >
              <TextInput
                allowFontScaling={false}
                style={[styles.inp, { paddingLeft: 18 }]}
                secureTextEntry={securePass}
                right={
                  <TextInput.Icon
                    icon="eye"
                    color={"#FFF"}
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
                value={pass}
              />
            </View>
            <View style={[styles.login, recode ? { display: 'none' } : null]}>
              <Button
                contentStyle={styles.loginBox}
                loading={load}
                // disabled={load}
                mode="contained"
                buttonColor="#fff"
                textColor="#E8AE0E"
                // onPress={onLogin}
                onPress={() => onLogin()}
              >
                <Trans>确认登录</Trans>
                {/* passWord */}
              </Button>
            </View>
            <View style={[styles.center, recode ? { display: 'none' } : null]}>
              <TouchableOpacity onPress={() => setrecode(!recode)} >
                <Text allowFontScaling={false} style={styles.underline}>
                  <Text>手机号登录</Text>
                </Text>
              </TouchableOpacity>
            </View>
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
                accessibilityLabel='图片'
                alt="头像"
              />
              <Text style={{ color: '#fff' }}>微信登录</Text>
            </View>
            <TouchableOpacity onPress={() => setVisible(true)} style={styles.heng1}>
              <Image source={require('../../assets/images/tup/tongyi.png')} style={styles.icon} accessibilityLabel='图片' alt="头像"></Image>
              <Text>我已同意并阅读</Text>
              <Text style={{ color: 'blue' }}>服务条款</Text>
            </TouchableOpacity>
          </View>
         {/* <View>
            <Button icon="camera" mode="contained" onPress={() => navigate('Verification')}>
              查看页面Verification
            </Button>
            <Button icon="camera" mode="contained" onPress={() => navigate('GenderRoute')}>
              查看页面GenderRoute
            </Button>
            <Button icon="camera" mode="contained" onPress={() => navigate('InterestsHobbies')}>
              查看页面InterestsHobbies
            </Button>
            <Button icon="camera" mode="contained" onPress={() => navigate('SchoolRoute')}>
              查看页面SchoolRoute
            </Button>
            <Button icon="camera" mode="contained" onPress={() => navigate('Registered')}>
              查看页面Registered
            </Button>
            <Button icon="camera" mode="contained" onPress={() => navigate('ForgetPass')}>
              查看页面ForgetPass
            </Button>
          </View>  */}
        </KeyboardAwareScrollView>
      </ImageBackground>
      <ClausePopup visible={visible} onClose={() => setVisible(false)}></ClausePopup>
    </Animatable.View>
  );
};
export default LoginView;
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
    marginBottom: 20
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
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 20
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  san: {
    color: '#fff',
    fontSize: 16
  },
  icon: {
    width: 15,
    height: 15,
    margin: 3
  }

});

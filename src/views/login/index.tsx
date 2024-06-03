import { CheckIcon, Checkbox, CheckboxGroup, CheckboxIcon, CheckboxIndicator, CheckboxLabel, Link, LinkText, useToast } from '@gluestack-ui/themed';
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
import FontSize from '../../styles/FontSize';
import Storage from '../../utils/AsyncStorageUtils';

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
  const [recode, setrecode] = useState(false);
  const [load, setLoad] = useState(false);

  const [checkVal, setChckVal] = useState([])
  const [servicefFlag,setServiceFlag] = useState(false);

  const toasts = (directional:any,text:string) => {
    toast.show({
      placement: directional,
      render: () => ToastCompent(text),
    });
  }

  const onLogin = async () => {
    const networkState = await NetInfo.fetch();
    console.log('当前网络状态--------------->'+ networkState.isConnected);

    if(!servicefFlag){
      toasts('top','请同意服务协议');
      return;
    }

    setLoad(true);
    

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

  const usrData: UserLoginType = {
    uPhone: phone,
    uEmail: '',
    password: pass,
  };
  const smsLogin: SmsLoginType = {
    phone: phone,
    code: 'phone',
  };
  const smsVerIf = async () => {

    if (phone.length != 11) {
      toasts('top','请输入手机号');
      return;
    }

    if(!servicefFlag){
      toasts('top','请同意服务协议,在进行登录/注册');
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

  const onChageService = (bol:boolean) => {
    setServiceFlag(bol);
  }

  return (
    <Animatable.View animation="fadeIn">
      <ImageBackground
        style={styles.imgbgc}
        source={require('../../assets/images/loginBG.png')}>
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <View style={styles.top}>
            <Image
              style={styles.img}
              source={require('../../assets/images/logo.png')}
              accessibilityLabel='应用程序标志'
              alt="头像"
            />
          </View>
          {/* 手机号登录 */}
          <View style={styles.box}>
            <View>
            <Text allowFontScaling={false} style={styles.text}>
                {recode?"验证码登录/注册":"账号密码登录"}
            </Text>
            <View style={styles.num}>
              <TextInput
                allowFontScaling={false}
                placeholder="请输入手机号"
                placeholderTextColor="#fff"
                underlineColor="#fff"
                underlineStyle={{width:0}}
                textColor="#fff"
                maxLength={11}
                left={
                  <TextInput.Icon
                    icon="cellphone"
                    color={"#FFF"}
                  />
                }
                keyboardType="number-pad"
                onChangeText={changePhoneText}
                style={[styles.inp]}
                value={phone}
              />
            </View>

            
            <View style={[styles.login]}>
              <Button
                contentStyle={styles.loginBox}
                loading={load}
                disabled={load}
                mode="contained"
                buttonColor="#fff"
                textColor="#E8AE0E"
                onPress={recode?smsVerIf:onLogin}
              >
                <Trans>{recode?'loginText.text1':'确认登录'}</Trans>
              </Button>
            </View>
            <View style={[styles.center]}>
              <TouchableOpacity onPress={() => setrecode(!recode)} accessibilityLabel={recode?'账号密码登录':'使用验证码登录/注册'} >
                <Text allowFontScaling={false} style={styles.underline}>
                  <Text>{recode?'账号密码登录':'使用验证码登录/注册'}</Text>
                </Text>
              </TouchableOpacity>
            </View>
            </View>
            <View style={styles.bottom}>
              <Text allowFontScaling={false} style={styles.san}>
                <Trans>loginText.text4</Trans>
              </Text>
            </View>
            <View style={styles.wx}>
              <Image
                source={require('../../assets/images/2.0x/weixin_icon.png')}
                alt="网络错误"
                accessibilityLabel="微信图标"
              />
            </View>
            
            <View style={styles.heng1}>

              <CheckboxGroup onChange={(keys) => {setChckVal(keys)}} value={checkVal} accessible={true} accessibilityLabel="同意服务协议组">
                <Checkbox size="sm" isInvalid={false} isDisabled={false} value='services' onChange={onChageService} accessible={true} accessibilityLabel="同意服务协议" >
                  <CheckboxIndicator mr="$2" accessible={true} accessibilityLabel="同意服务协议图标">
                    <CheckboxIcon accessible={true} accessibilityLabel="同意服务协议图标" as={CheckIcon}/>
                  </CheckboxIndicator >
                  <CheckboxLabel accessible={true} accessibilityLabel="同意服务协议标题" />
                </Checkbox>
              </CheckboxGroup>
              <Text style={FontSize.f12}>同意</Text>
              <Link href="#" accessibilityLabel="平台服务协议">
                  <LinkText style={FontSize.f12} accessibilityLabel="平台服务协议文本">《平台服务协议》</LinkText>
              </Link>
              <Text style={FontSize.f12}>和</Text>
              <Link href="#" accessibilityLabel="隐私政策">
                  <LinkText style={FontSize.f12} accessibilityLabel="隐私政策文本">《隐私政策》</LinkText>
              </Link>
              <Link href="#" accessibilityLabel="用户协议">
                  <LinkText style={FontSize.f12} accessibilityLabel="用户协议文本">《用户协议》</LinkText>
              </Link>
            </View>
          </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
    </Animatable.View>
  )
};
export default LoginView;

const styles = StyleSheet.create({
  container: {
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
  heng1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 20
  },
  icon: {
    width: 15,
    height: 15,
    margin: 3
  },
  inp: {
    flex: 1,
    justifyContent: 'space-between',
    color: '#fff',
    backgroundColor:'#F6D99D',
    borderRadius:0
  },
})

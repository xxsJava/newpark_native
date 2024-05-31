import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, Text, ImageBackground, ScrollView, Image } from "react-native";
import { navigate } from '../../config/routs/NavigationContainer';
import { Button, TextInput } from 'react-native-paper';
import { forgetPass } from './controller';
import NetInfo from '@react-native-community/netinfo';
import { useToast } from '@gluestack-ui/themed';
import ToastCompent from '../../components/Toast';
import { loginApi, smsLoginApi } from '../../api/sys/lgoin';
import { SmsLoginType, UserLoginType } from '../../api/sys/lgoin/types';
import OpenIMConfig from '../../config/im/OpenIMConfig';
import Storage from '../../utils/AsyncStorageUtils';
import { getClientConfig, getOpenIMConfig } from '../../api/imApi';
import IMSDKRN from '../../plugins/IMSDKRN';
import { initDataDir } from '../../config/storagePermissionStatus';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const LoginView = () => {
 
  const toast = useToast();
  const [visible, setVisible] = useState(false);
  const [isPhoneReg,setIsPhoneReg] = useState(true);
  const [securePass, setSecurePass] = useState(true);
  const [pass, setPass] = useState('Ee123456');
  const [phone, setPhone] = useState('18206571241');
  const [load, setLoad] = useState(false);
  const toasts = (directional:any,text:string) => {
    toast.show({
      placement: directional,
      render: () => ToastCompent(text),
    });
  }

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
    Storage.set('usr-phone', phone);
    const smsLoginAPI = await smsLoginApi(smsLogin);
    console.log(smsLoginAPI);
    toasts('top',smsLoginAPI.msg);
    await AsyncStorage.setItem('uphone', phone);
   //发送验证码
    navigate('Verification');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../../assets/images/loginBG.png')}
          style={{ width: windowWidth, height: windowHeight,position:'relative'}}
        >
          <View style={{ alignItems: 'center', marginTop: 12 }}>
            <Image source={require('../../assets/images/logo.png')} style={{ width: 180, height: 180 }}></Image>
            <Text style={{ fontSize: 26, color: '#fff', fontWeight: 'bold' }}>手机号登录或注册</Text>
            <Text style={{ color: '#fff', marginTop: 6, fontWeight: 'bold',marginBottom:12,fontSize:13}}>快速找到好友，一站式记录你的运动</Text>

            <View style={{flexDirection:'row',backgroundColor:'#F6D99D',width:'80%',borderRadius:0,paddingHorizontal:20,alignItems:'center',height:43,marginVertical:20}}>
              <Text style={{color:'#fff',fontSize:17}}>+86</Text>
              <TextInput 
                placeholder="输入手机号码"
                style={{color:'#fff',fontSize:17,marginLeft:6,width:'80%',backgroundColor:'#F6D99D',height:'70%',lineHeight:43,alignItems:'center',marginTop:8}}
                placeholderTextColor="#fff"
                underlineColor="#fff"
                underlineStyle={{width:0}}
                textColor="#fff"
                maxLength={16}
                activeUnderlineColor="#fff"
                onChangeText={text => setPhone(text)}
                value={phone}
              />
            </View>
           <View style={!isPhoneReg ? {width:'80%',borderRadius:0,marginVertical:12,backgroundColor:'#F6D99D',height:43,}:{display:'none'}}>
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
                underlineStyle={{width:0}}
                activeUnderlineColor="#fff"
                onChangeText={text => setPass(text)}
                value={pass}
              />
           </View>
            <TouchableOpacity style={isPhoneReg ?{backgroundColor:'#F6D99D',width:'80%',borderRadius:23,paddingHorizontal:20,height:43}:{display:'none'}}  onPress={smsVerIf}>
              <Text style={{color:'#eb883d',fontSize:15,textAlign:'center',lineHeight:43,fontWeight:'bold'}}>获取验证码</Text>
            </TouchableOpacity>
            <TouchableOpacity style={!isPhoneReg ?{backgroundColor:'#F6D99D',width:'80%',borderRadius:23,paddingHorizontal:20,height:43}:{display:'none'}} onPress={onLogin}>
              <Text style={{color:'#eb883d',fontSize:15,textAlign:'center',lineHeight:43,fontWeight:'bold'}}>登录</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',height:60,alignItems:'center',justifyContent:'space-between',width:'60%'}}>
            
             <TouchableOpacity onPress={() => setIsPhoneReg(true)} style={!isPhoneReg ?{}:{display:'none'}}>
             <Text style={isPhoneReg ? {display:'none'}:{color:'#fff',fontSize:15,fontWeight:'bold'} }>免密登录</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => setIsPhoneReg(false)} style={isPhoneReg ?{}:{display:'none'}}>
             <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>密码登录</Text>
             </TouchableOpacity>
              <View style={{width:1,backgroundColor:'#eee',height:14}}></View>
              <View>
              {/* <Text style={isPhoneReg ? {color:'#fff',fontSize:15,fontWeight:'bold'}:{display:'none'}}>找回账号</Text> */}
             <TouchableOpacity  onPress={forgetPass}>
             <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>找回密码</Text>
             </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{position:'absolute',bottom:30,width:windowWidth,alignItems:'center'}}>
           <View style={{width:50,height:50,backgroundColor:'#F9E3B8',borderRadius:70,alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../../assets/images/tup/weixin-2.png')} style={{width:30,height:30}} />
           </View>
           <TouchableOpacity onPress={() => setVisible(true)} style={styles.heng1}>
              <Image source={require('../../assets/images/tup/tongyi.png')} style={styles.icon} accessibilityLabel='图片' alt="头像"></Image>
              <Text style={{color:'#fff',fontSize:13}}>我已同意并阅读</Text>
              <Text style={{ color: 'blue',fontSize:13,textDecorationLine:'underline' }}>《服务条款》</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>


    </View>
  )
};
export default LoginView;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight
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

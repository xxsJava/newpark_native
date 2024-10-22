/*
 * @Author: xxs
 * @Date: 2023-10-27 14:27:03
 * @LastEditTime: 2024-06-03 15:42:05
 * @FilePath: \newpark_native\src\views\login\components\Registered\index.tsx
 * @Description: 注册信息
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  Appbar,
  Button,
  TextInput
} from 'react-native-paper';
import { navigate } from '../../../../config/routs/NavigationContainer';
import Colors from '../../../../styles/Color';
// import * as ImagePicker from 'expo-image-picker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Registered = () => {
  var upath = ''
  const [ava, setAva] = useState('');
  const [imghead, setImghead] = useState(null)
  const animationRef = useRef<LottieView>(null);
  // 昵称
  const [nameVal, nameOnChange] = React.useState('');
  // 描述
  const [describeVal, describeOnChange] = React.useState('');
  // 密码
  const [passwordVal, passwordOnChange] = React.useState('');
  // 确认密码
  const [confirmPasswordVal, confirmPasswordOnChange] = React.useState('');
  const [securePass, setSecurePass] = useState(true);
  const [confirmSecurePass, setConfirmSecurePass] = useState(true);
  // 性别 0:男,1:女
  const [sex,setSex] = useState('0')
  const changeHeader = () => {
    launchImageLibrary({
      mediaType: "mixed",
      selectionLimit: 0,// 1为一张，0不限制数量
      includeBase64: true
    }, res => {
      setImghead(res.assets)
      if (!res.didCancel) {
        if (res.assets[0].uri) {
          upath = res.assets[0].uri
        }
        // console.log(res.assets[0].uri,'res.assets[0].uri');
      }
      // else {
      //   const selectedImageUri = '../../../../assets/images/tup/defaultheader.png'
      // }
      console.log(upath, 'upath222');
      setAva(upath)
      // console.log(imghead,'imghead');
    });

  }
  useEffect(() => {
    console.log('开始执行动画');
  }, []);
  const next = async () => {
    if (confirmPasswordVal == '' && passwordVal == '') {
      return (Alert.alert(
        '密码为空',
        '请输入密码!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      ))
    }
    if (confirmPasswordVal != passwordVal) {
      return (Alert.alert(
        '密码输入不一致',
        '请确保两次输入的密码相同!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      ))
    }
    await AsyncStorage.setItem('ava', ava);
    await AsyncStorage.setItem('upath', upath);
    await AsyncStorage.setItem('unikname', nameVal);
    await AsyncStorage.setItem('description', describeVal);
    await AsyncStorage.setItem('pass', passwordVal);
    await AsyncStorage.setItem('usex',sex);
    // await AsyncStorage.setItem('schoolId',describeVal);
    navigate('SchoolRoute')
    // var describe = await AsyncStorage.getItem('description');
    // console.log(describe,'描述!!!!!!!!');
  }
  return (
    <View style={[styles.parentView,Colors.bGrey]}>
      <Appbar.Header style={styles.headerStyle}>
        <Text allowFontScaling={false} style={styles.headerText}>填写基本信息</Text>
      </Appbar.Header>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView style={styles.scrollStyle}>
          <View style={styles.avatarView}>
            <TouchableOpacity style={styles.avatarStyle} onPress={() => changeHeader()}>
              {imghead ? (
                imghead && imghead.map((item: any, index: any) => {
                  return (
                    <View key={index}>
                      <Image
                        style={styles.avatarImage}
                        source={{ uri: item.uri }}
                        accessibilityLabel='图片'
                        alt="头像"
                      />
                    </View>
                  )
                })
              ) : (
                <Image source={require('../../../../assets/images/3.0x/chat_takephoto.png')} style={{ width: 100, height: 100, borderRadius: 100 }} accessibilityLabel='图片' alt="头像" />
              )
              }

            </TouchableOpacity>
            <Text allowFontScaling={false} style={styles.avatarText}>上传头像</Text>
          </View>
          <View style={[styles.nameView, styles.inputView]}>
            <Text allowFontScaling={false} style={styles.nameText}>昵称</Text>
            <TextInput
              allowFontScaling={false}
              placeholder="请填写昵称"
              value={nameVal}
              selectionColor="#ffb700"
              cursorColor="#ffb700"
              underlineColor="transparent"
              activeUnderlineColor="transparent"
              style={styles.inputStyle}
              onChangeText={text => nameOnChange(text)}
            />
          </View>
          <View style={{marginHorizontal:20,marginBottom:8}}>
            <Text allowFontScaling={false} style={styles.nameText}>性别</Text>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              <TouchableOpacity style={[{flexDirection:'row',alignItems:'center',justifyContent:'space-around',width:120,height:46,backgroundColor:'#F5F7F8',borderRadius:30},sex == '0' ? {backgroundColor:'#4B67FD'}:{}]} onPress={()=> {setSex('0')}}>
                <View style={{ backgroundColor: '#4B67FD', width: 30, height: 30,alignItems:'center',justifyContent:'center',borderRadius:20}}>
                  <Image source={require('../../../../assets/images/tup/icon.png')} style={{ width: 18, height: 18 }}></Image>
                </View>
                <Text style={[{fontSize:16,fontWeight:'bold'},sex == '0' ?{color:'#fff'}:{}]}>男生</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[{flexDirection:'row',alignItems:'center',justifyContent:'space-around',width:120,height:46,backgroundColor:'#F5F7F8',borderRadius:30},sex == '1' ? {backgroundColor:'#FF619D'}:{}]} onPress={()=> {setSex('1')}}>
                <View style={{ backgroundColor: '#FF619D', width: 30, height: 30,alignItems:'center',justifyContent:'center',borderRadius:20}}>
                  <Image source={require('../../../../assets/images/tup/nv-2.png')} style={{ width: 18, height: 18 }}></Image>
                </View>
                <Text style={[{fontSize:16,fontWeight:'bold'},sex == '1' ?{color:'#fff'}:{}]}>女生</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.describeView, styles.inputView]}>
            <Text allowFontScaling={false} style={styles.nameText}>交友描述</Text>
            <TextInput
              allowFontScaling={false}
              placeholder="交友描述，会显示在个人主页"
              multiline={true}
              numberOfLines={5}
              selectionColor="#ffb700"
              cursorColor="#ffb700"
              underlineColor="transparent"
              activeUnderlineColor="transparent"
              value={describeVal}
              style={[styles.describeInput, styles.inputStyle]}
              onChangeText={text => describeOnChange(text)}
            />
          </View>
          <View style={[styles.passwordView, styles.inputView]}>
            <Text allowFontScaling={false} style={styles.nameText}>密码</Text>
            <TextInput
              allowFontScaling={false}
              style={styles.inputStyle}
              placeholder="请输入密码"
              secureTextEntry={securePass}
              value={passwordVal}
              right={
                <TextInput.Icon
                  icon="eye"
                  color={'#ffb700'}
                  onLongPress={() => setSecurePass(false)}
                  onPressOut={() => setSecurePass(true)}
                />
              }
              selectionColor="#ffb700"
              cursorColor="#ffb700"
              underlineColor="transparent"
              activeUnderlineColor="transparent"
              onChangeText={text => passwordOnChange(text)}
            />
          </View>
          <View style={[styles.passwordView, styles.inputView]}>
            <Text allowFontScaling={false} style={styles.nameText}>确认密码</Text>
            <TextInput
              allowFontScaling={false}
              style={styles.inputStyle}
              placeholder="请再次输入密码"
              secureTextEntry={confirmSecurePass}
              value={confirmPasswordVal}
              right={
                <TextInput.Icon
                  icon="eye"
                  color={'#ffb700'}
                  onLongPress={() => setConfirmSecurePass(false)}
                  onPressOut={() => setConfirmSecurePass(true)}
                />
              }
              selectionColor="#ffb700"
              cursorColor="#ffb700"
              underlineColor="transparent"
              activeUnderlineColor="transparent"
              onChangeText={text => confirmPasswordOnChange(text)}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              style={styles.buttonStyle}
              labelStyle={styles.buttonText}
              buttonColor="#ffb700"
              textColor="#FFF"
              onPress={() => next()}>
              下一步
            </Button>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
export default Registered;
const styles = StyleSheet.create({
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
  parentView: {
    width: windowWidth,
    flex:1
  },
  headerStyle: {
    height: 45,
    backgroundColor: '#faba3c',
  },
  headerText: {
    width: '100%',
    fontSize: 17,
    color: '#FFF',
    lineHeight: 45,
    textAlign: 'center',
  },
  scrollStyle: {
    width: windowWidth,
    height: windowHeight - 50,
  },
  avatarView: {
    height: 180,
    alignItems: 'center',
    paddingTop: 30,
    ...Platform.select({
      ios: {
        paddingTop: 40,
      },
    }),
  },
  avatarStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    // backgroundColor: '#6a1b9a',
    // ...Platform.select({
    //   ios: {
    //     // shadowColor: '#aaa',
    //     shadowOffset: { width: 20, height: 20 },
    //     shadowOpacity: 20,
    //     shadowRadius: 10,
    //   },
    // android: {
    //   elevation: 1
    // },
    // }),
    backgroundColor: '#FDE7B9',
    justifyContent: 'center'
  },
  avatarImage: {
    width: 90,
    height: 90,
    marginTop: 20,
    borderRadius: 100
  },
  avatarText: {
    fontSize: 16,
    color: '#000',
    marginTop: 5,
  },
  inputView: {
    width: windowWidth - 40,
    marginHorizontal: 20,
    marginBottom: 25,
  },
  nameView: {
    height: 80,
  },
  nameText: {
    height: 30,
    fontSize: 15,
    color: '#000',
  },
  inputStyle: {
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 1,
    borderColor: '#ffb700',
    backgroundColor: '#FFF',
  },
  describeView: {
    height: 160
  },
  describeInput: {
    borderWidth: 1,
    padding: 10,
    ...Platform.select({
      ios: {
        height: 130,
        textAlignVertical: 'top',
      },
    }),
  },
  passwordView: {
    height: 80,
  },
  buttonView: {
    height: 100,
    marginBottom: 40,
  },
  buttonStyle: {
    width: '70%',
    height: 45,
    marginTop: 30,
    marginHorizontal: '15%',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 17,
    lineHeight: 24
  },
  container: {
    flex: 1
  }
});


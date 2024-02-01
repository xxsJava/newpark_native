/*
 * @Author: xxs
 * @Date: 2023-10-27 14:27:03
 * @LastEditTime: 2023-10-29 00:04:25
 * @FilePath: \newpark_native\src\views\login\components\Registered\index.tsx
 * @Description: 注册信息
 */

import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity
} from 'react-native';
import {
  Appbar,
  Button,
  TextInput
} from 'react-native-paper';
import { RegisteredScreenProps } from '../../../../config/routs';
import { navigate } from '../../../../config/routs/NavigationContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
// import * as ImagePicker from 'expo-image-picker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Registered = () => {
  const [imghead, setImghead] = useState(false)
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
  const changeHeader = () => {
    launchImageLibrary({
      mediaType: "mixed",
      selectionLimit: 0,// 1为一张，0不限制数量
      includeBase64: true
    }, res => {
      setImghead(res.assets)
    })
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
    await AsyncStorage.setItem('unikname', nameVal);
    await AsyncStorage.setItem('description', describeVal);
    await AsyncStorage.setItem('pass', passwordVal);
    // await AsyncStorage.setItem('schoolId',describeVal);
    navigate('SchoolRoute')
    // var describe = await AsyncStorage.getItem('description');
    // console.log(describe,'描述!!!!!!!!');

  }
  return (
    <View style={styles.parentView}>
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
                  imghead.map((item: any, index: any) => {
                    return (
                      <View key={index}>
                        <Image
                          style={styles.avatarImage}
                          // source={require('../../../../assets/images/3.0x/chat_takephoto.png')}
                          source={{ uri: item.uri }}
                        />
                      </View>
                    )
                  })
                // }
              ):(
              <Image source={require('../../../../assets/images/defaultheader.png')} style={{ width: 100, height: 100, borderRadius: 100 }} />
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
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
  radioT: {
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: '10%',
  },
  test: {
    height: '100%',
    width: '100%',
    borderWidth: 1,
    position: 'absolute',
    zIndex: -1,
  },
  parentView: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#FFF',
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

    ...Platform.select({
      ios: {
        shadowColor: '#aaa',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 3.5,
      },
      android: {
        elevation: 11,
        marginTop: 10,
      },
    }),
  },
  avatarImage: {
    width: 60,
    height: 60,
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
    fontSize: 18,
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
    height: 160,
    // backgroundColor:'green'
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
    flex: 1,
    // marginTop:-70
  }
});


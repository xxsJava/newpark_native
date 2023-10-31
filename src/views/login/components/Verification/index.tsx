/*
 * @Author: xxs
 * @Date: 2023-10-27 09:19:31
 * @LastEditTime: 2023-10-31 11:26:27
 * @FilePath: \newpark_native\src\views\login\components\Verification\index.tsx
 * @Description: desc
 */
import React, {useEffect, useState} from 'react';
import {VerificationScreenProps} from '../../../../config/routs';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button, useToast} from 'native-base';
import Storage from '../../../../utils/AsyncStorageUtils';
import {smsLoginApi} from '../../../../api/sys/lgoin';
import {SmsLoginType} from '../../../../api/sys/lgoin/types';

const Verification: React.FC<VerificationScreenProps> = ({navigation}) => {
  //输入框状态
  const [textString, setTextString] = useState('');

  //获取到本地手机号
  const [localPhone, setLocalPhone] = useState('');

  //按钮状态 start
  const [count, setCount] = useState(60);

  const [isLoad, setLoad] = useState(false);

  const [msgShow, msgHide] = useState(true);

  const [disabled, setDisabled] = useState(true);
  //按钮状态 end

  //send 发送状态
  const [send, setSend] = useState(true);

  const toast = useToast();

  const smsLogin: SmsLoginType = {
    phone: '',
    code: '',
  };

  // useEffect(() => {
  //   getLoaclPhone();
  //   const timer = setInterval(() => {
  //     setCount(count - 1);
  //   }, 1000);

  //   //删除计时器
  //   if (count == 0) {
  //     clearTimeout(timer);
  //     msgHide(false);
  //     setSend(false);
  //   }
  //   return () => clearInterval(timer);
  // }, [count]);
  useEffect(() => {
    getLoaclPhone();
  });

  //验证码显示
  const inputs = () => {
    let inputs = [];
    for (let i = 0; i < 4; i++) {
      inputs.push(
        <Text
          key={i}
          style={[
            styles.text,
            textString.length === i ? styles.focusText : null,
          ]}>
          {textString[i]}
        </Text>,
      );
    }
    return inputs;
  };

  //4位验证码时按钮可点击
  const inpTextChang = async (text: string) => {
    setTextString(text);
    setDisabled(text.length != 4);

    //有4位时验证码自动提交
    if (text.length == 4) {
      setLoad(true);
      console.log('验证码提交-' + text);

      smsLogin.code = text;

      verIfcode();
    }
  };

  //获取手机号
  const getLoaclPhone = async () => {
    const localPhoneStro = await Storage.get('usr-phone');

    smsLogin.phone = localPhoneStro + '';

    console.log('获取本地手机号');

    setLocalPhone(localPhoneStro + '');
  };

  //验证码验证
  const verIfcode = async () => {
    const smsLoginAPI = await smsLoginApi(smsLogin);
    console.log(smsLoginAPI);
    if (smsLoginAPI.code == 1112) {
      setLoad(false);
      setDisabled(true);
      toast.show({
        description: smsLoginAPI.msg,
        placement: 'top',
      });
      return;
    }

    if(smsLoginAPI.data != null){
      toast.show({
        description: '登录成功,开始寻找小妹',
        placement: 'top',
      });
      navigation.navigate('LoginHome');
      return
    }
    navigation.navigate('Registered');
  };

  //按钮下一步
  const next = () => {
    setLoad(true);
  };

  return (
    <SafeAreaView style={styles.contion}>
      <View style={styles.body}>
        <View style={styles.bodyText}>
          <Text style={styles.bodyTexta}>输入验证码</Text>
          <Text style={styles.bodyTextb}>
            已向您的手机 {localPhone} 发送验证码
          </Text>
        </View>
      </View>

      <View style={styles.verify}>
        <View style={styles.verifyText}>{inputs()}</View>

        <TextInput
          style={styles.intextInputStyle}
          maxLength={4}
          autoFocus={true}
          keyboardType="numeric"
          caretHidden={true}
          onChangeText={inpTextChang}
        />

        <View>
          <TouchableOpacity disabled={send} onPress={() => {}}>
            <Text style={styles.verifTextTime}>
              重新发送 {msgShow && <>({count})</>}
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Button
            disabled={disabled}
            isLoading={isLoad}
            isLoadingText="验证中"
            onPress={next}
            style={[styles.buttR, disabled && styles.buttW]}>
            <Text>下一步</Text>
          </Button>
        </View>
        <View />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contion: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    height: '35%',
    position: 'relative',
  },
  bodyText: {
    height: '20%',
    justifyContent: 'center',
    position: 'absolute',
    top: '65%',
    left: '4%',
  },
  bodyTexta: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000',
    paddingBottom: '3%',
  },
  bodyTextb: {
    fontSize: 16,
    color: '#C6C6C6',
  },
  verify: {
    height: '20%',
    // backgroundColor:'#666'
  },
  intextInputStyle: {
    width: 400,
    height: 50,
    fontSize: 25,
    backgroundColor: '#fff',
    color: '#fff',
  },
  text: {
    height: 40,
    width: 40,
    lineHeight: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#BBBBBB',
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },
  focusText: {
    borderColor: '#F8B032',
  },
  verifyText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  verifTextTime: {
    textAlign: 'center',
    fontSize: 18,
  },
  buttR: {
    width: '70%',
    height: '45%',
    borderRadius: 20,
    marginLeft: '15%',
    marginTop: '10%',
    backgroundColor: '#F8B032',
  },
  buttW: {
    opacity: 0.5,
  },
});

export default Verification;

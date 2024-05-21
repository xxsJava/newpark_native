/**
 * 代码描述: 消息聊天页 社交页面
 * 作者:cxr
 * 创建时间:2023/11/13 16:10:11
 */

import { useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Appbar, Avatar, IconButton } from 'react-native-paper';
import { sendMsg,getOnlineStat} from '../../../api/imApi';
import { MsgInfoSendJson,getOnlineStatType} from '../../../api/imApi/type';
import { usrInfo } from '../../../api/sys/usr';
import { DeviceEvent } from '../../../config/listener';
import {
  FILE_PATH,
  FILE_SUFFIX,
  GROUP_MSG_DIR,
  PRITIVE_MSG_DIR,
} from '../../../config/paramStatic';
import { navigate } from '../../../config/routs/NavigationContainer';
import Storage from '../../../utils/AsyncStorageUtils';
import { readFileData } from '../../../utils/FilesUtiles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function MessageList(props: { items: any; receiver: any }) {
  const items = props.items;
  const receiver = props.receiver;
  console.log('receiver---->', receiver);
  console.log('items---->', items);
  const listItems = items.map(
    (item: any, index: React.Key | null | undefined) => {

      console.log('receiver-------->', receiver);
      console.log('data----->', item.sendID + '-' + receiver);
      return (
        <View>
          <View
            key={index}
            style={
              item.sendID === receiver ? styles.chatReceiver : styles.chatMessage
            }>
            <Avatar.Image
              style={[
                styles.avatarImage1,
                item.sendID === receiver ? { display: 'none' } : null,
              ]}
              size={34}
              source={{ uri: item.senderFaceUrl }}
              accessibilityLabel='图片'
              alt="头像"
            />

            <View
              style={[
                styles.textStyle,
                item.sendID === receiver ? styles.textReceiver : null,
              ]}>
              <Text
                allowFontScaling={false}
                style={[
                  styles.chatNameReceiver,
                  receiver == item.senderNickname ? { display: 'none' } : null,
                ]}>
                {item.senderNickname}
              </Text>
              <Text
                allowFontScaling={false}
                style={[
                  styles.messageText,
                  item.sendID === receiver ? styles.messageReceiver : null,
                  // item.textElem.content ? null : { display: 'none' },
                ]}>
                {item.textElem.content}
              </Text>
            </View>
            <Avatar.Image
              style={[
                styles.avatarImage2,
                receiver != item.sendID ? { display: 'none' } : null,
              ]}
              size={34}
              source={item.avatar}
              accessibilityLabel='头像'
            />
          </View>
        </View>
      );
    },
  );
  return <>{listItems}</>;
}

// const URL_SERVER = 'http://192.168.199.133:8080';

const CheckView = (item:any) => {
  // console.log(item.route.params.friendUser,'发信息跳转过来的数据');
  const data = item.route.params;
  const [onlineStat,setOnlineStat] = useState('')
  const inline = async() =>{
    console.log(data.friendUser.userID);
    const params:getOnlineStatType = {
      userIDs:[data.friendUser.userID]
    }
    const data1 = await getOnlineStat(params);
    console.log('获取用户在线状态----->',data1.data[0].status);
    setOnlineStat(data1.data[0].status);
  }
  const route = useRoute();
  const [items, setItems]: any = useState([
    // {name: '小学牛', message: '今天晚上吃点啥？',avatar:require('../../../assets/images/avatar-nan.png'),messageImage:null},
    // {name: 'o泡果奶', message: '我们去吃牛排吧！',avatar:require('../../../assets/images/avatar-nv.png'),messageImage:null},
    // {name: '小学牛', message: '好的，我去给小红打气。',avatar:require('../../../assets/images/avatar-nan.png'),messageImage:null},
    // {name: '小学牛', message: '你们在门口等我吧。',avatar:require('../../../assets/images/avatar-nan.png'),messageImage:null},
    // {name: 'o泡果奶', message: '你人呢？我到门口啦',avatar:require('../../../assets/images/avatar-nv.png'),messageImage:null},
    // {name: '小学牛', message: null,avatar:require('../../../assets/images/avatar-nan.png'),messageImage:require('../../../assets/images/alimom/R-C.jpg')},
  ]);
  const [receiver, setReceiver] = useState('');
  const [value, onChangeText] = React.useState('');
  // const [data,setData]:any = useState([]);
  const [headName, setHeadName] = useState('');
  const [headImg, setHeadImg] = useState('');
  const [msgId, setMsgId] = useState('');
  let timer; //计时器
  useEffect(() => {
    // loadMessage();

    //获取历史记录
      initMsg();
    // 获取用户在线状态
      inline()
    const listener = DeviceEvent.addListener(
      'onRecvNewMessage',
      resp => {
        const timeoutID = setTimeout(() => {
          console.log('--- 数据更新 ---');
          initMsg();
          //清除
          clearTimeout(timeoutID);
        }, 1);
        return () => {
          // 在组件卸载时移除监听
          listener.remove();
        };
      },
      [],
    );
  }, []);

  const initMsg = async () => {
    msgFind();
    // setReceiver(data[0].groupName);
    //1秒后执行callback, 只会执行一次
    const usrId = await Storage.get('uid');
    setReceiver(usrId + '');

  };

  const msgFind = async () => {
    let uId = await Storage.get('uid');
    const param: any = route.params;
    setMsgId(param.id);
    console.log('id--------------------->', param.id);
    if (param.type === 2) {
      console.log('群聊');
      msgGet(FILE_PATH + uId + GROUP_MSG_DIR + '/' + param.id + FILE_SUFFIX);
      return;
    }
    console.log('单聊');
    msgGet(FILE_PATH + uId + PRITIVE_MSG_DIR + '/' + param.id + FILE_SUFFIX);
  };

  const msgGet = (filePath: string) => {
    //查找到文件直接写入
    readFileData(filePath).then(res => {
      const isPGFlag = res[0].stateMsg === 2;
      setItems(res);
      setHeadName(isPGFlag ? res[0].groupName : res[0].senderNickname);
      setHeadImg(isPGFlag ? res[0].faceURL : res[0].senderFaceUrl);
      setTimeout(() => {
        handleContentSizeChange();
      }, 100);
    });
  };

  //发送消息
  const sendMessage = async () => {
    let newItems = JSON.parse(JSON.stringify(items));
    const usrInFo = (await usrInfo()).data;
    const msgJsonData = MsgInfoSendJson;
    msgJsonData.content.content = value;
    msgJsonData.recvID = msgId;
    msgJsonData.sendID = receiver;
    msgJsonData.senderFaceURL = usrInFo.uPath;
    msgJsonData.senderNickname = usrInFo.uNikname;
    msgJsonData.textElem.content = value;
    console.log('userINFO ------->', msgJsonData);
    newItems.push(msgJsonData);
    setItems(newItems);
    const snedMsgJson = await sendMsg(msgJsonData);
    console.log('sendMsg-------------->', snedMsgJson);
    onChangeText('');
    handleContentSizeChange();
  };
  const sendDo = () => {
    onChangeText('');
  };

  const scrollViewRef = useRef<ScrollView>(null);

  const handleContentSizeChange = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: false });
    }
  };
  const [show, setShow] = React.useState(false);
  // 到这里结束

  return (
    <>
      <Appbar.Header style={styles.appbarStyle}>
        <Appbar.BackAction onPress={() => navigate('SocializingStacker')} size={28} />
        <View style={styles.avatarView}>
          <View style={styles.avatarStyle}>
            <Avatar.Image size={38} source={{ uri: headImg }} accessibilityLabel='图片' />
            <View style={styles.stateStyle} />
          </View>
          <View style={{ height:'100%',alignItems:'center',justifyContent:'center'}}>
            {/* 这个是在线的状态 */}
            <View style={onlineStat == 'online' ? styles.onlineDiv:{display:'none'}}>
              <Text style={styles.onlineText}>在线</Text>
            </View>
            {/* 这个是离线的状态 */}
            <View style={onlineStat == 'offline' ? styles.unUnlineDiv : {display:'none'}}>
              <Text style={styles.onlineText}>离线</Text>
            </View>
          </View>
          <Text style={styles.avatarText}>{headName}</Text>
        </View>
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => {
            console.log('三点');
            navigate('ObjCard',data)
          }}
        />
      </Appbar.Header>
      <KeyboardAvoidingView
        behavior="position"
        enabled={true}
        keyboardVerticalOffset={90}
        contentContainerStyle={{ width: 90, height: 90 }}
      >
        <SafeAreaView style={styles.mainContent}>
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={handleContentSizeChange}
            onLayout={handleContentSizeChange}
            style={styles.chatBody}>
            <View style={{ height: 10 }}></View>
            <MessageList items={items} receiver={receiver} />
          </ScrollView>
          <View style={styles.sendColumn}>
            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
              <TouchableOpacity>
                <Image source={require('../../../assets/images/tup/yuyin.png')} style={{ width: 34, height: 34, marginRight: 10 }} ></Image>
              </TouchableOpacity>
              <View style={styles.inputBox}>
                <TextInput
                  style={value == '' ? styles.sendColumnInputnull : styles.sendColumnInput}
                  multiline={true}
                  numberOfLines={1}
                  allowFontScaling={true}
                  onChangeText={text => onChangeText(text)}
                  placeholder={'开始聊天吧'}
                  value={value}
                  onSubmitEditing={sendDo}
                  onFocus={() => { setShow(false) }}
                />
                {/* <IconButton style={styles.inputBoxIcon} icon={require('../../../assets/images/send-icon.png')} onPress={() => sendMessage()}></IconButton> */}
              </View>
              <Image source={require('../../../assets/images/tup/biaoqing-2.png')} style={{ width: 34, height: 34, marginLeft: 6 }}></Image>
              <TouchableOpacity style={value ? { backgroundColor: 'green', padding: 8, borderRadius: 8, paddingHorizontal: 12, marginLeft: 5 } : { display: 'none' }} onPress={() => sendMessage()}>
                <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>发送</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setShow(!show) }} style={value ? { display: 'none' } : { display: 'flex' }}>
                <Image source={require('../../../assets/images/tup/tianjia.png')} style={{ width: 34, height: 34, marginLeft: 6 }}></Image>
              </TouchableOpacity>
            </View>
            <View style={show ? { display: 'flex' } : { display: 'none' }}>
              <View style={styles.controlStrip}>
                <TouchableOpacity onPress={() => console.log('点击相册')} style={styles.zhong}>
                  <IconButton style={styles.controlIcon} icon={require('../../../assets/images/tup/xiangce.png')} size={35}></IconButton>
                  <Text>相册</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('点击拍摄')} style={styles.zhong}>
                  <IconButton style={styles.controlIcon} icon={require('../../../assets/images/tup/paishe.png')} size={35}></IconButton>
                  <Text>拍摄</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('点击文件')} style={styles.zhong}>
                  <IconButton style={styles.controlIcon} icon={require('../../../assets/images/tup/wenjian.png')} size={35}></IconButton>
                  <Text>文件</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('点击名片')} style={styles.zhong}>
                  <IconButton style={styles.controlIcon} icon={require('../../../assets/images/tup/mp.png')} size={35}></IconButton>
                  <Text>名片</Text>
                </TouchableOpacity>
              </View>
              <View style={{ padding: 20, justifyContent: 'center', alignItems: 'flex-start', paddingBottom: 0 }}>
                <TouchableOpacity onPress={() => console.log('点击位置')} style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                  <IconButton style={styles.controlIcon} icon={require('../../../assets/images/tup/weizhi.png')} size={35}></IconButton>
                  <Text style={{ textAlign: 'center' }}>位置</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ KeyboardAvoidingView>
    </>
  )
}
export default CheckView;

const styles = StyleSheet.create({
  mainContent: {
    width: windowWidth,
    position: 'relative',
    backgroundColor: '#FFF',
    ...Platform.select({
      ios: {
        height: windowHeight - 80,
      },
      android: {
        height: windowHeight * 0.95,
      },
    }),

  },
  chatBody: {
    flex: 1,
    padding: 10,
    backgroundColor: '#d8e4e8',
    marginTop: 10,
    position: 'relative'
  },
  chatMessage: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textStyle: {
    maxlength: 20,
    position: 'relative',
    backgroundColor: '#efebfa',
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 25,
    marginTop: 8,
    ...Platform.select({
      ios: {
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        padding: 8,
        elevation: 2,
      },
    }),
  },
  chatReceiver: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textReceiver: {
    color: '#FFF',
    marginLeft: 'auto',
    backgroundColor: '#faba3c',
  },
  avatarImage1: {
    marginRight: 10,
    marginTop: -10,
  },
  avatarImage2: {
    marginLeft: 10,
    marginTop: -10,
  },
  messageText: {
    fontSize: 15,
    color: '#000',
  },
  messageImage: {
    width: 220,
    height: 150,
    borderRadius: 15,
  },
  messageReceiver: {
    color: '#FFF',
  },
  chatName: {
    fontSize: 12,
    position: 'absolute',
    top: -15,
    fontWeight: 'bold',
  },

  chatNameReceiver: {
    fontSize: 12,
    width: 100,
    position: 'absolute',
    top: -20,
    color: '#666',
    marginLeft: 'auto'
  },
  avatarView: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: '100%',
    alignItems: 'center'
  },
  avatarStyle: {
    position: 'relative'
  },
  stateStyle: {
    width: 12,
    height: 12,
    top: 22,
    right: -3,
    borderRadius: 6,
    backgroundColor: '#26c78c',
    position: 'absolute',
  },
  appbarStyle: {
    borderWidth: 0,
    backgroundColor: '#fff',
    zIndex: 999,
    height: 43,
    marginTop:6
  },
  avatarText: {
    color: '#000',
    lineHeight: 34,
    marginLeft: 10,
  },
  sendColumn: {
    // height: 230,
    // flexDirection:'row',
    marginTop: 13,
    paddingBottom: 15,
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: '#F1F2F6',
    ...Platform.select({
      ios: {
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 3.5,
      },
      android: {
        elevation: 10,
      },
    }),
    position: 'absolute',
    bottom: -10,
    left: 0,
    width: windowWidth,

  },
  inputBox: {
    position: 'relative',
    flex: 3
  },
  sendColumnInput: {
    width: '100%',
    // height:40,
    // borderRadius: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  sendColumnInputnull: {
    width: '100%',
    height: 40,
    // borderRadius: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  inputBoxIcon: {
    position: 'absolute',
    top: -6,
    right: 5,
    zIndex: 10,
  },
  controlStrip: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    backgroundColor: '#F1F2F6'
  },
  controlIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',

  },
  zhong: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  onlineText: {
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 11,
    color: '#fff',
    fontWeight: 'bold'
  },
  onlineDiv: {
    height: 23,
    width: 38,
    backgroundColor: 'green',
    marginLeft: 8,
    borderRadius:3,
    marginTop:15
  },
  unUnlineDiv:{
    height: 23,
    width: 38,
    backgroundColor: 'red',
    marginLeft: 8,
    borderRadius:3,
    marginTop:15
  }
});


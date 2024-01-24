import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getGroupsInfo } from '../../../api/IMAPI';
import { DeviceEvent } from '../../../config/listener';
import {
  FILE_PATH,
  GROUP_MSG_DIR,
  INDEX_MSG_DIR,
  PRITIVE_MSG_DIR,
} from '../../../config/paramStatic';
import { navigate } from '../../../config/routs/NavigationContainer';
import { isFile, readFileData, writeFileData } from '../../../utils/FilesUtiles';

const windowWidth = Dimensions.get('window').width;
type DataItem = any;
const ListIndex: React.FC = () => {
  const [data, setData]: any = useState([]);
  const [newObj, setNewObj]: any = useState({});
  const [newArr, setNewArr]: any = useState([]);

  useEffect(() => {
    //显示历史记录
    initMsg();
    const listener = DeviceEvent.addListener('onRecvNewMessage', async resp => {
      setNewObj({});
      setNewArr([]);
      const msg = Platform.OS === 'ios'?resp.message:JSON.parse(resp.message);
      console.log('消息页面接收消息1------>', msg);
      //群组
      if (msg.groupID != undefined) {
        console.log('获取圈ID------>', msg.groupID);
        let stringArray: string[] = [];
        stringArray.push(msg.groupID);
        console.log('群组数据1----->', stringArray);
        const groupInfo = await getGroupsInfo(stringArray);
        console.log('群组消息数据----->', groupInfo.data.groupInfos);
        // setData(groupInfo.data.groupInfos);
        Object.assign(newObj, msg, groupInfo.data.groupInfos[0]);
        //设置群组状态
        newObj.stateMsg = 2;
        newArr.push(newObj);
        //数据合并
        // newArr = data.concat(newArr)
        console.log(newArr);
        const fileGroupPath = GROUP_MSG_DIR + '/' + msg.groupID + '.json';
        jsonDataRead(fileGroupPath, newArr);
        timeOutInitMsg();
        return;
      }

      //单聊
      const filePrivatePath = PRITIVE_MSG_DIR + '/' + msg.sendID + '.json';
      console.log('执行单聊');
      //设置单聊状态
      msg.stateMsg = 1;
      let newMsgArr = [];
      newMsgArr.push(msg);
      jsonDataRead(filePrivatePath, newMsgArr);
      timeOutInitMsg();
    });

    return () => {
      // 在组件卸载时移除监听
      listener.remove();
    };
  }, []);

  /**
   * 数据文件写入
   * @param filePath 文件地址
   * @param data 数据
   * @returns
   */
  const jsonDataRead = async (filePath: string, data?: any) => {
    console.log('——----------------->执行数据写入', data);
    //写入MSG数据
    if (await isFile(filePath)) {
      //查找到文件直接写入
      readFileData(filePath).then(res => {
        console.log('读取到数据----->', res);
        res.push(data[0]);
        writeFileData(filePath, JSON.stringify(res));
      });
      return;
    }
    console.log('----------->创建文件写入数据');
    writeFileData(filePath, JSON.stringify(data));
  };

  const initMsg = () => {
    console.log('文件初始化！！！',INDEX_MSG_DIR);
    let newArr: any[] = [];
    //查找到文件直接写入
    readFileData(INDEX_MSG_DIR).then(res => {
      res.data.map(async (key: any) => {
        let path:string[] = key.path.split('/');
        if (await isFile(FILE_PATH+'/'+path[path.length-2]+'/'+path[path.length-1])) {
          readFileData(FILE_PATH+'/'+path[path.length-2]+'/'+path[path.length-1]).then(res1 => {
            console.log('文件读取--->',res1);
            newArr.push(res1[res1.length - 1]);
          });
        }
      });
    });
    setData(newArr);
  };

  const timeOutInitMsg = () => {
    //1秒后执行callback, 只会执行一次
    const timeoutID = setTimeout(() => {
      console.log('--- 数据更新 ---');
      initMsg();
      //清除
      clearTimeout(timeoutID);
    }, 500);
  };

  const renderItem = ({item}: {item: DataItem}) => (
    <TouchableOpacity
      onPress={() =>
        navigate('CheckRoute', {
          id: item.stateMsg === 2 ? item.groupID : item.sendID,
          type: item.stateMsg,
        })
      }
      style={[
        styles.listItem,
        {
          borderLeftColor:
            item.groupID != undefined
              ? '#FABA3C'
              : item.recvID === undefined
              ? '#6A1B9A'
              : '#26C78C',
        },
      ]}>
      <View style={styles.itemLeft}>
        <View style={styles.avatarStyle}>
          <Image
            style={styles.avatar}
            source={{
              uri: item.stateMsg === 2 ? item.faceURL : item.senderFaceUrl,
            }}
          />
        </View>
      </View>
      <View style={styles.itemRight}>
        <Text allowFontScaling={false} style={styles.itemName}>
          {item.stateMsg === 2 ? item.groupName : item.senderNickname}
        </Text>
        <View style={styles.itemLabelStyle}>
          <Text allowFontScaling={false} style={styles.labelText}>
            {item.stateMsg === 2 ? item.senderNickname + ':' : ''}
            {item.textElem.content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, marginTop: 10}}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default ListIndex;

const styles = StyleSheet.create({
  indexBarStyle: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    right: 5,
    ...Platform.select({
      ios: {
        top: 0,
      },
      android: {
        top: -30,
      },
    }),
  },
  itemBar: {
    ...Platform.select({
      ios: {
        paddingBottom: 2,
      },
      android: {
        padding: 0,
      },
    }),
  },
  listItem: {
    width: windowWidth,
    height: 90,
    marginBottom: 1,
    borderLeftWidth: 8,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemLeft: {
    width: 90,
    height: 90,
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 5,
  },
  itemRight: {
    width: windowWidth - 90,
    height: 90,
    paddingLeft: 5,
    paddingTop: 25,
  },
  avatarStyle: {
    width: 60,
    height: 60,
    borderColor: '#999',
    // borderWidth: 1,
    borderRadius: 30,
  },
  itemName: {
    color: '#000',
  },
  itemLabelStyle: {
    height: 40,
    marginTop: -2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  itemLabelBg: {
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  labelText: {
    fontSize: 12,
    color: '#999',
    lineHeight: 15,
  },
  labelIcon: {},
  avatar: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
  },
});

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
import { DeviceEvent } from '../../../config/listener';
import { FILE_PATH, FROMA_DATE_DIR, INDEX_MSG_DIR } from '../../../config/paramStatic';
import { navigate } from '../../../config/routs/NavigationContainer';
import StylesALL from '../../../styles';
import Colors from '../../../styles/Color';
import Storage from '../../../utils/AsyncStorageUtils';
import { isFile, readFileData } from '../../../utils/FilesUtiles';

const windowWidth = Dimensions.get('window').width;
type DataItem = any;
const ListIndex: React.FC = () => {
  const [data, setData]: any = useState([]);

  useEffect(() => {
    //显示历史记录
    initMsg();
    const listener = DeviceEvent.addListener('onRecvNewMessage', async resp => {
      const msg =
        Platform.OS === 'ios' ? resp.message : JSON.parse(resp.message);
      console.log('消息页面接收消息1------>', msg);
      timeOutInitMsg();
    });
    return () => {
      // 在组件卸载时移除监听
      listener.remove();
    };
  }, []);

  const initMsg = async () => {
    let newArr: any[] = [];
    let uId = await Storage.get('uid');
    console.log('文件初始化---------->',FILE_PATH + uId + INDEX_MSG_DIR);
    //查找到文件读取
    readFileData(FILE_PATH + uId +INDEX_MSG_DIR).then(res => {
      res.data.map(async (key: any, index: number) => {
        let path: string[] = key.path.split('/');
        let pathDir = FILE_PATH + uId+'/'+ FROMA_DATE_DIR +'/' +path[path.length - 2] +'/' +path[path.length - 1];
        // console.log('数据文件地址------->',pathDir);
        if (await isFile(pathDir)) {
          readFileData(pathDir).then(res1 => {
            console.log('文件读取--->',res1);
            for (let i = res1.length - 1; i >= 0; i--) {
              console.log(uId + '---' + res1[i].sendID);
              if (Number(uId) === Number(res1[i].sendID)) {
                continue;
              }
              console.log('消息数据---------->',res1[i]);
              newArr.push(res1[i]);
              setData(newArr);
              return;
            }
          });
        }
      });
    });
    
  };

  const timeOutInitMsg = () => {
    //1秒后执行callback, 只会执行一次
    const timeoutID = setTimeout(() => {
      console.log('--- 数据更新 ---');
      initMsg();
      //清除
      clearTimeout(timeoutID);
    }, 1);
  };

  const renderItem = ({item}: {item: DataItem}) => 
    (
    
    <TouchableOpacity
      onPress={() =>
       navigate('CheckRoute', 
         {
          id: item.stateMsg === 2 ? item.groupID : item.sendID,
          type: item.stateMsg,
        }
        )
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
        <View style={styles.corner}>
          <Text style={styles.cornerText}>
            1
          </Text>
        </View>
          <Image
            style={styles.avatar}
            source={{
              //https://new-by-video.oss-cn-beijing.aliyuncs.com/static/group.png
              uri: item.stateMsg === 2 ? item.faceURL==''?'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP-C.jpg':item.faceURL : item.senderFaceUrl,
            }}
            accessibilityLabel='图片'
            alt="头像"
          />
        </View>
      </View>
      <View style={styles.itemRight}>
        <Text allowFontScaling={false} style={[Colors.fBlack,StylesALL.fWeBold]}>
          {item.stateMsg === 2 ? item.groupName : item.senderNickname}
        </Text>
        <View style={styles.itemLabelStyle}>
          <Text allowFontScaling={false} style={styles.labelText}>
            {item.stateMsg === 2 ? item.senderNickname + ':' : ''}
            {/* {item.textElem.content} */}
          </Text>
        </View>
        
        <View style={styles.timeFormer}>
          <Text style={Colors.f99}>
            1分钟前
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, marginTop: 10}}>
      <FlatList 
        keyExtractor={(item) => item.recvID} 
        data={data} 
        renderItem={renderItem} 
        getItemLayout={(data, index) => (
          {length: 1000, offset: 1000 * index, index}
        )}
      />
    </View>
  );
};

export default ListIndex;

const styles = StyleSheet.create({
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
    paddingTop: 20,
  },
  avatarStyle: {
    width: 60,
    height: 60,
    borderColor: '#999',
    borderRadius: 30,
  },
  itemLabelStyle: {
    height: 40,
    marginTop: -2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  labelText: {
    fontSize: 12,
    color: '#999',
    lineHeight: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
  },
  corner:{
    width:15,
    height:15,
    backgroundColor:'red',
    position:'absolute',
    right:0,  
    zIndex:10,
    borderRadius:50
  },
  cornerText:{
    fontSize:12,
    color:'#fff',
    textAlign:'center',
    lineHeight:15,
    fontWeight: 'bold'
  },
  timeFormer:{
    position:'absolute',
    right:10,
    bottom:15
  }
});

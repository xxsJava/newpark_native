
import React, {useRef} from 'react';
import {
  View,
  Text,
  Platform,
  Dimensions,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  DeviceEventEmitter
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradinet from 'react-native-linear-gradient';
import {navigate} from '../../../config/routs/NavigationContainer';
import { getGroupsInfo } from '../../../api/IMAPI';
import BellView from'../../../components/Bell'

const windowWidth = Dimensions.get('window').width;
type DataItem = any;
type DataSection = { data: DataItem[]};
type dataItem = {name:string,labelText:string,color:number,lableType:number,icon:boolean}

const data:any = [
  // {
  //   data: [
  //     {
  //       name: '牛友名称',
  //       labelText: '牛友',
  //       color: 1,
  //       lableType: 1,
  //       icon: false,
  //     },
  //     {
  //       name: '牛友名称',
  //       labelText: '牛友',
  //       color: 1,
  //       lableType: 1,
  //       icon: false,
  //     },
  //   ],
  // },
  // {
  //   data: [
  //     {
  //       name: '聊天室名称',
  //       labelText: '123',
  //       color: 2,
  //       lableType: 1,
  //       icon: true,
  //     },
  //     {
  //       name: '聊天室名称',
  //       labelText: '123',
  //       color: 2,
  //       lableType: 1,
  //       icon: true,
  //     },
  //   ],
  // }
];


const ListIndex: React.FC = () => {

  const sectionListRef = useRef<SectionList<DataItem, DataSection> | null>(
    null,
  );

  // {"attachedInfo": "{\"groupHasReadInfo\":{\"hasReadCount\":0,\"groupMemberCount\":4},\"isPrivateChat\":false,\"burnDuration\":0,\"hasReadTime\":0,\"notSenderNotificationPush\":false,\"isEncryption\":false,\"inEncryptStatus\":false}", "attachedInfoElem": {"burnDuration": 0, "groupHasReadInfo": {"hasReadCount": 0, "unreadCount": 0}, "hasReadTime": 0, "inEncryptStatus": false, "isEncryption": false, "isPrivateChat": false, "notSenderNotificationPush": false}, "clientMsgID": "8679377145cd9e99cc28c799145edd9d", "contentType": 101, "createTime": 1704445634073, "groupID": "1944979969", "isExternalExtensions": false, "isReact": false, "isRead": false, "msgFrom": 100, "platformID": 0, "sendID": "5175689259", "sendTime": 1704445634073, "senderFaceUrl": "http://124.70.199.125:10002/object/5175689259/1.jpg", "senderNickname": "xxs18", "seq": 106, "serverMsgID": "ee4403b0f44021faaa1e79998d73cf31", "sessionType": 3, "status": 2, "textElem": {"content": "1"}}
  DeviceEventEmitter.addListener('onRecvNewMessage', async resp => {
    const msg = JSON.parse(resp.message);
    console.log("消息页面接收消息1------>",msg)
    console.log("获取圈ID------>",msg.groupID)
    // const dataMsg:dataItem = {
    //   name: '',
    //   labelText: '',
    //   color: 0,
    //   lableType: 0,
    //   icon: false
    // }
    let stringArray: string[] = ["1944979969"];
    console.log("群组数据1----->",stringArray)
    const groupInfo = await getGroupsInfo(stringArray,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJvcGVuSU0xMjM0NTYiLCJQbGF0Zm9ybUlEIjoyLCJleHAiOjE3MTIyMjMwMzcsIm5iZiI6MTcwNDQ0NjczNywiaWF0IjoxNzA0NDQ3MDM3fQ.XhAqxP6oZOOgPw-_33aRgWCYs61nkcW8H1_lEgljT9c");
    // data.push(msg)
    console.log('群组消息数据----->',groupInfo)
  });

  const renderItem = ({item}: {item: DataItem}) => (
    <TouchableOpacity
      onPress={() => navigate('CheckRoute')}
      style={[
        styles.listItem,
        {
          borderLeftColor:
            item.color === 1
              ? '#FABA3C'
              : item.color === 2
              ? '#6A1B9A'
              : '#26C78C',
        },
      ]}>
      <View style={styles.itemLeft}>
        <View style={styles.avatarStyle} />
      </View>
      <View style={styles.itemRight}>
        <Text allowFontScaling={false} style={styles.itemName}>{item.name}</Text>
        <View style={styles.itemLabelStyle}>
          <LinearGradinet
            colors={
              item.lableType === 1
                ? ['rgba(233,231,255,0.9)', 'rgba(233,231,255,0)']
                : ['rgba(251,199,99,0.9)', 'rgba(251,199,99,0)']
            }
            start={{x: 0, y: 0}}
            end={item.lableType === 1 ? {x: 0, y: 1} : {x: 1, y: 0}}
            style={styles.itemLabelBg}>
            {item.icon && (
              <Feather size={14} name="user" style={styles.labelIcon} />
            )}
            <Text allowFontScaling={false} style={styles.labelText}>{item.labelText}</Text>
          </LinearGradinet>
        </View>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <View style={{flex: 1, marginTop: 10}}>
     <SectionList
        ref={sectionListRef}
        sections={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          // console.log(item)
          return index.toString();
        }}
        stickySectionHeadersEnabled={true}
      />
      {/* <BellView isMsg={true}></BellView> */}
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
    borderWidth: 1,
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
    color: '#000',
    lineHeight: 15,
    marginLeft: 4,
  },
  labelIcon: {},
});

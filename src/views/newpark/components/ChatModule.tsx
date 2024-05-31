import * as React from 'react';

import { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { getChatRoomFindALL } from '../../../api/sys/newpark';
import { Pages } from '../../../api/sys/newpark/types';
import { navigate } from '../../../config/routs/NavigationContainer';
import StylesALL from '../../../styles';
import Colors from '../../../styles/Color';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const glideData = [{
  index: 1,
  title: '某秘密聊天室1',
  num: '123',
  path: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/mr.jpg'
},
{
  index: 2,
  title: '某秘密聊天室2',
  num: '1234',
  path: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/mr.jpg'
}
]

const ChatModule = () => {

  const [isPlay,setisPlay] = React.useState(false);
  const [tabVal, setTab] = React.useState('tab1');
  const [chatRoomData,setChatRooms] = useState([{}]);

  const chatRoomFindALLs = async () => {

    const pages:Pages = {
      pageNo: 1,
      pageSize: 8
    }
    const chatRooms = await getChatRoomFindALL(pages);
    setChatRooms(chatRooms.data);
  }
  
  useEffect(() => {
    chatRoomFindALLs();
  }, []);
  
  useEffect(() => {
    console.log('热门聊天室分类--------->', chatRoomData);
  }, [chatRoomData]);

  // 聊天室切换
  const handleTabPress = (tab: string) => {
    console.log('Tab状态' + tab);
    setTab(tab);
  };
  const [listRes,setlistRes] = React.useState([]);
  return (
    <View style={[styles.scrollStyle,Colors.bGrey]}>
      
      <View style={styles.optionStyle}>
        <View style={styles.optionList}>
          {chatRoomData.map((item:any) => {
            return (
              <TouchableOpacity style={styles.optionItem} key={item.chatId} onPress={()=>navigate('ChatHome',item)} >
                <Image source={{uri:item.chatImg}} style={styles.iconList} accessibilityLabel='图片' alt="网络问题"></Image>
                <Text allowFontScaling={false} style={styles.optionText}>
                  <Trans>{item.chatTitle}</Trans>
                </Text>
              </TouchableOpacity>
            )
          })}
          </View>
      </View>
      <View style={styles.glideStyle}>
      </View>
      <View style={styles.glideStyle}>
        <View style={styles.glideHead}>
          <View style={styles.glideHeadList}>
            <Text allowFontScaling={false} style={styles.glideHeadTitle}>
              <Trans>newPatkTab2.tableTitle</Trans>
            </Text>
          </View>
          <View style={styles.glideHeadRight}>
            <TouchableOpacity onPress={() => handleTabPress('tab1')}>
              <Text allowFontScaling={false}
                style={
                  tabVal === 'tab2'
                    ? styles.headRightText1
                    : styles.headRightText2
                }>
                <Trans>newPatkTab2.tab1</Trans>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTabPress('tab2')}>
              <Text allowFontScaling={false}
                style={
                  tabVal === 'tab1'
                    ? styles.headRightText1
                    : styles.headRightText2
                }
              >
                <Trans>newPatkTab2.tab2</Trans>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.glideScroll}>
          {glideData.map(item => {
            return (
              <View style={styles.glideScrollItem} key={item.index}>
                <View style={styles.glideItemLeft}>
                  <View style={styles.glidePortrait}>
                    <Image style={StylesALL.imgSize} borderRadius={50} source={{uri:item.path}} />
                  </View>
                </View>
                <View style={styles.glideItemMiddle}>
                  <Text allowFontScaling={false} style={styles.glideItemText1}>{item.title}</Text>
                  <View style={styles.glideItemTextBg}>
                    <Image style={styles.glideItemIcon} source={require('../../../assets/images/tabs_4_on.png')} accessibilityLabel='图片' alt="头像"></Image>
                    <Text allowFontScaling={false} style={styles.glideItemText2}>{item.num}</Text>
                  </View>
                </View>
                <View style={styles.glideItemRight}>
                  {/* onPress={() => navigate('')} */}
                  <TouchableOpacity style={styles.glideButton} >
                    <Text allowFontScaling={false} style={styles.buttonText}>前往聊天室</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}
             <TouchableOpacity style={{width:90,height:90,backgroundColor:'pink'}} onPress={() => navigate('LoginStacker')}>
            
            </TouchableOpacity>
        </ScrollView>
         
      </View>
    </View>
  )
};
export default ChatModule;
const styles = StyleSheet.create({
  scrollStyle: {
    width: windowWidth,
    height: windowHeight - 80,
    ...Platform.select({
      ios: {
        paddingHorizontal: 17,
      },
      android: {
        paddingHorizontal: 16,
      },
    }),
  },
  topStyle: {
    width: windowWidth,
    height: 75,
    position: 'relative',
    zIndex: -10
  },
  topImg: {
    top: 12,
    left: 15,
    position: 'absolute',
    zIndex: 10
  },
  inputStyle: {
    height: 40,
    lineHeight: 20,
    borderWidth: 0,
    color: '#000',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    textAlign: 'center',
    ...Platform.select({
      ios: {
        width: windowWidth - 36,
      },
      android: {
        width: windowWidth - 32,
      },
    }),
  },
  optionStyle: {
    width:'100%',
    height: 160,

  },
  optionList: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap:'wrap',
    marginTop:20,
    backgroundColor:'#fff',
    paddingTop:15
  },
  optionItem: {
    width:'25%',
    // flex: 1,
    height: 60,
    color: '#000',
    alignItems: 'center',
    marginBottom: 20
  },
  iconList: {
    width: 35,
    height: 35
  },
  optionText: {
    color: '#000',
    fontSize: 13,
    marginTop: 8
  },
  glideStyle: {
    marginTop: 20,
    ...Platform.select({
      ios: {
        width: windowWidth - 36,
      },
      android: {
        width: windowWidth - 32,
      },
    }),
  },
  glideHead: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10
  },
  glideHeadList: {
    flex: 1,
    paddingLeft: 5,
  },
  glideHeadRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  glideHeadTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600'
  },
  headRightText1: {
    color: '#000'
  },
  headRightText2: {
    color: '#FABA3C'
  },
  glideScroll: {
    height: windowHeight,
    backgroundColor:'#FFF'
  },
  glideScrollItem: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-around',
    ...Platform.select({
      ios: {
        width: windowWidth - 36,
      },
      android: {
        width: windowWidth - 32,
      },
    }),
  },
  glideItemLeft: {
    width: 70,
    height: 90,
    paddingTop: 15,
    alignItems: 'center',
  },
  glideItemMiddle: {
    width: 180,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10
  },
  glideItemRight: {
    width: 120,
    height: 90,
    paddingRight: 15,
    paddingTop: 29
  },
  glidePortrait: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  glideButton: {
    width: 105,
    height: 32,
    backgroundColor: '#FABA3C'
  },
  buttonText: {
    color: '#FFF',
    lineHeight: 32,
    textAlign: 'center',
  },
  glideItemText1: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5
  },
  glideItemText2: {
    color: '#FFF',
    paddingHorizontal: 5,
    lineHeight: 20,

  },
  glideItemTextBg: {
    width: 70,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#F1F1F1',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  glideItemIcon: {
    width: 15,
    height: 15,
    marginTop: 2,
    marginLeft: 5
  }
})
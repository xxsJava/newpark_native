/*
 * @Author: xxs
 * @Date: 2023-10-07 17:44:34
 * @LastEditTime: 2024-05-27 09:24:03
 * @FilePath: \newpark_native\src\views\socializing\SocializingView.tsx
 * @Description: desc
 */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Image, Text, View } from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { navigate } from '../../config/routs/NavigationContainer';
import ContactsModul from './components/ContactsModul';
import MessageModule from './components/MessageModule';
import ListIndex from './components/ContactsModul';
const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const headList = [
  {
    title:'添加好友',
    path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/tianjiahaoyou.png',
    rout:'AddPeople'
  },
  {
    title:'加入社区',
    path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/xieshangyizheng.png',
    rout:'Addcomm'
  },
  {
    title:'创建社区',
    path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/wanle.png',
    rout:'CreateCommunityRoute'
  },
  {
    title:'好友申请',
    path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/saoyisao.png',
    rout:'Apply'
  }
]

const Tab = createMaterialTopTabNavigator();

const SocializingView = () => {

  const [more, setMore] = useState(false)

  const handleMorePress = (more: boolean) => {
    setMore(!more)
  }

  return (
    <SafeAreaView style={styles.safeStyle}>
      <>
          <Tab.Navigator
            screenOptions={{
              lazy: true,
              tabBarPressColor: '#000',
              tabBarStyle: styles.tabParent,
              animationEnabled: true,
              tabBarIndicatorStyle: {
                width: 0
              },
              tabBarLabelStyle: { fontSize: 15, fontWeight: '600' }
            }}>
            <Tab.Screen  name="msg" component={MessageModule} options={{
              tabBarLabel: ({ focused }) => (
                <><View style={focused ? styles.tabBg2 : null} /><Text style={focused ? styles.fontTrue : styles.fontFalse}>消息</Text></>
              )
            }} />
            <Tab.Screen name="lsr" component={ListIndex} options={{
              tabBarLabel: ({ focused }) => (
                <><View style={focused ? styles.tabBg2 : null} /><Text style={focused ? styles.fontTrue : styles.fontFalse}>联系人</Text></>
              )
            }}/>

          </Tab.Navigator>
          <View style={styles.tabMore}>
          <TouchableOpacity onPress={() => handleMorePress(more)}>
            <Feather name="plus" size={32} color="#000000" />
          </TouchableOpacity>
        </View>
          </>
    

      <View style={[styles.moreModule, more ? null : { display: 'none' }]}>

        {
          headList.map(item=>{
            return(
              <TouchableOpacity style={styles.itemMore} activeOpacity={0.5} onPress={() => navigate(item.rout)}>
          <View style={styles.itemImageView}>
            <Image style={styles.itemImage} source={{uri:item.path}} accessibilityLabel='图片' alt="头像"></Image>
          </View>
          <View style={styles.itemTextView}>
            <Text allowFontScaling={false} style={styles.itemText}>{item.title}</Text>
          </View>
        </TouchableOpacity>
            )
          })
        }
      </View><TouchableOpacity style={[styles.maskLayer, more ? {} : { display: 'none' }]} onPress={() => handleMorePress(more)}>
      </TouchableOpacity>

    </SafeAreaView>
    
  )
}
export default SocializingView;


const styles = StyleSheet.create({

  safeStyle: {
    width: windowWidth,
    height: windowHeight - 40,
    position: 'relative',
    backgroundColor: '#FFFFFF',
  },
  tabMore: {
    marginTop: 16,
    position:'absolute',
    right:20
  },
  moreModule: {
    top: Platform.OS === 'ios' ? 110 : 50,
    right: 18,
    width: 160,
    height: 165,
    paddingVertical: 5,
    paddingHorizontal: 7,
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 10,
    zIndex: 99,
    // 阴影的配置
    elevation: 6, // 适配android的
    shadowOffset: { width: 0, height: 0 }, // 以下4项适配ios
    shadowColor: 'black',
    shadowOpacity: .3,
    shadowRadius: 2
  },
  itemMore: {
    height: 30,
    marginBottom: 12,
    marginHorizontal: 8,
    paddingBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#bbb',
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  itemImageView: {
    width: '40%',
    alignItems: 'center',
    paddingTop: 8,
  },
  itemImage: {
    width: 22,
    height: 22
  },
  itemTextView: {
    width: '60%'
  },
  itemText: {
    fontSize: 14,
    color: '#000',
    lineHeight: 30,
    textAlign: 'center'

  },
  tabBg2: {
    width: 18,
    height: 18,
    top: -4,
    left:-5,
    borderRadius: 9,
    position: 'absolute',
    borderColor: '#DCDCDC',
    backgroundColor: '#FABA3C',
    zIndex: -10,
    opacity:0.7
  },
  maskLayer: {
    width: windowWidth,
    height: windowHeight,
    top: 0,
    position: 'absolute',
    zIndex: 80
  },
  hytb: {
    position: 'absolute',
    fontSize: 12,
    backgroundColor: 'red',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 15,
    fontWeight: 'bold',
    borderRadius: 10,
    paddingTop: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 1
  },
  tabParent:{
      backgroundColor: '',
      width:'60%',
      height:60
  },
  fontTrue:{
    fontSize: 19 ,color:'#000',width:100,fontWeight:'600',lineHeight:21
  },
  fontFalse:{
    fontSize: 15 ,color:'#999',fontWeight:'600'
  }
});
function tabClick(porps: any, string: any) {
  throw new Error('Function not implemented.');
}


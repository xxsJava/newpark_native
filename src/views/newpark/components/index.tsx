import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ChatModule from './ChatModule';
import CommunityModule from './CommunityModule';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Tab = createMaterialTopTabNavigator();
const TabNav = () => {
  const [tabVal, setTab] = useState('tab1');
  const handleTabPress = (tab: string) => {
    console.log('Tab状态' + tab);
    setTab(tab);
  };
  const [chat,setchat] = useState('chat1');
  const handleTabaChat = (tab:string) => {
    setchat(tab);
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
            <Tab.Screen  name="msg" component={CommunityModule} options={{
              tabBarLabel: ({ focused }) => (
                <><View style={focused ? styles.tabBg2 : null} /><Text style={focused ? styles.fontTrue : styles.fontFalse}>社区</Text></>
              )
            }} />
            <Tab.Screen name="lsr" component={ChatModule} options={{
              tabBarLabel: ({ focused }) => (
                <><View style={focused ? styles.tabBg2 : null} /><Text style={focused ? styles.fontTrue : styles.fontFalse}>聊天室</Text></>
              )
            }}/>

          </Tab.Navigator>
          <View style={styles.tabMore}>
            <Image source={require('../../../assets/images/search_in_circle.png')} accessibilityLabel='图片' alt="网络不佳"></Image>
          </View>
          </>
    </SafeAreaView>
  )
}
export default TabNav;

const styles = StyleSheet.create({
  bell: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    zIndex: 999
  },
  safeStyle: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#FFFFFF',
    zIndex: -10
  },
  headView: {
    width: windowWidth,
    height: 80,
    backgroundColor: '#FFFFFF',
  },
  headGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabGrid: {
    flex: 1,
    width: windowWidth,
    height: 68,
    marginTop: 20,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tabItem: {
    width: 100,
    height: 50,
    alignItems: 'center',
    zIndex: 10,
  },
  tabMore: {
    flex: 1,
    marginTop: 20,
    position:'absolute',
    right:20
  },
  tabBg: {
    width: 18,
    height: 18,
    top: -2,
    right: 27,
    borderRadius: 9,
    // borderWidth: 1.5,
    position: 'absolute',
    borderColor: '#DCDCDC',
    backgroundColor: '#FABA3C',
    zIndex: -10,
  },
  tabBg1: {
    width: 18,
    height: 18,
    top: -2,
    right: 7,
    borderRadius: 9,
    position: 'absolute',
    borderColor: '#DCDCDC',
    backgroundColor: '#FABA3C',
    zIndex: -10,
  },
  selectedText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000000',
  },
  selectedText1: {
    color: '#808080',
  },
  scrollShow: {
    display: 'none'
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
  }
})
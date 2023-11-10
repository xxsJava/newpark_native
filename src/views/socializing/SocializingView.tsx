/*
 * @Author: xxs
 * @Date: 2023-10-07 17:44:34
 * @LastEditTime: 2023-10-08 00:46:23
 * @FilePath: \newpark_native\src\views\socializing\SocializingView.tsx
 * @Description: desc
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component,useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Text, View} from 'react-native-animatable';
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {navigate} from '../../config/routs/NavigationContainer';
import MessageModule from './components/MessageModule'
import ContactsModul from './components/ContactsModul'

const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SocializingView = () => {

  const [tabVal, setTab] = useState('tab1');
    const handleTabPress = (tab: string) => {
      console.log('Tab状态' + tab);
      setTab(tab);
    };

  return(
    <SafeAreaView style={styles.safeStyle}>
        <View style={styles.headView}>
          <View style={styles.headGrid}>
            <View style={styles.tabGrid}>
              <View style={styles.tabItem}>
                <View style={tabVal === 'tab1'?styles.tabBg1:null} />
                <TouchableOpacity onPress={() => handleTabPress('tab1')}>
                  <Text
                    style={
                      tabVal === 'tab1'
                        ? styles.selectedText
                        : styles.selectedText1
                    }>
                    消息
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tabItem}>
                <View style={tabVal === 'tab2'?styles.tabBg2:null}></View>
                <TouchableOpacity onPress={() => handleTabPress('tab2')}>
                  <Text
                    style={
                      tabVal === 'tab2'
                        ? styles.selectedText
                        : styles.selectedText1
                    }>
                    联系人
                  </Text>
                  </TouchableOpacity>
              </View>
            </View>
            <View style={styles.tabMore}>
              <Feather name="plus" size={38} color="#000000" />
            </View>
          </View>
          <View style={styles.searchGrid}>
            <TouchableOpacity onPress={() => navigate('SearchView')}>
              <View style={styles.searchBox}>
                <Text style={styles.searchText}>搜索</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tabVal === 'tab1'?styles.tabContent:styles.tabContentShow}>
          {/* <MessageModule></MessageModule> */}
          <MessageModule></MessageModule>
        </View>
        <View style={tabVal === 'tab2'?styles.tabContent:styles.tabContentShow}>
          <ContactsModul></ContactsModul>
        </View>
      </SafeAreaView>
  )
}

export default SocializingView;


const styles = StyleSheet.create({
  tabContent:{
    flex: 1,
    backgroundColor:'#F5F5F5',
    paddingBottom:20
  },
  tabContentShow:{
    display:'none'
  },
  safeStyle: {
    width: windowWidth,
    height: windowHeight-40,
    backgroundColor: '#FFFFFF',
  },
  headView: {
    width: windowWidth,
    height: 140,
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
    marginTop: 16,
    paddingRight: 25,
    alignItems: 'flex-end',
  },
  tabBg1: {
    width: 18,
    height: 18,
    top:-3,
    right:28,
    borderRadius: 9,
    borderWidth: 1.5,
    position: 'absolute',
    borderColor: '#DCDCDC',
    backgroundColor: '#FABA3C',
    zIndex: -10,
  },
  tabBg2:{
    width: 18,
    height: 18,
    top:-4,
    right:20,
    borderRadius: 9,
    borderWidth: 1.5,
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
  searchGrid: {
    width: windowWidth,
    height: 60,
    paddingHorizontal: 10,
  },
  searchBox: {
    width: windowWidth - 20,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
  },
  searchText: {
    lineHeight: 40,
    fontSize: 16,
    color: '#000000',
  },
  viewStyle: {
    backgroundColor: '#ccc',
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
function tabClick(porps: any, string: any) {
  throw new Error('Function not implemented.');
}


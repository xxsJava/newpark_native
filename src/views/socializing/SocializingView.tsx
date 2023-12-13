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
import {Image, Text, View} from 'react-native-animatable';
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

const moreList = [{
  index:1,
  image:require('../../assets/images/alimom/add-user.png'),
  text:'添加牛友',
  path:null
},{
  index:2,
  image:require('../../assets/images/alimom/basketball-icon.png'),
  text:'加入社区',
  path:null
},{
  index:3,
  image:require('../../assets/images/alimom/add-icon.png'),
  text:'创建社区',
  path:'CreateCommunityRoute'
}]

const SocializingView = () => {

  const [tabVal, setTab] = useState('tab1');
  const [more,setMore] = useState(false)

  const handleTabPress = (tab: string) => {
    console.log('Tab状态' + tab);
    setTab(tab);
  };

  const handleMorePress = (more:boolean) => {
    more ? setMore(false) : setMore(true)
  }

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
              <TouchableOpacity onPress={() => handleMorePress(more)}>
                <Feather name="plus" size={32} color="#000000" />
              </TouchableOpacity>
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
        <View style={[styles.moreModule,more?null:{display:'none'}]}>
          {moreList.map(item => {
            return(
              <View style={styles.itemMore} key={item.index}>
                <View style={styles.itemImageView}>
                  <Image style={styles.itemImage} source={item.image}></Image>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={styles.itemTextView} onPress={() => navigate('CreateCommunityRoute')}>
                  <Text style={styles.itemText}>{item.text}</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      </SafeAreaView>
  )
}

export default SocializingView;


const styles = StyleSheet.create({
  tabContent:{
    flex: 1,
    backgroundColor:'#F5F5F5',
    paddingBottom:20,
  },
  tabContentShow:{
    display:'none'
  },
  safeStyle: {
    width: windowWidth,
    height: windowHeight-40,
    position:'relative',
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
    paddingRight: 10,
    alignItems: 'flex-end',
  },
  moreModule:{
    top:45,
    right:18,
    width:140,
    height:130,
    paddingVertical:5,
    position:'absolute',
    backgroundColor:'#414040',
    zIndex:99
  },
  itemMore:{
    height:30,
    marginBottom:8,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  itemImageView:{
    width:'40%',
    alignItems:'center',
    paddingTop:8,
  },
  itemImage:{
    width:22,
    height:22
  },
  itemTextView:{
    width:'60%',
    borderColor:'#fff',
    borderBottomWidth:1
  },
  itemText:{
    fontSize:14,
    color:'#fff',
    lineHeight:30,
    textAlign:'center'

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


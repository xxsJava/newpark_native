/*
 * @Author: xxs
 * @Date: 2023-10-07 17:44:34
 * @LastEditTime: 2024-01-11 11:25:29
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
import BellView from'../../components/Bell'
const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const moreList = [{
  index:1,
  image:require('../../assets/images/tup/tianjiahaoyou.png'),
  text:'添加牛友',
  path:null
},{
  index:2,
  image:require('../../assets/images/tup/xieshangyizheng.png'),
  text:'加入社区',
  path:null
},{
  index:3,
  image:require('../../assets/images/tup/wanle.png'),
  text:'创建社区',
  path:'CreateCommunityRoute'
},
{
  index:4,
  image:require('../../assets/images/tup/saoyisao.png'),
  text:'扫一扫',
  path:'CreateCommunityRoute'
},
]

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
                  allowFontScaling={false}
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
                  allowFontScaling={false}
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
                <Text allowFontScaling={false} style={styles.searchText}>搜索</Text>
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
              <TouchableOpacity style={styles.itemMore} key={item.index} activeOpacity={0.5} onPress={() => navigate('CreateCommunityRoute')}>
                <View style={styles.itemImageView}>
                  <Image style={styles.itemImage} source={item.image}></Image>
                </View>
                <View style={styles.itemTextView}>
                  <Text allowFontScaling={false} style={styles.itemText}>{item.text}</Text>
                </View>
                {/* <TouchableOpacity activeOpacity={0.5} style={styles.itemTextView} onPress={() => navigate('CreateCommunityRoute')}>
                  <Text style={styles.itemText}>{item.text}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.itemTextView} onPress={() => navigate('CreateCommunityRoute')}>
                  <Text style={styles.itemText}>{item.text}</Text>
                </TouchableOpacity> */}
              </TouchableOpacity>
            )
          })}
        </View>
        <TouchableOpacity style={[styles.maskLayer,more?null:{display:'none'}]} onPress={() => handleMorePress(more)}>
       
        </TouchableOpacity>
        <View>
            <BellView></BellView>
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
    top:50,
    right:18,
    width:160,
    height:165,
    paddingVertical:5,
    paddingHorizontal:7,
    position:'absolute',
    // backgroundColor:'#414040',
    backgroundColor:'#fff',
    borderRadius:10,
    zIndex:99,
     // 阴影的配置
     elevation: 6, // 适配android的
     shadowOffset: { width: 0, height: 0 }, // 以下4项适配ios
     shadowColor: 'black',
     shadowOpacity: .3,
     shadowRadius: 2
  },
  itemMore:{
    height:30,
    marginBottom:12,
    marginHorizontal:8,
    paddingBottom:6,
    flexDirection:'row',
    justifyContent:'space-between',
    borderColor:'#bbb',
    borderBottomWidth:1,
    alignItems:'center'
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
    width:'60%'
  },
  itemText:{
    fontSize:14,
    color:'#000',
    lineHeight:30,
    textAlign:'center'

  },
  tabBg1: {
    width: 18,
    height: 18,
    top:-3,
    right:28,
    borderRadius: 9,
    // borderWidth: 1.5,
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
    // borderWidth: 1.5,
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
  maskLayer:{
    width:windowWidth,
    height:windowHeight,
    top:0,
    position:'absolute',
    zIndex:80,
    // backgroundColor:'red'
  }
});
function tabClick(porps: any, string: any) {
  throw new Error('Function not implemented.');
}


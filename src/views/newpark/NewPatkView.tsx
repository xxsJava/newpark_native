/*
 * @Author: xxs
 * @Date: 2023-10-07 17:42:15
 * @LastEditTime: 2023-11-02 19:00:31
 * @FilePath: \newpark_native\src\views\newpark\NewPatkView.tsx
 * @Description: desc
 */
import React, {Component} from 'react';
import {
  Dimensions,
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  Platform,
  TextInput
} from 'react-native';
import {Trans} from 'react-i18next';
import LinearGradinet from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
let tabVal = '2';

const listData = [
  {
    index: 1,
    title: '一起学Java',
    sum: '150',
    slogan: 'n个牛友在xxx',
    bgShow: false,
    icon: require('../../assets/images/alimom/java.png'),
  },
  {
    index: 2,
    title: '一起玩耍',
    sum: '150',
    slogan: 'n个牛友在xxx',
    bgShow: false,
    icon: require('../../assets/images/alimom/R-C.jpg'),
  },
  {
    index: 2,
    title: '女神在哪',
    sum: '4.5w',
    slogan: 'n个牛友在xxx',
    bgShow: false,
    icon: require('../../assets/images/3.0x/chatroomicon01.png'),
  },
];

const optionData1=[{
  index:1,
  name:'newPatkOption.optionName1',
  icon:require('../../assets/images/chatroomicon01.png')
},{
  index:2,
  name:'newPatkOption.optionName2',
  icon:require('../../assets/images/chatroomicon02.png')
},{
  index:3,
  name:'newPatkOption.optionName3',
  icon:require('../../assets/images/chatroomicon03.png')
},{
  index:4,
  name:'newPatkOption.optionName4',
  icon:require('../../assets/images/chatroomicon04.png')
}]
const optionData2=[{
  index:1,
  name:'newPatkOption.optionName5',
  icon:require('../../assets/images/chatroomicon05.png')
},{
  index:2,
  name:'newPatkOption.optionName6',
  icon:require('../../assets/images/chatroomicon06.png')
},{
  index:3,
  name:'newPatkOption.optionName7',
  icon:require('../../assets/images/chatroomicon07.png')
},{
  index:4,
  name:'newPatkOption.optionName8',
  icon:require('../../assets/images/chatroomicon08.png')
}]

const glideData=[{
  index:1,
  title:'某秘密聊天室',
  num:'123'
}]

// const NewPatkView: React.FC<NewPatkScreenProps> = ({navigation}) => {
//   const toast = useToast();

//   const handlePress = () => {
//     navigate('ForgetPass');
//   };

//   const loginOut = async () => {
//     //登录出
//     const loginOutAPI = await loginOutApi();

//     if (loginOutAPI.code === 200) {
//       toast.show({
//         description: '退出成功',
//         placement: 'top',
//       });
//       //清空用户缓存
//       Storage.clean();
//       navigation.navigate('LoginStacker');
//     }
//   };

//   return (
//     <View>
//       <Text>Home Screen</Text>
//       <Button title="跳转调试,Login" onPress={handlePress} />
//       <Button title="登出调试" onPress={loginOut} />
//     </View>
//   );
// };

export default class NewPatkView extends Component {
  tabClick(porps: string) {
    tabVal = porps;
    console.log('输出结果', tabVal);
  }

  render() {
    return (
      <SafeAreaView style={styles.safeStyle}>
        <View style={styles.headView}>
          <View style={styles.headGrid}>
            <View style={styles.tabGrid}>
              <View style={styles.tabItem}>
                <View style={tabVal === '1'? styles.tabBg : null} />
                <View>
                  <Text
                    style={
                      tabVal === '1'
                        ? styles.selectedText
                        : styles.selectedText1
                    }
                    onPress={() => this.tabClick('1')}>
                    <Trans>newPatkTab.tab1</Trans>
                  </Text>
                </View>
              </View>
              <View style={styles.tabItem}>
                <View style={tabVal === '2'? styles.tabBg1 : null}></View>
                <View>
                  <Text
                    style={
                      tabVal === '2'
                        ? styles.selectedText
                        : styles.selectedText1
                    }
                    onPress={() => this.tabClick('2')}>
                    <Trans>newPatkTab.tab2</Trans>
                  </Text>
                </View>
              </View>
            </View>
            <View style={tabVal === '1'?styles.tabMore:styles.scrollShow}>
              {/* <Feather name="plus" size={38} color="#000000" /> */}
              <Image source={require('../../assets/images/search_in_circle.png')}></Image>
            </View>
          </View>
        </View>
        <ScrollView style={tabVal === '1'?styles.scrollStyle:styles.scrollShow}>
          <View style={styles.listStyle}>
            {listData.map(item => {
              return (
                <View style={styles.itemStyle} key={item.index}>
                  <View style={styles.itemLeft}>
                    <Image
                      style={styles.imgStyle}
                      source={item.icon}
                    />
                  </View>
                  <View style={styles.itemMiddle}>
                    <View style={styles.middleStyle}>
                      <Text style={styles.middleStart}>{item.title}</Text>
                      <Image
                        style={styles.middleImage}
                        source={require('../../assets/images/2.0x/hotfuckicon.png')}
                      />
                      <Text style={styles.middleEnd}>热度{item.sum}</Text>
                    </View>
                    <View style={styles.middleBottom}>
                      <LinearGradinet
                        colors={[
                          'rgba(233,231,255,0.9)',
                          'rgba(233,231,255,0)',
                        ]}
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1}}
                        style={styles.bottomBg}>
                        <Text style={styles.bottomText}>{item.slogan}</Text>
                      </LinearGradinet>
                    </View>
                  </View>
                  <View style={styles.itemRight}>
                    <Feather
                      name="chevron-right"
                      size={30}
                      style={styles.rightIcon}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <ChatRoomView></ChatRoomView>
      </SafeAreaView>
    );
  }
}

class ChatRoomView extends Component {
  render() {
    return(
      <View style={tabVal === '2'?styles.scrollStyle:styles.scrollShow}>
        <View style={styles.topStyle}>
           <Image style={styles.topImg} source={require('../../assets/images/search.png')}></Image>
          <TextInput style={styles.inputStyle} value={'搜索您感兴趣的聊天室'}>
          </TextInput>
        </View>
        <View style={styles.optionStyle}>
          <View style={styles.optionList}>
            {optionData1.map(item => {
              return(
                <View style={styles.optionItem} key={item.index}>
                  <Image source={item.icon}></Image>
                  <Text style={styles.optionText}>
                    <Trans>{item.name}</Trans>
                  </Text>
                </View>
              )
            })}
          </View>
          <View style={styles.optionList}>
            {optionData2.map(item => {
              return(
                <View style={styles.optionItem} key={item.index}>
                  <Image source={item.icon}></Image>
                  <Text style={styles.optionText}>
                    <Trans>{item.name}</Trans>
                  </Text>
                </View>
              )
            })}
          </View>
        </View>
        <View style={styles.glideStyle}>
          <View style={styles.glideHead}>
            <View style={styles.glideHeadList}>
              <Text style={styles.glideHeadTitle}>
                <Trans>newPatkTab2.tableTitle</Trans>
              </Text>
            </View>
            <View style={styles.glideHeadRight}>
            <Text style={styles.headRightText1}>
              <Trans>newPatkTab2.tab1</Trans>
            </Text>
            <Text style={styles.headRightText2}>
              <Trans>newPatkTab2.tab2</Trans>
            </Text>
            </View>
          </View>
          <ScrollView style={styles.glideScroll}>
            {glideData.map(item => {
              return(
                <View style={styles.glideScrollItem} key={item.index}>
                  <View style={styles.glideItemLeft}>
                    <View style={styles.glidePortrait}></View>
                  </View>
                  <View style={styles.glideItemMiddle}>
                    <Text style={styles.glideItemText1}>{item.title}</Text>
                    <View style={styles.glideItemTextBg}>
                      <Image style={styles.glideItemIcon} source={require('../../assets/images/tabs_4_on.png')}></Image>
                      <Text style={styles.glideItemText2}>{item.num}</Text>
                    </View>
                  </View>
                  <View style={styles.glideItemRight}>
                    {/* <Button title='前往聊天室' color={'#faba3c'}></Button> */}
                    <View style={styles.glideButton}>
                      <Text style={styles.buttonText}>前往聊天室</Text>
                    </View>
                  </View>
                </View>
              )
            })}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeStyle: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#FFFFFF',
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
    marginTop: 26,
    paddingRight: 25,
    alignItems: 'flex-end',
  },
  tabBg: {
    width: 18,
    height: 18,
    top: -2,
    right: 27,
    borderRadius: 9,
    borderWidth: 1.5,
    position: 'absolute',
    borderColor: '#DCDCDC',
    backgroundColor: '#FABA3C',
    zIndex: -10,
  },
  tabBg1:{
    width: 18,
    height: 18,
    top: -2,
    right: 7,
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
  scrollShow:{
    display:'none'
  },
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
  listStyle: {},
  itemStyle: {
    height: 102,
    marginBottom: 20,
    padding: 1,
    backgroundColor: '#F9FAFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    ...Platform.select({
      ios: {
        width: windowWidth - 34,
        shadowColor: '#999', //设置阴影色
        shadowOffset: {width: 0, height: 0}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
        shadowOpacity: 1,
        shadowRadius: 0.2, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
      },
      android: {
        width: windowWidth - 32,
        elevation: 0.2,
      },
    }),
  },
  itemLeft: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  itemMiddle: {
    paddingTop: 7,
    paddingBottom: 10,
    paddingLeft: 18,
  },
  itemRight: {
    width: 50,
    height: 100,
  },
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius:8
  },
  middleStyle: {
    width: 225,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  middleImage: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  middleStart: {
    width: 90,
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  middleEnd: {
    fontSize: 12,
    color: '#FCD4C4',
    paddingTop: 4,
  },
  middleBottom: {
    width: 120,
    height: 30,
    alignItems: 'center',
    lineHeight: 26,
    paddingLeft: 18,
  },
  bottomText: {
    width: 120,
    height: 30,
    color: '#333',
    textAlign: 'center',
    lineHeight: 26,
  },
  bottomBg: {
    borderRadius: 10,
  },
  rightIcon: {
    lineHeight: 100,
    color: '#000',
  },
  topStyle:{
    width: windowWidth,
    height:75,
    position:'relative',
    zIndex:-10
  },
  topImg:{
    top:12,
    left:15,
    position:'absolute',
    zIndex:10
  },
  inputStyle:{
    height:40,
    lineHeight:20,
    borderWidth:0,
    color:'#000',
    backgroundColor:'#F5F5F5',
    borderRadius:20,
    textAlign:'center',
    ...Platform.select({
      ios: {
        width: windowWidth-36,
      },
      android: {
        width: windowWidth-32,
      },
    }),
  },
  optionStyle:{
    ...Platform.select({
      ios: {
        width: windowWidth-36,
      },
      android: {
        width: windowWidth-32,
      },
    }),
    height:160,
  },
  optionList:{
    flexDirection:'row',
    justifyContent:'center'
  },
  optionItem:{
    flex:1,
    height:60,
    color:'#000',
    alignItems:'center',
    marginBottom:20
  },
  optionText:{
    color:'#000'
  },
  glideStyle:{
    marginTop:20,
    ...Platform.select({
      ios: {
        width: windowWidth-36,
      },
      android: {
        width: windowWidth-32,
      },
    }),
  },
  glideHead:{
    width:'100%',
    height:50,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  glideHeadList:{
    flex:1,
    paddingLeft:5,
  },
  glideHeadRight:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  glideHeadTitle:{
    color:'#000',
    fontSize:18,
    fontWeight:'600'
  },
  headRightText1:{
    color:'#000'
  },
  headRightText2:{
    color:'#FABA3C'
  },
  glideScroll:{
    width:windowWidth,
    height:windowHeight-385,
  },
  glideScrollItem:{
    height:90,
    flexDirection:'row',
    justifyContent:'space-around',
    ...Platform.select({
      ios: {
        width: windowWidth-36,
      },
      android: {
        width: windowWidth-32,
      },
    }),
  },
  glideItemLeft:{
    width:70,
    height:90,
    paddingTop:15,
    alignItems:'center',
  },
  glideItemMiddle:{
    width:180,
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:10,
    // backgroundColor:'green'
  },
  glideItemRight:{
    width:120,
    height:90,
    paddingRight:15,
    paddingTop:29,
    // backgroundColor:'#000'
  },
  glidePortrait:{
    width:60,
    height:60,
    borderWidth:1,
    borderColor:'#999',
    borderRadius:30,
  },
  glideButton:{
    width:105,
    height:32,
    backgroundColor:'#FABA3C'
  },
  buttonText:{
    color:'#FFF',
    lineHeight:32,
    textAlign:'center',
  },
  glideItemText1:{
    fontSize:14,
    color:'#000',
    marginBottom:5
  },
  glideItemText2:{
    color:'#FFF',
    paddingHorizontal:5,
    lineHeight:20,

  },
  glideItemTextBg:{
    width:70,
    height:20,
    borderRadius:10,
    backgroundColor:'#F1F1F1',
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  glideItemIcon:{
    width:15,
    height:15,
    marginTop:2,
    marginLeft:5
  }

});

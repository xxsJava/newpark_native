import React, {Component} from 'react';
import {
  Dimensions,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Platform,
  TextInput
} from 'react-native';
import {Trans} from 'react-i18next';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const optionData1=[{
    index:1,
    name:'newPatkOption.optionName1',
    icon:require('../../../assets/images/chatroomicon01.png')
  },{
    index:2,
    name:'newPatkOption.optionName2',
    icon:require('../../../assets/images/chatroomicon02.png')
  },{
    index:3,
    name:'newPatkOption.optionName3',
    icon:require('../../../assets/images/chatroomicon03.png')
  },{
    index:4,
    name:'newPatkOption.optionName4',
    icon:require('../../../assets/images/chatroomicon04.png')
  }]
  const optionData2=[{
    index:1,
    name:'newPatkOption.optionName5',
    icon:require('../../../assets/images/chatroomicon05.png')
  },{
    index:2,
    name:'newPatkOption.optionName6',
    icon:require('../../../assets/images/chatroomicon06.png')
  },{
    index:3,
    name:'newPatkOption.optionName7',
    icon:require('../../../assets/images/chatroomicon07.png')
  },{
    index:4,
    name:'newPatkOption.optionName8',
    icon:require('../../../assets/images/chatroomicon08.png')
  }]
  
  const glideData=[{
    index:1,
    title:'某秘密聊天室',
    num:'123'
  }]

const ChatModule = () => {
    return(
        <View style={styles.scrollStyle}>
          <View style={styles.topStyle}>
            <Image style={styles.topImg} source={require('../../../assets/images/search.png')}></Image>
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
                        <Image style={styles.glideItemIcon} source={require('../../../assets/images/tabs_4_on.png')}></Image>
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
})
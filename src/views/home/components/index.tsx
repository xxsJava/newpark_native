/*
 * @Author: xxs
 * @Date: 2023-10-25 11:09:44
 * @LastEditTime: 2023-11-07 14:25:58
 * @FilePath: \newpark_native\src\views\home\components\index.tsx
 * @Description: desc
 */
import React, { useState } from 'react';
import {Avatar, Button, Card, IconButton, Text} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, View,Image,TextInput,Platform,Dimensions} from 'react-native';
import {navigate} from '../../../config/routs/NavigationContainer';
import {dateToMsgTime} from '../../../components/Rests/TconTime'
import { WebView } from 'react-native-webview';
import { postLike } from '../../../api/sys/home'
import { postLikeParam } from '../../../api/sys/home/types'
import Storage from '../../../utils/AsyncStorageUtils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// const [upvoteVal,onUpvoteSet] = React.useState(false)

//普通帖子组件
export const postsOrdinary = (item: any, index: any, separators: any) => {
  let upvoteVal = false;
  // const [inputValue, onChangeText] = useState('喜欢就告诉她');
  // const onUpvote = (porp:boolean) => {
  //   onUpvoteSet(!porp)
    
  // }
  const postLikeParam:postLikeParam ={
    likeTime: 1396189015737,
    comId: 0,
    postsId: 1000000,
    likeType: 1
  }

  const postLikePress = async () => {
    const tokenStr = await Storage.get('usr-token');
    const uidStr = await Storage.get('u-id');
    console.log('uidStr',uidStr)
    if(tokenStr != null) {
      const postLikeUp = await postLike(tokenStr,postLikeParam);
      // setPostCommentsList(postCommentsAPI.data)
      // console.log('commentsParam',commentsData)
      console.log('点赞返回',postLikeUp)
    } else {
      return console.log('数据加载失败')
    }
  }

  console.log('帖子item',item)
  return (
    <TouchableOpacity activeOpacity={0.9} key={item.tid}  onPress={() => navigate('PostDetailsRoute',{item})}>
      <Card style={styles.cardSty}>
        <Card.Content style={styles.cardTitle}>
          <View style={styles.titleLeft}>
            <View>
              <Avatar.Image
                style={styles.avaSty}
                size={44}
                source={{uri:item.upath}}
              />
              <Image style={styles.avatarIcon} source={require('../../../assets/images/plus-sign.png')}></Image>
            </View>
            <View style={styles.titleView}>
              <Text allowFontScaling={false} style={styles.titleStyle}>{item.unikname}</Text>
              <Text allowFontScaling={false} style={styles.timeStyle}>{dateToMsgTime(item.tlastTime)}</Text>
            </View>
          </View>
          <View style={styles.rightSty}>
            <IconButton
              style={styles.rightButton}
              icon="dots-horizontal"
              onPress={() => {}}
            />
          </View>
        </Card.Content>
        <Card.Content style={styles.backColor}>
          <Text allowFontScaling={false} style={styles.context}>{item.ttitle}</Text>
          <View style={{height:120,width:windowWidth,marginHorizontal:10}}>
            <WebView source={{html:item.tcontext}}></WebView>
          </View>
        </Card.Content>
        {/* <Card.Cover style={styles.contentImg} source={require('../../../assets/images/alimom/R-C.jpg')} /> */}
        <Card.Content style={styles.backColor}>
          {/* <Text style={styles.context}>#情感#个人#官方#颜值#语录</Text> */}
          <View style={styles.labelList}>
            {item.labs.map((emit:any) => {
              return(
                <TouchableOpacity activeOpacity={0.6} style={styles.labelStyle} key={emit.lableId}>
                  <View style={styles.labelIcon}>
                    <Text allowFontScaling={false} style={styles.labelIconText}>#</Text>
                  </View>
                  <Text allowFontScaling={false} style={styles.labelText}>{emit.lableText}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </Card.Content>
        <View style={styles.interactionStyle}>
          <View style={styles.interactionLeft}>
          <TouchableOpacity
              onPress={() => {
                console.log('转发');
              }}>
              <Button
                icon={require('../../../assets/images/share-icon.png')}
                style={styles.buttonDz}>
                    {item.tforwardCount}
              </Button>
            </TouchableOpacity>
          </View>
          <View style={styles.interactionRight}>
            <Button
              icon={require('../../../assets/images/3.0x/like.png')}
              style={styles.buttonDz}
              onPress={() => postLikePress()}>
                {item.tlikeCount}
            </Button>
            <TouchableOpacity
              onPress={() => {
                console.log('评论');
              }}>
              <Button
                icon={require('../../../assets/images/3.0x/tabs_3_on.png')}
                // style={StylesALL.BGCOLOR}
              >
                {item.tcomCount}
              </Button>
            </TouchableOpacity>
          </View>
        </View>
        {/* </TouchableHighlight> */}
        {/* <Card.Actions>
          <TouchableOpacity
            onPress={() => {
              console.log('点赞');
            }}>
            <Button
              icon={require('../../../assets/images/3.0x/like.png')}
              style={styles.buttonDz}>
              200
            </Button>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('评论');
            }}>
            <Button
              icon={require('../../../assets/images/3.0x/tabs_3_on.png')}
              // style={StylesALL.BGCOLOR}
            >
              2000
            </Button>
          </TouchableOpacity>
        </Card.Actions> */}
        <View style={styles.commentAreaView}>
          <Text allowFontScaling={false} style={styles.commentAreaTitle}>精选评论</Text>
            {item.postsComments.map((porp:any) => {
              return(
                <View style={styles.commentArea}>
                  <View style={styles.commentAreaItem}>
                    <Avatar.Image size={32} source={{uri:porp.upath}} />
                    <View style={styles.commentAreaName}>
                      <Text allowFontScaling={false} style={styles.commentAreaNameLeft}>{porp.unikname}：</Text>
                      <Text allowFontScaling={false} style={styles.commentAreaNameRight}>{porp.comContent}</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.commentAreaIcon}
                      onPress={() => {
                      console.log('评论');
                    }}>
                      <Button
                        icon={require('../../../assets/images/3.0x/like.png')}
                        // style={StylesALL.BGCOLOR}
                      >
                        {porp.comSupport}
                      </Button>
                    </TouchableOpacity>
                </View>
              </View>
              )
            })}
        </View>
        <View style={styles.leaveWordView}>
          <Avatar.Image size={32} source={require('../../../assets/images/avatar-nv.png')} />
          <TextInput placeholder='喜欢就告诉她' allowFontScaling={false} style={styles.leaveWordInput}></TextInput>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backColor: {
    shadowOpacity: 0,
  },
  cardSty: {
    marginBottom: -3, 
    backgroundColor: '#FFF',
    paddingTop:8,
    borderRadius:0
  },
  cardTitle:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  cardRadius:{
    borderRadius:8
  },
  subSty: {
    fontSize: 10,
    color: '#999',
  },
  titleLeft:{
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  avaSty: {
    bottom: 5,
  },
  titleView:{
    paddingLeft:10
  },
  titleStyle:{
    fontSize:15,
    color:'#000',
    fontWeight:'bold',
    paddingBottom:2
  },
  timeStyle:{
    fontSize:11,
    color:'#bbb'
  },
  avatarIcon:{
    width:20,
    height:20,
    position:'absolute',
    top:22,
    left:27,
    zIndex:10
  },
  rightSty: {
    marginTop:-15,
    marginRight:-15
    // backgroundColor:'pink'
  },
  rightButton:{
    // backgroundColor:'plum'
  },
  titleSty: {
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
  },
  buttonDz: {borderWidth: 0},
  context: {
    fontSize: 15,
    // fontWeight: 'bold',
    // color: '#6A1B9A',
    color:'#000',
    marginTop:10,
    paddingHorizontal:10
  },
  contentImg:{
    paddingLeft: '3%',
    paddingRight: '3%',
    backgroundColor: '#fff',
    borderRadius:0,
    marginTop:5,
    marginBottom:10
  },
  labelList:{
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  labelStyle:{
    width:'auto',
    height:24,
    paddingHorizontal:10,
    marginBottom:5,
    backgroundColor:'#efebfa',
    borderRadius:12,
    marginRight:3,
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  labelIcon:{
    width:18,
    height:17,
    backgroundColor:'#7c52d0',
    borderRadius:9,
    marginTop:3.5,
    marginRight:5
  },
  labelIconText:{
    width:18,
    height:17,
    fontSize:15,
    color:'#FFF',
    textAlign:'center',
    lineHeight:18,
  },
  labelText:{
    lineHeight:24
  },
  interactionStyle:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  interactionLeft:{
    flex:1,
    alignItems:'flex-start'
  },
  interactionRight:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  commentAreaView:{
    width:'100%',
    marginTop:5,
    marginBottom:10,
    paddingHorizontal:10
  },
  commentAreaTitle:{
    fontSize:16,
    marginBottom:10,
    color:'#d9d9d9'
  },
  commentArea:{
    paddingHorizontal:10
  },
  commentAreaItem:{
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  commentAreaName:{
    width:'70%',
    flexDirection:'row',
    justifyContent:'flex-start',
    paddingLeft:10
  },
  commentAreaIcon:{
    width:'30%'
  },
  commentAreaNameLeft:{
    fontSize:15,
    fontWeight:'600',
    color:'#000',
    lineHeight:32
  },
  commentAreaNameRight:{
    fontSize:14,
    color:'#000',
    lineHeight:32
  },
  leaveWordView:{
    width:'100%',
    height:40,
    paddingHorizontal:20,
    marginBottom:10,
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  leaveWordInput:{
    width:'80%',
    height:34,
    borderRadius:20,
    borderWidth:0,
    marginLeft:20,
    paddingHorizontal:20,
    color:'#999a9a',
    backgroundColor:'#f4f8f7',
    ...Platform.select({
      android:{
        paddingVertical:0
      }
    })
  }
});
function componentDidMount() {
  throw new Error('Function not implemented.');
}


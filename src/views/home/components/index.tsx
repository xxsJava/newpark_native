/*
 * @Author: xxs
 * @Date: 2023-10-25 11:09:44
 * @LastEditTime: 2024-04-07 14:44:57
 * @FilePath: \newpark_native\src\views\home\components\index.tsx
 * @Description: desc
 */
import { Menu, MenuItem, MenuItemLabel } from '@gluestack-ui/themed';
import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, Card, IconButton, Text } from 'react-native-paper';
import WebView from 'react-native-webview';
import { postLike } from '../../../api/sys/home';
import { postLikeParam } from '../../../api/sys/home/types';
import { dateToMsgTime } from '../../../components/Rests/TconTime';
import { navigate } from '../../../config/routs/NavigationContainer';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import HTMLView from 'react-native-htmlview'

//普通帖子组件
const postsOrdinary = (item: any, index: any, separators: any) => {
  // function postsOrdinary  (item: any) {
    // const [isPlay,setIsPlay] = React.useState(false);
    let isPlay = false;
  // const [upvoteVal,setUpvoteSet] = React.useState(false)
  let upvoteVal = false;
  const postLikeParam:postLikeParam = {
    likeTime: 1396189015737,
    comId: 0,
    postsId: item.tid,
    likeType: 1
  };
  
  // const [time,etTime] = useState();
  // const loadStart = () => {
  //     console.log('视频正在加载！');
      
  // };
  // const setDuration = () =>{
  //   console.log('视频加载完毕');
    
  // }
  // const onEnd = () => {
  //   console.log('视频播放完毕');
  // }
  // const videoError = () => {
  //   console.log('视频播放失败');
  // }

  const postLikePress = async (porp:any) => {
      const postLikeUp = await postLike(postLikeParam);
      console.log('点赞返回',postLikeUp)
      if(postLikeUp.data) {
        upvoteVal = true
        item.tlikeCount = item.tlikeCount + 1 ;
      }
    if(porp == 1) {
      upvoteVal = true
    } else {
      upvoteVal = false
    }
    console.log('upvoteVal',upvoteVal,'tlikeCount',item.tlikeCount)
  }
  
  return (
    <Card style={styles.cardSty}>
      <Card.Content style={styles.cardTitle}>
        <View style={styles.titleLeft}>
          <View>
            <TouchableOpacity onPress={()=>{console.log('点击--头像')}}>
              <Avatar.Image
                style={styles.avaSty}
                size={44}
                source={{ uri: item.upath }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchaOp} onPress={() =>{ console.log('点击--关注用户')}}>
              <Image style={styles.avatarIcon} source={require('../../../assets/images/plus-sign.png')} accessibilityLabel='图片' alt="头像"></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.titleView}>
            <Text allowFontScaling={false} style={styles.titleStyle}>{item.unikname}</Text>
            <Text allowFontScaling={false} style={styles.timeStyle}>{dateToMsgTime(item.tlastTime)}</Text>
          </View>
        </View>
        <View style={styles.rightSty}>
          <Menu
            style={{position:'relative',top:-30,bottom:0}}
            placement='bottom right'
            trigger={({ ...triggerProps }) => {
              return (
                  <IconButton
                  { ...triggerProps }
                  // style={styles.rightButton}
                  icon="dots-horizontal"
                  />
              )
            }}
          >
            <MenuItem key="Report" textValue="Report" onPress={() => {console.log('举报');}}>
              <MenuItemLabel size="sm">举报</MenuItemLabel>
            </MenuItem>
            <MenuItem key="Blacklist" textValue="Community" onPress={() => {console.log('拉入黑名单');}}>
              <MenuItemLabel size="sm">拉入黑名单</MenuItemLabel>
            </MenuItem>
          </Menu>
        </View>
      </Card.Content>
      {/* 页面传参的方式 */}
      {/* onPress={() => navigate('PostDetailsRoute', { item })} */}
      <TouchableOpacity onPress={() => navigate('PostDetailsRoute', { item })} activeOpacity={0.9} key={item.tid}  style={styles.cardd}>
        <Card.Content style={styles.backColor}>
          <Text allowFontScaling={false} style={styles.context}>{item.ttitle}</Text>
          <View style={{  height: 120,width: windowWidth }}>
    
          <WebView source={{ html: item.tcontext }}></WebView>

          </View>
          <View style={styles.cover} >
            {/* <Video source={require('../../../assets/mp4/study.mp4')} style={{ width: 160, height: 200 }} /> */}
              
              {/* <Video source={{uri:'https://www.runoob.com/try/demo_source/mov_bbb.mp4'}} style={{ width: 160, height: 100 }} />
              <Video source={{uri:'https://www.runoob.com/try/demo_source/mov_bbb.mp4'}} style={{ width: 160, height: 100 }} />
              <HTML source={{ html: ceshi}} contentWidth={200}/> */}
            </View>
      {/* onPress={() => navigate('PostDetailsRoute', { item })} */}
      <TouchableOpacity onPress={() => navigate('PostDetailsRoute', { item })} activeOpacity={0.9} key={item.tid}  style={styles.cardd}>
        {/* <Card.Content style={styles.backColor}>
          <Text allowFontScaling={false} style={styles.context}>{item.ttitle}</Text>
          <View style={{ height: 120, width: windowWidth, marginHorizontal: 10 }}>
            <WebView source={{ html: item.tcontext }}></WebView>
          </View>
        </Card.Content> */}
      </TouchableOpacity>
      {/* <Card.Cover style={styles.contentImg} source={require('../../../assets/images/alimom/R-C.jpg')} /> */}
      <Card.Content style={styles.backColor}>
        {/* <Text style={styles.context}>#情感#个人#官方#颜值#语录</Text> */}
        <View style={styles.labelList}>
          {item.labs.map((emit: any) => {
            return (
              <TouchableOpacity activeOpacity={0.6} style={styles.labelStyle} key={emit.lableId}>
                <View></View>
                <View style={styles.labelIcon}>
                  <Text allowFontScaling={false} style={styles.labelIconText}>#</Text>
                </View>
                <Text allowFontScaling={false} style={styles.labelText}>{emit.lableText}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Card.Content>
      <View style={styles.interactionStyle}>
        <View style={styles.interactionLeft}>
          <TouchableOpacity
            onPress={() => {
              console.log('转发');
            } }>
            <Button
              icon={require('../../../assets/images/share-icon.png')}
              style={styles.buttonDz}>
              {item.tforwardCount}
            </Button>
          </TouchableOpacity>
        </View>
        <View style={styles.interactionRight}>
          {/* <Button
            icon={upvoteVal ? require('../../../assets/images/3.0x/like_block.png') : require('../../../assets/images/3.0x/like.png')}
            style={styles.buttonDz}
            onPress={() => postLikePress(1)}>
            {item.tlikeCount}
          </Button> */}
          <TouchableOpacity
            onPress={() => {
              console.log('评论');
            } }>
            <Button
              icon={require('../../../assets/images/3.0x/tabs_3_on.png')}
            >
              {item.tcomCount}
            </Button>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.commentAreaView}>
        <Text allowFontScaling={false} style={styles.commentAreaTitle}>精选评论</Text>
        {item.postsComments.map((porp: any) => {
          return (
            <View style={styles.commentArea}>
              <View style={styles.commentAreaItem}>
                <Avatar.Image size={32} source={{ uri: porp.upath }} />
                <View style={styles.commentAreaName}>
                  <Text allowFontScaling={false} style={styles.commentAreaNameLeft}>{porp.unikname}:</Text>
                  <Text allowFontScaling={false} style={styles.commentAreaNameRight}>{porp.comContent}</Text>
                </View>
                <TouchableOpacity
                  style={styles.commentAreaIcon}
                  onPress={() => {
                    console.log('评论');
                  } }>
                  <Button
                    icon={require('../../../assets/images/3.0x/like.png')}
                  >
                    {porp.comSupport}
                  </Button>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.leaveWordView}>
        <Avatar.Image size={32} source={require('../../../assets/images/avatar-nv.png')} accessibilityLabel='图片'/>
        <TextInput placeholder='喜欢就告诉她' allowFontScaling={false} style={styles.leaveWordInput}></TextInput>
      </View>
    </Card>
  );
};
export default postsOrdinary;
const styles = StyleSheet.create({
  backColor: {
    shadowOpacity: 0
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
    
  },
  rightSty: {
    marginTop:-15,
    marginRight:-15,
  
  },
  titleSty: {
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
  },
  buttonDz: {borderWidth: 0},
  context: {
    fontSize: 15,
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
  },
  cover:{
    width: windowWidth,
    opacity:0.9,
    display:'flex',
    alignItems:'center',
    padding:20,
    paddingBottom:0,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  touchaOp:{
    opacity:0.9,
    position:'absolute',
    top:22,
    left:27,
    zIndex:10
  },
  cardd:{
    display:'flex',
    flexDirection:'row',
    alignItems:'stretch',
    justifyContent:'flex-start'
  },
  postMain:{
    width:windowWidth,
    justifyContent:'center',
    alignItems:'center'
  }
});

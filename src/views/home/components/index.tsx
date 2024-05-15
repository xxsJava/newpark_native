/*
 * @Author: xxs
 * @Date: 2023-10-25 11:09:44
 * @LastEditTime: 2024-05-15 15:03:03
 * @FilePath: \newpark_native\src\views\home\components\index.tsx
 * @Description: desc
 */
import { Menu, MenuItem, MenuItemLabel } from '@gluestack-ui/themed';
import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, Card, IconButton, Text } from 'react-native-paper';
import { postLike } from '../../../api/sys/home';
import { postLikeParam } from '../../../api/sys/home/types';
import { dateToMsgTime } from '../../../components/Rests/TconTime';
import { navigate } from '../../../config/routs/NavigationContainer';
import StylesALL from '../../../styles';
import Colors from '../../../styles/Color';
import FontSize from '../../../styles/FontSize';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//普通帖子组件
// const postsOrdinary = (item: any, index: any, separators: any) => {
  function postsOrdinary  (item: any) {
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
    <Card style={[styles.cardSty,Colors.bWhite]}>
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
            <Text allowFontScaling={false} style={[styles.titleStyle,Colors.fBlack,StylesALL.fWeBold,FontSize.f16]}>{item.unikname}</Text>
            <Text allowFontScaling={false} style={[FontSize.f12,Colors.fbbb]}>{dateToMsgTime(item.tlastTime)}</Text>
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
            <MenuItem key="Report" textValue="Report" onPress={() => {navigate('Complain')}}>
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
          {/* <Text allowFontScaling={false} style={styles.context}>{item.ttitle}</Text> */}
          <View style={{ width: windowWidth }}>
            {/* { item.ttype == 0?<WebView style={{height:200}} source={{ html: item.tcontext }}></WebView>:''}
            { item.ttype == 1?<WebViews uri={webview.ROOT_URL+webview.API.MUSIC} h={150}/>:''}
            { item.ttype == 2?<WebViews uri={webview.ROOT_URL+webview.API.VIDEO} h={300} />:''} */}

            <View>
              <Text>看我靓照</Text>
            </View>
            <View style={styles.postImg}>
                <View style={styles.postImgs}>
                  <Image style={StylesALL.imgSize} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg'}}/>
                </View>

                <View style={styles.postImgs}>
                  <Image style={StylesALL.imgSize} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg'}}/>
                </View>

                <View style={styles.postImgs}>
                  <Image style={StylesALL.imgSize} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg'}}/>
                </View>
                
                <View style={styles.postImgs}>
                  <Image style={StylesALL.imgSize} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg'}}/>
                </View>

                <View style={styles.postImgs}>
                  <Image style={StylesALL.imgSize} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg'}}/>
                </View>

                <View style={styles.postImgs}>
                  <Image style={StylesALL.imgSize} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg'}}/>
                </View>
            </View>

          </View>
        </Card.Content>
      </TouchableOpacity>
      {/* <Card.Cover style={styles.contentImg} source={require('../../../assets/images/alimom/R-C.jpg')} /> */}
      <Card.Content style={styles.backColor}>
        {/* <Text style={styles.context}>#情感#个人#官方#颜值#语录</Text> */}
        <View style={styles.labelList}>
          {item.labs.map((emit: any) => {
            return (
              <TouchableOpacity activeOpacity={0.6} style={styles.labelStyle} key={emit.lableId}>
                <View></View>
                <View style={[styles.labelIcon,Colors.b7c]}>
                  <Text allowFontScaling={false} style={[styles.labelIconText,FontSize.f16]}>#</Text>
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
        <Text allowFontScaling={false} style={[styles.commentAreaTitle,FontSize.f16,Colors.fd9]}>精选评论</Text>
        {item.postsComments.map((porp: any) => {
          return (
            <View style={styles.commentArea}>
              <View style={styles.commentAreaItem}>
                <Avatar.Image size={32} source={{ uri: porp.upath }} />
                <View style={styles.commentAreaName}>
                  <Text allowFontScaling={false} style={[styles.commentAreaNameLeft,FontSize.f16,Colors.fBlack]}>{porp.unikname}:</Text>
                  <Text allowFontScaling={false} style={[styles.commentAreaNameRight,FontSize.f14,Colors.fBlack]}>{porp.comContent}</Text>
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
    </Card>
  );
};
export default postsOrdinary;
const styles = StyleSheet.create({
  backColor: {
    shadowOpacity: 0,
    marginTop:10
  },
  cardSty: {
    marginBottom: -3, 
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
    paddingBottom:2
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
    borderRadius:12,
    marginRight:3,
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  labelIcon:{
    width:18,
    height:17,
    borderRadius:9,
    marginTop:3.5,
    marginRight:5
  },
  labelIconText:{
    width:18,
    height:17,
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
    marginBottom:10
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
    fontWeight:'600',
    lineHeight:32
  },
  commentAreaNameRight:{
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
  postImg:{
    // borderWidth:1,
    flexDirection:'row',
    flexWrap: 'wrap',
  },
  postImgs:{
    // borderWidth:1,
    width:100,
    height:100
  }
});

/**
 * 代码描述: 帖子详情页面
 * 作者:cxr
 * 创建时间:2023/11/23 17:58:11
 */

import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetIcon, ActionsheetItem, ActionsheetItemText, CloseIcon, FavouriteIcon, Icon as ICON, ShareIcon, TrashIcon } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import {
  Alert,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Appbar, Avatar, Button, Icon, IconButton } from 'react-native-paper';
import { postComments, postLike } from '../../../api/sys/home';
import { postCommentsData, postLikeParam } from '../../../api/sys/home/types';
import { delPosts } from '../../../api/sys/post/index';
import WebViews from '../../../components/WebView/WebViewCompent';
import { navigate } from '../../../config/routs/NavigationContainer';
import webview from '../../../config/webview';
import StylesALL from '../../../styles';
import Colors from '../../../styles/Color';
import FontSize from '../../../styles/FontSize';
import DateTimeUtils from '../../../utils/DateTimeUtils';
import CommentDetails from './CommentDetails';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PostDetails = ({ route }: any) => {
  
  const commentsData: postCommentsData = {
    pageNo: 1,
    pageSize: 5,
    postsId: route.params.item.tid,
  };

  



  const [likeSelect1, setSelectLike1] = React.useState('0');
  
  const [inputUp, setInputUp] = React.useState(false);
  const [editable, setEditable] = React.useState(false);
  const [inputVal, setInputVal] = React.useState('');
  const textInputRef: any = React.useRef(null);
//  帖子id
  const [pid, setPid] = React.useState(0);
  console.log('postsId', route.params.item.tid);
 
    React.useEffect(() => {
      setPid(route.params.item.tid);
    },[]);
  
  
  
  const data = route.params.item;

  console.log('当前帖子数据-------->', route.params);
  
  const inputPress = (porp: number) => {
    if (porp == 1) {
      setEditable(true);
      textInputRef.current.focus();
    } else {
      setEditable(false);
      textInputRef.current.blur();
    }
  };


  
  const [postCommentsList, setPostCommentsList] = React.useState([]);
  const PostsCommentsData = async () => {
    const postCommentsAPI = await postComments(commentsData);
    setPostCommentsList(postCommentsAPI.data);
  };

  const ComLikePress = async (prop1: any, prop2: any) => {
    const comLikeParam: postLikeParam = {
      likeTime: 1396189015737,
      comId: prop2,
      postsId: 0,
      likeType: 1,
    };

    if (likeSelect == '0') {
      const comLikeUp = await postLike(comLikeParam);
      if (comLikeUp.data) {
        setSelectLike1('1');
        // setTlikeCount(tlikeCount+1)
      }
      console.log('点赞返回', comLikeUp);
    } else {
      setSelectLike1('0');
      // setTlikeCount(tlikeCount-1)
    }
  };

  // PostsCommentsData()
  React.useEffect(() => {
    PostsCommentsData();
  }, []); // 只在组件挂载时调用一次
  return (
    <><View style={styles.parentView}>
      <AppHeadView />
      <View style={styles.contentView}>
        <ScrollView style={styles.contentScroll}>
          <View style={[styles.postView,Colors.bWhite]}>
            <PostsHead props={data} />
            <PostsContent props={data} />
            <PostsContentFoot props={data} />
          </View>
          
          <View style={[styles.postComment,Colors.bWhite]}>
            <View style={styles.scrollView}>
              <Text allowFontScaling={false} style={[styles.commentTitle,FontSize.f18,Colors.f99]}>
                全部评论({postCommentsList})
              </Text>
              <CommentDetails commenData={postCommentsList} />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
      <View
        style={styles.commentBottom}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.commentInput,Colors.bf7f7, editable ? { display: 'none' } : null]}
          onPress={() => inputPress(1)}>
          <Text style={[styles.commentInputText,Colors.f77,FontSize.f14]}>
            {inputVal != '' ? inputVal : '说两句'}
          </Text>
        </TouchableOpacity>
        <TextInput
          ref={textInputRef}
          value={inputVal}
          autoFocus={editable}
          allowFontScaling={false}
          placeholder="说两句"
          cursorColor="#FABA3C"
          onChangeText={text => setInputVal(text)}
          onSubmitEditing={() => inputPress(0)}
          style={[styles.bottomTextInput,Colors.bf7f7, editable ? null : { display: 'none' }]} />
        <IconButton
          style={styles.commentInputImage}
          icon={require('../../../assets/images/send-icon.png')}
          onPress={() => console.log('点击发送')} />
      </View>
      <TouchableOpacity
        style={[styles.CommentBox,Colors.bBlack, editable ? null : { display: 'none' }]}
        onPress={() => inputPress(0)} />
    </>
  );
};

//导航栏
const AppHeadView = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false)
  const handleClose = () => setShowActionsheet(!showActionsheet);

  // 删除帖子
  const handleDel = async () => {
    const data = await delPosts(pid);
    console.log(data,'点击了删除按钮,删除了pid为'+pid);
    if(data.code == 200) {
      Alert.alert('删除成功');
     navigate('HomeStacker')
    }
    
    setShowActionsheet(!showActionsheet);
  };

  const tabFeatureData = [
    {
      id: 0,
      title:'删除',
      func: handleDel,
      icon: TrashIcon
    },
    {
      id: 1,
      title:'分享',
      func: handleClose,
      icon: ShareIcon
    },
    {
      id: 2,
      title:'喜欢',
      func: handleClose,
      icon: FavouriteIcon
    },
    {
      id: 3,
      title:'取消',
      func: handleClose,
      icon: CloseIcon
    }
  ]

  return (
    <Appbar.Header style={[styles.headerStyle,Colors.bfab]}>
        <Appbar.Action
          icon={require('../../../assets/images/chevron-left.png')}
          onPress={() => navigate('HomeStacker')} />
        <Text allowFontScaling={false} style={[styles.headerText,FontSize.f18,Colors.fWhite]}>
          <Trans>navigationBar.title18</Trans>
        </Text>
        <Appbar.Action
          icon={require('../../../assets/images/ellipsis_v.png')}
          onPress={handleClose} />
        <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
          <ActionsheetBackdrop />
          <ActionsheetContent maxHeight="$56" zIndex={999}>
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            {
              tabFeatureData.map(item => {
                return (
                  <ActionsheetItem onPress={item.func}>
                    <ActionsheetIcon>
                      <ICON size='sm' as={item.icon}/>
                    </ActionsheetIcon>
                    <ActionsheetItemText >{item.title}</ActionsheetItemText>
                  </ActionsheetItem>
                )
              })
            }
          </ActionsheetContent>
        </Actionsheet>
      </Appbar.Header>
  )
}

//布局head
const PostsHead = (item:any) =>{
    return(
      <View style={styles.postStyle}>
              <View style={styles.avatarView}>
                <Avatar.Image size={65} source={{ uri: item.props.upath }} accessibilityLabel='图片' />
              </View>
              <View style={styles.avatarConent}>
                <View style={styles.nameView}>
                  <Text allowFontScaling={false} style={[styles.nameText,Colors.fBlack,FontSize.f16]}>
                    {item.props.unikname}
                  </Text>
                  <View style={styles.tabStyle}>
                    <Icon
                      size={15}
                      color="#FFF"
                      source={require('../../../assets/images/alimom/sex_icon1.png')} />
                    <Text allowFontScaling={false} style={[styles.tabText,Colors.fWhite]}>
                      20
                    </Text>
                  </View>
                </View>
                <Text allowFontScaling={false} style={[styles.timeText,FontSize.f14,Colors.fbbb]}>
                  {DateTimeUtils.formattedDateTime(item.props.tlastTime,'HH:mm')}
                </Text>
              </View>
              <View style={styles.avatarButton}>
                <Button
                  style={[styles.avatarButtonStyle,Colors.bfab]}
                  labelStyle={[styles.avatarButtonText,Colors.fWhite,FontSize.f16]}
                  onPress={() => console.log('点击关注')}>
                  关注
                </Button>
              </View>
            </View>
    )
}

//内容
const PostsContent = (item:any) => {
  return(
    <View style={styles.postImage}>
        <PostsInfo props={item.props} />
    </View>
  )
}


const PostsInfo = (item:any) => {

  console.log(item.props)
  {/* 图片 + 文案 0 */}
  {/* 文案 1 */}
  {/* 视频 + 文案 2 */}
  {/* 音乐 + 文案 3  */}
  
  switch(item.props.ttype){
    case '0':{
      const [imgIndex,setImgIndex] = useState(0);
      const [imgFlag,setImgFlag] = useState(false);

      return(
        <>
          <Text allowFontScaling={false} style={[styles.postText,FontSize.f16,Colors.fBlack]}>
                {item.props.tcontext}
          </Text>
          <View style={{flexDirection:'row',flexWrap: 'wrap',marginLeft:20,marginTop:10,marginBottom:10}}>
            {
              item.props.imgs.map((items:any,index:any) => {
                return(
                  <TouchableOpacity style={{width:'30%',height:120,padding:2}} onPress={()=>{
                    setImgIndex(index);
                    setImgFlag(true);
                  }}>
                    <Image style={StylesALL.imgSize} source={{uri:items.url}} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
          {
            imgFlag && (<View style={{position:'absolute',flex:1,width:'100%',height:'100%'}}>
            <ImageViewer style={StylesALL.imgSize} imageUrls={item.props.imgs}/>
            </View>)
          }
          {/* <View style={{width:'100%', height:400}}>
            <ImageViewer style={StylesALL.imgSize} imageUrls={item.props.imgs}/>
          </View> */}
        </>
      )}
    case '1':
      return(
        <>
          <Text allowFontScaling={false} style={[styles.postText,FontSize.f16,Colors.fBlack]}>
                {item.props.tcontext}
          </Text>
        </>
      )
    case '2':
      return(
        <>
          <Text allowFontScaling={false} style={[styles.postText,FontSize.f16,Colors.fBlack]}>
                {item.props.tcontext}
          </Text>
          <View style={{marginLeft:20,marginTop:10}}>
            <WebViews uri={webview.ROOT_URL+webview.API.VIDEO} w={'90%'} h={200} />
          </View>
        </>
      )
    case '3':
      return(
        <>
          <Text allowFontScaling={false} style={[styles.postText,FontSize.f16,Colors.fBlack]}>
                {item.props.tcontext}
          </Text>
          <View style={{marginLeft:20,marginTop:10}}>
            <WebViews uri={webview.ROOT_URL + webview.API.MUSIC} h={80} w={'90%'} />
          </View>
        </>
      )
  }
}

//内容foot
const PostsContentFoot = (item:any) => {

  const [collectionSelect, setSelectCollection] = React.useState('0');
  const [transmitSelect, setSelectTransmit] = React.useState('0');
  const [likeSelect, setSelectLike] = React.useState('0');
  const [tlikeCount, setTlikeCount] = React.useState(
    item.props.tlikeCount,
  );

  const postLikeParam: postLikeParam = {
    likeTime: new Date().valueOf(),
    comId: 0,
    postsId: item.props.tid,
    likeType: 1,
  };
  
  const onSelectPress = (prop: number) => {
    if (prop == 1) {
      collectionSelect == '0'
        ? setSelectCollection('1')
        : setSelectCollection('0');
      console.log('返回值：', collectionSelect);
    } else if (prop == 3) {
      transmitSelect == '0' ? setSelectTransmit('1') : setSelectTransmit('0');
    }
  };

  const postLikePress = async () => {

    if (likeSelect == '0') {
      const postLikeUp = await postLike(postLikeParam);
      if (postLikeUp.data) {
        setSelectLike('1');
        setTlikeCount(tlikeCount + 1);
      }
      console.log('点赞返回', postLikeUp);

    } else {
      setSelectLike('0');
      setTlikeCount(tlikeCount - 1);
    }
  };

  return (
    <View style={styles.postBottom}>
              <Text allowFontScaling={false} style={[styles.postBottomText,FontSize.f16,Colors.f99]}>
                浏览记录 502
              </Text>
              <View style={styles.heartView}>
                <TouchableOpacity
                  onPress={() => onSelectPress(1)}>
                  <Icon
                    size={24}
                    color={collectionSelect == '1' ? '#FC073B' : '#ddd'}
                    source={require('../../../assets/images/Favorite.png')} />
                </TouchableOpacity>
                <Text allowFontScaling={false} style={[Colors.fdd,FontSize.f16]}>
                  2000
                </Text>
              </View>
              <View style={styles.heartView}>
                <TouchableOpacity
                  onPress={() => onSelectPress(3)}>
                  <Icon
                    size={24}
                    color={transmitSelect == '1' ? '#6A1B9A' : '#ddd'}
                    source={require('../../../assets/images/transmit_icon.png')} />
                </TouchableOpacity>
                <Text allowFontScaling={false} style={[Colors.fdd,FontSize.f16]}>
                  {' '}
                  {item.props.tforwardCount}
                </Text>
              </View>
              <View style={styles.heartView}>
                <TouchableOpacity
                  onPress={() => postLikePress()}>
                  <Icon
                    size={24}
                    color={likeSelect == '1' ? '#FABA3C' : '#ddd'}
                    source={require('../../../assets/images/Like-copy.png')} />
                </TouchableOpacity>
                <Text allowFontScaling={false} style={[Colors.fdd,FontSize.f16]}>
                  {tlikeCount}
                </Text>
              </View>
            </View>
  )
}

export default PostDetails;

const styles = StyleSheet.create({
  parentView: {
    // width: windowWidth,
    // height: windowHeight,
    position: 'relative',
  },
  headerStyle: {
    height: 45,
  },
  headerText: {
    width: '75%',
    textAlign: 'center',
  },
  contentView: {
    width: windowWidth,
    ...Platform.select({
      ios: {
        height: windowHeight -100,
      },
      android: {
        height: windowHeight - 90,
      },
    }),
  },
  contentScroll: {
    flex: 1,
  },
  postView: {
    width: windowWidth,
    height: 'auto',
    borderRadius: 20,
  },
  postStyle: {
    width: windowWidth,
    height: 70,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  avatarView: {
    width: '20%',
    height: 70,
    alignItems: 'flex-end',
    paddingTop: 3,
  },
  avatarConent: {
    width: '55%',
    height: 70,
    paddingLeft: 10,
  },
  nameView: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  nameText: {
    lineHeight: 40,
  },
  tabStyle: {
    width: 60,
    height: 24,
    borderRadius: 12,
    marginTop: 10,
    marginLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#FF65B8',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 3.5,
        backgroundColor: '#FF65B8',
      },
      android: {
        shadowColor: '#FF00FF',
        elevation: 9,
        borderColor: '#ff93cd',
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: '#ff74bf',
      },
    }),
  },
  tabText: {
    fontWeight: '600',
    lineHeight: 24,
    marginLeft: 2,
  },
  timeText: {
    height: 30,
  },
  avatarButton: {
    width: '20%',
    paddingTop: 10,
  },
  avatarButtonStyle: {
    width: 80,
    height: 32,
    borderRadius: 6,
  },
  avatarButtonText: {
    fontWeight: '600',
    lineHeight: 16,
  },
  postImage: {
    width: windowWidth,
    height: 'auto',
    paddingTop: 20,
  },
  postText: {
    lineHeight: 20,
    paddingLeft: 20,
    width:'95%'
  },
  postImageStyle: {
    width: '84%',
    height: 160,
    marginHorizontal: '8%',
    marginVertical: 5,
    borderRadius: 14,
  },
  postBottom: {
    width: windowWidth,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  postBottomText: {
    width: '48%',
    lineHeight: 50,
    paddingLeft: 20,
  },
  heartView: {
    width: '17%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  postComment: {
    width: windowWidth,
    height: 'auto',
    marginTop: 20,
    paddingBottom: 20,
  },
  scrollView: {
    width: windowWidth,
    height: '74%',
    paddingTop: 5,
  },
  commentTitle: {
    height: 40,
    fontWeight: '600',
    lineHeight: 40,
    paddingLeft: 20,
  },
  listStyle: {
    width: windowWidth,
    paddingTop: 5,
  },
  itemStyle: {
    width: windowWidth - 50,
    height: 'auto',
    marginTop: 5,
    marginHorizontal: 25,
  },
  commentAvatarView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  itemAvatar: {
    width: '20%',
    alignItems: 'center',
  },
  itemNameView: {
    width: '55%',
  },

  commentBottom: {
    width: windowWidth,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    paddingHorizontal: 25,
    position: 'absolute',
    bottom: 0,
    zIndex: 40,
    justifyContent: 'flex-start',
    ...Platform.select({
      ios: {
        height: 85,
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 2.5,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  commentInput: {
    width: '89%',
    height: 42,
    borderRadius: 20,
    marginVertical: 9,
    paddingHorizontal: 25
  },
  commentInputText: {
    lineHeight: 42,
  },
  commentInputImage: {
    width: 35,
    height: 35,
    marginVertical: 15,
    marginLeft: 11,
  },
  bottomTextInput: {
    width: '89%',
    height: 42,
    borderRadius: 20,
    marginVertical: 9,
    paddingHorizontal: 25,
    ...Platform.select({}),
  },
  CommentBox: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    zIndex: 20,
    opacity: 0.3,
  }
});

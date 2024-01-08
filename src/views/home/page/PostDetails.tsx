/**
 * 代码描述: 帖子详情页面
 * 作者:cxr
 * 创建时间:2023/11/23 17:58:11
 */

import React from "react";
import { View,Text,StyleSheet,Dimensions,Platform,TouchableOpacity,ScrollView,TextInput, KeyboardAvoidingView } from "react-native";
import { Image } from "react-native-animatable";
import {Appbar, Icon, IconButton, Avatar, Button} from 'react-native-paper';
import {navigate} from '../../../config/routs/NavigationContainer';
import {useTranslation, Trans} from 'react-i18next';
import {commentData} from '../mock/index'
import { dateToMsgTime } from "../../../components/Rests/TconTime";
import { WebView } from 'react-native-webview';
import {postComments,postLike} from '../../../api/sys/home'
import {postCommentsData,postLikeParam} from '../../../api/sys/home/types'
import Storage from "../../../utils/AsyncStorageUtils";
import CommentDetails from '../../../views/home/page/CommentDetails'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

// const listData = [{
//     index:1,
//     name:'佩奇',
//     time:'刚刚',
//     num:'2.0w',
//     image:require('../../../assets/images/avatar-nan.png'),
//     text:'抬头和你分享一个月亮就很美好',
//     itemData:[]
// },{
//     index:2,
//     name:'佩奇',
//     time:'刚刚',
//     num:'2.0w',
//     image:require('../../../assets/images/avatar-nan.png'),
//     text:'抬头和你分享一个月亮就很美好',
//     itemData:[{
//         index:1,
//         name:'咕子',
//         text:6
//     }]
// }]


const PostDetails = ({route}:any) => {
    console.log('postsId',route.params.item.tid)
    const commentsData: postCommentsData = {
        pageNo: 1,
        pageSize: 5,
        postsId: route.params.item.tid,
    };

    const postLikeParam:postLikeParam = {
        likeTime: new Date().valueOf(),
        comId: 0,
        postsId: route.params.item.tid,
        likeType: 1
    }
    const [inputVal,onInputPress] = React.useState('')
    const [collectionSelect,setSelectCollection] =  React.useState('0')
    const [likeSelect,setSelectLike] = React.useState('0')
    const [transmitSelect,setSelectTransmit] = React.useState('0')
    const [likeSelect1,setSelectLike1] = React.useState('0')
    const [tlikeCount,setTlikeCount] = React.useState(route.params.item.tlikeCount)
    const [inputUp,setInputUp] = React.useState(false)
    const [editable,setEditable] = React.useState(false)
    const textInputRef = React.useRef(null);
    const data = route.params.item

    console.log('单条帖子数据',route.params)
    const onSelectPress= (prop:number) => {
        if(prop == 1) {
            collectionSelect == '0' ? setSelectCollection('1'):setSelectCollection('0')
            console.log('返回值：',collectionSelect)
        } else if(prop == 3) {
            transmitSelect == '0' ? setSelectTransmit('1'):setSelectTransmit('0')
        }
        
    }

    const inputPress = (porp:number) => {
        if(porp == 1) {
            setInputUp(true)
            setEditable(true)
            // refs.textInputRefer.focus();
        } else {
            setInputUp(false)
            setEditable(false)
        }
    }

    const postLikePress = async () => {
        const tokenStr = await Storage.get('usr-token');
        if(likeSelect == '0') {
            if(tokenStr != null) {
                const postLikeUp = await postLike(tokenStr,postLikeParam);
                if(postLikeUp.data) {
                    setSelectLike('1')
                    setTlikeCount(tlikeCount+1)
                }
                console.log('点赞返回',postLikeUp)
              } else {
                return console.log('数据加载失败')
              }
        } else {
            setSelectLike('0')
            setTlikeCount(tlikeCount-1)
        }
    }
    const [postCommentsList,setPostCommentsList] = React.useState([])
    const PostsCommentsData = async () => {
        const tokenStr = await Storage.get('usr-token');
        console.log('tokenStr',tokenStr)
        if(tokenStr != null) {
            const postCommentsAPI = await postComments(tokenStr,commentsData);
            setPostCommentsList(postCommentsAPI.data)
        } else {
            return console.log('数据加载失败')
        }
    }

    const ComLikePress = async (prop1:any,prop2:any) => {
        const comLikeParam:postLikeParam = {
            likeTime: 1396189015737,
            comId: prop2,
            postsId: 0,
            likeType: 1
        }
        const tokenStr = await Storage.get('usr-token');
        if(likeSelect == '0') {
            if(tokenStr != null) {
                const comLikeUp = await postLike(tokenStr,comLikeParam);
                if(comLikeUp.data) {
                    setSelectLike1('1')
                    // setTlikeCount(tlikeCount+1)
                }
                console.log('点赞返回',comLikeUp)
            } else {
                return console.log('数据加载失败')
            }
        } else {
            setSelectLike1('0')
            // setTlikeCount(tlikeCount-1)
        }
    }

    // PostsCommentsData()
    React.useEffect(() => {
        PostsCommentsData()
      }, []); // 只在组件挂载时调用一次
    return(
        <View style={styles.parentView}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action
                    icon={require('../../../assets/images/chevron-left.png')}
                    onPress={() => navigate('HomeStacker')}
                />
                <Text allowFontScaling={false} style={styles.headerText}>
                    <Trans>navigationBar.title18</Trans>
                </Text>
                <Appbar.Action
                    icon={require('../../../assets/images/ellipsis_v.png')}
                />
            </Appbar.Header>
            <View style={styles.contentView}>
                <ScrollView style={styles.contentScroll}>
                    <View style={styles.postView}>
                        <View style={styles.postStyle}>
                            <View style={styles.avatarView}>
                                <Avatar.Image size={65} source={{uri:data.upath}}></Avatar.Image>
                            </View>
                            <View style={styles.avatarConent}>
                                <View style={styles.nameView}>
                                    <Text allowFontScaling={false} style={styles.nameText}>{data.unikname}</Text>
                                    <View style={styles.tabStyle}>
                                        <Icon size={15} color="#FFF" source={require('../../../assets/images/alimom/sex_icon1.png')}></Icon>
                                        <Text allowFontScaling={false} style={styles.tabText}>20</Text>
                                    </View>
                                </View>
                                <Text allowFontScaling={false} style={styles.timeText}>{dateToMsgTime(data.tlastTime)}</Text>
                            </View>
                            <View style={styles.avatarButton}>
                                <Button style={styles.avatarButtonStyle} labelStyle={styles.avatarButtonText} onPress={() => console.log('点击关注')}>关注</Button>
                            </View>
                        </View>
                        <View style={styles.postImage}>
                            <Text allowFontScaling={false} style={styles.postText}>{data.ttitle}</Text>
                            <WebView style={{height:150,width:windowWidth,marginHorizontal:30}} source={{html:data.tcontext}}></WebView>
                            {/* <Image style={styles.postImageStyle} source={require('../../../assets/images/alimom/R-C.jpg')}></Image> */}
                        </View>
                        <View style={styles.postBottom}>
                            <Text allowFontScaling={false} style={styles.postBottomText}>浏览记录   502</Text>
                            <View style={styles.heartView}>
                                <TouchableOpacity style={styles.heartIcon} onPress={() => onSelectPress(1)}>
                                    <Icon size={24} color={collectionSelect == '1' ? '#FC073B':'#ddd'} source={require('../../../assets/images/Favorite.png')}></Icon>
                                </TouchableOpacity>
                                <Text allowFontScaling={false} style={styles.heartText}> 2000</Text>
                            </View>
                            <View style={styles.heartView}>
                                <TouchableOpacity style={styles.heartIcon} onPress={() => onSelectPress(3)}>
                                    <Icon size={24} color={transmitSelect == '1'?'#6A1B9A':'#ddd'} source={require('../../../assets/images/transmit_icon.png')}></Icon>
                                </TouchableOpacity>
                                <Text allowFontScaling={false} style={styles.heartText}> {data.tforwardCount}</Text>
                            </View>
                            <View style={styles.heartView}>
                                <TouchableOpacity style={styles.heartIcon} onPress={() => postLikePress()}>
                                    <Icon size={24} color={likeSelect == '1' ? '#FABA3C':'#ddd'} source={require('../../../assets/images/Like-copy.png')}></Icon>
                                </TouchableOpacity>
                                <Text allowFontScaling={false} style={styles.heartText}> {tlikeCount}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.postComment}>
                        <View style={styles.scrollView}>
                            <Text allowFontScaling={false} style={styles.commentTitle}>全部评论({postCommentsList.length})</Text>
                            <CommentDetails commenData={postCommentsList}></CommentDetails>
                            {/* <View style={styles.listStyle}>
                                {postCommentsList.map(item => {
                                    return(
                                        <View style={styles.itemStyle} key={item.comId}>
                                            <View style={styles.commentAvatarView}>
                                                <View style={styles.itemAvatar}>
                                                    <Avatar.Image size={56} source={{uri:item.upath}}></Avatar.Image>
                                                </View>
                                                <View style={styles.itemNameView}>
                                                    <Text allowFontScaling={false} style={styles.itemName}>{item.unikname}</Text>
                                                    <Text allowFontScaling={false} style={styles.itemTime}>{dateToMsgTime(item.startTime)}</Text>
                                                </View>
                                                <View style={styles.itemIconView}>
                                                    <TouchableOpacity onPress={() => ComLikePress(item.comSupport,item.comId)}>
                                                        <Icon size={22} color={likeSelect1 == '0'?'#ddd':'#FABA3C'}  source={require('../../../assets/images/Like-copy.png')}></Icon>
                                                    </TouchableOpacity>
                                                    <Text allowFontScaling={false} style={styles.itemIconText}>  {item.comSupport}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.itemContent}>
                                                <Text allowFontScaling={false} style={styles.itemContentText}>{item.comContent}</Text>
                                                <View style={[styles.itemComment,item.coms.length == 0?{display:'none'}:null]}>
                                                    {item.coms.map((emeit:any) => {
                                                        return(
                                                            <Text allowFontScaling={false} style={styles.commentArea} key={emeit.comId}>
                                                                {emeit.unikname}:
                                                                <Text allowFontScaling={false} style={styles.commentAreaText}>  {emeit.comContent}</Text>
                                                            </Text>
                                                        )
                                                    })}
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View> */}
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={[styles.commentBottom,inputUp?styles.commentBottomUp:null]}>  
                    <TouchableOpacity activeOpacity={1} style={[styles.commentInput,inputUp?{display:'none'}:null]} onPress={() => inputPress(1)}>
                        <Text style={styles.commentInputText}>说两句</Text>
                    </TouchableOpacity>
                    <TextInput ref={textInputRef} autoFocus={editable} allowFontScaling={false} placeholder='说两句' cursorColor='#FABA3C' style={[styles.bottomTextInput,inputUp?null:{display:'none'}]}></TextInput>
                    <TouchableOpacity style={styles.bottomIconView}>
                        <Image style={styles.bottomIcon} source={require('../../../assets/images/3.0x/like.png')}></Image>
                    </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.CommentBox,inputUp?null:{display:'none'}]} onPress={() => inputPress(0)}></TouchableOpacity>
        </View>
    )
}

export default PostDetails;

const styles = StyleSheet.create({
    parentView: {
        width: windowWidth,
        height: windowHeight,
        position:'relative',
    },
    headerStyle: {
        height: 45,
        backgroundColor: '#faba3c',
    },
    headerText: {
        width: '75%',
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
    },
    contentView:{
        width:windowWidth,
        ...Platform.select({
            ios:{
                height:windowHeight-145,
            },
            android:{
                height:windowHeight-110,
            }
        })
    },
    contentScroll:{
        flex:1
    },
    postView:{
        width:windowWidth,
        height:'auto',
        borderRadius:20,
        backgroundColor:'#FFF',
    },
    postStyle:{
        width:windowWidth,
        height:70,
        marginTop:15,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    avatarView:{
        width:'20%',
        height:70,
        alignItems:'flex-end',
        paddingTop:3,
    },
    avatarConent:{
        width:'55%',
        height:70,
        paddingLeft:10,
    },
    nameView:{
        height:40,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    nameText:{
        fontSize:16,
        color:'#000',
        lineHeight:40
    },
    tabStyle:{
        width:60,
        height:24,
        borderRadius:12,
        marginTop:10,
        marginLeft:15,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        ...Platform.select({
            ios: {
              shadowColor: '#FF65B8',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 1,
              shadowRadius: 3.5,
              backgroundColor:'#FF65B8',
            },
            android: {
              shadowColor: '#FF00FF',
              elevation: 9,
              borderColor:'#ff93cd',
              marginHorizontal:15,
              marginVertical:10,
              backgroundColor:'#ff74bf'
              
            },
        }),
    },
    tabText:{
        color:'#FFF',
        fontWeight:'600',
        lineHeight:24,
        marginLeft:2,
    },
    timeText:{
        fontSize:13,
        height:30,
        color:'#bbb'
    },
    avatarButton:{
        width:'20%',
        paddingTop:10,
    },
    avatarButtonStyle:{
        width:80,
        height:32,
        borderRadius:6,
        backgroundColor:'#FABA3C'
    },
    avatarButtonText:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'600',
        lineHeight:16
    },
    postImage:{
        width:windowWidth,
        height:'auto',
        paddingTop:20,
    },
    postText:{
        height:30,
        fontSize:15,
        color:'#000',
        textAlign:"center",
        // paddingHorizontal:30,
        lineHeight:20
    },
    postImageStyle:{
        width:'84%',
        height:160,
        marginHorizontal:'8%',
        marginVertical:5,
        borderRadius:14,
    },
    postBottom:{
        width:windowWidth,
        height:50,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    postBottomText:{
        width:'48%',
        fontSize:15,
        color:'#999',
        lineHeight:50,
        paddingLeft:20,
    },
    heartIcon:{
    },
    heartView:{
        width:'17%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
    },
    heartText:{
        fontSize:15,
        color:'#ddd',
        // lineHeight:50,
    },
    postComment:{
        width:windowWidth,
        height:'auto',
        marginTop:20,
        paddingBottom:20,
        backgroundColor:'#FFF'
    },
    scrollView:{
        width:windowWidth,
        height:'74%',
        paddingTop:5,
    },
    commentTitle:{
        height:40,
        fontSize:17,
        color:'#000',
        fontWeight:'600',
        lineHeight:40,
        paddingLeft:20,
    },

    listStyle:{
        width:windowWidth,
        paddingTop:5,
    },
    itemStyle:{
        width:windowWidth-50,
        height:'auto',
        marginTop:5,
        marginHorizontal:25,
    },
    commentAvatarView:{
        width:'100%',
        height:60,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    itemAvatar:{
        width:'20%',
        alignItems:'center',
    },
    itemNameView:{
        width:'55%',
    },
    itemName:{
        fontSize:16,
        color:'#000',
        lineHeight:35
    },
    itemTime:{
        fontSize:13,
        color:'#aaa'
    },
    itemIconView:{
        width:'25%',
        paddingTop:15,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    itemIconText:{
        fontSize:15,
        color:'#ddd',
        lineHeight:25
    },
    itemContent:{
        marginLeft:'20%',
        marginRight:15,
        paddingBottom:10,
        borderBottomWidth:1,
        borderColor:'#aaa',
        // backgroundColor:'red'
    },
    itemContentText:{
        fontSize:15,
        color:'#000',
        marginTop:5,
        marginBottom:5
    },
    itemComment:{
        width:'100%',
        height:'auto',
        marginTop:5,
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:8,
        backgroundColor:'#F7F7FA'
    },
    commentArea:{
        fontSize:16,
        color:'#999',
        fontWeight:'600'
    },
    commentAreaText:{
        fontSize:14,
        color:'#000',
        fontWeight:'500',
    },


    commentBottom:{
        width:windowWidth,
        backgroundColor:'#FFF',
        flexDirection:'row',
        paddingHorizontal:25,
        // padding: 24,
        position:'absolute',
        bottom:0,
        zIndex:40,
        justifyContent:'flex-start',
        ...Platform.select({
            ios:{
                height:85,
                shadowColor: '#ddd',
                shadowOffset: {width: 0, height: 0},
                shadowOpacity: 1,
                shadowRadius: 2.5,
            },
            android:{
                height:70,
                elevation: 8,
            }
        }),
    },

    commentBottomUp:{
        bottom:280
    },

    commentInput:{
        width:'89%',
        height:42,
        borderRadius:20,
        marginVertical:9,
        paddingHorizontal:25,
        backgroundColor:'#F7F7FA',
    },
    commentInputText:{
        fontSize:14,
        color:'#777',
        lineHeight:42
    },
    bottomTextInput:{
        width:'89%',
        height:42,
        borderRadius:20,
        marginVertical:9,
        paddingHorizontal:25,
        backgroundColor:'#F7F7FA',
        ...Platform.select({
        })
    },
    bottomIconView:{
        paddingTop:15,
        marginLeft:10,
    },
    bottomIcon:{
        width:32,
        height:32
    },
    CommentBox:{
        position:'absolute',
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#000',
        zIndex:20,
        opacity: 0.3,
    }
})
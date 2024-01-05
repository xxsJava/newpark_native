/**
 * 代码描述: 帖子详情评论区
 * 作者:cxr
 * 创建时间:2024/1/03 18:27:11
 */

import React from "react";
import { View,Text,StyleSheet,Dimensions, TouchableOpacity } from "react-native";
import {Icon, IconButton, Avatar, Button} from 'react-native-paper';
import { dateToMsgTime } from "../../../components/Rests/TconTime";
import { postLikeParam } from "../../../api/sys/home/types";
import Storage from "../../../utils/AsyncStorageUtils";
import { postLike } from "../../../api/sys/home";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CommentDetails = ({commenData}: any) => {
    console.log('传递参数',commenData)
    const listData = commenData

    const [likeSelect1,setSelectLike1] = React.useState('0')
    const ComLikePress = async (prop1:any,prop2:any) => {
        const comLikeParam:postLikeParam = {
            likeTime: 1396189015737,
            comId: prop2,
            postsId: 0,
            likeType: 1
        }
        const tokenStr = await Storage.get('usr-token');
        if(likeSelect1 == '0') {
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
    return (
        <View>
           {listData.map((item:any) => {
              return (
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
        </View>
    )
}

export default CommentDetails;


const styles = StyleSheet.create({
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
        color:'#d d d',
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
})
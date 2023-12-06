/**
 * 代码描述: 发布商品页面  发布
 * 作者:cxr
 * 修改时间:2023/12/06 9:44:11
 */

import React from "react";
import { View,Text,StyleSheet,Dimensions,Platform,TouchableOpacity,TextInput } from "react-native";
import { Image } from "react-native-animatable";
import { Appbar,Avatar,IconButton,Button } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import {navigate} from '../../../../config/routs/NavigationContainer'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ReleasePost = () => {
    return(
        <View style={styles.parentView}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('HomeStacker')}></Appbar.Action>
                <Text style={styles.headerText}>发布帖子</Text>
            </Appbar.Header>
            <View style={styles.syncView}>
                <Image style={styles.syncImage} source={require('../../../../assets/images/3.0x/circle_icon.png')}></Image>
                <Text style={styles.syncText}>同步到牛圈</Text>
                <View style={styles.syncIconView}>
                    <Image style={styles.syncIcon1} source={require('../../../../assets/images/alimom/loading1.png')}></Image>
                    <Text style={styles.syncIconText}>python</Text>
                    <Text style={styles.syncIcon2}>
                        <Entypo size={15} name="chevron-thin-right"></Entypo>
                    </Text>
                </View>
            </View>
            <View style={styles.contentView}>
                <TextInput selectionColor='#FABA3C' placeholder='正文' multiline={true} numberOfLines={24} style={styles.contenInput}></TextInput>
                <View style={styles.bottomView}>
                    <View style={styles.tagView}>
                        <TouchableOpacity>
                            <Text style={styles.tagStyle}>#添加话题</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlStrip}>
                        <IconButton size={29} iconColor="#000" icon={require('../../../../assets/images/3.0x/chat_page_mico.png')} onPress={() => console.log('添加语音')}></IconButton>
                        <IconButton size={29} iconColor="#000" icon={require('../../../../assets/images/3.0x/chat_page_pic.png')} onPress={() => console.log('添加图片')}></IconButton>
                        <IconButton size={29} iconColor="#000" icon={require('../../../../assets/images/3.0x/chat_page_photo.png')} onPress={() => console.log('相机')}></IconButton>
                        <IconButton size={29} iconColor="#000" icon={require('../../../../assets/images/3.0x/chat_page_face.png')} onPress={() => console.log('添加表情')}></IconButton>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ReleasePost;

const styles = StyleSheet.create({
    parentView:{
        width:windowWidth,
        height:windowHeight
    },
    headerStyle:{
        backgroundColor:'#F2F2F2'
    },
    headerText:{
        width:'80%',
        height:45,
        fontSize:17,
        color:'#000',
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:45
    },
    syncView:{
        width:windowWidth,
        height:60,
        borderColor:'#bbb',
        borderBottomWidth:1,
        paddingHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    syncImage:{
        width:25,
        height:25,
        marginTop:19
    },
    syncText:{
        width:'52%',
        height:60,
        fontSize:16,
        color:'#000',
        fontWeight:'bold',
        lineHeight:60,
        paddingLeft:10,
    },
    syncIconView:{
        width:'40%',
        flexDirection:'row',
        justifyContent:'flex-end',
        // backgroundColor:'green'
    },
    syncIcon1:{
        width:35,
        height:35,
        marginTop:12.5,
    },
    syncIconText:{
        width:80,
        height:60,
        fontSize:15,
        color:'#F8B032',
        textAlign:'center',
        lineHeight:60,
    },
    syncIcon2:{
        height:60,
        lineHeight:64,
    },
    contentView:{
        width:windowWidth,
        position:'relative',
        ...Platform.select({
            ios:{
                height:windowHeight-170,
            },
            android:{
                height:windowHeight-120,
            }
        }),
        // backgroundColor:'red'
    },
    textInput:{

    },
    contenInput:{
        width:windowWidth,
        paddingVertical:10,
        paddingHorizontal:15,
        textAlignVertical:'top',
        // backgroundColor:'red',
        ...Platform.select({
            ios:{
                height:windowHeight-340,
            },
            android:{
                // height:windowHeight-260,
            }
        })
    },
    bottomView:{
        bottom:0,
        position:'absolute',
    },
    tagView:{
        width:windowWidth,
        height:50,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    tagStyle:{
        width:90,
        height:40,
        fontSize:14,
        color:'#222',
        borderRadius:12,
        textAlign:'center',
        lineHeight:40,
        backgroundColor:'#F4EBFF'
    },
    controlStrip:{
        width:windowWidth,
        flexDirection:'row',
        justifyContent:'space-around',
        // backgroundColor:'green',
        ...Platform.select({
            ios:{
                height:100,
            },
            android:{
                height:80,
            }
        })
    }
})
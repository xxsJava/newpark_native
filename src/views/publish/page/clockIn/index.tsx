/**
 * 代码描述: 打卡页面  发布
 * 作者:cxr
 * 修改时间:2023/12/06 16:04:11
 */

import React from "react";
import { View,Text,StyleSheet,Dimensions,SafeAreaView,Platform,ScrollView,Image,TouchableOpacity } from "react-native";
import { Appbar,Avatar,IconButton,Button,Icon } from 'react-native-paper';
import { SharedTransition } from "react-native-reanimated";
import {navigate} from '../../../../config/routs/NavigationContainer'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ClockInView = () => {
    return(
        <SafeAreaView style={styles.parentView}>
            <View style={styles.headView}>
                <IconButton size={22} iconColor='#000' icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('HomeStacker')}></IconButton>
            </View>
            <View style={styles.contentView}>
                <ScrollView style={styles.scrollStyle}>
                    <View style={styles.avatarView}>
                        <View style={styles.avatarFrame}>
                            <Image style={styles.avatarImage} source={require('../../../../assets/images/defaultheader.png')}></Image>
                        </View>
                        <View style={styles.avatarTextView1}>
                            <Text style={styles.avatarText}>姓名:小学牛</Text>
                        </View>
                        <View style={styles.avatarTextView2}>
                            <Text style={styles.avatarText}>社区:2401班</Text>
                        </View>
                        <View style={styles.ruleView}>
                            <Image style={styles.ruleIcon} source={require('../../../../assets/images/help_icon.png')}></Image>
                            <Text style={styles.ruleText}> 查看打卡规则</Text>
                        </View>
                    </View>
                    <View style={styles.bgStyle}>
                        <View style={styles.timeView}>
                            <View style={styles.checkTimeView}>
                                <Text style={styles.checkTimeStyle}>上午考勤08:00</Text>
                                <View style={[styles.checkTextView,styles.notFinishedColor]}>
                                    <Image style={styles.checkIcon} source={require('../../../../assets/images/alimom/close_icon.png')}></Image>
                                    <Text style={[styles.checkText,styles.checkTextColor1]}>未打卡</Text>
                                </View>
                            </View>
                            <View style={styles.checkTimeView}>
                                <Text style={styles.checkTimeStyle}>下午考勤18:00</Text>
                                <View style={[styles.checkTextView,styles.finishedColor]}>
                                    <Image style={styles.checkIcon} source={require('../../../../assets/images/alimom/correct1_icon.png')}></Image>
                                    <Text style={[styles.checkText,styles.checkTextColor2]}>已打卡</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.promptText}>小提示:到了管理员设置的指定位置方可打卡</Text>
                        <View style={styles.imageView}>
                            <Text style={styles.imageTime}>17:31:49</Text>
                            <View style={styles.imageBg}>
                                <Image style={styles.imageStyle} source={require('../../../../assets/gif/Animation2.gif')}></Image>
                            </View>
                            <Text style={styles.imageText}>考勤打卡</Text>
                        </View>
                        <View style={styles.addressView}>
                            <Image style={styles.addressIcon} source={require('../../../../assets/images/alimom/place-icon.png')}></Image>
                            <Text style={styles.addressText}>山东省滨州市博兴县博昌街道致泰广场</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.6} style={[styles.buttonStyle,styles.buttonColor1]}>
                            <Image style={styles.buttonIcon} source={require('../../../../assets/images/2.0x/takepicforheader.png')}></Image>
                            <Text style={styles.buttonText}>拍照打卡</Text>
                        </TouchableOpacity>
                        <View style={styles.promptView}>
                            <Image style={styles.promptImage} source={require('../../../../assets/gif/Animation1.gif')}></Image>
                            <View style={styles.promptTextView}>
                                <Text style={styles.promptText1}>您还不在管理员设置的打卡范围内</Text>
                                <Text style={styles.promptText2}>如需打卡请检查打卡范围</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default ClockInView;

const styles = StyleSheet.create({
    parentView:{
        width:windowWidth,
        height:windowHeight,
    },
    headView:{
        height:40,
        paddingLeft:5,
        paddingTop:15,
        // backgroundColor:'red'
    },
    contentView:{
        width:windowWidth,
        // backgroundColor:'green',
        ...Platform.select({
            ios:{
                height:windowHeight-80,
            },
            android:{
                height:windowHeight-30,
            }
        })
    },
    scrollStyle:{
        flex:1,
        position:'relative',
    },
    avatarView:{
        width:windowWidth,
        height:100,
        top:-15,
        alignItems:'center',
        position:'absolute',
        // backgroundColor:'red',
        zIndex:20
    },
    avatarFrame:{
        width:110,
        height:110,
        borderRadius:55,
        marginTop:15,
        alignItems:'center',
        backgroundColor:'#6A1B9A'
    },
    avatarImage:{
        width:90,
        height:90,
        borderRadius:45,
        marginTop:10
    },
    avatarTextView1:{
       width:100,
       alignItems:'flex-start',
       position:'absolute',
       borderColor:'#6A1B9A',
       paddingRight:10,
       borderBottomWidth:1,
       ...Platform.select({
            ios:{
                top:36,
                left:60,
            },
            android:{
                top:35,
                left:51,
            }
       })
    },
    avatarTextView2:{
       width:120,
       alignItems:'flex-end',
       position:'absolute',
       borderColor:'#6A1B9A',
       borderBottomWidth:1,
       ...Platform.select({
            ios:{
                bottom:0,
                right:52,
            },
            android:{
                bottom:0,
                right:47,
            }
       })
    },
    avatarText:{
       fontSize:16,
       color:'#000',
       fontWeight:'bold',
       paddingVertical:4,
    },
    ruleView:{
        top:30,
        right:18,
        height:40,
        position:'absolute',
        flexDirection:'row',
        justifyContent:'center'
    },
    ruleText:{
        fontSize:14,
        color:'#EC3656',
        lineHeight:23,
    },
    ruleIcon:{
        width:22,
        height:22,
    },
    bgStyle:{
        width:windowWidth-20,
        marginTop:50,
        marginBottom:25,
        marginHorizontal:10,
        borderRadius:14,
        backgroundColor:'#fff',
        ...Platform.select({
            ios:{
                height:windowHeight-170,
            },
            android:{
                height:'auto',
            }
        })
    },
    timeView:{
        width:'94%',
        height:90,
        marginTop:75,
        marginHorizontal:'3%',
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:'red'
    },
    checkTimeView:{
        width:'45%',
        // backgroundColor:'green'
    },
    checkTimeStyle:{
        width:'100%',
        height:54,
        fontSize:19,
        color:'#000',
        lineHeight:54,
        paddingLeft:8,
        borderTopLeftRadius:16,
        backgroundColor:'#EFEBFA'
    },
    checkTextView:{
        height:30,
        borderLeftWidth:3,
        paddingLeft:20,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    finishedColor:{
        borderColor:'#26C78C'
    },
    notFinishedColor:{
        borderColor:'#FABA3C'
    },
    checkIcon:{
        width:20,
        height:20,
        marginTop:6
    },
    checkText:{
        width:80,
        height:30,
        fontSize:15,
        textAlign:'center',
        lineHeight:30,
    },
    checkTextColor1:{
        color:'#EC3656'
    },
    checkTextColor2:{
        color:'#26C78C'
    },
    promptText:{
        height:60,
        fontSize:15,
        color:'#ccc',
        lineHeight:60,
        textAlign:'center'
    },
    imageView:{
        width:'100%',
        height:200,
        alignItems:'center',
        marginTop:10,
        // backgroundColor:'red'
    },
    imageTime:{
        height:30,
        fontSize:17,
        color:'#ccc',
        lineHeight:30,
        textAlign:'center'
    },
    imageBg:{
        width:140,
        height:140,
        borderRadius:70,
        backgroundColor:'#EFEBFA'
    },
    imageStyle:{
        width:150,
        height:150,
        borderRadius:75
    },
    imageText:{
        height:40,
        fontSize:17,
        color:'#000',
        fontWeight:'bold',
        lineHeight:40,
        textAlign:'center'
    },
    addressView:{
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        // backgroundColor:'green'
    },
    addressIcon:{
        width:25,
        height:25,
        marginTop:12,
        marginRight:10
    },
    addressText:{
        height:50,
        fontSize:14,
        color:'#ccc',
        lineHeight:50,
    },
    buttonStyle:{
        width:'80%',
        height:56,
        borderRadius:28,
        marginTop:30,
        marginHorizontal:'10%',
        flexDirection:'row',
        justifyContent:'center',
    },
    buttonColor1:{
        backgroundColor:'#26C78C'
    },
    buttonColor2:{
        backgroundColor:'#EC3656'
    },
    buttonIcon:{
        width:25,
        height:25,
        marginTop:15,
        marginRight:5
    },
    buttonText:{
        fontSize:17,
        color:'#fff',
        fontWeight:'bold',
        lineHeight:56
    },
    promptView:{
        height:90,
        marginTop:30,
        marginBottom:40,
        marginHorizontal:15,
        borderRadius:14,
        position:'relative',
        backgroundColor:'#EFEBFA',
    },
    promptImage:{
        width:100,
        height:110,
        top:-12,
        left:-12,
        position:'absolute',
        zIndex:10
    },
    promptTextView:{
        paddingTop:5,
        paddingLeft:50
    },
    promptText1:{
        fontSize:17,
        color:'#000',
        fontWeight:'bold',
        lineHeight:50,
        textAlign:'center'
    },
    promptText2:{
        fontSize:15,
        color:'#000',
        lineHeight:20,
        textAlign:'center'
    }
})
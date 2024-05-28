/**
 * 代码描述: 悬赏详情页 帮忙圈悬赏
 * 作者:cxr
 * 创建时间:2023/12/11 14:54:11
 */

import React, { useState } from "react";
import { Trans } from 'react-i18next';
import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Appbar, Button, Icon } from 'react-native-paper';
import { navigate } from '../../../../config/routs/NavigationContainer';
import DateTimeUtils from '../../../../utils/DateTimeUtils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RewardDetails = ({route}:any) => {
    const [standing,setStanding] = React.useState(2)
    const [status,setStatus] = useState(2);
    // setStatus(3);
    console.log(route,'这个是跳转过来的数据-----');
    const data = route.params.item
    console.log('data数据',data);
    // 这个是为了看悬赏的状态测试的
    React.useEffect(() => {
        setStatus(1)
    },[])
    return(
        <View style={styles.parentLevel}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('HelpCircleRoute')}></Appbar.Action>
                <Text allowFontScaling={false} style={styles.headerText}>
                    <Trans>navigationBar.title25</Trans>
                </Text>
                <Appbar.Action icon={require('../../../../assets/images/3.0x/ellipsis_v.png')}></Appbar.Action>
            </Appbar.Header>
            <View style={styles.scrollView}>
                <ScrollView style={styles.scrollStyle}>
                    <View style={styles.contentView}>
                        <View style={styles.informationView}>
                            <View style={styles.avatarView}>
                                <View style={styles.avatarStyle}></View>
                                <Image style={styles.vipImage} source={require('../../../../assets/images/alimom/V1.png')} accessibilityLabel='图片' alt="头像"></Image>
                            </View>
                            <View style={styles.nameView}>
                                <Text allowFontScaling={false} style={styles.nameText}>小学牛</Text>
                                <Text allowFontScaling={false} style={styles.timeText}>{DateTimeUtils.formattedDateTime(data.startTime - data.endTime,'HH:mm')}</Text>
                            </View>
                            <View style={styles.statusView}>
                                <View style={[styles.statusStyle,styles.statusColor1]}>
                                <Text allowFontScaling={false} style={status == 1 ? styles.statusText : {display:'none'}}>发布</Text>
                                <Text allowFontScaling={false} style={status == 2 ? styles.statusText : {display:'none'}}>进行中</Text>
                                <Text allowFontScaling={false} style={status == 3 ? styles.statusText : {display:'none'}}>完成</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.contcentTextView}>
                            <Text allowFontScaling={false} style={styles.contcentText1}>{data.rtitle}</Text>
                            <View style={styles.moneyView}>
                                <View style={styles.moneyIcon}>
                                    <Icon color="#FABA3C" size={32} source={require('../../../../assets/images/coins-icon.png')}></Icon>
                                </View>
                                <Text allowFontScaling={false} style={styles.sumText}>2.<Text style={{fontSize:13}}>50</Text></Text>
                            </View>
                        </View>
                        

                       <View style={{padding:20,margin:12,backgroundColor:'#FABA3C',borderRadius:12}}>
                       <View style={{backgroundColor:'#fff',borderRadius:12,}}>
                       <View style={{justifyContent:'space-between',width:'100%',alignItems:'center',padding:8,flexDirection:'row'}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <View>
                                    <Image source={require('../../../../assets/images/tup/ppy.png')} style={{width:45,height:45,borderRadius:90}}></Image>
                                </View>
                                <View style={{flexDirection:'column',marginLeft:8}}>
                                    <View>
                                        <Text>刘毅</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{fontSize:10}}>百夫长 ｜ 渚天府 </Text>
                                        <Text style={{fontSize:10,marginLeft:4}}>采纳率</Text>
                                        <Text style={{fontSize:10,color:'red',marginLeft:2}}>90%</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
                                <View>
                                    <Text style={{color:'red',fontSize:16}}>¥50</Text>
                                </View>
                                <View>
                                    <Text style={{color:'red',fontSize:13}}>悬赏金额</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{padding:12}}>
                                <Text style={{fontSize:13,padding:4}}>
                                    什么是白狼府  什么是白狼府 什么是白狼府 什么是白狼府 什么是白狼府 什么是白狼府
                                    什么是白狼府 什么是白狼府 什么是白狼府 什么是白狼府 什么是白狼府 什么是白狼府
                                    什么是白狼府 什么是白狼府 什么是白狼府 什么是白狼府 什么是白狼府 什么是白狼府
                                    什么是白狼府 什么是白狼府 什么是白狼府 什么是白狼府 什么是白狼府 什么是白狼府
                                </Text>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{backgroundColor:'#eee',padding:3,borderRadius:3,marginHorizontal:6}}>
                                        <Text style={{color:'#999',fontSize:11}}>#国家#</Text>
                                    </View>
                                    <View style={{backgroundColor:'#eee',padding:3,borderRadius:3,marginHorizontal:6}}>
                                        <Text style={{color:'#999',fontSize:11}}>#人才#</Text>
                                    </View>
                                    <View style={{backgroundColor:'#eee',padding:3,borderRadius:3,marginHorizontal:6}}>
                                        <Text style={{color:'#999',fontSize:11}}>#采购#</Text>
                                    </View>
                                </View>
                        </View>
                       </View>
                       </View>
                       
                        <Text allowFontScaling={false} style={styles.schollText}>湖南长沙理工大学</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={{width:windowWidth,alignItems:"center",justifyContent:'center',height:200}}>
                    <Button style={standing == 1 ? styles.buttonStyle : {display:'none'}} labelStyle={styles.buttonText} onPress={() => navigate('ProductChatRoute')}>联系发单人</Button>
                    <View style={standing == 2 ? {flexDirection:'row'}: {display:'none'}}>
                        <TouchableOpacity style={{height:40,width:'35%',backgroundColor:'#fff',borderTopLeftRadius:30,borderBottomLeftRadius:30}}>
                            <Text style={{color:'red',textAlign:'center',lineHeight:40,fontWeight:'bold',fontSize:15}}>撤销任务</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:40,width:'35%',backgroundColor:'red',borderTopRightRadius:30,borderBottomEndRadius:30}}>
                            <Text style={{color:'#fff',textAlign:'center',lineHeight:40,fontWeight:'bold',fontSize:15}}>分享</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

export default RewardDetails;

const styles = StyleSheet.create({
    parentLevel:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#EFEBFA'
    },
    headerStyle:{
        width:windowWidth,
        height:50,
        backgroundColor:'#FABA3C'
    },
    headerText:{
        width:'75%',
        fontSize:18,
        color:'#fff',
        textAlign:'center'
    },
    scrollView:{
        width:windowWidth,
        ...Platform.select({
            ios:{
                height:windowHeight-200,
            },
            android:{
                height:windowHeight-200,
            }
        })
    },
    scrollStyle:{
        flex:1
    },
    contentView:{
        width:windowWidth,
        height:'auto',
        paddingBottom:5,
        borderBottomLeftRadius:18,
        borderBottomRightRadius:18,
        backgroundColor:'#fff',
    },
    informationView:{
        width:windowWidth,
        height:90,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    avatarView:{
        width:'22%',
        height:90,
        position:'relative',
        alignItems:'center'
    },
    avatarStyle:{
        width:66,
        height:66,
        borderRadius:33,
        borderColor:'#aaa',
        borderWidth:1,
        marginTop:15
    },
    vipImage:{
        width:25,
        height:25,
        bottom:8,
        right:8,
        position:'absolute'
    },
    nameView:{
        width:'55%',
        paddingVertical:15,
        paddingHorizontal:10,
        // backgroundColor:'orange'
    },
    nameText:{
        fontSize:17,
        color:'#000',
        fontWeight:'bold',
        lineHeight:40
    },
    statusView:{
        width:'23%',
        paddingTop:10,
        alignItems:'flex-end',
        // backgroundColor:'pink'
    },
    timeText:{
        fontSize:14,
        color:'#bbb',
        lineHeight:30
    },
    statusStyle:{
        width:90,
        height:40,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
    },
    statusColor1:{
        backgroundColor:'#F67C8F'
    },
    statusText:{
        fontSize:17,
        color:'#fff',
        textAlign:'center',
        lineHeight:40,
    },
    contcentTextView:{
        width:windowWidth,
        height:50,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    contcentText1:{
        fontSize:16,
        color:'#000',
        fontWeight:'bold',
        lineHeight:50
    },
    moneyView:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    moneyIcon:{
        paddingTop:10,
        marginRight:4
    },
    sumText:{
        fontSize:19,
        color:'#ED405E',
        lineHeight:50
    },
    schollText:{
        fontSize:14,
        color:'#bbb',
        lineHeight:30,
        textAlign:'center',
        marginTop:30,
        marginBottom:20
    },
    buttonStyle:{
        width:'70%',
        height:45,
        borderRadius:25,
        marginTop:40,
        marginBottom:20,
        marginHorizontal:'15%',
        backgroundColor:'#FABA3C'
    },
    buttonText:{
        fontSize:16,
        color:'#fff',
        fontWeight:'bold',
        lineHeight:25
    }
})
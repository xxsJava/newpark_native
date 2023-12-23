/**
 * 代码描述: 悬赏详情页 帮忙圈悬赏
 * 作者:cxr
 * 创建时间:2023/12/11 14:54:11
 */

import React from "react";
import { View,Text,StyleSheet,Dimensions,Platform,Image, ScrollView,TouchableOpacity,TextInput } from "react-native";
import {Appbar, Icon, IconButton, Avatar, Button} from 'react-native-paper';
import {navigate} from '../../../../config/routs/NavigationContainer'
import {useTranslation, Trans} from 'react-i18next';
import StepBar from '../StepBar'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RewardDetails = () => {
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
                                <Image style={styles.vipImage} source={require('../../../../assets/images/alimom/V1.png')}></Image>
                            </View>
                            <View style={styles.nameView}>
                                <Text allowFontScaling={false} style={styles.nameText}>小学牛</Text>
                                <Text allowFontScaling={false} style={styles.timeText}>刚刚</Text>
                            </View>
                            <View style={styles.statusView}>
                                <View style={[styles.statusStyle,styles.statusColor1]}>
                                    <Text allowFontScaling={false} style={styles.statusText}>未结算</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.contcentTextView}>
                            <Text allowFontScaling={false} style={styles.contcentText1}>去校门口拿个快递在</Text>
                            <View style={styles.moneyView}>
                                <View style={styles.moneyIcon}>
                                    <Icon color="#FABA3C" size={32} source={require('../../../../assets/images/coins-icon.png')}></Icon>
                                </View>
                                <Text allowFontScaling={false} style={styles.sumText}>2.<Text style={{fontSize:13}}>50</Text></Text>
                            </View>
                        </View>
                        <View style={styles.detailsView}>
                            <View style={styles.detailsTop}>
                                <View style={styles.addressTitle}>
                                    <Image style={styles.addressImage}  source={require('../../../../assets/images/alimom/fk.png')}></Image>
                                    <Text allowFontScaling={false} style={styles.addressText}>悬赏地址</Text>
                                </View>
                                <View style={styles.addressTitle}>
                                    <Image style={styles.addressImage}  source={require('../../../../assets/images/location_icon.png')}></Image>
                                    <Text allowFontScaling={false} style={styles.addressText}>送达地址</Text>
                                </View>
                            </View>
                            <View style={styles.addressView}>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <Text allowFontScaling={false} style={styles.addressText1}>点击查看悬赏地址</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <Text allowFontScaling={false} style={styles.addressText1}>点击查看送达地址</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.remarksView}>
                                <Text allowFontScaling={false} style={styles.remarksTitle}>备注</Text>
                                <TextInput allowFontScaling={false} style={styles.remarksInput} selectionColor='#FABA3C' placeholder='小件/取件码/接单可查看具体信息' autoCorrect={false}></TextInput>
                            </View>
                            <View style={[styles.remarksView,{marginTop:5}]}>
                                <Text allowFontScaling={false} style={styles.remarksTitle}>完成时限</Text>
                                <TextInput allowFontScaling={false} style={styles.remarksInput} selectionColor='#FABA3C' placeholder='半个小时后' autoCorrect={false}></TextInput>
                            </View>
                        </View>
                        <View style={styles.takingOrders}>
                            <Text allowFontScaling={false} style={styles.takingOrdersText1}>接单人信息:</Text>
                            <TouchableOpacity activeOpacity={0.5}>
                                <Text allowFontScaling={false} style={styles.takingOrdersText2}>点击查看</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.lineView}>
                            <View style={styles.lineStyle}></View>
                            <Text allowFontScaling={false} style={styles.lineText}>订单状态</Text>
                            <View style={styles.lineStyle}></View>
                        </View>
                        <View style={styles.stepBarView}>
                            <StepBar></StepBar>
                        </View>
                        <Text allowFontScaling={false} style={styles.schollText}>湖南长沙理工大学</Text>
                    </View>
                    <Button style={styles.buttonStyle} labelStyle={styles.buttonText} onPress={() => navigate('TakeOrderPartRoute')}>联系接单人</Button>
                </ScrollView>
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
                height:windowHeight-90,
            },
            android:{
                height:windowHeight-55,
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
        justifyContent:'space-between',
        // backgroundColor:'green'
    },
    avatarView:{
        width:'22%',
        height:90,
        position:'relative',
        alignItems:'center',
        // backgroundColor:'yellow'
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
    statusColor2:{
        backgroundColor:'#76D7AD'
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
        justifyContent:'space-between',
        // backgroundColor:'green'
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
    detailsView:{
        width:windowWidth-30,
        height:280,
        marginTop:20,
        marginHorizontal:15,
        borderRadius:10,
        backgroundColor:'#F1F1F1'
    },
    detailsTop:{
        width:'100%',
        height:50,
        marginTop:20,
        paddingHorizontal:30,
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    addressTitle:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    addressImage:{
        width:26,
        height:26,
        marginTop:10
    },
    addressText:{
        fontSize:14,
        color:'#000',
        lineHeight:50
    },
    addressView:{
        height:30,
        paddingHorizontal:25,
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:'red'
    },
    addressText1:{
        fontSize:14,
        color:'#008ACC',
        lineHeight:30,
        textDecorationLine: 'underline'
    },
    remarksView:{
        width:'100%',
        height:70,
        marginTop:20,
        paddingHorizontal:25,
        // backgroundColor:'pink'
    },
    remarksTitle:{
        fontSize:14,
        color:'#000',
        fontWeight:'bold',
        lineHeight:25
    },
    remarksInput:{
        height:40,
        paddingHorizontal:10,
        // backgroundColor:'yellow'
    },
    takingOrders:{
        width:windowWidth-30,
        height:50,
        marginTop:15,
        marginHorizontal:15,
        borderColor:'#5CD1A1',
        borderLeftWidth:2,
        // backgroundColor:'pink',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    takingOrdersText1:{
        fontSize:16,
        color:'#000',
        lineHeight:50,
        marginLeft:15
    },
    takingOrdersText2:{
        fontSize:14,
        color:'#008ACC',
        lineHeight:50,
        marginLeft:15,
        textDecorationLine: 'underline'
    },
    lineView:{
        width:windowWidth,
        height:40,
        marginTop:20,
        paddingHorizontal:40,
        flexDirection:'row',
        justifyContent:'center',
        // backgroundColor:'pink'
    },
    lineStyle:{
        width:100,
        height:1,
        borderColor:'#bbb',
        borderBottomWidth:1,
        marginTop:20,
        marginHorizontal:15
    },
    lineText:{
        fontSize:14,
        color:'#000',
        fontWeight:'bold',
        lineHeight:40
    },
    stepBarView:{
        marginTop:30
    },
    schollText:{
        fontSize:14,
        color:'#bbb',
        lineHeight:30,
        textAlign:'center',
        marginTop:30
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
/**
 * 代码描述: 邀请好友页面  个人中心
 * 作者:cxr
 * 修改时间:2024/1/09 10:23:11
 */

import React, { Component } from "react";
import { View,Text,StyleSheet,Dimensions,ImageBackground,Platform,Image,TouchableOpacity } from "react-native";
import { Appbar,Avatar,IconButton,Tooltip,Button } from 'react-native-paper';
import {useTranslation, Trans} from 'react-i18next';
import { navigate } from "../../../../config/routs/NavigationContainer";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InviteFriends = () => {
    return (
        <View style={styles.parentView}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('MineStacker')}/>
                <Text allowFontScaling={false} style={styles.headerText}>
                    <Trans>minService.serviceOption9</Trans>
                </Text>
            </Appbar.Header>
            <ImageBackground style={styles.bgStyle} source={require('../../../../assets/images/alimom/InvitationPoster.jpg')}>
                <View style={styles.reminderView}>
                    <View style={styles.reminderItem}>
                        <Image style={styles.reminderImage} source={require('../../../../assets/images/expression-icon.png')}></Image>
                        <Text style={styles.reminderText}>邀请码可多人使用</Text>
                    </View>
                    <View style={styles.reminderItem}>
                        <Image style={styles.reminderImage} source={require('../../../../assets/images/expression-icon.png')}></Image>
                        <Text style={styles.reminderText}>复制邀请码发送给好友</Text>
                    </View>
                    <View style={styles.reminderItem}>
                        <Image style={styles.reminderImage} source={require('../../../../assets/images/expression-icon.png')}></Image>
                        <Text style={styles.reminderText}>邀请的好友登录后可领取一周的VIP</Text>
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={1}>
                        <Image style={styles.buttonStyle} source={require('../../../../assets/images/alimom/yqhy_icon.jpg')}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default InviteFriends;

const styles = StyleSheet.create({
    parentView: {
        width: windowWidth,
        height: windowHeight,
    },
    headerStyle: {
        width: windowWidth,
        height: 45,
        backgroundColor: '#FFB300',
    },
    headerText: {
        width: '80%',
        fontSize: 17,
        color: '#FFF',
        lineHeight: 45,
        textAlign: 'center',
    },
    bgStyle:{
        width:windowWidth,
        position:'relative',
        ...Platform.select({
            ios:{
                height:windowHeight - 90,
            },
            android:{
                height:windowHeight - 45,
            }
        })
    },
    reminderView:{
        width:320,
        height:150,
        bottom:110,
        left:(windowWidth-330)/2,
        borderRadius:20,
        paddingVertical:15,
        position:'absolute',
        backgroundColor:'#FEFA83'
    },
    reminderItem:{
        width:'80%',
        height:35,
        marginBottom:5,
        marginHorizontal:'10%',
        // backgroundColor:'pink',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    reminderImage:{
        width:21,
        height:21,
        marginVertical:7,
        marginRight:10
    },
    reminderText:{
        fontSize:14,
        color:'#000',
        lineHeight:35

    },
    buttonView:{
        width:150,
        height:70,
        bottom:20,
        left:(windowWidth-160)/2,
        position:'absolute',
        // backgroundColor:'pink'
    },
    buttonStyle:{
        ...Platform.select({
            ios: {
                shadowColor: '#DDD', //设置阴影色
                shadowOffset: {width: 0, height: 3}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
                shadowOpacity: 1,
                shadowRadius: 4, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
              },
              android: {
                elevation: 7,
              },
        })
    }
})
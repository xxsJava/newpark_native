/**
 * 代码描述: 悬赏进行中-接单人页面 悬赏详情
 * 作者:cxr
 * 创建时间:2023/12/12 14:23:11
 */

import React from "react";
import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Appbar, Avatar, Button } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TakeOrderPart = ({ navigation }:any) => {
    return(
        <View style={styles.parentLevel}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigation.goBack()}></Appbar.Action>
                <TouchableOpacity style={{marginRight:10}}>
                    <Image source={require('../../../../assets/images/order_kefu.png')}></Image>
                </TouchableOpacity>
            </Appbar.Header>
            <ScrollView style={styles.scrollStyle}>
                <View style={styles.contentView}>
                    <View style={styles.mapView}></View>
                    <View style={styles.orderAvatarView}>
                        <View style={styles.avatarView}>
                           <Avatar.Image size={60} source={require('../../../../assets/images/avatar-nan.png')}></Avatar.Image>
                        </View>
                        <View style={styles.avatarTextView}>
                            <Text allowFontScaling={false} style={styles.avatarName}>我是老六</Text>
                            <Text allowFontScaling={false} style={styles.avatarSchool}>烟台大学</Text>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <Text allowFontScaling={false} style={styles.itemLabel}>悬赏金额:</Text>
                        <Text allowFontScaling={false} style={[styles.itemContent,styles.itemColor]}>20.0</Text>
                        <Image style={styles.itemIcon} source={require('../../../../assets/images/yuan_icon.png')}></Image>
                    </View>
                    <View style={styles.itemView}>
                        <Text allowFontScaling={false} style={styles.itemLabel}>联系电话:</Text>
                        <Text allowFontScaling={false} style={styles.itemContent}>12345678901</Text>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image style={styles.itemIcon} source={require('../../../../assets/images/phone_icon.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.remarksView}>
                        <Text allowFontScaling={false} style={[styles.itemLabel,{height:40}]}>备注:</Text>
                        <Text allowFontScaling={false} style={styles.remarksText}>帮我买本书</Text>
                    </View>
                    <View style={styles.releaseAvatarView}>
                        <View style={styles.avatarView}>
                           <Avatar.Image size={60} source={require('../../../../assets/images/avatar-nv.png')}></Avatar.Image>
                        </View>
                        <View style={styles.avatarTextView}>
                            <Text allowFontScaling={false} style={styles.avatarName}>联系发布人</Text>
                            <Text allowFontScaling={false} style={styles.avatarSchool}>张三</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image style={[styles.itemIcon,{marginTop:30}]} source={require('../../../../assets/images/phone_icon.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <Button style={styles.buttonStyle} labelStyle={styles.buttonText} onPress={() => console.log('1')}>确认送达</Button>
            </ScrollView>
        </View>
    )
}
export default TakeOrderPart;

const styles = StyleSheet.create({
    parentLevel:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#fff'
    },
    headerStyle:{
        height:55,
        backgroundColor:'#fff',
        justifyContent:'space-between'
    },
    scrollStyle:{
        width:windowWidth,
        ...Platform.select({
            ios:{
                height:windowHeight-100
            },
            android:{
                height:windowHeight-50
            }
        })
    },
    contentView:{
        width:windowWidth,
        ...Platform.select({
            ios:{
                height:windowHeight-260
            },
            android:{
                height:windowHeight-50
            }
        })
    },
    mapView:{
        width:windowWidth,
        height:'40%',
        backgroundColor:'#26C78C'
    },
    orderAvatarView:{
        width:windowWidth,
        height:90,
        borderColor:'#bbb',
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    avatarView:{
        width:'22%',
        alignItems:'center',
        paddingTop:15,
        // backgroundColor:'pink'
    },
    avatarTextView:{
        width:'64%',
        paddingLeft:5,
        // backgroundColor:'yellow'
    },
    avatarName:{
        fontSize:16,
        color:'#000',
        fontWeight:'bold',
        marginTop:25,
        // backgroundColor:'red'
    },
    avatarSchool:{
        fontSize:14,
        color:'#bbb',
        marginTop:2
    },
    itemView:{
        width:windowWidth,
        height:50,
        borderColor:'#bbb',
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:'flex-start'
        // backgroundColor:'pink'
    },
    itemLabel:{
        width:'25%',
        height:50,
        fontSize:17,
        color:'#000',
        lineHeight:50,
        textAlign:'left',
        paddingLeft:15
    },
    itemContent:{
        width:'63%',
        height:50,
        fontSize:14,
        color:'#000',
        textAlign:'center',
        lineHeight:50,
    },
    itemColor:{
        fontSize:17,
        color:'#EC3656',
        fontWeight:'bold'
    },
    itemIcon:{
        width:30,
        height:30,
        marginTop:10
    },
    remarksView:{
        height:100,
        borderColor:'#bbb',
        borderBottomWidth:1,
    },
    remarksText:{
        height:60,
        fontSize:13,
        color:'#000',
        paddingVertical:5,
        paddingHorizontal:40,
        // backgroundColor:'pink'
    },
    releaseAvatarView:{
        width:windowWidth,
        height:90,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    buttonStyle:{
        width:'70%',
        height:45,
        marginVertical:30,
        marginHorizontal:'15%',
        borderRadius:22.5,
        backgroundColor:'#FABA3C'
    },
    buttonText:{
        fontSize:17,
        color:'#fff',
        lineHeight:24
    }
})
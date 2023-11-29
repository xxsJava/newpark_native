/**
 * 代码描述: 设置页面  个人中心
 * 作者:cxr
 * 修改时间:2023/11/29 14:25:11
 */

import React, { Component } from "react";
import { View,Text,StyleSheet,Dimensions,ScrollView,TouchableOpacity, } from "react-native";
import { Appbar,Avatar,IconButton,Tooltip,Button } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import {navigate} from '../../../../config/routs/NavigationContainer'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const listData = [{
    index:1,
    text:'个人资料',
},{
    index:2,
    text:'通知设置',
},{
    index:3,
    text:'清除缓存',
},{
    index:4,
    text:'黑名单',
},{
    index:5,
    text:'关于我们',
},{
    index:6,
    text:'注销用户',
},{
    index:7,
    text:'退出登录',
}]

export default class SetUp extends Component {
    render() {
        return (
            <View style={styles.parentView}>
                <Appbar.Header>
                    <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('MineStacker')} />
                    <Text style={styles.derTexthea}>设置</Text>
                </Appbar.Header>
                    <View style={styles.contentStyle}>
                        <ScrollView style={styles.scorllStyle}>
                            <View style={styles.listStyle}>
                                {listData.map(item => {
                                    return (
                                        <TouchableOpacity style={styles.itemStyle} key={item.index} activeOpacity={0.9}>
                                            <Text style={[styles.itemText,item.index == 7?{color:'red'}:null]}>{item.text}</Text>
                                            <View style={styles.itemIconView}>
                                                <Text style={[styles.itemIconText,item.index == 3?null:{display:'none'}]}>703.10k</Text>
                                                <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentView:{
        width:windowWidth,
        height:windowHeight,
    },
    headerText:{
        width: windowWidth,
        height: 45,
        backgroundColor: '#ffb700',
    },
    derTexthea:{
        width: '80%',
        fontSize: 17,
        color: '#000',
        lineHeight: 45,
        textAlign: 'center',
    },
    contentStyle:{
        width:windowWidth,
        height:windowHeight-60
    },
    scorllStyle:{
        flex:1
    },
    listStyle:{
        width:windowWidth,
        height:'auto'
    },
    itemStyle:{
        height:60,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#FFF'
    },
    itemText:{
        fontSize:18,
        color:'#444',
        lineHeight:60,
    },
    itemIconView:{
        flexDirection:'row',
        justifyContent:"flex-end"
    },
    itemIconText:{
        fontSize:14,
        color:'#9E9E9E',
        lineHeight:60,
        marginRight:5
    },
    itemIcon:{
        lineHeight:60,
    }
})
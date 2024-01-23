import React, { Component } from "react";
import { Trans } from 'react-i18next';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import { Appbar } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { navigate } from '../../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
function PersonalInfo (){  navigate('PersonalData') }
// const PersonalInfo =()=>{navigate('PersonalData')}
const listData = [{
    index:1,
    text:'个人资料',
    // onPress: ()=>{navigate('PersonalData');}
    onPress:PersonalInfo
},{
    index:2,
    text:'通知设置',
    to:navigate('PersonalData')
},{
    index:3,
    text:'清除缓存',
    to:navigate('PersonalData')
},{
    index:4,
    text:'黑名单',
    to:navigate('PersonalData')
},{
    index:5,
    text:'关于我们',
    to:navigate('PersonalData')
},{
    index:6,
    text:'注销用户',
    to:navigate('PersonalData')
},{
    index:7,
    text:'退出登录',
    to:navigate('PersonalData')
}]

export default class SetUp extends Component {
    render() {
        return (
            <View style={styles.parentView}>
                <Appbar.Header>
                    <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('MineStacker')} />
                    <Text allowFontScaling={false} style={styles.derTexthea}>
                        <Trans>navigationBar.title19</Trans>
                    </Text>
                </Appbar.Header>
                    <View style={styles.contentStyle}>
                        <ScrollView style={styles.scorllStyle}>
                            <View style={styles.listStyle}>
                                {listData.map(item => {
                                    return (
                                        <TouchableOpacity style={styles.itemStyle} key={item.index} activeOpacity={0.4} onPress={()=>navigate('PersonalData')}>
                                            <Text allowFontScaling={false} style={[styles.itemText,item.index == 7?{color:'red'}:null]}>{item.text}</Text>
                                            <View style={styles.itemIconView}>
                                                <Text allowFontScaling={false} style={[styles.itemIconText,item.index == 3?null:{display:'none'}]}>703.10k</Text>
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
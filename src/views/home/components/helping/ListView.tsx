/**
 * 代码描述: 帮忙圈列表模块 快来帮忙模块详情页
 * 作者:cxr
 * 创建时间:2023/12/11 09:10:11
 */

import React from "react";
import { View,Text,StyleSheet,Dimensions,ScrollView,Platform } from "react-native";
import { Button,Icon } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const listData = [{
    index:1,
    text:'去校门口拿个快递在一楼',
    school:'湖南长沙理工大学',
    time:'刚刚',
    sum:'1.50'
},{
    index:2,
    text:'商店买瓶水去西边操场',
    school:'湖南长沙理工大学',
    time:'刚刚',
    sum:'2.86'
},{
    index:3,
    text:'图书馆借本书去实验室一楼',
    school:'湖南长沙理工大学',
    time:'刚刚',
    sum:'2.99'
},{
    index:4,
    text:'帮骑电动车去充电，车在F楼',
    school:'湖南长沙理工大学',
    time:'刚刚',
    sum:'20.00'
}]

const ListView = () => {
    return (
        <View style={styles.parentLevel}>
            <ScrollView style={styles.scrollStyle}>
                <View style={styles.listStyle}>
                    {listData.map(item => {
                        return(
                            <View style={styles.itemStyle} key={item.index}>
                                <View style={styles.avatarView}>
                                    <View style={styles.avatarStyle}></View>
                                    <View style={styles.stateStyle}></View>
                                    <Text style={styles.timeStyle}>{item.time}</Text>
                                </View>
                                <View style={styles.textView}>
                                    <Text style={styles.textStyle1} numberOfLines={1} ellipsizeMode='tail'>{item.text}</Text>
                                    <Text style={styles.textStyle2}>{item.school}</Text>
                                </View>
                                <View style={styles.detailsView}>
                                    <View style={styles.moneyView}>
                                        <View style={styles.moneyIcon}>
                                            <Icon color="#FABA3C" size={34} source={require('../../../../assets/images/coins-icon.png')}></Icon>
                                        </View>
                                        <Text style={styles.moneySum}>{item.sum.split('.')[0]}.<Text style={{fontSize:14}}>{item.sum.split('.')[1]}</Text></Text>
                                    </View>
                                    <Button style={styles.buttonStyle} labelStyle={styles.buttonText}>查看详情</Button>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}
export default ListView;

const styles = StyleSheet.create({
    parentLevel:{
        width:windowWidth,
        // backgroundColor:'red',
        ...Platform.select({
            ios:{
                height:windowHeight-145,
            },
            android:{
                height:windowHeight-100,
            }
        })
    },
    scrollStyle:{
        flex:1
    },
    listStyle:{
        marginTop:10,
        paddingBottom:20
    },
    itemStyle:{
        width:windowWidth,
        height:105,
        borderColor:'#bbb',
        borderBottomWidth:1,
        backgroundColor:'#fff',
        paddingHorizontal:5,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    avatarStyle:{
        width:64,
        height:64,
        top:20,
        left:10,
        borderRadius:32,
        borderColor:'#999',
        borderWidth:1,
        position:'absolute'
    },
    avatarView:{
        width:'22%',
        position:'relative',
        paddingTop:10,
    },
    timeStyle:{
        fontSize:13,
        color:'#aaa',
        bottom:5,
        position:'absolute'
    },
    stateStyle:{
        width:16,
        height:16,
        top:64,
        right:12,
        borderRadius:8,
        borderColor:'#aaa',
        borderWidth:1,
        position:'absolute',
        backgroundColor:'#26C78C',
        zIndex:10
    },
    textView:{
        width:'52%',
        paddingTop:20,
        // backgroundColor:'orange'
    },
    detailsView:{
        width:'26%',
        // paddingTop:10,
        paddingRight:5,
    },
    textStyle1:{
        width:'76%',
        height:55,
        fontSize:14,
        color:'#000',
        textAlign:'center',
        lineHeight:55,
        marginHorizontal:'12%',
    },
    textStyle2:{
        width:'80%',
        height:20,
        fontSize:13,
        color:'#bbb',
        textAlign:'center',
        lineHeight:20,
        marginHorizontal:'10%'
    },
    moneyView:{
        height:40,
        marginTop:5,
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'center'
    },
    moneyIcon:{
        paddingTop:3
    },
    moneySum:{
        fontSize:20,
        color:'#ED405E',
        textAlign:'center',
        lineHeight:40
    },
    buttonStyle:{
        width:'100%',
        height:40,
        borderRadius:12,
        backgroundColor:'#FABA3C'
    },
    buttonText:{
        fontSize:14,
        color:'#fff',
        lineHeight:20
    }

})



/**
 * 代码描述: 社区频道页面  新园
 * 作者:cxr
 * 修改时间:2023/11/29 17:10:11
 */

import React from 'react';
import { Trans } from 'react-i18next';
import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Appbar, Icon } from 'react-native-paper';
import { navigate } from '../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const listData = [{
    index:1,
    type:1,
    label:1,
    labelText:'公',
    title:'【公告】  社区某人表现成绩优秀，奖励学分',
    text:null,
    image:null,
    name:null,
    read:null,
    comment:null,
    time:null

},{
    index:2,
    type:1,
    label:2,
    labelText:'热',
    title:'【热帖】  社区某人被子进母猪了',
    text:null,
    image:null,
    name:null,
    read:null,
    comment:null,
    time:null

},{
    index:3,
    type:1,
    label:3,
    labelText:'通',
    title:'【通知】  社区放假五天',
    text:null,
    image:null,
    name:null,
    read:null,
    comment:null,
    time:null

},{
    index:4,
    type:2,
    label:2,
    labelText:'热',
    title:'【个人分享】在社区的520天记录',
    text:'踏山河，摘星月',
    image:require('../../../assets/images/alimom/R-C.jpg'),
    name:'o泡果奶',
    read:20000,
    comment:20000,
    time:'刚刚'

}]

const functionListData = [{
    index:1,
    image:require('../../../assets/images/alimom/dk.png'),
    text:'打卡',
    path:'ClockInViewRoute'
},{
    index:2,
    image:require('../../../assets/images/alimom/jl.png'),
    text:'打卡记录',
    path:'CheckRecordRoute'
    
}]
const CommunityChannel = ({ navigation }:any) => {
    return (
        <View style={styles.parentView}>
            <Appbar.Header>
                <Appbar.Action icon={require('../../../assets/images/chevron-left.png')} onPress={() => navigation.goBack()} />
                <Text allowFontScaling={false} style={styles.derTexthea}>
                    <Trans>navigationBar.title21</Trans>
                </Text>
                <TouchableOpacity>
                    <Image style={styles.headerImage} source={require('../../../assets/images/search_in_circle.png')} accessibilityLabel='图片' alt="头像"></Image>
                </TouchableOpacity>
            </Appbar.Header>
            <View style={styles.scrollView}>
                <ScrollView style={styles.scrollStyle}>
                    <View style={styles.contentView}>
                        <View style={styles.topView}>
                            <View style={styles.topContent}>
                                <View style={styles.topImage}></View>
                                <View style={styles.topRight}>
                                    <Text allowFontScaling={false} style={styles.nameText}>社区频道名称</Text>
                                    <Text allowFontScaling={false} style={styles.topText1}>热度:2w | 话题:20w</Text>
                                    <Text allowFontScaling={false} style={styles.topText2}>社区管理人员:小学牛、o泡果奶</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bottomView}>
                            {listData.map(item => {
                                return(
                                    <View style={[styles.itemStyle,item.type == 1?styles.itemStyle1:styles.itemStyle2]} key={item.index}>
                                        <View style={styles.itemTitle}>
                                            <View style={[styles.lableView,item.label == 1?styles.lableColor1:item.label == 2?styles.labelColor2:styles.labelColor3]}>
                                                <Text allowFontScaling={false} style={styles.lableStyle}>{item.labelText}</Text>
                                            </View>
                                            <Text allowFontScaling={false} style={item.type == 1?styles.itemText:styles.itemText1}>{item.title}</Text>
                                        </View>
                                        <View style={item.type == 2?styles.itemContent:{display:'none'}}>
                                            <Text allowFontScaling={false} style={styles.itemContentText}>{item.text}</Text>
                                            <View style={styles.itemImageView}>
                                                <Image style={styles.itemImage} source={item.image} accessibilityLabel='图片' alt="头像"></Image>
                                                <Image style={styles.itemImage} source={item.image} accessibilityLabel='图片' alt="头像"></Image>
                                                <Image style={styles.itemImage} source={item.image} accessibilityLabel='图片' alt="头像"></Image>
                                            </View>
                                        </View>
                                        <View style={item.type == 2?styles.itemTabView:{display:'none'}}>
                                            <Text allowFontScaling={false} style={styles.itemName}>{item.name}</Text>
                                            <View style={styles.itemTab}>
                                                <Text allowFontScaling={false} style={styles.itemTabTime}>{item.time}</Text>
                                                <View style={styles.itemTabIconView}>
                                                    <View style={styles.itemTabIcon}>
                                                        <Icon size={28} color="#BBB" source={require('../../../assets/images/visible.png')}></Icon>
                                                    </View>
                                                    <Text allowFontScaling={false} style={styles.itemTabText}>{item.read}</Text>
                                                </View>
                                                <View style={styles.itemTabIconView}>
                                                    <View style={styles.itemTabIcon}>
                                                        <Icon size={26} color="#BBB" source={require('../../../assets/images/3.0x/comment_new1.png')}></Icon>
                                                    </View>
                                                    <Text allowFontScaling={false} style={styles.itemTabText}>
                                                        {item.comment}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                        <View style={styles.functionView}>
                            <View style={styles.funcitonList}>
                                {functionListData.map(item => {
                                    return (
                                        <TouchableOpacity key={item.index} style={styles.functionItem} activeOpacity={0.9} onPress={() => navigate(item.path)}>
                                            <Image source={item.image} style={styles.functionImage} accessibilityLabel='图片' alt="头像"></Image>
                                            <Text allowFontScaling={false} style={styles.functionText}>{item.text}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.extendView} activeOpacity={0.5}>
                    <Image style={styles.extenImage} source={require('../../../assets/images/3.0x/add_btn.png')} accessibilityLabel='图片' alt="头像"></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CommunityChannel;

const styles = StyleSheet.create({
    parentView:{
        width:windowWidth,
        height:windowHeight
    },
    derTexthea:{
        width: '78%',
        fontSize: 17,
        color: '#000',
        lineHeight: 45,
        textAlign: 'center',
    },
    headerImage:{
        width:22,
        height:22
    },
    scrollView:{
        width:windowWidth,
        height:windowHeight-45,
        position:'relative',
    },
    scrollStyle:{
        flex:1,
        backgroundColor:'#fff'
    },
    contentView:{
        height:'auto',
        position:'relative',
        paddingBottom:20,
        backgroundColor:'#FFF'
    },
    topView:{
        width:windowWidth,
        height:185,
        backgroundColor:'#FABA3C'
    },
    topContent:{
        height:155,
        marginVertical:15,
        marginHorizontal:10,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    topImage:{
        width:100,
        height:90,
        borderRadius:8,
        marginRight:15,
        backgroundColor:'#FFF'
    },
    topRight:{
        width:'70%',
        paddingTop:12
    },
    nameText:{
        fontSize:17,
        color:'#FFF',
        lineHeight:20
    },
    topText1:{
        color:'#FFF',
        lineHeight:30
    },
    topText2:{
        color:'#FFF',
        lineHeight:30
    },
    functionView:{
        width:windowWidth-10,
        height:110,
        top:125,
        position:'absolute',
        marginHorizontal:5,
        borderRadius:16,
        backgroundColor:'#FFF',
        zIndex:10,
        ...Platform.select({
            ios: {
                shadowColor: '#999', //设置阴影色
                shadowOffset: {width: 0, height: 0}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
                shadowOpacity: 1,
                shadowRadius: 2.5, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
            },
            android: {
                elevation: 7,
            },
        })

    },
    bottomView:{
        width:windowWidth,
        height:'auto',
        paddingTop:60,
        backgroundColor:'#FFF'
    },
    itemStyle:{
        height:'auto',
        borderColor:'#bbb',
        borderTopWidth:1,
        paddingHorizontal:15,
    },
    itemStyle1:{
        paddingVertical:3,
    },
    itemStyle2:{
        paddingVertical:15,
    },
    lableView:{
        width:28,
        height:28,
        borderRadius:5,
        marginRight:10,
        backgroundColor:'#FABA3C',
    },
    lableStyle:{
        lineHeight:28,
        color:'#FFF',
        textAlign:'center',
    },
    lableColor1:{
        backgroundColor:'#FABA3C'
    },
    labelColor2:{
        backgroundColor:'#FA3D3C'
    },
    labelColor3:{
        backgroundColor:'#26C78C'
    },
    itemText:{
        lineHeight:30,
        color:'#000'
    },
    itemTitle:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    itemText1:{
        fontSize:17,
        color:'#000',
        fontWeight:'bold',
        lineHeight:30
    },
    itemContent:{
        paddingTop:10,
        paddingHorizontal:20,
    },
    itemContentText:{
        fontSize:14,
        color:'#aaa',
        lineHeight:30,
        paddingLeft:5
    },
    itemImageView:{
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemImage:{
        width:100,
        height:100,
        borderRadius:8
    },
    itemTabView:{
        height:30,
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    itemName:{
        fontSize:14,
        color:'#bbb',
        lineHeight:30
    },
    itemTab:{
        height:30,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    itemTabTime:{
        fontSize:14,
        color:'#bbb',
        lineHeight:30,
        marginRight:6,
    },
    itemTabIconView:{
        height:30,
        flexDirection:'row',
        justifyContent:'flex-end',
        marginHorizontal:5,
    },
    itemTabText:{
        fontSize:14,
        color:'#bbb',
        lineHeight:30,
    },
    itemTabIcon:{
        paddingTop:2,
        marginRight:3
    },
    funcitonList:{
        paddingVertical:20,
        paddingHorizontal:15,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    functionItem:{
        width:60,
        alignItems:'center',
        marginHorizontal:15
    },
    functionImage:{
        width:50,
        height:45
    },
    functionText:{
        fontSize:14,
        color:'#000',
        marginTop:6,
        fontWeight:'600',
    },
    extendView:{
        position:'absolute',
        right:20,
        zIndex:20,
        ...Platform.select({
            ios:{
                bottom:120
            },
            android:{
                bottom:40,
            }
        })
    },
    extenImage:{
        width:60,
        height:60
    }
})
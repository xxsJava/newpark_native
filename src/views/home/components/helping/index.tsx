/**
 * 代码描述: 帮忙圈 快来帮忙模块详情页
 * 作者:cxr
 * 创建时间:2023/11/20 15:14:11
 */

import React, {useState} from 'react';
import { View,Text,StyleSheet,Dimensions,ScrollView,Platform,Image,TouchableOpacity, } from 'react-native';
import {Appbar, Icon, IconButton, Avatar, Button} from 'react-native-paper';
import {navigate} from '../../../../config/routs/NavigationContainer';
import LinearGradinet from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import { withDecay } from 'react-native-reanimated';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const listData = [{
    index:1,
    nameL:'o泡果奶',
    Avatar:require('../../../../assets/images/defaultheader.png'),
    time:'刚刚',
    fromText:'个人',
    title:'帮忙打印文件',
    text:'需要一位同学来打扫实验室',
    money:'20.0',
    buttonText:'查看订单',
    type:1
    
},{
    index:2,
    nameL:'o泡果奶',
    Avatar:require('../../../../assets/images/defaultheader.png'),
    time:'刚刚',
    fromText:'个人',
    title:'帮忙打印文件',
    text:'需要一位同学来打扫实验室',
    money:'20.0',
    buttonText:'申请接单',
    type:2
    
},{
    index:3,
    name:'o泡果奶',
    Avatar:require('../../../../assets/images/defaultheader.png'),
    time:'刚刚',
    fromText:'个人',
    title:'帮忙打印文件',
    text:'需要一位同学来打扫实验室',
    money:'20.0',
    buttonText:'申请中,找他聊聊',
    type:3
    
},{
    index:4,
    name:'o泡果奶',
    Avatar:require('../../../../assets/images/defaultheader.png'),
    time:'刚刚',
    fromText:'个人',
    title:'帮忙打印文件',
    text:'需要一位同学来打扫实验室',
    money:'20.0',
    buttonText:'查看订单',
    type:1
    
},{
    index:5,
    name:'o泡果奶',
    Avatar:require('../../../../assets/images/defaultheader.png'),
    time:'刚刚',
    fromText:'个人',
    title:'帮忙打印文件',
    text:'需要一位同学来打扫实验室',
    money:'20.0',
    buttonText:'申请中,找他聊聊',
    type:3
    
}]

const  HelpCircleView = () => {
    const onButtonJump = (type:number) => {
        if(type == 3) {
            navigate('ProductChatRoute')
        } else {
            return;
        }
    }
    return(
        <View style={styles.parentLevel}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action
                    icon={require('../../../../assets/images/chevron-left.png')}
                    onPress={() => navigate('HomeStacker')}
                />
                <Text style={styles.headerText}>帮忙圈</Text>
            </Appbar.Header>
            <View style={styles.typeView}>
                <Text style={styles.typeTitle}>排序方式</Text>
                <View style={styles.typeRight}>
                    <Text style={styles.typeText}>时间排序</Text>
                    <Entypo style={styles.typeIcon} size={16} name='chevron-thin-right'></Entypo>
                </View>
            </View>
            <ScrollView style={styles.scrollStyle}>
                <View style={styles.listStyle}>
                {listData.map(item => {
                    return(
                        <View style={[styles.itemStyle,item.type == 1?styles.itemColor1:item.type == 2?styles.itemColor2:styles.itemColor3]} key={item.index}>
                            <LinearGradinet colors={['rgba(250,186,60,0.6)','rgba(250,186,60,0.2)','rgba(250,186,60,0)']} start={{x: 0, y: 0}} end={{x: 0, y: 1}} style={styles.itemBg}>
                                <View style={styles.itemTop}>
                                    <View style={styles.itemAvatar}>
                                        <Avatar.Image size={55} source={item.Avatar}></Avatar.Image> 
                                    </View>
                                    <View style={styles.itemName}>
                                        <View style={styles.itemNameTop}>
                                            <Text style={styles.itemNameText}>{item.name}</Text>
                                            <Text style={styles.itemNameTime}>{item.time}</Text>
                                        </View>
                                        <Text style={styles.itemNameBottm}>来自：{item.fromText}</Text>
                                    </View>
                                    <View style={styles.itemMoney}>
                                        <TouchableOpacity style={styles.itemMoneyButton}>
                                            <Image style={styles.itemNameImage} source={require('../../../../assets/images/money_bag.png')}></Image>
                                            <Text style={styles.itemMoneyText}>{item.money}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.itemContentView}>
                                    <View style={styles.itemContent}>
                                        <View style={styles.contentLine}>
                                            <View style={[styles.signIcon,styles.signIconColor1]}></View>
                                            <Text style={styles.contentLineText1} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                                        </View>
                                        <View style={styles.contentLine}>
                                            <View style={[styles.signIcon,styles.signIconColor2]}></View>
                                            <Text style={styles.contentLineText2} numberOfLines={1} ellipsizeMode='tail'>{item.text}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.itemContentButton}>
                                        <Button style={[styles.contentButton,item.type == 1?styles.contentButtonColor1:item.type == 2?styles.contentButtonColor2:styles.contentButtonColor3]} textColor='#FFF' labelStyle={styles.contentButtonText} onPress={() => onButtonJump(item.type)}>{item.buttonText}</Button>
                                    </View>
                                </View>
                            </LinearGradinet>
                        </View>
                    )
                })}
                </View>
            </ScrollView>
        </View>
    )
}

export default HelpCircleView;

const styles = StyleSheet.create({
    parentLevel: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#FFF',
    },
    headerStyle: {
        height: 45,
        backgroundColor: '#faba3c',
    },
    headerText: {
        width: '80%',
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
    },
    typeView:{
        width:windowWidth-30,
        height:40,
        marginHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    typeTitle:{
        fontSize:16,
        color:'#555',
        lineHeight:40
    },
    typeRight:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    typeText:{
        fontSize:14,
        color:'#999',
        lineHeight:40
    },
    typeIcon:{
        lineHeight:40
    },
    scrollStyle:{
        width:windowWidth,
        height:windowHeight-100,
        paddingVertical:10,
    },
    listStyle:{
        width:windowWidth,
        height:'auto',
        paddingBottom:15
    },
    itemStyle:{
        width:windowWidth-24,
        height:190,
        marginHorizontal:12,
        backgroundColor:'#FFF',
        borderTopWidth:10,
        ...Platform.select({
            ios: {
                marginBottom: 14,
                shadowColor: '#DDD', //设置阴影色
                shadowOffset: {width: 0, height: 3}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
                shadowOpacity: 1,
                shadowRadius: 3.5, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
              },
              android: {
                elevation: 7,
                marginBottom: 12,
              },
        })
    },
    itemColor1:{
        borderColor:'#26c78c',
    },
    itemColor2:{
        borderColor:'#faba3c',
    },
    itemColor3:{
        borderColor:'#6a1b9a',
    },
    itemBg:{
        width:'100%',
        height:180,
        paddingHorizontal:15,
        paddingVertical:15
    },
    itemTop:{
        height:70,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemAvatar:{
        width:'20%',
        alignItems:'center',
    },
    itemName:{
        width:'47%',
    },
    itemNameTop:{
        paddingLeft:15,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    itemNameText:{
        fontSize:16,
        color:'#000',
        lineHeight:30
    },
    itemNameTime:{
        fontSize:13,
        color:'#aaa',
        lineHeight:30,
        marginLeft:10
    },
    itemNameBottm:{
        fontSize:14,
        color:'#aaa',
        lineHeight:30,
        paddingLeft:15,
    },
    itemMoney:{
        width:'33%',
        paddingTop:10,
    },
    itemMoneyButton:{
        width:110,
        height:30,
        borderRadius:15,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#26c78c'
    },
    itemNameImage:{
        width:25,
        height:25,
        marginRight:10
    },
    itemMoneyText:{
        height:30,
        color:'#FFF',
        fontSize:17,
        marginTop:5,
        ...Platform.select({
            ios:{
                lineHeight:25,
            },
            android:{
                lineHeight:22,
            }
        })
    },
    itemContentView:{
        width:'100%',
        height:90,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemContent:{
        width:'65%',
        paddingHorizontal:10,
    },
    itemContentButton:{
        width:'35%',
        alignItems:'flex-end'
    },
    contentLine:{
        height:35,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    signIcon:{
        width:14,
        height:14,
        borderRadius:7,
        borderWidth:1,
        borderColor:'#aaa',
        marginHorizontal:10,
        marginVertical:13
    },
    signIconColor1:{
        backgroundColor:'#25c78b'
    },
    signIconColor2:{
        backgroundColor:'#faba3c'
    },
    contentLineText1:{
        width:'83%',
        fontSize:17,
        color:'#000',
        fontWeight:'600',
        lineHeight:35,
    },
    contentLineText2:{
        width:'83%',
        fontSize:15,
        color:'#000',
        lineHeight:35
    },
    contentButton:{
        width:'auto',
        height:38,
        borderRadius:21,
        borderWidth:0.8,
        borderColor:'#aaa',
        marginTop:30,
        paddingHorizontal:10
    },
    contentButtonText:{
        fontSize:17,
    },
    contentButtonColor1:{
        backgroundColor:'#90c587'
    },
    contentButtonColor2:{
        backgroundColor:'#faba3c'
    },
    contentButtonColor3:{
        backgroundColor:'#6a1b9a'
    }
})
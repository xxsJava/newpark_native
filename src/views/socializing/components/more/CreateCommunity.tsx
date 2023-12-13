/**
 * 代码描述: 创建社区 社交更多模块
 * 作者:cxr
 * 创建时间:2023/12/13 11:54:11
 */

import React from "react";
import { View,Text,StyleSheet,Dimensions,Platform,Image,TextInput,TouchableOpacity,ScrollView } from "react-native";
import {Appbar, Icon, IconButton, Avatar, Button} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import {navigate} from '../../../../config/routs/NavigationContainer'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CreateCommunity = () => {
    return (
        <View style={styles.parentLevel}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('SocializingStacker')}></Appbar.Action>
                <Text style={styles.headerText}>创建社区</Text>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.headerIcon}>创建</Text>
                </TouchableOpacity>
            </Appbar.Header>
            <View style={styles.contentView}>
                <ScrollView style={styles.scrollStyle}>
                    <View style={styles.avatarView}>
                        <View style={styles.avatarStyle}>
                            <Image style={styles.avatarImage} source={require('../../../../assets/images/takepicforheader.png')}></Image>
                        </View>
                        <Text style={styles.avatarText}>设置社区头像</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.itemName}>社区名称:</Text>
                        <TextInput textAlign='center' selectionColor='#FABA3C' placeholder='请输入社区名称' maxLength={10} autoCorrect={false} style={styles.itemInput}></TextInput>
                        <Text style={styles.itemRightText}>0/10</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.itemName}>社区背景图:</Text>
                        <View style={styles.itemRight}>
                            <TouchableOpacity activeOpacity={0.6} style={styles.itemBgImage}>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Entypo style={styles.itemIcon} color='#bbb' size={20} name="chevron-thin-right"></Entypo>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.itemView,{height:160}]}>
                        <Text style={styles.itemName}>社区功能:</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.itemName}>社区权限:</Text>
                        <View style={styles.itemRight}>
                            <Text style={styles.itemText}>公开</Text>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Entypo style={styles.itemIcon} color='#000' size={20} name="chevron-small-down"></Entypo>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.itemName}>社区加入方式:</Text>
                        <View style={styles.itemRight}>
                            <Text style={styles.itemText}>不需要批准</Text>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Entypo style={styles.itemIcon} color='#000' size={20} name="chevron-small-down"></Entypo>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default CreateCommunity;

const styles = StyleSheet.create({
    parentLevel:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#EFEBFA'
    },
    headerStyle:{
        height:55,
        backgroundColor:'#FABA3C'
    },
    headerText:{
        width:'75%',
        fontSize:17,
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center'
    },
    headerIcon:{
        fontSize:14,
        color:'#fff'
    },
    contentView:{
        width:windowWidth,
        ...Platform.select({
            ios:{
                height:windowHeight - 105,
            },
            android:{
                height:windowHeight - 55,
            }
        })
    },
    scrollStyle:{
        flex:1
    },
    avatarView:{
        width:windowWidth,
        height:160,
        paddingTop:35,
        alignItems:'center',
        // backgroundColor:'pink'
    },
    avatarStyle:{
        width:80,
        height:80,
        alignItems:'center',
        backgroundColor:'#72D2AE'
    },
    avatarText:{
        fontSize:14,
        color:'#000',
        lineHeight:40
    },
    avatarImage:{
        width:25,
        height:25,
        marginTop:27
    },
    itemView:{
        width:windowWidth,
        height:55,
        paddingHorizontal:20,
        marginBottom:10,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemName:{
        fontSize:15,
        color:'#000',
        fontWeight:'bold',
        lineHeight:55,
        // backgroundColor:'purple'
    },
    itemRightText:{
        fontSize:14,
        color:'#bbb',
        lineHeight:55,
        // backgroundColor:'orange'
    },
    itemInput:{
        width:'70%',
        textAlignVertical:'center'
        // backgroundColor:'green'
    },
    itemRight:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    itemBgImage:{
        width:120,
        height:40,
        marginVertical:8,
        backgroundColor:'#FABA3C'
    },
    itemIcon:{
        lineHeight:55,
        marginLeft:10
    },
    itemText:{
        fontSize:15,
        color:'#000',
        lineHeight:55
    }
})


/**
 * 代码描述: 创建社区 社交更多模块
 * 作者:cxr
 * 创建时间:2023/12/13 11:54:11
 */

import React, { useState } from "react";
import { View, Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from "react-native";
import { Appbar } from 'react-native-paper';
import { navigate } from '../../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CreateCommunity = () => {
    const [commName, setCommName] = useState('');
    const [commTip, setCommTip] = useState('');
    const [commDesc, setCommDesc] = useState('');
    const [authority, setAuthority] = useState('');
    const [showAuth, setShowAuth] = useState(true);
    // 加入方式   
    const [join, setJoin] = useState('')
    // 是否显示加入方式
    const [joinStyle, setJoinStyle] = useState(false);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.parentLevel}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('SocializingStacker')}></Appbar.Action>
                <Text allowFontScaling={false} style={styles.headerText}>创建社区</Text>
                {/* <TouchableOpacity activeOpacity={0.6}>
                    <Text allowFontScaling={false} style={styles.headerIcon}>创建</Text>
                </TouchableOpacity> */}
            </Appbar.Header>
            {/*  behavior={Platform.OS == "ios" ? "padding" : "height"}
                           style={styles.contentView} */}
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                // behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.contentView}>
                {/* <ScrollView style={styles.scrollStyle}>
                    <View style={styles.avatarView}>
                        <View style={styles.avatarStyle}>
                            <Image style={styles.avatarImage} source={require('../../../../assets/images/takepicforheader.png')} accessibilityLabel='图片' alt="头像"></Image>
                        </View>
                        <Text allowFontScaling={false} style={styles.avatarText}>设置社区头像</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text allowFontScaling={false} style={styles.itemName}>社区名称:</Text>
                        <TextInput  allowFontScaling={false} textAlign='center' selectionColor='#FABA3C' placeholder='请输入社区名称' maxLength={10} autoCorrect={false} style={styles.itemInput}></TextInput>
                        <Text allowFontScaling={false} style={styles.itemRightText}>0/10</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text allowFontScaling={false} style={styles.itemName}>社区背景图:</Text>
                        <View style={styles.itemRight}>
                            <TouchableOpacity activeOpacity={0.6} style={styles.itemBgImage}>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Entypo style={styles.itemIcon} color='#bbb' size={20} name="chevron-thin-right"></Entypo>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.itemView,{height:160}]}>
                        <Text allowFontScaling={false} style={styles.itemName}>社区功能:</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text allowFontScaling={false} style={styles.itemName}>社区权限:</Text>
                        <View style={styles.itemRight}>
                            <Text allowFontScaling={false} style={styles.itemText}>公开</Text>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Entypo style={styles.itemIcon} color='#000' size={20} name="chevron-small-down"></Entypo>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <Text allowFontScaling={false} style={styles.itemName}>社区加入方式:</Text>
                        <View style={styles.itemRight}>
                            <Text allowFontScaling={false} style={styles.itemText}>不需要批准</Text>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Entypo style={styles.itemIcon} color='#000' size={20} name="chevron-small-down"></Entypo>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView> */}
                <ImageBackground source={require('../../../../assets/images/tup/community.jpg')} style={styles.imgbg}></ImageBackground>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "position"}
                    style={styles.weiz}
                    keyboardVerticalOffset={-120}
                >
                    <ScrollView style={{ width: '100%', marginBottom: 100, paddingBottom: 60, height: '120%' }}>
                        <View style={styles.ying} />
                        <View
                            style={{
                                alignItems: 'center',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 190,
                                width: windowWidth,
                                height: '100%'
                            }}>
                            <Image source={require('../../../../assets/images/tup/community.jpg')} style={{ width: 90, height: 90, borderWidth: 2, borderColor: '#ECB32C' }}></Image>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 12, alignItems: 'center', backgroundColor: '#fff', marginTop: 60, height: 46 }}>
                                <Text>社区名称</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TextInput
                                        placeholder="请输入社区名称"
                                        value={commName}
                                        onChangeText={text => { setCommName(text), console.log('这是输入的社区名称', commName, text); }}
                                        maxLength={12}
                                    />
                                    <Text style={{ fontSize: 12, color: '#000' }}>{commName.length}/12</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 12, alignItems: 'center', backgroundColor: '#fff', marginTop: 10, height: 46 }}>
                                <Text>社区标签</Text>
                                <View>
                                    <TextInput
                                        placeholder="请描述一下吧...."
                                        value={commTip}
                                        onChangeText={text => { setCommTip(text), console.log('这是输入的社区标签', commTip, text); }}
                                    />
                                </View>
                            </View>
                            <View style={{ width: '100%', paddingHorizontal: 12, alignItems: 'center', backgroundColor: '#fff', marginTop: 10 }}>
                               <View style={{paddingVertical:12}}>
                               <Text style={{color:'#000',fontSize:16}}>社区简介</Text>
                               </View>
                                <View style={{ width: '100%' }}>
                                    <TextInput
                                        placeholder="(选填)"
                                        value={commDesc}
                                        onChangeText={text => { setCommDesc(text), console.log('这是输入的社区标签', commTip, text); }}
                                        multiline={true}
                                        style={{ width: '100%', paddingVertical: 20, backgroundColor: '#ccc', marginBottom: 20 }}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 12, alignItems: 'center', backgroundColor: '#fff', marginTop: 10, height: 46, zindex: -2 }}>
                                <Text>社区权限</Text>
                                <TouchableOpacity style={{ width: 80, backgroundColor: '#fff', flexDirection: 'row', marginRight: 16, position: 'relative',alignItems:'center'}} onPress={() => { setShowAuth(!showAuth) }}>
                                    <Text style={authority.length == 0 ? { display: 'none' } : { textAlign: "center" }}>{authority}</Text>
                                    <Text style={authority.length == 0 ? { color: '#ccc', textAlign: 'center' } : { display: 'none' }}>请选择权限</Text>
                                    <Image source={require('../../../../assets/images/tup/xia.png')} style={{ width: 16, height: 16, marginLeft: 6 }}></Image>
                                   
                                </TouchableOpacity>
                                <View style={showAuth ? { position: 'absolute', top: 36, right: 20, zIndex: 99999 } : { display: 'none' }}>
                                        <TouchableOpacity onPress={() => { setShowAuth(false) }} style={{ width: 100, height: 30, backgroundColor: '#fff' }}>
                                            <Text style={{ lineHeight: 30, textAlign: 'center',borderBottomWidth:0.4,borderColor:'#ccc' }}>
                                                请选择权限
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { setAuthority('公开'), setShowAuth(false) }} style={{ width: 100, height: 30, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#ccc' }}>
                                            <Text style={{ lineHeight: 30, textAlign: 'center' }}>
                                                公开
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { setAuthority('私有'), setShowAuth(false) }} style={{ width: 100, height: 30, backgroundColor: '#fff' }}>
                                            <Text style={{ lineHeight: 30, textAlign: 'center' }}>
                                                私有
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 12, alignItems: 'center', backgroundColor: '#fff', marginTop: 10, height: 46,zIndex:-20 }}>
                                <Text>加入方式</Text>
                                <TouchableOpacity style={{ width: 80, backgroundColor: '#fff', flexDirection: 'row', marginRight: 16, position: 'relative',alignItems:'center' }} onPress={() => { setJoinStyle(!joinStyle) }}>
                                    <Text style={join.length == 0 ? { display: 'none' } : { textAlign: "center" }}>{join}</Text>
                                    <Text style={join.length == 0 ? { color: '#ccc', textAlign: 'center' } : { display: 'none' }}>请选择方式</Text>
                                    <Image source={require('../../../../assets/images/tup/xia.png')} style={{ width: 16, height: 16, marginLeft: 6 }}></Image>
                                </TouchableOpacity>
                                <View style={joinStyle ? { position: 'absolute', top: 36, right: 26, zIndex: 999 } : { display: 'none' }}>
                                        <TouchableOpacity onPress={() => { setJoinStyle(false) }} style={{ width: 100, height: 30, backgroundColor: '#fff' }}>
                                            <Text style={{ lineHeight: 30, textAlign: 'center' }}>
                                                请选择方式
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { setJoin('不需要批准'), setJoinStyle(false) }} style={{ width: 100, height: 30, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#ccc' }}>
                                            <Text style={{ lineHeight: 30, textAlign: 'center' }}>
                                                不需要批准
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { setJoin('管理员审核'), setJoinStyle(false) }} style={{ width: 100, height: 30, backgroundColor: '#fff' }}>
                                            <Text style={{ lineHeight: 30, textAlign: 'center' }}>
                                                管理员审核
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </KeyboardAvoidingView>
        </KeyboardAvoidingView>
    )
}

export default CreateCommunity;

const styles = StyleSheet.create({
    parentLevel: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#EFEBFA'
    },
    headerStyle: {
        height: 55,
        backgroundColor: '#FABA3C',
        width: '100%'
    },
    headerText: {
        width: '75%',
        fontSize: 17,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    headerIcon: {
        fontSize: 14,
        color: '#fff'
    },
    contentView: {
        width: windowWidth,
        ...Platform.select({
            ios: {
                height: windowHeight - 55,
            },
            android: {
                height: windowHeight - 55,
            }
        }),
        position: 'relative'
    },
    scrollStyle: {
        flex: 1
    },
    avatarView: {
        width: windowWidth,
        height: 160,
        paddingTop: 35,
        alignItems: 'center'
    },
    avatarStyle: {
        width: 80,
        height: 80,
        alignItems: 'center',
        backgroundColor: '#72D2AE'
    },
    avatarText: {
        fontSize: 14,
        color: '#000',
        lineHeight: 40
    },
    avatarImage: {
        width: 25,
        height: 25,
        marginTop: 27
    },
    itemView: {
        width: windowWidth,
        height: 55,
        paddingHorizontal: 20,
        marginBottom: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemName: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
        lineHeight: 55
    },
    itemRightText: {
        fontSize: 14,
        color: '#bbb',
        lineHeight: 55
    },
    itemInput: {
        width: '70%',
        textAlignVertical: 'center'
    },
    itemRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    itemBgImage: {
        width: 120,
        height: 40,
        marginVertical: 8,
        backgroundColor: '#FABA3C'
    },
    itemIcon: {
        lineHeight: 55,
        marginLeft: 10
    },
    itemText: {
        fontSize: 15,
        color: '#000',
        lineHeight: 55
    },
    imgbg: {
        width: '100%',
        height: 260
    },
    weiz: {
        position: 'absolute',
        top: 130,
        left: 0,
        width: windowWidth,
        height: 570,
        zIndex: 30
    },
    ying: {
        backgroundColor: '#fff',
        width: windowWidth,
        height: 570,
        position: 'relative',
        top: 60,
        left: 0,
        zIndex: 40,
        opacity: 0.6,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60
    }
})


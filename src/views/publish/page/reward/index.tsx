/**
 * 代码描述: 发布悬赏页面  发布
 * 作者:cxr
 * 修改时间:2023/12/04 10:13:11
 */
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Platform, Image, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import { Appbar, Avatar, IconButton, Button } from 'react-native-paper';
import LinearGradinet from 'react-native-linear-gradient';
// import { Avatar, Button, IconButton } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

import { navigate } from '../../../../config/routs/NavigationContainer';

// import { ScrollView } from "@gluestack-ui/config/build/theme";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RewardView = () => {
    return (
        <SafeAreaView style={styles.parentView}>
            <View style={styles.headView}>
                <IconButton size={22} iconColor='#fff' icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('HomeStacker')}></IconButton>
            </View>
           
                <View style={styles.reheight}>
                <KeyboardAvoidingView behavior='position'>
                        <View style={styles.contentView}>
                        <ScrollView  keyboardShouldPersistTaps='never'>
                            <View style={styles.contenStyle}>
                                <Avatar.Image size={80} style={styles.avatarStyle} source={require('../../../../assets/images/defaultheader.png')} accessibilityLabel='头像'></Avatar.Image>
                                <View style={styles.cardView}>
                                    <LinearGradinet colors={['rgba(157, 104, 189,1)', 'rgba(157, 104, 189,0.6)', 'rgba(252, 251, 251,1)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.titleStyle}>
                                        <Text allowFontScaling={false} style={styles.titleText}>
                                            发布悬赏 <Entypo size={20} color='#F8B032' name='triangle-right'></Entypo>
                                        </Text>
                                    </LinearGradinet>
                                    <View style={styles.inputView}>
                                        <View style={styles.inputImageView}>
                                            <Image style={styles.inputImage} source={require('../../../../assets/images/alimom/frame1.png')} accessibilityLabel='图片'></Image>
                                        </View>
                                        <View style={styles.inputContent}>
                                            <Text allowFontScaling={false} style={styles.inputText}>标题</Text>
                                            <TextInput allowFontScaling={false} selectionColor='#FABA3C' placeholder='请输入' style={styles.inputTitle}></TextInput>
                                            <Text allowFontScaling={false} style={styles.inputText}>描述</Text>
                                            <TextInput allowFontScaling={false} selectionColor='#FABA3C' placeholder='请输入' multiline={true} numberOfLines={4} style={styles.inputDescribe}></TextInput>
                                        </View>
                                    </View>
                                    <View style={styles.bountyView}>
                                        <View style={styles.bountyIconView}>
                                            <Image style={styles.bountyIcon} source={require('../../../../assets/images/money_icon1.png')} accessibilityLabel='图片'></Image>
                                            <Text allowFontScaling={false} style={styles.bountyText}>赏金</Text>
                                        </View>
                                        <View style={styles.bountyNumView}>
                                            <TextInput allowFontScaling={false} selectionColor='#FABA3C' style={styles.bountyInput}></TextInput>
                                            <Image style={styles.bountyNumIcon} source={require('../../../../assets/images/moneyBag.png')} accessibilityLabel='图片'></Image>
                                        </View>
                                        <Button style={styles.buttonStyle} labelStyle={styles.buttonText} onPress={() => console.log('点击发布')}>发布悬赏</Button>
                                    </View>
                                </View>
                            </View>
                            </ScrollView>
                        </View>
                    </KeyboardAvoidingView>
                </View>
        </SafeAreaView>
    )
}
export default RewardView;
const styles = StyleSheet.create({
    reheight: {
        width: windowWidth,
        height: windowHeight,
        zIndex: -19
    },
    parentView: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#B5B5B5'
    },
    headView: {
        height: 50,
        paddingLeft: 10
    },
    contentView: {
        marginTop:180,
        width: windowWidth - 4,
        marginHorizontal: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#FABA3C',
        ...Platform.select({
            android: {
                height: 620,
            },
            ios: {
                height: '80%',
            }
        })
    },
    contenStyle: {
        width: '100%',
        height: windowHeight,
        position: 'relative',
        marginTop:40
    },
    avatarStyle: {
        position: 'absolute',
        top: -20,
        left: '40%',
        zIndex:2
    },
    cardView: {
        width: '94%',
        marginTop: '12%',
        marginHorizontal: '3%',
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                height: '80%',
            },
            android: {
                height: '60%',
            }
        })
    },
    titleStyle: {
        height: 50,
        paddingLeft: 17,
        borderRadius: 10,
        marginHorizontal: 20,
    },
    titleText: {
        fontSize: 19,
        color: '#fff',
        fontWeight: 'bold',
        lineHeight: 50
    },
    inputView: {
        height: 210,
        marginTop: 15,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // backgroundColor:'red'
    },
    inputImageView: {

    },
    inputImage: {
        width: 25,
        height: 100
    },
    inputContent: {
    },
    inputText: {
        fontSize: 15,
        color: '#000',
        lineHeight: 20
    },
    inputTitle: {
        width: windowWidth - 100,
        height: 50,
        marginTop: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: '#F6F6F6'
    },
    inputDescribe: {
        width: windowWidth - 100,
        borderRadius: 5,
        marginTop: 5,
        paddingHorizontal: 10,
        textAlignVertical: 'top',
        backgroundColor: '#F6F6F6',
        ...Platform.select({
            ios: {
                height: 90
            }
        })
    },
    bountyView: {
        // backgroundColor:'red'
    },
    bountyIconView: {
        height: 30,
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // backgroundColor:'red'
    },
    bountyIcon: {
        width: 22,
        height: 22,
        marginTop: 4,
        marginRight: 10
    },
    bountyText: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
        lineHeight: 30
    },
    bountyNumView: {
        height: 60,
        position: 'relative',
        backgroundColor: '#FFEFD7'
    },
    bountyInput: {
        width: '100%',
        height: 60,
        fontSize: 17,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    bountyNumIcon: {
        top: 17,
        right: 20,
        width: 25,
        height: 25,
        position: 'absolute',
        zIndex: 10
    },
    buttonStyle: {
        width: '90%',
        height: 43,
        borderRadius: 8,
        marginTop: 10,
        marginHorizontal: '5%',
        backgroundColor: '#F8B032'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        lineHeight: 24
    }
    // bountyNum:{
    //     width:'100%',
    //     fontSize:17,
    //     color:'#000',
    //     fontWeight:'bold',
    //     lineHeight:60,
    //     textAlign:'center'
    // },
})
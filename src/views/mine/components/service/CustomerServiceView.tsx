import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-animatable';
import { navigate } from '../../../../config/routs/NavigationContainer'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const list1 = [
    {
        index: 1,
        img: require('../../../../assets/images/tup/在线客服.png'),
        text: '在线客服',
        path:'CallCustom'
    },
    {
        index: 2,
        img: require('../../../../assets/images/tup/投诉.png'),
        text: '投诉建议',
        path:'CallCustom'
    },
    {
        index: 3,
        img: require('../../../../assets/images/tup/意见反馈.png'),
        text: '意见反馈',
        path:'CallCustom'
    },
];
const list2 = [
    {
        index: 1,
        text: '怎么创建群聊'
    },
    {
        index: 2,
        text: '怎么充值'
    },
    {
        index: 3,
        text: '如何注销账户'
    },
    {
        index: 4,
        text: '加不了好友怎么办'
    },
];
const list2d = require('../../../../assets/images/tup/dian.png');
const list2right = require('../../../../assets/images/chevron-right.png');
export default class CustomerServiceView extends Component {

    render() {
        const image = require('../../../../assets/images/tup/rc1.png')
        return (
            <View>
                <ImageBackground source={image} resizeMode='cover' style={styles.imagebg}>
                    <View style={styles.wu}></View>
                    <View style={styles.titbox}>
                        <Text style={styles.h2}>
                            Hi~, 有什么可以帮助您！
                        </Text>
                        <View>
                            <Text style={styles.h6}>工作时间:</Text>
                            <Text style={styles.h6}>工作日 9:00 ～ 18:00</Text>
                        </View>
                        <View style={styles.imgbox}>
                            {list1.map(item => {
                                return (
                                    <TouchableOpacity onPress={() => navigate(item.path)}key={item.index}>
                                        <Image source={item.img} style={styles.icon} />
                                        <Text style={styles.h4}>{item.text}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.reqbox}>
                            <Text style={styles.h3}>常见问题</Text>
                            <View>
                                {list2.map(item => {
                                    return (
                                        <TouchableOpacity key={item.index} style={styles.quelist}>
                                            <View style={styles.queleft}>
                                                <Image source={list2d} style={styles.dianicon} />
                                                <Text style={styles.diantext}>{item.text}</Text>
                                            </View>
                                            <Image source={list2right} style={styles.righticon} />
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </View>
                    </View>

                </ImageBackground>
                {/* <View style={}>
                      
                </View> */}
            </View>
        )
    }


}
const styles = StyleSheet.create({
    imagebg: {
        width: windowWidth,
        height: windowHeight,
        // opacity: .6
    },
    wu: {
        position: 'absolute',
        opacity: 0.3,
        width: 600,
        height: windowHeight,
        top: 0,
        left: 0,
        backgroundColor: '#ECEE53'
    },
    h2: {
        fontSize: 23,
        color: '#000'
    },
    h3:{
        color:'#000',
        fontSize:21,
        margin:8,
        fontWeight:'bold'
    },
    h6: {
        fontSize: 14,
        color: '#988989',
        marginTop: 4,
        marginLeft: 8
    },
    h4: {
        fontSize: 16,
        marginTop: 3
    },
    titbox: {
        margin: 20,
        marginLeft: 8,
        padding: 6
    },
    icon: {
        width: 60,
        height: 57,
        margin: 4
    },
    imgbox: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 8,
        borderRadius: 10,
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 40
    },
    dianicon: {
        width: 30,
        height: 30
    },
    righticon:{
        width: 20,
        height: 20
    },
    diantext:{
        fontSize:20,
        color:'#000'
    },
    quelist:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'#988989',
        borderBottomWidth:1,
        padding:8

    },
    queleft:{
        flexDirection:'row'
    },
    reqbox:{
        backgroundColor:'#fff',
        borderRadius:20,
        padding:10,
        paddingHorizontal:20,
        paddingBottom:18,
        marginTop:120
    }
})
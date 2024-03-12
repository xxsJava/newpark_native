import React, { Component } from "react";
import { Trans } from 'react-i18next';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert, Modal, TouchableHighlight, Button, } from "react-native";
import { Appbar } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { navigate } from '../../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

// 个人资料
const personData = () => {
    navigate('PersonalData')

};
// 通知设置
const notiSett = () => {

};
// 清除缓存
const clearCache = () => {
    // setclearhuan(true)
};
// 黑名单
const blackList = () => {

};
// 关于我们
const aboutUs = () => {

};
// 注册用户
const reguser = () => {

};
// 退出登录
const logOut = () => {

};

export default class SetUp extends Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render() {
        const { modalVisible } = this.state;
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

                            {/* 测试清除缓存的模态框 */}
                            <View style={styles.centeredView}>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        this.setModalVisible(!modalVisible);
                                    }}
                                >
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <Text style={styles.modalText}>确定清除本地缓存？</Text>
                                            <View style={styles.heng}>
                                                <TouchableHighlight
                                                    style={{ ...styles.openButton, backgroundColor: "white" }}
                                                    onPress={() => {
                                                        this.setModalVisible(!modalVisible);
                                                    }}
                                                >
                                                    <Text style={[styles.textStyle,{color:'black'}]}>取消</Text>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    style={{ ...styles.openButton, backgroundColor: "red" }}
                                                    onPress={() => {
                                                        this.setModalVisible(!modalVisible);
                                                    }}
                                                >
                                                    <Text style={styles.textStyle}>确定</Text>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>


                            <TouchableOpacity style={styles.itemStyle} activeOpacity={0.4} onPress={() => personData()}>
                                <Text allowFontScaling={false} style={styles.itemText}>个人资料</Text>
                                <View style={styles.itemIconView}>
                                    <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemStyle} activeOpacity={0.4} onPress={() => notiSett()}>
                                <Text allowFontScaling={false} style={styles.itemText}>通知设置</Text>
                                <View style={styles.itemIconView}>
                                    <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemStyle} activeOpacity={0.4} onPress={() => {
                                this.setModalVisible(true);
                            }}>
                                <Text allowFontScaling={false} style={styles.itemText}>清除缓存</Text>
                                <View style={styles.itemIconView}>
                                    <Text allowFontScaling={false} style={styles.itemIconText}>703.10k</Text>
                                    <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemStyle} activeOpacity={0.4} onPress={() => navigate('Black')}>
                                <Text allowFontScaling={false} style={styles.itemText}>黑名单</Text>
                                <View style={styles.itemIconView}>
                                    <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemStyle} activeOpacity={0.4} onPress={() => navigate('About')}>
                                <Text allowFontScaling={false} style={styles.itemText}>关于我们</Text>
                                <View style={styles.itemIconView}>
                                    <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemStyle} activeOpacity={0.4} onPress={() => reguser()}>
                                <Text allowFontScaling={false} style={styles.itemText}>注册用户</Text>
                                <View style={styles.itemIconView}>
                                    <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemStyle} activeOpacity={0.4} onPress={() => logOut()}>
                                <Text allowFontScaling={false} style={[styles.itemText, { color: 'red' }]}>退出登录</Text>
                                <View style={styles.itemIconView}>
                                    <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentView: {
        width: windowWidth,
        height: windowHeight,
    },
    headerText: {
        width: windowWidth,
        height: 45,
        backgroundColor: '#ffb700',
    },
    derTexthea: {
        width: '80%',
        fontSize: 17,
        color: '#000',
        lineHeight: 45,
        textAlign: 'center',
    },
    contentStyle: {
        width: windowWidth,
        height: windowHeight - 60
    },
    scorllStyle: {
        flex: 1
    },
    listStyle: {
        width: windowWidth,
        height: 'auto'
    },
    itemStyle: {
        height: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF'
    },
    itemText: {
        fontSize: 18,
        color: '#444',
        lineHeight: 60,
    },
    itemIconView: {
        flexDirection: 'row',
        justifyContent: "flex-end"
    },
    itemIconText: {
        fontSize: 14,
        color: '#9E9E9E',
        lineHeight: 60,
        marginRight: 5
    },
    itemIcon: {
        lineHeight: 60,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        paddingHorizontal:20
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    heng:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:windowWidth *0.4
    }
})
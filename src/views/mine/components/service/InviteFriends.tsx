import * as React from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Modal, PaperProvider, Portal, Text } from 'react-native-paper';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const MyComponent = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 25, marginTop:480, paddingHorizontal:40, paddingBottom:155};
    const list1 = [
        {
            index: 1,
            img: require('../../../../assets/images/tup/yqhy.jpg'),
            text: '邀请好友'
        },
        {
            index: 2,
            img: require('../../../../assets/images/tup/hyld.jpg'),
            text: '好友领豆'
        },
        {
            index: 3,
            img: require('../../../../assets/images/tup/xyddz.jpg'),
            text: '新园豆到账'
        }
    ];
    const list2 = [
        {
            index: 1,
            img: require('../../../../assets/images/tup/wx.jpg'),
            text: '微信好友'
        },
        {
            index: 2,
            img: require('../../../../assets/images/tup/pyq.jpg'),
            text: '朋友圈'
        },
        {
            index: 3,
            img: require('../../../../assets/images/tup/xlwb.jpg'),
            text: '新浪微博'
        },
        {
            index: 4,
            img: require('../../../../assets/images/tup/zflj.jpg'),
            text: '复制链接'
        },
    ]
    return (
        <PaperProvider>
            <Portal>
                {/* animationType={slide}  */}
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={styles.modelType} >
                    <ScrollView horizontal={true} style={styles.mt2list} showsHorizontalScrollIndicator={false}>
                        {
                            list2.map(item => {
                                return (
                                    <TouchableOpacity key={item.index} style={styles.mtlist} onPress={() =>{console.log(item.text);
                                    }}>
                                        <Image source={item.img} style={[styles.mtImg, item.text == '新浪微博' ? { width: 68 } : null]}></Image>
                                        <View style={styles.zi}>
                                            <Text style={styles.h4}>{item.text}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </Modal>
                {/* <Invite item={visible}></Invite> */}
            </Portal>
            <ScrollView style={styles.parentbg}>
                <View style={[styles.heng, styles.title]}>
                    <Text style={styles.h1}>抢新园红包啦～</Text>
                    <Image source={require('../../../../assets/images/tup/能量豆.png')} style={styles.iconBean}></Image>
                </View>
                <View style={styles.zhong}>
                    <ImageBackground source={require('../../../../assets/images/tup/yqh.jpg')} style={styles.xf}>
                        <View style={styles.xfont}>
                            <View style={styles.heng1}>
                                <Text style={styles.h6}>每成功邀请一位好友</Text>
                                <Text style={[styles.h6, { color: 'red' }]}>[登陆新园]</Text>
                            </View>
                            <Text style={[styles.h6, { marginTop: 10 }]}>你们都可获得</Text>
                            <View style={styles.heng1}>
                                <Text style={styles.a1}>20</Text>
                                <Text style={[styles.h6, { color: 'red', fontWeight: 'bold' }]}>枚新园豆红包</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.intent} onPress={showModal}>
                            <Text style={styles.yqhy}>邀请好友</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.list1Bg}>
                    <View style={styles.tit1}>
                        <Text style={styles.tit1Font}>活动流程</Text>
                    </View>
                    <View style={styles.heng2}>
                        {list1.map(item => {
                            return (
                                <View key={item.index} style={styles.list1Box}>
                                    <Image source={item.img} style={styles.list1Icon}></Image>
                                    <Text style={styles.h4}>{item.text}</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
                <View style={styles.list2Bg}>
                    <View style={styles.tit1}>
                        <Text style={styles.tit1Font}>活动规则</Text>
                    </View>
                    <View>
                        <Text style={styles.bzFont}>
                            1、将本页面分享给您的好友,被邀请者打开链接输入手机号或者微信登录,完成注册/登陆，即可绑定邀请关系;
                        </Text>
                        <Text style={styles.bzFont}>
                            2、被邀请者打开新园APP并登陆,激活奖励,您和被邀请者各获得20新园豆红包;
                        </Text>
                        <Text style={styles.bzFont}>
                            3、同一手机设备/手机号/微信，只能被邀请一次;
                        </Text>
                        <Text style={styles.bzFont}>
                            4、新园豆为新园APP虚拟币,可用于组建团队、兑换优惠券、获取成就徽章等;
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>

    );
};

export default MyComponent;
const styles = StyleSheet.create({
    parentbg: {
        backgroundColor: '#FAF5E7',
        width: windowWidth,
        height: windowHeight,
        padding: 20
       
    },
    heng: {
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    heng1: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    heng2: {
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%'
    },
    title: {
        width: '65%'
    },
    iconBean: {
        width: 49,
        height: 43
    },
    h1: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    h6: {
        fontSize: 15,
        color: 'black',
        // fontWeight: 'bold'
    },
    h4: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    a1: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: 6
    },
    xf: {
        width: 370,
        height: 260,
        marginTop: 40
    },
    xfont: {
        alignItems: 'center',
        width: 370,
        height: 260,
        marginTop: 40
    },
    intent: {
        position: 'absolute',
        left: '39%',
        bottom: 57
    },
    yqhy: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    list1Bg: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list2Bg: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 12,
        marginBottom: 60,
        paddingBottom: 12
    },
    list1Icon: {
        width: 80,
        height: 80
    },
    list1Box: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        marginTop: 20
    },
    tit1: {
        backgroundColor: '#F7B98B',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
        width: 120,
        textAlign: 'center'
    },
    tit1Font: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22
    },
    bzFont: {
        color: '#726F6F',
        fontSize: 13,
        padding: 5,
        lineHeight: 22
    },
    // 底下是模态框的样式
    modelType: {
        position: 'absolute',
        bottom: 0,
        height: windowHeight,
        
    },
    mtImg: {
        width: 55,
        height: 55
    },
    mt2list: {
        display:'flex',
        flexDirection: 'row',
        width: windowWidth,
        flexWrap: 'wrap',
        height:160,
        // paddingTop:12
    },
    zhong: {
        width: windowWidth,
        // height:windowHeight,
        justifyContent: 'center',
        // alignItems:'center'
    },
    mtlist: {
        width: 120,
        // height:110,
        // backgroundColor:'pink',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    zi:{
        marginTop:12,
        justifyContent:'center'
    }
});
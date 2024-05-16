/**
 * 代码描述: 更多 
 * 作者:zhn
 * 修改时间:2024/4/15 16:10:11
 */

import React, { useState } from "react";
import { Dimensions, View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import { navigate } from "../../../../config/routs/NavigationContainer";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ranking = [
    {
        index: 1,
        name: '奇奇',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1009,
        orderTaknum: 321
    },
    {
        index: 2,
        name: '怪怪',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1010,
        orderTaknum: 1
    },
    {
        index: 3,
        name: '可乐',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1011,
        orderTaknum: 3
    },
    {
        index: 4,
        name: '玛卡巴卡',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1012,
        orderTaknum: 322
    },
    {
        index: 5,
        name: '格林屠夫',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1013,
        orderTaknum: 320
    },
    {
        index: 6,
        name: '用户昵称七个字',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1014,
        orderTaknum: 3212
    },
    {
        index: 7,
        name: '苹果',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1015,
        orderTaknum: 3219
    },
    {
        index: 8,
        name: '西瓜',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1011,
        orderTaknum: 327
    },
    {
        index: 9,
        name: '菠萝',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1011,
        orderTaknum: 3210
    },
];
const ranking2 = [
    {
        index: 1,
        name: '奇奇',
        img: require('../../../../assets/images/tup/erji2.png'),
        uid: 1011,
        orderTaknum: 3215
    },
    {
        index: 2,
        name: '怪怪',
        img: require('../../../../assets/images/tup/erji2.png'),
        uid: 1011,
        orderTaknum: 3214
    },
    {
        index: 3,
        name: '可乐',
        img: require('../../../../assets/images/tup/erji2.png'),
        uid: 1011,
        orderTaknum: 3213
    },
    {
        index: 4,
        name: '玛卡巴卡',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1011,
        orderTaknum: 3210
    },
    {
        index: 5,
        name: '格林屠夫',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1011,
        orderTaknum: 32143
    },
    {
        index: 6,
        name: '用户昵称七个字',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1011,
        orderTaknum: 32149
    },
    {
        index: 7,
        name: '苹果',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1011,
        orderTaknum: 32148
    },
    {
        index: 8,
        name: '西瓜',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1011,
        orderTaknum: 3219
    },
    {
        index: 9,
        name: '菠萝',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1011,
        orderTaknum: 3216
    },
];
const ranking3 = [
    {
        index: 1,
        name: '奇奇',
        img: require('../../../../assets/images/tup/jia.png'),
        uid: 1011,
        orderTaknum: 3214
    },
    {
        index: 2,
        name: '怪怪',
        img: require('../../../../assets/images/tup/bgt.jpg'),
        uid: 1011,
        orderTaknum: 3214
    },
    {
        index: 3,
        name: '可乐',
        img: require('../../../../assets/images/tup/hua.png'),
        uid: 1011,
        orderTaknum: 3214
    },
    {
        index: 4,
        name: '玛卡巴卡',
        img: require('../../../../assets/images/tup/dn.png'),
        uid: 1011,
        orderTaknum: 3219
    },
    {
        index: 5,
        name: '格林屠夫',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1011,
        orderTaknum: 3218
    },
    {
        index: 6,
        name: '用户昵称七个字',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1011,
        orderTaknum: 3217
    },
    {
        index: 7,
        name: '苹果',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1011,
        orderTaknum: 3215
    },
    {
        index: 8,
        name: '西瓜',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1011,
        orderTaknum: 3218
    },
    {
        index: 9,
        name: '菠萝',
        img: require('../../../../assets/images/tup/luo.png'),
        uid: 1010,
        orderTaknum: 32124
    },
];

const LeaderBoard = () => {
    const [order, setOrder] = React.useState(1);
    return (
        <ImageBackground source={require('../../../../assets/images/tup/luo.png')} style={styles.container}>
            <View style={[styles.zhong, styles.heng, { alignItems: 'flex-start', borderWidth: 1, borderRadius: 20, width: '60%', marginLeft: '20%', marginTop: 8, justifyContent: 'space-between', height: 40 }]}>
                <TouchableOpacity style={order == 1 ? styles.select : styles.selk} onPress={() => { setOrder(1) }}>
                    <Text style={order == 1 ? styles.text : styles.textk}>日榜</Text>
                </TouchableOpacity >
                <TouchableOpacity style={order == 2 ? styles.select : styles.selk} onPress={() => { setOrder(2) }}>
                    <Text style={order == 2 ? styles.text : styles.textk}>周榜</Text>
                </TouchableOpacity>
                <TouchableOpacity style={order == 3 ? styles.select : styles.selk} onPress={() => { setOrder(3) }
                }>
                    <Text style={order == 3 ? styles.text : styles.textk}>月榜</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.zhong}>
                <View style={styles.tx}>
                    <Image source={require('../../../../assets/images/tup/ppy.png')} style={styles.ava}></Image>
                    <Image source={require('../../../../assets/images/Favorite.png')} style={styles.aixin}></Image>
                </View>
                <Text style={{ color: '#000', fontSize: 17 }}>奇奇</Text>
            </View>
            <View style={styles.wmkt}>
                <View style={styles.mtk}>
                    <View style={{ marginLeft: 12, marginVertical: 8 }}>
                        <Text style={{ fontSize: 18, color: '#000' }}>接单大王</Text>
                    </View>
                    {/* 日榜 */}
                    <ScrollView style={order == 1 ? styles.smmtk : { display: 'none' }}>
                        {
                            ranking.map(item => {
                                return (
                                    <View style={[styles.div, item.index == 1 ? { backgroundColor: '#FEFA83' } : {}, item.index == 2 ? { backgroundColor: '#D1FAFB' } : {}, item.index == 3 ? { backgroundColor: '#F5C6B8' } : {},]} key={item.index}>
                                        <View>
                                            <Image source={require('../../../../assets/images/tup/NO.1(1).png')} style={item.index == 1 ? styles.medals : { display: 'none' }}></Image>
                                            <Image source={require('../../../../assets/images/tup/NO.2(1).png')} style={item.index == 2 ? styles.medals : { display: 'none' }}></Image>
                                            <Image source={require('../../../../assets/images/tup/NO.3(1).png')} style={item.index == 3 ? styles.medals : { display: 'none' }}></Image>
                                            <View style={(item.index != 1 && item.index != 2 && item.index != 3) ? styles.medalsd : { display: 'none' }}>
                                                <Text style={{ fontSize: 27, fontWeight: 'bold', textAlign: 'center', lineHeight: 35 }}>{item.index}</Text>
                                            </View>
                                        </View>
                                        <View style={{ borderWidth: 1, borderRadius: 920, justifyContent: 'center', alignItems: 'center', height: 60, width: 60, marginHorizontal: 80 }}>
                                            <Image source={item.img} style={{ width: 40, height: 40 }}></Image>
                                        </View>
                                        <Text style={{ fontSize: 17, color: '#000', lineHeight: 60 }}>{item.name}</Text>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>

                    {/* 周榜 */}
                    <ScrollView style={order == 2 ? styles.smmtk : { display: 'none' }}>
                        {
                            ranking2.map(item => {
                                return (
                                    <View style={[styles.div, item.index == 1 ? { backgroundColor: '#FEFA83' } : {}, item.index == 2 ? { backgroundColor: '#D1FAFB' } : {}, item.index == 3 ? { backgroundColor: '#F5C6B8' } : {}, {}]} key={item.index}>
                                        <View>
                                            <Image source={require('../../../../assets/images/tup/NO.1(1).png')} style={item.index == 1 ? styles.medals : { display: 'none' }}></Image>
                                            <Image source={require('../../../../assets/images/tup/NO.2(1).png')} style={item.index == 2 ? styles.medals : { display: 'none' }}></Image>
                                            <Image source={require('../../../../assets/images/tup/NO.3(1).png')} style={item.index == 3 ? styles.medals : { display: 'none' }}></Image>
                                            <View style={(item.index != 1 && item.index != 2 && item.index != 3) ? styles.medalsd : { display: 'none' }}>
                                                <Text style={{ fontSize: 27, fontWeight: 'bold', textAlign: 'center', lineHeight: 35 }}>{item.index}</Text>
                                            </View>
                                        </View>
                                        <View style={{ borderWidth: 1, borderRadius: 920, justifyContent: 'center', alignItems: 'center', height: 60, width: 60, marginHorizontal: 40 }}>
                                            <Image source={item.img} style={{ width: 40, height: 40 }}></Image>
                                        </View>
                                        <View style={{ width: 90 }}>
                                            <Text style={{ fontSize: 15, color: '#000', lineHeight: 30 }} ellipsizeMode={"tail"} numberOfLines={1}>{item.name}</Text>
                                            {/* <Text style={{ fontSize: 17, color: '#000', lineHeight: 20 }}>{item.uid}</Text> */}
                                        </View>
                                        <View style={{ justifyContent: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={require('../../../../assets/images/tup/jifen.png')} style={item.index == 1 ? { display: 'none' } : { width: 30, height: 26, marginRight: 6 }}></Image>
                                                <Text style={item.index == 1 ? { display: 'none' } : { color: '#000', lineHeight: 60 }}>{item.orderTaknum}</Text>
                                            </View>
                                            {/* 当榜单是第一的时候就会不显示接单的数量 */}
                                            <View>
                                                <Image source={require('../../../../assets/images/tup/dashenrenzheng_iconx.png')} style={item.index == 1 ? { width: 86, height: 31 } : { display: 'none' }} />
                                                <Text style={item.index == 1 ? { color: '#000', lineHeight: 60 } : { display: 'none' }}>{item.orderTaknum}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                    {/* 月榜 */}
                    <ScrollView style={order == 3 ? styles.smmtk : { display: 'none' }}>
                        {
                            ranking3.map(item => {
                                return (
                                    <View style={[styles.div, item.index == 1 ? { backgroundColor: '#FEFA83' } : {}, item.index == 2 ? { backgroundColor: '#D1FAFB' } : {}, item.index == 3 ? { backgroundColor: '#F5C6B8' } : {},]} key={item.index}>
                                        <View>
                                            <Image source={require('../../../../assets/images/tup/NO.1(1).png')} style={item.index == 1 ? styles.medals : { display: 'none' }}></Image>
                                            <Image source={require('../../../../assets/images/tup/NO.2(1).png')} style={item.index == 2 ? styles.medals : { display: 'none' }}></Image>
                                            <Image source={require('../../../../assets/images/tup/NO.3(1).png')} style={item.index == 3 ? styles.medals : { display: 'none' }}></Image>
                                            <View style={(item.index != 1 && item.index != 2 && item.index != 3) ? styles.medalsd : { display: 'none' }}>
                                                <Text style={{ fontSize: 27, fontWeight: 'bold', textAlign: 'center', lineHeight: 35 }}>{item.index}</Text>
                                            </View>
                                        </View>
                                        <View style={{ borderWidth: 1, borderRadius: 920, justifyContent: 'center', alignItems: 'center', height: 60, width: 60, marginHorizontal: 80 }}>
                                            <Image source={item.img} style={{ width: 40, height: 40 }}></Image>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 17, color: '#000', lineHeight: 60 }}>{item.name}</Text>
                                        </View>

                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>

            </View>
        </ImageBackground>
    )

};
export default LeaderBoard;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#FEFA83',

    },
    zhong: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    heng: {
        flexDirection: 'row'
    },
    ava: {
        width: 70,
        height: 70
    },
    aixin: {
        position: 'absolute',
        width: 20,
        height: 20,
        bottom: 0,
        right: 0
    },
    tx: {
        position: 'relative',
        borderRadius: 90,
        backgroundColor: '#fff',
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wmkt: {
        position: 'absolute',
        height: windowHeight * 0.6,
        width: windowWidth,
        bottom: 0
    },
    mtk: {
        backgroundColor: '#FAF5E7',
        paddingVertical: 20,
        borderRadius: 30,
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        paddingBottom: 80

    },
    div: {
        padding: 8,
        flexDirection: 'row',
        height: 70,
        alignItems: 'center'
    },
    smmtk: {
        height: 340
    },
    medals: {
        width: 35,
        height: 35
    },
    medalsd: {
        width: 35,
        height: 35
    },
    select: {
        backgroundColor: '#FAF5E7',
        borderWidth: 0.6,
        height: '100%',
        flex: 1,
        borderRadius: 90,
        borderEndWidth: 0.6
    },
    selk: {
        flex: 1,

    },
    textk: {
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
        // fontWeight:'bold',
        lineHeight: 40
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: '#FFBF6B',
        // fontWeight:'bold',
        lineHeight: 40
    }


})
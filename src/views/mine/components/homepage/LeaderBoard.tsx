/**
 * 代码描述: 更多 
 * 作者:zhn
 * 修改时间:2024/4/15 16:10:11
 */

import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeadNav from "../../../../components/Nav/HeadNav";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ranking = [
    {
        index: 1,
        name: '奇奇',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1009,
        pid:321
    },
    {
        index: 2,
        name: '怪怪',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1010,
        pid:1
    },
    {
        index: 3,
        name: '可乐',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1011,
        pid:3
    },
    {
        index: 4,
        name: '玛卡巴卡',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1012,
        pid:322
    },
    {
        index: 5,
        name: '格林屠夫',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1013,
        pid:320
    },
    {
        index: 6,
        name: '用户昵称七个字',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1014,
        pid:3212
    },
    {
        index: 7,
        name: '苹果',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1015,
        pid:3219
    },
    {
        index: 8,
        name: '西瓜',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1011,
        pid:327
    },
    {
        index: 9,
        name: '菠萝',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1011,
        pid:3210
    },
];
const ranking2 = [
    {
        index: 1,
        name: '奇奇',
        img: require('../../../../assets/images/tup/erji2.png'),
        uid:1011,
        pid:3215
    },
    {
        index: 2,
        name: '怪怪',
        img: require('../../../../assets/images/tup/erji2.png'),
        uid:1011,
        pid:3214
    },
    {
        index: 3,
        name: '可乐',
        img: require('../../../../assets/images/tup/erji2.png'),
        uid:1011,
        pid:3213
    },
    {
        index: 4,
        name: '玛卡巴卡',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1011,
        pid:3210
    },
    {
        index: 5,
        name: '格林屠夫',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1011,
        pid:32143
    },
    {
        index: 6,
        name: '用户昵称七个字',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1011,
        pid:32149
    },
    {
        index: 7,
        name: '苹果',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1011,
        pid:32148
    },
    {
        index: 8,
        name: '西瓜',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1011,
        pid:3219
    },
    {
        index: 9,
        name: '菠萝',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1011,
        pid:3216
    },
];
const ranking3 = [
    {
        index: 1,
        name: '奇奇',
        img: require('../../../../assets/images/tup/jia.png'),
        uid:1011,
        pid:3214
    },
    {
        index: 2,
        name: '怪怪',
        img: require('../../../../assets/images/tup/bgt.jpg'),
        uid:1011,
        pid:3214
    },
    {
        index: 3,
        name: '可乐',
        img: require('../../../../assets/images/tup/hua.png'),
        uid:1011,
        pid:3214
    },
    {
        index: 4,
        name: '玛卡巴卡',
        img: require('../../../../assets/images/tup/dn.png'),
        uid:1011,
        pid:3219
    },
    {
        index: 5,
        name: '格林屠夫',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1011,
        pid:3218
    },
    {
        index: 6,
        name: '用户昵称七个字',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1011,
        pid:3217
    },
    {
        index: 7,
        name: '苹果',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1011,
        pid:3215
    },
    {
        index: 8,
        name: '西瓜',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1011,
        pid:3218
    },
    {
        index: 9,
        name: '菠萝',
        img: require('../../../../assets/images/tup/luo.png'),
        uid:1010,
        pid:32124
    },
];

const LeaderBoard = () => {
    const [order, setOrder] = React.useState(1);
    return (
        <View style={styles.container}>
            <HeadNav props={{title:'排行榜',navPath:''}} />
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
                        <Text style={{ fontSize: 18 }}>今日TOP</Text>
                    </View>
                    {/* 日榜 */}
                    <ScrollView style={order == 1 ? styles.smmtk : {display:'none'}}>
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
                                        <Text style={{ fontSize: 17, color: '#000', lineHeight: 70 }}>{item.name}</Text>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>

                    {/* 周榜 */}
                    <ScrollView style={order == 2 ? styles.smmtk : {display:'none'}}>
                        {
                            ranking2.map(item => {
                                return (
                                    <View style={[styles.div, item.index == 1 ? { backgroundColor: '#FEFA83' } : {}, item.index == 2 ? { backgroundColor: '#D1FAFB' } : {}, item.index == 3 ? { backgroundColor: '#F5C6B8' } : {},{}]} key={item.index}>
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
                                        <Text style={{ fontSize: 17, color: '#000', lineHeight: 30 }}>{item.name}</Text>
                                        <Text style={{ fontSize: 17, color: '#000', lineHeight: 20 }}>{item.uid}</Text>
                                        </View>
                                        <View>
                                        <Text style={{ fontSize: 17, color: '#000', lineHeight: 70 }}>{item.pid}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                    {/* 月榜 */}
                    <ScrollView style={order == 3 ? styles.smmtk : {display:'none'}}>
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
                                        <Text style={{ fontSize: 17, color: '#000', lineHeight: 70 }}>{item.name}</Text>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>

            </View>
        </View>
    )

};
export default LeaderBoard;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#FEFA83'
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
        backgroundColor: '#fff',
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
        backgroundColor: '#fff',
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
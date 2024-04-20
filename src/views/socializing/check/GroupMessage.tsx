import { any } from "prop-types";
import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Switch } from 'react-native-paper';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const GroupMessage = () => {
    const [show, setShow] = React.useState(false);
    const [topSession, setTopSession] = React.useState(false);
    const [messDis, setMessDis] = React.useState(false);
    const [blankgag, setBlankgag] = React.useState(false);

    const topS = (value: boolean | ((prevState: boolean) => boolean)) => {
        setTopSession(value)
        console.log(value, '这个是置顶会话的');
    }
    const topM = (value: boolean | ((prevState: boolean) => boolean)) => {
        setMessDis(value)
        console.log(value, '这个是消息免打扰的');
    }
    const topB = (value: boolean | ((prevState: boolean) => boolean)) => {
        setBlankgag(value)
        console.log(value, '这个是全体禁言的');
    }
    const GroupNumber = [
        {
            index: 1,
            name: 'xxs18',
            ava: require('../../../assets/images/tup/dn.png')
        },
        {
            index: 2,
            name: '会议室的灯总是彻夜不眠',
            ava: require('../../../assets/images/tup/cd5.png')
        }
    ]
    return (
        <View style={styles.contation}>
            <ScrollView style={{ flex: 1,marginBottom:80 }}>
                <View style={styles.heng}>
                    <Image source={require('../../../assets/images/tup/ppy.png')} style={{ width: 40, height: 40,marginRight:12 }}></Image>
                    <Text style={{color:'#000',fontSize:16}}>调试群</Text>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/tup/fuzhi.png')} style={styles.copyico}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.xian}></View>
                <View style={styles.heng}>
                    <Text style={styles.tipb}>群成员</Text>
                    <Text style={{ marginLeft: 10, color: '#000', fontSize: 15 }}>2人</Text>
                </View>
                <View style={styles.heng}>
                    {GroupNumber.map(item => {
                        return (
                            <View key={item.index} style={{ width: 50, marginHorizontal: 6 }}>
                                <Image source={item.ava} style={styles.numAva}></Image>
                                <Text ellipsizeMode="tail" numberOfLines={1} style={{color:'#000'}}>{item.name}</Text>
                            </View>
                        )
                    })}
                    <TouchableOpacity style={{ width: 40, height: 40, borderColor: '#8a8a8a', borderWidth: 2, alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginHorizontal: 6 }}>
                        <Image source={require('../../../assets/images/tup/jia-2.png')} style={{ width: 26, height: 26 }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 40, height: 40, borderColor: '#8a8a8a', borderWidth: 2, alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginHorizontal: 6 }}>
                        <Image source={require('../../../assets/images/tup/jian.png')} style={{ width: 26, height: 26 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ width: windowWidth, marginVertical: 6 }}>
                    <Text style={{ textAlign: 'center', color: '#009AFF', fontSize: 15 }}>查看更多</Text>
                </View>
                <View style={styles.xian}></View>
                <View style={[styles.heng, styles.liangb]}>
                    <Text style={styles.tipb}>群聊ID</Text>
                    <View style={styles.heng}>
                        <Text>
                            166347899
                        </Text>
                        <Image source={require('../../../assets/images/tup/fuzhi.png')} style={styles.copyico}></Image>
                    </View>
                </View>
                <View style={[styles.heng, styles.liangb]}>
                    <Text style={styles.tipb}>群类型</Text>
                    <View style={styles.heng}>
                        <Text>
                            工作群
                        </Text>
                    </View>
                </View>
                <View style={styles.xian}></View>
                <View style={[styles.heng, styles.liangb]}>
                    <Text style={styles.tipb}>我的群聊昵称</Text>
                    <View style={styles.heng}>
                        <Text>
                            xxs18
                        </Text>
                        <Image source={require('../../../assets/images/tup/fuzhi.png')} style={styles.copyico}></Image>
                    </View>
                </View>
                <View style={[styles.heng, styles.liangb]}>
                    <Text style={[styles.tipb, { color: topSession ? '#000' : '#ccc' }]}>置顶会话</Text>
                    <Switch value={topSession} onValueChange={(value) => { topS(value); }} color='#ECB32C' />
                </View>
                <View style={[styles.heng, styles.liangb]}>
                    <Text style={[styles.tipb, { color: messDis ? '#000' : '#ccc' }]}>消息免打扰</Text>
                    <Switch value={messDis} onValueChange={(value) => { topM(value); }} color='#ECB32C' />
                </View>
                <View style={[styles.heng, styles.liangb]}>
                    <Text style={[styles.tipb, { color: blankgag ? '#000' : '#ccc' }]}>全体禁言</Text>
                    <Switch value={blankgag} onValueChange={(value) => { topB(value); }} color='#ECB32C' />
                </View>
                <TouchableOpacity style={[styles.heng, styles.liangb]} onPress={() => setShow(true)}>
                    <Text style={[styles.tipb, { color: '#000' }]}>清空聊天记录</Text>
                    <Image source={require('../../../assets/images/tup/you.png')} style={styles.you}></Image>
                </TouchableOpacity>
                <View style={styles.xian}></View>
                <TouchableOpacity style={[styles.heng, styles.liangb]} onPress={() => setShow(true)}>
                    <Text style={[styles.tipb, { color: '#000' }]}>群聊验证</Text>
                    <View style={[styles.heng, { paddingHorizontal: 0 }]}>
                        <Text>群成员邀请无需验证</Text>
                        <Image source={require('../../../assets/images/tup/you.png')} style={styles.you}></Image>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.heng, styles.liangb]} onPress={() => setShow(true)}>
                    <Text style={[styles.tipb, { color: '#000' }]}>群成员权限</Text>
                    <Image source={require('../../../assets/images/tup/you.png')} style={styles.you}></Image>
                </TouchableOpacity>
                <View style={styles.xian}></View>
              <View style={{height:100}}>
              <TouchableOpacity style={[styles.heng, styles.liangb]} onPress={() => setShow(true)}>
                    <Text style={[styles.tipb, { color: '#000' }]}>转让群组</Text>
                    <Image source={require('../../../assets/images/tup/you.png')} style={styles.you}></Image>
                </TouchableOpacity>
              </View>
              <View style={{marginTop:20,width:windowWidth,alignItems:'center'}}>
                <TouchableOpacity style={{width:80,height:40,backgroundColor:'#FA4B4D',borderRadius:8}}>
                    <Text style={{fontSize:16,color:'#fff',lineHeight:40,textAlign:'center',fontWeight:'bold'}}>解散群组</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>

            <View style={show ? { position: 'absolute' } : { display: 'none' }}>
                <TouchableOpacity style={{ position: 'absolute', width: windowWidth, height: windowHeight, backgroundColor: '#000', opacity: 0.3 }} onPress={() => setShow(false)}></TouchableOpacity>
                <View style={{ backgroundColor: '#fff', position: 'absolute', top: windowHeight * 0.3, left: windowWidth * 0.1, width: windowWidth * 0.8, borderRadius: 12, paddingVertical: 12, paddingHorizontal: 20 }}>
                    <View style={styles.heng}>
                        <Image source={require('../../../assets/images/tup/tishi.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ color: '#000', fontSize: 18, }}>清空聊天记录</Text>
                    </View>
                    <View style={{ width: '100%', marginVertical: 20 }}>
                        <Text style={{ fontSize: 16, color: '#000' }}>确认清空聊天记录吗?</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', height: 60, alignItems: 'center' }}>
                        <TouchableOpacity style={{ borderRadius: 6, borderWidth: 0.7, borderColor: '#0089FF', marginRight: 12, height: 30, width: 60 }} onPress={() => setShow(false)}>
                            <Text style={{ color: '#0089FF', fontSize: 17, lineHeight: 30, textAlign: 'center' }}>取消</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#0089FF', borderRadius: 6, height: 30, width: 60 }} onPress={() => {
                            console.log('点击了确定');
                        }}>
                            <Text style={{ color: '#fff', fontSize: 17, lineHeight: 30, textAlign: 'center' }}>确定</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default GroupMessage;

const styles = StyleSheet.create({
    contation: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#fff',
        position:'relative',
        zIndex:-2
    },
    xian: {
        backgroundColor: '#F2F2F2',
        height: 10,
        width: windowWidth
    },
    heng: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    liangb: {
        justifyContent: 'space-between'
    },
    numAva: {
        width: 40,
        height: 40
    },
    copyico: {
        width: 15,
        height: 15,
        marginLeft: 6,
        borderColor: '#009AFF'
    },
    tipb: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold'
    },
    you: {
        width: 28,
        height: 28
    }
})
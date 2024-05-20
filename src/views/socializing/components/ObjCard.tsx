import React, { Component, useEffect, useState } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView
} from 'react-native';
import { Avatar, Switch } from 'react-native-paper';
import { navigate } from '../../../config/routs/NavigationContainer';
import { friAddBlack, friRemoveBlack,delFriend } from '../../../api/imApi/index';
import Storage from '../../../utils/AsyncStorageUtils';
import { friAddBlackType, friRemoveBlackType,delFriendType} from '../../../api/imApi/type';
import { useToast, Toast, VStack, ToastTitle, ToastDescription } from '@gluestack-ui/themed';

const windowwidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
interface timeGroupType {
    val: string
};
const ObjCard = (peopInfo:any) => {
    const [isShow, setIsShow] = useState(false);
    const [watchTime, setWatchTime] = useState('30s');
    const [timeSelect, setTimeSele] = useState('30s');
    const [switchControlList, setSwitchControlList] = useState({});
    const [peopInfo1, setPeopInfo] = useState(peopInfo.route.params);
    const [zdhhVal, setzdhhVal] = useState(false);
    const [xxmdrVal, setxxmdrVal] = useState(false);
    const [jrhmdVal, setjrhmdVal] = useState(false);
    const [yhjf, setyhjf] = useState(false);
    const toast = useToast();
    const [timeGroup, setTimeGroup] = useState([
        {
            index: 1,
            val: '30s'
        },
        {
            index: 2,
            val: '5分钟'
        },
        {
            index: 3,
            val: '1小时'
        }
    ]);
    // 黑名单的开关 这个开关的val 因为是useState,所以总是慢一步
    const joinBlack = async () => {
        console.log(jrhmdVal,'黑名单-----');
        
        if (!jrhmdVal) {
            const uId = await Storage.get('usr-uId');
            const params: friAddBlackType = {
                ownerUserID: uId,
                blackUserID: peopInfo1.friendUser.userID,
                ex: ""
            }
            const data1 = await friAddBlack(params);
            // console.log(data1.errCode, '加入黑名单的数据');
            if (data1.errCode == 0 ) {
                toast.show({
                    placement: "top",
                    render: ({ id }) => {
                        const toastId = "toast-" + id
                        return (
                            <Toast nativeID={toastId} action="attention" variant="solid">
                                <VStack space="xs">
                                    <ToastTitle style={{ textAlign: 'center', fontSize: 22, color: '#000', fontWeight: 'bold' }}>提示</ToastTitle>
                                    <ToastDescription style={{ marginTop: 12 }}>
                                        加入黑名单
                                    </ToastDescription>
                                </VStack>
                            </Toast>
                        )
                    },
                })
            }

        } else {
            const uId = await Storage.get('usr-uId');
            const params: friRemoveBlackType = {
                ownerUserID: uId,
                blackUserID: peopInfo1.friendUser.userID,
            }
            const data1 = await friRemoveBlack(params);
            console.log(data1, '移除黑名单的数据');

            if (data1.errCode == 0) {
                toast.show({
                    placement: "top",
                    render: ({ id }) => {
                        const toastId = "toast-" + id
                        return (
                            <Toast nativeID={toastId} action="attention" variant="solid">
                                <VStack space="xs">
                                    <ToastTitle style={{ textAlign: 'center', fontSize: 22, color: '#000', fontWeight: 'bold' }}>提示</ToastTitle>
                                    <ToastDescription style={{ marginTop: 12 }}>
                                        移除黑名单
                                    </ToastDescription>
                                </VStack>
                            </Toast>
                        )
                    },
                })
            }
        }
    }

    // 置顶会话的开关
    const topSession = () => {
        console.log(zdhhVal,'置顶会话的值');
        
    };
    // 删除好友的方法
    const delFriendm = async() => {
        const uId = await Storage.get('usr-uId');
        const params: friAddBlackType = {
            ownerUserID: uId,
            friendUserID: peopInfo1.friendUser.userID
        }
        const data1 = await delFriend(params);
        console.log(data1,'删除好友=====');
        if(data1.errCode == 0) {
            toast.show({
                placement: "top",
                render: ({ id }) => {
                    const toastId = "toast-" + id
                    return (
                        <Toast nativeID={toastId} action="attention" variant="solid">
                            <VStack space="xs">
                                <ToastTitle style={{ textAlign: 'center', fontSize: 22, color: '#000', fontWeight: 'bold' }}>提示</ToastTitle>
                                <ToastDescription style={{ marginTop: 12 }}>
                                    您已删除成功！！！
                                </ToastDescription>
                            </VStack>
                        </Toast>
                    )
                },
            })
        }
    }
    return (
        <SafeAreaView style={styles.containes}>
            <View>
                <TouchableOpacity style={styles.avatarStyle}>
                    <View style={styles.info}>

                        <Avatar.Image size={46} source={{ uri: (peopInfo1.friendUser.faceURL.length == 0? 'http://xxs18-test.oss-accelerate.aliyuncs.com/2024/05/17/1d4ae439-1444-4fe7-8889-7ac9b4f2c5fc.png': peopInfo1.friendUser.faceURL )}} accessibilityLabel='头像'></Avatar.Image>
                        <Text style={styles.h2}>{peopInfo1.friendUser.nickname}</Text>
                    </View>
                    <Image source={require('../../../assets/images/chevron-right.png')} style={styles.rightIcon} accessibilityLabel='图片' alt="头像" />
                </TouchableOpacity>
                <View style={styles.xian}></View>
                <View style={styles.boxmin}>
                    <View style={styles.boxStylemin}>
                        <Text style={zdhhVal ? styles.h6 : styles.h6null}>置顶会话</Text>
                        <View>
                            <Switch value={zdhhVal} onValueChange={(value) => { setzdhhVal(value); topSession() }} color='#ECB32C' />
                        </View>
                    </View>
                    <View style={styles.boxStylemin}>
                        <Text style={xxmdrVal ? styles.h6 : styles.h6null}>消息免打扰</Text>
                        <View>
                            <Switch value={xxmdrVal} onValueChange={(value) => { setxxmdrVal(value); }} color='#ECB32C' />
                        </View>
                    </View>
                    <View style={styles.boxStylemin}>
                        <Text style={jrhmdVal ? styles.h6 : styles.h6null}>加入黑名单</Text>
                        <View>
                            <Switch value={jrhmdVal} onValueChange={(value) => { setjrhmdVal(value);joinBlack() }} color='#ECB32C' />
                        </View>
                    </View>

                </View>
                <View style={styles.xian}></View>
                <View>
                    <View style={styles.boxStylemin}>
                        <Text style={yhjf ? styles.h6 : styles.h6null}>阅后即焚</Text>
                        <View>
                            <Switch value={yhjf} onValueChange={(value) => { setyhjf(value); }} color='#ECB32C' />
                        </View>
                    </View>
                    <View style={styles.boxStylemin}>
                        <Text style={styles.h6}>阅后即焚时间</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setIsShow(!isShow)}>
                            <Text>{timeSelect}</Text>
                            <Image source={require('../../../assets/images/chevron-right.png')} style={{ width: 18, height: 18, marginLeft: 5 }}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.xian}></View>

                <TouchableOpacity style={styles.boxStyle}>
                    <Text style={styles.h6r}>清空聊天记录</Text>
                    <Image source={require('../../../assets/images/chevron-right.png')} style={styles.rightIcon} accessibilityLabel='图片' alt="头像" />
                </TouchableOpacity>
            </View>
            <View style={{ width: windowwidth, position: 'absolute', bottom: 60, alignItems: 'center', justifyContent: 'center', left: 0, height: 120 }}>
                <TouchableOpacity style={{ backgroundColor: '#FE4D4F', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 }} onPress={delFriendm}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>删除好友</Text>
                </TouchableOpacity>
            </View>
            <View style={{ position: 'absolute', width: windowwidth, height: windowHeight, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={isShow ? { width: windowwidth, height: windowHeight, backgroundColor: '#000', position: 'absolute', top: 0, left: 0, opacity: 0.3 } : { display: 'none' }} onPress={() => setIsShow(!isShow)}></TouchableOpacity>
                <View style={isShow ? styles.mainMtk : { display: 'none' }}>
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/images/chevron-left.png')} style={{ width: 20, height: 20 }}></Image>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, color: '#000' }}>设置禁言</Text>
                        <TouchableOpacity onPress={() => { setIsShow(!isShow) }}>
                            <Text style={{ color: '#1685F3', fontSize: 16 }}>保存</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {
                            timeGroup.map((item: timeGroupType) => {
                                return (
                                    <TouchableOpacity style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 8 }, timeSelect == item.val ? { backgroundColor: '#F3F8FF' } : { backgroundColor: '#fff' }]} onPress={() => { setTimeSele(item.val) }} key={item.val}>
                                        <Text style={{ fontSize: 16, color: '#000' }}>{item.val}</Text>
                                        <Image source={require('../../../assets/images/tup/duihao.png')} style={item.val == timeSelect ? { width: 30, height: 30 }:{display:'none'}}></Image>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default ObjCard;
const styles = StyleSheet.create({
    containes: {
        width: windowwidth,
        height: windowHeight,
        backgroundColor: '#fff'
    },
    xian: {
        backgroundColor: '#F2F2F2',
        height: 10,
        width: windowwidth
    },
    h2: {
        color: '#000',
        fontSize: 21,
        marginLeft: 8
    },
    h6: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000'
    },
    h6null: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ccc'
    },
    h6r: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'red'
    },
    h7: {
        fontSize: 16,
        color: '#F49F0B',
        fontWeight: 'bold',
        marginLeft: 8
    },
    avatarStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 12,
        alignItems: 'center',
        // 阴影的配置
        elevation: 2, // 适配android的
        shadowOffset: { width: 0, height: 0 }, // 以下4项适配ios
        shadowColor: 'black',
        shadowOpacity: .3,
        shadowRadius: 2
    },
    rightIcon: {
        width: 20,
        height: 20
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxStyle: {
        elevation: 2, // 适配android的
        shadowOffset: { width: 0, height: 0 }, // 以下4项适配ios
        shadowColor: 'black',
        shadowOpacity: .3,
        shadowRadius: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
    },
    boxStylemin: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    boxmin: {
        elevation: 2, // 适配android的
        shadowOffset: { width: 0, height: 0 }, // 以下4项适配ios
        shadowColor: 'black',
        shadowOpacity: .3,
        shadowRadius: 2,
        backgroundColor: '#fff',

    },
    boxStylemin1: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 18,
        borderBottomWidth: 1,
        borderColor: '#BBBBBB'
    },
    mainMtk: {
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 12,
        padding: 12
    },
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

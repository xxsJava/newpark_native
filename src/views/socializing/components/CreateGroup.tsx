import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text, Dimensions, Image, TextInput } from "react-native";
import { createGroup } from '../../../api/imApi/index';
import { createGroupType } from '../../../api/imApi/type';
import Storage from '../../../utils/AsyncStorageUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const CreateGroup = (item: any) => {
    console.log(item.route.params);
    const [groupName, setGroupName] = useState('');
    const [own, setOwn] = useState({});
    const peopNum = item.route.params;
    // 遍历出数组里面的人名、头像、id
    const [ownerUserID,setOwnerUserId] =  useState('');
    const [useId, setUseId] = useState([]);

    const LoopId = peopNum.map(item =>
        item.friendUser.userID
    )


    const LoopAva = peopNum.map(item => ({
        faceURL: item.friendUser.faceURL,
        nickname: item.friendUser.nickname
    }));
    const test = async () => {
        console.log(LoopId, '-------------');
        //  获取全部的key值
        const keys = await AsyncStorage.getAllKeys();
        const uId = await Storage.get('usr-uId');
        const ava1 = await Storage.get('ava')
        //  const description = await Storage.get('description')
        //  const auth = await Storage.get('im-auth')
        //  const uid = await Storage.get('uid')
        //  const uphone = await Storage.get('uphone')
        const unikname = await Storage.get('unikname')
        console.log(ava1,uId,ava1,unikname, '=======');
        setOwn({
            faceURL: ava1,
            nickname: unikname
        })
        setOwnerUserId(uId)

        const idall = [uId];

        // const mergedArray = Array.from([...idall, ...LoopId]);
        console.log(mergedArray);
        setUseId(mergedArray);
        console.log(useId,ownerUserID,uId, '.........');

    }

    const createChat = async () => {
        const currentTimestamp = Date.now();

        const params:createGroupType  =  {
            memberUserIDs: LoopId,
            adminUserIDs: [],
            ownerUserID: ownerUserID,
            groupInfo: {
                groupID: currentTimestamp + LoopAva[0].nickname,
                groupName: groupName,
                notification: '群通知',
                introduction: '介绍',
                faceURL: 'http://xxs18-test.oss-accelerate.aliyuncs.com/2024/05/24/de601a84-a0f3-4fe2-a833-640c98b486e8.png',
                ex: 'ex',
                "groupType": 2,
                "needVerification": 0,
                "lookMemberInfo": 0,
                "applyMemberFriend": 0,
                "notificationUserID":"10000",
                "notificationUpdateTime":1716530097383,
                "creatorUserID":"10000",
                "status":0,
                "memberCount":2,
                "createTime":1716530097383
            }
        };
        const data1 = await createGroup(params);
        console.log(data1,'点击完成创建得到的数据----',params);
        
    };
   
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={test} style={{ width: 60, height: 60, backgroundColor: 'aqua' }}>
                <Text>这里</Text>
            </TouchableOpacity>
            <View style={styles.yi}>
                <Image source={require('../../../assets/images/tup/pintuan.png')} style={{ width: 60, height: 60 }}></Image>
                <TextInput
                    onChangeText={text => setGroupName(text)}
                    value={groupName}
                    placeholder="创建群聊,请输入群聊名称"
                    style={{ fontSize: 19, marginLeft: 3, width: '76%' }}
                    maxLength={20}
                />
            </View>
            <View style={styles.menber}>
                <View style={styles.heng}>
                    <Text style={{ fontSize: 16 }}>群成员</Text>
                    <Text>{LoopId.length}人</Text>
                </View>
                <View style={[styles.heng, { justifyContent: 'flex-start', flexWrap: 'wrap', marginTop: 6 }]}>
                    {/* 自己的头像 */}
                    <View style={{ margin: 6 }}>
                        <Image source={{ uri: own.faceURL == null ? 'http://xxs18-test.oss-accelerate.aliyuncs.com/2024/05/17/1d4ae439-1444-4fe7-8889-7ac9b4f2c5fc.png' : item.faceURL }} style={{ width: 58, height: 58, borderRadius: 6 }}></Image>
                        <Text style={{ fontSize: 14, textAlign: 'center', color: '#000', marginVertical: 3 }}>{own.nickname}</Text>
                    </View>
                    {
                        LoopAva.map((item) => {
                            return (
                                <View style={{ margin: 6 }}>
                                    <Image source={{ uri: item.faceURL.length == 0 ? 'http://xxs18-test.oss-accelerate.aliyuncs.com/2024/05/17/1d4ae439-1444-4fe7-8889-7ac9b4f2c5fc.png' : item.faceURL }} style={{ width: 58, height: 58, borderRadius: 6 }}></Image>
                                    <Text style={{ fontSize: 14, textAlign: 'center', color: '#000', marginVertical: 3 }}>{item.nickname}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            <View style={groupName.length <= 0 ? [styles.btndiv, { backgroundColor: '#E0E0E0' }] : { display: 'none' }}>
                <Text style={styles.btnT}>完成创建</Text>
            </View>
            <TouchableOpacity style={groupName.length > 0 ? [styles.btndiv, { backgroundColor: '#0088FE' }] : { display: 'none' }} onPress={createChat}>
                <Text style={styles.btnT}>完成创建</Text>
            </TouchableOpacity>
        </View>
    )
};

export default CreateGroup;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#F8F8F8'
    },
    yi: {
        height: 80,
        width: windowWidth,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 12,
        alignItems: 'center',
        paddingHorizontal: 8,
        marginBottom: 12
    },
    menber: {
        backgroundColor: '#fff',
        width: windowWidth,
        paddingHorizontal: 12,
        padding: 8
    },
    heng: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btndiv: {
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        position: 'absolute',
        bottom: 60,
        left: 0,
        height: 60
    },
    btnT: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
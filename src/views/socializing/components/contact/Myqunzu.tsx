import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, View, TouchableOpacity, Image, Text,FlatList } from "react-native";
import { joinedGroup } from '../../../../api/imApi/index';
import Storage from '../../../../utils/AsyncStorageUtils';
import Feather from 'react-native-vector-icons/Feather';
import { navigate } from "../../../../config/routs/NavigationContainer";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Item = ({data}:any) => (
    <TouchableOpacity>
      <View style={styles.listSty}>
        <Image source={{uri:data.faceURL}} style={styles.faceUrl}></Image>
        <View >
            <Text style={{fontSize:16,color:'#000',width:160,height:30}} ellipsizeMode={"tail"} numberOfLines={1}>{data.groupName}</Text>
            <Text>{data.memberCount}人</Text>
        </View>
        <View style={styles.rig}>
        <Feather name="chevron-right" size={20} color="#999" />
        </View>
      </View>
    </TouchableOpacity>
  );

const Myqunzu = () => {
    const [select, setSelect] = React.useState(1);

    const xr = async () => {
        const uId = await Storage.get('usr-uId');
        const params = {
            "fromUserID": uId,
            "pagination": {
                "pageNumber": 1,
                "showNumber": 50
            }
        };
        const groupInfo = await joinedGroup(params);
        
        console.log('这是我获得的群组信息---->', groupInfo);

    };
    React.useEffect(() => {
        // xr()
    }, []);

    const groups = [
        {
            "groupID": "2137448827",
            "groupName": "11111",
            "notification": "",
            "introduction": "",
            "faceURL": "https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg",
            "ownerUserID": "3517105008",
            "createTime": 1687753739612,
            "memberCount": 3,
            "ex": "",
            "status": 0,
            "creatorUserID": "2699373280",
            "groupType": 2,
            "needVerification": 0,
            "lookMemberInfo": 0,
            "applyMemberFriend": 0,
            "notificationUpdateTime": 0,
            "notificationUserID": ""
        },
        {
            "groupID": "2759960147",
            "groupName": "哼哼唧唧",
            "notification": "",
            "introduction": "",
            "faceURL": "",
            "ownerUserID": "4771680259",
            "createTime": 1688106933734,
            "memberCount": 7,
            "ex": "",
            "status": 0,
            "creatorUserID": "4771680259",
            "groupType": 2,
            "needVerification": 0,
            "lookMemberInfo": 0,
            "applyMemberFriend": 0,
            "notificationUpdateTime": 0,
            "notificationUserID": ""
        },
        {
            "groupID": "3686066424",
            "groupName": "chao、多久时间、2234",
            "notification": "",
            "introduction": "",
            "faceURL": "",
            "ownerUserID": "9906953281",
            "createTime": 1687933342067,
            "memberCount": 3,
            "ex": "",
            "status": 0,
            "creatorUserID": "9906953281",
            "groupType": 2,
            "needVerification": 0,
            "lookMemberInfo": 0,
            "applyMemberFriend": 0,
            "notificationUpdateTime": 0,
            "notificationUserID": ""
        }
    ];
    return (
        <View style={styles.contain}>
            <TouchableOpacity style={{ width: '100%' }} onPress={() => navigate('MyqunzuSeach')}>
                <View style={styles.seach}>
                    <Image source={require('../../../../assets/images/search.png')} style={styles.seaicon}></Image>
                    <Text style={{ color: '#5D5D62', fontSize: 17 }}> 搜索 : 群组</Text>
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '60%', marginTop: 20 }}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setSelect(1)}>
                    <Text style={{ color: '#000', fontSize: 15 }}>我创建的</Text>
                    <View style={select == 1 ? styles.sele : { display: 'none' }}></View>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setSelect(2)}>
                    <Text style={{ color: '#000', fontSize: 15 }}>我加入的</Text>
                    <View style={select == 2 ? styles.sele : { display: 'none' }}></View>
                </TouchableOpacity>
            </View>

            <FlatList
                data={groups}
                renderItem={({ item }) => <Item data={item} />}
                keyExtractor={item => item.groupID}
            />
        </View>
    )
};
export default Myqunzu;

const styles = StyleSheet.create({
    contain: {
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    seaicon: {
        width: 20,
        height: 20,
        alignItems: 'center',
        marginRight: 8
    },
    seach: {
        width: '96%',
        backgroundColor: '#E9EAED',
        height: 40,
        borderRadius: 8,
        flexDirection: 'row',
        paddingLeft: 12,
        alignItems: 'center',
        marginLeft: '2%',
        marginTop: 20
    },
    sele: {
        width: 40,
        height: 3,
        backgroundColor: '#1F6BEB',
        marginTop: 8
    },
    faceUrl:{
        width:60,
        height:60,
        borderRadius:8,
        marginRight:12
    },
    listSty:{
        width:windowWidth * 0.9,
        position:'relative',
        flexDirection:'row',
        height:80,
        borderBottomWidth:0.5,
        borderColor:'#ccc',
        alignItems:'center',
        paddingHorizontal:8
    },
    rig:{
        position:'absolute',
        right:20
    }
})
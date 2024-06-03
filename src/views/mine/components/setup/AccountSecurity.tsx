import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Platform, Switch, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { noDisturbingType } from '../../../../api/imApi/type';
import { noDisturbing1 } from '../../../../api/imApi/index';
import Storage from '../../../../utils/AsyncStorageUtils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const AccountSecurity = () => {
    const [noDisturbing, setNoDisturbing] = useState(true);
    const relieve = async (data: any) => {
        const uId = await Storage.get('usr-uId');
        console.log(data);
        if (data) {
            console.log('在变成true的时候点击');
            const params:noDisturbingType = {
                userID: uId,
                globalRecvMsgOpt: 2
            }
            const data1 = await noDisturbing1(params);
            console.log(data1,'调取接口得到的========');
            
        } else {
            console.log('在变成false的时候点击');
            const params:noDisturbingType = {
                userID: uId,
                globalRecvMsgOpt: 0
            }
            const data2 = await noDisturbing1(params);
            console.log(data2,'调取接口得到的数据2========');
        }
        setNoDisturbing(data)
    }
    return (
        <View style={styles.container}>
            <View style={styles.heng}>
                <Text>用户名</Text>
                <Text>张三 33步步高升</Text>
            </View>
            <View style={styles.heng}>
                <Text>备注</Text>
                <Text>黄六</Text>
            </View>
            <View style={[styles.heng, { marginBottom: 20 }]}>
                <Text>手机号码</Text>
                <View style={{ position: 'relative', alignItems: 'center', flexDirection: 'row', height: '100%' }}>
                    <Text>1个1</Text>
                    <Feather style={styles.icon} name="chevron-right" size={19} color="#dbdbdb" />
                </View>
            </View>
            <View style={styles.heng}>
                <Text>免打扰模式</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "orange" }}
                    thumbColor={noDisturbing ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(val) => relieve(val)}
                    value={noDisturbing}
                />
            </View>
            <TouchableOpacity style={styles.heng}>
                <Text>注销账号</Text>
                <Feather style={styles.icon} name="chevron-right" size={19} color="#dbdbdb" />
            </TouchableOpacity>
        </View>
    )
}
export default AccountSecurity;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,

    },
    heng: {
        height: 40,
        width: windowWidth,
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: '#999',
                // 设置阴影的偏移
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowOpacity: 1,
                shadowRadius: 1.5
            },
            android: {
                elevation: 2,
            },
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        alignItems: 'center'
    },
    icon: {
        color: '#ccc',

    }
})
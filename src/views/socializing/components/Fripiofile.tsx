import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { navigate } from "../../../config/routs/NavigationContainer";

import { Toast, ToastDescription, ToastTitle, VStack, useToast } from '@gluestack-ui/themed';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FriProfile = (item:any) => {
    console.log(item.route, '前面接口返回的数据');
    const peopInfo = item.route.params;
    const toast = useToast();
    // 点击音视频通话显示的
    const toasts = () => {
            toast.show({
              placement: "top",
              render: ({ id }) => {
                const toastId = "toast-" + id
                return (
                  <Toast nativeID={toastId} action="attention" variant="solid">
                    <VStack space="xs">
                      <ToastTitle style={{textAlign:'center',fontSize:22,color:'#000',fontWeight:'bold'}}>提示</ToastTitle>
                      <ToastDescription style={{marginTop:12}}>
                      点击音视频通话
                      </ToastDescription>
                    </VStack>
                  </Toast>
                )
              },
            })

    };

    return (
        <View style={styles.contain}>
            <View style={{ width: windowWidth, height: 90, backgroundColor: '#fff', padding: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                <Image source={{uri:peopInfo.friendUser.faceURL.length == 0 ? 'http://xxs18-test.oss-accelerate.aliyuncs.com/2024/05/17/1d4ae439-1444-4fe7-8889-7ac9b4f2c5fc.png': peopInfo.friendUser.faceURL}} style={{ width: 60, height: 60, borderRadius: 5}}></Image>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ color: '#000', fontSize: 17, fontWeight: 'bold', marginBottom: 8 }}>{ peopInfo.remark ?  peopInfo.friendUser.nickname + '(' + peopInfo.remark + ')' : peopInfo.friendUser.nickname}</Text>
                    <Text style={{}}>{peopInfo.friendUser.userID}</Text>
                </View>
            </View>
            <View style={{ width: windowWidth, backgroundColor: '#fff', height: 147 }}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 6, alignItems: 'center', width: '93%', height: 49,borderBottomWidth:0.3,borderColor:'#ccc' }} onPress={() => navigate('ObjCard', peopInfo)}>
                    <Text style={{ fontSize: 18, color: '#000' }}>个人资料</Text>
                    <Image source={require('../../../assets/images/chevron-right.png')} style={{ width: 18, height: 18 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 6, alignItems: 'center', width: '93%', height: 49,borderBottomWidth:0.3,borderColor:'#ccc'}}>
                    <Text style={{ fontSize: 18, color: '#000' }}>查看动态</Text>
                    <Image source={require('../../../assets/images/chevron-right.png')} style={{ width: 18, height: 18 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 6, alignItems: 'center', width: '93%', height: 49,borderBottomWidth:0.3,borderColor:'#ccc' }} onPress={() => navigate('remark',peopInfo)}>
                    <Text style={{ fontSize: 18, color: '#000' }}>备注</Text>
                    <Image source={require('../../../assets/images/chevron-right.png')} style={{ width: 18, height: 18 }}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.send}>
                <TouchableOpacity style={{ flexDirection: 'row', width: '40%', alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: '#fff', height: 40 }} onPress={() => toasts()}>
                    <Image source={require('../../../assets/images/tup/yinshipintonghua.png')} style={{ width: 30, height: 30, marginRight: 8 }}></Image>
                    <Text style={{ color: '#000' }}>音视频通话</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#0387FB', height: 40, width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }} onPress={() => navigate('CheckRoute',peopInfo)}>
                    <Image source={require('../../../assets/images/tup/faxiaoxi.png')} style={{ width: 30, height: 30, marginRight: 8 }}></Image>
                    <Text style={{ color: '#fff' }}>发信息</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
export default FriProfile;

const styles = StyleSheet.create({
    contain: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#F6F6F6',

    },
    send: {
        position: 'absolute',
        bottom: 100,
        left: 0,
        width: windowWidth,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
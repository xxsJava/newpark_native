import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { listSession } from '../../../api/imApi/index';
import { listSessionType } from '../../../api/imApi/type';
import Storage from '../../../utils/AsyncStorageUtils';
import { navigate } from "../../../config/routs/NavigationContainer";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StartGroup = () => {
   

    const listSess = async () => {
        const uId = await Storage.get('usr-uId');
        console.log(uId,'参数----');
        
        const params:listSessionType = 
        {
            userID: uId,
            conversationIDs:'',
            pagination: {
                pageNumber: '1',
                showNumber: '5'
            }
            
              
        };
        // const data1 = await listSession(params);
        // console.log('最近的会话------》', data1);
        console.log('获得的参数------>',params);
        
    };
    useEffect(() =>{
        listSess()
    },[])
    return <View>
        <View style={{ width: windowWidth, height: 70, alignItems: 'center', paddingHorizontal: 4, backgroundColor: '#fff', marginBottom: 12 }}>
            <TouchableOpacity style={{ backgroundColor: '#E9E9F0', width: '96%', flexDirection: 'row', alignItems: 'center', height: 40, borderRadius: 6, marginTop: 20, paddingHorizontal: 8 }}>
                <Image source={require('../../../assets/images/tup/sousuo-2.png')} style={{ width: 26, height: 26 }} />
                <Text style={{ fontSize: 16, marginLeft: 4 }}>搜索</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#fff', flexDirection: 'row', paddingVertical: 12, justifyContent: 'space-between', paddingHorizontal: 8 }} onPress={()=> navigate('SelectFriend')}>
            <Text style={{ fontSize: 18, color: '#000' }}>我的好友</Text>
            <Image source={require('../../../assets/images/chevron-right.png')} style={{ width: 23, height: 23 }}></Image>
        </TouchableOpacity>
    </View>
};

export default StartGroup;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#F8F8F8'
        // backgroundColor:'#fff'
    }
})
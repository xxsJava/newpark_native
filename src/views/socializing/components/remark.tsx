/**
 * 修改联系人好友的备注
 */

import {modifyFriRemark} from '../../../api/imApi/index';
import {modifyFriRemarkType} from '../../../api/imApi/type';
import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import { navigate } from '../../../config/routs/NavigationContainer';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Remark = (item:any) => {
    const [value, setValue] = useState('');
    console.log('传过来的数据-------->',item.route.params.friendUser);
    console.log('传过来的数据-------->',item.route.params);
    const data = item.route.params
    const editData = async() =>{
        const params = {
            ownerUserID:data.ownerUserID,
            friendUserID:data.friendUser.userID,
            remark:value
        }
        console.log('参数--------->',params);
        
        const data1 = await modifyFriRemark(params);
        console.log('修改的备注------>',data1);
        if(data1.errCode == 0) {
            
           
             navigate('FriProfile',data);
             console.log('我要退出啦-----------------------');
            
        }
        
    }
    return <View style={styles.constain}>
        <View style={styles.input}>
            <TextInput style={{ height: 46, backgroundColor: '#E9E9F0',width:'93%',borderRadius:3,fontSize:16 }}
                onChangeText={text => setValue(text)}
                value={value}
                maxLength={16}
            />
        </View>
        <TouchableOpacity style={{width:80,height:40,backgroundColor:'green',borderRadius:6}} onPress={editData}>
            <Text style={{color:'#fff',textAlign:'center',fontSize:17,lineHeight:40}}>保存</Text>
        </TouchableOpacity>
    </View >
}

export default Remark;

const styles = StyleSheet.create({
    constain: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#fff',
        alignItems:'center',
    },
    input:{
        width:windowWidth,
        height:60,
        alignItems:'center'
    }
})
import React, { useState, useEffect } from "react";
import { View, Dimensions, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { navigate } from "../../../config/routs/NavigationContainer";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FriProfile = () => {
    const [obj,setobj] = useState({
        ava: require('../../../assets/images/tup/ly.png'),
        nickname: '回忆往昔峥嵘岁月',
        userID: '1548714649'
    });
    return (
        <View style={styles.contain}>
            <View style={{width:windowWidth,height:90,backgroundColor:'#fff',padding:12,flexDirection:'row',alignItems:'center',marginBottom:12}}>
                <Image source={obj.ava} style={{ width: 60, height: 60, borderRadius: 5 }}></Image>
                <View style={{marginLeft:20}}>
                    <Text style={{color:'#000',fontSize:17,fontWeight:'bold',marginBottom:8}}>{obj.nickname}</Text>
                    <Text style={{}}>{obj.userID}</Text>
                </View>
            </View>
            <View style={{width:windowWidth,backgroundColor:'#fff',height:98}}>
                    <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:6,alignItems:'center',width:'93%',height:49}} onPress={() => navigate('ObjCard')}>
                        <Text style={{fontSize:18,color:'#000'}}>个人资料</Text>
                        <Image source={require('../../../assets/images/chevron-right.png')} style={{width:18,height:18}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:6,alignItems:'center',width:'93%',height:49}}>
                        <Text style={{fontSize:18,color:'#000'}}>查看动态</Text>
                        <Image source={require('../../../assets/images/chevron-right.png')} style={{width:18,height:18}}></Image>
                    </TouchableOpacity>
            </View>
            <View style={styles.send}>
                <TouchableOpacity style={{flexDirection:'row',width:'40%',alignItems:'center',justifyContent:'center',borderRadius:8,backgroundColor:'#fff',height:40}}>
                        <Image source={require('../../../assets/images/tup/yinshipintonghua.png')} style={{width:30,height:30,marginRight:8}}></Image>
                        <Text style={{color:'#000'}}>音视频通话</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#0387FB',height:40,width:'40%',flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:8}} onPress={() => navigate('CheckRoute')}>
                        <Image source={require('../../../assets/images/tup/faxiaoxi.png')} style={{width:30,height:30,marginRight:8}}></Image>
                        <Text style={{color:'#fff'}}>发信息</Text>
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
    send:{
        position:'absolute',
        bottom:100,
        left:0,
        width:windowWidth,
        height:60,
        flexDirection:'row',
       alignItems:'center',
       justifyContent:'center'
    }
})
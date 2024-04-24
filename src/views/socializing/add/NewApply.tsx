import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, Image, TextInput, TouchableOpacity,Platform,ToastAndroid,Toast} from "react-native";
import { navigate } from "../../../config/routs/NavigationContainer";


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const NewApply = (item: any) => {
    // const [peopleData,setpeopleData] = useState({});
    var data = item.route.params;
    console.log(data, '传过来的数据');

    // setpeopleData(item.route.params);
    const pass = () =>{
        navigate('Apply','通过');
        // 弹出通知消息
        if (Platform.OS === 'android') {
            ToastAndroid.show('发送成功!', ToastAndroid.SHORT);
          } else {
            Toast.show('发送成功!', {
              duration: Toast.durations.SHORT,
              position: Toast.positions.BOTTOM,
              shadow: true,
              animation: true,
              backgroundColor: 'black',
              textColor: 'white'
            });
          }

    };
    const reject = () => {
        navigate('Apply','拒绝');
         // 弹出通知消息
         if (Platform.OS === 'android') {
            ToastAndroid.show('发送成功!', ToastAndroid.SHORT);
          } else {
            Toast.show('发送成功!', {
              duration: Toast.durations.SHORT,
              position: Toast.positions.BOTTOM,
              shadow: true,
              animation: true,
              backgroundColor: 'black',
              textColor: 'white'
            });
          }
    }
    return (
        <View style={styles.contain}>
            <View style={{ backgroundColor: '#fff', padding: 20 }}>
                <View style={[styles.heng, { alignItems: 'center' }]}>
                    <View style={[styles.heng, { width: '40%', alignItems: 'center' }]}>
                        <Image source={data.avatar} style={styles.ava}></Image>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>{data.name}</Text>
                    </View>
                    <Image source={require('../../../assets/images/chevron-right.png')} style={{ width: 16, height: 16 }}></Image>
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center',marginTop:25 }}>
                    <TextInput style={styles.input} value={data.validation} ></TextInput>
                </View>
            </View>
            <View style={styles.xian}></View>
            <TouchableOpacity style={styles.div} onPress={pass}>
                <Text style={{fontSize:17,fontWeight:'bold',textAlign:'center',lineHeight:50,color:'#4C8ACD'}}>通过好友申请</Text>
            </TouchableOpacity>
            <View style={[styles.xian,{height:10}]}></View>
            <TouchableOpacity style={styles.div} onPress={reject}>
                <Text style={{fontSize:17,fontWeight:'bold',textAlign:'center',lineHeight:50}}>拒绝好友申请</Text>
            </TouchableOpacity>
        </View>
    )
};
export default NewApply;
const styles = StyleSheet.create({
    contain: {
        width: windowWidth,
        height: windowHeight
    },
    xian: {
        opacity:1,
        width: windowWidth,
        height: 30
    },
    heng: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ava: {
        width: windowWidth * 0.16,
        height: windowHeight * 0.05,
        marginBottom: 10,
        borderRadius: 90
    },
    input: {
        backgroundColor: '#eee',
        width: '90%',
        height: 140,
        borderRadius: 8,
        textAlignVertical: 'top',
        padding:12
    },
    div:{
        backgroundColor:'#fff',
        height:50,
        width:windowWidth
    }
})
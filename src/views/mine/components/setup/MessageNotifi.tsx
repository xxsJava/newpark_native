import React, { useEffect, useState } from "react";
import { View, Text, Switch, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MessageNotifi = () => {
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(false);

    return (
        <View style={styles.container}>
            <View >
                <Text style={{fontSize:13,color:'#999',marginHorizontal:12,marginVertical:8}}>新园未打开时</Text>
                <View style={styles.heng} >
                    <View >
                        <Text style={{fontSize:17,color:'#000',marginVertical:10}}>接收消息通知</Text>
                        <Text style={{fontSize:13,color:'#999',marginBottom:8}}>关闭时，手机将不再接收新消息通知</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "orange" }}
                        thumbColor={switch1 ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setSwitch1}
                        value={switch1}
                    />
                </View>
            </View>
            <View >
                <Text style={{fontSize:13,color:'#999',marginHorizontal:12,marginVertical:8}}>新园打开时</Text>
                <View style={styles.heng} >
                    <View >
                        <Text style={{fontSize:14,color:'#000',marginVertical:10}}>消息通知横幅</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "orange" }}
                        thumbColor={switch1 ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setSwitch1}
                        value={switch1}
                    />
                </View>
            </View>
        </View>
    )
};
export default MessageNotifi;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor:'#F5F5F5'
    },
    heng:{
        // height:50,
        width:windowWidth,
        backgroundColor:'#fff',
        paddingHorizontal:12,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    }
})
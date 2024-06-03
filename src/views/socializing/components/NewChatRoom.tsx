import React,{useEffect,useState} from "react";
import { View,Text, Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NewChatRoom = () => {
    return (
        <View style={styles.container}>
            <Text>创建新的聊天室</Text>
        </View>
    )
};
export default NewChatRoom;

const styles = StyleSheet.create({
    container:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#fff'
    }
})
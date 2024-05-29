import React,{useEffect,useState} from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { View,Text } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WithDrawal = () => {
    return (
        <View style={styles.container}>
            <Text>微信收款提现</Text>
        </View>
    )
}

export default WithDrawal;

const styles = StyleSheet.create({
    container:{
        width:windowWidth,
        height:windowHeight
    }
})
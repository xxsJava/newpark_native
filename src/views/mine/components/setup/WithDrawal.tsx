import React,{useEffect,useState} from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { View,Text } from "react-native";
import alipay from "../../../../utils/Alipay";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WithDrawal = () => {
    const timestamp = new Date().getTime();
    const times = Number(BigInt(timestamp).toString());
    const obj = {
        product_id:10,
        pay_type:1,
        order_time:times
    }
    // const res = await createOrder(obj);

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
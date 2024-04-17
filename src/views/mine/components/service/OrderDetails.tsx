import React,{useState} from "react";
import { View,Dimensions, StyleSheet ,Text,Image} from "react-native";
import Router from "../../../../config/routs/lib/routs";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OrderDetails = (item) =>{
    // const tupian = [https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/3a2467e4-b2a5-47d1-9b77-35c3f4d5f588.jpg,https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/3a2467e4-b2a5-47d1-9b77-35c3f4d5f588.jpg]

    console.log(item.route.params.item);
    const data = item.route.params.item;
    return (
        <View style={styles.container}>
           <Image source={data.img} style={{width:60,height:60}}></Image>
        </View>
    )
};
export default OrderDetails;
const styles = StyleSheet.create({
    container:{
        width:windowWidth,
        height:windowHeight
    }
})

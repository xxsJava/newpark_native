/**
 * 代码描述: 商品详情页面 
 * 作者:zhn
 * 创建时间:2024/04/17 13:58:11
 */

import React,{useState} from "react";
import { View,Dimensions, StyleSheet ,Text,Image,TouchableOpacity} from "react-native";
import Router from "../../../../config/routs/lib/routs";
import { navigate } from "../../../../config/routs/NavigationContainer";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OrderDetails = (item) =>{
    

    console.log(item.route.params.item);
    const data = item.route.params.item;
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:'#fff',height:40,width:windowWidth}}>
                {/* <TouchableOpacity onPress={() => navigate('MyOrderRoute')}>
                    <Image source={require('../../../../assets/images/chevron-left.png')} style={{width:25,height:25}}></Image>
                </TouchableOpacity> */}
                <Text style={{fontSize:21,color:'#000',textAlign:'center',lineHeight:40}}>已签收</Text>
            </View>
            <View>
                <View style={styles.dizhi}>
                    <Image source={require('../../../../assets/images/tup/daisonghuodingdan-bian.png')} style={{width:30,height:30}}></Image>
                    <View>

                    </View>
                </View>
                <View style={styles.dizhi}>
                    <Image source={require('../../../../assets/images/tup/shouhuodizhi.png')} style={{width:30,height:30}}></Image>
                </View>
            </View>
           <Image source={data.img} style={{width:60,height:60}}></Image>
        </View>
    )
};
export default OrderDetails;
const styles = StyleSheet.create({
    container:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#fff'
    },
    dizhi:{
        height:60,
        // backgroundColor:'aqua',
        alignItems:'center',
        flexDirection:'row',
        padding:12,
        borderBottomWidth:0.3
    }
})

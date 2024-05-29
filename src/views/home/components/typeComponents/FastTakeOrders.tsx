/*
 * @Author: xxs
 * @Date: 2024-05-21 18:13:45
 * @LastEditTime: 2024-05-27 16:48:47
 * @FilePath: \newpark_native\src\views\home\components\typeComponents\FastTakeOrders.tsx
 * @Description: desc
 */
import LottieView from "lottie-react-native";
/*
 * @Author: xxs
 * @Date: 2024-05-21 18:13:45
 * @LastEditTime: 2024-05-27 16:04:29
 * @FilePath: \newpark_native\src\views\home\components\typeComponents\FastTakeOrders.tsx
 * @Description: desc
 */
import { Button, ButtonText } from "@gluestack-ui/themed";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import StylesALL from "../../../../styles";
import Colors from "../../../../styles/Color";
import FontSize from "../../../../styles/FontSize";


const FastTakeOrders = () => {
    return(
        <View style={[styles.conTent,Colors.bWhite]}>

            <View style={styles.headNav}>
                <View style={styles.headStyIcon}>
                    <Feather name="chevron-left" size={28} color="#000" />
                </View>
                <View >
                    <Text style={[Colors.fBlack,FontSize.f18,styles.titleCon]}>快速接单</Text>
                </View>
            </View>

            <View>
                <LottieView style={{height:200}} source={require("../../../../assets/json/ksjd.json")} autoPlay loop />
                <Text style={[styles.titleCon]}>正在寻找附近的订单...</Text> 
            </View>
            
            <View style={styles.footBut}>
                <Button size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false} >
                    <ButtonText>寻找悬赏</ButtonText>
                </Button>
            </View>

            <View style={[styles.headNavView,Colors.bGrey]}>
                <View style={styles.headImg}>
                    <Image style={StylesALL.imgSize} borderRadius={50} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/55093421-871c-43c7-803f-1fe23fced837.jpg'}} />
                </View>
                <View style={styles.headTitle}>
                    <Text style={[Colors.fBlack,FontSize.f18,StylesALL.fWeBold]}>黄焖鸡米饭</Text>
                    <Text style={[Colors.fBlack]}>(男生宿舍101)</Text>
                </View>
                <View style={styles.iconImageSize}>
                    <Image style={StylesALL.imgSize} source={require('../../../../assets/images/money_bag.png')}/>
                </View>
                <View style={styles.iconImageSize}>
                    <Text style={[Colors.fBlack,{lineHeight:30}]}>9.9</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conTent:{
        flex:1,
        justifyContent:'center',
    },
    headNav:{
        height: 60,
        width:'100%',
        // borderWidth:1,
        position:'absolute',
        top:0
    },
    headStyIcon:{
        position:'absolute',
        top:10,
        left:5
    },
    titleCon:{
        textAlign:'center',
        lineHeight:45
    },
    footBut:{
        width:'80%',
        position:'absolute',
        bottom:'10%',
        left:'10%'
    },
    headNavView:{
        width:'80%',
        height:90,
        position:'absolute',
        top:'20%',
        left:'10%',
        flexDirection:'row'
    },
    headImg:{
        width:60,
        height:60,
        marginTop:15,
        left:20
    },
    headTitle:{
        marginLeft:50,
        marginTop:20
    },iconImageSize:{
        width:25,
        height:25,
        marginTop:50,
        left:50
    }
})

export default FastTakeOrders;
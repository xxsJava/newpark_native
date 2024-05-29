/*
 * @Author: xxs
 * @Date: 2024-05-21 17:58:25
 * @LastEditTime: 2024-05-27 18:07:24
 * @FilePath: \newpark_native\src\views\home\components\typeComponents\FastDating.tsx
 * @Description: desc
 */
import LottieView from "lottie-react-native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import { Button, ButtonText } from "@gluestack-ui/themed";
import StylesALL from "../../../../styles";
import Colors from "../../../../styles/Color";
import FontSize from "../../../../styles/FontSize";


const FastDating = () => {
    return(
        <View style={[styles.conTent,Colors.bWhite]}>
            
            <View style={styles.headNav}>
                <View style={styles.headStyIcon}>
                    <Feather name="chevron-left" size={28} color="#000" />
                </View>
                <View >
                    <Text style={[Colors.fBlack,FontSize.f18,styles.titleCon]}>快速交友</Text>
                </View>
            </View>

            <View>
                <LottieView style={{height:200}} source={require("../../../../assets/json/ksjy.json")} autoPlay loop />
                <Text style={[styles.titleCon]}>有美一人，清扬婉兮。邂逅相遇，适我愿兮。</Text> 
            </View>

            <View style={styles.footBut}>
                <Button size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false} >
                    <ButtonText>寻找好友</ButtonText>
                </Button>
            </View>

            <View style={[styles.headNavView,Colors.bGrey]}>
                <View style={styles.headImg}>
                    <Image style={StylesALL.imgSize} borderRadius={50} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/mr.jpg'}} />
                </View>

                <View style={styles.ageView}>
                        <Text style={[Colors.fWhite,styles.textFont]}>18</Text>
                </View>

                <View style={styles.headNikName}>
                    <Text style={[Colors.fBlack,FontSize.f16,StylesALL.fWeBold]}>小宇</Text>
                    <Text style={[Colors.fBlack,FontSize.f12,StylesALL.fWeBold]}>湖南长沙理工大学</Text>
                    <Text style={[Colors.fBF,FontSize.f12]}>#165#江苏暴龙</Text>
                </View>
                
                <View style={[styles.footG,Colors.bRed]}>
                    <Text style={[Colors.fWhite,FontSize.f16,StylesALL.fWeBold,styles.footCp]}>充电</Text>
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
    headNikName:{
        // marginLeft:
        marginTop:20
    },ageView:{
        backgroundColor:'#ff74bf',
        width:40,
        height:20,
        borderRadius:20,
        marginLeft:25,
        marginTop:20
    },
    textFont:{
        textAlign:'center'
    },
    footG:{
        width:60,
        height:30,
        borderRadius:40,
        marginTop:30,
        marginLeft:20
    },
    footCp:{
        textAlign:'center',
        lineHeight:30
    }
})

export default FastDating;
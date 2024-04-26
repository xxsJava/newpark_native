/**
 * 代码描述: 步骤条组件 
 * 作者:cxr
 * 创建时间:2023/11/22 16:30:11
 */

import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
const windowWidth = Dimensions.get('window').width

const StepBar = () => {
    const [stepVal] = React.useState(1);
    return(
        <View style={styles.stepBarView1}>
            <View style={styles.stepBarItem}>
                <View style={styles.stepBarStyle}>
                    <View style={[styles.stepBarIcon,stepVal >= 1?styles.stepBarColor1:null]}></View>
                    <View style={[styles.stepBarLine,stepVal >= 2?styles.stepBarColor2:null]}></View>
                </View>
                <Text allowFontScaling={false} style={styles.stepBarText}>发布</Text>
            </View>
            <View style={styles.stepBarItem}>
                <View style={styles.stepBarStyle}>
                    <View style={[styles.stepBarIcon,stepVal >= 2?styles.stepBarColor1:null]}></View>
                    <View style={[styles.stepBarLine,stepVal >= 3?styles.stepBarColor2:null]}></View>
                </View>
                
                <Text allowFontScaling={false} style={[styles.stepBarText,{left:-16}]}>进行中</Text>
            </View>
            <View style={styles.stepBarItem}>
                <View style={[styles.stepBarIcon,stepVal >= 3?styles.stepBarColor1:null]}></View>
                <Text allowFontScaling={false} style={styles.stepBarText}>完成</Text>
            </View>
        </View>
    )
}

export default StepBar;

const styles = StyleSheet.create({
    stepBarView1:{
        width:windowWidth,
        height:60,
        flexDirection:'row',
        justifyContent:'center'
    },
    stepBarItem:{
        width:'auto',
        height:60,
        position:'relative',
    },
    stepBarStyle:{
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    stepBarIcon:{
        width:16,
        height:16,
        borderRadius:8,
        backgroundColor:'#C6C6C6'
    },
    stepBarColor1:{
        backgroundColor:'#FABA3C'
    },
    stepBarColor2:{
        borderColor:'#FABA3C',
    },
    stepBarText:{
        width:50,
        fontSize:15,
        color:'#000',
        lineHeight:20,
        position:'absolute',
        left:-11,
        bottom:15
    },
    stepBarLine:{
        width:140,
        height:1,
        paddingTop:7,
        borderColor:'#C6C6C6',
        borderBottomWidth:1
    }
})
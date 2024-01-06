/**
 * 代码描述: 个人资料页面  设置
 * 作者:cxr
 * 修改时间:2023/12/08 14:40:11
 */

import React from "react";
import { View,Text,StyleSheet,Dimensions,Platform,TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PersonalDataView = () => {

    const [tabVal,onTabPress] = React.useState(1)

    return (
        <View style={styles.parentView}>
            <View style={styles.tabView}>
                <TouchableOpacity onPress={() => onTabPress(1)}>
                    <Text allowFontScaling={false} style={[styles.tabText,tabVal == 1?styles.tabColor:null]}>帖子</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onTabPress(2)}>
                    <Text allowFontScaling={false} style={[styles.tabText,tabVal == 2?styles.tabColor:null]}>悬赏</Text>
                    <Text>11112</Text>

                    <Text>22223</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onTabPress(3)}>
                    <Text allowFontScaling={false} style={[styles.tabText,tabVal == 3?styles.tabColor:null]}>成就</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PersonalDataView;

const styles = StyleSheet.create({
    parentView:{
        width:windowWidth,
        height:windowHeight - 190,
        backgroundColor:'#fff',
        zIndex:-20
    },
    tabView:{
        width:windowWidth,
        height:50,
        marginTop:70,
        paddingHorizontal:25,
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:'red'
    },
    tabText:{
        fontSize:15,
        color:'#555',
        lineHeight:50
    },
    tabColor:{
        fontSize:17,
        color:'#FABA3C',
        fontWeight:'bold'
    }
})
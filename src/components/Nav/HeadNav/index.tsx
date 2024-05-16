/*
 * @Author: xxs
 * @Date: 2024-05-15 10:42:59
 * @LastEditTime: 2024-05-15 11:13:31
 * @FilePath: \newpark_native\src\components\Nav\HeadNav\index.tsx
 * @Description: 公共Screen 顶部导航
 */

import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import { navigate } from "../../../config/routs/NavigationContainer";


const HeadNav = (params:any) => {
    console.log(params);
    return(
        <Appbar.Header style={styles.headerStyle}>
             <TouchableOpacity style={{position:'absolute',left:10}} onPress={() => navigate('MineStacker')}>
                <Feather name="chevron-left" size={30} color="#FAFAFA"   />
             </TouchableOpacity>
            
            <View style={styles.titleContainer}>
                <Text allowFontScaling={false} style={styles.headerText}>
                    {params.props.title}
                    {/* <Trans>navigationBar.title6</Trans> */}
                </Text>
            </View>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        // width: windowWidth,
        height: 45,
        backgroundColor: '#ffb700',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 17,
        color: '#FFF',
        lineHeight: 45,
        fontWeight:'bold'
    }
})

export default HeadNav;
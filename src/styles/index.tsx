/*
 * @Author: xxs
 * @Date: 2023-10-14 16:08:59
 * @LastEditTime: 2023-10-25 11:48:15
 * @FilePath: \newpark_native\src\styles\index.tsx
 * @Description: 全局样式
 */
import { StyleSheet } from "react-native";

const StylesALL = StyleSheet.create({
    //主调色
    BGCOLOR:{
        backgroundColor: "#F8B032"
    },
    //画线
    BORDER_TEST:{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: 'red',
    },
    //home字体颜色
    FONT_STY:{
        color: "#FFF",
        fontWeight: "bold"
    },
    //统一字体颜色
    FONT_SYS:{
        fontSize: 18,
        color: '#FABA3C',
        fontWeight: 'bold'
    },
    //统一字体大小
    FONT_SIZE:{
        fontSize: 18
    },
    //排序字体大小
    FONT_SORT:{
        fontSize: 14
    },
    //父统一布局
    CONTAINER:{
        flex:1
    }
})

export default StylesALL
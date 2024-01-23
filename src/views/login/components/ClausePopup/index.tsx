/**
 * 代码描述: 服务条款弹框  登录
 * 作者:cxr
 * 修改时间:2024/1/09 16:22:11
 */

import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";

const ClausePopup = (props:any) => {
    const { visible, onClose} = props

    return (
        <Modal transparent visible={visible} animationType={'slide'} onRequestClose={() => onClose()}>
            <TouchableOpacity style={styles.overlay} activeOpacity={0.2} onPress={() => onClose()} />
            <View style={styles.content}>
                <Text style={styles.clauseTitle}>服务协议及隐私保护</Text>
                <Text style={styles.contentText}>为了更好的保障您的合法权益，请您阅读并同意<Text style={styles.emphasizeText}>《用户协议》、《隐私政策》、《买家须知》</Text>未注册手机号将自动注册！</Text>
                <Button style={styles.buttonStyle} labelStyle={styles.buttonText} rippleColor='#ddd' onPress={() => console.log('同意并继续')}>同意并继续</Button>
            </View>
        </Modal>
    )
}

export default ClausePopup;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    content: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height:240,
        backgroundColor: '#ffffff',
        zIndex: 1,
        padding: 10,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    clauseTitle:{
        width:'100%',
        height:45,
        fontSize:21,
        color:'#000',
        textAlign:'center',
        lineHeight:45,
    },
    contentText:{
        width:'94%',
        height:90,
        marginTop:16,
        fontSize:16,
        color:'#888',
        marginHorizontal:'3%'
    },
    emphasizeText:{
        fontSize:18,
        color:'#000'
    },
    buttonStyle:{
        width:'68%',
        height:48,
        marginTop:10,
        marginHorizontal:'16%',
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#bbb',
        borderRadius:24,

    },
    buttonText:{
        fontSize:18,
        color:'#F0BA38',
        lineHeight:25
    }
})
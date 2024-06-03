import React,{useEffect,useState} from "react";
import { TouchableOpacity } from "react-native";
import { View,Text, Dimensions, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PricacySetting = () => {
    return (
        <View style={styles.container}>
           <TouchableOpacity style={styles.heng}>
                <Text style={{color:'#000'}}>位置权限</Text>
                <View style={styles.shuip}>
                    <Text style={{color:'#ccc'}}>已授权</Text>
                    <Feather  name="chevron-right" size={18} color="#dbdbdb" />
                </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.heng}>
                <Text style={{color:'#000'}}>通知权限</Text>
                <View style={styles.shuip}>
                    <Text style={{color:'#ccc'}}>去设置</Text>
                    <Feather  name="chevron-right" size={18} color="#dbdbdb" />
                </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.heng}>
                <Text style={{color:'#000'}}>相机权限</Text>
                <View style={styles.shuip}>
                    <Text style={{color:'#ccc'}}>去设置</Text>
                    <Feather  name="chevron-right" size={18} color="#dbdbdb" />
                </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.heng}>
                <Text style={{color:'#000'}}>照片权限</Text>
                <View style={styles.shuip}>
                    <Text style={{color:'#ccc'}}>已授权</Text>
                    <Feather  name="chevron-right" size={18} color="#dbdbdb" />
                </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.heng}>
                <Text style={{color:'#000'}}>麦克风权限</Text>
                <View style={styles.shuip}>
                    <Text style={{color:'#ccc'}}>去设置</Text>
                    <Feather  name="chevron-right" size={18} color="#dbdbdb" />
                </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.heng}>
                <Text style={{color:'#000'}}>通讯录权限</Text>
                <View style={styles.shuip}>
                    <Text style={{color:'#ccc'}}>去设置</Text>
                    <Feather  name="chevron-right" size={18} color="#dbdbdb" />
                </View>
           </TouchableOpacity>
           <View  style={styles.xian}/> 
           <View style={{paddingHorizontal:12,marginTop:12}}>
            <Text style={{fontSize:12,color:'#999',lineHeight:18}}>
                为了保障你能够顺利的使用新园相关功能，新园会向你申报以上系统权限，你可以在这里完成权限的操作管理。
            </Text>
           </View>
        </View>
    )
};

export default PricacySetting;

const styles = StyleSheet.create({
    container:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#fff'
    },
    heng:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:windowWidth,
        height:45,
        paddingHorizontal:12
    },
    shuip:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between'
    },
    xian:{
        height:0.3,
        backgroundColor:'#ccc',
        width:windowWidth
    }
})
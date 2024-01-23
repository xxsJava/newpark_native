

import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PersonalDataView = () => {

    const [name,setname] = React.useState('幼儿园最强恶霸')
    const [sign,setSign] = React.useState('我是顿号！');
    const [school,setSchool] = React.useState('庆北大学')
    return (
        <View style={styles.parentView}>
           <View style={styles.heng}>
                <Text style={styles.h3}>头像</Text>
                <Image source={require('../../../../assets/images/tup/xy2.png')} style={styles.headImg}></Image>
           </View>
           <View style={styles.hengz}>
                <Text style={styles.h3}>名字</Text>
                <Text style={styles.h3}>{name}</Text>
           </View>
           <View style={styles.hengz}>
                <Text style={styles.h3}>个性签名</Text>
               <Text style={styles.h3}>{sign}</Text>
           </View>
           <View style={styles.hengz}>
                <Text style={styles.h3}>学校</Text>
                <Text style={styles.h3}>{school}</Text>
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
        zIndex:-20,
        padding:20
    },
    headImg:{
        width:70,
        height:70,
        borderWidth:1,
        borderColor:'#BBBBBB',
        margin:4,
        padding:8,
        borderRadius:10
    },
    heng:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#BBBBBB',
        margin:6
    },
    h3:{
        color:'black',
        fontSize:18
    },
    hengz:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#BBBBBB',
        paddingHorizontal:5,
        paddingVertical:20
    }
   
})
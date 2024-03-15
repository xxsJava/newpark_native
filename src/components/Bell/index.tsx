/*
 * @Author: xxs
 * @Date: 2024-01-11 11:21:31
 * @LastEditTime: 2024-02-22 11:45:02
 * @FilePath: \newpark_native\src\components\Bell\index.tsx
 * @Description: desc
 */
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { navigate } from '../../config/routs/NavigationContainer';


//铃铛消息组件
 const BellView = () => {
  const [isMsg,setisMsg] = useState(6);
  console.log('消息铃铛'+ isMsg);

  return (
    <TouchableOpacity style={styles.loadMore} onPress={() => navigate('MainMess')}>
        {/* notification      floatbuttonimg*/}
        {/* <View style={porp.isMsg? styles.hidden:styles.chu}>
            <Image source={require('../../assets/images/notification.png')} style={styles.img} />
        </View> */}
       <View style={styles.chu}>
            <Image source={require('../../assets/images/floatbuttonimg.png')} style={styles.img1} accessibilityLabel='铃铛'></Image>
       </View>
       <View style={styles.tipBox}>
        <Text style={styles.tip}>{isMsg}</Text>
       </View>
    </TouchableOpacity>
  );
};
export default BellView;
const styles = StyleSheet.create({
  loadMore: {
    position:'absolute',
    bottom:20,
    right:20,
    zIndex:9
  },
  img:{
    width:30,
    height:30
  },
  img1:{
    width:35,
    height:35
  },
  hidden:{
    display:'none'
  },
  chu:{
    backgroundColor:'#fff',
    padding:2,
    borderRadius:20,
    elevation: 4, // 适配android的
    shadowOffset: { width: 2, height: 2 }, // 以下4项适配ios
    shadowColor: 'black',
    shadowOpacity: .9,
    shadowRadius: 9
  },
  tip:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:12,
    textAlign:'center',
    lineHeight:15
  },
  tipBox:{
    position:'absolute',
    right:0,
    top:0,
    backgroundColor:'red',
    width:15,
    height:15,
    borderRadius:12,
  }
});
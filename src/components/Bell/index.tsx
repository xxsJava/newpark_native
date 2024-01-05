import React from 'react';
import {StyleSheet, Text, View,Image,TouchableOpacity,Button} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import { navigate } from '../../config/routs/NavigationContainer';


//铃铛消息组件
 const BellView = (porp: boolean) => {
  console.log('消息铃铛'+ porp.isMsg);
  return (
    <TouchableOpacity style={styles.loadMore} onPress={() => navigate('SocializingStacker')}>
        {/* notification      floatbuttonimg*/}
        <View style={porp.isMsg? styles.hidden:styles.chu}>
            <Image source={require('../../assets/images/notification.png')} style={styles.img} />
        </View>
       <View style={porp.isMsg? styles.chu:styles.hidden}>
            <Image source={require('../../assets/images/floatbuttonimg.png')} style={styles.img1}></Image>
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
    elevation: 20, // 适配android的
    shadowOffset: { width: 2, height: 2 }, // 以下4项适配ios
    shadowColor: 'black',
    shadowOpacity: .9,
    shadowRadius: 9
  }
});
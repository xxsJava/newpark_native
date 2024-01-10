import React from 'react'
import {
  StyleSheet, Text, View, Image, Dimensions, Platform, ImageBackground, TouchableOpacity

} from 'react-native'
import { navigate } from '../../config/routs/NavigationContainer'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const beginOne = () => {
  return (
    <View style={styles.safeStyle}>
      <ImageBackground source={require('../../assets/images/tup/a2.jpg')} style={styles.img} resizeMode="cover" >
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigate('beginThree')} style={styles.btnBox}>
            <Text style={styles.btnFont}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}
export default beginOne;
const styles = StyleSheet.create({
  safeStyle: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        height: 180
      },
    }),
  },
  img: {
    flex: 1,
    marginTop: -8
  },
  btn: {
    position: 'absolute',
    bottom: 14,
    left: '40%'
  },
  btnBox:{
    backgroundColor:'#fff',
    borderRadius:18,
    width:120,
    height:60,
    alignItems:'center',
    justifyContent:'center'
  },
  btnFont:{
    color:'#F0B833',
    fontWeight:'bold',
    fontSize:20
  }
})
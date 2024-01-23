import React, { useState } from 'react'
import {
  StyleSheet, Text, View, Image, Dimensions, Platform, ImageBackground, TouchableOpacity

} from 'react-native'
import StatusBar from '../../components/StatusBar';
import { navigate } from '../../config/routs/NavigationContainer'
import BeginFour from './BeginFour';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BeginThree = () => {
  const [next, setNext] = useState(true)
  return (
    <>
    <StatusBar/>
      {
        next ? (<View style={styles.safeStyle}>
          <ImageBackground source={require('../../assets/images/tup/a3.jpg')} style={styles.img} resizeMode="cover" >
            <View style={styles.btn}>
              <TouchableOpacity onPress={() => setNext(false)} style={styles.btnBox}>
                <Text style={styles.btnFont}>Next</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>) : (<BeginFour />)
      }
    </>
  )
}
export default BeginThree;
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
    bottom: 6,
    left: '40%'
  },
  btnBox: {
    backgroundColor: '#fff',
    borderRadius: 18,
    width: 120,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnFont: {
    color: '#F0B833',
    fontWeight: 'bold',
    fontSize: 20
  }
})
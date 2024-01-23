import React, { useState } from 'react'
import {
  StyleSheet, Text, View, Image, Dimensions, Platform, ImageBackground, TouchableOpacity

} from 'react-native'
import StatusBar from '../../components/StatusBar';

import { navigate } from '../../config/routs/NavigationContainer'
import BeginThree from './BeginThree';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BeginTwo = () => {
  const [next, setNext] = useState(true)
  return (
    <>
      <StatusBar />
      {
        next ?( <View style={styles.safeStyle}>
          <ImageBackground source={require('../../assets/images/tup/a2.jpg')} style={styles.img} resizeMode="cover" >
            <View style={styles.btn}>
              <TouchableOpacity onPress={() => setNext(false)} style={styles.btnBox}>
                <Text style={styles.btnFont}>Next</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View> ): (<BeginThree />)
      }
    </>
  )
}
export default BeginTwo;
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
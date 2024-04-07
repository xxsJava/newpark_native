import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet, Text,
  TouchableOpacity,
  View
} from 'react-native';
//额外加的
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
 // 额外加的
// const Stack = create../StatusBar
// import LoginStacker from '../../routes/stacker/Login';
// 额外
import StatusBar from '../StatusBar';
// import { navigate } from '../../config/routs/NavigationContainer'
// import BeginTwo from './BeginTwo';
// import IsLogin from '../../../login/controller';
import Swiper from 'react-native-swiper';
import Islogin from '../../views/login/controller';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BeginOne = () => {
  const [next, setNext] = useState(true)
  return (
    <>
      <StatusBar />
      {next ? (<View style={styles.swiperView}>
        <Swiper
          style={styles.swiperStyle}
          height={windowHeight}
          loop={true}
          horizontal={true}
          autoplay={true}
          autoplayTimeout={80}
          paginationStyle={styles.paginationStyle}
          dot={<View style={styles.dotStyle} />}
          activeDot={<View style={styles.activeDotStyle} />}>
          <Image
            source={require('../..//assets/images/tup/a1.jpg')}
            style={styles.bannerImage}
            accessibilityLabel='指引图1'
            alt="头像"
          />
          <Image
            source={require('../..//assets/images/tup/a2.jpg')}
            style={styles.bannerImage}
            accessibilityLabel='指引图2'
            alt="头像"
          />
          <Image
            source={require('../..//assets/images/tup/a3.jpg')}
            style={styles.bannerImage}
            accessibilityLabel='指引图3'
            alt="头像"
          />
          <Image
            source={require('../..//assets/images/tup/a4.jpg')}
            style={styles.bannerImage}
            accessibilityLabel='指引图4'
            alt="头像"
          />
        </Swiper>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => setNext(false)} style={styles.btnBox}>
            <Text style={styles.btnFont}>跳过，直接登录</Text>
          </TouchableOpacity>
        </View>
      </View>):(<Islogin />)}
    </>
  )
}
export default BeginOne;
const styles = StyleSheet.create({
  swiperView: {
    width: windowWidth,
    height: windowHeight,
  },
  swiperStyle: {},
  paginationStyle: {
    bottom: 0,
    left: -280
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 6,
    marginHorizontal: 3,
    marginVertical: 9,
    backgroundColor: 'rgba(0,0,0,.2)'
  },
  activeDotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 9,
    backgroundColor: '#ffb700',
  },
  bannerImage: {
    width: windowWidth,
    height: windowHeight,
  },
  btn: {
    position: 'absolute',
    bottom: 18,
    left: '30%'
  },
  btnBox: {
    backgroundColor: '#fff',
    borderRadius: 18,
    width: 180,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnFont: {
    color: '#F0B833',
    fontWeight: 'bold',
    fontSize: 17
  }
})
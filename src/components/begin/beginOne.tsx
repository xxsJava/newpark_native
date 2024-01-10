 import React from 'react'
 import { StyleSheet, Text, View,Image,Dimensions,Platform } from 'react-native'
 import { navigate } from '../../config/routs/NavigationContainer'
 const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
  const beginOne =() => {
       <View style={styles.safeStyle}>
         <Text> textInComponent1111111111111 </Text>
         <Image source={require('../../assets/images/tup/z1.png')}></Image>
       </View>
    }
 export default beginOne;
 const styles = StyleSheet.create({
    safeStyle: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'red',
        ...Platform.select({
          ios: {
            height: 180,
            maxHeight:1200
          },
        }),
      },
 })
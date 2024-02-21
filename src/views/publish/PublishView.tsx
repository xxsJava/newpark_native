import React, { useRef, useState } from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-paper';
const App = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [chu, setchu] = useState(false);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setchu(!chu)
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setchu(!chu)
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
          <TouchableOpacity style={[styles.bigbtn,styles.btn1]}>
            <Text style={[styles.tips, {marginRight:8}]}>打卡</Text>
            <View style={styles.litbtn1}></View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.bigbtn,styles.btn2]}>
            <Text style={[styles.tips,{ marginRight:8}]}>发布商品</Text>
            <View style={[styles.litbtn1,{backgroundColor:'#C6C6C6'}]}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn3}>
            <Text style={styles.tips}>公告</Text>
            <View style={[styles.litbtn1,{backgroundColor:'#FA4A86'}]}></View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.bigbtn,styles.btn4]}>
            <View style={[styles.litbtn1,{backgroundColor:'#90C485'}]}></View>
            <Text style={[styles.tips, {marginLeft:8}]}>发布帖子</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.bigbtn,styles.btn5]}>
            <View style={[styles.litbtn1,{backgroundColor:'#FCBA41'}]}></View>
            <Text style={[styles.tips,{marginLeft:8}]}>发布悬赏</Text>
          </TouchableOpacity>
      </Animated.View>
      <View style={styles.buttonRow}>
        {/* <Button title="Fade In View" onPress={chu? fadeIn:fadeOut } /> */}
        <Button mode="contained" onPress={(chu ? fadeIn : fadeOut)}>
          发布
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    position: 'absolute',
    bottom: 0
  },
  // fadingText: {
  //   fontSize: 28
  // },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  litbtn1:{
    width:40,
    height:40,
    borderRadius:20,
    backgroundColor:'#22C78C',
  },
  bigbtn:{
    display:'flex',
    flexDirection:'row'
  },
  tips:{
    color:'#000',
    fontSize:16,
    textAlign:'center',
    lineHeight:40,
  },
  btn1:{
    position:'absolute',
    bottom:8,
    left:-120
  },
  btn2:{
    position:'absolute',
    bottom:60,
    left:-130
  },
  btn3:{
    position:'absolute',
    top:-130,
    left:0
  },
  btn4:{
    position:'absolute',
    bottom:60,
    left:60
  },
  btn5:{
    position:'absolute',
    bottom:8,
    left:80
  }
});

export default App;
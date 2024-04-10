
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection:'column'
  },
  logo: {
    width: 160,
    height: 128,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/static/空空如也.png')}
        accessibilityLabel='图片'
        alt="头像"
      />
      <View
        style={{
          flexDirection:'column',
          padding: 10,
          height:90,
          justifyContent:'center',
         alignItems:'center'
        }}
      >
        <Text allowFontScaling={false} style={{fontSize: 14, color:'#000',textAlign:'center' }}>暂时没有数据</Text>
        <Text allowFontScaling={false} style={{fontSize: 14, color:'#000',textAlign:'center' }}>快去寻找所需要的数据吧！</Text>
      </View>
      <View>
        <Text allowFontScaling={false} style={{ width: 180,fontSize: 12, color:'#CDCFDC' ,textAlign:'center'}}>山东新园建业科技有限公司</Text>
      </View> 
    </View>
  );
}

export default DisplayAnImage;


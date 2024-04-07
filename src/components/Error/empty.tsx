
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 226,
    height: 228,
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
          flexDirection: "row",
          padding: 10
        }}
      >
        <Text allowFontScaling={false} style={{ margin: "auto", width: 120,fontSize: 18, color:'#DAD8E0' }}>暂时没有数据</Text>
      </View>
      <View>
        <Text allowFontScaling={false} style={{ width: 140,fontSize: 13, color:'#CDCFDC' }}>快去寻找所需要的数据</Text>
      </View>
      <View style = {{ position: 'absolute', bottom: 15}}>
        <Text allowFontScaling={false} style={{ width: 180,fontSize: 13, color:'#CDCFDC' }}>山东新园建业科技有限公司</Text>
      </View>
    </View>
  );
}

export default DisplayAnImage;


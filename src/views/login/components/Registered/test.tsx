import React, { useState } from 'react';
import { View, TouchableOpacity, Animated,Image } from 'react-native';

const ClickZoom = () => {
  const [scaleValue] = useState(new Animated.Value(1));

  const handleZoomIn = () => {
    Animated.timing(scaleValue, {
      toValue: 1.2,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handleZoomOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <TouchableOpacity onPress={handleZoomIn}>
        <Animated.View
          style={{
            transform: [{ scale: scaleValue }],
            // 其他样式
          }}
        >
          {/* 点击放大的内容 */}
          <Image source={require('../../../../assets/images/tup/cd6.png')} accessibilityLabel='图片'></Image>
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleZoomOut}>
        <Animated.View
          style={{
            transform: [{ scale: scaleValue }],
            // 其他样式
          }}
        >
          {/* 点击缩小的内容 */}
          <Image source={require('../../../../assets/images/tup/cd5.png')} accessibilityLabel='图片'></Image>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default ClickZoom;

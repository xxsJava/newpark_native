/*
 * @Author: xxs
 * @Date: 2024-03-16 17:00:12
 * @LastEditTime: 2024-04-07 13:44:10
 * @FilePath: \newpark_native\src\views\mine\components\service\SanJiLiand.tsx
 * @Description: desc
 */
import React, { useState } from 'react';
// import RNPickerSelect from 'react-native-picker-select';
import { Dimensions, StyleSheet, View } from 'react-native';
import { city, province, region } from '../../data/Area';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const MultiLevelPicker = () => {
  const [selectedLevel1, setSelectedLevel1] = useState(null);
  const [selectedLevel2, setSelectedLevel2] = useState(null);
  const [selectedLevel3, setSelectedLevel3] = useState(null);

  const level1Items = province;

  const level2Items = city;

  const level3Items = region;
  const firSelect = (value:any) => {
    setSelectedLevel1(value);
    console.log(value,'选择省');
    
  };
  const secSelect = (value:any) => {
    setSelectedLevel2(value);
    console.log(value,'选择市');
    
  };
  const endSelect = (value:any) => {
    setSelectedLevel3(value);
    console.log(value,'选择区');
    
  };
  return (
    <View style={styles.box}>
      {/* <RNPickerSelect
        onValueChange={(value) => firSelect(value)}
        items={level1Items}
        placeholder={{ label: '请选择省', value: null }} // 设置占位符
      />
      {selectedLevel1 && (
        <RNPickerSelect
          onValueChange={(value) => secSelect(value)}
          items={level2Items[selectedLevel1]}
          placeholder={{ label: '请选择市', value: null }} // 设置占位符
        />
      )}
      {selectedLevel2 && (
        <RNPickerSelect
          onValueChange={(value) => endSelect(value)}
          items={level3Items[selectedLevel2]}
          placeholder={{ label: '请选择区', value: null }} // 设置占位符
        />
      )} */}
    </View>
  );
};

export default MultiLevelPicker;
const styles = StyleSheet.create({
  box:{
    width:windowWidth * 0.4
  }
})
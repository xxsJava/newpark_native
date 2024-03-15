import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Alert,
    TextInput,
    KeyboardAvoidingView,
    Dimensions,
    Platform
} from 'react-native';
import { navigate } from '../../../../config/routs/NavigationContainer';

import RNPickerSelect from 'react-native-picker-select';
import { province, city, region } from '../../data/Area'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AddNewAddress = () => {
    const [valueSchool, onChangevalueSchool] = React.useState('北京大学');
    const [valueName, onChangevalueName] = React.useState('');
    const [valuePhone, onChangevaluePhone] = React.useState('');
    const [valueAddre, onChangevalueAddre] = React.useState('');

    // 三级联动的
    const [selectedLevel1, setSelectedLevel1] = useState(null);
    const [selectedLevel2, setSelectedLevel2] = useState(null);
    const [selectedLevel3, setSelectedLevel3] = useState(null);
    const level1Items = province;
    const level2Items = city;
    const level3Items = region;
    const firSelect = (value: any) => {
        setSelectedLevel1(value);
        console.log(value, '选择省');

    };
    const secSelect = (value: any) => {
        setSelectedLevel2(value);
        console.log(value, '选择市');

    };
    const endSelect = (value: any) => {
        setSelectedLevel3(value);
        console.log(value, '选择区');

    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "height" : "height"}
                style={styles.container}
            >
                <View>
                    {/* <View style={styles.litBox}>
                        <Text style={styles.dec}>学校</Text>
                        <Text style={styles.schooT}>{valueSchool}</Text>
                    </View> */}
                    <View style={styles.litBox}>
                        <Text style={styles.dec}>联系人</Text>
                        <TextInput
                            style={styles.inpVal}
                            onChangeText={text => onChangevalueName(text)}
                            value={valueName}
                            placeholder='请输入收货人的姓名'
                        />
                    </View>
                    <View style={styles.litBox}>
                        <Text style={styles.dec}>手机号</Text>
                        <TextInput
                            style={styles.inpVal}
                            onChangeText={text => onChangevaluePhone(text)}
                            value={valuePhone}
                            placeholder='请输入收货人的手机号码'
                        />
                    </View>
                    <View style={styles.litBox}>
                        <Text style={styles.dec}>地区</Text>
                        <View style={styles.areas}>

                            <View>
                                <RNPickerSelect
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
                                )}
                            </View>

                        </View>
                    </View>
                    <View style={styles.litBox}>
                        <Text style={styles.dec}>地址</Text>
                        <TextInput
                            style={[styles.inpVal, { fontSize: 13 }]}
                            onChangeText={text => onChangevalueAddre(text)}
                            value={valueAddre}
                            placeholder='请输入详细收货人地址，例如:4号楼218'
                        />
                    </View>
                    <Button mode="contained" onPress={() => navigate('SanJiLiand')} style={styles.btn} labelStyle={styles.btnFont}>
                        新增收货地址
                    </Button>
                   
                </View>
            </KeyboardAvoidingView>

        </SafeAreaView>

    );
};

export default AddNewAddress;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    litBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
        width: windowWidth,
        height: 51,
        paddingHorizontal: 18,
        borderColor: 'gray',
        borderWidth: .3,
        backgroundColor: '#fff',
        marginVertical: 0
    },
    inpVal: {
        color: 'black',
        fontSize: 14,
        height: 43,
        fontWeight: 'bold'
    },
    dec: {
        fontSize: 16,
        lineHeight: 43,
        color: 'black',
        fontWeight: 'bold',

    },
    schooT: {
        height: 40,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        lineHeight: 40
    },
    btn: {
        backgroundColor: '#FABA3C',
        width: windowWidth * 0.8,
        height: 50,
        marginLeft: windowWidth * 0.1,
        marginTop: 130
    },
    btnFont: {
        fontWeight: 'bold',
        fontSize: 18,
        height: 60,
        lineHeight: 30
    },
    areas: {
        width: 170,
        height: 50,
        zIndex: 20,

    },
    // box:{
    //     width:windowWidth * 0.4
    //   }
})
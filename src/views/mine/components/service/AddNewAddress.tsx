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
import MultiLevelPicker from './SanJiLiand'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AddNewAddress = () => {
    const [valueSchool, onChangevalueSchool] = React.useState('北京大学');
    const [valueName, onChangevalueName] = React.useState('');
    const [valuePhone, onChangevaluePhone] = React.useState('');
    const [valueAddre, onChangevalueAddre] = React.useState('');
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
                        <MultiLevelPicker />
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
                    <Button mode="contained" onPress={() => navigate('ThreeJiContent')} style={styles.btn} labelStyle={styles.btnFont}>
                        新增收货地址
                    </Button>
                    <MultiLevelPicker />
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
        borderWidth: 1,
        backgroundColor: '#fff',
        marginVertical: 3
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
    areas:{
        width:170,
        height:50,
        zIndex:20,
        
    }
})
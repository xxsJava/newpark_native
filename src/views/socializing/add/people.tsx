
/**
 * 代码描述: 添加牛友
 * 作者:zhn
 * 修改时间:2024/2/22 16:10:11
 */
import { Input, InputField, InputIcon, InputSlot, SearchIcon } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView,Alert } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


// const list = [
//     {
//         index:1,
//         name:'xxs',
//         ava:require('../.../../../../assets/images/tup/ppy.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行','美食','吃穿','美妆']
//     },
//     {
//         index:2,
//         name:'eee',
//         ava:require('../.../../../../assets/images/tup/ly.png'),
//         tel:'5175689259',
//         isboy:false,
//         inter:[]
//     },
//     {
//         index:3,
//         name:'trf',
//         ava:require('../.../../../../assets/images/tup/dg.jpg'),
//         tel:'5175689259',
//         isboy:false,
//         inter:['旅行']
//     },
//     {
//         index:4,
//         name:'iuy',
//         ava:require('../.../../../../assets/images/tup/hc.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行']
//     },
//     {
//         index:5,
//         name:'ops',
//         ava:require('../.../../../../assets/images/tup/jia.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行']
//     },
//     {
//         index:6,
//         name:'ops',
//         ava:require('../.../../../../assets/images/tup/jia.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行']
//     },
//     {
//         index:7,
//         name:'ops',
//         ava:require('../.../../../../assets/images/tup/jia.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行']
//     },
//     {
//         index:8,
//         name:'ops',
//         ava:require('../.../../../../assets/images/tup/jia.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行']
//     },
//     {
//         index:9,
//         name:'ops',
//         ava:require('../.../../../../assets/images/tup/jia.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行']
//     },
//     {
//         index:10,
//         name:'ops',
//         ava:require('../.../../../../assets/images/tup/jia.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行']
//     },
// ]
const AddPeople = () => {
    const [personInfo, setpersonInfo] = React.useState({ "ava": 27, "index": 1, "inter": ["旅行", "美食", "吃穿", "美妆"], "isboy": true, "name": "xxs", "tel": "5175689259", "birthday": "2024-03-03" });
    const [value, onChangeText] = useState('');
    const [remain, onChangeText1] = useState('');
    // 模态框
    const [showmtk, setShowmtk] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [onText, setText] = useState('');
    const [writremark, setWritremark] = useState(true);
    // 弹出提示框
    const tipBox = () => {
        Alert.alert(
            '提示',
            '已发送验证消息，请稍后！！！'
        )
    };

    const onChangeTextInput = (text: string) => {
        setText(text);
        setIsVisible(text.length > 0);
    }

    console.log(onText, '输入的文字');
    return (
        <View>
            <View style={styles.searchGrid}>
                <Input style={styles.searchInput}>
                    <InputSlot pl='$3'>
                        <InputIcon as={SearchIcon} />
                    </InputSlot>
                    <InputField
                        placeholder="账号/手机号"
                        onChangeText={onChangeTextInput}
                    />
                </Input>
            </View>
            <TouchableOpacity style={isVisible ? {} : { display: 'none' }} onPress={() => setShowmtk(true)}>
                <View style={styles.searchContent}>
                    <Text style={styles.searchText}>
                        查找‘{onText}’相关用户
                    </Text>
                </View>
            </TouchableOpacity>


            {/* 模态框显示 */}
            <View style={showmtk ? { position: 'absolute' } : { display: 'none' }}>
                <TouchableOpacity style={{ width: windowWidth, height: windowHeight, backgroundColor: '#000', opacity: 0.3, position: 'absolute' }} onPress={() => { setShowmtk(false) }}></TouchableOpacity>
                <View style={{ width: windowWidth * 0.9, marginLeft: windowWidth * 0.05, position: 'absolute', zIndex: 99999, marginTop: (windowHeight - 680) / 2 }}>
                    <Image source={require('../../../assets/images/tup/891713317829_.pic.jpg')} style={{ width: '100%', height: 160, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}></Image>
                    <View style={{ backgroundColor: '#fff', width: '100%', height: 420, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                        <View style={{ flexDirection: 'row', marginTop: -30 }}>
                            <View >
                                <Image source={personInfo.ava} style={{ width: 80, height: 80, marginHorizontal: 12 }}></Image>
                            </View>
                            <View style={{ marginLeft: 8 }}>
                                <Text style={{ color: '#fff', fontSize: 23 }}>{personInfo.name}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                                    <Text style={{ fontSize: 16 }}>{personInfo.tel}</Text>
                                    <Image source={require('../../../assets/images/tup/shenfen.png')} style={{ width: 20, height: 20, marginLeft: 8 }}></Image>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 12 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', paddingVertical: 8 }}>个人信息</Text>
                            <ScrollView style={{ height: 260 }}>
                                <View style={{ borderBottomWidth: 0.4 }}>
                                    <View style={{ flexDirection: 'row', paddingVertical: 2, height: 25 }}>
                                        <Text style={{ fontSize: 14, lineHeight: 24 }}>昵称</Text>
                                        <View style={{ paddingLeft: 30 }}>
                                            <Text style={{ color: '#000', fontSize: 17 }}>{personInfo.name}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingVertical: 2, height: 25 }}>
                                        <Text style={{ fontSize: 14, lineHeight: 24 }}>备注</Text>
                                        <View>
                                            <TouchableOpacity style={{ paddingLeft: 30, position: 'relative' }} onPress={() => { setWritremark(false) }} >
                                                <Image source={require('../../../assets/images/tup/tianxie.png')} style={writremark ? { width: 18, height: 18 } : { display: 'none' }}></Image>
                                            </TouchableOpacity>
                                            <View style={writremark ? { display: 'none' } : { flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <TextInput
                                                    placeholder="请输入备注"
                                                    onChangeText={text => onChangeText1(text)}
                                                    value={remain}
                                                    maxLength={12}
                                                    style={{ backgroundColor: '#eee', height: 30, padding: 6, lineHeight: 10, marginLeft: '10%' }}
                                                />
                                                <TouchableOpacity onPress={() => { setWritremark(true) }}>
                                                    <Image source={require('../../../assets/images/tup/tuanduicankaoxian-.png')} style={{ width: 20, height: 20 }}></Image>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingVertical: 2, height: 25 }}>
                                        <Text style={{ fontSize: 14, lineHeight: 24 }}>性别</Text>
                                        <TouchableOpacity style={{ paddingLeft: 30 }} onPress={() => { onChangeText1('qefnwka.') }}>
                                            <Text style={personInfo.isboy ? { color: '#000', fontSize: 15 } : { display: 'none' }}>男</Text>
                                            <Text style={personInfo.isboy ? { display: 'none' } : { color: '#000', fontSize: 15 }}>女</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingVertical: 2, height: 25 }}>
                                        <Text style={{ fontSize: 14, lineHeight: 24 }}>生日</Text>
                                        <View style={{ paddingLeft: 30 }}>
                                            <Text style={personInfo.birthday ? { color: '#000', fontSize: 15 } : { display: 'none' }}>{personInfo.birthday}</Text>
                                            <Text style={personInfo.birthday ? { display: 'none' } : { color: '#000', fontSize: 15 }}> - </Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingVertical: 2, height: 25 }}>
                                        <Text style={{ fontSize: 14, lineHeight: 24 }}>手机号</Text>
                                        <View style={{ paddingLeft: 30 }}>
                                            <Text style={{ color: '#000', fontSize: 15 }}>{personInfo.tel}</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={{marginBottom:8}}>
                                    <TextInput
                                        autoCapitalize='none'
                                        placeholder="请输入申请语"
                                        onChangeText={text => onChangeText(text)}
                                        value={value}
                                        enablesReturnKeyAutomatically={true}
                                        multiline={true}
                                        numberOfLines={4}
                                        style={{ height: 120, borderColor: 'gray', borderWidth: 0.4, backgroundColor: '#eee', marginTop: 20, width: '80%', marginLeft: '10%', textAlignVertical: 'top' }}
                                    />
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ position: 'absolute', bottom: 16, width: '100%', left: 0, alignItems: 'center' }}>
                            <TouchableOpacity style={{ backgroundColor: '#0089FF', width: '60%', padding: 6, borderRadius: 90 }} onPress={() => { setShowmtk(false);tipBox() }}>
                                <Text style={{ color: '#fff', fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>添加好友</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    searchGrid: {
        width: windowWidth,
        height: 70,
        paddingHorizontal: 10,
        marginTop: 10
    },
    searchInput: {
        borderRadius: 20
    },
    searchContent: {
        backgroundColor: '#FFF',
        height: 40
    },
    searchText: {
        lineHeight: 40,
        color: '#000',
        paddingLeft: 10
    },
    hideContent: {
        display: 'none'
    }
})
export default AddPeople;

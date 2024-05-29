import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image, Platform, ScrollView } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PaymentMethod = () => {
    const [selectMethod, setSelectMethod] = useState(1);
    const [selectMethod2, setSelectMethod2] = useState(1);
    return (
        <View style={styles.container}>
            <ScrollView style={{ marginBottom: 130 }}>
                <View style={{ marginLeft: 12, marginTop: 12 }}>
                    <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>支付方式</Text>
                </View>
                <View style={{ height: 120 }}>
                    <ScrollView showsHorizontalScrollIndicator={true} horizontal={true} pinchGestureEnabled={true}>
                        <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={[{ backgroundColor: '#fff', width: 80, height: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 12, marginBottom: 8 }, selectMethod == 0 ? { borderWidth: 0.8, borderColor: '#1296DB' } : styles.shadow]} onPress={() => setSelectMethod(0)}>
                                    <Image source={require('../../../../assets/images/tup/applepay.png')} style={{ width: 60, height: 60 }} />
                                </TouchableOpacity>
                                <Text style={[styles.payText, selectMethod == 0 ? { fontSize: 18, fontWeight: 'bold' } : {}]}>pay支付</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={[{ backgroundColor: '#fff', width: 80, height: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 12, marginLeft: 12, marginBottom: 8 }, selectMethod == 1 ? { borderWidth: 0.8, borderColor: '#1296DB' } : styles.shadow]} onPress={() => setSelectMethod(1)}>
                                    <Image source={require('../../../../assets/images/tup/WaChat.png')} style={{ width: 60, height: 60 }} />

                                </TouchableOpacity>
                                <Text style={[styles.payText, selectMethod == 1 ? { fontSize: 17, fontWeight: 'bold' } : {}]}>微信支付</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={[{ backgroundColor: '#fff', width: 80, height: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 12, marginLeft: 12, marginBottom: 8 }, selectMethod == 2 ? { borderWidth: 0.8, borderColor: '#1296DB' } : styles.shadow]} onPress={() => setSelectMethod(2)}>
                                    <Image source={require('../../../../assets/images/tup/zhifubao.png')} style={{ width: 60, height: 60 }} />
                                </TouchableOpacity>
                                <Text style={[styles.payText, selectMethod == 2 ? { fontSize: 16, fontWeight: 'bold' } : { fontSize: 13 }]}>支付宝支付</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={[{ backgroundColor: '#fff', width: 80, height: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 12, marginLeft: 12, marginBottom: 8 }, selectMethod == 3 ? { borderWidth: 0.8, borderColor: '#1296DB' } : styles.shadow]} onPress={() => setSelectMethod(3)}>
                                    <Image source={require('../../../../assets/images/tup/zhifu.png')} style={{ width: 60, height: 60 }} />
                                </TouchableOpacity>
                                <Text style={[styles.payText, selectMethod == 3 ? { fontSize: 17, fontWeight: 'bold' } : { fontSize: 13 }]}>新园余额支付</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                {/* 收款方式 */}
                <View style={{ marginLeft: 12, marginTop: 12 }}>
                    <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>收款方式</Text>
                </View>
                <View style={{ height: 120 }}>
                    <ScrollView showsHorizontalScrollIndicator={true} horizontal={true} pinchGestureEnabled={true}>
                        <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={[{ backgroundColor: '#fff', width: 80, height: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 12, marginBottom: 8 }, selectMethod2 == 0 ? { borderWidth: 0.8, borderColor: '#1296DB' } : styles.shadow]} onPress={() => setSelectMethod2(0)}>
                                    <Image source={require('../../../../assets/images/tup/applepay.png')} style={{ width: 60, height: 60 }} />
                                </TouchableOpacity>
                                <Text style={[styles.payText, selectMethod2 == 0 ? { fontSize: 18, fontWeight: 'bold' } : {}]}>pay收款</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={[{ backgroundColor: '#fff', width: 80, height: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 12, marginLeft: 12, marginBottom: 8 }, selectMethod2 == 1 ? { borderWidth: 0.8, borderColor: '#1296DB' } : styles.shadow]} onPress={() => setSelectMethod2(1)}>
                                    <Image source={require('../../../../assets/images/tup/WaChat.png')} style={{ width: 60, height: 60 }} />

                                </TouchableOpacity>
                                <Text style={[styles.payText, selectMethod2 == 1 ? { fontSize: 17, fontWeight: 'bold' } : {}]}>微信收款</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={[{ backgroundColor: '#fff', width: 80, height: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 12, marginLeft: 12, marginBottom: 8 }, selectMethod2 == 2 ? { borderWidth: 0.8, borderColor: '#1296DB' } : styles.shadow]} onPress={() => setSelectMethod2(2)}>
                                    <Image source={require('../../../../assets/images/tup/zhifubao.png')} style={{ width: 60, height: 60 }} />
                                </TouchableOpacity>
                                <Text style={[styles.payText, selectMethod2 == 2 ? { fontSize: 16, fontWeight: 'bold' } : { fontSize: 13 }]}>支付宝</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={[{ backgroundColor: '#fff', width: 80, height: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 12, marginLeft: 12, marginBottom: 8 }, selectMethod2 == 3 ? { borderWidth: 0.8, borderColor: '#1296DB' } : styles.shadow]} onPress={() => setSelectMethod2(3)}>
                                    <Image source={require('../../../../assets/images/tup/erweimashoukuan.png')} style={{ width: 60, height: 60 }} />
                                </TouchableOpacity>
                                <Text style={[styles.payText, selectMethod2 == 3 ? { fontSize: 17, fontWeight: 'bold' } : { fontSize: 13 }]}>二维码收款</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <View style={{ marginLeft: 12, marginTop: 12 }}>
                        <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>流水明细</Text>
                    </View>
                    {/* 下面的是列表 */}
                    <View style={[styles.bigDiv, styles.shadowL]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../../assets/images/tup/liushui.png')} style={{ width: 40, height: 40 }} />
                            <View style={{ marginLeft: 8 }}>
                                <Text style={{ color: '#000', fontSize: 15 }}>运费转入 - 购物</Text>
                                <Text style={{ color: '#999', fontSize: 13, marginTop: 6 }}>转入后余额68900.00</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 19, color: '#000', fontWeight: 'bold' }}>+120.0</Text>
                            <Text style={{ color: '#999', fontSize: 13, marginTop: 6 }}>2024-05-28 17:16</Text>
                        </View>
                    </View>
                    <View style={[styles.bigDiv, styles.shadowL]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../../assets/images/tup/liushui.png')} style={{ width: 40, height: 40 }} />
                            <View style={{ marginLeft: 8 }}>
                                <Text style={{ color: '#000', fontSize: 15 }}>运费转入 - 购物</Text>
                                <Text style={{ color: '#999', fontSize: 13, marginTop: 6 }}>转入后余额68900.00</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 19, color: '#000', fontWeight: 'bold' }}>+120.0</Text>
                            <Text style={{ color: '#999', fontSize: 13, marginTop: 6 }}>2024-05-28 17:16</Text>
                        </View>
                    </View>
                    <View style={[styles.bigDiv, styles.shadowL]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../../assets/images/tup/liushui.png')} style={{ width: 40, height: 40 }} />
                            <View style={{ marginLeft: 8 }}>
                                <Text style={{ color: '#000', fontSize: 15 }}>运费转入 - 购物</Text>
                                <Text style={{ color: '#999', fontSize: 13, marginTop: 6 }}>转入后余额68900.00</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 19, color: '#000', fontWeight: 'bold' }}>+120.0</Text>
                            <Text style={{ color: '#999', fontSize: 13, marginTop: 6 }}>2024-05-28 17:16</Text>
                        </View>
                    </View>
                    <View style={[styles.bigDiv, styles.shadowL]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../../assets/images/tup/liushui.png')} style={{ width: 40, height: 40 }} />
                            <View style={{ marginLeft: 8 }}>
                                <Text style={{ color: '#000', fontSize: 15 }}>运费转入 - 购物</Text>
                                <Text style={{ color: '#999', fontSize: 13, marginTop: 6 }}>转入后余额68900.00</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 19, color: '#000', fontWeight: 'bold' }}>+120.0</Text>
                            <Text style={{ color: '#999', fontSize: 13, marginTop: 6 }}>2024-05-28 17:16</Text>
                        </View>
                    </View>
                    <View style={[styles.bigDiv, styles.shadowL]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../../assets/images/tup/liushui.png')} style={{ width: 40, height: 40 }} />
                            <View style={{ marginLeft: 8 }}>
                                <Text style={{ color: '#000', fontSize: 15 }}>运费转入 - 购物</Text>
                                <Text style={{ color: '#999', fontSize: 13, marginTop: 6 }}>转入后余额68900.00</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 19, color: '#000', fontWeight: 'bold' }}>+120.0</Text>
                            <Text style={{ color: '#999', fontSize: 13, marginTop: 6 }}>2024-05-28 17:16</Text>
                        </View>
                    </View>
                </View>
               
            </ScrollView>
            <TouchableOpacity style={{width:'60%',height:50,backgroundColor:'#ECB32C',position:'absolute',bottom:60,left:'20%',zIndex:99999,borderRadius:12}} >
                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',textAlign:'center',lineHeight:50}}>确定</Text>
            </TouchableOpacity>
        </View>

    )
};
export default PaymentMethod;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#fff',
        position:'relative'
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: '#999',
                shadowOffset: {
                    width: 12,
                    height: 15
                },
                shadowOpacity: 1,
                shadowRadius: 1.6
            },
            android: {
                elevation: 1.5
            }
        })

    },
    shadowL: {
        ...Platform.select({
            ios: {
                shadowColor: '#999',
                shadowOffset: {
                    width: 12,
                    height: 15
                },
                shadowOpacity: 1,
                shadowRadius: 1.6
            },
            android: {
                elevation: 3
            }
        })
    },
    payText: {
        color: '#000',
        fontSize: 14
    },
    bigDiv: {
        width: '90%',
        backgroundColor: '#fff',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '5%',
        marginTop: 12,
        borderRadius: 12,
        marginBottom: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 8
    }
})
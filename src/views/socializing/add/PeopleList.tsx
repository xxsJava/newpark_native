import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity } from "react-native";
import { navigate } from "../../../config/routs/NavigationContainer";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PeopleList = ({ route }: any) => {
    const list = route.params.list;
    console.log('页面传过来搜索到的数据', list);
    const listVal = [
        {
            data: list,
            bgimage: require('../../../assets/images/tup/dg.jpg')
        }
    ];
    const [showmtk, setShowmtk] = React.useState(false);
    const [personInfo, setpersonInfo] = React.useState({"ava": 27, "index": 1, "inter": ["旅行", "美食", "吃穿", "美妆"], "isboy": true, "name": "xxs", "tel": "5175689259"});
    console.log(personInfo, '要添加的个人信息');

    return (
        <View style={styles.container}>
            <ScrollView style={{ height: windowHeight - 130 }}>
                {listVal[0].data.map((item: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
                    return (
                        <TouchableOpacity key={item.index} onPress={() => { }} style={{ backgroundColor: '#fff', borderWidth: 0.4, padding: 12 }}>
                            <View style={styles.liebiao}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={item.ava} style={{ width: 80, height: 80, opacity: 0.3 }}></Image>
                                    <Image source={item.ava} style={{ width: 73, height: 73, position: 'absolute', borderRadius: 90, }}></Image>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../../../assets/images/tup/biaoqian.png')} style={{ width: 20, height: 20 }}></Image>
                                        <Text style={{ fontSize: 17, color: '#000' }}>{item.name}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../../../assets/images/tup/shoujihaoma.png')} style={{ width: 20, height: 20 }}></Image>
                                        <Text style={{ color: '#000' }}>{item.tel}</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../../../assets/images/tup/nan-2.png')} style={item.isboy ? { width: 30, height: 30 } : { display: 'none' }}></Image>
                                        <Text style={item.isboy ? { fontSize: 16, color: '#000' } : { display: 'none' }}>男</Text>
                                        <Image source={require('../../../assets/images/tup/nv.png')} style={item.isboy ? { display: 'none' } : { width: 30, height: 30 }}></Image>
                                        <Text style={item.isboy ? { display: 'none' } : { fontSize: 16, color: '#000' }}>女</Text>
                                    </View>

                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => { setShowmtk(true); setpersonInfo(item) }} style={{ backgroundColor: '#0088FE', padding: 8 }}>
                                        <Text style={{ color: '#fff', fontSize: 16 }}>添加联系人</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View style={{ flexDirection: 'row', padding: 8, paddingBottom: 0, width: '100%', justifyContent: 'center' }}>
                                {
                                    item.inter.map(item => {
                                        return (
                                            <View key={item} style={{ backgroundColor: '#000', padding: 2, margin: 2 }}>
                                                <Text style={{ color: '#FFC4DA', fontSize: 9 }}>#{item}</Text>
                                            </View>
                                        )
                                    })}
                            </View>
                        </TouchableOpacity>
                    )
                })}

            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12, height: 130 }}>
                <Image source={require('../../../assets/images/tup/pdx.png')} style={{ width: 140, height: 60 }}></Image>
                <Image source={require('../../../assets/images/tup/py.png')} style={{ width: 80, height: 80, marginTop: -18 }}></Image>
            </View>
            {/* 模态框显示 */}
            <View style={showmtk ? { position: 'absolute' } : { display: 'none' }}>
                <TouchableOpacity style={{ width: windowWidth, height: windowHeight, backgroundColor: '#000', opacity: 0.3, position: 'absolute' }} onPress={() => {setShowmtk(false)}}></TouchableOpacity>
                <View style={{ width: windowWidth * 0.9, marginLeft: windowWidth * 0.05, position: 'absolute', zIndex: 99999, marginTop: (windowHeight - 500) / 2 }}>
                    <Image source={require('../../../assets/images/tup/891713317829_.pic.jpg')} style={{ width: '100%', height: 160, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}></Image>
                    <View style={{ backgroundColor: '#fff', width: '100%', height: 300, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                        <View style={{ flexDirection: 'row', marginTop: -30 }}>
                            <View >
                                {/* <Image source={personInfo.ava} style={{ width: 80, height: 80, marginHorizontal: 12 }}></Image> */}
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
                            <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:8}}>个人信息</Text>
                            <View>
                                <View style={{ borderBottomWidth: 0.4, flexDirection: 'row' ,paddingVertical:12,height:48}}>
                                    <Text style={{fontSize:17}}>昵称</Text>
                                   <View style={{paddingLeft:30}}>
                                   <Text style={{color:'#000',fontSize:20}}>{personInfo.name}</Text>
                                   </View>
                                </View>
                            </View>
                        </View>
                        <View style={{position:'absolute',bottom:16,width:'100%',left:0,alignItems:'center'}}>
                            <TouchableOpacity style={{backgroundColor:'#0089FF',width:'60%',padding:10,borderRadius:90}}>
                                <Text style={{color:'#fff',fontSize:18,textAlign:'center',fontWeight:'bold'}}>添加好友</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
};
export default PeopleList;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#EEEEEE',
        zIndex: -2,
        position: 'relative'
    },
    bgimg: {
        width: windowWidth,
        height: 90
    },
    liebiao: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
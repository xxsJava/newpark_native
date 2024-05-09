import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Complain = () => {
    const data = [
        {
            index: 1,
            obj1: {
                index: 11,
                main: '引战',
                decs: ['恶意引导不同群体相互攻击']
            },
            obj2: {
                index: 12,
                main: '广告',
                decs: ['营利、导流等目的的广告信息和内容']
            }
        },
        {
            index: 2,
            obj1: {
                index: 21,
                main: '影响评分公正性',
                decs: []
            },
            obj2: {
                index: 22,
                main: '算法推荐类违规信息',
                decs: []
            }
        },
        {
            index: 3,
            obj1: {
                index: 31,
                main: '网络暴力/网络戾气',
                decs: ['歧视偏见', '谩骂攻击', '泄漏隐私', '煽动性言论', '其他网暴信息']
            },
            obj2: {
                index: 32,
                main: '政治相关',
                decs: ['政治制度', '历史虚无', '民族仇恨', '分裂言论', '煽动言论', '其他政治有害信息']
            }
        },
        {
            index: 4,
            obj1: {
                index: 41,
                main: '色情低俗',
                decs: ['低俗内容', '色情作品', '色情导流', '色情交易', '其他色情低俗信息']
            },
            obj2: {
                index: 42,
                main: '不实信息',
                decs: ['疫情类不实信息', '科普类不实信息', '社会谣言', '时政谣言', '虚假新闻', '其他不实信息']
            }
        },
        {
            index: 5,
            obj1: {
                index: 51,
                main: '辱骂攻击',
                decs: ['侮辱谩骂', '人身攻击']
            },
            obj2: {
                index: 52,
                main: '饭圈乱象',
                decs: ['涉及未成年人', '鼓动粉丝攀比', '网络水军', '干扰舆论', '造谣爆料', '挂人引战', '内容来源不明']
            }
        },
        {
            index: 6,
            obj1: {
                index: 61,
                main: '违法违规',
                decs: ['涉嫌欺诈', '涉枪涉爆', '毒品危险品', '邪教相关', '非法交易', '恐怖血腥', '赌博内容', '教唆犯罪', '其他违法违规信息', '封建迷信', '非法外链']
            },
            obj2: {
                index: 62,
                main: '涉及未成年人',
                decs: ['诱导不良行为', '欺凌霸凌', '儿童邪典', '儿童色情', '泄漏隐私', '其他涉及未成年人有害信息']
            }
        },
        {
            index: 7,
            obj1: {
                index: 71,
                main: '自媒体乱象',
                decs: ['冒充机构媒体及特定职业', '其他仿冒信息']
            },
            obj2: {
                index: 72,
                main: '涉及重大赛事',
                decs: ['违规营销', '造谣传谣', '未经授权', '假冒仿冒', '其他不良信息']
            }
        },
    ];
    const [select, setSelect] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 11, textAlign: 'auto' }}>请选择对应理由,理由与内容不符，会延迟处理或不予处理。</Text>
            <View style={{ alignItems: 'center', marginTop: 20, width: '100%' }}>
                {
                    data.map(item => {
                        return (
                            <View key={item.index} style={{ width: '100%' }}>
                                <View style={{ flexDirection: 'row', width: '90%', marginVertical: 10 }}>
                                    <TouchableOpacity style={{ flexDirection: 'row', width: '50%',height:20}} onPress={() => setSelect(item.obj1.index)}>
                                        <Image source={require('../../../assets/images/tup/duigousele.png')} style={select == item.obj1.index ? { width: 14, height: 14 } : { display: 'none' }}></Image>
                                        <Image source={require('../../../assets/images/tup/duigou.png')} style={select == item.obj1.index ? { display: 'none' } : { width: 14, height: 14 }}></Image>
                                        <Text style={[{ fontSize: 13, color: '#000', marginLeft: 12 }, select == item.obj1.index ? { color: 'green' } : { color: '#000' }]}>{item.obj1.main}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flexDirection: 'row', width: '50%' }} onPress={() => setSelect(item.obj2.index)}>
                                    <Image source={require('../../../assets/images/tup/duigousele.png')} style={select == item.obj2.index ? { width: 14, height: 14 } : { display: 'none' }}></Image>
                                        <Image source={require('../../../assets/images/tup/duigou.png')} style={select == item.obj2.index ? { display: 'none' } : { width: 14, height: 14 }}></Image>
                                        <Text style={[{ fontSize: 13, color: '#000', marginLeft: 12 }, select == item.obj2.index ? { color: 'green' } : { color: '#000' }]}>{item.obj2.main}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={item.obj1.decs.length == 0 ? { display: 'none' } : select == item.obj1.index ? { backgroundColor: '#F7F7F7', padding: 12, width: '100%', borderRadius: 8 } : { display: 'none' }}>
                                    <Text style={item.obj1.decs.length > 1 ? { fontSize: 11, marginBottom: 8 } : { display: 'none' }}>请选择具体原因:</Text>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                        {
                                            item.obj1.decs.map(val => {
                                                return (
                                                    <View style={item.obj1.decs.length > 1 ? { backgroundColor: '#fff', width: '44%', paddingVertical: 8, borderRadius: 6, marginVertical: 6, marginHorizontal: '3%' } : {}}>
                                                        <Text style={{ fontSize: 12, color: '#000', textAlign: 'center' }}>{val}</Text>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                </View>
                                <View style={item.obj2.decs.length == 0 ? { display: 'none' } : select == item.obj2.index ? { backgroundColor: '#F7F7F7', padding: 12, width: '100%', borderRadius: 8 } : { display: 'none' }}>
                                    <Text style={item.obj2.decs.length > 1 ? { fontSize: 11, marginBottom: 8 } : { display: 'none' }}>请选择具体原因:</Text>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                        {
                                            item.obj2.decs.map(val => {
                                                return (
                                                    <View style={item.obj2.decs.length > 1 ? { backgroundColor: '#fff', width: '44%', paddingVertical: 8, borderRadius: 6, marginVertical: 6, marginHorizontal: '3%' } : {}}>
                                                        <Text style={{ fontSize: 12, color: '#000', textAlign: 'center' }}>{val}</Text>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
};
export default Complain;
const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
        padding: 12,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    }
})
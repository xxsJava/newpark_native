import React from 'react';
import { Dimensions, Image, ImageBackground, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { Checkbox } from "native-base";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const MemberServicesView = () => {
    const [select, setSelect] = React.useState(1)
    const price = [
        {
            index: 1,
            tit: '限时8.3折',
            main: '连续包月',
            amount: 10,
            befamount: 12,
            description: ''
        },
        {
            index: 2,
            tit: '限时4.7折',
            main: '连续包年',
            amount: 68,
            befamount: 129
        },
        {
            index: 3,
            tit: '限时9.6折',
            main: '12个月',
            amount: 125,
            befamount: 138
        },
        {
            index: 4,
            tit: '限时6.3折',
            main: '限时一周',
            amount: 6,
            befamount: 20
        },
    ];
    const privilege = [
        {
            index:1,
            img:require('../../../../assets/images/tup/privil1.png'),
            text:'身份勋章'
        },
        {
            index:2,
            img:require('../../../../assets/images/tup/privil2.png'),
            text:'优先发帖'
        },
        {
            index:3,
            img:require('../../../../assets/images/tup/privil3.png'),
            text:'修改昵称'
        },
        {
            index:4,
            img:require('../../../../assets/images/tup/privil4.png'),
            text:'私信聊天'
        },
        {
            index:5,
            img:require('../../../../assets/images/tup/privil5.png'),
            text:'二次编辑'
        },
    ];
    const privilege2 = [
        {
            index:1,
            img:require('../../../../assets/images/tup/privil6.png'),
            text:'退货免运费'
        },
        {
            index:2,
            img:require('../../../../assets/images/tup/privil7.png'),
            text:'专属客服'
        },
        {
            index:3,
            img:require('../../../../assets/images/tup/privil8.png'),
            text:'折上95折'
        },
        {
            index:4,
            img:require('../../../../assets/images/tup/privil9.png'),
            text:'运费券'
        },
        {
            index:5,
            img:require('../../../../assets/images/tup/privil10.png'),
            text:'优先推荐'
        },
    ]
    return (
        <ImageBackground style={styles.imageBgStyle} source={require('../../../../assets/images/tup/rc1.png')}>
            <SafeAreaView style={styles.safeView}>
                <View style={styles.orient}>
                    <View style={styles.cardposi}>
                        <View style={styles.opc} />
                        <View style={{ position: 'absolute', top: 0, left: 0, padding: 8, width: '82%', height: '100%', marginLeft: '8%', borderRadius: 30, flexDirection: 'row' }} >
                            <View style={{ width: '100%', height: '100%' }}>
                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                    <Image source={require('../../../../assets/images/tup/VIPS.png')} style={{ width: 80, height: 40 }}></Image>
                                    <Image source={require('../../../../assets/images/tup/VIP-4.png')} style={{ width: 100, height: 45 }}></Image>
                                </View>
                                <View style={{ marginTop: 0, marginLeft: 5 }}>
                                    <Text style={{ color: '#FFBF6B', fontSize: 12 }}>共19项会员特权 | 3项年VIP专属特权</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', width: 70, height: 90 }}>
                                                <Image source={require('../../../../assets/images/tup/huangguan.png')} style={{ width: 50, height: 40, marginBottom: -20, zIndex: 60 }}></Image>
                                                <Image source={require('../../../../assets/images/tup/dg.jpg')} style={{ width: 60, height: 60, borderRadius: 100, borderWidth: 1, borderColor: '#FABA3C' }}></Image>
                                            </View>
                                            <View style={{ marginLeft: 4 }}>
                                                <Text style={{ color: '#000', fontSize: 16 }}>暂未开通</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{ backgroundColor: '#FABA3C', width: 96, height: 38, borderRadius: 5, marginTop: 16 }}>
                                        <Text style={{ color: '#fff', fontSize: 14, lineHeight: 38, textAlign: 'center' }}>立即开通</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.main}>
                        <ScrollView style={{ marginTop: 100, width: '84%' }}>
                            <Image source={require('../../../../assets/images/tup/viphy.jpg')} style={{ height: 98, width: '100%' }}></Image>
                            <ScrollView horizontal={true} style={{height:160}}>
                                {price.map(item => {
                                    return (
                                            <TouchableOpacity style={[styles.hez, item.index == select ? styles.selhez : {}]} key={item.index} onPress={() => setSelect(item.index)}>
                                                <View style={styles.titdiv}>
                                                    <Text style={styles.tit}>{item.tit}</Text>
                                                </View>
                                                <Text style={styles.maintext}>{item.main}</Text>
                                                <View>
                                                    <Text style={styles.amount}>¥ {item.amount}</Text>
                                                </View>
                                                <Text style={styles.befamount}>¥{item.befamount} / 月</Text>
                                            </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>
                            <View style={{ width:'98%', justifyContent: 'center', height: 70, alignItems: 'center'}}>
                                    <Text style={{fontSize:12,lineHeight:18}}>到期 {price[select-1].amount}元/月自动续费，随时取消</Text>
                                    <Text style={{fontSize:11,lineHeight:19}}>点击开通即表示同意《新园会员协议》及《连续订阅协议》</Text>
                            </View>
                            <View>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <View style={styles.xian}/>
                                    <Image source={require('../../../../assets/images/tup/viptq.png')} style={{width:'40%',height:33,marginHorizontal:12}}></Image>
                                    <View style={styles.xian}/>
                                </View>
                            </View>
                            <View style={{paddingVertical:20}}>
                                <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginVertical:20}}>
                                   {
                                    privilege.map(item =>{
                                        return(
                                            <View key={item.index}>
                                                <Image source={item.img} style={{width:40,height:40}}></Image>
                                                <Text>{item.text}</Text>
                                            </View>
                                        )
                                    })
                                   }
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginVertical:20}}>
                                   {
                                    privilege2.map(item =>{
                                        return(
                                            <View key={item.index} style={{width:64,justifyContent:'center',alignItems:'center'}}>
                                                <Image source={item.img} style={{width:41,height:40}}></Image>
                                                <Text style={{color:'#000',fontSize:11,marginVertical:8}}>{item.text}</Text>
                                            </View>
                                        )
                                    })
                                   }
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default MemberServicesView;
const styles = StyleSheet.create({
    safeView: {
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
        zIndex: 20
    },
    imageBgStyle: {
        width: windowWidth,
        ...Platform.select({
            ios: {
                height: windowHeight - 400,
            },
            android: {
                height: 500,
            }
        }),
        // opacity:0.1,
        position: 'relative',
        zindex: -2
    }
    ,
    orient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: windowHeight * 0.8,
        width: windowWidth
    },
    opc: {
        opacity: 0.2,
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 5,
            },
        }),
        width: '84%',
        height: '100%',
        borderRadius: 30
    },
    cardposi: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: windowWidth,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 60
    },
    main: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: windowWidth,
        height: '88%',
        zIndex: 50,
        bottom: 0,
        left: 0,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        alignItems: 'center'
    },
    hez: {
        height: 135,
        width: 100,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginHorizontal: 6,
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 6
            },
        })
    },
    tit: {
        color: '#fff',
        fontSize: 11,
        textAlign: 'center',
        lineHeight: 26
    },
    titdiv: {
        backgroundColor: '#F5A30B',
        width: '80%',
        height: 26,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12
    },
    maintext: {
        color: '#000',
        marginVertical: 6,
        fontSize: 15

    },
    amount: {
        color: '#ECB32C',
        fontSize: 26,
        fontWeight: 'bold'
    },
    befamount: {
        textDecorationLine: 'line-through',
        marginTop: 12
    },
    selhez: {
        backgroundColor: '#FAF5E7',
        borderWidth: 3,
        borderColor: '#ECB32C'
    },
    xian:{
        height:0.5,
        width:'28%',
        backgroundColor:"#ccc",

    }
})
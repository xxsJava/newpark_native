import React, { Component } from 'react';
import { Dimensions, Image, ImageBackground, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';
// import { Checkbox } from "native-base";
import { CheckIcon, Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@gluestack-ui/themed';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradinet from 'react-native-linear-gradient';
import { navigate } from '../../../../config/routs/NavigationContainer';


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
                <View style={styles.headView}>
                    <IconButton size={22} iconColor='#000' icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('MineStacker')}></IconButton>
                    <View style={{ width: '75%' }}>
                        <Text style={{ color: '#000', textAlign: 'center', fontSize: 18 }}>会员中心</Text>
                    </View>
                </View>
                {/* <View style={styles.contentView}>
                        <View style={styles.placeholderView}></View> */}
                {/* <View style={styles.protocolView}>
                            <Text allowFontScaling={false} style={styles.protocoText}>会员权益</Text>
                            <View style={styles.protocoCard}>
                                <ScrollView style={styles.scrollStyle}></ScrollView>
                            </View>
                            <View style={styles.buttonView}>
                                <TouchableOpacity style={styles.buttonStyle}>
                                    <Text allowFontScaling={false} style={styles.buttonText}>开通</Text>
                                </TouchableOpacity>
                                <View style={styles.chekboxView}>
                                    <Checkbox value='true' borderColor='#FFB300'>
                                        <CheckboxIndicator borderColor='#FFB300' mr="$2">
                                            <CheckboxIcon bgColor='#FFB300' as={CheckIcon} />
                                        </CheckboxIndicator>
                                        <CheckboxLabel>同意协议《用户协议》</CheckboxLabel>
                                    </Checkbox>
                                </View>
                            </View>
                        </View> */}
                {/* <LinearGradinet colors={['rgba(99, 28, 136,1)','rgba(250, 185, 60,0.9)']} start={{x: 0, y: 0}} end={{x: 0, y: 1}} style={styles.personalDataView}>
                            <View style={styles.avatarView}>
                                <Avatar.Image size={68} source={require('../../../../assets/images/defaultheader.png')} accessibilityLabel='头像'></Avatar.Image>
                            </View>
                            <View style={styles.dataView}>
                                <Text allowFontScaling={false} style={styles.dataName}>昵称:O泡果奶</Text>
                                <Text allowFontScaling={false} style={styles.dataText}>UID:123456789011111</Text>
                            </View>
                            <View style={styles.gradeView}>
                                <AnimatedCircularProgress fill={78} size={66} width={3.5} rotation={200} tintColor='#FA59DF' backgroundColor='rgba(136, 136, 136,0.2)' ></AnimatedCircularProgress>
                                <Text allowFontScaling={false} style={styles.progressValue}>1421/10000</Text>
                                <View style={styles.gradeBg}>
                                    <Image style={styles.gradeImage} source={require('../../../../assets/images/alimom/V1.png')} accessibilityLabel='图片' alt="头像"></Image>
                                </View>
                            </View>
                        </LinearGradinet> */}
                {/* </View> */}

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
    },
    headView: {
        width: windowWidth,
        height: 40,
        paddingLeft: 5,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    contentView: {
        width: windowWidth,
        height: windowHeight - 45,
        position: 'relative',
    },
    placeholderView: {
        ...Platform.select({
            ios: {
                height: 230
            },
            android: {
                height: 180
            }
        })
    },
    protocolView: {
        width: windowWidth,
        height: '100%',
        paddingHorizontal: 15,
        backgroundColor: '#FCD083',
        ...Platform.select({
            ios: {
                paddingTop: 60,
            },
            android: {
                paddingTop: 50,
            }
        })
    },
    personalDataView: {
        width: '84%',
        height: 120,
        borderRadius: 8,
        marginHorizontal: '8%',
        position: 'absolute',
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        zIndex: 10,
        ...Platform.select({
            ios: {
                top: 145,
            },
            android: {
                top: 95,
            }
        })
    },
    protocoText: {
        color: '#000',
        ...Platform.select({
            ios: {
                fontSize: 19,
                marginBottom: 20,
            },
            android: {
                fontSize: 20,
                marginBottom: 10,
            }
        })
    },
    protocoCard: {
        width: '96%',
        borderRadius: 12,
        marginHorizontal: '2%',
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                height: '45%',
                shadowColor: '#999',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 2.5,
            },
            android: {
                height: '40%',
                elevation: 7,
            }
        })
    },
    scrollStyle: {
        flex: 1
    },
    buttonView: {
        width: '100%',
        height: 80,
        paddingTop: 15
    },
    buttonStyle: {
        width: '90%',
        height: 50,
        marginHorizontal: '5%',
        borderRadius: 22,
        backgroundColor: '#FBBA3D'
    },
    buttonText: {
        fontSize: 19,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50
    },
    chekboxView: {
        marginTop: 7,
        alignItems: 'center'
    },
    avatarView: {
        width: '25%',
        alignItems: 'center',
        paddingTop: 25
    },
    dataView: {
        width: '47%',
        paddingTop: 30
    },
    dataName: {
        fontSize: 15,
        color: '#222',
        fontWeight: 'bold',
        lineHeight: 30
    },
    dataText: {
        fontSize: 15,
        color: '#111'
    },
    gradeView: {
        width: '28%',
        paddingTop: 20,
        alignItems: 'center',
        position: 'relative',
    },
    gradeBg: {
        top: 37,
        width: 33,
        height: 33,
        borderRadius: 16.5,
        position: 'absolute',
        zIndex: 40,
        backgroundColor: '#F8B032'
    },
    progressValue: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 30,
    },
    gradeImage: {
        width: 33,
        height: 33
    },
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
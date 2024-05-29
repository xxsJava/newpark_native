import React, { Component, useState } from "react";
import { Dimensions, SectionList, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight, Modal } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { loginOutApi } from "../../../../api/sys/lgoin";
import HeadNav from "../../../../components/Nav/HeadNav";
import { navigate } from '../../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

// 地址管理
const addressManage = () => {
    console.log('地址管理');
    navigate('AddressManagementRoute')
}
// 账号与安全
const AccountSecurity = () => {
    console.log('账号与安全');
    navigate('AccountSecurity')
}
// 个人资料
const personData = () => {
    console.log('个人资料');

    navigate('PersonalData')
};
// 支付方式
const payStyle = () => {
    console.log('支付方式');
    navigate('PaymentMethod')
}
// 收款方式
const collection = () => {
    console.log('收款方式');
    navigate('WithDrawal')
}
// 微信收款提现
const firstWithdrawal = () => {
    console.log('微信收款提现');
    navigate('WithDrawal')
}
// 图片视频
const pictureAndVideo = () => {
    console.log('图片视频');

}
// 消息通知
const messagenotification = () => {
    console.log('消息通知');
    navigate('MessageNotifi')
};
// 黑名单
const blackList = () => {
    console.log('黑名单');
    navigate('Black')
};
// 隐私设置
const privacySettings = () => {
    console.log('隐私设置');
    navigate('PricacySetting')
}
// 关于
const about = () => {
    console.log('关于');

    navigate('About')
}
// 退出登录
const logOut = async () => {
    console.log('退出登录');

    // const logOutApi = await loginOutApi();
    // console.log(logOutApi);
    navigate("LoginStacker");
};
const nulls = () => {
    console.log('什么都没有');

}
const DATA = [
    {
        title: '个人',
        data: ['个人资料', '地址管理', '账号与安全'],
    },
    {
        title: '交易',
        data: ['支付方式', '微信收款提现'],
    },
    {
        title: '通用',
        data: ['消息通知', '清除缓存'],
    },
    {
        title: '隐私',
        data: ['隐私设置', '黑名单'],
    }, {
        title: '关于',
        data: ['关于New Park']
    }, {
        title: '',
        data: ['退出登录'],
    }, {
        title: '',
        data: [''],
    }
];

// export default class SetUp extends Component {
const SetUp = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const clearCache = () => {
        console.log('清除缓存');
        setModalVisible(true)
    }
    return (
        <View style={styles.parentView}>
            <HeadNav props={{ title: '设置', navPath: '' }} />
            <View style={styles.contentStyle}>
                {/* <ScrollView style={styles.scorllStyle}>
                        <View style={styles.listStyle}> */}

                {/* 测试清除缓存的模态框 */}
                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={{
                            position:'absolute',width: windowWidth, height: windowHeight
                        }}>
                            <TouchableOpacity style={{ position: 'absolute', width: windowWidth, height: windowHeight, backgroundColor: '#000',opacity:0.2}} onPress={() => {setModalVisible(false)}}/>
                            <View style={{backgroundColor:'#fff',width:'80%',height:'20%',position:'absolute',left:'10%',top:'40%',borderRadius:20,padding:20}}>
                                <Text style={{fontSize:18,textAlign:'center',color:'#000'}}>确定清除本地缓存？</Text>
                                <View style={{position:'absolute',bottom:20,left:'10%',width:'80%',flexDirection:'row',justifyContent:'space-between'}}>
                                    <TouchableHighlight
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                        style={{width:'54%',backgroundColor:'#73D0FB',padding:8,borderRadius:12,marginRight:'5%'}}
                                    >
                                        <Text style={{color:'#fff',textAlign:'center',fontSize:16}}>取消</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                        style={{backgroundColor:'#FE9C23',width:'54%',padding:8,borderRadius:12,marginLeft:'5%'}}
                                    >
                                        <Text style={{color:'#fff',textAlign:'center',fontSize:16}}>确定</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>

                {/* 
                            <TouchableOpacity style={styles.itemStyle} activeOpacity={0.4} onPress={() => personData()}>
                                <Text allowFontScaling={false} style={styles.itemText}>个人资料</Text>
                                <View style={styles.itemIconView}>
                                    <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemStyle} activeOpacity={0.4} onPress={() => notiSett()}>
                                <Text allowFontScaling={false} style={styles.itemText}>通知设置</Text>
                                <View style={styles.itemIconView}>
                                    <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemStyle} activeOpacity={0.4} onPress={() => {
                                this.setModalVisible(true);
                            }}>
                                <Text allowFontScaling={false} style={styles.itemText}>清除缓存</Text>
                                <View style={styles.itemIconView}>
                                    <Text allowFontScaling={false} style={styles.itemIconText}>703.10k</Text>
                                    <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemStyle} activeOpacity={0.4} onPress={() => navigate('Black')}>
                                <Text allowFontScaling={false} style={styles.itemText}>黑名单</Text>
                                <View style={styles.itemIconView}>
                                    <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                </View>
                            </TouchableOpacity> */}
                {/* <TouchableOpacity style={styles.itemStyle} activeOpacity={0.4} onPress={() => navigate('About')}>
                                <Text allowFontScaling={false} style={styles.itemText}>关于我们</Text>
                                <View style={styles.itemIconView}>
                                    <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                </View>
                            </TouchableOpacity> */}
                {/* <TouchableOpacity style={styles.itemStyle} activeOpacity={0.4} onPress={() => reguser()}>
                                <Text allowFontScaling={false} style={styles.itemText}>注册用户</Text>
                                <View style={styles.itemIconView}>
                                    <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                </View>
                            </TouchableOpacity> */}
                {/* <TouchableOpacity style={styles.itemStyle} activeOpacity={0.4} onPress={() => logOut()}>
                                <Text allowFontScaling={false} style={[styles.itemText, { color: 'red' }]}>退出登录</Text>
                                <View style={styles.itemIconView}>
                                    <Entypo style={styles.itemIcon} color='#000' size={16} name="chevron-thin-right"></Entypo>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView> */}


                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.item} onPress={item == '个人资料' ? personData : item == '地址管理' ? addressManage : item == '账号与安全' ? AccountSecurity : item == '支付方式' ? payStyle : item == '收款方式' ? collection : item == '微信收款提现' ? firstWithdrawal : item == '消息通知' ? messagenotification : item == '图片视频' ? pictureAndVideo : item == '清除缓存' ? clearCache : item == '隐私设置' ? privacySettings : item == '黑名单' ? blackList : item == '关于New Park' ? about : item == '退出登录' ? logOut : nulls}>
                            <Text style={styles.title}>{item}</Text>
                            <Feather style={styles.icon} name="chevron-right" size={18} color="#dbdbdb" />
                        </TouchableOpacity>

                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </View>
        </View>
    )
}

export default SetUp;
const styles = StyleSheet.create({
    parentView: {
        width: windowWidth,
        height: windowHeight,
    },
    derTexthea: {
        width: '80%',
        fontSize: 17,
        color: '#000',
        lineHeight: 45,
        textAlign: 'center',
    },
    contentStyle: {
        width: windowWidth,
        height: windowHeight,
        paddingLeft: 10,
        marginRight: 10,
        backgroundColor: '#FAFAFA'
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        // marginVertical: 8,
        flexDirection: 'row'
    },
    header: {
        fontSize: 14,
        // backgroundColor: '#fff',
        color: '#999',
        padding: 10
    },
    title: {
        fontSize: 16,
        color: '#000'
    },
    icon: {
        position: 'absolute',
        right: 20,
        top: 15
    }
})
import React, { Component } from "react";
import { Trans } from 'react-i18next';
import { Dimensions, SectionList, StyleSheet, Text, View } from "react-native";
import { Appbar } from 'react-native-paper';
import Feather from "react-native-vector-icons/Feather";
import { loginOutApi } from "../../../../api/sys/lgoin";
import { navigate } from '../../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

// 个人资料
const personData = () => {
    navigate('PersonalData')
};
// 通知设置
const notiSett = () => {

};
// 清除缓存
const clearCache = () => {
    // setclearhuan(true)
};
// 黑名单
const blackList = () => {

};
// 关于我们
const aboutUs = () => {

};
// 注册用户
const reguser = () => {

};
// 退出登录
const logOut = async () => {
    const logOutApi = await loginOutApi();
    console.log(logOutApi);
    navigate("LoginStacker");
};

const DATA = [
    {
      title: '个人',
      data: ['个人资料', '地址管理', '账号与安全'],
    },
    {
      title: '交易',
      data: ['支付方式', '收款方式', '微信收款提现'],
    },
    {
      title: '通用',
      data: ['消息通知', '图片视频', '清除缓存'],
    },
    {
      title: '隐私',
      data: ['隐私设置', '黑名单'],
    },{
        title: '关于',
        data: ['关于New Park']
      },{
        title: '',
        data: ['退出登录'],
      },{
        title: '',
        data: [''],
      }
  ];

export default class SetUp extends Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible: boolean) => {
        this.setState({ modalVisible: visible });
    }
    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.parentView}>
                <Appbar.Header>
                    <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('MineStacker')} />
                    <Text allowFontScaling={false} style={styles.derTexthea}>
                        <Trans>navigationBar.title19</Trans>
                    </Text>
                </Appbar.Header>
                <View style={styles.contentStyle}>
                    {/* <ScrollView style={styles.scorllStyle}>
                        <View style={styles.listStyle}> */}

                            {/* 测试清除缓存的模态框 */}
                            {/* <View style={styles.centeredView}>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        this.setModalVisible(!modalVisible);
                                    }}
                                > */}
                                    {/* <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <Text style={styles.modalText}>确定清除本地缓存？</Text>
                                            <View style={styles.heng}>
                                                <TouchableHighlight
                                                    style={{ ...styles.openButton, backgroundColor: "white" }}
                                                    onPress={() => {
                                                        this.setModalVisible(!modalVisible);
                                                    }}
                                                >
                                                    <Text style={[styles.textStyle,{color:'black'}]}>取消</Text>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    style={{ ...styles.openButton, backgroundColor: "red" }}
                                                    onPress={() => {
                                                        this.setModalVisible(!modalVisible);
                                                    }}
                                                >
                                                    <Text style={styles.textStyle}>确定</Text>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View> */}

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
                        renderItem={({item}) => (
                            <View style={styles.item}>
                                <Text style={styles.title}>{item}</Text>
                                <Feather style={styles.icon} name="chevron-right" size={18} color="#dbdbdb" />
                            </View>
                        )}
                        renderSectionHeader={({section: {title}}) => (
                            <Text style={styles.header}>{title}</Text>
                        )}
                    />
                </View>
            </View>
        )
    }
}

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
        paddingLeft:10,
        marginRight:10,
        backgroundColor:'#FAFAFA'
    },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    // marginVertical: 8,
    flexDirection:'row'
  },
  header: {
    fontSize: 14,
    // backgroundColor: '#fff',
    color:'#999',
    padding:10
  },
  title: {
    fontSize: 16,
    color:'#000'
  },
  icon:{
    position:'absolute',
    right:20,
    top:15
  }
})
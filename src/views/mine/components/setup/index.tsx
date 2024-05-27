import React, { Component } from "react";
import { Dimensions, SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { loginOutApi } from "../../../../api/sys/lgoin";
import HeadNav from "../../../../components/Nav/HeadNav";
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
      data: [{title:'个人资料',id:'1'},{title: '地址管理',id:'2'}, {title:'账号与安全',id:'3'}],
    },
    {
      title: '交易',
      data: [{title:'支付方式',id:'4'}, {title:'收款方式',id:'5'}, {title:'微信收款提现',id:'6'}],
    },
    {
      title: '通用',
      data: [{title:'消息通知',id:'7'}, {title:'图片视频',id:'8'}, {title:'清除缓存',id:'9'}],
    },
    {
      title: '隐私',
      data: [{title:'隐私设置',id:'10'}, {title:'黑名单',id:'11'}],
    },{
        title: '关于',
        data: [{title:'关于New Park',id:'12'}]
      },{
        title: '',
        data: [{title:'退出登录',id:'13',fun:logOut}],
      },{
        title: '',
        data: [{title:''}],
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
                <HeadNav props={{title:'设置',navPath:''}} />
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
                        keyExtractor={(item, index) => item.title}
                        renderItem={renderItem}
                        renderSectionHeader={({section: {title}}) => (
                            <Text style={styles.header}>{title}</Text>
                        )}
                    />
                </View>
            </View>
        )
    }
}

const renderItem = ({item}:any) => {
    return(
        <TouchableOpacity  activeOpacity={0.4} onPress={item.fun}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Feather style={styles.icon} name="chevron-right" size={18} color="#dbdbdb" />
            </View>
        </TouchableOpacity>
    )
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
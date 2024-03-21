import React from 'react';
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Appbar } from 'react-native-paper';
// import DashLine from 'rn-dashline';
const CallCustom = ({ navigation }: any) => {
    // const [tabVal, setTab] = useState('tab1');
    // const handleTabPress = (tab: string) => {
    //   console.log('Tab状态' + tab);
    //   setTab(tab);
    const list1 = [
        {
            index: 1,
            main: '怎么管理群聊'
        },
        {
            index: 2,
            main: '订单收不到怎么办'
        },
        {
            index: 3,
            main: '找不到我的地址'
        }
    ];
    const list2 = [
        {
            index: 1,
            main: '服务评价'
        },
        {
            index: 2,
            main: '退换货'
        },
        {
            index: 3,
            main: '售后查询'
        },
        {
            index: 4,
            main: '修改密码'
        },
        {
            index: 5,
            main: '官方客服电话'
        },
        {
            index: 6,
            main: '怎么创建群聊'
        }
    ]
    var [value, onChangeText] = React.useState('');
    function setValue(item:string) {
        onChangeText(item)
    }
    return (
        <SafeAreaView >
            <Appbar.Header style={styles.appbarStyle}>
                <View style={styles.heng}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <Text style={styles.h6}>返回</Text>
                </View>
                <Text style={styles.h2}>新园客服</Text>
                {/* <image  /> */}
                <Image source={require('../../../../assets/images/tup/gengduo.png')} style={styles.iconStyle} accessibilityLabel='图片' alt="头像"/>
            </Appbar.Header>
            <ScrollView style={styles.shangxia}
             contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}
             
            >
                <View style={styles.topStyle}>
                <View style={styles.list1box}>
                    <View style={styles.padd}>
                        <Text>请问您想问这些问题吗～</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <DashLine style={{ flex: 1, margin: 5 }} lineWidth={1} /> */}
                    </View>
                    <View style={styles.tit}>
                        <View style={styles.littit}>
                            <Image source={require('../../../../assets/images/tup/bangzhu.png')} style={styles.questimg} accessibilityLabel='图片' alt="头像"/>
                            <View>
                                <Text style={styles.titText}>猜您想问</Text>
                            </View>
                        </View>
                        <View>
                            {list1.map(item => {
                                return (
                                    <TouchableOpacity style={styles.list1litbox} onPress={()=>{
                                        setValue(item.main)
                                    }}>
                                        <Text style={styles.fonblac}>{item.main}</Text>
                                        <Image source={require('../../../../assets/images/chevron-right.png')} style={styles.questimg} accessibilityLabel='图片' alt="头像"></Image>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                </View>
                <View style={styles.wait}>
                    <Text style={styles.waittit}>正在转接中，人工客服马上为您服务～</Text>
                </View>
                </View>
                <KeyboardAvoidingView style={styles.bottomstyle}
                     behavior={Platform.OS == "ios" ? "padding" : "height"}
                     keyboardVerticalOffset={2}
                     
                >
                    <View style={styles.litlist}>
                        {
                            list2.map(item => {
                                return (
                                    <View style={styles.litbg} key={item.index}>
                                        <Text style={styles.list2text}>{item.main}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View style={styles.mainbox}>
                        <Image source={require('../../../../assets/images/tup/yuyinqiehuan.png')} style={styles.yuyin} accessibilityLabel='图片' alt="头像"/>
                        <TextInput
                            style={styles.inptext}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                            placeholder='请输入您要咨询的内容吧～'
                        />
                        <Image source={require('../../../../assets/images/tup/biaoqing.png')} style={styles.yuyin} accessibilityLabel='图片' alt="头像"/>
                        <View style={value=='' ? styles.xian:styles.hidd}>
                            <Image source={require('../../../../assets/images/tup/zengjiatianjiajiahao.png')} style={styles.yuyin} accessibilityLabel='图片' alt="头像"/>
                        </View>
                        <View style={value== '' ? styles.hidd:styles.xian}>
                            <TouchableOpacity style={styles.sendSty} onPress={() =>{
                                console.log(value);
                            }}>
                                <Text style={styles.sendtext}>发送</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>    
        </SafeAreaView>
    )
}
export default CallCustom;
const styles = StyleSheet.create({
    appbarStyle: {
        borderWidth: 0,
        backgroundColor: '#FFF',
        zIndex: 999,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60
    },
    iconStyle: {
        width: 30,
        height: 30,
        marginRight: 12
    },
    heng: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    h2: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    h6: {
        fontSize: 17,
        textAlign: 'center'
    },
    questimg: {
        height: 20,
        width: 20
    },
    titText: {
        color: '#F49F0B',
        fontSize: 16,
        marginLeft: 12
    },
    tit: {
        flexDirection: 'column',


    },
    list1litbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal:14
    },
    list1box: {
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        width: '65%',
        height: 200,
        borderRadius: 20,
        marginTop: 30,
        paddingVertical: 20,
        marginLeft:8
    },
    littit: {
        flexDirection: 'row',
        paddingHorizontal:14
    },
    padd:{
        paddingHorizontal:14
    },
    fonblac: {
        color: 'black'
    },
    wait: {
        backgroundColor: '#FFF2D9',
        width: '80%',
        borderRadius: 20,
        padding: 2,
        marginTop: 20,
        marginLeft: '10%'
    },
    waittit: {
        textAlign: 'center',
        fontSize: 12
    },
    litlist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal:3
    },
    litbg: {
        backgroundColor: '#FBF5EB',
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 10,
        borderColor: '#BBBBBB',
        borderWidth: 1
    },
    list2text: {
        fontSize: 10

    },
    yuyin: {
        width: 33,
        height: 33
    },
    inptext: {
        height: 34, 
        width:230,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius:20,
        fontSize:11,
        paddingHorizontal:18
    },
    mainbox:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:4,
        marginTop:8,
        height:66
    },
    bottomstyle:{
       flex:1,
       justifyContent:'flex-end',
       height:99
    },
    shangxia:{
        height:'93%'
    },
    topStyle:{
        flex:1,
        justifyContent:'flex-start'
    },
    sendSty:{
        backgroundColor:'#399024',
        borderRadius:8,
        paddingHorizontal:13,
        paddingVertical:8
    },
    sendtext:{
        color:'#fff',
        fontWeight:'bold'
    },
    hidd:{
        display:'none'
    },
    xian:{
       display:'flex'
    }
})


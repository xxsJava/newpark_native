import React from 'react';
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import { Appbar } from 'react-native-paper';
// import DashLine from 'rn-dashline';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    function setValue(item: string) {
        onChangeText(item)
    }
    const [comShow, setComshow] = React.useState(false);
    const comBack = () => {
        console.log('弹出模态框');
        setComshow(true);
        // navigation.goBack()
    };
    const [rating, setRating] = React.useState(5);
    const handleStartRating = ( index ) => {
        setRating(index + 1);
        console.log(index+1,'星星的点击');
       
    };
    console.log(rating,'写在外面的');
    
    const [starmt, setStarmt] = React.useState(false);
    const [ridicule,setRidicule] = React.useState(false);
    return (
        <SafeAreaView >
            <Appbar.Header style={styles.appbarStyle}>
                <View style={styles.heng}>
                    <Appbar.BackAction onPress={() => comBack()} />
                    <Text style={styles.h6}>返回</Text>
                </View>
                <Text style={styles.h2}>新园客服</Text>
                {/* <image  /> */}
                <Image source={require('../../../../assets/images/tup/gengduo.png')} style={styles.iconStyle} accessibilityLabel='图片' alt="头像" />
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
                                <Image source={require('../../../../assets/images/tup/bangzhu.png')} style={styles.questimg} accessibilityLabel='图片' alt="头像" />
                                <View>
                                    <Text style={styles.titText}>猜您想问</Text>
                                </View>
                            </View>
                            <View>
                                {list1.map(item => {
                                    return (
                                        <TouchableOpacity style={styles.list1litbox} onPress={() => {
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
                        <Image source={require('../../../../assets/images/tup/yuyinqiehuan.png')} style={styles.yuyin} accessibilityLabel='图片' alt="头像" />
                        <TextInput
                            style={styles.inptext}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                            placeholder='请输入您要咨询的内容吧～'
                        />
                        <Image source={require('../../../../assets/images/tup/biaoqing.png')} style={styles.yuyin} accessibilityLabel='图片' alt="头像" />
                        <View style={value == '' ? styles.xian : styles.hidd}>
                            <Image source={require('../../../../assets/images/tup/zengjiatianjiajiahao.png')} style={styles.yuyin} accessibilityLabel='图片' alt="头像" />
                        </View>
                        <View style={value == '' ? styles.hidd : styles.xian}>
                            <TouchableOpacity style={styles.sendSty} onPress={() => {
                                console.log(value);
                            }}>
                                <Text style={styles.sendtext}>发送</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>

            {/* 实现吐槽的模态框 */}
            <TouchableOpacity style={ridicule ? { position: 'absolute', width: windowWidth, height: windowHeight, top: 0, left: 0, backgroundColor: '#000', opacity: 0.1 ,zIndex:999} : { display: 'none' }} onPress={() => setRidicule(false)}></TouchableOpacity>
           <View style={ridicule ?{ position: 'absolute' ,width:'70%',backgroundColor:'#fff',top:'40%',left:'15%',padding:12,borderRadius:8,zIndex:9999,height:'40%'}:{display:'none'}}>
               <TouchableOpacity onPress={() => { setRidicule(false)}}>
                    <Image source={require('../../../../assets/images/tup/guanbi.png')} style={{width:20,height:20,position:'absolute',top:0,right:0}}></Image>
               </TouchableOpacity>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={styles.xiant}></View>
                    <Text style={{padding:12,fontSize:12}}>您对本次服务满意吗</Text>
                    <View style={styles.xiant}></View>
                </View>
                <ScrollView style={{height:'70%'}}>
                    <TextInput allowFontScaling={false} style={styles.remarksInput} selectionColor='#FABA3C' placeholder='可以给个建议吗...' autoCorrect={false} multiline={true}></TextInput>
                </ScrollView>
            </View>
            {/* 实现用户评分的模态框 */}
            <TouchableOpacity style={starmt ? { position: 'absolute', width: windowWidth, height: windowHeight, top: 0, left: 0, backgroundColor: '#000', opacity: 0.1 ,zIndex:999} : { display: 'none' }} onPress={() => setStarmt(false)}></TouchableOpacity>
            <View style={starmt ?{ position: 'absolute' ,width:'70%',height:'20%',backgroundColor:'#fff',top:'40%',left:'15%',padding:12,borderRadius:8,zIndex:999}:{display:'none'}}>
               <TouchableOpacity onPress={() => { setStarmt(false)}}>
                    <Image source={require('../../../../assets/images/tup/guanbi.png')} style={{width:20,height:20,position:'absolute',top:0,right:0}}></Image>
               </TouchableOpacity>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={styles.xiant}></View>
                    <Text style={{padding:12,fontSize:12}}>您对本次服务满意吗</Text>
                    <View style={styles.xiant}></View>
                </View>
            <View style={{flexDirection:'row'}}>
                {
                    [...Array(5)].map((star,index) => (
                        // <Text onPress={() => handleStartRating(index)} key={index} style={[styles.star, { color: rating > index ? 'yellow' : 'grey' }]}>
                            
                        // </Text>
                       <TouchableOpacity key={index}  onPress={() => handleStartRating(index)}>
                        <Image source={require('../../../../assets/images/tup/xingxing.png')} style={[styles.star,  rating > index ? {}:{display:'none'}]} ></Image>
                        <Image source={require('../../../../assets/images/tup/xingxing-2.png')} style={[styles.star,  rating > index ? {display:'none'}:{}]}></Image>
                        </TouchableOpacity>

                    )

                    )
                }
               
            </View>
            <View style={{width:'100%',marginTop:20}}>
                    <Text style={rating == 1 ? {color:'#000',textAlign:'center'}: {display:'none'}}>很不满</Text>
                    <Text style={rating == 2 ? {color:'#000',textAlign:'center'}: {display:'none'}}>不满</Text>
                    <Text style={rating == 3 ? {color:'#000',textAlign:'center'}: {display:'none'}}>一般</Text>
                    <Text style={rating == 4 ? {color:'#000',textAlign:'center'}: {display:'none'}}>满意</Text>
                    <Text style={rating == 5? {color:'#000',textAlign:'center'}: {display:'none'}}>很满意</Text>
                </View>
            </View>

            <View style={comShow ? styles.mtkm : { display: 'none' }}></View>
            <View style={comShow ? styles.mtk : { display: 'none' }}>
                <View style={styles.litmtk}>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 18, color: '#000', fontWeight: 'bold' }}>给新园APP评分</Text>
                    </View>
                    <Text style={{ textAlign: 'left', color: '#000', lineHeight: 30 }}>
                        如果你喜欢新园应用APP,就给我们一个好评吧！我们会为你的鼓励而继续努力。
                    </Text>
                    <TouchableOpacity style={styles.btn} onPress={() => setStarmt(true)}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>去五星好评</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => setRidicule(true)}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>我要吐槽</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '100%' }} onPress={() => { setComshow(false); navigation.goBack() }}>
                        <Text style={{ textAlign: 'center', textDecorationLine: 'underline', marginTop: 20 }}>下次再说</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        flexDirection: 'column'
    },
    list1litbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 14
    },
    list1box: {
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        width: '65%',
        height: 200,
        borderRadius: 20,
        marginTop: 30,
        paddingVertical: 20,
        marginLeft: 8
    },
    littit: {
        flexDirection: 'row',
        paddingHorizontal: 14
    },
    padd: {
        paddingHorizontal: 14
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
        marginHorizontal: 3
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
        width: 230,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        fontSize: 11,
        paddingHorizontal: 18
    },
    mainbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4,
        marginTop: 8,
        height: 66
    },
    bottomstyle: {
        flex: 1,
        justifyContent: 'flex-end',
        height: 99
    },
    shangxia: {
        height: '93%'
    },
    topStyle: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    sendSty: {
        backgroundColor: '#399024',
        borderRadius: 8,
        paddingHorizontal: 13,
        paddingVertical: 8
    },
    sendtext: {
        color: '#fff',
        fontWeight: 'bold'
    },
    hidd: {
        display: 'none'
    },
    xian: {
        display: 'flex'
    },
    mtk: {
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99
    },
    litmtk: {
        backgroundColor: '#fff',
        width: '80%',
        // height: '60%',
        padding: 12,
        borderWidth: 0,
        borderRadius: 20,
        alignItems: 'center'
    },
    mtkm: {
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#000',
        opacity: 0.1
    },
    btn: {
        backgroundColor: '#F5A30B',
        width: '80%',
        padding: 12,
        margin: 12,
        borderRadius: 8
    },
    star: {
        marginRight: 5,
        marginLeft: 5,
        width: 39,
        height: 39
    },
    xiant:{
        height:0.6,
        width:'20%',
        backgroundColor:'#ccc'
    },
    remarksInput:{
        // height:40,
        paddingHorizontal:10,
        backgroundColor:'#fff',
        color:'#000',
        borderRadius:0
    },

})



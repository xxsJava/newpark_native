/*
 * @Author: ZHN
 * @Date: 2024-4-09 11:00:15
 * @LastEditTime: 2024-4-09 11:00:15
 * @FilePath: \newpark_native\src\views\newpark\components\chatHome.tsx
 * @Description: 聊天室列表
 */

import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    Modal,
    TouchableHighlight,
    Alert,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { navigate } from '../../../config/routs/NavigationContainer';
// import { Item } from 'react-native-picker-select';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '佛系小草莓',
        pic: 'https://new-by-video.oss-cn-beijing.aliyuncs.com/userImage/1632483733862409.jpg',
        tip: ['音乐', '游戏', '美食'],
        count: 12
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: '恩赐一大锅',
        pic: 'https://new-by-video.oss-cn-beijing.aliyuncs.com/userImage/1632483733862409.jpg',
        tip: ['音乐'],
        count: 0
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: '满山猴屁股',
        pic: 'https://new-by-video.oss-cn-beijing.aliyuncs.com/userImage/1632483733862409.jpg',
        tip: ['音乐', '游戏'],
        count: 44
    },
];
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Item = ({ item, onPress, backgroundColor, textColor }: any) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Image source={{ uri: item.pic }} style={{ width: 70, height: 70, borderRadius: 12, marginRight: 8 }}></Image>
        <View>
            <Text style={[styles.title, { color: textColor }]}>{item.title}的房间</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 3 }}>
                {item.tip.map((val: any) => {
                    return (
                        <View style={{ backgroundColor: '#f0c2c9', padding: 2, borderRadius: 10, height: 20, paddingHorizontal: 4 }}>
                            <Text style={{ fontSize: 10, color: '#fff' }}>#{val}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={{ flexDirection: 'row', marginTop: 6 }}>
                <Image source={require('../../../assets/images/tup/zaixian.png')} style={{ width: 20, height: 20 }}></Image>
                <Text style={{ marginLeft: 3, fontSize: 13, color: textColor }}>有<Text style={{ color: 'red', fontSize: 15 }}>{item.count}</Text>人在线</Text>
            </View>
        </View>
        <Image source={require('../../../assets/images/chevron-right.png')} style={{ width: 35, height: 35 }}></Image>
    </TouchableOpacity>
);

const App = () => {
    const [selectedId, setSelectedId] = useState();
    const route = useRoute();
    const item1 = route.params;
    console.log(item1, '传来的数据在此/////');
    const [mtkShow, setMtkShow] = React.useState(false);
    const click = (item) => {
        setSelectedId(item.id);
        setMtkShow(!mtkShow)
    }
    const startChat = () =>{
        // Alert.alert('进群申请已发送，群主或管理员同意后才能进群');
        // setMtkShow(!mtkShow);

        Alert.alert(
            "通知",
            "进群申请已发送，群主或管理员同意后才能进群",
            [
              {
                text: "确定",
                onPress: () => setMtkShow(!mtkShow),
                style: "cancel"
              }
            ]
          );
    }
    const renderItem = ({ item }: any) => {
        const backgroundColor = item.id === selectedId ? '#d9b7ab' : '#d9c9c1';
        const color = item.id === selectedId ? '#e87a2c' : 'black';

        return (
            <>
                <Item
                    item={item}
                    onPress={() => click(item)}
                    backgroundColor={backgroundColor}
                    textColor={color}
                />
                <TouchableWithoutFeedback style={{flex:1,width:windowWidth,height:windowHeight,top:0,left:0,backgroundColor:'red',position:'absolute'}} onPress={() => {setMtkShow(false)}}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={mtkShow}
                    onRequestClose={() => {
                        Alert.alert("通知已关闭。");
                        setMtkShow(!mtkShow);
                    }}
                    statusBarTranslucent={false}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image source={require('../../../assets/images/nvshengTx2.jpg')} style={{width:60,height:60,borderRadius:100}}></Image>
                            <Text style={styles.modalText}>佛系小草莓(60)</Text>
                            <View style={styles.xian}></View>
                            <View style={[styles.heng,{justifyContent:'space-between',width:'100%',marginVertical:10}]}>
                                <Image source={require('../../../assets/images/tup/erji2.png')} style={{width:30,height:30}}></Image>
                                <Text style={{color:'#000',fontSize:15}}>菠萝吹雪</Text>
                                <View style={styles.heng}>
                                    <Text style={{fontSize:12}}>查看群主主页</Text>
                                    <Image source={require('../../../assets/images/chevron-right.png')} style={{width:16,height:16,marginLeft:3}}></Image>
                                </View>
                            </View>
                            <View style={styles.xian}></View>
                            <View>
                                <Text style={{color:'#000',fontWeight:'bold',lineHeight:35}}>群介绍</Text>
                                <Text style={{lineHeight:25}}>这个群是关于女生情感交流互助，主要用来聊天，交朋友，做最靓的女生，谈最开心的恋爱！</Text>
                            </View>
                            <View style={styles.xian}></View>
                            <View style={{marginTop:12}}>
                                <Text style={{fontSize:12,color:'#000',lineHeight:20}}> · 为维护新园良好的社区氛围，请遵守<Text style={{color:'blue'}}>《新园社区规范》</Text></Text>
                                <Text style={{fontSize:12,color:'#000'}}> · 如群聊疑似违规，可点击<Text style={{color:'blue'}}> 举报群聊 </Text></Text>
                            </View>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "red" }}
                                onPress={() => {
                                    startChat()
                                }}
                            >
                                <Text style={styles.textStyle}>立即加入</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "red",opacity:0.4}}
                              
                            >
                                <Text style={styles.textStyle}>已申请</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "red" }}
                                onPress={() => {
                                   navigate('GroupChat')
                                }}
                            >
                                <Text style={styles.textStyle}>立即聊天</Text>
                            </TouchableHighlight>
                        </View>
                        <TouchableOpacity onPress={() =>{setMtkShow(false)}} style={styles.toprig} >
                            <Image source={require('../../../assets/images/tup/guanbi.png')} style={{width:25,height:25}}></Image>
                        </TouchableOpacity>
                    </View>
                </Modal>
                </TouchableWithoutFeedback>
            </>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        position:'relative'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
    },
    centeredView: {
        width:windowWidth,
        position:'absolute',
        bottom:0,
        left:0
    },
    modalView: {
        // margin: 20,
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop:8,
        paddingHorizontal:39
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize:14,
        color:'#000'
    },
    toprig:{
        position:'absolute',
        top:18,
        right:12,
        backgroundColor:'#fff',
        borderRadius:50
    },
    heng:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    xian:{
        borderWidth:0.2,
        width:'100%',
        borderColor:'#ccc'
    }
});

export default App;
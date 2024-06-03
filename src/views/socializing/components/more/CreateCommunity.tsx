import React, { useState, useEffect } from "react";
import { View, Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground, TouchableHighlight, Switch } from "react-native";
import { navigate } from '../../../../config/routs/NavigationContainer';
import { launchImageLibrary } from 'react-native-image-picker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Photo = () => {
    const [imgList, setimgList]: any = useState([]);
    const handleClick = async () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                selectionLimit: 1,
                includeBase64: false,
                maxWidth: 1000,
                maxHeight: 1000,
            },
            async res => {

                let curFiles: any = res.assets;
                let result
                for (var i = 0; i < curFiles.length; i++) {
                    console.log(curFiles[i]);
                    result = curFiles[i]
                    setimgList(curFiles[i])
                }
            }
        )
    }

    return (
        <View style={styles.imageListView}>
            <Image key={imgList.url} style={styles.photoListStyle} source={{ uri: imgList.uri }} accessibilityLabel='图片' alt="头像" />
            <TouchableHighlight style={imgList.length == 0 ? styles.photoViewnull : styles.photoView} underlayColor="#ddd" onPress={() => handleClick()}>
                <Image style={styles.photoImage} source={require('../../../../assets/images/chat_page_photo.png')} accessibilityLabel='图片' alt="头像"></Image>
            </TouchableHighlight>
        </View>
    );
}
const CreateCommunity = () => {
    const [groupName, setGroupName] = useState('');
    const [showAny, setShowAny] = useState(true);
    const [commIntroduction, setCommIntroduction] = useState('');
    const [gType,setGType] = useState('')
    const typeList = [
        '同城生活','学习交流','自律打卡','求职互助','购物拼单','游戏开黑','兴趣交流','闲聊唠嗑','其他'
    ]
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', backgroundColor: '#fff', paddingHorizontal: '5%', width: windowWidth, justifyContent: 'space-between', height: 50 }}>
                <View>
                    <Text style={{ lineHeight: 25, color: '#000', fontSize: 16 }}>公开展示</Text>
                    <Text style={{ fontSize: 11, lineHeight: 25 }}>关闭后,将不在社区广场和个人主页面展示群聊</Text>
                </View>
                <Switch
                    trackColor={{ false: "#767577", true: "orange" }}
                    thumbColor={showAny ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setShowAny}
                    value={showAny}
                />
            </View>
            
            <ImageBackground style={{ width: windowWidth, height: 200, backgroundColor: '#fff', zIndex: -3 }} source={require('../../../../assets/images/tup/community.jpg')} resizeMode='contain'>
                <View style={styles.main}>
                    <Photo></Photo>
                    <View style={styles.list}>
                        <View style={styles.ying}>
                        </View>
                        <ScrollView style={{ width: windowWidth, zIndex: 12, flex: 1}}>
                            <View style={{ marginTop: 40, paddingHorizontal: 20,marginBottom:20 }}>
                                <Text style={styles.titext}>群名称 <Text style={{ color: 'red' }}>*</Text></Text>
                                <View style={{ backgroundColor: '#fff', borderRadius: 12, }}>
                                    <View style={{ borderColor: 'gray', borderBottomWidth: 0.3, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 3, height: 46, marginBottom: 3, width: 320 }}>
                                        <TextInput
                                            style={{ height: 45, backgroundColor: '#fff', borderRadius: 12, color: '#000', width: 230, fontSize: 16 }}
                                            onChangeText={text => setGroupName(text)}
                                            value={groupName}
                                            placeholder="输入群名称"
                                            maxLength={24}
                                            placeholderTextColor="#999"
                                        />

                                        <Text> {groupName.length} / 24</Text>
                                    </View>
                                    <View style={showAny ? { width: 320, backgroundColor: '#fff', paddingHorizontal: 12, height: 180, position: 'relative', borderBottomLeftRadius: 12, borderBottomRightRadius: 12 } : {display:'none'}}>
                                        <TextInput
                                            style={{ lineHeight: 28, marginBottom: 20 }}
                                            multiline
                                            maxLength={100}
                                            placeholder="用一段话介绍你的社区,例: 欢迎想提高游戏段位的朋友们进群! 群里可以找游戏搭子相互帮助提升段位～注意只能不能聊不相关的话题哦"
                                            placeholderTextColor="#999"
                                            textAlign="left"
                                            textAlignVertical='top'
                                            value={commIntroduction}
                                            onChangeText={text => setCommIntroduction(text)}
                                        />
                                        <View style={{ height: 20, position: 'absolute', bottom: 5, right: 20 }}>
                                            <Text>{commIntroduction.length} / 100</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={showAny ? { marginTop: 20, paddingHorizontal: 20 } : {display:'none'}}>
                                    <Text style={styles.titext}>群聊类型</Text>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 12,width:'100%',height:128,flexDirection:'row',flexWrap:'wrap',padding:6}}>
                                        {
                                            typeList.map((item) => {
                                                return(
                                                    <TouchableOpacity style={[{width:'30%',height:30,backgroundColor:'#F4F3F5',margin:'1.5%',borderRadius:6},gType == item ? {backgroundColor:'#FFEDEF'} : {}]} onPress={() => {setGType(item)}}>
                                                        <Text style={[{lineHeight:30,textAlign:'center',fontSize:12,color:'#000'},gType == item ? {color:'#FC2F4B'} : {}]}>{item}</Text>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </View>
                                </View>
                             
                            </View>
                        </ScrollView>

                        {/* #F5F5F5 */}
                        <View style={{ height: 120, width: windowWidth, zIndex: 12, alignItems: 'center' }}>
                            <TouchableOpacity style={{ backgroundColor: '#FF2542', width: '80%', height: 40, borderRadius: 20, marginBottom: 12 }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center', lineHeight: 40 }}>立即创建</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 12 }}>为维护社区内信息生态健康,请遵守<Text style={{ color: '#5796F2', fontSize: 12 }}>《群聊公约》</Text></Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
export default CreateCommunity;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#F5F5F5'
    },
    imageListView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 95,
        height: 95,
        zIndex: 99
    },
    photoListStyle: {
        width: 95,
        height: 95,
        borderRadius: 8,
        position: 'absolute'
    },
    photoView: {
        width: 35,
        height: 35,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        position: 'absolute',
        right: -20,
        bottom: -20
    },
    photoViewnull: {
        width: 95,
        height: 95,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    photoImage: {
        width: 20,
        height: 20
    },
    main: {
        marginTop: 55,
        alignItems: 'center'
    },
    list: {
        // backgroundColor:'#F5F5F5',
        // backgroundColor:'green',
        width: windowWidth,
        height: windowHeight - 173,
        marginTop: -30,
        // zIndex: -2,
    },
    ying: {
        // backgroundColor: '#000',
        backgroundColor: '#F5F5F5',
        opacity: 0.8,
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 9,
    },
    div: {
        backgroundColor: '#fff',
        width: windowWidth,
        height: windowHeight
    },
    test: {
        width: windowWidth,
        height: 800,
        backgroundColor: 'green',
        position: 'relative'
    },
    titext: {
        fontSize: 15,
        marginBottom: 12
    }
})
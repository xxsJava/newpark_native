import React, {Component, useState} from 'react';
import { View,StyleSheet,Dimensions,Platform,Image,Button,TouchableHighlight,TouchableOpacity } from 'react-native';
import { Text } from 'react-native-animatable';
import { Checkbox,Input,TextArea,Divider } from "native-base";
import {launchImageLibrary} from 'react-native-image-picker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Photo = () => {
    const [imgs, setImgs] = useState([])

    const addPhoto = () => {
        launchImageLibrary({
            mediaType: "photo", // 'photo' or 'video' or 'mixed'
            selectionLimit: 0,// 1为一张，0不限制数量
            includeBase64: true
        }, res => {
            return setImgs(res.assets);
        })
    }
    return (
        <View>
            {/* <Button title="启动图库选择图像" onPress={() => addPhoto()}></Button> */}
            <TouchableHighlight style={styles.photoView} underlayColor="#ddd" onPress={() => addPhoto()}>
                <Image style={styles.photoImage} source={require('../../../../assets/images/chat_page_photo.png')}></Image>
            </TouchableHighlight>
            {
                imgs.map((item, index) => {
                    return (
                        <View key={index}>
                            <Image style={{ width: 50, height: 50 }} source={{ uri: item.uri }}></Image>
                        </View>
                    )
                })
            }
        </View>
    );
}

export default class FeedbackView extends Component {
    render () {

        // const [imgs, setImgs] = useState<any[]>([]);
        // const addPhoto = () => {
        // launchImageLibrary({
        //     mediaType: "photo", // 'photo' or 'video' or 'mixed'
        //     selectionLimit: 0,// 1为一张，0不限制数量
        //     includeBase64: true
        // }, res => {
        //     console.log(res)
        // })
        // }

        return (
            <View style={styles.parentLevel}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>请选择发生的问题类型</Text>
                </View>
                <View style={styles.multipleChoiceView}>
                    <Checkbox value="danger" colorScheme="yellow" defaultIsChecked>服务</Checkbox>
                    <Checkbox value="danger" colorScheme="yellow">账号</Checkbox>
                    <Checkbox value="danger" colorScheme="yellow">系统</Checkbox>
                    <Checkbox value="danger" colorScheme="yellow">其他</Checkbox>
                </View>
                <View style={styles.contentView}>
                    <View>
                        <Input mx="3" placeholder="请输入标题" w={windowWidth-45}
                             _light={{
                                placeholderTextColor: "#9599a6",
                                bg: "white",
                                borderColor:"white",
                                fontSize:18,
                                fontWeight:"600",
                                _hover: {
                                  bg: "white",
                                },
                                _focus: {
                                  bg: "white:white",
                                  borderColor:"white"
                                }
                              }} _dark={{
                                bg: "white",
                                _hover: {
                                  bg: "white"
                                },
                                _focus: {
                                  bg: "white:white"
                                }
                              }}
                        ></Input>
                    </View>
                    <View style={{paddingHorizontal:12}}>
                        <Divider my="2" _light={{
                            bg: "#f2f2f2"
                        }} _dark={{
                            bg: "#f2f2f2"
                        }} />
                    </View>
                    <View style={styles.textAreaView}>
                        <TextArea h={40} placeholder="请描述一下你遇到的场景及问题" w="100%" maxW={windowWidth-45} autoCompleteType={undefined}
                            _light={{
                                placeholderTextColor: "#9599a6",
                                bg: "white",
                                borderColor:"white",
                                fontSize:14,
                                _hover: {
                                  bg: "white",
                                },
                                _focus: {
                                  bg: "white:white",
                                  borderColor:"white"
                                }
                              }} _dark={{
                                bg: "white",
                                _hover: {
                                  bg: "white"
                                },
                                _focus: {
                                  bg: "white:white"
                                }
                              }}
                        />
                    </View>
                </View>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>图片(提供问题截图方便我们快速定位)</Text>
                </View>
                <View style={styles.pictureView}>
                    <Photo></Photo>
                    {/* <Button title="启动图库选择图像" onPress={() => addPhoto()}></Button> */}
                    {/* {
                        imgs.map((item, index) => {
                        return (
                        <View key={index}>
                            <Image style={{ width: 50, height: 50 }} source={{ uri: item.uri }}></Image>
                        </View>
                        )
                        })
                    } */}
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.buttonIos}>
                        <Text style={styles.buttonText}>提交</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
  
}

const styles = StyleSheet.create({
    parentLevel:{
        width:windowWidth,
        height:windowHeight,
    },
    titleView:{
        width:windowWidth-20,
        height:50,
        marginHorizontal:10,
    },
    titleText:{
        fontSize:16,
        color:'#000',
        lineHeight:50
    },
    multipleChoiceView:{
        width:windowWidth-20,
        height:50,
        borderRadius:6,
        backgroundColor:'#FFF',
        marginHorizontal:10,
        paddingTop:13,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    contentView:{
        width:windowWidth-20,
        height:250,
        borderRadius:2,
        backgroundColor:'#FFF',
        marginTop:5,
        marginHorizontal:10,
        paddingTop:10,
        // paddingHorizontal:10

    },
    textAreaView:{
        paddingHorizontal:12,
        paddingTop:10,
    },
    pictureView:{
        width:windowWidth-20,
        height:120,
        marginHorizontal:10,
        backgroundColor:"#FFF",
        borderRadius:2,
        padding:10,
    },
    buttonView:{

    },
    photoView:{
        width:95,
        height:95,
        borderWidth:1,
        borderColor:'#e1e1e1',
        borderRadius:8,
        alignItems:'center'
    },
    photoImage:{
        width:20,
        height:20,
        marginTop:40
    },
    buttonIos:{
        width:windowWidth-20,
        height:50,
        marginHorizontal:10,
        marginTop:10,
        backgroundColor:'#fbc45a',
        borderRadius:8,
        alignItems:'center',
    },
    buttonText:{
        fontSize:18,
        color:'#FFF',
        lineHeight:50,
        letterSpacing:4
    }
})
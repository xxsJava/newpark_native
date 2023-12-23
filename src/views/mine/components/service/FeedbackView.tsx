import React, {Component, useState} from 'react';
import { View,StyleSheet,Dimensions,Platform,TextInput,Image,TouchableHighlight,TouchableOpacity } from 'react-native';
import { Text } from 'react-native-animatable';
import { Appbar} from 'react-native-paper';
// import { Input,TextArea,Divider } from "native-base";
import { Center,Box, CheckboxGroup, Checkbox, CheckboxIndicator, CheckboxIcon, CheckboxLabel, CheckIcon } from '@gluestack-ui/themed';
import {launchImageLibrary} from 'react-native-image-picker';
import {useTranslation, Trans} from 'react-i18next';
import {navigate} from '../../../../config/routs/NavigationContainer'
import { any } from 'prop-types';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const groupList = [{
    index:1,
    text:'账号',
    value:'zh'
},{
    index:2,
    text:'系统',
    value:'xt'
},{
    index:3,
    text:'服务',
    value:'fw'
},{
    index:4,
    text:'其他',
    value:'qt'
}]


const Photo = () => {
    // const [imgs, setImgs] = useState([])
    const [imgList, setimgList] = useState([])

    // const addPhoto = () => {
    //     launchImageLibrary({
    //         mediaType: "photo", // 'photo' or 'video' or 'mixed'
    //         includeBase64: false,
    //         selectionLimit: 0,// 1为一张，0不限制数量
    //     }, (res) => {
    //         setimgList(res);
    //         console.log('上传图片',res)
    //     })
    // }
    const handleClick= async()=>{
        launchImageLibrary(
          {
            mediaType: 'photo',
            selectionLimit: 3,
            includeBase64: false,
            maxWidth: 1000,
            maxHeight: 1000,
          },
          async res => {
            // setimgList(res)
            // console.log('返回数据',res)
            // console.log('返回数据',res.assets)
            // console.log('赋值',imgList)
            // setimgList(res.assets)
            const curFiles = res.assets;
            let result
            for(var i = 0; i < curFiles.length; i++){
              console.log(curFiles[i]);
              result=curFiles[i]
              await setimgList([...imgList,curFiles[i]])
            }   
            }
        )
    }
    return (
        <View style={styles.imageListView}>
            {imgList.map(item =>{
                return(
                    <Image key={item.url} style={styles.photoListStyle} source={{uri:item.uri}}/>
                )
                })
            }
            <TouchableHighlight style={styles.photoView} underlayColor="#ddd" onPress={() => handleClick()}>
                <Image style={styles.photoImage} source={require('../../../../assets/images/chat_page_photo.png')}></Image>
            </TouchableHighlight>
            {/* <Image style={{width:100,height:100}} source={{uri:'file:///Users/newpark/Library/Developer/CoreSimulator/Devices/12A11679-B024-4E1D-91F8-CE033A5E6E61/data/Containers/Data/Application/1FC816F5-0E54-4D78-81D3-708B2F510A5F/tmp/FEA68057-E426-4FC7-94A1-B4333A508A5A.jpg'}}></Image> */}
        </View>
    );
}

const CheckView = () => {
    const [values, setValues] = useState([])
    return (
        <CheckboxGroup style={styles.groupStyle} value={values} onChange={(keys) => {setValues(keys)}}>
            {groupList.map(item => {
                return(
                    <Checkbox key={item.index} borderColor='#FFB300' value={item.value}>
                        <CheckboxIndicator borderColor='#FFB300' mr="$2">
                            <CheckboxIcon bgColor='#FFB300' as={CheckIcon} />
                        </CheckboxIndicator>
                        <CheckboxLabel>{item.text}</CheckboxLabel>
                    </Checkbox>
                )
            })}
        </CheckboxGroup>
    )
}

export default class FeedbackView extends Component {
    render () {
        return (
            <View style={styles.parentLevel}>
                <Appbar.Header style={styles.headerStyle}>
                    <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('MineStacker')}/>
                    <Text allowFontScaling={false} style={styles.headerText}>
                        <Trans>navigationBar.title12</Trans>
                    </Text>
                </Appbar.Header>
                <View style={styles.titleView}>
                    <Text allowFontScaling={false} style={styles.titleText}>请选择发生的问题类型</Text>
                </View>
                <View style={styles.multipleChoiceView}>
                    <CheckView></CheckView>
                    {/* <Checkbox value="danger" colorScheme="yellow" defaultIsChecked>服务</Checkbox>
                    <Checkbox value="danger" colorScheme="yellow">账号</Checkbox>
                    <Checkbox value="danger" colorScheme="yellow">系统</Checkbox>
                    <Checkbox value="danger" colorScheme="yellow">其他</Checkbox> */}
                </View>
                <View style={styles.contentView}>
                    <View>
                        <TextInput selectionColor='#FFB300' placeholder='请输入标题' maxLength={26} style={styles.titleInput}></TextInput>
                    </View>
                    <View style={styles.lineStyle}>
                    </View>
                    <View style={styles.textAreaView}>
                        <TextInput autoCorrect={false} selectionColor='#FFB300' placeholder='请描述一下你遇到的场景及问题' maxLength={260} multiline={true} numberOfLines={8} style={styles.textAreaStyle}></TextInput>
                    </View>
                </View>
                <View style={styles.titleView}>
                    <Text allowFontScaling={false} style={styles.titleText}>图片(提供问题截图方便我们快速定位)</Text>
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
                        <Text allowFontScaling={false} style={styles.buttonText}>提交</Text>
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
    headerStyle:{
        width: windowWidth,
        height: 45,
        backgroundColor: '#ffb700',
    },
    headerText:{
        width: '80%',
        fontSize: 17,
        color: '#FFF',
        lineHeight: 45,
        textAlign: 'center',
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
    },
    groupStyle:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    checkColor:{
        borderColor:'#FFB300',
        // backgroundColor:'#FFB300'
    },
    checkStyle:{
        width:50,
        height:30,
        backgroundColor:'pink'
    },
    checkIcon:{
        width:20,
        height:20
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
    lineStyle:{
        height:2,
        marginHorizontal:15,
        borderBottomWidth:1,
        borderColor:'#bbb'
    },
    titleInput:{
        fontSize:16,
        paddingHorizontal:20,
        // backgroundColor:'gold'
    },
    textAreaView:{
        paddingHorizontal:15,
        paddingTop:10,
    },
    textAreaStyle:{
        textAlignVertical: 'top',
        // backgroundColor:'plum',
        ...Platform.select({
            ios:{
                height:180,
            },
            android:{

            }
        })
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
    imageListView:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    photoListStyle:{
        width:95,
        height:95,
        borderRadius:8,
        marginRight:5
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
/**
 * 代码描述: 发布商品页面  发布
 * 作者:cxr
 * 修改时间:2023/12/05 9:17:11
 */

import { node } from "prop-types";
import React,{ Component, useRef } from "react";
import { View,Text,StyleSheet,Dimensions,TextInput,Platform,Image,TouchableOpacity,TouchableHighlight } from "react-native";
import { Appbar,Avatar,IconButton,Button } from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import {useTranslation, Trans} from 'react-i18next';
import {navigate} from '../../../../config/routs/NavigationContainer'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const modeList = [{
    index:1,
    text:'送货上门'
},{
    index:2,
    text:'上门自提'
},{
    index:3,
    text:'悬赏代发'
}]

const Photo = () => {
    // const [imgs, setImgs] = useState([])
    const [imgList, setimgList] = React.useState([])

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
            console.log('imgList',imgList)
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
            <TouchableHighlight style={[styles.photoView,imgList.length > 3?{display:'none'}:null]} underlayColor="#ddd" onPress={() => handleClick()}>
                <Image style={styles.photoImage} source={require('../../../../assets/images/takepicforheader.png')}></Image>
            </TouchableHighlight>
            {/* <Image style={{width:100,height:100}} source={{uri:'file:///Users/newpark/Library/Developer/CoreSimulator/Devices/12A11679-B024-4E1D-91F8-CE033A5E6E61/data/Containers/Data/Application/1FC816F5-0E54-4D78-81D3-708B2F510A5F/tmp/FEA68057-E426-4FC7-94A1-B4333A508A5A.jpg'}}></Image> */}
        </View>
    );
}
const PublishProducts = () => {

    const [modeVal,modeSelect] = React.useState(1)
    const [moneyVal,moneyNumChange] = React.useState('')
    const chkPrice = (text: string) => { //方法1
        // 只允许输入数字和小数点
        let newText = text.replace(/[^\d\.]/g, '');
        // 只允许输入一个小数点
        if (newText.split('.').length > 2) {
            newText = newText.substring(0, newText.lastIndexOf('.'));
        }
        moneyNumChange(newText)
    }
    return (
        <View style={styles.parentView}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('HomeStacker')}></Appbar.Action>
                <Text allowFontScaling={false} style={styles.headerText}>
                <Trans>navigationBar.title15</Trans>
                </Text>
            </Appbar.Header>
            <View style={styles.contentView}>
                <View style={styles.inputView}>
                    <TextInput maxLength={15} selectionColor='#FABA3C' placeholder='请输入商品名称' style={styles.nameInput}></TextInput>
                </View>
                <View style={styles.inputView}>
                    <TextInput maxLength={600} selectionColor='#FABA3C' placeholder='请输入商品描述' multiline={true} numberOfLines={8} style={styles.describeInput}></TextInput>
                    <Photo></Photo>
                </View>
                <View style={styles.priceView}>
                    <Text allowFontScaling={false} style={styles.priceText}>定价</Text>
                    <TextInput value={moneyVal} selectionColor='#FABA3C' keyboardType='numeric' style={styles.priceInput} onChangeText={chkPrice}></TextInput>
                    <Image style={styles.priceIcon} source={require('../../../../assets/images/money_icon1.png')}></Image>
                </View>
                <View style={styles.optionView}>
                    <Text allowFontScaling={false} style={styles.optionTitle}>送货方式</Text>
                    {modeList.map(item => {
                        return(
                            <TouchableOpacity style={styles.itemStyle} key={item.index} onPress={() => modeSelect(item.index)}>
                                <Text style={styles.itemText}>{item.text}</Text>
                                <Image style={[styles.itemIcon,modeVal === item.index?null:{display:'none'}]} source={require('../../../../assets/images/alimom/correct_icon.png')}></Image>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <Button style={styles.buttonStyle} labelStyle={styles.buttonText} onPress={() => console.log('点击发布')}>发布</Button>
            </View>

        </View>
    )
}

export default PublishProducts;

const styles = StyleSheet.create({
    parentView:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#fff'
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
    contentView:{
        width:windowWidth,
        height:windowHeight - 45
    },
    inputView:{
        borderColor:'#ccc',
        borderBottomWidth:1,
    },
    nameInput:{
        height:45,
        paddingHorizontal:10,
    },
    describeInput:{
        paddingHorizontal:10,
        ...Platform.select({
            ios:{
                height:300
            },
            android:{
                textAlignVertical:'top',
            }
        })
    },
    priceView:{
        height:60,
        borderColor:'#ccc',
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    priceText:{
        width:'20%',
        fontSize:16,
        color:'#000',
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:60,
    },
    priceInput:{
        width:'68%',
        height:60,
        fontSize:18,
        color:'#EC3656',
        fontWeight:'bold',
        textAlign:'center',
        paddingHorizontal:10,
    },
    priceIcon:{
        width:23,
        height:23,
        marginTop:19,

    },
    optionView:{
        paddingHorizontal:15,
        borderColor:'#ccc',
        borderBottomWidth:1,
    },
    optionTitle:{
        height:45,
        fontSize:16,
        color:'#000',
        fontWeight:'bold',
        lineHeight:45
    },
    itemStyle:{
        height:40,
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:'red'
    },
    itemText:{
        height:40,
        fontSize:15,
        color:'#bbb',
        lineHeight:40,
    },
    itemIcon:{
        width:25,
        height:25,
        marginTop:8.5
    },
    buttonStyle:{
        width:'84%',
        height:50,
        marginTop:20,
        marginHorizontal:'8%',
        borderRadius:10,
        backgroundColor:'#FABA3C'
    },
    buttonText:{
        fontSize:17,
        color:'#fff',
        lineHeight:30
    },
    imageListView:{
        marginVertical:8,
        marginHorizontal:15,
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
        width:25,
        height:25,
        marginTop:35
    },
})
/**
 * 代码描述: 发布商品页面  发布
 * 作者:cxr
 * 修改时间:2023/12/05 9:17:11
 */
import React from "react";
import { Trans } from 'react-i18next';
import { Alert, Dimensions, Image, Platform, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View,ScrollView } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import { Appbar, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../../../../config/routs/NavigationContainer';
import {productApip} from '../../../../api/sys/Recommended/index';
import {productpType} from '../../../../api/sys/Recommended/types';
import {fileUp} from '../../../../api/sys/upload/index';
// import { ScrollView } from "react-native-gesture-handler";

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
    const [imgList, setimgList]:any = React.useState([]);
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
            let curFiles:any = res.assets;
            let result;
            for(var i = 0; i < curFiles.length; i++){
              console.log(curFiles[i]);
              result=curFiles[i]
              await setimgList([...imgList,curFiles[i]])
            }   
           
            }
        )
        console.log('imgList11',imgList);
            const up = async () => {
                const params = {
                    file:imgList[0].uri
                }
                const imgData = await fileUp (params);
                console.log(imgData,'这个是上传的文件---',params);
            }
            up();
        sendImg()
    }
    console.log('imgList22',imgList);
    const sendImg = async() => {
        await AsyncStorage.setItem('img',imgList);
        console.log(imgList,'这个是我传过去的图片');
        
    }
    return (
        <View style={styles.imageListView} >
            <ScrollView horizontal={true}>
            {imgList.map((item:any) =>{
                return(
                    <Image key={item.uri} style={styles.photoListStyle} source={{uri:item.uri}} accessibilityLabel='图片' alt="头像"/>
                )
                })
            }
            </ScrollView>
           
            <TouchableHighlight style={[styles.photoView,imgList.length > 3?{display:'none'}:null]} underlayColor="#ddd" onPress={() => handleClick()}>
                <Image style={styles.photoImage} source={require('../../../../assets/images/takepicforheader.png')} accessibilityLabel='图片' alt="头像"></Image>
            </TouchableHighlight>
            {/* <Image style={{width:100,height:100}} source={{uri:'file:///Users/newpark/Library/Developer/CoreSimulator/Devices/12A11679-B024-4E1D-91F8-CE033A5E6E61/data/Containers/Data/Application/1FC816F5-0E54-4D78-81D3-708B2F510A5F/tmp/FEA68057-E426-4FC7-94A1-B4333A508A5A.jpg'}}></Image> */}
        </View>
    );
}
const PublishProducts = () => {
    // 传递用户默认头像
    const [avas,setAva] = React.useState('https://new-by-video.oss-cn-beijing.aliyuncs.com/2024/01/29/416adedc-ea1f-4ce4-b87d-7f8875208b4f.jpg')
    const [name,setName]  = React.useState('');
    const [desc,setDesc] = React.useState('');
    const [imgs,setImgs] = React.useState([]);
    const [other,setOther] = React.useState('送货上门');
    const [modeVal,modeSelect] = React.useState(1);
    const [moneyVal,moneyNumChange] = React.useState(0);
    
    const chkPrice = (text: string) => { 
        //方法1
        // 只允许输入数字和小数点
        let newText = text.replace(/[^\d\.]/g, '');
        // 只允许输入一个小数点
        if (newText.split('.').length > 2) {
            newText = newText.substring(0, newText.lastIndexOf('.')); 
        };
        const tip = Number(newText)
        moneyNumChange(tip)
    }
    const submit = async() => {
        if(name== "") {
            Alert.alert('请输入商品名称')
        }else{}
        const img = AsyncStorage.getItem('img');
        console.log(img,'自己相册里传过来的图片');
         var ava = await AsyncStorage.getItem('ava');
        if(ava) {
            setAva(ava)
        }
        const times = new Date().getTime();
        
        const data:productpType = {
            pname:name,
            pdesc: desc,
            pprice:moneyVal,
            pimgs:"file:///data/user/0/com.newpark_native/cache/rn_image_picker_lib_temp_847def00-895b-4316-8475-9a7fc5a09c12.jpg",
            pstatus:'FORSALE',
            ppubTime: times,
            upath:avas,
            pother:other
        }
        // 调取接口
        const info =await productApip(data);
        console.log(data);
        console.log(info,'我是调取接口点击发布的');
    }
    const handleDataFromChild = (data:any) =>{
        setImgs(data)
        console.log('最终的效果图片',imgs);
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
                    <Text style={styles.h4}>商品名称 : </Text>
                    <TextInput allowFontScaling={false} maxLength={15} selectionColor='#FABA3C' placeholder='请输入商品名称' style={styles.nameInput} value={name} onChangeText={text => {setName(text)
                    }}></TextInput>
                </View>
                <View style={styles.inputView}>
                <Text style={styles.h4}>商品描述 : </Text>
                    <TextInput allowFontScaling={false} maxLength={600} selectionColor='#FABA3C' placeholder='请输入商品描述' multiline={true} numberOfLines={8} style={styles.describeInput} value={desc} onChangeText={text => {setDesc(text)
                    }}></TextInput>
                </View>
                <View>
                {/* <ScrollView horizontal={true}> */}
                    <Photo onSendData={handleDataFromChild}></Photo>
                </View>
                <View style={styles.priceView}>
                    <Text allowFontScaling={false} style={styles.priceText}>定价</Text>
                    <TextInput allowFontScaling={false} value={moneyVal} selectionColor='#FABA3C' keyboardType='numeric' style={styles.priceInput} onChangeText={chkPrice}></TextInput>
                    <Image style={styles.priceIcon} source={require('../../../../assets/images/money_icon1.png')} accessibilityLabel='图片' alt="头像"></Image>
                </View>
                <View style={styles.optionView}>
                    <Text allowFontScaling={false} style={styles.optionTitle}>送货方式</Text>
                    {modeList.map(item => {
                        return(
                            <TouchableOpacity style={styles.itemStyle} key={item.index} onPress={() => {modeSelect(item.index); setOther(item.text);
                            }}>
                                <Text style={[styles.itemText,modeVal === item.index? {color:'green'} : {color:'black'}]}>{item.text}</Text>
                                <Image style={[styles.itemIcon,modeVal === item.index?null:{display:'none'}]} source={require('../../../../assets/images/alimom/correct_icon.png')} accessibilityLabel='图片' alt="头像"></Image>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <Button style={styles.buttonStyle} labelStyle={styles.buttonText} onPress={()=>submit()}>发布</Button>
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
        flexDirection:'row',
        // alignItems:'center'

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
    h4:{
        fontSize:14,
        fontWeight:'bold',
        color:'black'
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
        fontSize:18,
        color:'#fff',
        lineHeight:30,
        fontWeight:'bold'
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
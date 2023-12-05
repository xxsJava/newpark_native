/**
 * 代码描述: 发布商品页面  发布
 * 作者:cxr
 * 修改时间:2023/12/05 9:17:11
 */

import { node } from "prop-types";
import React,{ Component, useRef } from "react";
import { View,Text,StyleSheet,Dimensions,TextInput,Platform,Image,TouchableOpacity } from "react-native";
import { Appbar,Avatar,IconButton,Button } from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
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
                <Text style={styles.headerText}>发布商品</Text>
            </Appbar.Header>
            <View style={styles.contentView}>
                <View style={styles.inputView}>
                    <TextInput maxLength={15} selectionColor='#FABA3C' placeholder='请输入商品名称' style={styles.nameInput}></TextInput>
                </View>
                <View style={styles.inputView}>
                    <TextInput selectionColor='#FABA3C' placeholder='请输入商品描述' multiline={true} numberOfLines={14} style={styles.describeInput}></TextInput>
                </View>
                <View style={styles.priceView}>
                    <Text style={styles.priceText}>定价</Text>
                    <TextInput value={moneyVal} selectionColor='#FABA3C' keyboardType='numeric' style={styles.priceInput} onChangeText={chkPrice}></TextInput>
                    <Image style={styles.priceIcon} source={require('../../../../assets/images/money_icon1.png')}></Image>
                </View>
                <View style={styles.optionView}>
                    <Text style={styles.optionTitle}>送货方式</Text>
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
                height:400
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
    }
})
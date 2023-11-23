/**
 * 代码描述: 立即购买页 快快来买模块详情页
 * 作者:cxr
 * 创建时间:2023/11/22 17:44:11
 */

import React from "react";
import { View,Text,StyleSheet,Dimensions,Image,ScrollView,Platform,TouchableOpacity, } from "react-native";
import { Appbar,Avatar,IconButton,Button,Icon } from 'react-native-paper';
import {navigate} from '../../../config/routs/NavigationContainer';
import { node } from "prop-types";

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const PurchasePage = () => {
    const [selectedVal,onSelectedPress] = React.useState('selected1')
    return(
        <View style={styles.parentView}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../assets/images/chevron-left.png')} onPress={() => navigate('DetailsRoute')}/>
                <Appbar.Content title="" />
                {/* <Appbar.Action icon={require('../../../assets/images/order_kefu.png')} onPress={() => {}} /> */}
            </Appbar.Header>
            <View style={styles.imageStyle}></View>
            <View style={styles.detailsStyle}>
                <Text style={styles.titleStyle}>填写订单</Text>
                <View style={styles.scrollView}>
                    <ScrollView style={styles.scrollStyle}>
                        <View style={styles.personalData}>
                            <Text style={styles.addressLabel}>收货地址</Text>
                            <View style={styles.addressView}>
                                <View style={styles.addressContent}>
                                    <Text style={styles.addressTitle}>省市县街道</Text>
                                    <Text style={styles.addressText}>详细地址。。。</Text>
                                    <View style={styles.addressStyle}>
                                        <Text style={styles.addressName}>张三</Text>
                                        <Text style={styles.addressPhone}>123****6789</Text>
                                        <Text style={[styles.addressTab,styles.tabColor1]}>默认</Text>
                                        <Text style={[styles.addressTab,styles.tabColor2]}>家</Text>
                                    </View>
                                </View>
                                <View style={styles.addressIcon}>
                                    <IconButton style={styles.addressImage} size={23} icon={require('../../../assets/images/edit_icon.png')} onPress={() => console.log('点击编辑')}></IconButton>
                                </View>
                            </View>
                        </View>
                        <View style={styles.commodityInformation}>
                            <Text style={styles.commodityTitle}>商品信息</Text>
                            <View style={styles.commodityContent}>
                                <Image style={styles.commodityImage} source={require('../../../assets/images/alimom/R-C.jpg')}></Image>
                                <View style={styles.commodityTextView}>
                                    <Text style={styles.commodityName}>商品名称</Text>
                                    <Text style={styles.commodityDescribe}>商品描述。。。。</Text>
                                    <Text style={styles.describeStyle}>描述..</Text>
                                </View>
                                <Text style={styles.commodityNum}>数量:1</Text>
                            </View>
                        </View>
                        <View style={styles.paymentView}>
                            <Text style={styles.parenTitle}>支付方式</Text>
                            <View style={styles.paymentContent}>
                                <TouchableOpacity style={[styles.paymentItem,{borderColor:'#999',borderBottomWidth:1}]} onPress={() => onSelectedPress('selected1')} activeOpacity={1}>
                                    <Image style={styles.paymentImage} source={require('../../../assets/images/3.0x/wxzf_icon.png')}></Image>
                                    <Text style={styles.paymentText}>微信支付</Text>
                                    <Image style={[styles.paymentIcon,selectedVal == 'selected1'?null:{display:'none'}]} source={require('../../../assets/images/alimom/correct_icon.png')}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.paymentItem} onPress={() => onSelectedPress('selected2')} activeOpacity={1}>
                                    <Image style={styles.paymentImage} source={require('../../../assets/images/3.0x/zfb_icon.png')}></Image>
                                    <Text style={styles.paymentText}>支付宝支付</Text>
                                    <Image style={[styles.paymentIcon,selectedVal == 'selected2'?null:{display:'none'}]} source={require('../../../assets/images/alimom/correct_icon.png')}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={styles.bottomView}>
                <View style={styles.bottomIcon}>
                    <Icon size={36} color="#FABA3C" source={require('../../../assets/images/coins-icon.png')}></Icon>
                </View>
                <Text style={styles.bottomNum}>880.<Text style={{fontSize:14}}>00</Text></Text>
                <Button style={styles.bottomButton} labelStyle={styles.bottomButtonText} onPress={() => console.log('提交订单')}>提交订单</Button>
            </View>
        </View>
    )
}
export default PurchasePage;

const styles = StyleSheet.create({
    parentView:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#26C78C'
    },
    headerStyle:{
        width: windowWidth,
        height: 45,
        backgroundColor:'#26C78C'
    },
    headerImage:{
        width:25,
        height:25,
        marginRight:20
    },
    imageStyle:{
        width:windowWidth,
        height:180,
    },
    detailsStyle:{
        width:windowWidth,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        paddingHorizontal:12,
        backgroundColor:'#FFF',
        ...Platform.select({
            ios:{
                height:windowHeight-340,
            },
            android:{
                height:windowHeight-280,
            }
        })
    },
    titleStyle:{
        fontSize:17,
        color:'#000',
        fontWeight:'600',
        textAlign:'center',
        lineHeight:40
    },
    scrollView:{
        width:'100%',
        height:windowHeight-320,
        ...Platform.select({
            ios:{
                height:windowHeight-410,
            },
            android:{
                height:windowHeight-320,
            }
        })
    },
    scrollStyle:{
        flex:1,
    },
    personalData:{
        borderBottomWidth:1,
        borderColor:'#aaa'
    },
    addressLabel:{
        fontSize:17,
        color:'#000',
        lineHeight:35
    },
    addressView:{
        height:90,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    addressContent:{
        width:'85%',
    },
    addressIcon:{
        width:'15%',
        paddingLeft:10
    },
    addressImage:{
        marginTop:10,
    },
    addressTitle:{
        fontSize:14,
        color:'#aaa',
        lineHeight:20,
    },
    addressText:{
        fontSize:17,
        color:'#000',
        lineHeight:30
    },
    addressStyle:{
        height:30,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    addressName:{
        width:75,
        fontSize:16,
        color:'#000',
        lineHeight:30,
    },
    addressPhone:{
        width:130,
        fontSize:16,
        color:'#000',
        lineHeight:30
    },
    addressTab:{
        width:50,
        height:20,
        fontSize:15,
        color:'#FFF',
        lineHeight:20,
        marginTop:5,
        marginHorizontal:5,
        textAlign:'center',
    },
    tabColor1:{
        backgroundColor:'red'
    },
    tabColor2:{
        backgroundColor:'#00CB87'
    },
    commodityInformation:{
        width:'100%',
        height:135,
        marginBottom:8
    },
    commodityTitle:{
        fontSize:17,
        color:'#000',
        lineHeight:40
    },
    commodityContent:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    commodityImage:{
        width:105,
        height:105,
        borderRadius:12
    },
    commodityTextView:{
        width:'52%',
        height:105,
        paddingLeft:10,
    },
    commodityName:{
        fontSize:18,
        color:'#000',
        lineHeight:25
    },
    commodityDescribe:{
        fontSize:15,
        color:'#000',
        lineHeight:40
    },
    describeStyle:{
        color:'#000'
    },
    commodityNum:{
        width:'21%',
        height:105,
        fontSize:14,
        color:'#000',
        paddingTop:80,
        textAlign:'right',
    },
    paymentView:{
        height:250,
        // backgroundColor:'orange'
    },
    parenTitle:{
        fontSize:17,
        color:'#000',
        lineHeight:35,
        marginTop:10,
    },
    paymentContent:{
        width:'98%',
        height:150,
        marginHorizontal:'1%',
        paddingVertical:5,
        paddingHorizontal:20,
        backgroundColor:'#FFF',
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        ...Platform.select({
            ios: {
              shadowColor: '#ccc',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 1,
              shadowRadius: 3.5,
              marginTop: 6,
            },
            android: {
              elevation: 7,
              marginTop: 6,
              
            },
        }),

    },
    paymentItem:{
        height:70,
        position:'relative',
        flexDirection:"row",
        justifyContent:'flex-start',
    },
    paymentImage:{
        width:40,
        height:40,
        marginVertical:15
    },
    paymentText:{
        fontSize:16,
        color:'#000',
        lineHeight:60,
        paddingHorizontal:20
    },
    paymentIcon:{
        width:25,
        height:25,
        position:'absolute',
        top:22,
        right:10
    },
    bottomView:{
        width:'100%',
        borderWidth:1,
        borderColor:'#bbb',
        backgroundColor:'#FFF',
        flexDirection:'row',
        justifyContent:'flex-start',
        ...Platform.select({
            ios:{
                height:75,
            },
            android:{
                height:60,
            }
        })
    },
    bottomIcon:{
        width:'12%',
        paddingLeft:15,
        paddingTop:8,
        // backgroundColor:'green'
    },
    bottomNum:{
        width:'40%',
        fontSize:22,
        color:'#EC3656',
        lineHeight:50,
        // backgroundColor:'red'
    },
    bottomButton:{
        width:'45%',
        height:40,
        borderRadius:20,
        marginLeft:5,
        marginVertical:7,
        backgroundColor:'#FABA3C'
    },
    bottomButtonText:{
        fontSize:17,
        color:'#FFF',
        lineHeight:22,
    }
    
})
/**
 * 代码描述: 查看订单 快来帮忙模块订单页面
 * 作者:cxr
 * 创建时间:2023/11/22 09:20:11
 */

import React from "react";
import { View,Text,StyleSheet,Dimensions,Image,ScrollView } from "react-native";
import { Appbar,Avatar,IconButton,Button } from 'react-native-paper';
import {navigate} from '../../../config/routs/NavigationContainer';
import StepBar from "../components/StepBar";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ViewOrders = () => {
    return(
        <View style={styles.parentView}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../assets/images/chevron-left.png')} onPress={() => navigate('HelpCircleRoute')}/>
                <Appbar.Content title="" />
                <Image style={styles.headerImage} source={require('../../../assets/images/order_kefu.png')}></Image>
                {/* <Appbar.Action icon={require('../../../assets/images/order_kefu.png')} onPress={() => {}} /> */}
            </Appbar.Header>
            <ScrollView style={styles.scrollStyle}>
                <View style={styles.contentView}>
                    <StepBar></StepBar>
                    <View style={styles.personalView}>
                        <View style={styles.personalLeft}>
                            <Avatar.Image size={65} source={require('../../../assets/images/defaultheader.png')}></Avatar.Image>
                        </View>
                        <View style={styles.personalRight}>
                            <Text style={styles.personalName}>o泡果奶</Text>
                            <Text style={styles.personalSchool}>烟台大学</Text>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.demandLabel}>需求:</Text>
                        <Text style={styles.demandContent}></Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.itemLabel}>悬赏金额:</Text>
                        <Text style={styles.itemContent}>20.0</Text>
                        <Image style={styles.moneyIcon} source={require('../../../assets/images/yuan_icon.png')}></Image>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.itemLabel}>联系电话:</Text>
                        <Text style={styles.itemContent}>12345678901</Text>
                    </View>
                    <View style={styles.remarksView}>
                        <Text style={styles.demandLabel}>备注:</Text>
                        <Text style={styles.remarksText}>帮我买一本书</Text>
                    </View>
                    <View style={styles.recipientView}>
                        <View style={styles.personalLeft}>
                            <Avatar.Image size={65} source={require('../../../assets/images/defaultheader.png')}></Avatar.Image>
                        </View>
                        <View style={[styles.personalRight,{width:'60%'}]}>
                            <Text style={styles.personalName}>接单人</Text>
                            <Text style={styles.personalSchool}>张三</Text>
                        </View>
                        <Image style={styles.recipientIcon} source={require('../../../assets/images/phone_icon.png')}></Image>
                    </View>
                    <View style={styles.buttonView}>
                        <Button labelStyle={styles.buttonText} style={styles.buttonStyle} onPress={() => console.log('点击取消订大')}>取消订单</Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ViewOrders;

const styles = StyleSheet.create({
    parentView:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#FFF'
    },
    headerStyle:{
        width: windowWidth,
        height: 45,
        backgroundColor:'#FFF'
    },
    headerImage:{
        width:25,
        height:25,
        marginRight:20
    },
    scrollStyle:{
        width:windowWidth,
        height:windowHeight-50,
        paddingVertical:10
    },
    contentView:{
        width:'100%',
        height:'auto'
    },
    stepBarView:{
        height:50
    },
    personalView:{
        height:90,
        borderWidth:1,
        borderColor:'#aaa',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    personalLeft:{
        width:'25%',
        height:90,
        alignItems:'center',
        paddingVertical:12,
        // backgroundColor:'red'
    },
    personalRight:{
        width:'70%',
        height:90,
        paddingRight:20,
        paddingVertical:20,
        // backgroundColor:'green'
    },
    personalName:{
        fontSize:16,
        fontWeight:'600',
        color:'#000',
        lineHeight:25
    },
    personalSchool:{
        fontSize:14,
        color:'#999',
        lineHeight:30
    },
    itemView:{
        height:60,
        borderBottomWidth:1,
        borderColor:'#aaa',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    itemLabel:{
        width:'25%',
        height:60,
        fontSize:17,
        color:'#000',
        lineHeight:60,
        textAlign:'center',
    },
    itemContent:{
        width:'63%',
        height:60,
        fontSize:16,
        color:'#000',
        textAlign:'center',
        lineHeight:60,
    },
    demandLabel:{
        width:70,
        height:60,
        fontSize:17,
        color:'#000',
        textAlign:'center',
        lineHeight:60
    },
    demandContent:{
        width:'80%',
        height:40,
        borderRadius:8,
        marginVertical:10,
        backgroundColor:'#F2F2F2'
    },
    moneyIcon:{
        width:30,
        height:30,
        marginTop:15
    },
    remarksView:{
        height:100,
        borderBottomWidth:1,
        borderColor:'#aaa',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    remarksText:{
        width:'70%',
        height:100,
        fontSize:14,
        color:'#555',
        paddingVertical:20,
        paddingHorizontal:20
    },
    recipientView:{
        height:80,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    recipientIcon:{
        width:35,
        height:35,
        marginTop:30
    },
    buttonView:{
        height:70,
        paddingTop:20
    },
    buttonStyle:{
        width:'80%',
        height:40,
        marginHorizontal:'10%',
        borderRadius:20,
        backgroundColor:'#FABA3C'
    },
    buttonText:{
        fontSize:17,
        color:'#FFF'
    }
})
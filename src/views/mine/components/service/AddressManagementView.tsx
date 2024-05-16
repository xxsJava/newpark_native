/*
 * @Author: xxs
 * @Date: 2024-04-25 11:57:59
 * @LastEditTime: 2024-05-13 11:27:12
 * @FilePath: \newpark_native\src\views\mine\components\service\AddressManagementView.tsx
 * @Description: desc
 */
/**
 * 代码描述: 地址管理页面  个人中心
 * 作者:cxr
 * 修改时间:2023/11/20 09:13:11
 */
import { Button, ButtonText } from '@gluestack-ui/themed';
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import HeadNav from '../../../../components/Nav/HeadNav';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const listData = [{
    index:1,
    address:'山东省滨州市博兴县博城一路致泰广场',
    name:'张三',
    phone:'123******897'
},{
    index:2,
    address:'博兴县博城一路致泰广场',
    name:'李四',
    phone:'123******897'
},{
    index:3,
    address:'博兴县博城一路致泰广场',
    name:'王五',
    phone:'123******897'
},{
    index:4,
    address:'博兴县博城一路致泰广场',
    name:'赵六',
    phone:'123******897'
},{
    index:5,
    address:'博兴县博城一路致泰广场',
    name:'刘七',
    phone:'123******897'
},{
    index:6,
    address:'博兴县博城一路致泰广场',
    name:'冯八',
    phone:'123******897'
},{
    index:7,
    address:'博兴县博城一路致泰广场',
    name:'冯八',
    phone:'123******897'
},{
    index:8,
    address:'博兴县博城一路致泰广场',
    name:'冯八',
    phone:'123******897'
}]

export default class AddressManagementView extends Component {
    render () {
        return (
            <View style={styles.parentView}>
                <HeadNav props={{title:'地址管理',navPath:''}} />

                <View style={styles.parentBody}>
                    <View style={styles.itemList}>
                        <View style={styles.headImg}>
                            <View style={styles.headImgR}>
                                <Text style={styles.headTitle}>小</Text>
                            </View>
                        </View>

                        <View style={styles.bodyContent}>
                            <View>
                                <Text style={styles.infoTitle}>小学生 <Text style={{ fontWeight: '400', fontSize: 14 }}>17507604042</Text></Text>
                            </View>
                            <View>
                                <Text style={styles.infoAddr}>山东省 滨州市 博兴县 致泰广场C栋1807</Text>
                            </View>
                        </View>

                        <View style={styles.infoEdit}>
                            <Feather name="edit" size={16} color="#AEAEAE" />
                        </View>
                    </View>

                    <View style={styles.itemList}>
                        <View style={styles.headImg}>
                            <View style={styles.headImgR}>
                                <Text style={styles.headTitle}>小</Text>
                            </View>
                        </View>

                        <View style={styles.bodyContent}>
                            <View>
                                <Text style={styles.infoTitle}>小学生 <Text style={{ fontWeight: '400', fontSize: 14 }}>17507604042</Text></Text>
                            </View>
                            <View>
                                <Text style={styles.infoAddr}>山东省 滨州市 博兴县 致泰广场C栋1807</Text>
                            </View>
                        </View>

                        <View style={styles.infoEdit}>
                            <Feather name="edit" size={16} color="#AEAEAE" />
                        </View>
                    </View>
                </View>

                <View style={styles.footBut}>
                    <View style={styles.fotBut}><Button
                    size="md"
                    variant="solid"
                    bgColor='#F7F7F7'
                    isDisabled={false}
                    isFocusVisible={false}
                    borderRadius={20}
                    onPress={()=>{}}
                    >
                        <ButtonText style={{color:'#000'}}>管理 </ButtonText>
                    </Button></View>


                    <View style={styles.fotButA}><Button
                    size="md"
                    variant="solid"
                    bgColor='#FEE50E'
                    isDisabled={false}
                    isFocusVisible={false}
                    borderRadius={20}
                    onPress={()=>{}}
                    >
                        <ButtonText style={{color:'#000'}}>添加收货地址</ButtonText>
                    </Button></View>
                </View>
            </View>
        )
    }
  
}
const styles = StyleSheet.create({
    parentView:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#F7F7F7'
    },
    parentBody:{
        
    },
    itemList:{
        flexDirection:'row',
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#fff',
        borderRadius:10,
        marginTop:10
    },
    headImg:{
        width:'20%',
        height:80,
        padding:15
    },
    headImgR:{
        borderRadius:30,
        width:50,
        height:50,
        backgroundColor:'#FEF7EF'
    },
    headTitle:{
        color:'#F5890E',
        textAlign:'center',
        fontSize:20,
        lineHeight:45,
        
    },
    bodyContent:{
        width:'70%',
        marginTop:10
    },
    infoTitle:{
        color:'#000',
        fontWeight:'800',
        fontSize:16
    },
    infoAddr:{
        color:'#999'
    },
    infoEdit:{
        marginTop:30
    },
    footBut:{
        height:70,
        width:'100%',
        backgroundColor:'#fff',
        position:'absolute',
        bottom:-15,
        flexDirection:'row'
    },
    fotBut:{
        width:120,
        marginTop:15,
        paddingLeft:25,
        marginLeft:5
    },
    fotButA:{
        width:210,
        marginTop:15,
        marginLeft:25
    }
})

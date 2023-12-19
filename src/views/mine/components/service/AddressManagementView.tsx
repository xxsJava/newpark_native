/**
 * 代码描述: 地址管理页面  个人中心
 * 作者:cxr
 * 修改时间:2023/11/20 09:13:11
 */
import React, {Component} from 'react';
import { View,Text,StyleSheet,Dimensions,ScrollView,Platform } from 'react-native';
import { Appbar,Avatar,IconButton,Tooltip,Button } from 'react-native-paper';
import {useTranslation, Trans} from 'react-i18next';
import {navigate} from '../../../../config/routs/NavigationContainer'

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
                <Appbar.Header style={styles.headerStyle}>
                    <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('MineStacker')}/>
                    <Text style={styles.headerText}>
                        <Trans>navigationBar.title11</Trans>
                    </Text>
                </Appbar.Header>
                <ScrollView style={styles.scrollStyle}>
                    <View style={styles.listStyle}>
                        {listData.map(item => {
                            return(
                                <View style={[styles.itemStyle,listData.length == item.index ?styles.itemNoBottom:styles.itemBottom]} key={item.index}>
                                    <Text style={styles.itemTitle}>省市县街道</Text>
                                    <View style={styles.itemContent}>
                                        <View style={styles.contentText}>
                                            <View style={styles.contentAddress}>
                                                <Text style={[styles.labelText,styles.textStyle]}>详细地址：</Text>
                                                <Text style={[styles.textStyle,styles.addressText]} numberOfLines={1} ellipsizeMode='tail' selectable={true}>{item.address}</Text>
                                            </View>
                                            <View style={styles.personnelStyle}>
                                                <Text style={[styles.labelText,styles.textStyle]}>{item.name}</Text>
                                                <Text style={[styles.textStyle,styles.phoneText]}>{item.phone}</Text>
                                                <Text style={[styles.labelStyle,styles.labelDefault]}>默认</Text>
                                                <Text style={[styles.labelStyle,styles.labelNature]}>家</Text>
                                            </View>
                                        </View>
                                        <View style={styles.contentIcon}>
                                            <IconButton style={styles.iconStyle} size={23} icon={require('../../../../assets/images/edit_icon.png')} onPress={() => console.log('点击编辑')}></IconButton>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.buttonView}>
                        <Button style={styles.buttonStyle} labelStyle={styles.buttonText} buttonColor='#ffb700' textColor='#FFF'>新建收货地址</Button>
                    </View>
                </ScrollView>
            </View>
        )
    }
  
}

const styles = StyleSheet.create({
    parentView:{
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
    scrollStyle:{
        width:windowWidth,
        height:windowHeight-50,
        paddingVertical:15,
        paddingHorizontal:15,
        marginBottom:10,
        ...Platform.select({
            ios:{
                marginBottom:25,
            }
        })
    },
    listStyle:{
        width:'100%',
        height:'auto',
        paddingHorizontal:15,
        paddingBottom:12,
        marginBottom:20,
        borderRadius:6,
        backgroundColor:'#FFF',
    },
    itemStyle:{
        height:120,
        paddingVertical:12,
    },
    itemBottom:{
        borderBottomWidth:1,
        borderColor:'#bbb'
    },
    itemNoBottom:{
        borderBottomWidth:0
    },
    itemTitle:{
        color:'#999',
        lineHeight:20,
        ...Platform.select({
            ios:{
                fontSize:15,
            },
            android:{
                fontSize:14,
            }
        })
    },
    itemContent:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    contentText:{
        width:'90%',
    },
    contentAddress:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    labelText:{
        ...Platform.select({
            ios:{
                width:90,
            },
            android:{
                width:80,
            }
        })
    },
    textStyle:{
        color:'#000',
        lineHeight:35,
        ...Platform.select({
            ios:{
                fontSize:17,
            },
            android:{
                fontSize:16,
            }
        })
    },
    addressText:{
        width:'70%'
    },
    phoneText:{
        width:'34%'
    },
    personnelStyle:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    labelStyle:{
        width:40,
        height:20,
        color:'#FFF',
        textAlign:'center',
        lineHeight:18,
        paddingVertical:2,
        marginHorizontal:8,
        marginVertical:7,
        ...Platform.select({
            ios:{
                fontSize:15,
            },
            android:{
                fontSize:14,
            }
        })
    },
    labelDefault:{
        backgroundColor:'red'
    },
    labelNature:{
        backgroundColor:'#26c78c'
    },
    contentIcon:{
        width:'10%',
        alignItems:'center',
        // backgroundColor:'red'
    },
    iconStyle:{
        marginTop:-5
    },
    buttonView:{
        width:'100%',
        height:60,
        marginBottom:20
    },
    buttonStyle:{
        width:'90%',
        height:45,
        marginHorizontal:'5%'
    },
    buttonText:{
        fontSize:18,
        fontWeight:'600',
        lineHeight:25
    }
})

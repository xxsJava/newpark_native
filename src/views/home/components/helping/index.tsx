/**
 * 代码描述: 帮忙圈 快来帮忙模块详情页
 * 作者:cxr
 * 创建时间:2023/11/20 15:14:11
 */

import React from 'react';
import { Trans } from 'react-i18next';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { navigate } from '../../../../config/routs/NavigationContainer';
import ListView from './ListView';
import DropDownPicker from 'react-native-dropdown-picker'
// import { set } from '@gluestack-style/react';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HelpCircleView = () => {
    const [open, setOpen] = React.useState(false);
    const [curAreaCode, setcurAreaCode] = React.useState(true);
    const [sequ, setSequ] = React.useState(true);
    // 这个是正序
    const [order, setOrder] = React.useState(false);
    const [times, setTimes] = React.useState(false);
    const [cx,setcx] = React.useState(false);
    const [alls,setAlls] = React.useState('quanguo');
    return (
        <View style={styles.parentLevel}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action
                    icon={require('../../../../assets/images/chevron-left.png')}
                    onPress={() => navigate('HomeStacker')}
                />
                <Text allowFontScaling={false} style={styles.headerText}>
                    <Trans>navigationBar.title16</Trans>
                </Text>
            </Appbar.Header>
            <View style={{ backgroundColor: '#fff', width: windowWidth, }}>
                <View style={{ width: '60%', justifyContent: 'space-between', flexDirection: 'row', marginLeft: 20 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }} onPress={() => {
                        setcx(!cx); console.log(alls, '这个是价格');
                    }}>
                        {/* <Text allowFontScaling={false} style={styles.typeText}>综合11</Text>
                        <Entypo size={13} color="#000" name="chevron-thin-down" />
                        <View style={[styles.xlk,cx ? {display:'flex'} : {display:'none'}]}>
                            <TouchableOpacity onPress={() =>{setAlls('quanguo'); console.log(alls,'这个是选的范围');
                            }} style={[styles.option,{marginTop:18,zIndex:999}]}>
                                <Text style={styles.h2}>全国</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {setAlls('benxiao'); console.log(alls,'这个是选的范围');
                            }} style={styles.option}>
                                <Text style={styles.h2}>本校</Text>
                            </TouchableOpacity>
                        </View> */}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setOrder(!order); console.log(order, '这个是价格');
                    }} style={{ flexDirection: 'row', margin: 12 }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 4 }}>价格</Text>
                        </View>
                        <View>
                            <Image source={require('../../../../assets/images/triangle-up.png')} style={{ width: 10, height: 10 }}></Image>
                            <Image source={require('../../../../assets/images/triangle-down.png')} style={{ width: 10, height: 10 }}></Image>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => {
                        setTimes(!times); console.log(times, '这个是新发布');
                    }} style={{ flexDirection: 'row', margin: 12 }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 4 }}>新发布</Text>
                        </View>
                        <View>
                            <Image source={require('../../../../assets/images/triangle-up.png')} style={{ width: 10, height: 10 }}></Image>
                            <Image source={require('../../../../assets/images/triangle-down.png')} style={{ width: 10, height: 10 }}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ListView data={order}></ListView>
        </View>
    )
};
export default HelpCircleView;
const styles = StyleSheet.create({
    parentLevel: {
        width: windowWidth,
        height: windowHeight,
        flex: 1
    },
    headerStyle: {
        // height: 55,
        backgroundColor: '#faba3c',
    },
    headerText: {
        width: '80%',
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
    },
    typeText: {
        color: '#000',
        fontSize: 14,
        lineHeight: 40,
        marginRight: 5,
    },
    xlk: {
        position: 'absolute',
        bottom: -60,
        left: -12,
        zIndex: 99
    },
    option:{
        backgroundColor:'#fff',
        padding:8,
        paddingHorizontal:18
    },
    h2:{
        fontSize:12,
        color:'#000'
    }
})
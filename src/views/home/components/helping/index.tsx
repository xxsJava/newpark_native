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
import { set } from '@gluestack-style/react';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HelpCircleView = () => {
    const [open, setOpen] = React.useState(false);
    const [curAreaCode, setcurAreaCode] = React.useState(true);
    const [sequ, setSequ] = React.useState(true);
    // 这个是正序
    const [order, setOrder] = React.useState(false);
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
            <View style={{ width: windowWidth, justifyContent: 'space-between', backgroundColor: '#fff' }}>
                <TouchableOpacity onPress={() => setOrder(!order)} style={{ flexDirection: 'row', margin: 12 }}>
                    <View style={order ? { justifyContent: 'center' } : { display: 'none' }}>
                        <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold', marginRight: 4 }}>正序</Text>
                    </View>
                    <View style={order ? { display: 'none' } : { justifyContent: 'center' }}>
                        <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold', marginRight: 4 }}>倒序</Text>
                    </View>
                    <View>
                        <Image source={require('../../../../assets/images/triangle-up.png')} style={{ width: 15, height: 15 }}></Image>
                        <Image source={require('../../../../assets/images/triangle-down.png')} style={{ width: 15, height: 15 }}></Image>
                    </View>
                </TouchableOpacity>
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
        flex:1
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
    }
})
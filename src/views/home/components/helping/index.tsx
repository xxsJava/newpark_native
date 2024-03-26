/**
 * 代码描述: 帮忙圈 快来帮忙模块详情页
 * 作者:cxr
 * 创建时间:2023/11/20 15:14:11
 */

import React from 'react';
import { Trans } from 'react-i18next';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { rewardListApi } from '../../../../api/sys/reward';
import { rewardListType } from '../../../../api/sys/reward/types';
import { navigate } from '../../../../config/routs/NavigationContainer';
import ListView from './ListView';
import DropDownPicker from 'react-native-dropdown-picker'
import { set } from '@gluestack-style/react';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const rewardType: rewardListType = {
    pageNo: 1,
    pageSize: 5
};

const RewardApi = async () => {
    const rewardList = await rewardListApi(rewardType);
    //   rewardDataChange(rewardList.data)
    //   console.log('悬赏浏览',rewardList)
    // return rewardList.data
}

const HelpCircleView = () => {
    const [rewardData, rewardDataChange] = React.useState([]);
    const [options, selectItem1] = React.useState([
        {
            label: '正序',
            value: true
        },
        {
            label: '倒序',
            value: false
        }
    ]);
    const [open, setOpen] = React.useState(false);
    const [curAreaCode, setcurAreaCode] = React.useState(true);
    const [sequ, setSequ] = React.useState(true)

    console.log(sequ, '测试是否可以成功-----');
    const setMarker = () =>{
        styles.typeView.height = 300
    }
    // RewardApi()
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
           
            <View style={{ width: windowWidth, height: 120 ,justifyContent:'space-between',backgroundColor:'#fff'}}>
                    {/* <View>
                        <Text style={styles.typeTitle}>排序方式</Text>
                    </View> */}
                    <DropDownPicker
                    onPress={() => setMarker()}
                        placeholder='请选择排序方式'
                        items={options}
                        value={curAreaCode}
                        open={open}
                        setOpen={() => setOpen(true)}
                        onClose={() => setOpen(false)}
                        // onSelectItem={val => selectItem(val)}
                        onSelectItem={(item) => {
                            setSequ(item)
                        }}
                        style={{
                            borderColor: 'transparent',
                            borderWidth: 0,
                            width: 190,
                            zIndex: 9999,
                            // backgroundColor: 'transparent'
                        }}
                        containerStyle={{ width: 150 }}
                        labelStyle={{ color: '#2F3844', fontSize: 13 }}
                        dropDownContainerStyle={{
                            backgroundColor: 'white',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            zIndex: 5,
                            height:150
                        }}
                        ArrowDownIconComponent={() => (
                            <Image source={require('../../../../assets/images/triangle-down.png')} style={styles.dropIcon} />
                        )} //下拉的icon
                        ArrowUpIconComponent={() => (
                            <Image source={require('../../../../assets/images/triangle-up.png')} style={styles.dropIcon} />
                        )}  //上的是时候icon
                    />
                </View>
            <ListView data={sequ}></ListView>
        </View>
    )
}

export default HelpCircleView;

const styles = StyleSheet.create({
    parentLevel: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#EFEBFA',
    },
    headerStyle: {
        height: 55,
        backgroundColor: '#faba3c',
    },
    headerText: {
        width: '80%',
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
    },
    typeView: {
        width: windowWidth,
        height: 45,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: '#fff'
        backgroundColor:'red'
    },
    typeTitle: {
        fontSize: 15,
        color: '#555',
        lineHeight: 45
    },
    typeRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    typeText: {
        fontSize: 14,
        color: '#aaa',
        lineHeight: 45
    },
    typeIcon: {
        lineHeight: 45
    },
    dropIcon: {
        width: 18,
        height: 18
    }
})
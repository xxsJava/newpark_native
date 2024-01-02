/**
 * 代码描述: 帮忙圈 快来帮忙模块详情页
 * 作者:cxr
 * 创建时间:2023/11/20 15:14:11
 */

import React, {useState} from 'react';
import { View,Text,StyleSheet,Dimensions,ScrollView,Platform,Image,TouchableOpacity, } from 'react-native';
import {Appbar, Icon, IconButton, Avatar, Button} from 'react-native-paper';
import {navigate} from '../../../../config/routs/NavigationContainer';
import LinearGradinet from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import {useTranslation, Trans} from 'react-i18next';
import { withDecay } from 'react-native-reanimated';
import {rewardListApi} from '../../../../api/sys/reward'
import {rewardListType} from '../../../../api/sys/reward/types'
import ListView from './ListView'
import Storage from '../../../../utils/AsyncStorageUtils';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const rewardType: rewardListType = {
    pageNo:1,
    pageSize:5
};

const RewardApi = async () => {
    const tokenStr = await Storage.get('usr-token');
    // console.log('悬赏token',tokenStr)
    if(tokenStr != null) {
      const rewardList = await rewardListApi(tokenStr,rewardType);
    //   rewardDataChange(rewardList.data)
    //   console.log('悬赏浏览',rewardList)
        // return rewardList.data
    } else {
      return console.log('数据加载失败')
    }
}

const  HelpCircleView = () => {
    const [rewardData,rewardDataChange] = React.useState([])
    // RewardApi()
    return(
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
            <View style={styles.typeView}>
                <Text allowFontScaling={false} style={styles.typeTitle}>排序方式</Text>
                <View style={styles.typeRight}>
                    <Text allowFontScaling={false} style={styles.typeText}>时间排序</Text>
                    <Entypo style={styles.typeIcon} size={16} name='chevron-thin-right'></Entypo>
                </View>
            </View>
            <ListView></ListView>
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
    typeView:{
        width:windowWidth,
        height:45,
        paddingHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#fff'
    },
    typeTitle:{
        fontSize:15,
        color:'#555',
        lineHeight:45
    },
    typeRight:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    typeText:{
        fontSize:14,
        color:'#aaa',
        lineHeight:45
    },
    typeIcon:{
        lineHeight:45
    },
})
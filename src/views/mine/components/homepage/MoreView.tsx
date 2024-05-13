/**
 * 代码描述: 更多 
 * 作者:zhn
 * 修改时间:2024/4/15 16:10:11
 */

import React, { useState } from "react";
import { Dimensions, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from "react-native-animatable";
import { navigate } from "../../../../config/routs/NavigationContainer";
import { Trans } from "react-i18next";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const serviceData1 = [
    {
        index: 1,
        route: 'WalletRoute',
        text: 'minService.serviceOption1',
        icon: require('../../../../assets/images/alimom/pay.png'),
    },
    {
        index: 2,
        route: 'MyPostRoute',
        text: 'minService.serviceOption6',
        icon: require('../../../../assets/images/alimom/posts.png'),
    },
    {
        index: 3,
        route: 'CollectionRoute',
        text: 'minService.serviceOption3',
        icon: require('../../../../assets/images/alimom/sc.png'),
    },
    {
        index: 4,
        route: 'MemberServicesRoute',
        text: 'minService.serviceOption4',
        icon: require('../../../../assets/images/alimom/jf.png'),
    },
    {
        index: 5,
        route: 'AddressManagementRoute',
        text: 'minService.serviceOption5',
        icon: require('../../../../assets/images/alimom/shdz.png'),
    },
    {
        index: 6,
        route: 'InviteFriendsRoute',
        text: 'minService.serviceOption9',
        icon: require('../../../../assets/images/alimom/invite_icon.png'),
    },
    {
        index: 7,
        route: 'FeedbackRoute',
        text: 'minService.serviceOption7',
        icon: require('../../../../assets/images/alimom/fk.png'),
    },
    // {
    //     index: 8,
    //     route: 'CallCustom',
    //     text: 'minService.serviceOption8',
    //     icon: require('../../../../assets/images/alimom/kf.png'),
    // },
    {
        index: 8,
        route: 'LeaderBoards',
        text: 'minService.serviceOption10',
        icon: require('../../../../assets/images/tup/paihangbang.png'),
    },
];

const MoreView = () => {
    return (
        <View style={styles.container}>
          <View style={{backgroundColor:'#fff',padding:12}}>
          <View style={styles.heng}>
                {
                    serviceData1.map(item => {
                        return (
                            <TouchableOpacity key={item.index} onPress={() => navigate(item.route)} style={styles.smdiv}>
                                <View style={{alignItems:'center'}}>
                                    <Image source={item.icon} style={{width:30,height:30}}></Image>
                                    <Text allowFontScaling={false}>
                                        <Trans>{item.text}</Trans>
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
          </View>
        </View>
    )

}
export default MoreView;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight
    },
    heng:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        flexWrap:'wrap'
        
    },
    smdiv:{
        padding:8
    }
})
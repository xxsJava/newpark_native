/**
 * 代码描述: 性别选择页
 * 作者:cxr
 * 创建时间:2023/11/16 17:45:11
 */

import React, {useState} from 'react';
import { View,Text,StyleSheet,Dimensions,TouchableOpacity,Platform } from 'react-native';
import { Image } from 'react-native-animatable';
import {Appbar,Button} from 'react-native-paper';
import {useTranslation, Trans} from 'react-i18next';
import {RegisteredScreenProps} from '../../../../config/routs';
import {navigate} from '../../../../config/routs/NavigationContainer'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Gender: React.FC<RegisteredScreenProps> = () => {

    const [confirmVal,confirmOnPress] = React.useState('sex0')

    return (
        <View style={styles.parentView}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('Registered')}/>
                <Text style={styles.headerText}>
                    <Trans>navigationBar.title4</Trans>
                </Text>
            </Appbar.Header>
            <View style={styles.sexView}>
                <TouchableOpacity activeOpacity={0.8} style={[styles.sexItem,styles.sexBottom]} onPress={() => confirmOnPress('sex0')}>
                    <Image style={styles.sexImage} source={require('../../../../assets/gif/sex1.gif')}></Image>
                    <Image style={[styles.sexIcon,styles.sexIcon0]} source={require('../../../../assets/images/alimom/sex_icon0.png')}></Image>
                    <Image style={[styles.confirmIcon,confirmVal == 'sex0'?null:{display:'none'}]} source={require('../../../../assets/images/alimom/confirm_icon.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.sexItem} onPress={() => confirmOnPress('sex1')}>
                    <Image style={styles.sexImage} source={require('../../../../assets/gif/sex0.gif')}></Image>
                    <Image style={[styles.sexIcon,styles.sexIcon1]} source={require('../../../../assets/images/alimom/sex_icon1.png')}></Image>
                    <Image style={[styles.confirmIcon,confirmVal == 'sex1'?null:{display:'none'}]} source={require('../../../../assets/images/alimom/confirm_icon.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentView:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#FFF'
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
    sexView:{
        width:windowWidth,
        height:windowHeight-45
    },
    sexItem:{
        width:windowWidth,
        height:'48.1%',
        position:'relative'
    },
    sexBottom:{
        borderBottomWidth:1,
        borderColor:'#7410a0',
        ...Platform.select({
            ios:{
                height:'46.5%',
            }
        })
    },
    sexImage:{
        width:'100%',
        height:'100%',
        zIndex:10
    },
    sexIcon:{
        width:60,
        height:60,
        position:'absolute',
        zIndex:99
    },
    sexIcon0:{
        bottom:30,
        left:'5%',
    },
    sexIcon1:{
        top:30,
        left:'3%',
    },
    confirmIcon:{
        width:80,
        height:80,
        position:'absolute',
        top:10,
        right:'3%',
        zIndex:100
    }
});

export default Gender;
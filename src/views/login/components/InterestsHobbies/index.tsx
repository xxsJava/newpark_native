/**
 * 代码描述: 兴趣爱好选择页
 * 作者:cxr
 * 创建时间:2023/11/17 11:02:11
 */
import React from 'react';
import { Trans } from 'react-i18next';
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { RegisteredScreenProps } from '../../../../config/routs';
import { navigate } from '../../../../config/routs/NavigationContainer';
import LabelViwe from './LabelView';
import { regApi } from '../../../../api/sys/reg'
import { UserRegType } from '../../../../api/sys/reg/types'
import AsyncStorage from '@react-native-async-storage/async-storage';
//调取接口

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InterestsHobbies: React.FC<RegisteredScreenProps> = () => {

    const [labelVal, labelOnPrass] = React.useState(0)
    const goNext = async () => {
        const ustartTime = Date.now();
        var description = await AsyncStorage.getItem('description');
        var pass = await AsyncStorage.getItem('pass');
        // var schoolId = await AsyncStorage.getItem('schoolId');
        var schoolId = 1;
        var uid = 2;
        var upath = 'file:///data/user/0/com.newpark_native/cache/rn_image_picker_lib_temp_27c1fb16-abec-4da6-8a63-0b23adda2465.jpg';
        var unikname = await AsyncStorage.getItem('unikname');
        var uphone = await AsyncStorage.getItem('uphone');
        var usex = Number(await AsyncStorage.getItem('usex'));
        var ulab = '#颜值#美女';
        var uspecialty = 'null';
        console.log(description, '描述',typeof description);
        console.log(pass, '密码',typeof description);
        console.log(schoolId, '学校ID',typeof description);
        console.log(uid, 'uid',typeof description);
        console.log(ulab, '标签',typeof description);
        console.log(unikname, '昵称',typeof description);
        console.log(upath, 'upath',typeof description);
        console.log(uphone, '电话',typeof description);
        console.log(usex, '性别',typeof description);
        console.log(uspecialty, 'uspecialty',typeof description);
        console.log(ustartTime, 'ustartTime',typeof description);
        const sign:UserRegType = {
            description:description,
            pass:pass,
            schoolId:schoolId,
            uid:uid,
            ulab:ulab,
            unikname:unikname,
            upath:upath,
            uphone:uphone,
            usex:usex,
            uspecialty:uspecialty,
            ustartTime:ustartTime
        }
        // const signData = JSON.parse(sign)
        // console.log(signData);
        console.log(sign);
        const res = await regApi(sign)
        console.log(res,'res在这里');
         navigate('LoginHome')
    }
    return (
        <View style={styles.parentView}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('Registered')} />
                <Text allowFontScaling={false} style={styles.headerText}>
                    <Trans>navigationBar.title5</Trans>
                </Text>
            </Appbar.Header>
            <LabelViwe></LabelViwe>
            <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => navigate('LoginHome')}>
                    <Text allowFontScaling={false} style={styles.bottomText}>跳过，直接进入</Text>
                </TouchableOpacity>
                <Button style={styles.bottomButton} buttonColor='#6a1b9a' textColor='#FFF' labelStyle={styles.bottomButtonText} onPress={() => goNext()}>进入校园生活</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentView: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#FFF'
    },
    headerStyle: {
        width: windowWidth,
        height: 45,
        backgroundColor: '#ffb700',
    },
    headerText: {
        width: '80%',
        fontSize: 17,
        color: '#FFF',
        lineHeight: 45,
        textAlign: 'center',
    },
    contentView: {
        width: windowWidth,
        ...Platform.select({
            ios: {
                height: windowHeight - 240,
            },
            android: {
                height: windowHeight - 190,
            }
        })
    },
    scrollStyle: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    scrollConten: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    labelView: {
        height: 32,
        borderRadius: 16,
        alignSelf: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 13,
        marginVertical: 8,
        marginLeft: 5,
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#f4f5f7',
        borderWidth: 0.3,
        borderColor: '#b389cb',
        ...Platform.select({
            ios: {
                shadowColor: '#b389cb',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 3.5,
            },
            android: {
                shadowColor: '#4a136c',
                elevation: 5,
            },
        }),
    },
    labelImage: {
        width: 20,
        height: 20,
    },
    labelText: {
        fontSize: 15,
        color: '#faba3c',
        paddingHorizontal: 8,
    },
    labelSelected: {
        backgroundColor: '#b389cb'
    },
    bottomView: {
        height: 80
    },
    bottomText: {
        fontSize: 15,
        color: '#faba3c',
        textAlign: 'center',
        lineHeight: 36
    },
    bottomButton: {
        width: '76%',
        height: 48,
        borderRadius: 10,
        marginHorizontal: '12%'
    },
    bottomButtonText: {
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 30
    }
})

export default InterestsHobbies;
/**
 * 代码描述: 兴趣爱好选择页
 * 作者:cxr
 * 创建时间:2023/11/17 11:02:11
 */
import React, {useState} from 'react';
import { View,Text,StyleSheet,Dimensions,ScrollView,Platform,TouchableOpacity } from 'react-native';
import { Image } from 'react-native-animatable';
import {Appbar,Button,Chip} from 'react-native-paper';
import LabelViwe from './LabelView'
import {useTranslation, Trans} from 'react-i18next';
import {RegisteredScreenProps} from '../../../../config/routs';
import {navigate} from '../../../../config/routs/NavigationContainer'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InterestsHobbies:React.FC<RegisteredScreenProps> = () => {

    const [labelVal,labelOnPrass] = React.useState(0)

    return(
        <View style={styles.parentView}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('Registered')}/>
                <Text style={styles.headerText}>
                    <Trans>navigationBar.title5</Trans>
                </Text>
            </Appbar.Header>
            <LabelViwe></LabelViwe>
            <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => navigate('HomeStacker')}>
                    <Text style={styles.bottomText}>跳过，直接进入</Text>
                </TouchableOpacity>
                <Button style={styles.bottomButton} buttonColor='#6a1b9a' textColor='#FFF' labelStyle={styles.bottomButtonText} onPress={() => navigate('HomeStacker')}>进入校园生活</Button>
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
    contentView:{
        width:windowWidth,
        ...Platform.select({
            ios:{
                height:windowHeight-240,
            },
            android:{
                height:windowHeight-190,
            }
        })
    },
    scrollStyle:{
        flex:1,
        paddingVertical:30,
        paddingHorizontal:10,
    },
    scrollConten:{
        flexWrap: 'wrap',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    labelView:{
        height:32,
        borderRadius:16,
        alignSelf:'flex-start',
        alignItems:'center',
        paddingHorizontal:13,
        marginVertical:8,
        marginLeft:5,
        marginRight:15,
        flexDirection:'row',
        justifyContent:'flex-start',
        backgroundColor:'#f4f5f7',
        borderWidth:0.3,
        borderColor:'#b389cb',
        ...Platform.select({
            ios: {
              shadowColor: '#b389cb',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 1,
              shadowRadius: 3.5,
            },
            android: {
              shadowColor: '#4a136c',
              elevation: 5,
            },
        }),
    },
    labelImage:{
        width:20,
        height:20,
    },
    labelText:{
        fontSize:15,
        color:'#faba3c',
        paddingHorizontal:8,
    },
    labelSelected:{
        backgroundColor:'#b389cb'
    },
    bottomView:{
        height:80
    },
    bottomText:{
        fontSize:15,
        color:'#faba3c',
        textAlign:'center',
        lineHeight:36
    },
    bottomButton:{
        width:'76%',
        height:48,
        borderRadius:10,
        marginHorizontal:'12%'
    },
    bottomButtonText:{
        fontSize:17,
        fontWeight:'600',
        lineHeight:30
    }
})

export default InterestsHobbies;
import React, {Component} from 'react';
import { View,Text,SafeAreaView,StyleSheet,Dimensions,ImageBackground,Platform,ScrollView,TouchableOpacity,Image } from 'react-native';
import { Avatar,IconButton } from 'react-native-paper';
// import { Checkbox } from "native-base";
import { Center,Box, Checkbox, CheckboxIndicator, CheckboxIcon, CheckboxLabel, CheckIcon } from '@gluestack-ui/themed';
import LinearGradinet from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {navigate} from '../../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

export default class MemberServicesView extends Component {
    render () {
        return (
            <ImageBackground style={styles.imageBgStyle} source={require('../../../../assets/gif/qb.gif')}>
                <SafeAreaView style={styles.safeView}>
                    <View style={styles.headView}>
                        <IconButton size={22} iconColor='#fff' icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('MineStacker')}></IconButton>
                    </View>
                    <View style={styles.contentView}>
                        <View style={styles.placeholderView}></View>
                        <View style={styles.protocolView}>
                            <Text allowFontScaling={false} style={styles.protocoText}>会员权益</Text>
                            <View style={styles.protocoCard}>
                                <ScrollView style={styles.scrollStyle}></ScrollView>
                            </View>
                            <View style={styles.buttonView}>
                                <TouchableOpacity style={styles.buttonStyle}>
                                    <Text allowFontScaling={false} style={styles.buttonText}>开通</Text>
                                </TouchableOpacity>
                                <View style={styles.chekboxView}>
                                    <Checkbox value='true' borderColor='#FFB300'>
                                        <CheckboxIndicator borderColor='#FFB300' mr="$2">
                                            <CheckboxIcon bgColor='#FFB300' as={CheckIcon} />
                                        </CheckboxIndicator>
                                        <CheckboxLabel>同意协议《用户协议》</CheckboxLabel>
                                    </Checkbox>
                                </View>
                            </View>
                        </View>
                        <LinearGradinet colors={['rgba(99, 28, 136,1)','rgba(250, 185, 60,0.9)']} start={{x: 0, y: 0}} end={{x: 0, y: 1}} style={styles.personalDataView}>
                            <View style={styles.avatarView}>
                                <Avatar.Image size={68} source={require('../../../../assets/images/defaultheader.png')}></Avatar.Image>
                            </View>
                            <View style={styles.dataView}>
                                <Text allowFontScaling={false} style={styles.dataName}>昵称：O泡果奶</Text>
                                <Text allowFontScaling={false} style={styles.dataText}>UID:123456789011111</Text>
                            </View>
                            <View style={styles.gradeView}>
                                <AnimatedCircularProgress fill={78} size={66} width={3.5} rotation={180} tintColor='#FA59DF' backgroundColor='rgba(136, 136, 136,0.2)' ></AnimatedCircularProgress>
                                <Text allowFontScaling={false} style={styles.progressValue}>1421/10000</Text>
                                <View style={styles.gradeBg}>
                                    <Image style={styles.gradeImage} source={require('../../../../assets/images/alimom/V1.png')}></Image>
                                </View>
                            </View>
                        </LinearGradinet>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
  
}

const styles = StyleSheet.create({
    safeView:{
        width:windowWidth,
        height:windowHeight,
    },
    imageBgStyle:{
        width:windowWidth,
        ...Platform.select({
            ios:{
                height:windowHeight-400,
            },
            android:{
                height:windowHeight-300,
            }
        })
    },
    headView:{
        width:windowWidth,
        height:40,
        paddingLeft:5,
        marginTop:10
    },
    contentView:{
        width:windowWidth,
        height:windowHeight-45,
        position:'relative',
    },
    placeholderView:{
        ...Platform.select({
            ios:{
                height:230
            },
            android:{
                height:180
            }
        })
    },
    protocolView:{
        width:windowWidth,
        height:'100%',
        paddingHorizontal:15,
        backgroundColor:'#FCD083',
        ...Platform.select({
            ios:{
                paddingTop:60,
            },
            android:{
                paddingTop:50,
            }
        })
    },
    personalDataView:{
        width:'84%',
        height:120,
        borderRadius:8,
        marginHorizontal:'8%',
        position:'absolute',
        backgroundColor:'green',
        flexDirection:'row',
        justifyContent:'flex-start',
        zIndex:10,
        ...Platform.select({
            ios:{
                top:145,
            },
            android:{
                top:95,
            }
        })
    },
    protocoText:{
        color:'#000',
        ...Platform.select({
            ios:{
                fontSize:19,
                marginBottom:20,
            },
            android:{
                fontSize:20,
                marginBottom:10,
            }
        })
    },
    protocoCard:{
        width:'96%',
        borderRadius:12,
        marginHorizontal:'2%',
        backgroundColor:'#fff',
        ...Platform.select({
            ios:{
                height:'45%',
                shadowColor: '#999',
                shadowOffset: {width: 0, height: 0},
                shadowOpacity: 1,
                shadowRadius: 2.5,
            },
            android:{
                height:'40%',
                elevation: 7,
            }
        })
    },
    scrollStyle:{
        flex:1
    },
    buttonView:{
        width:'100%',
        height:80,
        paddingTop:15,
        // backgroundColor:'green'
    },
    buttonStyle:{
        width:'90%',
        height:50,
        marginHorizontal:'5%',
        borderRadius:22,
        backgroundColor:'#FBBA3D'

    },
    buttonText:{
        fontSize:19,
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:50
    },
    chekboxView:{
        marginTop:7,
        alignItems:'center'
    },
    avatarView:{
        width:'25%',
        alignItems:'center',
        paddingTop:25,
    },
    dataView:{
        width:'47%',
        paddingTop:30
    },
    dataName:{
        fontSize:15,
        color:'#222',
        fontWeight:'bold',
        lineHeight:30
    },
    dataText:{
        fontSize:15,
        color:'#111'
    },
    gradeView:{
        width:'28%',
        paddingTop:20,
        alignItems:'center',
        position:'relative',
    },
    gradeBg:{
        top:37,
        width:33,
        height:33,
        borderRadius:16.5,
        position:'absolute',
        zIndex:40,
        backgroundColor:'#F8B032'
    },
    progressValue:{
        fontSize:14,
        color:'#fff',
        textAlign:'center',
        lineHeight:30,
    },
    gradeImage:{
        width:33,
        height:33
    }
})
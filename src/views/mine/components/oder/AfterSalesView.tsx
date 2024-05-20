/*
 * @Author: xxs
 * @Date: 2023-12-26 18:58:08
 * @LastEditTime: 2024-05-20 11:15:14
 * @FilePath: \newpark_native\src\views\mine\components\oder\AfterSalesView.tsx
 * @Description: desc
 */
import { Button, ButtonText } from '@gluestack-ui/themed';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import HeadNav from '../../../../components/Nav/HeadNav';
import StylesALL from '../../../../styles';
import Colors from '../../../../styles/Color';
import FontSize from '../../../../styles/FontSize';

 const  AfterSalesView =() => {
    return(
        <View style={[styles.parentView,Colors.bGrey]}>
            <HeadNav props={{ title: '售后', navPath: '' }} />

            <View style={styles.conBody}>
                <View style={[styles.bodyContent,Colors.bWhite]}>
                    <View style={styles.conHead}>
                        <View style={styles.imgView}>
                            <Image style={StylesALL.imgSize} borderRadius={50} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%2811%29.jpg'}} />
                        </View>
                        <View style={styles.juCenter}>
                            <Text style={[Colors.fBlack,FontSize.f14,StylesALL.fWeBold]}>
                                会赚钱的佩奇
                            </Text>
                        </View>
                        <View style={styles.juCenter}>
                            <Feather name="chevron-right" size={14} color="#dbdbdb" />
                        </View>
                        <View style={[styles.textF]}>
                            <Text style={[Colors.f99,StylesALL.fWeBold]}>购买记录</Text>
                        </View>
                    </View>

                    <View style={styles.bodyCon}>
                        <View style={styles.proImgView}>
                            <Image style={StylesALL.imgSize} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/ipad1.jpg'}} />
                        </View>

                        <View style={styles.parentFontView}>
                            <Text style={[Colors.fBlack,FontSize.f18]}>Ipad Ari6 PRO</Text>
                            <Text style={[Colors.fBlack,styles.fontLine]}>金额:$5999.00</Text>
                        </View>
                    </View>

                    <View style={styles.footView}>
                        <View style={{width:'30%'}}>
                            <Button
                                size="sm"
                                variant="outline"
                                action="primary"
                                isDisabled={false}
                                isFocusVisible={false}
                                borderRadius={10}
                                >
                                <ButtonText>申请售后</ButtonText>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentView: {
        flex:1
    },
    conBody:{
        flex:1
    },
    bodyContent:{
        borderRadius:10,
        height:180,
        // borderWidth:1
    },
    conHead:{
        flexDirection:'row',
        height:'20%',
        // borderWidth:1
    },
    imgView:{
        width:36,
        height:36
    },
    juCenter:{
        justifyContent:'center'
    },
    textF:{
        position:'absolute',
        right:20,
        top:5
    },
    bodyCon:{
        flexDirection:'row',
        marginLeft:20
    },
    proImgView:{
        width:100,
        height:100
    },
    fontLine:{
        marginTop:40
    },
    parentFontView:{
        marginLeft:10
    },
    footView:{
        width:'100%',
        position:'absolute',
        bottom:10,
        left:'65%'
    }
}
)



export default AfterSalesView;
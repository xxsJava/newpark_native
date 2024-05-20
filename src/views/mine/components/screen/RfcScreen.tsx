/*
 * @Author: xxs
 * @Date: 2024-05-17 14:01:31
 * @LastEditTime: 2024-05-17 16:14:07
 * @FilePath: \newpark_native\src\views\mine\components\screen\RfcScreen.tsx
 * @Description: desc
 */

import { Button, ButtonText } from "@gluestack-ui/themed";
import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import StylesALL from "../../../../styles";
import Colors from "../../../../styles/Color";
import FontSize from "../../../../styles/FontSize";

const RfcScreen = () => {
    return(
        <SafeAreaView  style={[styles.parentView,Colors.bGrey]}>
            <FlatList
                data={DATA}
                renderItem={redentItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView >
    )
}

const redentItem =  ({item}:any) =>{
    return(
        <View style={[styles.conBody,Colors.bWhite]}>
                <View style={styles.conBodyTop1}>
                    <View style={styles.conImage}>
                        <Image style={[StylesALL.imgSize,styles.imgR]} source={{uri:item.path}} />
                    </View>
                    <View style={styles.fontBody}>
                        <Text style={[Colors.fBlack,FontSize.f16,styles.proTitle,styles.pdFont]}>
                            {item.title}
                        </Text>
                        <Text style={[FontSize.f16,styles.proTitle,Colors.ff66,styles.pdFont]}>
                            ${item.price}
                        </Text>
                        <Text style={[FontSize.f12,Colors.f99,styles.pdFont]}>
                            浏览{item.lCount}
                        </Text>
                    </View>
                </View>
                <View style={styles.conBodyTop2}>
                    <View>
                        <Text style={[Colors.f99,FontSize.f16,styles.lineHe]}>更多</Text>
                    </View>

                    <View style={styles.butRow}>
                        
                        <View>
                            <Button
                                size="sm"
                                variant="outline"
                                isDisabled={false}
                                isFocusVisible={false}
                                borderRadius={20}
                                style={{width:100,borderColor:'#EDEDED'}}
                                >
                                <ButtonText style={Colors.fBlack}>重新上架</ButtonText>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
    )
}

const DATA = [
    {
        id:'1',
        title:'漫步者耳机',
        price: 199.99,
        lCount: 10,
        path: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%2810%29.jpg'
    },
    {
        id:'1',
        title:'2024 Ipad pro',
        price: 12999.99,
        lCount: 29,
        path: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%2810%29.jpg'
    }
]

const styles = StyleSheet.create({
    parentView:{
        flex:1
    },
    conBody:{
        height:160,
    },
    conBodyTop1:{
        padding:15,
        flexDirection:'row'
    },
    conBodyTop2:{
        flexDirection:'row'
    },
    conImage:{
        width:80,
        height:80,
    },
    imgR:{
        borderRadius:10
    },
    proTitle:{
        fontWeight:'600'
    },
    fontBody:{
        marginLeft:20,
    },
    pdFont:{
        paddingTop:5
    },
    butRow:{
        flexDirection:'row',
        position:'absolute',
        right:20
    },
    lineHe:{
        lineHeight:40,
        marginLeft:20
    }
})

export default RfcScreen;

/**
 * 代码描述: 兴趣爱好标签模块
 * 作者:cxr
 * 创建时间:2023/11/17 15:57:11
 */

import React from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native-animatable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const labelData = [{
    index:1,
    text:'颜究生'
},{
    index:2,
    text:'室外高人'
},{
    index:3,
    text:'野生运动员'
},{
    index:4,
    text:'暴汗星人'
},{
    index:5,
    text:'数码宝贝'
},{
    index:6,
    text:'追光人'
},{
    index:7,
    text:'十级追剧家'
},{
    index:8,
    text:'人生体验官'
},{
    index:9,
    text:'天生乐子人'
},{
    index:10,
    text:'头号玩家'
},
{
    index:11,
    text:'三好学生'
},
{
    index:12,
    text:'狗狗教'
},
{
    index:13,
    text:'猫猫教'
},
{
    index:14,
    text:'哈基米星人'
},
{
    index:15,
    text:'四驱玩家'
},
{
    index:16,
    text:'知食分子'
},
{
    index:17,
    text:'养生行动派'
},
{
    index:18,
    text:'磕学家'
},
{
    index:19,
    text:'满分干饭人'
}
]

const LabelViwe = () => {
    const [labelVal,labelOnPrass] = React.useState(0)
    return(
        <View style={styles.contentView}>
                <ScrollView style={styles.scrollStyle}>
                    <View style={styles.scrollConten}>
                        {labelData.map(item => {
                            return(
                                <TouchableOpacity style={[styles.labelView,labelVal == item.index?styles.labelSelected:null]} key={item.index} onPress={() => labelOnPrass(item.index)}>
                                    <Image style={styles.labelImage} source={require('../../../../assets/images/alimom/tab.png')} accessibilityLabel='图片' alt="头像"></Image>
                                    <Text allowFontScaling={false} style={styles.labelText}>{item.text}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
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
})

export default LabelViwe;
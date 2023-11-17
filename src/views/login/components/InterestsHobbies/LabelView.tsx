/**
 * 代码描述: 兴趣爱好标签模块
 * 作者:cxr
 * 创建时间:2023/11/17 15:57:11
 */

import React, {useState} from 'react';
import { View,Text,StyleSheet,Dimensions,ScrollView,Platform,TouchableOpacity } from 'react-native';
import { Image } from 'react-native-animatable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const labelData = [{
    index:1,
    text:'颜值'
},{
    index:2,
    text:'中二少年'
},{
    index:3,
    text:'看书'
},{
    index:4,
    text:'cosplay'
},{
    index:5,
    text:'篮球'
},{
    index:6,
    text:'剑来'
},{
    index:7,
    text:'剑来十三之争'
},{
    index:8,
    text:'追剧'
},{
    index:9,
    text:'明星'
},{
    index:10,
    text:'游戏'
}]

const LabelViwe = () => {
    const [labelVal,labelOnPrass] = React.useState(0)
    return(
        <View style={styles.contentView}>
                <ScrollView style={styles.scrollStyle}>
                    <View style={styles.scrollConten}>
                        {labelData.map(item => {
                            return(
                                <TouchableOpacity style={[styles.labelView,labelVal == item.index?styles.labelSelected:null]} key={item.index} onPress={() => labelOnPrass(item.index)}>
                                    <Image style={styles.labelImage} source={require('../../../../assets/images/alimom/tab.png')}></Image>
                                    <Text style={styles.labelText}>{item.text}</Text>
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
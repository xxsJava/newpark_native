/**
 * 代码描述: 打卡记录  打卡
 * 作者:cxr
 * 修改时间:2023/12/14 09:14:11
 */

import React from "react";
import { View,Text,StyleSheet,Dimensions,Platform,ScrollView,TextInput,TouchableOpacity,Image } from "react-native";
import { Appbar,Avatar,IconButton,Button,Icon } from 'react-native-paper';
import { weekList,dataList } from '../../mock/index'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const CheckRecord = () => {
    return (
        <View style={styles.parentView}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')}></Appbar.Action>
                <Text allowFontScaling={false} style={styles.headerText}>打卡记录</Text>
            </Appbar.Header>
            <View style={styles.contentView}>
                <ScrollView style={styles.scrollStyle}>
                    <View style={styles.yearsTab}>
                        <IconButton size={20} icon={require('../../../../assets/images/chevron-left.png')} onPress={() => console.log('上一月')}></IconButton>
                        <Text allowFontScaling={false} style={styles.yearsText}>2023 - 12</Text>
                        <IconButton size={20} icon={require('../../../../assets/images/chevron-right.png')} onPress={() => console.log('下一月')}></IconButton>
                    </View>
                    <View style={styles.calendarView}>
                        <View style={styles.weekView}>
                            {weekList.map(item => {
                                return(
                                    <View style={styles.weekTextView} key={item.index}>
                                        <Text allowFontScaling={false} style={styles.weekTextCh}>{item.ch}</Text>
                                        <Text allowFontScaling={false} style={styles.weekTextEn}>{item.en}</Text>
                                    </View>
                                )
                            })}
                        </View>
                        <View style={styles.dataListView}>
                            {dataList.map(item => {
                                return(
                                    <View style={styles.dataView} key={item.index}>
                                        <View style={[styles.dataTextView,item.checkIn?item.day == 1?styles.dataOn:null:styles.dataNo]}>
                                            <Text allowFontScaling={false} style={[styles.dataText,item.day == 1?styles.dataOnText:item.day == 0 && item.checkIn?styles.dataAgoText:null]}>{item.data}</Text>
                                        </View>
                                        <View style={[styles.dataIcon,item.day == 1?null:{display:'none'}]}></View>
                                    </View>
                                )
                            })}
                        </View>
                        <View style={styles.cardStyle}>
                            <TextInput  allowFontScaling={false} selectionColor='#FFB700' placeholder='这一刻我想说' numberOfLines={4} multiline={true} maxLength={160} style={styles.cardInput}></TextInput>
                            <View style={styles.imageList}>
                                <TouchableOpacity style={styles.imageView}>
                                    <Icon size={25} color="#ccc" source={require('../../../../assets/images/alimom/add_icon1.png')}></Icon>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Button style={styles.buttonStyle} labelStyle={styles.buttonText}>打卡</Button>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default CheckRecord;

const styles = StyleSheet.create({
    parentView:{
        width:windowWidth,
        height:windowHeight,

    },
    headerStyle:{
        width:windowWidth,
        height:55,
        backgroundColor:'#FABA3C'
    },
    headerText:{
        width:'80%',
        fontSize:17,
        color:'#fff',
        textAlign:'center'
    },
    contentView:{
        width:windowWidth,
        ...Platform.select({
            ios:{
                height:windowHeight - 95,
            },
            android:{
                height:windowHeight - 55,
            }
        })
    },
    scrollStyle:{
        flex:1,
        // backgroundColor:'gold'
    },
    yearsTab:{
        width:windowWidth,
        height:50,
        marginTop:10,
        paddingHorizontal:5,
        flexDirection:'row',
        justifyContent:'flex-start',
        // backgroundColor:'palegreen'
    },
    yearsText:{
        width:80,
        height:50,
        fontSize:17,
        color:'#000',
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:50
    },
    calendarView:{
        width:windowWidth,
        backgroundColor:'#fff',
        paddingVertical:10,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        // backgroundColor:'plum',
        ...Platform.select({
            ios:{
                height:windowHeight-90,
            },
            android:{
                height:'auto',
            }
        })
    },
    weekView:{
        width:windowWidth,
        height:60,
        paddingHorizontal:15,
        // backgroundColor:'gold',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    weekTextView:{
        width:55,
        paddingTop:10,
        // backgroundColor:"pink"
    },
    weekTextCh:{
        fontSize:16,
        color:'#555',
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:24,
    },
    weekTextEn:{
        fontSize:15,
        color:'#aaa',
        textAlign:'center',
        lineHeight:20,
    },
    dataListView:{
        width:windowWidth,
        height:'auto',
        // backgroundColor:'wheat',
        marginBottom:20,
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        ...Platform.select({
            ios:{
                paddingHorizontal:15,
            },
            android:{
                paddingHorizontal:13,
            }
        })
    },
    dataView:{
        width:55,
        height:50,
        paddingTop:8,
        alignItems:'center',
        // backgroundColor:'plum'
    },
    dataTextView:{
        width:36,
        height:36,
        borderRadius:18,
    },
    dataText:{
        fontSize:16,
        color:'#aaa',
        lineHeight:36,
        textAlign:'center'
    },
    dataOn:{
        backgroundColor:'#CDBD97'
    },
    dataNo:{
        backgroundColor:'#F2F2F2'
    },
    dataOnText:{
        color:'#fff'
    },
    dataAgoText:{
        color:'#ccc'
    },
    dataIcon:{
        width:10,
        height:10,
        borderRadius:5,
        backgroundColor:'#5B6C74'
    },
    cardStyle:{
        width:windowWidth - 50,
        height:200,
        borderRadius:14,
        marginVertical:10,
        marginHorizontal:25,
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:'#fff',
        ...Platform.select({
            ios: {
              shadowColor: '#aaa', //设置阴影色
              shadowOffset: {width: 0, height: 0}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
              shadowOpacity: 1,
              shadowRadius: 3.5, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
            },
            android: {
              elevation: 7,
            },
          }),
    },
    cardInput:{
        width:'100%',
        textAlignVertical: 'top',
        // backgroundColor:'plum',
        ...Platform.select({
            ios:{
                height:90,
            }
        })
    },
    imageList:{
        width:'100%',
        height:80,
        // backgroundColor:'gold'
    },
    imageView:{
        width:80,
        height:80,
        borderColor:'#ccc',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:12,
        marginTop:5,
        alignItems:'center',
        paddingTop:27
    },
    buttonStyle:{
        width:'70%',
        height:46,
        marginTop:20,
        marginBottom:30,
        marginHorizontal:'15%',
        borderRadius:23,
        backgroundColor:'#FABA3C'
    },
    buttonText:{
        fontSize:17,
        color:'#fff',
        fontWeight:'bold',
        lineHeight:23
    }
})
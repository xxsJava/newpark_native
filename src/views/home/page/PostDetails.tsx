/**
 * 代码描述: 帖子详情页面
 * 作者:cxr
 * 创建时间:2023/11/23 17:58:11
 */

import React from "react";
import { View,Text,StyleSheet,Dimensions,Platform,TouchableOpacity,ScrollView,TextInput } from "react-native";
import { Image } from "react-native-animatable";
import {Appbar, Icon, IconButton, Avatar, Button} from 'react-native-paper';
import {navigate} from '../../../config/routs/NavigationContainer';
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const listData = [{
    index:1,
    name:'佩奇',
    time:'刚刚',
    num:'2.0w',
    image:require('../../../assets/images/avatar-nan.png'),
    text:'抬头和你分享一个月亮就很美好',
    itemData:[]
},{
    index:2,
    name:'佩奇',
    time:'刚刚',
    num:'2.0w',
    image:require('../../../assets/images/avatar-nan.png'),
    text:'抬头和你分享一个月亮就很美好',
    itemData:[{
        index:1,
        name:'咕子',
        text:6
    }]
}]

const PostDetails = () => {
    const [inputVal,onInputPress] = React.useState('')
    const [collectionSelect,setSelectCollection] =  React.useState('0')
    const [likeSelect,setSelectLike] = React.useState('0')
    const [transmitSelect,setSelectTransmit] = React.useState('0')
    const [likeSelect1,setSelectLike1] = React.useState(0)
    const onSelectPress= (prop:number) => {
        if(prop == 1) {
            collectionSelect == '0' ? setSelectCollection('1'):setSelectCollection('0')
            console.log('返回值：',collectionSelect)
        } else if (prop == 2) {
            likeSelect == '0' ? setSelectLike('1'):setSelectLike('0')
        } else if(prop == 3) {
            transmitSelect == '0' ? setSelectTransmit('1'):setSelectTransmit('0')
        }
        
    }
    const ononSelectLike = (prop:number) => {

    }
    return(
        <View style={styles.parentView}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action
                    icon={require('../../../assets/images/chevron-left.png')}
                    onPress={() => navigate('HomeStacker')}
                />
                <Text style={styles.headerText}>帖子详情</Text>
                <Appbar.Action
                    icon={require('../../../assets/images/ellipsis_v.png')}
                />
            </Appbar.Header>
            <View style={styles.contentView}>
                <ScrollView style={styles.contentScroll}>
                    <View style={styles.postView}>
                        <View style={styles.postStyle}>
                            <View style={styles.avatarView}>
                                <Avatar.Image size={65} source={require('../../../assets/images/avatar-nv.png')}></Avatar.Image>
                            </View>
                            <View style={styles.avatarConent}>
                                <View style={styles.nameView}>
                                    <Text style={styles.nameText}>o泡果奶</Text>
                                    <View style={styles.tabStyle}>
                                        <Icon size={15} color="#FFF" source={require('../../../assets/images/alimom/sex_icon1.png')}></Icon>
                                        <Text style={styles.tabText}>20</Text>
                                    </View>
                                </View>
                                <Text style={styles.timeText}>1小时前</Text>
                            </View>
                            <View style={styles.avatarButton}>
                                <Button style={styles.avatarButtonStyle} labelStyle={styles.avatarButtonText} onPress={() => console.log('点击关注')}>关注</Button>
                            </View>
                        </View>
                        <View style={styles.postImage}>
                            <Text style={styles.postText}>每个不起舞的日子，都是对生命的辜负。</Text>
                            <Image style={styles.postImageStyle} source={require('../../../assets/images/alimom/R-C.jpg')}></Image>
                        </View>
                        <View style={styles.postBottom}>
                            <Text style={styles.postBottomText}>浏览记录   502</Text>
                            <View style={styles.heartView}>
                                <TouchableOpacity style={styles.heartIcon} onPress={() => onSelectPress(1)}>
                                    <Icon size={24} color={collectionSelect == '1' ? '#FC073B':'#EFEBFA'} source={require('../../../assets/images/Favorite.png')}></Icon>
                                </TouchableOpacity>
                                <Text style={styles.heartText}> 2000</Text>
                            </View>
                            <View style={styles.heartView}>
                                <TouchableOpacity style={styles.heartIcon} onPress={() => onSelectPress(3)}>
                                    <Icon size={24} color={transmitSelect == '1'?'#6A1B9A':'#EFEBFA'} source={require('../../../assets/images/transmit_icon.png')}></Icon>
                                </TouchableOpacity>
                                <Text style={styles.heartText}> 2.0w</Text>
                            </View>
                            <View style={styles.heartView}>
                                <TouchableOpacity style={styles.heartIcon} onPress={() => onSelectPress(2)}>
                                    <Icon size={24} color={likeSelect == '1' ? '#FABA3C':'#EFEBFA'} source={require('../../../assets/images/Like-copy.png')}></Icon>
                                </TouchableOpacity>
                                <Text style={styles.heartText}> 2.0w</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.postComment}>
                        <View style={styles.scrollView}>
                            <Text style={styles.commentTitle}>全部评论(2000)</Text>
                            <View style={styles.listStyle}>
                                {listData.map(item => {
                                    return(
                                        <View style={styles.itemStyle} key={item.index}>
                                            <View style={styles.commentAvatarView}>
                                                <View style={styles.itemAvatar}>
                                                    <Avatar.Image size={56} source={item.image}></Avatar.Image>
                                                </View>
                                                <View style={styles.itemNameView}>
                                                    <Text style={styles.itemName}>{item.name}</Text>
                                                    <Text style={styles.itemTime}>{item.time}</Text>
                                                </View>
                                                <View style={styles.itemIconView}>
                                                    <TouchableOpacity>
                                                        <Icon size={22} color={likeSelect1 == 0?'#FABA3C':'#EFEBFA'}  source={require('../../../assets/images/Like-copy.png')}></Icon>
                                                    </TouchableOpacity>
                                                    <Text style={styles.itemIconText}>  {item.num}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.itemContent}>
                                                    <Text style={styles.itemContentText}>{item.text}</Text>
                                                    <View style={[styles.itemComment,item.itemData.length == 0?{display:'none'}:null]}>
                                                        {item.itemData.map(emeit => {
                                                            return(
                                                                <Text style={styles.commentArea} key={emeit.index}>
                                                                    {emeit.name}:
                                                                    <Text style={styles.commentAreaText}>  {emeit.text}</Text>
                                                                </Text>
                                                            )
                                                        })}
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })}
                                </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.commentBottom}>
                    <TextInput defaultValue={'说两句'} cursorColor='#FABA3C' style={styles.bottomTextInput}></TextInput>
                    <TouchableOpacity style={styles.bottomIconView}>
                        <Image style={styles.bottomIcon} source={require('../../../assets/images/3.0x/like.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PostDetails;

const styles = StyleSheet.create({
    parentView: {
        width: windowWidth,
        height: windowHeight,
    },
    headerStyle: {
        height: 45,
        backgroundColor: '#faba3c',
    },
    headerText: {
        width: '75%',
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
    },
    contentView:{
        width:windowWidth,
        ...Platform.select({
            ios:{
                height:windowHeight-85,
            },
            android:{
                height:windowHeight-40,
            }
        })
    },
    contentScroll:{
        flex:1
    },
    postView:{
        width:windowWidth,
        height:'auto',
        borderRadius:20,
        backgroundColor:'#FFF',
    },
    postStyle:{
        width:windowWidth,
        height:70,
        marginTop:15,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    avatarView:{
        width:'22%',
        height:70,
        alignItems:'flex-end',
        paddingTop:3,
    },
    avatarConent:{
        width:'55%',
        height:70,
        paddingLeft:15,
    },
    nameView:{
        height:40,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    nameText:{
        fontSize:18,
        color:'#000',
        lineHeight:40
    },
    tabStyle:{
        width:60,
        height:24,
        borderRadius:12,
        marginTop:10,
        marginLeft:15,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        ...Platform.select({
            ios: {
              shadowColor: '#FF65B8',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 1,
              shadowRadius: 3.5,
              backgroundColor:'#FF65B8',
            },
            android: {
              shadowColor: '#FF00FF',
              elevation: 9,
              borderColor:'#ff93cd',
              marginHorizontal:15,
              marginVertical:10,
              backgroundColor:'#ff74bf'
              
            },
        }),
    },
    tabText:{
        color:'#FFF',
        fontWeight:'600',
        lineHeight:24,
        marginLeft:2,
    },
    timeText:{
        height:30,
        color:'#bbb'
    },
    avatarButton:{
        width:'20%',
        paddingTop:10,
    },
    avatarButtonStyle:{
        width:80,
        height:32,
        borderRadius:6,
        backgroundColor:'#FABA3C'
    },
    avatarButtonText:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'600',
        lineHeight:16
    },
    postImage:{
        width:windowWidth,
        height:'auto',
        paddingTop:20,
    },
    postText:{
        height:30,
        fontSize:15,
        color:'#000',
        textAlign:'center',
        lineHeight:20
    },
    postImageStyle:{
        width:'84%',
        height:160,
        marginHorizontal:'8%',
        marginVertical:5,
        borderRadius:14,
    },
    postBottom:{
        width:windowWidth,
        height:50,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    postBottomText:{
        width:'48%',
        fontSize:15,
        color:'#999',
        lineHeight:50,
        paddingLeft:20,
    },
    heartIcon:{
    },
    heartView:{
        width:'17%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
    },
    heartText:{
        fontSize:15,
        color:'#EFEBFA',
        // lineHeight:50,
    },
    postComment:{
        width:windowWidth,
        height:'auto',
        marginTop:20,
        paddingBottom:20,
        backgroundColor:'#FFF'
    },
    scrollView:{
        width:windowWidth,
        height:'74%',
        paddingTop:5,
    },
    commentTitle:{
        height:40,
        fontSize:17,
        color:'#000',
        fontWeight:'600',
        lineHeight:40,
        paddingLeft:20,
    },
    listStyle:{
        width:windowWidth,
        paddingTop:5,
    },
    itemStyle:{
        width:windowWidth-50,
        height:'auto',
        marginTop:5,
        marginHorizontal:25,
    },
    commentAvatarView:{
        width:'100%',
        height:60,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    itemAvatar:{
        width:'20%',
        alignItems:'center',
    },
    itemNameView:{
        width:'55%',
    },
    itemName:{
        fontSize:16,
        color:'#000',
        lineHeight:35
    },
    itemTime:{
        fontSize:13,
        color:'#aaa'
    },
    itemIconView:{
        width:'25%',
        paddingTop:15,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    itemIconText:{
        fontSize:15,
        color:'#EFEBFA',
        lineHeight:25
    },
    itemContent:{
        marginLeft:'20%',
        marginRight:15,
        paddingBottom:10,
        borderBottomWidth:1,
        borderColor:'#aaa',
        // backgroundColor:'red'
    },
    itemContentText:{
        fontSize:14,
        color:'#000',
        marginTop:10,
        marginBottom:5
    },
    itemComment:{
        width:'100%',
        height:'auto',
        marginTop:5,
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:8,
        backgroundColor:'#F7F7FA'
    },
    commentArea:{
        fontSize:16,
        color:'#888',
        fontWeight:'600'
    },
    commentAreaText:{
        color:'#000'
    },
    commentBottom:{
        width:windowWidth,
        backgroundColor:'#FFF',
        flexDirection:'row',
        paddingHorizontal:25,
        justifyContent:'flex-start',
        ...Platform.select({
            ios:{
                height:85,
                shadowColor: '#ccc',
                shadowOffset: {width: 0, height: 0},
                shadowOpacity: 1,
                shadowRadius: 2.5,
            },
            android:{
                height:70,
                elevation: 8,
            }
        }),
    },
    bottomTextInput:{
        width:'89%',
        height:42,
        borderRadius:20,
        marginVertical:9,
        paddingHorizontal:25,
        backgroundColor:'#F7F7FA',
        ...Platform.select({
        })
    },
    bottomIconView:{
        paddingTop:15,
        marginLeft:10,
    },
    bottomIcon:{
        width:32,
        height:32
    }
})
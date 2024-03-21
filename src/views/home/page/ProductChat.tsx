/**
 * 代码描述: 接单聊天 快来帮忙模块聊天页面
 * 作者:cxr
 * 创建时间:2023/11/21 10:43:11
 */

import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    Image,
    ImageSourcePropType,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import LinearGradinet from 'react-native-linear-gradient';
import { Appbar, Avatar, Button, IconButton } from 'react-native-paper';
import { AvatarImageSource } from 'react-native-paper/lib/typescript/components/Avatar/AvatarImage';
import { navigate } from '../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function MessageList(props: { items: any; receiver: any; }) {
    const items = props.items;
    const receiver = props.receiver;
    const listItems = items.map((item: {
        messageImage: ImageSourcePropType;
        avatar: AvatarImageSource; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; message: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; 
}, index: React.Key | null | undefined) => {
            return (
                <View key={index} style={receiver == item.name ? styles.chatReceiver : styles.chatMessage}>
                    <Avatar.Image style={[styles.avatarImage1,receiver == item.name ? {display:'none'}:null]} size={34} source={item.avatar} accessibilityLabel='图片'></Avatar.Image>
                    <View style={[styles.textStyle,receiver == item.name ? styles.textReceiver : null]}>
                        <Text allowFontScaling={false} style={[styles.chatNameReceiver,receiver == item.name ? {display:'none'}:null]}>{item.name}</Text>
                        <Text allowFontScaling={false} style={[styles.messageText,receiver == item.name?styles.messageReceiver:null,item.message ? null : {display:'none'}]}>{item.message}</Text>
                        <Image style={[styles.messageImage,item.messageImage ? null : {display:'none'}]} source={item.messageImage} accessibilityLabel='图片' alt="头像"/>
                    </View>
                    <Avatar.Image style={[styles.avatarImage2,receiver != item.name ? {display:'none'}:null]} size={34} source={item.avatar} accessibilityLabel='图片' alt="头像"></Avatar.Image>
                </View>
            );
        },
    );
    return (
        <>{listItems}</>
    );
}

const ModuleView = () => {
    return (
        <View style={styles.itemStyle}>
            <LinearGradinet colors={['rgba(250,186,60,0.5)','rgba(250,186,60,0.2)','rgba(250,186,60,0)']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.itemBg}>
                <View style={styles.itemTop}>
                    <View style={styles.itemAvatar}>
                        <Avatar.Image size={45} source={require('../../../assets/images/avatar-nv.png')} accessibilityLabel='图片' alt="头像"></Avatar.Image> 
                    </View>
                    <View style={styles.itemName}>
                        <View style={styles.itemNameTop}>
                            <Text allowFontScaling={false} style={styles.itemNameText}>o泡果奶</Text>
                            <Text allowFontScaling={false} style={styles.itemNameTime}>刚刚</Text>
                        </View>
                        <Text allowFontScaling={false} style={styles.itemNameBottm}>来自:个人</Text>
                    </View>
                    <View style={styles.itemMoney}>
                        <TouchableOpacity style={styles.itemMoneyButton}>
                            <Image style={styles.itemNameImage} source={require('../../../assets/images/money_bag.png')} accessibilityLabel='图片' alt="头像"></Image>
                            <Text allowFontScaling={false} style={styles.itemMoneyText}>20.0</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.itemContentView}>
                    <View style={styles.itemContent}>
                        <View style={styles.contentLine}>
                            <View style={[styles.signIcon,styles.signIconColor1]}></View>
                            <Text allowFontScaling={false} style={styles.contentLineText1} numberOfLines={1} ellipsizeMode='tail'>帮忙打印文件</Text>
                        </View>
                        <View style={styles.contentLine}>
                            <View style={[styles.signIcon,styles.signIconColor2]}></View>
                            <Text allowFontScaling={false} style={styles.contentLineText2} numberOfLines={1} ellipsizeMode='tail'>需要一位同学来10号实验室</Text>
                        </View>
                    </View>
                    <View style={styles.itemContentButton}>
                        <Button style={styles.contentButton} labelStyle={styles.contentButtonText}>同意申请</Button>
                    </View>
                </View>
            </LinearGradinet>
        </View>
    )
}

const ProductChat = () => {
    const [items, setItems] = useState([
        {name: '小学牛', message: '同学，你好。',avatar:require('../../../assets/images/avatar-nan.png'),messageImage:null},
        {name: '小学牛', message: '需要我帮忙吗？',avatar:require('../../../assets/images/avatar-nan.png'),messageImage:null},
        {name: 'o泡果奶', message: '是的，我需要你的帮忙。',avatar:require('../../../assets/images/avatar-nv.png'),messageImage:null}
    ]);
    const [receiver, setReceiver] = useState('o泡果奶');
    const [value, onChangeText] = React.useState('');

    let timer;  //计时器
    useEffect(() => {

    }, []);

    //发送消息
    const sendMessage = (message: string) => {
        let newItems = JSON.parse(JSON.stringify(items));
        newItems.push({name: receiver, message: message});
        setItems(newItems);
    };
    const sendDo = () => {
        sendMessage(value);
        onChangeText('');
    };


    return (
        <>
            <Appbar.Header style={styles.appbarStyle}>
                <Appbar.BackAction onPress={() => navigate('HelpCircleRoute')} />
                <View style={styles.avatarView}>
                    <View style={styles.avatarStyle}>
                        <Avatar.Image size={34} source={require('../../../assets/images/avatar-nv.png')} accessibilityLabel='头像'></Avatar.Image>
                        <View style={styles.stateStyle}></View>
                    </View>
                    <Text allowFontScaling={false} style={styles.avatarText}>O泡果奶</Text>
                </View>
                <Appbar.Action icon="dots-vertical" onPress={() => {}} />
            </Appbar.Header>
            <SafeAreaView style={styles.mainContent}>
                <ScrollView style={styles.chatBody}>
                    <ModuleView></ModuleView>
                    <View style={{height: 15}}></View>
                    <MessageList items={items} receiver={receiver}/>
                </ScrollView>
                <View style={styles.sendColumn}>
                    <View style={styles.inputBox}>
                        <TextInput allowFontScaling={false} style={styles.sendColumnInput}
                        onChangeText={text => onChangeText(text)}
                        placeholder={'开始聊天吧'}
                        value={value}
                        onSubmitEditing={sendDo}
                        />
                        <IconButton style={styles.inputBoxIcon} icon={require('../../../assets/images/send-icon.png')} onPress={() => console.log('Pressed')}></IconButton>
                    </View>
                    <View style={styles.controlStrip}>
                        <IconButton style={styles.controlIcon} icon={require('../../../assets/images/speech-icon.png')} onPress={() => console.log('点击语音')}></IconButton>
                        <IconButton style={styles.controlIcon} icon={require('../../../assets/images/expression-icon.png')} onPress={() => console.log('点击表情')}></IconButton>
                        <IconButton style={styles.controlIcon} icon={require('../../../assets/images/picture-icon.png')} onPress={() => console.log('点击图片')}></IconButton>
                        <IconButton style={styles.controlIcon} icon={require('../../../assets/images/camera-icon.png')} onPress={() => console.log('点击相机')}></IconButton>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ProductChat;

const styles = StyleSheet.create({
    mainContent: {
        width: windowWidth,
        position:'relative',
        backgroundColor: '#FFF',
        ...Platform.select({
            ios:{
                height: windowHeight-80,
            },
            android:{
                height: windowHeight-60,
            }
        })
    },
    chatBody: {
        flex:1,
        padding: 10,
        backgroundColor:'#FFF'
    },
    chatMessage: {
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    textStyle:{
        position: 'relative',
        backgroundColor: '#efebfa',
        borderRadius: 6,
        alignSelf: 'flex-start',
        marginBottom: 25,
        marginTop:8,
        ...Platform.select({
            ios:{
                padding: 10,
                shadowColor: '#ccc', 
                shadowOffset: {width: 0, height: 0}, 
                shadowOpacity: 1,
                shadowRadius: 3.5, 
            },
            android:{
                padding: 8,
                elevation: 3,
            }
        })
    },
    chatReceiver: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    textReceiver:{
        color:'#FFF',
        marginLeft: 'auto',
        backgroundColor: '#faba3c',
    },
    avatarImage1:{
        marginRight:10,
        marginTop:-10
    },
    avatarImage2:{
        marginLeft:10,
        marginTop:-10
    },
    messageText: {
        fontSize: 15,
        color:'#000'
    },
    messageImage:{
        width:220,
        height:150,
        borderRadius:15
    },
    messageReceiver:{
        color:'#FFF'
    },
    chatName: {
        fontSize: 12,
        position: 'absolute',
        top: -15,
        fontWeight: 'bold',
    },
    chatNameReceiver: {
        fontSize: 13,
        position: 'absolute',
        top: -20,
        color:'#000',
        fontWeight: 'bold',
        marginLeft: 'auto',
    },
    chatTimeStamp: {
        marginLeft: 10,
        fontSize: 12,
    },
    avatarView:{
        width:'70%',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    avatarStyle:{
        position:'relative'
    },
    stateStyle:{
        width:12,
        height:12,
        top:22,
        right:-3,
        borderRadius:6,
        backgroundColor:'#26c78c',
        position:'absolute'
    },
    appbarStyle:{
        borderWidth:0,
        backgroundColor:'#FFF'
    },
    avatarText:{
        color:'#000',
        lineHeight:34,
        marginLeft:10
    },
    sendColumn:{
        height:130,
        marginTop:13,
        paddingTop:15,
        paddingHorizontal:15,
        backgroundColor:'#FFF',
        ...Platform.select({
            ios:{
                shadowColor: '#ccc', 
                shadowOffset: {width: 0, height: 0}, 
                shadowOpacity: 1,
                shadowRadius: 3.5, 
                // marginBottom:-30,
            },
            android:{
                elevation: 10,
            }
        })
    },
    inputBox:{
        position:'relative',
    },
    sendColumnInput:{
        width:'100%',
        height:40,
        borderRadius:20,
        paddingHorizontal:20,
        backgroundColor:'#f5f5f5'
    },
    inputBoxIcon:{
        position:'absolute',
        top:-6,
        right:5,
        zIndex:10
    },
    controlStrip:{
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    controlIcon:{
        flex:1
    },
    itemStyle:{
        height:150,
        backgroundColor:'#FFF',
        borderLeftWidth:10,
        borderColor:'#faba3c',
        ...Platform.select({
            ios: {
                marginBottom: 14,
                shadowColor: '#DDD', //设置阴影色
                shadowOffset: {width: 0, height: 3}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
                shadowOpacity: 1,
                shadowRadius: 3.5, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
              },
              android: {
                elevation: 6,
                marginBottom: 12,
              },
        })
    },
    itemBg:{
        width:'100%',
        height:150,
        paddingHorizontal:15,
        paddingVertical:15
    },
    itemTop:{
        height:50,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemAvatar:{
        width:'20%',
        alignItems:'center',
    },
    itemName:{
        width:'47%',
    },
    itemNameTop:{
        paddingLeft:15,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    itemNameText:{
        fontSize:16,
        color:'#000',
        lineHeight:24
    },
    itemNameTime:{
        fontSize:13,
        color:'#aaa',
        lineHeight:24,
        marginLeft:10
    },
    itemNameBottm:{
        fontSize:14,
        color:'#aaa',
        lineHeight:24,
        paddingLeft:15,
    },
    itemMoney:{
        width:'33%',
        paddingTop:10,
    },
    itemMoneyButton:{
        width:100,
        height:28,
        borderRadius:15,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#26c78c'
    },
    itemNameImage:{
        width:20,
        height:20,
        marginRight:10
    },
    itemMoneyText:{
        height:28,
        color:'#FFF',
        fontSize:15,
        marginTop:5,
        ...Platform.select({
            ios:{
                lineHeight:22,
            },
            android:{
                lineHeight:20,
            }
        })
    },
    itemContentView:{
        width:'100%',
        height:60,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemContent:{
        width:'65%',
        paddingHorizontal:10,
    },
    itemContentButton:{
        width:'35%',
        alignItems:'flex-end'
    },
    contentLine:{
        height:30,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    signIcon:{
        width:12,
        height:12,
        borderRadius:6,
        borderWidth:1,
        borderColor:'#aaa',
        marginHorizontal:10,
        marginVertical:13
    },
    signIconColor1:{
        backgroundColor:'#25c78b'
    },
    signIconColor2:{
        backgroundColor:'#faba3c'
    },
    contentLineText1:{
        width:'83%',
        fontSize:16,
        color:'#000',
        fontWeight:'600',
        lineHeight:35,
    },
    contentLineText2:{
        width:'83%',
        fontSize:14,
        color:'#000',
        lineHeight:35
    },
    contentButton:{
        width:'auto',
        height:34,
        borderRadius:21,
        borderWidth:0.8,
        borderColor:'#aaa',
        marginTop:30,
        paddingHorizontal:10,
        backgroundColor:'#faba3c'
    },
    contentButtonText:{
        fontSize:15,
        color:'#FFF',
        lineHeight:17
    },
})

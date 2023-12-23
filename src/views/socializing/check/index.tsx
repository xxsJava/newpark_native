/**
 * 代码描述: 消息聊天页 社交页面
 * 作者:cxr
 * 创建时间:2023/11/13 16:10:11
 */

import React, {useState, useEffect} from 'react';
import { Appbar,Avatar,IconButton } from 'react-native-paper';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Platform,
    TextInput,
    Button,
    Image,
    Dimensions,
    ImageSourcePropType
} from 'react-native';
import { AvatarImageSource } from 'react-native-paper/lib/typescript/components/Avatar/AvatarImage';
import {navigate} from '../../../config/routs/NavigationContainer';

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
                    <Avatar.Image style={[styles.avatarImage1,receiver == item.name ? {display:'none'}:null]} size={34} source={item.avatar}></Avatar.Image>
                    <View style={[styles.textStyle,receiver == item.name ? styles.textReceiver : null]}>
                        <Text allowFontScaling={false} style={[styles.chatNameReceiver,receiver == item.name ? {display:'none'}:null]}>{item.name}</Text>
                        <Text allowFontScaling={false} style={[styles.messageText,receiver == item.name?styles.messageReceiver:null,item.message ? null : {display:'none'}]}>{item.message}</Text>
                        <Image style={[styles.messageImage,item.messageImage ? null : {display:'none'}]} source={item.messageImage} />
                    </View>
                    <Avatar.Image style={[styles.avatarImage2,receiver != item.name ? {display:'none'}:null]} size={34} source={item.avatar}></Avatar.Image>
                </View>
            );
        },
    );
    return (
        <>{listItems}</>
    );
}

// const URL_SERVER = 'http://192.168.199.133:8080';

const CheckView = () => {
    const [items, setItems] = useState([
        {name: '小学牛', message: '今天晚上吃点啥？',avatar:require('../../../assets/images/avatar-nan.png'),messageImage:null},
        {name: 'o泡果奶', message: '我们去吃牛排吧！',avatar:require('../../../assets/images/avatar-nv.png'),messageImage:null},
        {name: '小学牛', message: '好的，我去给小红打气。',avatar:require('../../../assets/images/avatar-nan.png'),messageImage:null},
        {name: '小学牛', message: '你们在门口等我吧。',avatar:require('../../../assets/images/avatar-nan.png'),messageImage:null},
        {name: 'o泡果奶', message: '你人呢？我到门口啦',avatar:require('../../../assets/images/avatar-nv.png'),messageImage:null},
        {name: '小学牛', message: null,avatar:require('../../../assets/images/avatar-nan.png'),messageImage:require('../../../assets/images/alimom/R-C.jpg')},
    ]);
    const [receiver, setReceiver] = useState('o泡果奶');
    const [value, onChangeText] = React.useState('');

    let timer;  //计时器
    useEffect(() => {
        //loadMessage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * 加载聊天信息
     */
    // const loadMessage = () => {
    //     timer = setInterval(function () {
    //         //执行代码
    //         console.log('-----------获取数据------------');
    //         fetch(URL_SERVER + '/list')
    //             .then(function (response) {
    //                 return response.json();
    //             })
    //             .then(function (result) {
    //                 if (result.code == 0) {
    //                     setItems(result.data);
    //                 }
    //             });
    //     }, 1000);
    // };

    // const postMessage = () => {
    //     fetch(URL_SERVER+'/send', {
    //         method: 'POST',
    //         credentials: 'include',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: 'roomId=1&message=' + value + '&name=' + receiver,
    //     })
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.text();
    //             }
    //             throw new Error('Network response was not ok.');
    //         })
    //         .then(responseText => {
    //             console.log(responseText);
    //         })
    //         .catch(e => {
    //             console.log(e.toString());
    //         });
    // };

    //发送消息
    const sendMessage = (message: string) => {
        let newItems = JSON.parse(JSON.stringify(items));
        newItems.push({name: receiver, message: message});
        setItems(newItems);
    };
    const sendDo = () => {
        sendMessage(value);
        //postMessage();
        onChangeText('');
    };


    return (
        <>
            {/* <StatusBar barStyle="dark-content"/> */}
            <Appbar.Header style={styles.appbarStyle}>
                <Appbar.BackAction onPress={() => navigate('SocializingStacker')} />
                <View style={styles.avatarView}>
                    <View style={styles.avatarStyle}>
                        <Avatar.Image size={34} source={require('../../../assets/images/avatar-nv.png')}></Avatar.Image>
                        <View style={styles.stateStyle}></View>
                    </View>
                    <Text style={styles.avatarText}>O泡果奶</Text>
                </View>
                <Appbar.Action icon="dots-vertical" onPress={() => {}} />
            </Appbar.Header>
            <SafeAreaView style={styles.mainContent}>
                {/* <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => setReceiver(text)}
                    placeholder={'聊天人姓名'}
                    value={receiver}
                    onSubmitEditing={sendDo}
                /> */}
                <ScrollView style={styles.chatBody}>
                    <View style={{height: 15}}></View>
                    <MessageList items={items} receiver={receiver}/>
                </ScrollView>
                <View style={styles.sendColumn}>
                    <View style={styles.inputBox}>
                        <TextInput style={styles.sendColumnInput}
                        allowFontScaling={false}
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
 
                {/* <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => onChangeText(text)}
                    placeholder={'开始聊天吧'}
                    value={value}
                    onSubmitEditing={sendDo}
                />
                <Button
                    onPress={sendDo}
                    title="发送"
                    color="#841584"
                /> */}
            </SafeAreaView>
        </>
    )
}

export default CheckView;

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
                elevation: 7,
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
    }
})
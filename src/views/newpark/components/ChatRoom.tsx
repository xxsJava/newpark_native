import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Switch, Button } from 'react-native-paper';
import { TextInput } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Item = ({title}:any) => (
    <View >
      <Text>{title.friendUser.nickname}</Text>
    </View>
  );
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
const ChatRoom = () => {
    const [roomDesc, setroomDesc] = React.useState(null);
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn)
        console.log(isSwitchOn, '开关');

    };

    const [chat, setChat] = React.useState('');
    const [imghead, setImghead] = useState(null)
    // 如果没有选择就默认给这个图片
    var upath = 'https://new-by-video.oss-cn-beijing.aliyuncs.com/2024/01/29/416adedc-ea1f-4ce4-b87d-7f8875208b4f.jpg';
    const changeHeader = () => {
        launchImageLibrary({
            mediaType: "mixed",
            selectionLimit: 0,// 1为一张，0不限制数量
            includeBase64: true
        }, res => {
            setImghead(res.assets)
            if (!res.didCancel) {
                if (res.assets[0].uri) {
                    upath = res.assets[0].uri
                }

            }
            console.log(upath, 'upath');
        });
    }
    return (
        <View style={styles.content}>
            <TouchableOpacity onPress={() => changeHeader()}>
                {imghead ? (
                    imghead && imghead.map((item: any, index: any) => {
                        return (
                            <View key={index}>
                                <Image
                                    source={{ uri: item.uri }}
                                    style={styles.ava}
                                    accessibilityLabel='图片'
                                    alt="头像"
                                />
                            </View>
                        )
                    })
                ) : (
                    <Image source={require('../../../assets/images/3.0x/chat_takephoto.png')} style={styles.ava} accessibilityLabel='图片' alt="头像"/>
                )
                }
            </TouchableOpacity>
            <Text style={styles.avatext}>请选择聊天室头像</Text>
            <ScrollView style={styles.card}>
                <View style={styles.heng}>
                    <Text>聊天室名称</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1, minWidth: 90 }}
                        onChangeText={text => setChat(text)}
                        value={chat}
                        maxLength={12}
                        placeholder="请输入"
                        autoComplete='name'
                        enablesReturnKeyAutomatically={true}
                    />
                </View>

                <View style={styles.heng}>
                    <Text>私密/公开设置</Text>
                    <View style={styles.switchs}>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color='#ECB32C' />
                        {
                            isSwitchOn ?
                                <Text style={{ fontSize: 12 }}>私密</Text> :
                                <Text style={{ fontSize: 12 }}>公开</Text>
                        }
                    </View>
                </View>
                <View style={[styles.heng, { alignItems: 'flex-start', flexDirection: 'column' }]}>
                    <Text>描述 : </Text>
                    <TextInput
                        style={{ height: 200, borderColor: 'gray', borderWidth: 1, width: '74%', marginLeft: '20%' }}
                        onChangeText={text => setChat(text)}
                        value={roomDesc}
                        placeholder="请输入聊天室的描述"
                        multiline={true}
                        textAlignVertical='top'
                    />
                </View>
              <View style={[styles.heng,{width:'80%',marginLeft:'10%',marginTop:12}]}>
              <Button  mode="contained" onPress={() => console.log('点击了创建按钮')}  buttonColor='red'>
                    创建
                </Button>
                <Button  mode="contained" onPress={() => console.log('点击了取消按钮')} buttonColor='green' >
                    取消
                </Button>
              </View>
            </ScrollView>

        </View>
    )
}
export default ChatRoom;
const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: windowWidth,
        height: windowHeight
    },
    ava: {
        width: 100,
        height: 100,
        borderRadius: 20,
        zIndex: 8,
        marginLeft: windowWidth * 0.5 - 50,
        marginTop: 30,
    },
    card: {
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 30,
        marginTop: -50,
        marginLeft: '10%',
        zIndex: -1,
        marginBottom: 30,
        paddingTop: 60
    },
    avatext: {
        textAlign: 'center',
        fontSize: 12
    },
    heng: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        paddingHorizontal: 12,
        alignItems: 'flex-end'
    },
    switchs: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    }
})
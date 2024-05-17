import { Button, ButtonText,Toast } from '@gluestack-ui/themed';
import * as React from 'react';
import { useState } from 'react';
import { Alert, Dimensions, FlatList, Image, StyleSheet, Text } from 'react-native';
import { View } from 'react-native-animatable';
import { applyList, handleFriend } from '../../../api/imApi';
import { handleFriendType } from '../../../api/imApi/type';
import Storage from '../../../utils/AsyncStorageUtils';
// import { Snackbar,Toast } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const agreeAct = async (item) => {
    // Alert.alert('你点击了拒绝按钮')
    const uId = await Storage.get('usr-uId');
    const params: handleFriendType = {
        fromUserID: item.fromUserID,
        toUserID: item.toUserID,
        handleResult: -1,
        handleMsg: '你拒绝了好友申请'
    }
    const data1 = await handleFriend(params);
    console.log(data1, '点击拒绝获得的数据');
    if (data1.errCode == 0) {
        // Alert.alert('您已拒绝' + item.fromNickname + '的好友申请');

    } else if (data1.errCode == 1001) {
        // Alert.alert('已经在处理' + item.fromNickname + '的好友申请，请稍后查看！！！');
        // Toast.Title()

    }
};


const ReqApp = (item: any) => {
    React.useEffect(() => {
        applyListss();
    }, []);

    const [listApplys, setListApplys] = useState([]);
    const [visible, setVisible] = React.useState(true);
    const onDismissSnackBar = () => setVisible(true);

    // 获取好友列表
    const applyListss = async () => {
        const params = {
            "userID": "1742430171993788416",
            "pagination": {
                "pageNumber": 1,
                "showNumber": 10
            }
        };
        const applys = await applyList(params);
        console.log('获取--------->', applys.data.FriendRequests);
        setListApplys(applys.data.FriendRequests);
    };


    return (
        <View style={{ width: windowWidth, height: windowHeight, marginTop: 10 }}>
            <View style={{ backgroundColor: '#fff' }}>
                <FlatList
                    data={listApplys}
                    renderItem={items}
                    keyExtractor={item => item.fromUserID.toString() + item.createTime.toString()}
                    ItemSeparatorComponent={Separator}
                />
            </View>
            {/* <View style={{position:'absolute',width:windowWidth,height:windowHeight}}>
                <View style={{width:'100%',height:'100%',backgroundColor:"#000"}}></View>
            </View> */}
        </View>
    );
};

const Separator = () => {
    return <View style={styles.separator} />;
};

const items = ({ item }: any) => {
    return (
        <View style={styles.heng}>
            <View style={styles.headImg}>
                <Image
                    style={styles.tinyLogo}
                    source={{ uri: item.toFaceURL }}
                    accessibilityLabel='图片'
                    alt="网络不佳"
                />
            </View>
            <View style={[styles.heng, styles.bodyText]}>
                <View>
                    <Text style={styles.name}>{item.fromNickname}</Text>
                    <Text style={styles.descFont} numberOfLines={1}> {item.reqMsg}</Text>
                </View>
            </View>
            <View style={styles.rgStart}>

                <View style={{ marginRight: 5 }}><Button
                    size="sm"
                    variant="solid"
                    action="negative"
                    isDisabled={false}
                    isFocusVisible={false}
                    onPress={() => { agreeAct(item) }}
                >
                    <ButtonText>拒绝</ButtonText>
                </Button></View>

                <View><Button
                    size="sm"
                    variant="solid"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                >
                    <ButtonText>同意</ButtonText>
                </Button></View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    search: {
        marginTop: 10,
        height: 43,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    name: {
        color: 'black',
        lineHeight: 20,
        fontSize: 16,
        marginBottom: 3,
        fontWeight: 'bold'
    },
    descFont: {
        fontSize: 12,
        color: '#999',
        width: 100
    },
    headImg: {
        width: 60,
        height: 60,
        marginBottom: 3
    },
    tinyLogo: {
        width: '100%',
        height: '100%'
    },
    heng: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        position: 'relative'
    },
    separator: {
        height: 0.2,
        backgroundColor: "#999",
        marginVertical: 4,
    },
    bodyText: {
        marginTop: 5
    },
    rgStart: {
        position: 'absolute',
        right: 20,
        top: 15,
        flexDirection: 'row'
    },
    textAgg: {
        fontSize: 17
    }
})
export default ReqApp;

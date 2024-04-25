
/**
 * 代码描述: 添加牛友
 * 作者:zhn
 * 修改时间:2024/2/22 16:10:11
 */
import { CloseIcon, Heading, Icon, Input, InputField, InputIcon, InputSlot, Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, SearchIcon } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { accountCheck, addFriend } from '../../../api/imApi';
import Storage from '../../../utils/AsyncStorageUtils';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


// const list = [
//     {
//         index:1,
//         name:'xxs',
//         ava:require('../.../../../../assets/images/tup/ppy.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行','美食','吃穿','美妆']
//     },
//     {
//         index:2,
//         name:'eee',
//         ava:require('../.../../../../assets/images/tup/ly.png'),
//         tel:'5175689259',
//         isboy:false,
//         inter:[]
//     },
//     {
//         index:3,
//         name:'trf',
//         ava:require('../.../../../../assets/images/tup/dg.jpg'),
//         tel:'5175689259',
//         isboy:false,
//         inter:['旅行']
//     },
//     {
//         index:4,
//         name:'iuy',
//         ava:require('../.../../../../assets/images/tup/hc.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行']
//     },
//     {
//         index:5,
//         name:'ops',
//         ava:require('../.../../../../assets/images/tup/jia.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行']
//     },
//     {
//         index:6,
//         name:'ops',
//         ava:require('../.../../../../assets/images/tup/jia.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行']
//     },
//     {
//         index:7,
//         name:'ops',
//         ava:require('../.../../../../assets/images/tup/jia.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行']
//     },
//     {
//         index:8,
//         name:'ops',
//         ava:require('../.../../../../assets/images/tup/jia.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行']
//     },
//     {
//         index:9,
//         name:'ops',
//         ava:require('../.../../../../assets/images/tup/jia.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行']
//     },
//     {
//         index:10,
//         name:'ops',
//         ava:require('../.../../../../assets/images/tup/jia.png'),
//         tel:'5175689259',
//         isboy:true,
//         inter:['旅行']
//     },
// ]
const AddPeople = () => {
    const [personInfo, setpersonInfo] = React.useState({ "ava": 27, "index": 1, "inter": ["旅行", "美食", "吃穿", "美妆"], "isboy": true, "name": "xxs", "tel": "5175689259", "birthday": "2024-03-03" });
    const [value, onChangeText] = useState('');
    const [remain, onChangeText1] = useState('');
    // 模态框
    const [showmtk, setShowmtk] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [onText, setText] = useState('');
    const [writremark, setWritremark] = useState(true);
    const ref = React.useRef(null)
    // 弹出提示框
    const tipBox = () => {
        Alert.alert(
            '提示',
            '已发送验证消息，请稍后！！！'
        )
    };

    //发送好友申请参数
    const friendParam:any = {
        "fromUserID": "",
        "toUserID": "11111113",
        "reqMsg": "hello!",
        "ex": ""
    }

    const uIdArr = {
        "checkUserIDs": ["123"]
    };

    //添加好友 1004 用户不存在
    const addFriends = async () => {
        
        const accountChecks = await accountCheck(uIdArr);
        console.log('好友是否存在数据------->',accountChecks);

        const uId = await Storage.get('usr-uId');
        friendParam.fromUserID = uId;
        friendParam.toUserID = onText;
        
        const result = await addFriend(friendParam);
    }

    const onChangeTextInput = (text: string) => {
        setText(text);
        setIsVisible(text.length > 0);
    }

    return (
        <View>
            <View style={styles.searchGrid}>
                <Input style={styles.searchInput}>
                    <InputSlot pl='$3'>
                        <InputIcon as={SearchIcon} />
                    </InputSlot>
                    <InputField
                        placeholder="账号/手机号"
                        onChangeText={onChangeTextInput}
                        keyboardType="numeric"
                    />
                </Input>
            </View>
            <TouchableOpacity style={isVisible ? {} : { display: 'none' }} onPress={() => setShowmtk(true)}>
                <View style={styles.searchContent}>
                    <Text style={styles.searchText}>
                        查找‘{onText}’相关用户
                    </Text>
                </View>
            </TouchableOpacity>

            <Modal 
            isOpen={showmtk}
            onClose={() => {
                setShowmtk(false)
            }}
            finalFocusRef={ref}>
                <ModalBackdrop />
                <ModalContent>
                    <ModalHeader>
                    <Heading size="sm">用户详情信息</Heading>
                        <ModalCloseButton>
                            <Icon as={CloseIcon} />
                        </ModalCloseButton>
                    </ModalHeader>
                <ModalBody>
                    
                </ModalBody>
                <ModalFooter />
                </ModalContent>
            </Modal>
        </View>
    )
};
const styles = StyleSheet.create({
    searchGrid: {
        width: windowWidth,
        height: 70,
        paddingHorizontal: 10,
        marginTop: 10
    },
    searchInput: {
        borderRadius: 20
    },
    searchContent: {
        backgroundColor: '#FFF',
        height: 40
    },
    searchText: {
        lineHeight: 40,
        color: '#000',
        paddingLeft: 10
    },
    hideContent: {
        display: 'none'
    }
})
export default AddPeople;

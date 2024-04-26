
/**
 * 代码描述: 添加牛友
 * 作者:zhn
 * 修改时间:2024/2/22 16:10:11
 */
import { AddIcon, Button, ButtonIcon, ButtonText, CloseIcon, Heading, Icon, Input, InputField, InputIcon, InputSlot, Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, SearchIcon, Toast, ToastDescription, useToast } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { accountCheck, addFriend } from '../../../api/imApi';
import Storage from '../../../utils/AsyncStorageUtils';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddPeople = () => {
    
    // 模态框
    const [showmtk, setShowmtk] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [onText, setText] = useState('');
    const [addNumber,setNumber] = useState('');
    const [writremark, setWritremark] = useState(true);
    const ref = React.useRef(null)
    const [context,setConText] = useState('');
    const toast = useToast()

    const [onFriend,setFriend] = useState(false);

    //发送好友申请参数
    const friendParam:any = {
        "fromUserID": "",
        "toUserID": "11111113",
        "reqMsg": "hello!",
        "ex": ""
    }

    const uIdArr:any = {
        "checkUserIDs": []
    };

    //添加好友 1004 用户不存在
    const addFindFriends = async () => {
        
        uIdArr.checkUserIDs.push(addNumber);
        const accountChecks = await accountCheck(uIdArr);
        console.log('参数------->',uIdArr);
        console.log('好友是否存在数据------->',accountChecks.data.results[0].accountStatus);

        if(accountChecks.data.results[0].accountStatus == 'unregistered'){
            setText('未找到相关的用户信息');
            setIsVisible(true);
            return;
        }
        setShowmtk(true);
    }

    const addFriends = async () => {
        const uId = await Storage.get('usr-uId');
        friendParam.fromUserID = uId;
        friendParam.toUserID = addNumber;
        friendParam.reqMsg = context;

        console.log('好友申请参数------>',friendParam);

        const result = await addFriend(friendParam);
        
        if(result.errCode == 0){
            console.log('已发送好友申请');
            toast.show({
                placement: "top",
                render: ({ id }) => {
                    const toastId = "toast-" + id;
                    return (
                        <Toast nativeID={toastId} action="success" variant="solid">
                            <ToastDescription>
                                已发送好友申请
                            </ToastDescription>
                        </Toast>
                    )
                }
            })    
            setShowmtk(false);
            setFriend(false);
        }
    }

    const onChangeTextInput = (text: string) => {
        setNumber(text);
        setText('查找‘'+text+'’相关用户');
        setIsVisible(text.length > 0);
    }

    const onAddChangeText = (text:string) =>{
        setConText(text);
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
            <TouchableOpacity style={isVisible ? {} : { display: 'none' }} onPress={addFindFriends}>
                <View style={styles.searchContent}>
                    <Text style={styles.searchText}>
                        {onText}
                    </Text>
                </View>
            </TouchableOpacity>

            <Modal 
            isOpen={showmtk}
            onClose={() => {
                setShowmtk(false);
                setFriend(false);
            }}
            finalFocusRef={ref}>
                <ModalBackdrop />
                <ModalContent>
                    <ModalHeader>
                    <Heading size="sm">{onFriend?'发送好友申请':'用户详情信息'}</Heading>
                        <ModalCloseButton>
                            <Icon as={CloseIcon} />
                        </ModalCloseButton>
                    </ModalHeader>
                <ModalBody>
                    {onFriend?<View style={styles.addContent}>
                    <View>
                        <Text style={context.length>0?styles.contentFonta:styles.contentFont}>{context.length>0?context:'请输入好友申请内容'}</Text>
                    </View>
                    <TextInput
                        allowFontScaling={false}
                        onChangeText={onAddChangeText}
                        autoFocus={true}
                        caretHidden={true}
                        maxLength={20}
                        style={{opacity:0}}
                        />
                    <Text style={styles.contentLen}>{context.length}/20</Text>
                </View>:<View style={styles.addUsrInfo}>
                        <View style={[styles.usrIcon]}>
                            <Image style={styles.imgHead} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg'}} />
                        </View>
                        <View style={[styles.headName]}>
                            <Text style={styles.textFont}>
                                小学牛
                            </Text>
                            <Text style={styles.addNum}>
                                {addNumber}
                            </Text>
                        </View>
                        <View style={styles.addBut}>
                            <Button
                            size="md"
                            variant="solid"
                            action="primary"
                            isDisabled={false}
                            isFocusVisible={false}
                            onPress={()=>setFriend(true)}
                            >
                                <ButtonText>添加</ButtonText>
                                <ButtonIcon as={AddIcon} />
                            </Button>
                        </View>
                    </View>}
                </ModalBody>
                <ModalFooter>
                {onFriend?<Button
                        size="md"
                        variant="solid"
                        action="primary"
                        isDisabled={false}
                        isFocusVisible={false}
                        onPress={addFriends}
                        >
                    <ButtonText>发送申请</ButtonText>
                    </Button>:''}
                </ModalFooter>
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
    },
    addUsrInfo:{
        width:'100%',
        position: 'relative',
        flexDirection:'row',
    },
    usrIcon:{
        width: 60,
        height: 60,
        borderWidth: 1,
        // borderColor: 'red'
    },
    imgHead:{
        width:60,
        height: 60
    },
    headName:{
        marginLeft: 10,
        paddingTop: 10
    },
    textFont:{
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    addNum:{
        color:'#666'
    },
    addBut:{
        marginLeft: 30,
        marginTop: 10
    },
    contentFont:{
        color:'#999'
    },
    contentFonta:{
        color:'#000'
    }
    ,
    addContent:{
        height:100,
        position:'relative'
    },
    contentLen:{
        color:'#000',
        position:'absolute',
        bottom:0,
        right:10
    }
})
export default AddPeople;

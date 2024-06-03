

import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from "react-native";
import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Photo = () => {
    // const [imgs, setImgs] = useState([])
    const [imgList, setimgList]: any = useState([])

    // const addPhoto = () => {
    //     launchImageLibrary({
    //         mediaType: "photo", // 'photo' or 'video' or 'mixed'
    //         includeBase64: false,
    //         selectionLimit: 0,// 1为一张，0不限制数量
    //     }, (res) => {
    //         setimgList(res);
    //         console.log('上传图片',res)
    //     })
    // }
    const handleClick = async () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                selectionLimit: 3,
                includeBase64: false,
                maxWidth: 1000,
                maxHeight: 1000,
            },
            async res => {
                // setimgList(res)
                // console.log('返回数据',res)
                // console.log('返回数据',res.assets)
                // console.log('赋值',imgList)
                // setimgList(res.assets)
                let curFiles: any = res.assets;
                let result
                for (var i = 0; i < curFiles.length; i++) {
                    console.log(curFiles[i]);
                    result = curFiles[i]
                    setimgList([...imgList, curFiles[i]])
                }
            }
        )
    }
    return (
        <View style={styles.imageListView}>
            {imgList.map((item: any) => {
                return (
                    <Image key={item.url} style={styles.photoListStyle} source={{ uri: item.uri }} accessibilityLabel='图片' alt="头像" />
                )
            })
            }
            <TouchableHighlight style={styles.photoView} underlayColor="#ddd" onPress={() => handleClick()}>
                <Image style={styles.photoImage} source={require('../../../../assets/images/chat_page_photo.png')} accessibilityLabel='图片' alt="头像"></Image>
            </TouchableHighlight>
            {/* <Image style={{width:100,height:100}} source={{uri:'file:///Users/newpark/Library/Developer/CoreSimulator/Devices/12A11679-B024-4E1D-91F8-CE033A5E6E61/data/Containers/Data/Application/1FC816F5-0E54-4D78-81D3-708B2F510A5F/tmp/FEA68057-E426-4FC7-94A1-B4333A508A5A.jpg'}}></Image> */}
        </View>
    );
}

const PersonalDataView = () => {
    const ava = 'http://xxs18-test.oss-accelerate.aliyuncs.com/2024/05/27/21c27932-6c0e-4c83-8ada-7c084d3b3c51.png'
    const [name, setname] = React.useState('幼儿园最强恶霸')
    const [sign, setSign] = React.useState('我是顿号');
    const [school, setSchool] = React.useState('庆北大学')
    return (
        <View style={styles.parentView}>
            <View>
                <TouchableOpacity>
                    {/* <Photo></Photo> */}
                    {/* <Image source={{uri:ava}} /> */}
                </TouchableOpacity>
            </View>
            <View style={styles.heng}>
                <Text style={styles.h3} selectable={false}>头像</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../../../assets/images/tup/xy2.png')} style={styles.headImg} accessibilityLabel='图片' alt="头像"></Image>
                    <Feather name="chevron-right" size={22} color="#dbdbdb" style={styles.icon} />
                </View>
            </View>
            <View style={styles.hengz}>
                <Text style={styles.h3} selectable={false}>名字</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.h3} selectable={true} >{name}</Text>
                    <Feather name="chevron-right" size={22} color="#dbdbdb" style={styles.icon} />
                </View>
            </View>
            <View style={styles.hengz}>
                <Text style={styles.h3} selectable={false}>性别</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.h3} selectable={true}>男</Text>
                    <Feather name="chevron-right" size={22} color="#dbdbdb" style={styles.icon} />
                </View>
            </View>
            <View style={[styles.hengz, { borderBottomWidth: 1, borderColor: '#ccc' }]}>
                <Text style={styles.h3} selectable={false}>简历</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.h3, { color: '#ccc' }]} selectable={true}>介绍一下自己</Text>
                    <Feather name="chevron-right" size={22} color="#dbdbdb" style={styles.icon} />
                </View>
            </View>
            <View style={styles.hengz}>
                <Text style={styles.h3} selectable={false}>生日</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.h3} selectable={true}>1999-06-25</Text>
                    <Feather name="chevron-right" size={22} color="#dbdbdb" style={styles.icon} />
                </View>
            </View>
            <View style={styles.hengz}>
                <Text style={styles.h3} selectable={false}>个性签名</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.h3} selectable={true}>{sign}</Text>
                    <Feather name="chevron-right" size={22} color="#dbdbdb" style={styles.icon} />
                </View>
            </View>
            <View style={styles.hengz}>
                <Text style={styles.h3} selectable={false}>学校</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.h3} selectable={true}>{school}</Text>
                    <Feather name="chevron-right" size={22} color="#dbdbdb" style={styles.icon} />
                </View>
            </View>
            <View style={styles.hengz}>
                <Text style={styles.h3} selectable={false}>所在地</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.h3} selectable={true}>山东</Text>
                    <Feather name="chevron-right" size={22} color="#dbdbdb" style={styles.icon} />
                </View>
            </View>
            <View style={styles.hengz}>
                <Text style={styles.h3} selectable={false}>id</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.h3} selectable={true}>10000</Text>
                    <Feather name="chevron-right" size={22} color="#dbdbdb" style={styles.icon} />
                </View>
            </View>
        </View>
    )
}

export default PersonalDataView;

const styles = StyleSheet.create({
    parentView: {
        width: windowWidth,
        height: windowHeight - 190,
        backgroundColor: '#fff',
        zIndex: -20,
        padding: 20
    },
    headImg: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#BBBBBB',
        margin: 4,
        padding: 8,
        borderRadius: 10
    },
    heng: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#BBBBBB',
        margin: 6
    },
    h3: {
        fontSize: 14
    },
    hengz: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderBottomWidth:1,
        borderColor: '#BBBBBB',
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    imageListView: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    photoListStyle: {
        width: 95,
        height: 95,
        borderRadius: 8,
        marginRight: 5
    },
    photoView: {
        width: 95,
        height: 95,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    photoImage: {
        width: 20,
        height: 20
    },
    icon: {
        width: 24,
        height: 20,
        // color:'#000',
        // backgroundColor:'red'
    }
})
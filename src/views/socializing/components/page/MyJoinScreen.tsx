/*
 * @Author: zhn
 * @Date: 2024-05-10 16:21:09
 * @LastEditTime: 2024-05-13 10:09:57
 * @FilePath: \newpark_native\src\views\socializing\components\page\MyJoinScreen.tsx
 * @Description: 我加入的群组列表
 */
import React from "react";
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {joinedGroup} from '../../../../api/imApi/index';
import Storage from '../../../../utils/AsyncStorageUtils';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const itemData = [{
    groupID: '',
    faceURL: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg',
    groupName: '测试群',
    count: 10
}, {
    groupID: '',
    faceURL: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg',
    groupName: '调试群',
    count: 20
}, {
    groupID: '',
    faceURL: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg',
    groupName: '三剑客11',
    count: 3
}]

const items = ({ item }: any) => {
    const xr = async () => {
        const uId = await Storage.get('usr-uId');
        const params = {
            "fromUserID": uId,
            "pagination": {
                "pageNumber": 1,
                "showNumber": 50
            }
        };
        const data1 = await joinedGroup (params);
        console.log(data1,'获得数据====>');
        
    }
xr()
    return (
        <View style={styles.viewItem}>
            <View style={styles.imgView}>
                <Image style={styles.groupImg} source={{ uri: item.faceURL }} />
            </View>
            <View style={styles.groupTitle}>
                <View>
                    <Text style={styles.groupFont}>
                        {item.groupName}
                    </Text>
                </View>
                <View>
                    <Text style={styles.groupCountFont}>
                        {item.count}人
                    </Text>
                </View>
            </View>
        </View>
    )
}

const MyJoinScreen = () => {

    return (
        <SafeAreaView style={styles.parentView}>
            {/* <TextInput 
            value={selsct}
            onChangeText={text => setSelect(text)}
          /> */}
            {/* <TouchableOpacity style={{}}>
                <Image  style={{ width: 30, height: 30 }} source={require('../../../../assets/mp4/')}></Image>
                <Text>搜索：群组</Text>
            </TouchableOpacity> */}
            <FlatList
                data={itemData}
                renderItem={items}
                keyExtractor={item => item.groupID}
            />
        </SafeAreaView >
    )

}

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        alignItems:'center',
        backgroundColor:'#fff'
    },
    viewItem: {
        width:windowWidth,
        height: 80,
        // borderWidth:1,
        position: 'relative',
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    imgView: {
        width: 46,
        height: 46,
        marginTop: 10,
        marginLeft: 20
    },
    groupImg: {
        width: '100%',
        height: '100%',
        borderRadius: 12
    },
    groupTitle: {
        paddingTop: 20,
        paddingLeft: 10
    },
    groupFont: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold',
    },
    groupCountFont: {
        color: '#999',
        fontSize: 14
    }
})

export default MyJoinScreen;
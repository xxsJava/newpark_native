import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView, SectionList, PanResponderInstance, Platform } from "react-native";
import { getFriendList } from '../../../api/imApi/index';
import { getFriendListType } from '../../../api/imApi/type';
import Storage from '../../../utils/AsyncStorageUtils';
import { Toast, useToast } from '@gluestack-ui/themed';
import { PinyinUtil } from '../../../config/routs-config/StackerRout/pinyin';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SelectFriend = () => {
    const [listData, setListData] = useState([]);
    //选中的索引值
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
    // 一个选择框的高度
    const ITEM_HEIGHT = 90;
    const toast = useToast();

    type DataItem = any;
    type DataSection = { title: string; data: DataItem[] };
    type AlphabetIndexProps = {
        sections: DataSection[];
        onSectionSelect: (index: number) => void;
    };

    const AlphabetIndex: React.FC<AlphabetIndexProps> = ({
        sections,
        onSectionSelect,
    }) => {
        const [panResponder, setPanResponder] = useState<PanResponderInstance | null>(
            null,
        );
        //索引条
        return (
            <View style={styles.indexBarStyle}>
                <View>
                    {sections.map((section, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => onSectionSelect(index)}
                            style={styles.itemBar}>
                            <Text style={{ color: '#008fe4', fontSize: 10 }}>
                                {section.title}
                            </Text>

                        </TouchableOpacity>
                    ))}
                </View>
                {panResponder && <View {...panResponder.panHandlers} />}
            </View>
        );
    };



    const xr = async () => {
        const uId = await Storage.get('usr-uId');
        const params: getFriendListType = {
            userID: uId,
            pagination: {
                pageNumber: 1,
                showNumber: 50
            }
        };
        const data1 = await getFriendList(params);
        setListData(data1.data.friendsInfo);
        console.log('这个是获取到的数据----->', listData);
    }
    //计算分组高度
    const pre = (num: number) => {
        let pre = 0;
        for (let i = 0; i < num; i++) {
            pre += listData[i].data.length;
        }
        return pre;
    };

    //这里是渲染的总高度
    const _ItemLayout = (data: any, index: number) => {
        // console.log(data, '获取高的方法');

        //总高度 (item * item^n  + 标题 + 间隙) * 子元素的数量 = 分组的高度
        const dataHight =
            (ITEM_HEIGHT * data[selectedSectionIndex].data.length + 40) * data.length;
        // const dataHight = _getHigth();
        // console.log(data.length);
        // console.log('总高度-->', _getHigth());
        return {
            index,
            length: ITEM_HEIGHT,
            offset: dataHight,
        };
    };

    //计算总高度
    const _getHigth = () => {
        let nodeNum = 0;
        for (let i = listData.length - 1; i >= 0; i--) {
            nodeNum += listData[i].data.length * ITEM_HEIGHT + (32 + 8 * (listData[i].data.length - 1));
        }
        return nodeNum;
    };

    // 滚动到指定位置
    const handleSectionSelect = (index: number) => {

        setSelectedSectionIndex(index);

        //一个分组的高度
        // item * 子元素的数量 + 标题 + 间隙 * 索引条下标 + (索引下标+偏移值)
        let nodeSum = pre(index);
        console.log('子元素数量------>', nodeSum);
        const itemHeight =
            (ITEM_HEIGHT * nodeSum + 32 + 8 * (nodeSum - 1)) + ((index - 1) * 16);
        console.log('分组高度----->', itemHeight);
        //总高度
        // (item * 每个分组子元素的数量 + 标题 + 间隙 ) * 分组数量
        // const itemSum = (ITEM_HEIGHT * data[index].data.length + 40) * data.length;
        const itemSum = _getHigth();
        console.log('总高度---->', itemSum);
        console.log('滚动到的位置----->', itemSum - itemHeight);
        toast.show({
            placement: 'bottom',
            render: () => {
                return (
                    <Toast action="attention" variant="solid">
                        <Text allowFontScaling={false}>{listData[index].title}</Text>
                    </Toast>
                )
            },
        });
        if (sectionListRef.current) {
            sectionListRef.current.scrollToLocation({
                animated: true,
                sectionIndex: index,
                itemIndex: 0,
                //偏移高度
                // 具体滚动
                viewOffset: itemSum - (itemHeight) + 12,
            });
        }
    };
    // 自己模拟的虚拟数据和方法
    const [virtual, setVirtual] = useState([]);
    const [TestData, setTestData] = useState([
        {
            "addSource": 2,
            "createTime": 1714120075,
            "ex": "",
            "friendUser":
            {
                "appMangerLevel": 0,
                "createTime": 0,
                "ex": "",
                "faceURL": "",
                "globalRecvMsgOpt": 0,
                "nickname": "弟弟",
                "userID": "1548714649"
            },
            "operatorUserID": "10000",
            "ownerUserID": "10000",
            "remark": ""
        },
        {
            "addSource": 2,
            "createTime": 1714120075,
            "ex": "",
            "friendUser":
            {
                "appMangerLevel": 0,
                "createTime": 0,
                "ex": "",
                "faceURL": "",
                "globalRecvMsgOpt": 0,
                "nickname": "娜娜",
                "userID": "1548714649"
            },
            "operatorUserID": "10000",
            "ownerUserID": "10000",
            "remark": ""
        },
        {
            "addSource": 2,
            "createTime": 1714120075,
            "ex": "",
            "friendUser":
            {
                "appMangerLevel": 0,
                "createTime": 0,
                "ex": "",
                "faceURL": "",
                "globalRecvMsgOpt": 0,
                "nickname": "嗷嗷",
                "userID": "1548714649"
            },
            "operatorUserID": "10000",
            "ownerUserID": "10000",
            "remark": ""
        },
        {
            "addSource": 2,
            "createTime": 1714120075,
            "ex": "",
            "friendUser":
            {
                "appMangerLevel": 0,
                "createTime": 0,
                "ex": "",
                "faceURL": "",
                "globalRecvMsgOpt": 0,
                "nickname": "大门",
                "userID": "1548714649"
            },
            "operatorUserID": "10000",
            "ownerUserID": "10000",
            "remark": ""
        },
        {
            "addSource": 2,
            "createTime": 1714120075,
            "ex": "",
            "friendUser":
            {
                "appMangerLevel": 0,
                "createTime": 0,
                "ex": "",
                "faceURL": "",
                "globalRecvMsgOpt": 0,
                "nickname": "啊奶粉",
                "userID": "1548714649"
            },
            "operatorUserID": "10000",
            "ownerUserID": "10000",
            "remark": ""
        },
        {
            "addSource": 2,
            "createTime": 1714120075,
            "ex": "",
            "friendUser":
            {
                "appMangerLevel": 0,
                "createTime": 0,
                "ex": "",
                "faceURL": "",
                "globalRecvMsgOpt": 0,
                "nickname": "安抚",
                "userID": "1548714649"
            },
            "operatorUserID": "10000",
            "ownerUserID": "10000",
            "remark": ""
        },
        {
            "addSource": 2,
            "createTime": 1714120075,
            "ex": "",
            "friendUser":
            {
                "appMangerLevel": 0,
                "createTime": 0,
                "ex": "",
                "faceURL": "",
                "globalRecvMsgOpt": 0,
                "nickname": "短裤",
                "userID": "1548714649"
            },
            "operatorUserID": "10000",
            "ownerUserID": "10000",
            "remark": ""
        },
    ]);
    function transformData(data: any) {
        const result = [];
        const groupedData = data.reduce((acc: any, item: any) => {

            const firstLetter0 = PinyinUtil.getFirstLetter(item.friendUser.nickname);
            const firstLetter = firstLetter0.charAt(0).toUpperCase();
            if (!acc[firstLetter]) {
                acc[firstLetter] = {
                    title: firstLetter,
                    data: [],
                };
            }
            acc[firstLetter].data.push(item);
            return acc;
        }, {});

        for (const key in groupedData) {
            result.push(groupedData[key]);
        }

        // return result;
        const sortedGroups = Object.values(groupedData).sort((a, b) => a.title.localeCompare(b.title));

        return sortedGroups;
    }

    const test = () => {
        const getData = transformData(TestData);
        setVirtual(getData);
        console.log(virtual, '这个是获得的数据------->', getData[0].data[0].friendUser.nickname);
    }
    const focus = () => {
        item.item.select = !item.item.select 
    }
    const template = (item: any) => {
        console.log('传过去的数据----》', item.item);

        return (
            // <View>
            <TouchableOpacity style={{ flexDirection: 'row', height: 80, backgroundColor: '#fff', alignItems: 'center', paddingHorizontal: 6, borderBottomWidth: 0.3 }} onPress={focus}>
                <View style={{ marginHorizontal: 8 }}>
                    <Image source={require('../../../assets/images/tup/dui-2.png')} style={styles.dui}></Image>
                    <Image source={require('../../../assets/images/tup/dui.png')} style={styles.dui}></Image>
                </View>
                <View style={{ marginHorizontal: 12 }}>
                    <Image source={{ uri: item.item.friendUser.faceURL.length == 0 ? 'http://xxs18-test.oss-accelerate.aliyuncs.com/2024/05/17/1d4ae439-1444-4fe7-8889-7ac9b4f2c5fc.png' : item.item.friendUser.faceURL }} style={styles.ava}></Image>
                </View>
                <View>
                    <Text style={styles.nicknamezi}>{item.item.remark ? item.item.remark : item.item.friendUser.nickname}</Text>
                </View>
            </TouchableOpacity>
            // </View>
        )
    }
    // 头部
    const renderSectionHeader = ({ section }: { section: DataSection }) => (
        <View style={styles.headTit}>
            <Text style={{ color: '#000', fontWeight: 'bold' }}>{section.title}</Text>
        </View>

    );
    return <View style={styles.container}>
        {/* xr */}
        <TouchableOpacity onPress={test} style={{ width: 90, height: 90, backgroundColor: 'aqua' }}>
            <Text>我的好友列表</Text>
        </TouchableOpacity>
        <View style={styles.topDiv}>
            <View style={styles.seachDiv}>
                <Image source={require('../../../assets/images/tup/sousuo-2.png')} style={{ width: 26, height: 26 }}></Image>
                <Text style={{ marginLeft: 6, fontSize: 16, color: '#000' }}>搜索好友</Text>
            </View>
        </View>
        {/* <AlphabetIndex sections={listData} onSectionSelect={handleSectionSelect} /> */}
        <ScrollView style={{ flex: 1, marginTop: 0, marginBottom: 160 }}>
            {/* <ScrollView> */}
            <SectionList
                // ref={sectionListRef}
                sections={virtual}
                // 这里
                renderItem={template}
                renderSectionHeader={renderSectionHeader}
                getItemLayout={_ItemLayout}
                keyExtractor={(item, index) => {
                    return index.toString();
                }}
                stickySectionHeadersEnabled={true} />

        </ScrollView>
        {/* </ScrollView> */}

    </View>
};

export default SelectFriend;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#fff'
    },
    seachDiv: {
        backgroundColor: '#E9EAF0',
        flexDirection: 'row',
        paddingVertical: 6,
        alignItems: 'center',
        paddingHorizontal: 6,
        borderRadius: 3
    },
    topDiv: {
        width: windowWidth,
        height: 60,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    indexBarStyle: {
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        right: 5,
        ...Platform.select({
            ios: {
                top: 0,
            },
            android: {
                top: 10,
            },
        })
    },
    itemBar: {
        ...Platform.select({
            ios: {
                paddingBottom: 2,
            },
            android: {
                padding: 0,
            },
        }),
    },
    headTit: {
        backgroundColor: '#E9EAF0',
        width: windowWidth,
        height: 30,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    dui: {
        width: 20,
        height: 20
    },
    ava: {
        width: 60,
        height: 60,
        borderRadius: 4
    },
    nicknamezi: {
        fontSize: 17,
        color: '#000'
    }
});

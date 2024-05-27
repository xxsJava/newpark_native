/*
 * @Author: zhn
 * @Date: 2024-4-20 17:44:34
 * @FilePath: \newpark_native\src\views\socializing\components\ContactsModul.tsx
 * @Description: 社交的联系人页面
 */
import { Toast, useToast } from '@gluestack-ui/themed';
import React, { useRef, useState } from 'react';
import {
    Dimensions,
    Image,
    PanResponderInstance,
    Platform,
    ScrollView,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { getFriendList } from '../../../api/imApi/index';
import { navigate } from '../../../config/routs/NavigationContainer';
import { PinyinUtil } from '../../../config/routs-config/StackerRout/pinyin';
// 出现冲突地方二
// import { contextListJson } from '../../../api/imApi/type';
import Feather from 'react-native-vector-icons/Feather';
import { contextListJson } from '../../../api/imApi/type';
import Storage from '../../../utils/AsyncStorageUtils';
const windowWidth = Dimensions.get('window').width;
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

const ListIndex: React.FC = () => {
    const toast = useToast();
   
    const componentDidMount = () => {
        console.log('ceshi-------');
    }
    //选中的索引值
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

    const sectionListRef = useRef<SectionList<DataItem, DataSection> | null>(
        null,
    );

    const renderItem = ({ item }: { item: DataItem }) => (

        <TouchableOpacity
            onPress={() => navigate('FriProfile',item)}
            style={styles.listItem }>
            <View style={styles.itemLeft}>
                <View style={styles.avatarStyle} >
                    <Image source={{uri:item.friendUser.faceURL.length == 0 ? 'http://xxs18-test.oss-accelerate.aliyuncs.com/2024/05/17/1d4ae439-1444-4fe7-8889-7ac9b4f2c5fc.png' : item.friendUser.faceURL}} style={{width:'100%',height:'100%'}}></Image>
                </View>
            </View>
            <View style={styles.itemRight}>
                <Text style={styles.itemName}>
                    {item.friendUser.remark ?  item.remark : item.friendUser.nickname}
                </Text>
                <View style={styles.itemLabelStyle} />
            </View>

        </TouchableOpacity>
    );

    const renderSectionHeader = ({ section }: { section: DataSection }) => (
        <View style={{ backgroundColor: '#f4f4f4', padding: 4, height: 32 }}>
            <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
        </View>
    );

    // item 90
    const ITEM_HEIGHT = 90;

    //计算分组高度
    const pre = (num: number) => {
        let pre = 0;
        for (let i = 0; i < num; i++) {
            pre += ListData1[i].data.length;
        }
        return pre;
    };

    //计算总高度
    const _getHigth = () => {
        let nodeNum = 0;
        // console.log('计算高度', data.length);
        for (let i = ListData1.length - 1; i >= 0; i--) {
            nodeNum += ListData1[i].data.length * ITEM_HEIGHT + (32 + 8 * (ListData1[i].data.length - 1));
            // console.log(data[i].title+'------>',data[i].data.length)
        }
        return nodeNum;
    };

    // 这里是滚动到指定位置
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
                        <Text allowFontScaling={false}>{ListData1[index].title}</Text>
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

    // 这里是获取子元素的数量
    const num = (str: string) => {

        // 遍历排好序的数据，获取每一个字母的位置
        for (var i = 0; i < ListData1.length; i++) {
            if (str == ListData1[i].title) {
                console.log(str + ':' + ListData1[i].ListData1.length);
            }
        }
        // console.log(sum() , '一共有这些子元素');
        console.log(pre(1)); //13
    };
    // [{"addSource": 2, "createTime": 1714120075, "ex": "", "friendUser": {"appMangerLevel": 0, "createTime": 0, "ex": "", "faceURL": "", "globalRecvMsgOpt": 0, "nickname": "娜娜", "userID": "1548714649"}, "operatorUserID": "10000", "ownerUserID": "10000", "remark": ""}]
    const [peopData, setPeopleData] = React.useState(
        []
    );


    // 联系人列表
    const [ListData1, setListData] = React.useState([]);
    const friendList = async () => {
        console.log('你来到这个页面我加载了一次=================ß');
        
        const uId = await Storage.get('usr-uId');
        const params = {
            "userID": uId,
            "pagination": {
                "pageNumber": 1,
                "showNumber": 50
            }
        };
        const friendLists = await getFriendList(params);

        // console.log('参数--------->', uId, params);
        console.log('好友数据----------->', friendLists.data.friendsInfo);

        // setListData(friendLists.data.friendsInfo);
        // console.log('hahhah',ListData1);
        
        let groupArray = friendLists.data.friendsInfo.reduce((result: { [x: string]: { data: any[]; }; }, currentValue: { nickname: string; }) => {
            // console.log(result, '这个是结果', currentValue);
            // toUpperCase()
            currentValue.friendUser.nickname = currentValue.friendUser.nickname.toUpperCase();
            const firstLetter = PinyinUtil.getFirstLetter(currentValue.friendUser.nickname.charAt(0));

            // console.log(currentValue.friendUser.nickname, firstLetter, 'firstLetter');
            // console.log('result[firstLetter]---->',result[firstLetter]);
            
            // console.log(result[firstLetter],'一跳跳',firstLetter);
            // 当首字母没有的时候创建一个新的数组
            if (!result[firstLetter]) {
                result[firstLetter] = {
                    title: firstLetter,
                    data: []
                };
            }
          
            
            result[firstLetter].data.push(currentValue);
            // console.log(result[firstLetter].data, '-----------');
            // console.log(result, '这个是结果',currentValue);
            return result;
        }, {});
        // console.log(groupArray,'------===========');
        
        // 转换结果为数组形式
        let resultArray: DataSection[] = Object.values(groupArray);
        // console.log(resultArray,'====');
        
        // 根据对象的name属性进行升序排序
        resultArray.sort((a, b) => (a.title > b.title) ? 1 : -1);
        setListData(resultArray);
        console.log('给联系人的列表赋予数据============》');
        
        console.log(resultArray, 'zhe1===');
        // console.log(resultArray[0].data.length, 'zhe===');
        // console.log(ListData1, '最终结果---');
        // console.log(ListData1[0].data[0], '最终结果1---');
        // console.log('这是转化后的值', ListData1);
        // for (let i = 0; i < resultArray.length; i++) {
        //   resultArray[i].title.sort();
        //   console.log(resultArray[i].title.sort(),'---------');

        // }
    }
    console.log(ListData1, '最终结果99---',ListData1[0]);
    // console.log(peopData,'这个是对比',peopData[0].data);
    
    React.useEffect(() => {
        friendList();
        console.log('又来啦==========');
        
    },[]); // 只在组件挂载时调用一次
    
    return (
        <>
            {/* 这个是索引条 */}
            <AlphabetIndex sections={ListData1} onSectionSelect={handleSectionSelect} />
            <ScrollView style={{ flex: 1, marginTop: 10 }}>
                <TouchableOpacity activeOpacity={0.9} onPress={() => navigate("MyGroup")}>
                    <View style={styles.headGroup}>
                        <View style={styles.iconHead}>
                            <Image style={styles.headImg} source={{ uri: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/wdqz.png' }} />
                        </View>
                        <View style={styles.bodyContent}>
                            <Text style={styles.conText}>
                                我的聊天室
                            </Text>
                        </View>
                        <View style={styles.rightIcon}>
                            <Feather name="chevron-right" size={20} color="#999" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} onPress={() => { navigate('MyCommunity') }}>
                    <View style={styles.headGroup}>
                        <View style={styles.iconHead}>
                            <Image style={styles.headImg} source={{ uri: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/wdsq.png' }} />
                        </View>
                        <View style={styles.bodyContent}>
                            <Text style={styles.conText}>
                                我的社区
                            </Text>
                        </View>
                        <View style={styles.rightIcon}>
                            <Feather name="chevron-right" size={20} color="#999" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} onPress={() => navigate('NewChatRoom')}>
                    <View style={styles.headGroup}>
                        <View style={styles.iconHead}>
                            <Image style={styles.headImg} source={{ uri: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/xdql.png' }} />
                        </View>
                        <View style={styles.bodyContent}>
                            <Text style={styles.conText}>
                                新的聊天室
                            </Text>
                        </View>
                        <View style={styles.rightIcon}>
                            <Feather name="chevron-right" size={20} color="#999" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} onPress={() => navigate('Apply')}>
                    <View style={styles.headGroup}>
                        <View style={styles.iconHead}>
                            <Image style={styles.headImg} source={{ uri: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/xdhy.png' }} />
                        </View>
                        <View style={styles.bodyContent}>
                            <Text style={styles.conText}>
                                新的好友
                            </Text>
                        </View>
                        <View style={styles.rightIcon}>
                            <Feather name="chevron-right" size={20} color="#999" />
                        </View>
                    </View>
                </TouchableOpacity>
                <ScrollView>
                    <SectionList
                        ref={sectionListRef}
                        sections={ListData1}
                        // 这里
                        renderItem={renderItem}
                        renderSectionHeader={renderSectionHeader}
                        getItemLayout={_ItemLayout}
                        keyExtractor={(item, index) => {
                            return index.toString();
                        }}
                        stickySectionHeadersEnabled={true} />
                </ScrollView>
            </ScrollView>
        </>
    );
};

export default ListIndex;

const styles = StyleSheet.create({
    headGroup: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 3,
        position: 'relative'
    },
    iconHead: {
        width: 50,
        height: 50
    },
    headImg: {
        width: 50,
        height: 50
    },
    bodyContent: {
        marginLeft: 20
    },
    conText: {
        color: '#000',
        fontSize: 18,
        lineHeight: 50
    },
    rightIcon: {
        position: 'absolute',
        right: 20,
        top: 20
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
    listItem: {
        width: windowWidth,
        height: 80,
        marginBottom: 10,
        borderLeftWidth: 8,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderLeftColor:'#FABA3C'
    },
    itemLeft: {
        width: 90,
        height: 90,
        alignItems: 'center',
        paddingTop: 15,
        paddingHorizontal: 5,
    },
    itemRight: {
        width: windowWidth - 90,
        height: 90,
        paddingLeft: 5,
        paddingTop: 35,
    },
    avatarStyle: {
        width: 60,
        height: 60,
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 30,
    },
    itemName: {
        color: '#000',
    },
    itemLabelStyle: {
        height: 40,
        marginTop: -2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    labelText: {
        fontSize: 12,
        color: '#000',
        lineHeight: 15,
        marginLeft: 4,
    }
});

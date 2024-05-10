/*
 * @Author: xxs
 * @Date: 2023-12-20 17:44:35
 * @LastEditTime: 2024-01-23 18:43:55
 * @FilePath: \newpark_native\src\views\mine\components\service\MyOrderView.tsx
 * @Description: desc
 */
import React, { useEffect } from 'react';
import { Trans } from 'react-i18next';
import { Dimensions, FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { navigate } from '../../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

// const Quiz = ({ navigation, route }:any) => {
//     const { typeParams } = route.params;
// };


const species = [
    {
        index: 1,
        sort: '精选推荐'
    },
    {
        index: 2,
        sort: '图书文创'
    },
    {
        index: 3,
        sort: '家居百货'
    },
    {
        index: 4,
        sort: '视频饮料'
    },
    {
        index: 5,
        sort: '安心变美'
    },
    {
        index: 6,
        sort: '美妆护肤'
    },
    {
        index: 7,
        sort: '个护家清'
    },
    {
        index: 8,
        sort: '时尚穿搭'
    },
    {
        index: 9,
        sort: '数码家电'
    },
    {
        index: 10,
        sort: '珠宝玉石'
    },
]
const data1 = [
    {
        index: '1',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '全部订单小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！',
        time: '2024.6.12'
    },
    {
        index: '2',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '全部订单小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！',
        time: '2024.6.12'
    },
    {
        index: '3',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '全部订单小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '4',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '全部订单小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '5',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '全部订单小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '6',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '全部订单小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '7',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '全部订单小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
];
const data2 = [
    {
        index: '1',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '发布小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '2',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '发布小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '3',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '发布小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '4',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '发布小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '5',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '发布小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '6',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '发布小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '7',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '发布小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
];
const data3 = [
    {
        index: '1',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '购买小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '2',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '购买小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '3',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '购买小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '4',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '购买小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎!'
    },
    {
        index: '5',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '购买小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎!'
    },
    {
        index: '6',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '购买小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎!'
    },
    {
        index: '7',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '购买小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎!'
    },

]
const data4 = [
    {
        index: '1',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '出售小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '2',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '出售小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '3',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '出售小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '4',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '出售小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '5',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '出售小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '6',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '出售小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '7',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '出售小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
]
const data5 = [
    {
        index: '1',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '售后小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '2',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '售后小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '3',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '售后小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '4',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '售后小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '5',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '售后小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '6',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '售后小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '7',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '售后小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: '8',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '售后小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },

    {
        index: '9',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '售后小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },

    {
        index: '10',
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '售后小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },


]
interface listType {
    index: string,
    img: any,
    name: string,
    desc: string
};
const List = ({ data }: { data: listType }) => {
    return (
        <View style={styles.cards} >
            <Image source={data.img} style={styles.icon} accessibilityLabel='图片' alt="头像" />
            <View style={styles.rightList}>
                <Text style={[styles.h5, { maxWidth: 190 }]} ellipsizeMode={'tail'} numberOfLines={1}>名称 : {data.name}</Text>
                <View style={styles.desc}>
                    <Text style={styles.h6}>描述 : </Text>
                    <View style={{ marginLeft: 30 }}>
                        <Text style={[styles.h6, { maxWidth: 150 }]} ellipsizeMode={'tail'} numberOfLines={3}>{data.desc}</Text>
                    </View>
                </View>
            </View>
            {/* <View style={{ justifyContent:'space-evenly',height:80}}>
                <TouchableOpacity style={{width:90,backgroundColor:'#0089FB',paddingVertical:5}} onPress={() => navigate('OrderDetails',{item:data})}>
                    <Text style={{color:'#fff',textAlign:'center'}}>商品详情</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('DetailsRoute',{item:data})} style={{width:90,backgroundColor:'#FF7B34',paddingVertical:5}}>
                    <Text style={{color:'#fff',textAlign:'center'}}>再次购买</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}
const MyOrderView = ({ route }: any) => {
    // 点击侧边栏
    const [sideSel, setSideSel] = React.useState(1);
    const Sort = ({ item }: { item: any }) => (
        <TouchableOpacity style={styles.celan} onPress={() => setSideSel(item.index)}>
            <Text style={[{ fontSize: 16, color: '#000' }, sideSel == item.index ? { fontWeight: 'bold' } : {}]}>{item.sort}</Text>
            <View style={sideSel == item.index ? { borderBottomWidth: 4, borderColor: '#FFB300', width: 60, marginTop: 5 } : {}}></View>
        </TouchableOpacity>
    );
    const [typeVal, onTypePress] = React.useState('type1')
    // const {route}:any = this.props
    const { type } = route.params
    useEffect(() => {
        // 触发事件
        onTypePress(type)
    }, []);
    const renderItem = ({ item }: { item: listType }) => (
        <List data={item} />
    );
    return (
        <View style={styles.parentView}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('MineStacker')} />
                <Text allowFontScaling={false} style={styles.headerText}>
                    <Trans>navigationBar.title6</Trans>
                </Text>
            </Appbar.Header>
            <View style={styles.typeView}>
                <TouchableOpacity style={typeVal == 'type1' ? styles.typeItem : null} onPress={() => onTypePress('type1')}>
                    <Text allowFontScaling={false} style={[styles.typeText, typeVal == 'type1' ? styles.typeTextSelected : null]}>全部订单</Text>
                </TouchableOpacity>
                <TouchableOpacity style={typeVal == 'type2' ? styles.typeItem : null} onPress={() => onTypePress('type2')}>
                    <Text allowFontScaling={false} style={[styles.typeText, typeVal == 'type2' ? styles.typeTextSelected : null]}>发布</Text>
                </TouchableOpacity>
                <TouchableOpacity style={typeVal == 'type3' ? styles.typeItem : null} onPress={() => onTypePress('type3')}>
                    <Text allowFontScaling={false} style={[styles.typeText, typeVal == 'type3' ? styles.typeTextSelected : null]}>购买</Text>
                </TouchableOpacity>
                <TouchableOpacity style={typeVal == 'type4' ? styles.typeItem : null} onPress={() => onTypePress('type4')}>
                    <Text allowFontScaling={false} style={[styles.typeText, typeVal == 'type4' ? styles.typeTextSelected : null]}>出售</Text>
                </TouchableOpacity>
                <TouchableOpacity style={typeVal == 'type5' ? styles.typeItem : null} onPress={() => onTypePress('type5')}>
                    <Text allowFontScaling={false} style={[styles.typeText, typeVal == 'type5' ? styles.typeTextSelected : null]}>售后</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row'}}>
                <ScrollView style={{ height: windowHeight, paddingLeft: 12,backgroundColor:'aqua' }} stickyHeaderHiddenOnScroll={true}>
                    <FlatList
                        data={species}
                        renderItem={({ item }) => <Sort item={item} />}
                        keyExtractor={(item) => item.index.toString()}
                        style={{width:'20%'}}
                    />
                </ScrollView>
                <View style={{ width: windowWidth - 120 }}>
                    <View style={typeVal == 'type1' ? { marginBottom: 120 } : { display: 'none' }}>
                        <FlatList data={data1}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.index}>

                        </FlatList>
                    </View>
                    <View style={typeVal == 'type2' ? { marginBottom: 120 } : { display: 'none' }}>
                        <FlatList data={data2}
                            renderItem={renderItem}
                        // keyExtractor={(item) => item.index}
                        >
                        </FlatList>
                    </View>
                    <View style={typeVal == 'type3' ? { marginBottom: 120 } : { display: 'none' }}>
                        <FlatList data={data3}
                            renderItem={renderItem}
                        // keyExtractor={(item) => item.index}
                        >
                        </FlatList>
                    </View>
                    <ScrollView style={typeVal == 'type4' ? { marginBottom: 120 } : { display: 'none' }}>
                        <FlatList data={data4}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.index.toString()}
                        >
                        </FlatList>
                    </ScrollView>
                    <ScrollView style={typeVal == 'type5' ? { marginBottom: 120 } : { display: 'none' }}>

                        <FlatList
                            data={data5}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.index.toString()}
                        >
                        </FlatList>

                    </ScrollView>
                </View>
            </View>
        </View>
    )
}



export default MyOrderView;

const styles = StyleSheet.create({
    parentView: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#FFF'
    },
    headerStyle: {
        width: windowWidth,
        height: 45,
        backgroundColor: '#ffb700',
    },
    headerText: {
        width: '80%',
        fontSize: 17,
        color: '#FFF',
        lineHeight: 45,
        textAlign: 'center',
    },
    typeView: {
        width: '100%',
        height: 45,
        paddingTop: 3,
        paddingHorizontal: 26,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    typeItem: {
        ...Platform.select({
            ios: {
                borderColor: '#faba3c',
                borderBottomWidth: 2
            }
        })
    },
    typeText: {
        height: 40,
        color: '#000',
        fontSize: 15,
        lineHeight: 45,
        textAlign: 'center',
    },
    typeTextSelected: {
        color: '#6a1b9a',
        borderColor: '#faba3c',
        borderBottomWidth: 2
    },
    icon: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 6
    },
    cards: {
        width: '90%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 0,
        paddingVertical: 12,
        alignItems: 'center',
        ...Platform.select({
            ios: {
                marginBottom: 14,
                shadowColor: '#DDD', //设置阴影色
                shadowOffset: { width: 0, height: 3 }, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
                shadowOpacity: 1,
                shadowRadius: 3.5, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
            },
            android: {
                elevation: 6,
                marginBottom: 12,
            },
        })
    },
    h5: {
        color: 'black',
        fontSize: 16
    },
    h6: {
        color: '#666',
        fontSize: 14
    },
    desc: {
        marginTop: 8,
        width: 190,
        flexWrap: 'wrap'
    },
    rightList: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    celan: {
        marginVertical: 10,
        textAlign: 'center',
        justifyContent: 'center'
    }
}
)
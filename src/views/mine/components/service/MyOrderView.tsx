/*
 * @Author: xxs
 * @Date: 2023-12-20 17:44:35
 * @LastEditTime: 2024-01-23 18:30:57
 * @FilePath: \newpark_native\src\views\mine\components\service\MyOrderView.tsx
 * @Description: desc
 */
import React, { useEffect } from 'react';
import { Trans } from 'react-i18next';
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { navigate } from '../../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

// const Quiz = ({ navigation, route }:any) => {
//     const { typeParams } = route.params;
// };
const data1 = [
    {
        index: 1,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '全部订单小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！',
        time:'2024.6.12'
    },
    {
        index: 2,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '全部订单小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！',
        time:'2024.6.12'
    },
    {
        index: 3,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '全部订单小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: 4,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '全部订单小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
];
const data2 = [
    {
        index: 1,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '待付款小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: 2,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '待付款小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: 3,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '待付款小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: 4,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '待付款小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
];
const data3 = [
    {
        index: 1,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '待收货小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: 2,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '待收货小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: 3,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '待收货小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: 4,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '待收货小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎!'
    },

]
const data4 = [
    {
        index: 1,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '待评价小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: 2,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '待评价小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: 3,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '待评价小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: 4,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '待评价小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
]
const data5 = [
    {
        index: 1,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '已取消小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: 2,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '已取消小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: 3,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '已取消小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: 4,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '已取消小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },
    {
        index: 5,
        img: require('../../../../assets/images/tup/xy1.png'),
        name: '已取消小黄鸭',
        desc: '送你一只小黄鸭，洗澡完了嘎嘎嘎！'
    },

]
interface listType {
    index:number,
    img:any,
    name:string,
    desc:string
}
const List = ({ data }:{data:listType}) => {
    return (
        <TouchableOpacity style={styles.cards}>
            <Image source={data.img} style={styles.icon} />
            <View style={styles.rightList}>
                <Text style={styles.h5}>名称 : {data.name}</Text>
                <View style={styles.desc}>
                    <Text style={styles.h6}>描述 : </Text>
                   <View style={{marginLeft:40}}>
                        <Text style={styles.h6}>{data.desc}</Text>
                   </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const MyOrderView = ({ route }: any) => {
    const [typeVal, onTypePress] = React.useState('type1')
    // const {route}:any = this.props
    const { type } = route.params
    useEffect(() => {
        // 触发事件
        onTypePress(type)
    }, []);
    const renderItem = ({ item }:{item:listType}) => (
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
                    <Text allowFontScaling={false} style={[styles.typeText, typeVal == 'type2' ? styles.typeTextSelected : null]}>待付款</Text>
                </TouchableOpacity>
                <TouchableOpacity style={typeVal == 'type3' ? styles.typeItem : null} onPress={() => onTypePress('type3')}>
                    <Text allowFontScaling={false} style={[styles.typeText, typeVal == 'type3' ? styles.typeTextSelected : null]}>待收货</Text>
                </TouchableOpacity>
                <TouchableOpacity style={typeVal == 'type4' ? styles.typeItem : null} onPress={() => onTypePress('type4')}>
                    <Text allowFontScaling={false} style={[styles.typeText, typeVal == 'type4' ? styles.typeTextSelected : null]}>待评价</Text>
                </TouchableOpacity>
                <TouchableOpacity style={typeVal == 'type5' ? styles.typeItem : null} onPress={() => onTypePress('type5')}>
                    <Text allowFontScaling={false} style={[styles.typeText, typeVal == 'type5' ? styles.typeTextSelected : null]}>已取消</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={typeVal == 'type1' ? null : { display: 'none' }}>
                    <FlatList data={data1}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.desc}>
                    </FlatList>
                </View>
                <View style={typeVal == 'type2' ? null : { display: 'none' }}>
                <FlatList data={data2}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.desc}>
                </FlatList>
                </View>
                <View style={typeVal == 'type3' ? null : { display: 'none' }}>
                <FlatList data={data3}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.desc}>
                </FlatList>
                </View>
                <View style={typeVal == 'type4' ? null : { display: 'none' }}>
                <FlatList data={data4}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.desc}>
                </FlatList>
                </View>
                <View style={typeVal == 'type5' ? null : { display: 'none' }}>
                <FlatList data={data5}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.desc}>
                </FlatList>
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
        borderWidth:1,
        borderColor:'#ccc',
        padding:6
    },
    cards: {
        width: windowWidth,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingVertical: 12,
        alignItems:'center',
        ...Platform.select({
            ios: {
                marginBottom: 14,
                shadowColor: '#DDD', //设置阴影色
                shadowOffset: {width: 0, height: 3}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
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
    h6:{
        color:'#666',
        fontSize:14
    },
    desc:{
        marginTop:8,
        width:160,
        flexWrap:'nowrap'
    },
    rightList:{
        width:'60%',
        justifyContent:'center'
    }
})
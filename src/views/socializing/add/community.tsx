/**
 * 代码描述: 加入社区
 * 作者:zhn
 * 修改时间:2024/2/23 16:10:11
 */
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { Button, Image, View, TouchableOpacity, Text, StyleSheet, Dimensions, Modal, TextInput, Platform, ScrollView } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { navigate } from '../../../config/routs/NavigationContainer';
import { Icon, MD3Colors, Avatar, Card, IconButton } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradinet from 'react-native-linear-gradient';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const wxh = 'xxs096788';
const listData = [
    
    {
        index: 1,
        title: '一起学java',
        num: '150',
        label: 'n个牛友在xxx',
        img: require('../../../assets/images/alimom/R-C.jpg'),
    },
    {
        index: 2,
        title: '一起学java',
        num: '150',
        label: 'n个牛友在xxx',
        img: require('../../../assets/images/alimom/R-C.jpg'),
    },
    {
        index: 3,
        title: '一起学java',
        num: '150',
        label: 'n个牛友在xxx',
        img: require('../../../assets/images/alimom/R-C.jpg'),
    },
    {
        index: 4,
        title: '一起学java',
        num: '150',
        label: 'n个牛友在xxx',
        img: require('../../../assets/images/alimom/R-C.jpg'),
    },
    {
        index: 5,
        title: '一起学java',
        num: '150',
        label: 'n个牛友在xxx',
        img: require('../../../assets/images/alimom/R-C.jpg'),
    },
    {
        index: 6,
        title: '一起学java',
        num: '150',
        label: 'n个牛友在xxx',
        img: require('../../../assets/images/alimom/R-C.jpg'),
    },
];
const Addcomm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [value, onChangeText] = React.useState('');
    return (
        <View>
            <View style={styles.searchGrid}>
                <Searchbar
                    placeholder="账号/手机号"
                    onChangeText={onChangeText}
                    value={value}
                    style={styles.searchBox}
                    inputStyle={{ textAlign: 'center', marginTop: -6 }}
                />
            </View>


            {/* 这里是社区卡片 */}
            <View style={styles.listStyle}>
                <ScrollView style={styles.scrollStyle} alwaysBounceVertical={true}>
                    {listData.map(item => {
                        return (
                            <View style={styles.itemView} key={item.index}>
                                <View style={styles.itemHeard}>
                                    <Text allowFontScaling={false} style={styles.itemHeardLeft}>相关社区</Text>
                                    <TouchableOpacity>
                                        <Text allowFontScaling={false} style={styles.itemHeardRight}>
                                            查看更多
                                            <Entypo
                                                name="chevron-thin-right"
                                                color="#888"
                                                size={15}
                                            />
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={styles.itemModel}>
                                    <View style={styles.itemModelLeft}>
                                        <Image
                                            style={styles.itemImage}
                                            source={require('../../../assets/images/tup/ly.png')}
                                        />
                                    </View>
                                    <View style={styles.itemModelRight}>
                                        <View style={styles.itemModelRightTop}>
                                            <Text allowFontScaling={false} style={styles.itemTopText1}>让花成花</Text>
                                            <Image
                                                style={styles.itemModelIcon}
                                                source={require('../../../assets/images/hotfuckicon.png')}
                                            />
                                            <Text allowFontScaling={false} style={styles.itemTopText2}>热度1501</Text>
                                        </View>
                                        <View style={styles.itemModelRightBottom}>
                                            <View style={styles.itemModelBottom}>
                                                <LinearGradinet
                                                    colors={[
                                                        'rgba(155, 218, 185,0.9)',
                                                        'rgba(250, 235, 215,0)',
                                                    ]}
                                                    start={{ x: 0, y: 0 }}
                                                    end={{ x: 0, y: 1 }}
                                                    style={styles.itemModelbottomBg}>
                                                    <Text allowFontScaling={false} style={styles.itemModelbottomText}>
                                                        n个牛友在xxx
                                                    </Text>
                                                </LinearGradinet>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    searchGrid: {
        width: windowWidth,
        height: 60,
        paddingHorizontal: 10,
    },
    searchBox: {
        width: windowWidth - 20,
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    searchText: {
        lineHeight: 40,
        fontSize: 16,
        color: '#ccc',
        marginLeft: 3
    },
    heng: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    search: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
    },
    icon: {
        width: 20,
        height: 20
    },
    listStyle: {
        width: windowWidth,
        ...Platform.select({
            ios: {
                height: windowHeight - 200,
            },
            android: {
                height: windowHeight - 120,
            }
        }),
        height: windowHeight
    },
    itemModel: {
        width: '94%',
        height: 95,
        marginHorizontal: '3%',
        backgroundColor: '#f9faff',
        borderTopLeftRadius: 14,
        borderBottomLeftRadius: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemModelLeft: {
        width: 95,
        height: 95,
        borderRadius: 14,
    },
    itemModelRight: {
        width: '100%',
        height: 95,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    scrollStyle: {
        flex: 1,
        // marginBottom:120
    },
    itemView: {
        width: windowWidth - 10,
        height: 160,
        marginHorizontal: 5,
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 14,
        backgroundColor: '#FFF',
        borderWidth: 0.5,
        borderColor: '#ddd',
        ...Platform.select({
            ios: {
                shadowColor: '#999', //设置阴影色
                shadowOffset: { width: 0, height: 0 }, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
                shadowOpacity: 1,
                shadowRadius: 4.5, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
            },
            android: {
                elevation: 6,
            },
        }),
    },
    itemHeard: {
        width: '100%',
        height: 45,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemHeardLeft: {
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 45,
        color: '#000',
    },
    itemHeardRight: {
        color: '#888',
        lineHeight: 45,
    },
    itemImage: {
        width: 95,
        height: 95,
        borderRadius: 14,
    },
    itemModelRightTop: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    itemTopText1: {
        width: 100,
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 1,
        color: '#000',
    },
    itemModelIcon: {
        width: 22,
        height: 22,
    },
    itemTopText2: {
        width: 70,
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 22,
        color: '#FCD4C4',
    },
    itemModelRightBottom: {
        marginTop: 20,
    },
    itemModelBottom: {
        width: 120,
        height: 30,
        alignItems: 'center',
        lineHeight: 26,
        paddingLeft: 18,
    },
    itemModelbottomText: {
        width: 120,
        height: 30,
        color: '#333',
        textAlign: 'center',
        lineHeight: 26,
    },
    itemModelbottomBg: {
        borderRadius: 10,
    },
})
export default Addcomm;
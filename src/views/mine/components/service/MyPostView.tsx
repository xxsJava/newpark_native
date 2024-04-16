import React from 'react';
import { Trans } from 'react-i18next';
import { Dimensions, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { navigate } from '../../../../config/routs/NavigationContainer';
import {postsOneApi} from '../../../../api/sys/post';

const listData = [{
    index: 1,
    title: '我是一个标题111',
    content: '部分内容',
    name: '咖啡牛',
    time: '2023年12月11日'
}, {
    index: 2,
    title: '我是一个标题',
    content: '部分内容',
    name: '咖啡牛',
    time: '2023年12月11日'
}, {
    index: 3,
    title: '我是一个标题',
    content: '部分内容',
    name: '咖啡牛',
    time: '2023年12月11日'
}, {
    index: 4,
    title: '我是一个标题',
    content: '部分内容',
    name: '咖啡牛',
    time: '2023年12月11日'
}, {
    index: 5,
    title: '我是一个标题',
    content: '部分内容',
    name: '咖啡牛',
    time: '2023年12月11日'
}, {
    index: 6,
    title: '我是一个标题',
    content: '部分内容',
    name: '咖啡牛',
    time: '2023年12月11日'
}, {
    index: 7,
    title: '我是一个标题',
    content: '部分内容',
    name: '咖啡牛',
    time: '2023年12月11日'
}]

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const MyPostView = () => {
    const [typeVal, onTypePress] = React.useState('type1')
    return (
        <View style={styles.parentView}>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('MineStacker')} />
                <Text allowFontScaling={false} style={styles.headerText}>
                    <Trans>navigationBar.title8</Trans>
                </Text>
            </Appbar.Header>
            <View style={styles.typeView}>
                <TouchableOpacity style={typeVal == 'type1' ? styles.typeItem : null} onPress={() => onTypePress('type1')}>
                    <Text allowFontScaling={false} style={[styles.typeText, typeVal == 'type1' ? styles.typeTextSelected : null]}>已通过</Text>
                </TouchableOpacity>
                <TouchableOpacity style={typeVal == 'type2' ? styles.typeItem : null} onPress={() => onTypePress('type2')}>
                    <Text allowFontScaling={false} style={[styles.typeText, typeVal == 'type2' ? styles.typeTextSelected : null]}>待审核</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.scrollView}>
                <ScrollView style={styles.scrollStyle}>
                    <View style={styles.listStyle}>
                        {listData.map(item => {
                            return (
                                <View style={styles.itemStyle} key={item.index}>
                                    <View style={styles.itemLeft}></View>
                                    <View style={styles.itemRight}>
                                        <Text allowFontScaling={false} style={styles.itemTitle}>{item.title}</Text>
                                        <Text allowFontScaling={false} style={styles.itemText}>{item.content}</Text>
                                        <View style={styles.itemBottom}>
                                            <Text allowFontScaling={false} style={styles.itemBottomText}>{item.name}</Text>
                                            <Text allowFontScaling={false} style={styles.itemBottomText}>{item.time}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </View>
    )

}
export default MyPostView;

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
        paddingHorizontal: 35,
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
        width: 48,
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
    scrollView: {
        width: windowWidth,
        height: windowHeight - 80,
    },
    scrollStyle: {
        flex: 1,
        paddingTop: 10,
        marginTop: 5
    },
    listStyle: {
        width: windowWidth,
        height: 'auto',
        ...Platform.select({
            ios: {
                paddingBottom: 80
            },
            android: {
                paddingBottom: 30
            }
        })
    },
    itemStyle: {
        width: windowWidth - 24,
        height: 120,
        marginHorizontal: 12,
        marginTop: 6,
        borderRadius: 12,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        ...Platform.select({
            ios: {
                marginBottom: 6,
                shadowColor: '#ccc',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 3.5,
            },
            android: {
                elevation: 7,
                marginBottom: 5,
            }
        })
    },
    itemLeft: {
        width: '30%',
        height: '100%',
        borderRadius: 12,
        backgroundColor: '#6a1b9a'
    },
    itemRight: {
        width: '70%',
        height: '100%',
        paddingHorizontal: 15,
    },
    itemTitle: {
        height: 34,
        fontSize: 18,
        color: '#000',
        fontWeight: '600',
        lineHeight: 34
    },
    itemText: {
        height: 55,
        fontSize: 15,
        color: '#555',
        lineHeight: 45
    },
    itemBottom: {
        height: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemBottomText: {
        fontSize: 14,
        color: '#999',
        lineHeight: 30
    }
})
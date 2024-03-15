import { Toast, useToast } from '@gluestack-ui/themed';
import * as React from 'react';
import { useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    StatusBar,
    ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const windowWidth = Dimensions.get('window').width;
const About = () => {
    // const [isVisible, setIsVisible] = useState(false);
    return (
        <SafeAreaView>
            <View>
                <Image style={styles.bjt} source={require('../../../../assets/images/tup/bgt.jpg')} accessibilityLabel='图片'></Image>
                <View style={styles.zhong}>
                    <Text style={styles.tit}>恭喜你发现这款宝藏软件!</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    {/* slideInLeft */}
                    <View style={styles.container}>
                        <Animatable.View animation='slideInLeft' style={styles.dialog}>
                            <Image
                                style={styles.ava}
                                source={require('../../../../assets/images/tup/xn.png')}
                                accessibilityLabel='图片'
                            />
                            <View style={styles.ans}>
                                <Text style={styles.text}>那这款软件有什么作用捏？</Text>
                            </View>
                        </Animatable.View>
                        <Animatable.View animation='slideInRight' style={styles.dialog}>
                            <View style={styles.ans1}>
                                <Text style={styles.text1}>这是新园建业科技有限公司推出，为方便各个高校大学生高品质生活推出的公益软件！</Text>
                            </View>
                            <Image
                                style={styles.ava}
                                source={require('../../../../assets/images/logo.png')}
                                accessibilityLabel='图片'
                            />
                        </Animatable.View>

                        <Animatable.View animation='slideInLeft' style={styles.dialog}>
                            <Image
                                style={styles.ava}
                                source={require('../../../../assets/images/tup/l1.png')}
                                accessibilityLabel='图片'
                            />
                            <View style={styles.ans}>
                                <Text style={styles.text}>我能用它干什么？</Text>
                            </View>
                        </Animatable.View>
                        <Animatable.View animation='slideInRight' style={styles.dialog}>
                            <View style={styles.ans1}>
                                <Text style={styles.text1}>我们有校园跑腿功能，可以避免辛辛苦苦等了好久的外卖被偷吃侠带走，同样可以实现零花钱自由和节省自己时间做想做的事；提供了二手交易市场，让你可以在本校以及更广大的平台实现你的创业梦想；‘秀才不出门，而知天下事’，我们有新园市场，你可以吃到各地的瓜，认识更多地方的美女，只要有共同话题，就可以一起组队聊天，找到志同道合的小伙伴等等，除此之外，还有更多的隐藏功能待您发现！</Text>
                            </View>
                            <Image
                                style={styles.ava}
                                source={require('../../../../assets/images/logo.png')}
                                accessibilityLabel='图片'
                            />
                        </Animatable.View>
                    </View>

                    {/* slideInRight */}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
};

export default About;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
        backgroundColor: '#F2F2F2',
        padding: 12
    },
    scrollView: {
        marginHorizontal: 12
    },
    ava: {
        width: 40,
        height: 40,
    },
    bjt: {
        width: windowWidth,
        height: 200,
        marginBottom: 4
    },
    dialog: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    zhong: {
        display: 'flex',
        justifyContent: 'center',
        width: windowWidth,
        flexDirection: 'row'
    },
    tit: {
        fontSize: 19,
        color: '#ECB32C'
    },
    text: {
        color: '#E96556',
        fontSize: 14,
        margin: 4,
        fontWeight: 'bold'
    },
    text1: {
        color: '#000',
        fontSize: 12,
        margin: 4,
        width: 240,
        lineHeight: 20
    },
    ans: {
        borderTopColor: '#ccc',
        borderBottomColor: '#ccc',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginLeft: 20,
    },
    ans1: {
        borderTopColor: '#ccc',
        borderBottomColor: '#ccc',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginRight: 20,
        marginVertical: 30,
        paddingHorizontal: 12
    }
});

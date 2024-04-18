import * as React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native-animatable';
// import Text from '../text';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ReqApp = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const listPeople = [
        {
            avatar: require('../../../assets/images/tup/l1.png'),
            name: '联系人1',
            agree: true,
            index: 0,
            validation:'hello'
        },
        {
            avatar: require('../../../assets/images/tup/l2.png'),
            name: '联系人2',
            agree: false,
            index: 1,
            validation:''
        },
        {
            avatar: require('../../../assets/images/tup/ppy.png'),
            name: '联系人3',
            agree: false,
            index: 2,
            validation:'加个好友吧'
        }
    ]
    return (

        <View style={{ paddingHorizontal: 20 }}>
            <View>
                <View style={{ marginVertical: 20, backgroundColor: '#F8F8F8', padding: 10 }}>
                    <Text style={styles.newReq}>新的好友请求</Text>
                </View>
                <View>
                    {
                        listPeople.map(item => {
                            return (
                                <TouchableOpacity key={item.index} style={{ backgroundColor: '#fff', padding: 7, borderBottomWidth: 1, borderColor: '#ccc', }}>
                                    <View style={styles.heng}>
                                        <View >
                                            <Image
                                                style={[styles.tinyLogo, { width: windowWidth * 0.14 }]}
                                                source={item.avatar}
                                                accessibilityLabel='图片'
                                                alt="头像"
                                            />
                                        </View>
                                        <View style={[styles.heng, { width: windowWidth * 0.67, justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center' }]}>
                                            <View>
                                                <Text style={styles.name}>{item.name}</Text>
                                                <Text>申请添加您为好友</Text>
                                            </View>
                                            <View style={styles.heng}>
                                                <TouchableOpacity style={styles.boxAgg} onPress={() => { console.log(item.index + '点击了' + '同意') }}>
                                                    <Text style={styles.textAgg}>同意</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={styles.boxRef} onPress={() => { console.log(item.index + '点击了' + '拒绝') }}>
                                                    <Text style={styles.textRef}>拒绝</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </View>
                                    <View style={[{marginLeft:25,marginTop:8},styles.heng]}>
                                        <Text style={{fontSize:14}}>验证消息:</Text>
                                        <Text style={{color:'#000'}}> {item.validation}</Text>
                                    </View>

                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    search: {
        marginTop: 10,
        height: 43,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    searchinput: {
        marginTop: -5,
        color: '#000'
    },
    newReq: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    boxAgg: {
        borderWidth: 4,
        borderColor: 'green',
        width: 50,
        height: 30,
        marginRight: 8
    },
    textAgg: {
        textAlign: 'center',
        color: 'green',
        lineHeight: 25,
        fontSize: 15,
        fontWeight: 'bold'
    },
    boxRef: {
        borderWidth: 4,
        borderColor: 'red',
        width: 50,
        height: 30,
    },
    textRef: {
        textAlign: 'center',
        color: 'red',
        lineHeight: 25,
        fontSize: 15,
        fontWeight: 'bold'
    },
    name: {
        color: 'black',
        lineHeight: 20,
        fontSize: 15
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginBottom: 10
    },
    heng: {
        display: 'flex',
        flexDirection: 'row'
    }
})
export default ReqApp;

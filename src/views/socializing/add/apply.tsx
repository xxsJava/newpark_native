import * as React from 'react';
import { StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { View } from 'react-native-animatable';
import { Searchbar } from 'react-native-paper';
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
            index: 0
        },
        {
            avatar: require('../../../assets/images/tup/l2.png'),
            name: '联系人2',
            agree: false,
            index: 1
        },
        {
            avatar: require('../../../assets/images/tup/ppy.png'),
            name: '联系人3',
            agree: false,
            index: 2
        }
    ]
    return (

        <View style={{ paddingHorizontal: 20 }}>
            <Searchbar
                placeholder="通过用户ID号搜索添加"
                onChangeText={setSearchQuery}
                value={searchQuery}
                style={styles.search}
                inputStyle={styles.searchinput}
            />
            <View>
                <View style={{ marginVertical: 20, backgroundColor: '#F8F8F8', padding: 10 }}>
                    <Text style={styles.newReq}>新的好友请求</Text>
                </View>
                <View>
                    {
                        listPeople.map(item => {
                            return (
                                <TouchableOpacity key={item.index} style={[styles.heng, { backgroundColor: '#fff', padding: 7 }]}>
                                    <View >
                                        <Image
                                            style={[styles.tinyLogo, { width: windowWidth * 0.14 }]}
                                            source={item.avatar}
                                            accessibilityLabel='图片'
                                            alt="头像"
                                        />
                                    </View>
                                    <View style={[styles.heng, { width: windowWidth * 0.67, borderBottomWidth: 1, borderColor: '#ccc', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center' }]}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <View style={styles.heng}>
                                            <TouchableOpacity style={styles.boxAgg} onPress={() => { console.log(item.index + '点击了' + '同意') }}>
                                                <Text style={styles.textAgg}>同意</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.boxRef} onPress={() => { console.log(item.index + '点击了' + '拒绝') }}>
                                                <Text style={styles.textRef}>拒绝</Text>
                                            </TouchableOpacity>
                                        </View>

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
        marginRight:8
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
        lineHeight: 35,
        fontSize: 20
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

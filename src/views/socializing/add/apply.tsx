import * as React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native-animatable';
import { navigate } from '../../../config/routs/NavigationContainer';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ReqApp = (item:any) => {
    // const [status,setStatus] = React.useState('无')
    const res = item.route.params;
    console.log(res,'新的好友请求传过来的');

    if(item){
        // setStatus('通过')
    }

    const [searchQuery, setSearchQuery] = React.useState('');
    const listPeople = [
        {
            avatar: require('../../../assets/images/tup/l1.png'),
            name: '联系人1',
            agree: true,
            index: 0,
            validation: 'hello'
        },
        {
            avatar: require('../../../assets/images/tup/l2.png'),
            name: '联系人2',
            agree: false,
            index: 1,
            validation: ''
        },
        {
            avatar: require('../../../assets/images/tup/ppy.png'),
            name: '联系人3',
            agree: false,
            index: 2,
            validation: '加个好友吧'
        }
    ];
    console.log(item.route,'====');
    
    return (
        <View style={{ width: windowWidth, height: windowHeight }}>
            <View style={{ backgroundColor: '#fff' }}>
                <View style={{ marginVertical: 20, backgroundColor: '#F8F8F8', padding: 10 }}>
                    <Text style={styles.newReq}>新的好友请求</Text>
                </View>
                <View>
                    {
                        listPeople.map(item => {
                            // const [res,setRes] = React.useState(undefined);
                            return (
                                <TouchableOpacity key={item.index} style={{ backgroundColor: '#fff', padding: 7, borderBottomWidth: 1, borderColor: '#ccc', }}>
                                    <View style={styles.heng}>
                                        <View >
                                            <Image
                                                style={styles.tinyLogo}
                                                source={item.avatar}
                                                accessibilityLabel='图片'
                                                alt="头像"
                                            />
                                        </View>
                                        <View style={[styles.heng, { width: windowWidth * 0.67, justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center' }]}>
                                            <View>
                                                <Text style={styles.name}>{item.name}</Text>
                                                <Text style={{ color: '#000',fontSize:12 }}> {item.validation}</Text>
                                            </View>
                                            <View style={styles.heng}>
                                                {/*  */}
                                                <TouchableOpacity  onPress={() => {navigate('NewApply',item)}}  style={res != '通过' && res != '拒绝' ? [styles.boxAgg,{borderWidth:1,borderColor:'#4C8ACD',borderRadius:3}]:{display:'none'}}>
                                                    <Text style={[styles.textAgg,{color:'#4C8ACD'}]}>接受</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity  onPress={() => {navigate('NewApply',item)}}  style={res == '通过'? [styles.boxAgg,{borderWidth:0}] : {display:'none'}}>
                                                    <Text style={styles.textAgg}>打招呼</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity  onPress={() => {navigate('NewApply',item)}} style={res == '拒绝'? [styles.boxAgg,{borderWidth:0}] : {display:'none'}}>
                                                    <Text style={[styles.textAgg,{color:'#999'}]}>未通过</Text>
                                                </TouchableOpacity>
                                            </View>
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
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 16
    },
    boxAgg: {
        borderWidth: 1,
        borderColor: '#4C8ACD',
        borderRadius:3
    },
    textAgg: {
        textAlign: 'center',
        color: '#333',
        lineHeight: 25,
        fontSize: 12,
        marginHorizontal:12,
        fontWeight:'bold'
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
        fontSize: 13,
        marginBottom:3
    },
    tinyLogo: {
        width:windowWidth * 0.16,
        height: windowHeight * 0.05,
        marginBottom: 10,
        borderRadius:90
    },
    heng: {
        display: 'flex',
        flexDirection: 'row'
    }
})
export default ReqApp;

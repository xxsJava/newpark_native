import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appbar, Avatar, Icon } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { productApi } from '../../../../api/sys/Recommended/index';
import { navigate } from '../../../../config/routs/NavigationContainer';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const List = ({ item }: any) => (
    <View style={styles.commoditylist}>

        <TouchableOpacity
            style={styles.commodityItem}
            onPress={() => {
                navigate('DetailsRoute', { id: item.pid }); console.log('item在这里----', item);
            }}>
                <View style={styles.pcoverImg}>
                <Image style={styles.commodityImage} source={{ uri: item.pcover}} accessibilityLabel='图片' alt="网络不佳" />
                </View>
            
            <Text allowFontScaling={false} style={styles.commodityText}>{item.pname}</Text>
            <View style={styles.priceView}>
                <View style={styles.priceStyle}>
                    <Icon
                        size={22}
                        color="#fa3d3c"
                        source={require('../../../../assets/images/coins-icon.png')}
                    />
                    <Text allowFontScaling={false} style={styles.priceNum}>{item.pprice}</Text>
                </View>
                <Text allowFontScaling={false} style={styles.priceTime}>{item.times}</Text>
            </View>
            <View style={styles.publisherView}>
                <Avatar.Image
                    style={styles.publisherAvatar}
                    size={32}
                    source={{ uri: item.upath }}
                />
                <Text allowFontScaling={false} style={styles.publisherText}>{item.unikname}</Text>
            </View>
        </TouchableOpacity>
    </View>
)

const JiaoyiData = () => {
    const [kong, setKong] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [refreshing, setRefreshing] = useState(false);


    //   这个是上面选择数据排列方式的
    const [cx, setcx] = React.useState(false);
    const [alls, setAlls] = React.useState('quanguo');
    const [area, setArea] = React.useState('综合');
    const [cx2, setcx2] = React.useState(false);
    const [cx3, setcx3] = React.useState(false);

    useEffect(() => {
        // 初始化时加载初始数据
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const params1 = {
            pageNo: page,
            pageSize: 6,
            priceSort: cx2 ? 'DESC' : 'ASC',
            PStatus: 'FORSALE',
            timeSort: 'DESC',
        }
        const data1 = await productApi(params1);

        console.log(data1, '这个是');
        // setData(data1.data);
        if ((data1.data).length != 0) {
            setLoading(false);
            setPage(prevPage => prevPage + 1);
            setData(prevData => prevData.concat(data1.data));
            // for(var i = 0; i< data1.data)
            // var files = data1.data.pimgs;

        } else {
            setKong(true)
        }
    };

    const handleLoadMore = () => {
        if (!loading) {
            fetchData();
        }
    };
    const handleStart = async() => {
        setRefreshing(true);
        setPage(1);
       
        const params1 = {
            pageNo: page,
            pageSize: 6,
            priceSort: cx2 ? 'DESC' : 'ASC',
            PStatus: 'FORSALE',
            timeSort: cx3 ? 'DESC' : 'ASC',
        }
        const data1 = await productApi(params1);
        setData(data1.data);
        setRefreshing(false);
        console.log('这个是刷新下拉得到的数据',data);
        
    };
    // 价格按钮的
    const xrPrice = async () => {
        setPage(1);
        setcx2(!cx2);
        const params1 = {
            pageNo: page,
            pageSize: 6,
            priceSort: cx2 ? 'DESC' : 'ASC',
            PStatus: 'FORSALE',
            timeSort: cx3 ? 'DESC' : 'ASC',
        }
        const data1 = await productApi(params1);
        setData(data1.data)
        console.log(data1, '这个是');
        console.log(cx2);
    };
    // 新发布按钮的
    const xrTime = async () => {
        setPage(1);
        setcx3(!cx3);
        const params1 = {
            pageNo: page,
            pageSize: 6,
            priceSort: cx2 ? 'DESC' : 'ASC',
            PStatus: 'FORSALE',
            timeSort: cx3 ? 'DESC' : 'ASC',
        }
        const data1 = await productApi(params1);
        setData(data1.data)
        console.log(data1, '这个是');
        console.log(cx3);
    }
    const renderFooter = () => {
        return loading ? (kong ? <View style={{ marginVertical: 20 }}><Text style={{ textAlign: 'center', color: '#000', fontSize: 16 }}>没有数据了,快去添加吧....</Text></View> : <ActivityIndicator size="large" color="#0000ff" />) : null;
    };

    return (
        <>
            <Appbar.Header style={styles.headerStyle}>
                <Appbar.Action
                    icon={require('../../../../assets/images/chevron-left.png')}
                    onPress={() => navigate('HomeStacker')}
                />
                <Text allowFontScaling={false} style={styles.headerText}>交易圈</Text>
            </Appbar.Header>
            <View style={{ backgroundColor: '#fff', width: windowWidth, }}>
                <View style={{ width: '60%', justifyContent: 'space-between', flexDirection: 'row', marginLeft: 20, alignItems: 'center' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }} onPress={() => {
                        setcx(!cx); console.log(alls, '这个是地区');
                    }}
                        activeOpacity={0.9}
                    >
                        <Text allowFontScaling={false} style={styles.typeText}>{area}</Text>
                        <Entypo size={13} color="#000" name="chevron-thin-down" />
                        <View style={[styles.xlk, cx ? { display: 'flex' } : { display: 'none' }]}>
                            <TouchableOpacity onPress={() => {
                                setAlls('quanguo'); setArea('全国'); setcx(false); console.log(alls, '这个是选的范围');
                            }} style={styles.option} activeOpacity={0.9}>
                                <Text style={styles.h2}>全国</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setAlls('benxiao'); setArea('本校'); setcx(false); console.log(alls, '这个是选的范围');
                            }} style={styles.option} activeOpacity={0.9}>
                                <Text style={styles.h2}>本校</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        xrPrice()
                    }} style={{ flexDirection: 'row', margin: 12, alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 6 }}>价格</Text>
                        </View>
                        <View>
                            <Image source={require('../../../../assets/images/triangle-up.png')} style={{ width: 10, height: 10 }}></Image>
                            <Image source={require('../../../../assets/images/triangle-down.png')} style={{ width: 10, height: 10 }}></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        xrTime()
                    }} style={{ flexDirection: 'row', margin: 12 }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 6 }}>新发布</Text>
                        </View>
                        <View>
                            <Image source={require('../../../../assets/images/triangle-up.png')} style={{ width: 10, height: 10 }}></Image>
                            <Image source={require('../../../../assets/images/triangle-down.png')} style={{ width: 10, height: 10 }}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.scrollView}>
                <FlatList
                    style={{ zIndex: -2}}
                    numColumns={2}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <List item={item} />}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={renderFooter}
                    onRefresh={handleStart}
                    refreshing={refreshing}
                    ListEmptyComponent={
                        <View style={styles.zhong}>
                            <Text style={{ fontSize: 18, color: 'black', marginBottom: 20 }}>暂时没有商品.....</Text>
                            <Text>去其他地方看看吧！</Text>
                        </View>
                    }
                />
            </View>
        </>
    );
};

export default JiaoyiData;

const styles = StyleSheet.create({
    zhong: {
        width: windowWidth,
        height: windowHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    commoditylist: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        backgroundColor:'#fff',
        // borderWidth:0.4
    },
    commodityItem: {
        width: '100%',
        // height: 320,
        marginBottom: 15,
        paddingHorizontal: '2%',
    },
    commodityImage: {
        width: '100%',
        height: '100%',
        marginHorizontal: '3%',
        borderRadius: 15,
    },pcoverImg:{
        width: '94%',
        height: 180,
    },
    commodityText: {
        width: '84%',
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: '8%',
    },
    priceView: {
        width: '92%',
        marginHorizontal: '4%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    priceStyle: {
        paddingTop: 10,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    priceNum: {
        fontSize: 19,
        fontWeight: '600',
        color: '#fa3d3c',
        lineHeight: 20,
    },
    priceTime: {
        fontSize: 12,
        color: '#bbb',
        lineHeight: 50,
    },
    publisherView: {
        marginTop: 5,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    publisherAvatar: {
        ...Platform.select({
            ios: {
                shadowColor: '#ccc',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 3.5,
            },
            android: {
                elevation: 7,
            },
        }),
    },
    publisherText: {
        fontSize: 14,
        color: '#000',
        lineHeight: 32,
        paddingLeft: 10,
        fontWeight:'bold'
    },
    typeText: {
        color: '#000',
        fontSize: 14,
        lineHeight: 40,
        marginRight: 5,
        fontWeight: 'bold'
    },
    xlk: {
        position: 'absolute',
        bottom: -60,
        left: -12,
        zIndex: 99
    },
    option: {
        backgroundColor: '#fff',
        padding: 8,
        paddingHorizontal: 18
    },
    h2: {
        fontSize: 12,
        color: '#000'
    },
    scrollView: {
        width: Dimensions.get('window').width,
        ...Platform.select({
            ios: {
                height: Dimensions.get('window').height - 160,
            },
            android: {
                height: Dimensions.get('window').height - 90,
            },
        }),
        zIndex: -2,
        flexWrap: 'nowrap'
    },
    headerStyle: {
        height: 45,
        backgroundColor: '#faba3c',
    },
    headerText: {
        width: '80%',
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
    },

})
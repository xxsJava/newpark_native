import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View
} from 'react-native';
import { useRoute } from '@react-navigation/native';
// import { Item } from 'react-native-picker-select';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '佛系小草莓',
        pic: 'https://new-by-video.oss-cn-beijing.aliyuncs.com/userImage/1632483733862409.jpg',
        tip: ['音乐', '游戏', '美食'],
        count: 12
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: '恩赐一大锅',
        pic: 'https://new-by-video.oss-cn-beijing.aliyuncs.com/userImage/1632483733862409.jpg',
        tip: ['音乐'],
        count: 0
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: '满山猴屁股',
        pic: 'https://new-by-video.oss-cn-beijing.aliyuncs.com/userImage/1632483733862409.jpg',
        tip: ['音乐', '游戏'],
        count: 44
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }: any) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Image source={{ uri: item.pic }} style={{ width: 70, height: 70, borderRadius: 12, marginRight: 8 }}></Image>
        <View>
            <Text style={[styles.title, { color: textColor }]}>{item.title}的房间</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 3 }}>
                {item.tip.map((val: any) => {
                    return (
                        <View style={{ backgroundColor: '#f0c2c9', padding: 2, borderRadius: 10, height: 20, paddingHorizontal: 4 }}>
                            <Text style={{ fontSize: 10, color: '#fff' }}>#{val}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={{ flexDirection: 'row', marginTop: 6 }}>
                <Image source={require('../../../assets/images/tup/zaixian.png')} style={{ width: 20, height: 20 }}></Image>
                <Text style={{ marginLeft: 3, fontSize: 13 }}>有<Text style={{ color: 'red', fontSize: 15 }}>{item.count}</Text>人在线</Text>
            </View>
        </View>
        <Image source={require('../../../assets/images/chevron-right.png')} style={{width:35,height:35}}></Image>
    </TouchableOpacity>
);

const App = () => {
    const [selectedId, setSelectedId] = useState();
    const route = useRoute();
    const item1 = route.params;
    console.log(item1, '传来的数据在此/////');


    const renderItem = ({ item }: any) => {
        const backgroundColor = item.id === selectedId ? '#d9b7ab' : '#d9c9c1';
        const color = item.id === selectedId ? '#fff' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    title: {
        fontSize: 18,
    },
});

export default App;
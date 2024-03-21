/**
 * 代码描述: 添加牛友
 * 作者:zhn
 * 修改时间:2024/2/22 16:10:11
 */
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { Button, Image, View, TouchableOpacity, Text, StyleSheet, Dimensions, Modal, TextInput } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { navigate } from '../../../config/routs/NavigationContainer';
import { Icon, MD3Colors } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const wxh = 'xxs096788';
const AddPeople = () => {
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
                    inputStyle={{textAlign:'center',marginTop:-6}}
                />
                <View style={styles.heng}>
                    <Text style={{ textAlign: 'center', fontSize: 16, marginBottom: 12 }}>我的微信号：{wxh}</Text>
                    {/* 看一下怎么使图片放大 */}
                    <View style={{ marginLeft: 6 }}>
                        <TouchableOpacity onPress={() => {
                            setIsVisible(true);
                        }}>
                            <Image style={{ width: 20, height: 20, resizeMode: 'stretch' }} source={{ uri: 'https://new-by-video.oss-cn-beijing.aliyuncs.com/userImage/1632420911131600.png' }} accessibilityLabel='图片' alt="头像"/>
                        </TouchableOpacity>
                    </View>
                    <Modal visible={isVisible} transparent={true}>
                        <ImageViewer enableSwipeDown imageUrls={[{ url: 'https://new-by-video.oss-cn-beijing.aliyuncs.com/userImage/1632420911131600.png' }]} onClick={() => {
                            setIsVisible(false);
                        }} 
                        ></ImageViewer>
                    </Modal>
                </View>
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
    }
})
export default AddPeople;

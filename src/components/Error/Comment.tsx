
import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 226,
        height: 228,
    },
    button: {
        marginTop:50,
        alignItems:'center',
        backgroundColor:'#F8C564',
        borderRadius:20,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:35,
        paddingRight:35
        
    }
});

const DisplayAnImage = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/images/static/写下你的看法.png')}
                accessibilityLabel='图片'
                alt="头像"
            />
            <View
                style={{
                    flexDirection: "row",
                    padding: 10
                }}
            >
                <Text allowFontScaling={false} style={{ margin: "auto", width: 80, fontSize: 18, color: '#DAD8E0' }}>暂未评论</Text>
            </View>
            <View>
                <Text allowFontScaling={false} style={{ width: 80, fontSize: 13, color: '#CDCFDC' }}>请勿恶语伤人</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={
                    () => { console.log('发表评论'); }
                }
            >
                <Text allowFontScaling={false} style={{color:'white'}}>发表评论</Text>
            </TouchableOpacity>
            <View style={{ position: 'absolute', bottom: 15 }}>
                <Text allowFontScaling={false} style={{ width: 160, fontSize: 13, color: '#CDCFDC' }}>山东新园建业科技有限公司</Text>
            </View>
        </View>
    );
}

export default DisplayAnImage;


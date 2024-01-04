import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-animatable';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class CustomerServiceView extends Component {

    render() {
        const image = require('../../../../assets/images/tup/rc1.png')
        return (
            <View>
                <ImageBackground source={image} resizeMode='cover' style={styles.imagebg}>
                    <View style={styles.wu}>
                       
                    </View>
                    <Text style={styles.h2}>
                            Hi~, 有什么可以帮助您！
                        </Text>
                </ImageBackground>
                {/* <View style={}>
                      
                </View> */}
            </View>
        )
    }


}
const styles = StyleSheet.create({
    imagebg: {
        width: windowWidth,
        height: windowHeight,
        // opacity: .6
    },
    wu:{
        position:'absolute',
        opacity:0.3,
        width:600,
        height:windowHeight,
        top:0,
        left:0,
        backgroundColor:'#ECEE53'
    },
    h2:{
        fontSize:23,
        color:'#000'
    }
})
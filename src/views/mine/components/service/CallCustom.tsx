import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,SafeAreaView} from 'react-native'
import { Appbar, Avatar, IconButton } from 'react-native-paper';
import { navigate } from '../../../../config/routs/NavigationContainer';

export default class CallCustom extends Component {
    render() {
        return (
            <SafeAreaView>
                <Appbar.Header style={styles.appbarStyle}>
                    <View style={styles.heng}>
                        <Appbar.BackAction onPress={() => navigate('CustomerServiceRoute')} />
                        <Text>返回</Text>
                    </View>
                  <Text>新园客服</Text>
                    {/* <image  /> */}
                    <Image source={require('../../../../assets/images/tup/gengduo.png')} style={styles.iconStyle}/>
                </Appbar.Header>
                <Text> textInComponent </Text>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    appbarStyle: {
        borderWidth: 0,
        backgroundColor: '#FFF',
        zIndex: 999,
        justifyContent:'space-between',
        alignItems:'center'
    },
    iconStyle:{
        width:20,
        height:20
    },
    heng:{
        flexDirection:'row'
    }

})


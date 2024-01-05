import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Appbar, Avatar, IconButton } from 'react-native-paper';
import { navigate } from '../../../../config/routs/NavigationContainer';

export default class CallCustom extends Component {
    render() {
        return (
            <View>
                <Appbar.Header style={styles.appbarStyle}>
                    <View >
                        <Appbar.BackAction onPress={() => navigate('CustomerServiceRoute')} />
                        <Text>返回</Text>
                    </View>



                </Appbar.Header>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    appbarStyle: {
        borderWidth: 0,
        backgroundColor: '#FFF',
        zIndex: 999
    }

})

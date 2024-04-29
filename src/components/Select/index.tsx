import React from "react";
import { View, StyleSheet, TextInput, Image } from 'react-native';

const Sele = (value: string,) => {
    const [valuesele, onChangeTextsele] = React.useState(value);

    return (
        <View style={{ backgroundColor: '#E9EAED', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12, borderRadius: 6 }}>
            <Image source={require('../../assets/images/search.png')}></Image>
            <TextInput onChangeText={text => onChangeTextsele(text)} value={valuesele} style={styles.select} placeholder="搜索" />
        </View>
    )
};

export default Sele;

const styles = StyleSheet.create({
    select: {
        backgroundColor: '#E9EAED',
        color: '#000',
        fontSize: 14,
        paddingHorizontal: 11,
        paddingVertical: 3
    }
})
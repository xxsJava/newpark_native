/*
 * @Author: xxs
 * @Date: 2024-04-07 11:50:17
 * @LastEditTime: 2024-04-16 10:32:34
 * @FilePath: \newpark_native\src\views\socializing\add\people.tsx
 * @Description: desc
 */
/**
 * 代码描述: 添加牛友
 * 作者:zhn
 * 修改时间:2024/2/22 16:10:11
 */
import { Input, InputField, InputIcon, InputSlot, SearchIcon } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const AddPeople = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [onText,setText] = useState('');
    
    const onChangeTextInput = (text:string) =>{
        setText(text);
        setIsVisible(text.length > 0);
    }

    return (
        <View>
            <View style={styles.searchGrid}>       
                <Input style={styles.searchInput}>
                <InputSlot pl='$3'>
                    <InputIcon as={SearchIcon}/>
                </InputSlot>
                <InputField
                    placeholder="账号/手机号"
                    onChangeText={onChangeTextInput}
                />
                </Input>
            </View>
            <TouchableOpacity style={{display: isVisible?'':'none'}}>
                <View style={styles.searchContent}>
                    <Text style={styles.searchText}>
                        查找‘{onText}’相关用户
                    </Text>
                </View>
            </TouchableOpacity>
            
            <View>
                
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    searchGrid: {
        width: windowWidth,
        height: 70,
        paddingHorizontal: 10,
        marginTop: 10
    },
    searchInput:{
        borderRadius: 20
    },
    searchContent:{
        backgroundColor: '#FFF',
        height:40
    },
    searchText:{
        lineHeight: 40,
        color: '#000',
        paddingLeft: 10
    },
    hideContent:{
        display:'none'
    }
})
export default AddPeople;

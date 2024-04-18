import React,{useState} from "react";
import {View,Text, StyleSheet, Dimensions,TextInput,TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = async() => {
    console.log(await AsyncStorage.getItem('nameVal'),'用户名');
    
}
data()
const VerificationInfo = (item) =>{
    const contact  = item.route.params.item;
    console.log(contact);
    const [value, onChangeText] = React.useState('');
    return (
        <View style={styles.container}>
           <View>
                <Text>发送添加朋友申请:</Text>
                <TextInput 
                    autoCapitalize='none'
                    placeholder="请输入申请语"
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    enablesReturnKeyAutomatically={true}
                    multiline={true}
                    numberOfLines={4}
                    style={{height: 120, borderColor: 'gray', borderWidth: 0.4,backgroundColor:'#eee',marginTop:20,width:'80%',marginLeft:'10%',textAlignVertical: 'top'}}
                />
           </View>
           <View>
            <Text>朋友名称</Text>
            <View style={{borderColor: 'gray', borderWidth: 0.4,backgroundColor:'#eee',height:40,marginTop:10,width:'80%',marginLeft:'10%'}}>
                <Text style={{textAlign:'center',lineHeight:40,fontSize:17,color:'#000'}}>{contact.name}</Text>
            </View>
           </View>
           <View style={{position:'absolute',bottom:190,width:windowWidth,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={{borderRadius:3,borderWidth:0.3,backgroundColor:'green',padding:12,width:120}}>
                <Text style={{color:'#fff',textAlign:'center',fontSize:16}}>发送</Text>
            </TouchableOpacity>
           </View>
        </View>
    )
};
export default VerificationInfo;
const styles = StyleSheet.create({
    container:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#fff',
        padding:12
    }

})
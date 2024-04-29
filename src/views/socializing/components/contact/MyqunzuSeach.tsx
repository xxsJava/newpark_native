import React from "react";
import { Dimensions, StyleSheet, Text, View ,Image,TextInput, TouchableOpacity} from "react-native";
import { navigate } from "../../../../config/routs/NavigationContainer";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MyqunzuSeach = () => {
    const [search,setSearch] = React.useState('');
    const cancal = () => {
        setSearch('');
        navigate('Myqunzu');
    };

    return (
        <View style={styles.contain}>
           <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
           <View style={styles.kuang}>
            <Image source={require('../../../../assets/images/search.png')} style={styles.seaicon}></Image>
            <TextInput 
            placeholder="搜索"  
            onChangeText={text => setSearch(text)}
            value={search}
            style={styles.sele}
            />
           </View>
          <TouchableOpacity style={{width:'22%',justifyContent:'center',alignItems:'center'}} onPress={() => cancal()}>
            <Text style={{fontSize:16,color:'#000'}}>取消</Text>
          </TouchableOpacity>
           </View>
        </View>
    )
};

export default MyqunzuSeach;
const styles = StyleSheet.create({
    contain:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#fff',
        position:'relative',
        padding:20
    },
    seaicon: {
        width: 20,
        height: 20,
        alignItems: 'center',
        marginRight: 8
    },
    sele:{
        fontSize:16,
        height:40,
        width:'80%'
    },
    kuang:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#E9EAED',
        borderRadius:8,
        paddingLeft:20,
        width:'78%'
    }
})
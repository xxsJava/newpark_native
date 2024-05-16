/*
 * @Author: xxs
 * @Date: 2023-12-20 17:44:35
 * @LastEditTime: 2024-05-15 11:30:48
 * @FilePath: \newpark_native\src\views\mine\components\service\MyOrderView.tsx
 * @Description: desc
 */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import HeadNav from '../../../../components/Nav/HeadNav';

const windowWidth = Dimensions.get('window').width

const Tab = createMaterialTopTabNavigator();

const MyOrderView = ({ route }: any) => {
    
    const [typeVal, onTypePress] = React.useState('type1')
    // const {route}:any = this.props
    const { type } = route.params
    useEffect(() => {
        // 触发事件
        onTypePress(type)
    }, []);

    

    return (
        <><View style={styles.parentView}>
            <HeadNav props={{title:'我的发布',navPath:''}} />
        </View>
        
            <Tab.Navigator 
            style={{backgroundColor:'#fff'}}
            screenOptions={{
                lazy:true,
                tabBarPressColor:'#000',
                tabBarStyle:styles.tabParent,
                animationEnabled:true,
                tabBarIndicatorStyle:{
                    width:'15%',
                    left:'10%',
                    height:5,
                    borderRadius:5,
                    backgroundColor:'#FFE723'
                },
                tabBarLabelStyle:{fontSize:15,fontWeight:'600'}
            }}>
                <Tab.Screen name="在出售" component={PubScreen} />
                <Tab.Screen name="未提交" component={SellScreen} />
                <Tab.Screen name="已下架" component={PubScreen} />
            </Tab.Navigator></>
    )
}

const PubScreen = () => {
    return(
        <View style={{backgroundColor:'#fff',flex:1}}>
            <Text style={{color:'#000'}}>1</Text>
        </View>
    )
}

const SellScreen = () => {
    return(
        <View></View>
    )
}


export default MyOrderView;

const styles = StyleSheet.create({
    parentView: {
        // width: windowWidth,
        // height: windowHeight,
        backgroundColor: '#FAFAFA',
    },
    tabParent:{
        backgroundColor: '',
        width:'60%'
    },
    tabItem:{
        fontSize:18,
    }
}
)
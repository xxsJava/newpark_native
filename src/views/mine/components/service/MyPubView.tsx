/*
 * @Author: xxs
 * @Date: 2023-12-20 17:44:35
 * @LastEditTime: 2024-05-28 14:20:17
 * @FilePath: \newpark_native\src\views\mine\components\service\MyPubView.tsx
 * @Description: desc
 */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import HeadNav from '../../../../components/Nav/HeadNav';
import PubScreen from '../screen/PubScreen';
import RfcScreen from '../screen/RfcScreen';
import SellScreen from '../screen/SellScreen';

const windowWidth = Dimensions.get('window').width

const Tab = createMaterialTopTabNavigator();

const MyPubView = ({ route }: any) => {
    
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
                    left:21,
                    height:5,
                    borderRadius:5,
                    backgroundColor:'#FFE723'
                },
                tabBarLabelStyle:{fontSize:15,fontWeight:'600',width:60}
            }}>
                <Tab.Screen name="在出售" component={PubScreen} />
                <Tab.Screen name="未提交" component={SellScreen} />
                <Tab.Screen name="已下架" component={RfcScreen} />
            </Tab.Navigator></>
    )
}

export default MyPubView;

const styles = StyleSheet.create({
    parentView: {
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
/*
 * @Author: xxs
 * @Date: 2023-11-01 17:00:26
 * @LastEditTime: 2024-05-28 14:21:52
 * @FilePath: \newpark_native\src\views\mine\components\oder\EvaluateView.tsx
 * @Description: desc
 */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeadNav from '../../../../components/Nav/HeadNav';
import PubScreen from '../screen/PubScreen';
import RfcScreen from '../screen/RfcScreen';
import SellScreen from '../screen/SellScreen';
const Tab = createMaterialTopTabNavigator();
 const EvaluateView = () => {
    return(
        <><View style={styles.parentView}>
            <HeadNav props={{ title: '我出售的', navPath: '' }} />
        </View><Tab.Navigator
            style={{ backgroundColor: '#fff' }}
            screenOptions={{
                lazy: true,
                tabBarPressColor: '#000',
                tabBarStyle: styles.tabParent,
                animationEnabled: true,
                tabBarIndicatorStyle: {
                    width: '5%',
                    left: '6%',
                    height: 3,
                    borderRadius: 5,
                    backgroundColor: '#FFE723'
                },
                tabBarLabelStyle: { fontSize: 12, fontWeight: '600',width:50 }
            }}>
                <Tab.Screen name="全部" component={PubScreen} />
                <Tab.Screen name="待付款" component={SellScreen} />
                <Tab.Screen name="待发货" component={RfcScreen} />
                <Tab.Screen name="待收货" component={PubScreen} />
                <Tab.Screen name="待评价" component={SellScreen} />
                <Tab.Screen name="退款中" component={RfcScreen} />
            </Tab.Navigator></>
    )
  
}

const styles = StyleSheet.create({
    parentView: {
        backgroundColor: '#FAFAFA',
    },
    tabParent:{
        backgroundColor: '',
        // width:'15%'
    }
}
)

export default EvaluateView;
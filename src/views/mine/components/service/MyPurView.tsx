import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-animatable";
import HeadNav from "../../../../components/Nav/HeadNav";
import PubScreen from "../screen/PubScreen";
import RfcScreen from "../screen/RfcScreen";
import SellScreen from "../screen/SellScreen";
const Tab = createMaterialTopTabNavigator();

const MyPurView = () => {
    return(
        <><View style={styles.parentView}>
            <HeadNav props={{ title: '我购买的', navPath: '' }} />
        </View><Tab.Navigator
            style={{ backgroundColor: '#fff' }}
            screenOptions={{
                lazy: true,
                tabBarPressColor: '#000',
                tabBarStyle: styles.tabParent,
                animationEnabled: true,
                tabBarIndicatorStyle: {
                    width: '5%',
                    left: '5.5%',
                    height: 5,
                    borderRadius: 5,
                    backgroundColor: '#FFE723'
                },
                tabBarLabelStyle: { fontSize: 12, fontWeight: '600' }
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

export default MyPurView;
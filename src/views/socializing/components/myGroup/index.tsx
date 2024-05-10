import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react";
import MyCreScreen from "../page/MyCreScreen";
import MyJoinScreen from "../page/MyJoinScreen";


const Tab = createMaterialTopTabNavigator();

const MyGoroup = () =>{
    return(
         <Tab.Navigator>
            <Tab.Screen name="我创建的" component={MyCreScreen} />
            <Tab.Screen name="我加入的" component={MyJoinScreen} />
        </Tab.Navigator>
    )
}

export default MyGoroup;
/*
 * @Author: xxs
 * @Date: 2023-10-26 09:38:45
 * @LastEditTime: 2023-11-06 18:47:39
 * @FilePath: \newpark_native\src\routes\stacker\index.tsx
 * @Description: desc
 */
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';

import React, {useEffect} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import routsConfig from '../../config/routs-config';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon, IconButton, Stagger, useDisclose} from 'native-base';
import {navigate} from '../../config/routs/NavigationContainer'
/*
 * @Author: xxs
 * @Date: 2023-10-24 16:56:09
 * @LastEditTime: 2023-10-24 18:18:15
 * @FilePath: \newpark_native\src\routes\stacker\index.tsx
 * @Description: 底部标签
 */
export const BommonTab = () => {
  const Tab = createBottomTabNavigator();

  const {t} = useTranslation();

  const {isOpen, onToggle} = useDisclose();

  useEffect(() => {}, [console.log('底部路由加载')]);

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#F8B032',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 14,
          },
        })}>
        {Object.entries(routsConfig).map(([key, value]) => {
          if (key === 'Routes') {
            const subArray = Object.entries(value);
            return subArray.map(([routeKey, routeValue]) => {
              // 路由遍历
              return (
                <Tab.Screen
                  name={routeKey}
                  key={routeKey}
                  component={routeValue.component}
                  options={{
                    tabBarLabel: t(routeValue.label),
                    tabBarIcon: ({focused, size, color}) => {
                      let iconName = focused
                        ? routeValue.SelectedIcon
                        : routeValue.UnSelectedIcon;
                      if (routeKey === 'Publish') {
                        return (
                          <>
                            <Stagger
                              visible={isOpen}
                              initial={{
                                opacity: 0,
                                scale: 0,
                                translateY: 34,
                              }}
                              animate={{
                                translateY: 0,
                                scale: 1,
                                opacity: 1,
                                transition: {
                                  type: 'spring',
                                  mass: 0.8,
                                  stagger: {
                                    offset: 30,
                                    reverse: true,
                                  },
                                },
                              }}
                              exit={{
                                translateY: 34,
                                scale: 0.5,
                                opacity: 0,
                                transition: {
                                  duration: 100,
                                  stagger: {
                                    offset: 30,
                                    reverse: true,
                                  },
                                },
                              }}>
                              <View
                                style={{
                                  position: 'absolute',
                                  bottom: -10,
                                  left: 45,
                                }}>
                                <Text style={{position:'relative',left:45,top:20,color:'#000'}}>发布悬赏</Text>
                                <IconButton
                                  mb="4"
                                  size={36}
                                  variant="solid"
                                  bg="indigo.500"
                                  colorScheme="indigo"
                                  borderRadius="full"
                                  onPress={() => navigate('RewardRoute')}
                                  icon={
                                    <Icon
                                      // as={MaterialIcons}
                                      size="6"
                                      name="location-pin"
                                      _dark={{
                                        color: 'warmGray.50',
                                      }}
                                      color="warmGray.50"
                                    />
                                  }
                                />
                              </View>
                              <View style={{position: 'absolute', bottom: 30,left:25}}>
                                <Text style={{position:'relative',left:45,top:20,color:'#000'}}>发布帖子</Text>
                                <IconButton
                                  mb="4"
                                  size={36}
                                  variant="solid"
                                  bg="yellow.400"
                                  colorScheme="yellow"
                                  borderRadius="full"
                                  icon={
                                    <Icon
                                      // as={MaterialCommunityIcons}
                                      _dark={{
                                        color: 'warmGray.50',
                                      }}
                                      size="6"
                                      name="microphone"
                                      color="warmGray.50"
                                    />
                                  }
                                />
                              </View>
                              <View style={{position: 'absolute', bottom: 45,left:-18}}>
                                <Text style={{position:'relative',left:5,color:'#000'}}>公告</Text>
                                <IconButton
                                  mb="4"
                                  size={36}
                                  variant="solid"
                                  bg="pink.400"
                                  colorScheme="pink"
                                  borderRadius="full"
                                  icon={
                                    <Icon
                                      // as={MaterialCommunityIcons}
                                      _dark={{
                                        color: 'warmGray.50',
                                      }}
                                      size="6"
                                      name="microphone"
                                      color="warmGray.50"
                                    />
                                  }
                                />
                              </View>
                              <View
                                style={{
                                  position: 'absolute',
                                  bottom: 30,
                                  right: 5,
                                }}>
                                <Text style={{position:'relative',right:60,top:20,color:'#000'}}>发布商品</Text>
                                <IconButton
                                  mb="4"
                                  size={36}
                                  variant="solid"
                                  bg="teal.400"
                                  colorScheme="teal"
                                  borderRadius="full"
                                  onPress={() => navigate('PublishProductsRoute')}
                                  icon={
                                    <Icon
                                      // as={MaterialCommunityIcons}
                                      _dark={{
                                        color: 'warmGray.50',
                                      }}
                                      size="6"
                                      name="video"
                                      color="warmGray.50"
                                    />
                                  }
                                />
                              </View>
                              <View
                                style={{
                                  position: 'absolute',
                                  bottom:-10,
                                  right: 45,
                                }}>
                                <Text style={{position:'relative',right:30,top:20,color:'#000'}}>打卡</Text>
                                <IconButton
                                  mb="4"
                                  size={36}
                                  variant="solid"
                                  bg="red.500"
                                  colorScheme="red"
                                  borderRadius="full"
                                  icon={
                                    <Icon
                                      // as={MaterialIcons}
                                      size="6"
                                      name="photo-library"
                                      _dark={{
                                        color: 'warmGray.50',
                                      }}
                                      color="warmGray.50"
                                    />
                                  }
                                />
                              </View>
                            </Stagger>
                            <TouchableOpacity style={{position:'absolute',bottom:0}} onPress={onToggle}>
                            <Image
                                style={styles.publishImg}
                                source={require('../../assets/images/3.0x/add_btn.png')}
                              />
                              </TouchableOpacity>
                          </>
                        );
                      }
                      return (
                        <Ionicons name={iconName} size={size} color={color} />
                      );
                    },
                  }}
                />
              );
            });
          }
        })}
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  publishImg: {width: 64, height: 64,},
});

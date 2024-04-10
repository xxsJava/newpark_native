import React, { useState } from 'react';
import { Image, View, TouchableOpacity, StyleSheet, Text, ScrollView, Dimensions, Platform, TextInput } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import LinearGradinet from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Uplode = () => {
  return (
    <ScrollView style={styles.box}>
      <View style={styles.ava}>
        <Avatar.Image size={100} source={require('../../assets/images/tup/dn.png')} accessibilityLabel='头像' alt="头像"/>
      </View>
      <View style={styles.boxs}>
        <View style={styles.cardView}>
          <LinearGradinet colors={['rgba(157, 104, 189,1)', 'rgba(157, 104, 189,0.6)', 'rgba(252, 251, 251,1)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.titleStyle}>
            <Text allowFontScaling={false} style={styles.titleText}>
              发布悬赏<Entypo size={20} color='#F8B032' name='triangle-right'></Entypo>
            </Text>
          </LinearGradinet>
          <View style={styles.inputView}>
            <View>
              <Image style={styles.inputImage} source={require('../../assets/images/alimom/frame1.png')} accessibilityLabel='图片' alt="头像"></Image>
            </View>
            <View>
              <Text allowFontScaling={false} style={styles.inputText}>标题</Text>
              <TextInput allowFontScaling={false} selectionColor='#FABA3C' placeholder='请输入' style={styles.inputTitle}></TextInput>
              <Text allowFontScaling={false} style={styles.inputText}>描述</Text>
              <TextInput allowFontScaling={false} selectionColor='#FABA3C' placeholder='请输入' multiline={true} numberOfLines={8} style={styles.inputDescribe}></TextInput>
            </View>
          </View>
          <View>
            <View style={styles.bountyIconView}>
              <Image style={styles.bountyIcon} source={require('../../assets/images/money_icon1.png')} accessibilityLabel='图片' alt="头像"></Image>
              <Text allowFontScaling={false} style={styles.bountyText}>赏金</Text>
            </View>
            <View style={styles.bountyNumView}>
              <TextInput allowFontScaling={false} selectionColor='#FABA3C' style={styles.bountyInput}></TextInput>
              <Image style={styles.bountyNumIcon} source={require('../../assets/images/moneyBag.png')} accessibilityLabel='图片' alt="头像"></Image>
            </View>
            <Button style={styles.buttonStyle} labelStyle={styles.buttonText} onPress={() => console.log('点击发布')}>发布悬赏</Button>
          </View>
        </View>
      </View>
    </ScrollView>
  )
};
const styles = StyleSheet.create({
  box: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#FABA3C'
  },
  ava: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: 120,
    paddingTop: 30,
    zIndex: 1
  },
  boxs: {
    padding: 20,
    width: windowWidth - 40,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 30
  },
  cardView: {
    width: '100%',
    borderRadius: 30,
    ...Platform.select({
      ios: {
        height: '100%',
      },
      android: {
        height: '100%',
      }
    })
  },
  titleText: {
    fontSize: 19,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 50
  },
  inputView: {
    // height: 310,
    marginTop: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  inputImage: {
    width: 25,
    height: 100
  },
  inputText: {
    fontSize: 15,
    color: '#000',
    lineHeight: 20
  },
  bountyIconView: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  bountyIcon: {
    width: 22,
    height: 22,
    marginTop: 4,
    marginRight: 10
  },
  bountyText: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
    lineHeight: 30
  },
  inputTitle: {
    width: windowWidth - 140,
    height: 50,
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: '#F6F6F6'
  },
  bountyNumView: {
    height: 60,
    position: 'relative',
    backgroundColor: '#FFEFD7'
  },
  bountyNumIcon: {
    top: 17,
    right: 20,
    width: 25,
    height: 25,
    position: 'absolute',
    zIndex: 10
  },
  buttonStyle: {
    width: '90%',
    height: 43,
    borderRadius: 8,
    marginTop: 10,
    marginHorizontal: '5%',
    backgroundColor: '#F8B032'
  },
  inputDescribe: {
    width: windowWidth - 140,
    borderRadius: 5,
    marginTop: 5,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    backgroundColor: '#F6F6F6',
    // ...Platform.select({
    //   ios: {
    //     height: 100,
    //   },
    //   android: {
    //     height: 100,
    //   }
    // }),
    // marginBottom:200,
    // paddingBottom:20
  },
  bountyInput: {
    width: '100%',
    height: 60,
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 24
  },
  titleStyle: {
    height: 50,
    paddingLeft: 17,
    borderRadius: 10,
    marginHorizontal: 20,
  },

})
export default Uplode;

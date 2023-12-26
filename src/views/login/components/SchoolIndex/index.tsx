/**
 * 代码描述: 学校索引页
 * 作者:cxr
 * 创建时间:2023/11/16 16:26:11
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions,Platform, TextInput} from 'react-native';
import {Appbar,Button} from 'react-native-paper';
import IndexTable from './IndexTableView'
import {useTranslation, Trans} from 'react-i18next';
import {RegisteredScreenProps} from '../../../../config/routs';
import {navigate} from '../../../../config/routs/NavigationContainer'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const SchoolIndex:React.FC<RegisteredScreenProps> = () => {

    const [searchVal, searchOnChange] = React.useState('');

  return (
    <View style={styles.parentView}>
      <Appbar.Header style={styles.headerStyle}>
      <Appbar.Action
          icon={require('../../../../assets/images/chevron-left.png')}
          onPress={() => navigate('Registered')}
        />
        <Text allowFontScaling={false} style={styles.headerText}>
          <Trans>navigationBar.title3</Trans>
        </Text>
      </Appbar.Header>
      <View style={styles.searchViwe}>
        <TextInput
          allowFontScaling={false}
          placeholder="搜索\学校名称\学校代码"
          cursorColor='#ffb700'
          textAlign='center'
          value={searchVal}
          style={styles.searchStyle}
          onChangeText={text => searchOnChange(text)}
        />
      </View>
      <View style={styles.scrollView}>
        <IndexTable></IndexTable>
      </View>
      <View style={styles.buttonView}>
        <Button buttonColor="#ffb700" textColor="#FFF" style={styles.buttonStyle} labelStyle={styles.buttonText}>下一步</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#FFF',
  },
  headerStyle: {
    width: windowWidth,
    height: 45,
    backgroundColor: '#ffb700',
  },
  headerText: {
    width: '80%',
    fontSize: 17,
    color: '#FFF',
    lineHeight: 45,
    textAlign: 'center',
  },
  searchViwe: {
    width: windowWidth,
    height: 70,
    paddingVertical:10

  },
  searchStyle:{
    width:'92%',
    height:50,
    borderRadius:25,
    marginHorizontal:'4%',
    backgroundColor:'#f5f5f5'
  },
  scrollView:{
    width:windowWidth,
    ...Platform.select({
        ios:{
            height:windowHeight-270,
        },
        android:{
            height:windowHeight-220,
        }
    })
  },
  buttonView:{
    width:windowWidth,
    ...Platform.select({
        ios:{
            height:150,
        },
        android:{
            height:100,
        }
    })
  },
  buttonStyle:{
    width: '70%',
    height: 45,
    marginTop: 15,
    marginHorizontal: '15%',
    borderRadius: 20,
  },
  buttonText:{
    fontSize:17,
    lineHeight:24
  }
});

export default SchoolIndex;

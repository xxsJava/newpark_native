/**
 * 代码描述: 帮忙圈列表模块 快来帮忙模块详情页
 * 作者:cxr
 * 创建时间:2023/12/11 09:10:11
 */

// import React from "react";
// import { View,Text,StyleSheet,Dimensions,ScrollView,Platform,TouchableOpacity } from "react-native";
// import { Button,Icon } from 'react-native-paper';
import { navigate } from '../../../../config/routs/NavigationContainer';
// import { Image } from "react-native-animatable";
import { rewardListApi } from '../../../../api/sys/reward';
import { rewardListType } from '../../../../api/sys/reward/types';
import { dateToMsgTime } from '../../../../components/Rests/TconTime';

// 模态框引入的文件
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradinet from 'react-native-linear-gradient';
import { Avatar, Button, Icon } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const rewardType: rewardListType = {
  pageNo: 1,
  pageSize: 5,
};

const listData = [
  {
    index: 1,
    text: '去校门口拿个快递在一楼',
    school: '湖南长沙理工大学',
    time: '刚刚',
    sum: '1.50',
  },
  {
    index: 2,
    text: '商店买瓶水去西边操场',
    school: '湖南长沙理工大学',
    time: '刚刚',
    sum: '2.86',
  },
  {
    index: 3,
    text: '图书馆借本书去实验室一楼',
    school: '湖南长沙理工大学',
    time: '刚刚',
    sum: '2.99',
  },
  {
    index: 4,
    text: '帮骑电动车去充电，车在F楼',
    school: '湖南长沙理工大学',
    time: '刚刚',
    sum: '20.00',
  },
];

const ListView = () => {
  const [rewardData, rewardDataChange] = React.useState([]);
  // const rewardData = RewardApi()
  // console.log('悬赏浏览获取',rewardData)
  const RewardApi = async () => {
    // console.log('悬赏token',tokenStr)

    const rewardList = await rewardListApi(rewardType);
  };
  React.useEffect(() => {
    RewardApi();
  }, []); // 只在组件挂载时调用一次
  console.log('悬赏浏览获取', rewardData);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.parentLevel}>
      <ScrollView style={styles.scrollStyle}>
        <View style={styles.listStyle}>
          {rewardData.map((item:any) => {
            return (
              <View style={styles.itemStyle} key={item.rid}>
                <View style={styles.avatarView}>
                  <View style={styles.avatarStyle} />
                  <View style={styles.stateStyle} />
                  <Text allowFontScaling={false} style={styles.timeStyle}>
                    {dateToMsgTime(item.startTime - item.endTime)}
                  </Text>
                </View>
                <View style={styles.textView}>
                  <Text
                    allowFontScaling={false}
                    style={styles.textStyle1}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.rtitle}
                  </Text>
                  {/* <Text allowFontScaling={false} style={styles.textStyle2}>{item.school}</Text> */}
                </View>
                <View style={styles.detailsView}>
                  <View style={styles.moneyView}>
                    <View style={styles.moneyIcon}>
                      <Icon
                        color="#FABA3C"
                        size={34}
                        source={require('../../../../assets/images/coins-icon.png')}
                      />
                    </View>
                    <Text allowFontScaling={false} style={styles.moneySum}>
                      {item.rmoney}
                    </Text>
                  </View>
                  <Button
                    style={styles.buttonStyle}
                    labelStyle={styles.buttonText}
                    onPress={() => navigate('RewardDetailsRoute', {item})}>
                    查看详情
                  </Button>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setModalVisible(!modalVisible)}>
        <Image
          style={styles.addStyle}
          source={require('../../../../assets/images/3.0x/add_btn.png')}
        />
      </TouchableOpacity>

      {/* 加入的模态框 */}
      {/* <TouchableOpacity onPress={() =>setModalVisible(true)}></TouchableOpacity> */}
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        transparent={true}>
        <TouchableOpacity
          style={styles.waiM}
          onPress={() => {
            setModalVisible(false);
          }}>
          {/* <TouchableOpacity onPress={() =>setModalVisible(true)}></TouchableOpacity> */}
          <KeyboardAvoidingView
            behavior="padding"
            enabled
            keyboardVerticalOffset={20}
            style={styles.modalBox}>
            {/* <ScrollView></ScrollView> */}
            <ScrollView style={styles.contentView}>
              <View style={styles.contenStyle}>
                <Avatar.Image
                  size={80}
                  style={styles.avatarStyle1}
                  source={require('../../../../assets/images/defaultheader.png')}
                />
                <View style={styles.cardView}>
                  <LinearGradinet
                    colors={[
                      'rgba(157, 104, 189,1)',
                      'rgba(157, 104, 189,0.6)',
                      'rgba(252, 251, 251,1)',
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.titleStyle}>
                    <Text allowFontScaling={false} style={styles.titleText}>
                      发布悬赏{' '}
                      <Entypo size={20} color="#F8B032" name="triangle-right" />
                    </Text>
                  </LinearGradinet>
                  <View style={styles.inputView}>
                    <View style={styles.inputImageView}>
                      <Image
                        style={styles.inputImage}
                        source={require('../../../../assets/images/alimom/frame1.png')}
                      />
                    </View>
                    <View style={styles.inputContent}>
                      <Text allowFontScaling={false} style={styles.inputText}>
                        标题
                      </Text>
                      <TextInput
                        allowFontScaling={false}
                        selectionColor="#FABA3C"
                        placeholder="请输入"
                        style={styles.inputTitle}
                      />
                      <Text allowFontScaling={false} style={styles.inputText}>
                        描述
                      </Text>
                      <TextInput
                        allowFontScaling={false}
                        selectionColor="#FABA3C"
                        placeholder="请输入"
                        multiline={true}
                        numberOfLines={4}
                        style={styles.inputDescribe}
                      />
                    </View>
                  </View>
                  <View style={styles.bountyView}>
                    <View style={styles.bountyIconView}>
                      <Image
                        style={styles.bountyIcon}
                        source={require('../../../../assets/images/money_icon1.png')}
                      />
                      <Text allowFontScaling={false} style={styles.bountyText}>
                        赏金
                      </Text>
                    </View>
                    <View style={styles.bountyNumView}>
                      <TextInput
                        allowFontScaling={false}
                        selectionColor="#FABA3C"
                        style={styles.bountyInput}
                      />
                      <Image
                        style={styles.bountyNumIcon}
                        source={require('../../../../assets/images/moneyBag.png')}
                      />
                    </View>
                    <Button
                      style={styles.buttonStyle1}
                      labelStyle={styles.buttonText1}
                      onPress={() => console.log('点击发布')}>
                      发布悬赏
                    </Button>
                  </View>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
export default ListView;

const styles = StyleSheet.create({
  // 加入的模态框样式
  modalBox: {
    height: windowHeight * 0.8,
    position: 'absolute',
    bottom: -130,
    // justifyContent:'flex-end',
    // alignItems:'flex-end'
  },
  contentView: {
    width: windowWidth - 4,
    marginHorizontal: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FABA3C',
    ...Platform.select({
      android: {
        height: '100%',
      },
      ios: {
        height: '64%',
      },
    }),
  },
  contenStyle: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  avatarStyle1: {
    position: 'absolute',
    top: 10,
    left: 150,
    zIndex: 999,
  },
  cardView: {
    width: '94%',
    marginTop: '20%',
    marginHorizontal: '3%',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    zIndex: -10,
    ...Platform.select({
      ios: {
        height: 520,
      },
      android: {
        height: 500,
      },
    }),
  },
  titleStyle: {
    height: 50,
    paddingLeft: 17,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  titleText: {
    fontSize: 19,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 50,
  },
  inputView: {
    height: 210,
    marginTop: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // backgroundColor:'red'
  },
  inputImageView: {},
  inputImage: {
    width: 25,
    height: 100,
  },
  inputContent: {},
  inputText: {
    fontSize: 15,
    color: '#000',
    lineHeight: 20,
  },
  inputTitle: {
    width: windowWidth - 100,
    height: 50,
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: '#F6F6F6',
  },
  inputDescribe: {
    width: windowWidth - 100,
    borderRadius: 5,
    marginTop: 5,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    backgroundColor: '#F6F6F6',
    ...Platform.select({
      ios: {
        height: 90,
      },
    }),
  },
  bountyView: {},
  bountyIconView: {
    height: 30,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // backgroundColor:'red'
  },
  bountyIcon: {
    width: 22,
    height: 22,
    marginTop: 4,
    marginRight: 10,
  },
  bountyText: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
    lineHeight: 30,
  },
  bountyNumView: {
    height: 60,
    position: 'relative',
    backgroundColor: '#FFEFD7',
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
  bountyNumIcon: {
    top: 17,
    right: 20,
    width: 25,
    height: 25,
    position: 'absolute',
    zIndex: 10,
  },
  buttonStyle1: {
    width: '90%',
    height: 43,
    borderRadius: 8,
    marginTop: 10,
    marginHorizontal: '5%',
    backgroundColor: '#F8B032',
  },
  buttonText1: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 24,
  },

  // 模态框样式到此结束
  parentLevel: {
    width: windowWidth,
    position: 'relative',
    // backgroundColor:'red',
    ...Platform.select({
      ios: {
        height: windowHeight - 145,
      },
      android: {
        height: windowHeight - 100,
      },
    }),
  },
  addStyle: {
    width: 60,
    height: 60,
    bottom: 30,
    right: 20,
    position: 'absolute',
    zIndex: 10,
  },
  scrollStyle: {
    flex: 1,
  },
  listStyle: {
    marginTop: 10,
    paddingBottom: 20,
  },
  itemStyle: {
    width: windowWidth,
    height: 105,
    borderColor: '#bbb',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatarStyle: {
    width: 64,
    height: 64,
    top: 20,
    left: 10,
    borderRadius: 32,
    borderColor: '#999',
    borderWidth: 1,
    position: 'absolute',
  },
  avatarView: {
    width: '22%',
    position: 'relative',
    paddingTop: 10,
  },
  timeStyle: {
    fontSize: 13,
    color: '#aaa',
    bottom: 5,
    position: 'absolute',
  },
  stateStyle: {
    width: 16,
    height: 16,
    top: 64,
    right: 12,
    borderRadius: 8,
    borderColor: '#aaa',
    borderWidth: 1,
    position: 'absolute',
    backgroundColor: '#26C78C',
    zIndex: 10,
  },
  textView: {
    width: '52%',
    paddingTop: 20,
    // backgroundColor:'orange'
  },
  detailsView: {
    width: '26%',
    // paddingTop:10,
    paddingRight: 5,
  },
  textStyle1: {
    width: '76%',
    height: 55,
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    lineHeight: 55,
    marginHorizontal: '12%',
  },
  textStyle2: {
    width: '80%',
    height: 20,
    fontSize: 13,
    color: '#bbb',
    textAlign: 'center',
    lineHeight: 20,
    marginHorizontal: '10%',
  },
  moneyView: {
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  moneyIcon: {
    paddingTop: 3,
  },
  moneySum: {
    fontSize: 20,
    color: '#ED405E',
    textAlign: 'center',
    lineHeight: 40,
  },
  buttonStyle: {
    width: '100%',
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FABA3C',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
  },
  waiM: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: windowWidth,
    height: windowHeight,
  },
});

/**
 * 代码描述: 帮忙圈列表模块 快来帮忙模块详情页
 * 作者:cxr
 * 创建时间:2023/12/11 09:10:11
 */
import {
  Modal, ButtonText, ModalBackdrop, ModalContent, VStack, ModalHeader, Heading,
  Text, ModalBody, Input, InputField, ModalFooter, HStack, ButtonIcon, Link, ArrowLeftIcon, View, Image,
  Textarea, TextareaInput, Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop,
  SelectDragIndicatorWrapper, SelectContent, SelectIcon, SelectItem, SelectDragIndicator,
  ChevronDownIcon,
  onChange
} from "@gluestack-ui/themed";
import { navigate } from '../../../../config/routs/NavigationContainer';
// import { Image } from "react-native-animatable";
import { rewardListApi } from '../../../../api/sys/reward';
import { rewardListType } from '../../../../api/sys/reward/types';
import { dateToMsgTime } from '../../../../components/Rests/TconTime';
import {FlatList} from 'react-native'
// 模态框引入的文件
import React, { useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  // Modal,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import LinearGradinet from 'react-native-linear-gradient';
import { Avatar, Icon, Button } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { rewardPublishApi } from '../../../../api/sys/reward/index'
import { rewardPublishType } from '../../../../api/sys/reward/types'
// '../../api/sys/reward/index.tsx'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Module = ({ item }) => (
  <View style={styles.itemStyle} key={item.rid}>
  <View style={styles.avatarView}>
    <Image
        style={styles.avatarStyle}
        source={{
          uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/3a2467e4-b2a5-47d1-9b77-35c3f4d5f588.jpg',
        }}
        accessibilityLabel='头像'
      />

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
      // 页面传参的方法
      onPress={() => navigate('RewardDetailsRoute', { item })}>
      查看详情
    </Button>
  </View>
</View>
);
const ListView = () => {
  const [allData,setAllData] = useState([]);

  var [conu, setConu] = useState(1)
  const rewardType: rewardListType = {
  pageNo: conu,
  pageSize: 5,
  };
  // 悬赏发布
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [title, setTitle] = useState(null);
  const [des, setDes] = useState(undefined);
  const [monrew, setMonrew] = useState(undefined);
  const [times1,setTimes1] = useState(0);
  console.log(des, '描述一下', title, '标题', monrew, '赏金');
  const times = Date.now();
  console.log(times, '我是时间');
  const handleSelect = (val:any) =>{
    setTimes1(val)
    console.log(times1,'每次改变的时候我是时间');
  }
  const rewardPublishData: rewardPublishType = {
    endTime: times,
    rdesc: des,
    // rid:number,
    // rimgs:string,
    rmoney: monrew,
    rtitle: title,
    startTime: times
  }
  console.log(rewardPublishData,'发布悬赏输入的数据');
  
  const getPubRew = async () => {
    const rePublish = await rewardPublishApi(rewardPublishData)
    console.log(rePublish,'这里是我发布的悬赏');
    
  }
  // 悬赏预览
  const [rewardData, rewardDataChange] = React.useState([]);
  const [refreshing, setRefreshing] = useState(false);
  // console.log('悬赏浏览获取',rewardData)
  const RewardApi = async (arr:rewardListType) => {
    // console.log('悬赏token',tokenStr)
    console.log('执行了下拉刷新。。。。。');
    console.log(rewardType);
    const rewardList = await rewardListApi(arr);
    console.log('帮忙圈', rewardList);
    var tips = rewardData.concat(rewardList.data).reverse();
    setAllData(tips);
    console.log(allData,'...............');
    
    rewardDataChange(tips)
  };
  React.useEffect(() => {
    RewardApi(
     { pageNo: conu,
      pageSize: 5 }
    );
  }, []); // 只在组件挂载时调用一次
  console.log('悬赏浏览获取', rewardData);
  setTimeout(()=> {
    setRefreshing(false);
  },1000)
  const [modalVisible, setModalVisible] = useState(false);
  const onRefresh = React.useCallback( () => {
    console.log('下拉刷新。。。。。。。');
    setRefreshing(true);
   
    setConu(conu ++);
    RewardApi(
      { pageNo: conu,
        pageSize: 5 }
    )
    console.log(conu,'看看每次打印的数据是否不同'); 
  },[]);
  return (
    <View style={styles.parentLevel}>
      <ScrollView style={styles.scrollStyle}>
        <View style={styles.listStyle}>
      <FlatList
        data={rewardData}
        renderItem={({item}) => <Module item={item} />}
        keyExtractor={item => item.rid}
        // onRefresh={onRefresh}
        onRefresh={ onRefresh}
        onEndReachedThreshold={0.1}
        refreshing={refreshing}
      />
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setModalVisible(true)}>
        <Image
          style={styles.addStyle}
          source={require('../../../../assets/images/3.0x/add_btn.png')}
          accessibilityLabel='发布悬赏'
        />
      </TouchableOpacity>

      {/* 加入的模态框 */}
      {/* 第一个模态框 */}
      <Modal
        isOpen={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        size="lg"
      >
        <ModalBackdrop />
        <ModalContent style={{ backgroundColor: '#FABA3C', borderRadius: 20 }}>
          <ModalHeader borderBottomWidth='$0' justifyContent="center" marginBottom={-30} zIndex={20}>
            <VStack space='sm'>
              <Avatar.Image
                size={80}
                style={styles.avatarStyle1}
                source={require('../../../../assets/images/defaultheader.png')}
                accessibilityLabel='头像'
              />
            </VStack>
          </ModalHeader>
          <ModalBody style={{ backgroundColor: '#fff', padding: 10, borderRadius: 20, paddingTop: 20 }}>
            <LinearGradinet
              colors={[
                'rgba(157, 104, 189,1)',
                'rgba(157, 104, 189,0.6)',
                'rgba(252, 251, 251,1)',
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.titleStyle}>
              <Text allowFontScaling={false} style={styles.titleText}>
                发布悬赏{' '}
                <Entypo size={20} color="#F8B032" name="triangle-right" />
              </Text>
            </LinearGradinet>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.inputImage}
                source={require('../../../../assets/images/alimom/frame1.png')}
                accessibilityLabel='标题'
              />
              <View>
                <Text size="md" style={{ marginVertical: 10, fontWeight: 'bold', color: '#000' }}>
                  标题
                </Text>
                <Input size="md">
                  <InputField placeholder="请输入标题" value={title} style={{ marginBottom: -4, width: '80%' }} onChangeText={(e: any) => { setTitle(e) }} />
                </Input>
                {/* 描述 */}
                <Text size="md" style={{ marginVertical: 10, fontWeight: 'bold', color: '#000' }}>
                  描述
                </Text>
                <Textarea
                  size="md"
                  isReadOnly={false}
                  isInvalid={true}
                  isDisabled={false}
                  w="$64"
                  h={129}
                >
                  <TextareaInput placeholder="请输入描述" value={des} onChangeText={(e: any) => { setDes(e) }} />
                </Textarea>
              </View>
            </View>
            <View style={styles.heng}>
              <Image source={require('../../../../assets/images/money_icon1.png')} style={{ width: 20, height: 20 }} accessibilityLabel='赏金' />
              <Text size="md" style={{ marginVertical: 10, fontWeight: 'bold', color: '#000', marginLeft: 8 }}>
                赏金
              </Text>
            </View>
            <Input size="md" bgColor="#FAE6CE" variant="underlined" alignItems="center" style={{ height: 50 }}>
              <InputField placeholder="请输入赏金" value={monrew} onChangeText={(e: any) => { setMonrew(e) }} textAlign="center" />
              <Text style={{ fontSize: 19, fontWeight: 'bold', marginRight: 8 }}>元</Text>
              <Image source={require('../../../../assets/images/moneyBag.png')} style={{ width: 32, height: 32, marginRight: 4 }} accessibilityLabel='赏金' />
            </Input>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <Text size="md" style={{ marginVertical: 10, fontWeight: 'bold', color: '#000', marginLeft: 8 }}>
                截止时间
              </Text>
              <Select style={{ width: windowWidth * 0.6 }}  onValueChange={handleSelect}>
                <SelectTrigger variant="rounded" size="md" >
                  {/* setTimes1 */}
                  <SelectInput placeholder="请选择" textAlign="center" marginTop={9} 
                  />
                  <Image source={require('../../../../assets/images/chevron-right.png')} style={{ width: 22, height: 22, marginRight: 20 }} accessibilityLabel='箭头'/>
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>

                    <SelectItem label="半个小时" value="1800000" />
                    <SelectItem label="两个小时" value="7200000" />
                    <SelectItem
                      label="一天"
                      value="86400000"
                    />
                    <SelectItem
                      label="一周"
                      value="604800000"
                    />
                    <SelectItem
                      label="一个月"
                      value="2592000000"
                    />
                    <SelectItem
                      label="三个月"
                      value="7776000000"
                    />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </View>
            <VStack space='lg' w='$full'>
              <Button
                // onPress={() => {
                //   // setShowModal2(true);
                //   getPubRew()
                // }}
                onPress={() => {getPubRew()}}
                style={{ backgroundColor: '#FDAA00', borderRadius: 10, marginTop: 20, height: 46, justifyContent: 'center' }}

              >
                <ButtonText>发布悬赏</ButtonText>
              </Button>
              <HStack>
              </HStack>
            </VStack>
          </ModalBody>
          <ModalFooter borderTopWidth='$0' >

          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* 发布正确显示的模态框 */}
      <Modal
        isOpen={showModal2}
        onClose={() => {
          setShowModal2(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader borderBottomWidth='$0'>
            <VStack space='sm'>
              <Heading size='lg'>发布悬赏</Heading>
            </VStack>
          </ModalHeader>
          <ModalBody contentContainerStyle={{ alignItems: 'center', marginBottom: 20 }}>
            <Text size='sm'>恭喜你，悬赏发布成功！</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* 发布错误显示的模态框 */}
      <Modal
        isOpen={showModal3}
        onClose={() => {
          setShowModal2(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader borderBottomWidth='$0'>
            <VStack space='sm'>
              <Heading size='lg'>发布悬赏</Heading>
            </VStack>
          </ModalHeader>
          <ModalBody contentContainerStyle={{ alignItems: 'center', marginBottom: 20 }}>
            <Text size='sm'>没有发布成功，再试一次吧！</Text>
          </ModalBody>
        </ModalContent>
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
    bottom: -130
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
  inputView: {
    height: 210,
    marginTop: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // backgroundColor:'red'
  },
  inputImageView: {},
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
    width: 59,
    height: 59,
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
  heng: {
    flexDirection: 'row',
    // justifyContent:'center',
    alignItems: 'center'
  },
  avatarStyle1: {
    // position: 'absolute',
    // top: 10,
    // left: 150,
    // zIndex: 999,
    margin: "auto",
    width: '100%'
  },
  titleStyle: {
    height: 50,
    paddingLeft: 17,
    borderRadius: 10,
    // marginHorizontal: 20,
    marginTop: 20,

  },
  titleText: {
    fontSize: 19,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 50,

  },
  inputImage: {
    width: 25,
    height: 110,
    marginTop: 10,
    marginRight: 3
  },
});

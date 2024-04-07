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
import { rewardListApi } from '../../../../api/sys/reward';
import { rewardListType } from '../../../../api/sys/reward/types';
import { dateToMsgTime } from '../../../../components/Rests/TconTime';
import { Alert, FlatList } from 'react-native';
import DateTimeUtils from '../../../../utils/DateTimeUtils'
// 模态框引入的文件
import React, { useState } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import LinearGradinet from 'react-native-linear-gradient';
import { Avatar, Icon, Button } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { rewardPublishApi } from '../../../../api/sys/reward/index'
import { rewardPublishType } from '../../../../api/sys/reward/types'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Module = ({ item }) => (
  <View style={styles.itemStyle} key={item.index}>
    <View style={styles.avatarView}>
      <Image
        style={styles.avatarStyle}
        source={{
          uri: 'http://dummyimage.com/400x400',
        }}
        accessibilityLabel='头像'
        alt="头像"
      />
      <View style={styles.stateStyle} />
      <Text allowFontScaling={false} style={styles.timeStyle}>
        {DateTimeUtils.formattedDateTime(item.endTime).split(' ')[0]}
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
const ListView = (data:any) => {

  var order = data.data;
  const [allData, setAllData] = useState([]);
  var [conu, setConu] = useState(1);
  // 悬赏发布
  const [modalVisible, setModalVisible] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');
  const [monrew, setMonrew] = useState(0);
  const [times1, setTimes1] = useState(0);
  const times = Date.now();
  console.log(times, '我是时间');
  const handleSelect = (val: any) => {
    setTimes1(val)
    console.log(times1, '每次改变的时候我是时间');
  }
  const rewardPublishData: rewardPublishType = {
    endTime: times,
    rdesc: des,
    rmoney: monrew,
    rtitle: title,
    startTime: times
  }
  console.log(rewardPublishData, '发布悬赏输入的数据');

  const getPubRew = async () => {
    const rePublish = await rewardPublishApi(rewardPublishData)
    console.log(rePublish, '这里是我发布的悬赏');
  }
  // 悬赏预览
  const [rewardData, rewardDataChange] = React.useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const RewardApi = async (arr: rewardListType) => {
    const rewardList = await rewardListApi(arr);
    console.log(rewardList,'---------------------');
    
    var tips = allData.concat(rewardList.data);
    console.log(tips, '我是每次列表的值==========');
    setAllData(tips);
  };

  React.useEffect(() => {
    // Alert.alert('一开始')
    // 首先执行这个渲染页面
    RewardApi({
      pageNo: 1,
      pageSize: 9
    });
  }, []); // 只在组件挂载时调用一次

  const onload = async () => {
    // Alert.alert('加载中11.....')
    setConu(conu += 1);
    const rewardList = await rewardListApi(
      {
        pageNo: conu,
        pageSize: 9
      }
    );
    var tips = allData.concat(rewardList.data);
    console.log(tips, '我是每次列表的值==========',conu);
    setAllData(tips);
  };

  const onRefresh = async () => {
    
    setRefreshing(false);
    setConu(conu == 1);
    const rewardList = await rewardListApi(
      {
        pageNo: conu,
        pageSize: 9
      }
    );
    var tips = rewardData.concat(rewardList.data);
    console.log(tips, '我是每次列表的值==========',conu)
    setAllData(tips);
  }
  return (
    <View style={styles.parentLevel}>
      {/* <ScrollView style={styles.scrollStyle}> */}
        <View style={styles.listStyle}>
          <FlatList
          initialNumToRender={6}
          inverted={order}
            data={allData}
            renderItem={({ item }) => <Module item={item} />}
            ListEmptyComponent={
              <View style={styles.midd}>
                <Text>没有发布悬赏，请稍后再来看看吧！</Text>
              </View>
            }
            keyExtractor={(item) => item.rid}
            onRefresh={onRefresh}
            refreshing={refreshing}
            onEndReachedThreshold={0.01}
            onEndReached={() => {
              onload()
            }}
          />
        </View>
      {/* </ScrollView> */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setModalVisible(true)}>
        <Image
          style={styles.addStyle}
          source={require('../../../../assets/images/3.0x/add_btn.png')}
          accessibilityLabel='发布悬赏'
          alt="头像"
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
                alt="头像"
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
              <Image source={require('../../../../assets/images/money_icon1.png')} style={{ width: 20, height: 20 }} accessibilityLabel='赏金' alt="头像" />
              <Text size="md" style={{ marginVertical: 10, fontWeight: 'bold', color: '#000', marginLeft: 8 }}>
                赏金
              </Text>
            </View>
            <Input size="md" bgColor="#FAE6CE" variant="underlined" alignItems="center" style={{ height: 50 }}>
              <InputField placeholder="请输入赏金" value={monrew} onChangeText={(e: any) => { setMonrew(e) }} textAlign="center" />
              <Text style={{ fontSize: 19, fontWeight: 'bold', marginRight: 8 }}>元</Text>
              <Image source={require('../../../../assets/images/moneyBag.png')} style={{ width: 32, height: 32, marginRight: 4 }} accessibilityLabel='赏金' alt="头像" />
            </Input>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <Text size="md" style={{ marginVertical: 10, fontWeight: 'bold', color: '#000', marginLeft: 8 }}>
                截止时间
              </Text>
              <Select style={{ width: windowWidth * 0.6 }} onValueChange={handleSelect}>
                <SelectTrigger variant="rounded" size="md" >
                  {/* setTimes1 */}
                  <SelectInput placeholder="请选择" textAlign="center" marginTop={9}
                  />
                  <Image source={require('../../../../assets/images/chevron-right.png')} style={{ width: 22, height: 22, marginRight: 20 }} accessibilityLabel='箭头' alt="头像" />
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
                onPress={() => { getPubRew() }}
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
  midd: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
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
    marginTop: 0,
    paddingBottom: 20
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
    paddingTop: 20
  },
  detailsView: {
    width: '26%',
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
  heng: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarStyle1: {
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
  }
});

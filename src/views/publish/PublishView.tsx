/*
 * @Author: xxs
 * @Date: 2023-10-07 17:43:58
 * @LastEditTime: 2023-11-07 12:00:00
 * @FilePath: \newpark_native\src\views\publish\PublishView.tsx
 * @Description: 发布帖子页面
 */
// import {
//   Box,
//   Center,
//   HStack,
//   Icon,
//   IconButton,
//   Stagger,
//   useDisclose,
//   useToast,
// } from 'native-base';
import * as Animatable from 'react-native-animatable';
import { IconButton } from 'react-native-paper';
import { Center,Box } from '@gluestack-ui/themed';
import React, {Component, useRef, useState} from 'react';
import {Text, StyleSheet, View, Button, Animated, TouchableOpacity, Easing, Dimensions} from 'react-native';
import {loginOutApi} from '../../api/sys/lgoin';
import Storage from '../../utils/AsyncStorageUtils';
import {navigate} from '../../config/routs/NavigationContainer';
import BellView from '../../components/Bell';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default class PublishView extends Component {
  render() {
    // const toast = useToast();

    const loginOut = async () => {
      const tokenStr = await Storage.get('usr-token');
      console.log('token-->', tokenStr);
      //登录出
      const loginOutAPI = await loginOutApi(tokenStr + '');

      if (loginOutAPI.code === 200) {
        // toast.show({
        //   description: '退出成功',
        //   placement: 'top',
        // });
        //清空用户缓存
        Storage.clean();
        navigate('LoginStacker');
      }
    };

    // const {SM2} = require('gm-crypto');

    // const test = () => {
    //   // 定义需要解密的密文
    //   const encryptedData =
    //     '049C3EBD50249621DDCBE4255B22850DF63FC4424EDC3C0C8922E27908223B9003339732B5BCA4A889B7C08242FB799A6178D21689CA47630D608DB72B04C99F746CEDD5029DD4E28F530D82A00418E7002A283D789483693CAA71FC84F23C8ADAC3925CABF89B63E4966EE82359FCB2D643DA9AC87C1BC81488B584A68562FC004EC90F82C945DE4BEAA41EDCE9548FBD11371DBA27E80A27682FFF08B0EAD0CF3ED7463584C5A885799193862B42E5B4CA0FFC27A9520A1EDADFE591114CF8992FDB66E3AFD14D626DE4E7E3135397C21CE8C886B35445C867E562C599515BD442A0F889350B73307DFD852D6179F3CFE5C2DE139E879F126087C2978F7BDE54E2B2A4BAA6D3154954CB4AAD25BCC3197AF9B3BDE0F31C14B2AB58078012188E71CB25200204CECA06D9C77E1C3E50C429A404367C7B3DD805BD25749BBF1436AA14BFEFF3D95402BD9D438A97768430235CB7B0A36383DC2D545594539D7A725B76D839ED45319503EABAABABC8A0AEDEA55ADDF94D64F0BEDE71C324839E57948EEEFBC3A14F527E2D9D70B1FC942DFC51F19639A896A6FB51CA74C7FA631D86B8E8BA7DD173D69FEA97ED3857077BEF093EAEB2FCC906144B123984127478EED6EF8CE3B10835F179DECB005F30EC8C93DB75F7359ADBB48907AA0252DB97CFD789A0DB166DF83B200BEA6FFA0A4D9A6765FA7D7520774930E3321328F0ACFC3CCC08CA2FF83702172E8278231376B63CDA12A37693AC432A284DD056CDC1EF70A2DA96DA9ED58BA1E41512C7E1E2312324ADB71BBC45EBADA0C2999B3D8CE37E0659722EA0A316E17242C233E8A2D1397E4085A3DA0D0B4FD7C3C15087038D2ABC0446F2585875A90FD9057806C7210104CB4C1CD738F740B5AB623E30BEBDF4B51B99D6FE76C73D9D7FC138A2DF5407FE421D831F9C01855F30B911696C2CABD0F050EA97A799F468346DC3A4675B66E5CD69A627488456A53BFFC36DC38A23E5D90BBEB706D5236B3A753E420E630995264BE8E86EAB9513EFECDEAE9BDEDFC613C2D105C0C5FB699184C2A8837527F103507418A126B19804DACDF462CA6838A20EE14A8F69A35CCFFAFF594C7ED0DE967321513086AAB10D94D64B022EBA0B4F97FF63B11CA173587BF16506AA4EEBEFEDA5DD4F690BD94413918885E36B68C81ACEBAF0BE69B09D332864496D210CB9F3AB8F16796CD9BCE205AB3BC1E3776A80F73DB7F81CFA1647C77989DE8DD8B6700FF6A73E40DD9C89AF80F855DE410A7635F45EA51489C38BCEB3AC7CC4710C0C74DA0D2AAAFB2F9BEDF5582953ACD64964E35232AB632E748EFA365528734FC5B7D59EACA59A2329D919250E5B5F1D845AAF36E400BA632A114CE7F8794677EDFA90DC749C69A165636EC7DF9816705B1E07450765A3098FFF91A2A2E1F8674B4453449B3504EC98B9BF0FB3C16C99A852693642B176560C711217835779502C18A876037AD077BCB7A3961351D24712C1B17D8826BCCDB9D19E4C4A574AC2B58331455D8A2736F81EB7590AFA6913FF278B998C331A70A60B0439C19BC5142F2D0B1FF679A72145E61E6CDFE426BF440CB5D6DC029381B99F2BE15FCEF38491802348A68612C9ADBBB9EF3821CE6E43B3B1D8E3F47585CC0478529F3A79C278E4162637100BFB1EAC898E4CAEA29838F273041FF8562C5AA066D0943FBB20CA968EE416505D78CA01800052450C2751D838471295D90249832FA038940A06E010CF46A836C1166E7A74D4435318985E6BE5AFA0EDB5C9D6C3ED9EC2EC19D17DAE2304E7C948E81A48B1461D39F0F1293E7DAF1D4FF644280E274D3BFC57AC72D40A929FFA749A19E117BFAE01EEA34A07FC4C3E9892DAD2F6B2A0DC48FD54CA0F8326CE1D8FE2D96E4221B90EE0EA5382C0CD30E0A78094BCBD11892C132EB72D0624D40AF057BC7D26536346592F42549085763CFA693463050A3F03405B9D3DB1A05937B90B10A0081489966642DA51E55BED3E9B94AE3EA7644B59864E5627AE0E76CE2484CEF468F63FAF1D9B3490206A96A9BE6BC7BABD85FC34A0B8187FF95DD8F106DE73A46DD96B8B8A706A683160402D019BA1BF512BC6C4C384E43155AD81B5F74AC14AF9E0096CFD3D563E23774D89372006B82CFF593C35B26BE59B94903341E442160423A6B3564D1643B1758D7900EE1901E6D18377135CFF0D89A473E4ACD024422F154A66059E074D986C6B73E3F07503247CF9866451A9AF8C75509CFF929CFA783FDFDAA46E18205D85102F2D5999391B2D11E6548FC0636295C09F201BEF3CFF2BC0B49B3C033035890DF5A6234EFCAA7F14C41F77B0D83E74777599A98C9B878183D1EBCB72C6605C87FCE45FE669D890B949B4F5287AC28D9BA351A5B1C372B1A3FDBC8CCCD182E952AC10AA8F44487309DFF0B4C4F216E730C98C6452E93455';

    //   // 定义私钥
    //   const privateKey =
    //     '308193020100301306072a8648ce3d020106082a811ccf5501822d0479307702010104209135a0dd817cc935ebcd9d6c0551cffea903ab3fbabc8009b35d2037edd80123a00a06082a811ccf5501822da14403420004f16494746de1bfcda0ed267c214f7440fe32766d302217c303399fbfce220687e6c62f4a38fe9c792018cd9797a3cf4d933a0f0c92cc378169c58e6d072cad40';

    //   const decryptedData = SM2.decrypt(privateKey, encryptedData);

    //   console.log('decrypt--->', decryptedData);
    // };

    return (
      <View style={styles.centerText}>
        {/* <Text>禁用</Text> */}
        {/* <Text> PublishView </Text>
        <Button title="登出调试" onPress={loginOut} /> */}
        <Example />
        {/* <Button title="test" onPress={test} /> */}
        <View style={styles.bell}>
          <BellView></BellView> 
      </View>
      </View>
    );
  }
}

const Example = () => {
  // const {isOpen, onToggle} = useDisclose();
  const animatedValue1 = useRef(new Animated.Value(0)).current;
  const animatedValue2 = useRef(new Animated.Value(0)).current;
  const animatedValue3 = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.sequence([
      Animated.spring(animatedValue1, {
        toValue: 1,
        speed:80,
        bounciness:60,
        useNativeDriver: false,
      }),
      Animated.spring(animatedValue2, {
        toValue: 1,
        speed:80,
        bounciness:60,
        useNativeDriver: false,
      }),
      Animated.spring(animatedValue3, {
        toValue: 1,
        speed:80,
        bounciness:60,
        useNativeDriver: false,
      }),
    ]).start()

    // Animated.parallel([
    //   Animated.spring(
    //     animatedValue1,{
    //       toValue: 1,
    //       friction: 2, //弹跳系数
    //       useNativeDriver: false
    //     }
    //   )
    // ])
  }

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.sequence([
      Animated.timing(animatedValue1, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue2, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue3, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start()
  };

  return (
    <Center>
      {/* <Text>禁用</Text> */}
      <Box alignItems="center" h={220}>
        <Animated.View style={{opacity:animatedValue1,transform:[{scale:animatedValue1}]}}>
          <Text>发布帖子</Text>
        </Animated.View>
        <Animated.View style={{opacity:animatedValue2,transform:[{scale:animatedValue2}]}}>
          <Text>打卡记录</Text>
        </Animated.View>
        <Animated.View style={{opacity:animatedValue3,transform:[{scale:animatedValue3}]}}>
          <Text>公告</Text>
        </Animated.View>
        <Button title="点击出现" onPress={() => fadeIn()}></Button>
        <Button title="点击消失" onPress={() => fadeOut()}></Button>
     
      {/* <Stagger
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
        <View style={{position: 'absolute', top: -40,left:40}}>
        <Text>4</Text>
          <IconButton
            mb="4"
            variant="solid"
            bg="indigo.500"
            colorScheme="indigo"
            borderRadius="full"
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
        <View style={{position: 'absolute', bottom: 0}}>
        <Text>3</Text>
        <IconButton
          mb="4"
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
        <View style={{position: 'absolute', bottom: 0,right:10}}>
        <Text>2</Text>
          <IconButton
            mb="4"
            variant="solid"
            bg="teal.400"
            colorScheme="teal"
            borderRadius="full"
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
        <View style={{position: 'absolute', top: -40,right:40}}>
          <Text>打卡</Text>
          <IconButton
            mb="4"
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
      </Stagger> */}
      </Box>
      {/* <HStack alignItems="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          bg="cyan.400"
          icon={
            <Icon
              // as={MaterialCommunityIcons}
              size="6"
              name="dots-horizontal"
              color="warmGray.50"
              _dark={{
                color: 'warmGray.50',
              }}
            />
          }
        />
      </HStack> */}
    </Center>
  );
};
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:windowWidth,
    height:windowHeight
  },
  bell:{
      position:'absolute',
      bottom:0,
      right:0
  }
});

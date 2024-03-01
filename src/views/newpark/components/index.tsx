import * as React from 'react';
import  { useState } from 'react';
import { Trans } from 'react-i18next';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import BellView from '../../../components/Bell';
import ChatModule from './ChatModule';
import CommunityModule from './CommunityModule';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TabNav = () => {
  const [tabVal, setTab] = useState('tab1');
  const handleTabPress = (tab: string) => {
    console.log('Tab状态' + tab);
    setTab(tab);
  };
  const [chat,setchat] = useState('chat1');
  const handleTabaChat = (tab:string) => {
    setchat(tab);
  }

  return (
    <SafeAreaView style={styles.safeStyle}>
      <View style={styles.headView}>
        <View style={styles.headGrid}>
          <View style={styles.tabGrid}>
            <View style={styles.tabItem}>
              <View style={tabVal === 'tab1' ? styles.tabBg : null} />
              <TouchableOpacity onPress={() => handleTabPress('tab1')}>
                <Text
                  allowFontScaling={false}
                  style={
                    tabVal === 'tab1'
                      ? styles.selectedText
                      : styles.selectedText1
                  }
                >
                  <Trans>newPatkTab.tab1</Trans>
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabItem}>
              <View style={tabVal === 'tab2' ? styles.tabBg1 : null}></View>
              <TouchableOpacity onPress={() => handleTabPress('tab2')}>
                <Text
                  allowFontScaling={false}
                  style={
                    tabVal === 'tab2'
                      ? styles.selectedText
                      : styles.selectedText1
                  }
                >
                  <Trans>newPatkTab.tab2</Trans>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={tabVal === 'tab1' ? styles.tabMore : styles.scrollShow}>
            <Image source={require('../../../assets/images/search_in_circle.png')}></Image>
          </View>
        </View>
      </View>
      <View style={tabVal === 'tab1' ? null : styles.scrollShow}>
        <CommunityModule></CommunityModule>
      </View>
      <View style={tabVal === 'tab2' ? null : styles.scrollShow}>
        <ChatModule></ChatModule>
      </View>
      <View style={styles.bell}>
        <BellView></BellView>
      </View>
    </SafeAreaView>
  )
}
export default TabNav;

const styles = StyleSheet.create({
  bell: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    zIndex: 999
  },
  safeStyle: {
    width: windowWidth,
    height: windowHeight - 60,
    backgroundColor: '#FFFFFF',
    zIndex: -10
  },
  headView: {
    width: windowWidth,
    height: 80,
    backgroundColor: '#FFFFFF',
  },
  headGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabGrid: {
    flex: 1,
    width: windowWidth,
    height: 68,
    marginTop: 20,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tabItem: {
    width: 100,
    height: 50,
    alignItems: 'center',
    zIndex: 10,
  },
  tabMore: {
    flex: 1,
    marginTop: 26,
    paddingRight: 25,
    alignItems: 'flex-end',
  },
  tabBg: {
    width: 18,
    height: 18,
    top: -2,
    right: 27,
    borderRadius: 9,
    borderWidth: 1.5,
    position: 'absolute',
    borderColor: '#DCDCDC',
    backgroundColor: '#FABA3C',
    zIndex: -10,
  },
  tabBg1: {
    width: 18,
    height: 18,
    top: -2,
    right: 7,
    borderRadius: 9,
    borderWidth: 1.5,
    position: 'absolute',
    borderColor: '#DCDCDC',
    backgroundColor: '#FABA3C',
    zIndex: -10,
  },
  selectedText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000000',
  },
  selectedText1: {
    color: '#808080',
  },
  scrollShow: {
    display: 'none'
  },
  
})
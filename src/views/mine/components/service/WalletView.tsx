import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { Dimensions, Image, Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-animatable';
import LinearGradinet from 'react-native-linear-gradient';
import { Appbar } from 'react-native-paper';
// import { Button } from 'react-native-paper';
import { navigate } from '../../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const buttonClick = () =>{
    console.log('我被点击了!')
}
let BALANCE:number = 0.00;
let textSelected = '1'

export default class WalletView extends Component {
    render () {
        return (
            <View style={styles.parentView}>
              <Appbar.Header style={styles.headerStyle}>
                    <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('MineStacker')}/>
                    <Text allowFontScaling={false} style={styles.headerText}>
                      <Trans>navigationBar.title9</Trans>
                    </Text>
                </Appbar.Header>
                <View style={styles.walletView}>
                    <View style={styles.titleView}>
                        {/* <Text allowFontScaling={false} style={styles.titleStyle}>我的钱包</Text> */}
                    </View>
                    <View style={styles.walletCard}>
                        <LinearGradinet colors={['rgba(249,187,81,1)','rgba(254,241,217,0.90)']}start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.walletBg}>
                            <View style={styles.cardContent}>
                                <Text allowFontScaling={false} style={styles.cardText1}>新园豆</Text>
                                <Text allowFontScaling={false} style={styles.cardText2}>¥{BALANCE}</Text>
                                <Image source={require('../../../../assets/images/tup/能量豆.png')} style={styles.bean} accessibilityLabel='能量豆' alt="头像"></Image>
                            </View>
                            <View style={styles.cardButtonView}>
                                <View style={styles.cardButtonIos}>
                                    <TouchableOpacity style={styles.cardButtonStyle} onPress={buttonClick}>
                                        <Text allowFontScaling={false} style={styles.cardButtonText}>我要提现</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableNativeFeedback>
                                    <View style={[styles.cardButtonStyle,styles.cardButtonAndroid]}>
                                    <Text allowFontScaling={false} style={styles.cardButtonText}>我要提现</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </LinearGradinet>
                    </View>
                    <View style={styles.tabView}>
                        <View style={styles.tabItem}>
                            <Text allowFontScaling={false} style={textSelected === '1'?styles.tabTextSelected:styles.tabItemText}>收入</Text>
                        </View>
                        <View style={styles.tabItem}>
                            <Text allowFontScaling={false} style={textSelected === '2'?styles.tabTextSelected:styles.tabItemText}>支出</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text allowFontScaling={false}>暂无收入</Text>
                </View>
            </View>
        )
    }
  
}

const styles = StyleSheet.create({
  parentView:{
    width:windowWidth,
    height:windowHeight,
    backgroundColor:'#FFF'
  },
  headerStyle:{
    width: windowWidth,
    height: 45,
    backgroundColor: '#ffb700',
  },
  headerText:{
    width: '80%',
    fontSize: 17,
    color: '#FFF',
    lineHeight: 45,
    textAlign: 'center',
},
  walletView:{
    width:windowWidth,
    height:280,
    backgroundColor:'#FFF'
  },
  titleView:{
    width:windowWidth,
    height:40,
    alignItems:'center',
    marginTop:20

  },
  titleStyle:{
    fontSize:17,
    fontWeight:'600',
    lineHeight:40,
    color:'#000'
  },
  walletCard:{
    width:windowWidth-20,
    height:130,
    borderRadius:8,
    marginHorizontal:10,
    marginBottom:10
  },
  walletBg:{
    width:windowWidth-20,
    height:120,
    borderRadius:8,
    paddingHorizontal:12
  },
  cardContent:{
    height:60,
    flexDirection:'row',
    justifyContent:'flex-start'

  },
  cardText1:{
    fontSize:22,
    fontWeight:'600',
    color:'#FFF',
    lineHeight:60,
    marginRight:16
  },
  cardText2:{
    fontSize:15,
    color:'#FFF',
    lineHeight:60
  },
  cardButtonView:{
    height:60,
    alignItems:'flex-end',
    paddingTop:10
  },
  cardButtonStyle:{
    width:170,
    height:36,
    alignItems:'center',
    backgroundColor:'#f8b032',
    borderRadius:4,
  },
  cardButtonText:{
    fontSize:16,
    color:'#FFF',
    lineHeight:36
  },
  cardButtonIos:{
    ...Platform.select({
        android:{
            display:'none'
        }
    })
  },
  cardButtonAndroid:{
    ...Platform.select({
        ios:{
            display:'none'
        }
    })
  },
  tabView:{
    width:windowWidth-40,
    height:50,
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  tabItem:{
    width:70,
    height:50,
    alignItems:'flex-start'
  },
  tabItemText:{
    fontSize:13,
    color: '#808080',
    lineHeight:50
  },
  tabTextSelected:{
    fontSize:17,
    fontWeight:'600',
    color:'#000',
    lineHeight:50
  },
  bean:{
    width:33,
    height:28,
    marginLeft:15,
    marginTop:15
  }

})
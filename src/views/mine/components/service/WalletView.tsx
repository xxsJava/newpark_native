import React, {Component} from 'react';
import { View,StyleSheet,Dimensions,Platform,SafeAreaView,TouchableOpacity,Button,TouchableNativeFeedback } from 'react-native';
import { Text } from 'react-native-animatable';
import LinearGradinet from 'react-native-linear-gradient';
// import { Button } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const buttonClick = () =>{
    console.log('我被点击了!')
}

let textSelected = '1'

export default class WalletView extends Component {
    render () {
        return (
            <SafeAreaView style={styles.topLabel}>
                <View style={styles.navigationBarView}>
                    <Text style={styles.navigationBarText}>返回</Text>
                </View>
                <View style={styles.walletView}>
                    <View style={styles.titleView}>
                        <Text style={styles.titleStyle}>我的钱包</Text>
                    </View>
                    <View style={styles.walletCard}>
                        <LinearGradinet colors={['rgba(249,187,81,1)','rgba(254,241,217,0.90)']}start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.walletBg}>
                            <View style={styles.cardContent}>
                                <Text style={styles.cardText1}>余额</Text>
                                <Text style={styles.cardText2}>¥0.0</Text>
                            </View>
                            <View style={styles.cardButtonView}>
                                <View style={styles.cardButtonIos}>
                                    <TouchableOpacity style={styles.cardButtonStyle} onPress={buttonClick}>
                                        <Text style={styles.cardButtonText}>我要提现</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableNativeFeedback>
                                    <View style={[styles.cardButtonStyle,styles.cardButtonAndroid]}>
                                    <Text style={styles.cardButtonText}>我要提现</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </LinearGradinet>
                    </View>
                    <View style={styles.tabView}>
                        <View style={styles.tabItem}>
                            <Text style={textSelected === '1'?styles.tabTextSelected:styles.tabItemText}>收入</Text>
                        </View>
                        <View style={styles.tabItem}>
                            <Text style={textSelected === '2'?styles.tabTextSelected:styles.tabItemText}>支出</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text>暂无收入</Text>
                </View>
            </SafeAreaView>
        )
    }
  
}

const styles = StyleSheet.create({
  topLabel:{
    width:windowWidth,
    height:40,
    backgroundColor:'#FFF'
  },
  navigationBarView:{
    width:windowWidth,
    height:40
  },
  navigationBarText:{
    fontSize:16,
    lineHeight:40,
    paddingLeft:20
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
    marginTop:20
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
  }

})
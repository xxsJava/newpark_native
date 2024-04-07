import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { CalendarList } from "react-native-common-date-picker";
import { navigate } from '../../../../config/routs/NavigationContainer';
// import { DatePicker } from "react-native-common-date-picker";
const PunchCardScreen = () => {
    const [punchTime, setPunchTime] = useState('');
    const [visible, setVisible] = useState(false)
    const handlePunch = () => {
        const currentTime = new Date().toLocaleString();
        setPunchTime(currentTime);
        setVisible(true)
        // 在这里处理打卡逻辑，将打卡时间记录到数据中
    };
    const onPress = () => navigate('CommunityChannelRoute');
    return (
        <View style={styles.container}>

            {/* <DatePicker
                confirm={({ date }: { date: any }) => {
                    console.warn(date)
                }}
            /> */}
            {/* 这个是日历的选择器 */}
            <Modal animationType={'slide'} visible={visible}  transparent={true}>
                <CalendarList
                    // defaultDates={['2015-10-10', '2015-10-11']}
                    containerStyle={styles.datas}
                    showToolBar={false}
                    // minDate='2024-01-01'
                    selectedDateMarkRangeColor='#F0BA38'
                    selectedDateMarkColor='#E96556'
                    selectedDateMarkType='circle'
                    // scrollContentStyle={{backgroundColor: 'red'}}
                    onPressDate={() => { }}
                    minDate='2023-01-01'
                    defaultDates={[new Date(), new Date()]}
                    weeksChineseType={true}
                    weeksTextStyle={{ color: '#F0BA38', fontSize: 18, fontWeight: 'bold' }}
                    hideArrow={false}
                >
                </CalendarList>
                <TouchableHighlight onPress={onPress}>
                    <View style={styles.button}>
                    <Image source={require('../../../../assets/images/tup/fanhui.png')} style={styles.back} accessibilityLabel='图片' alt="头像"></Image>
                        <Text style={styles.backFont}>返回</Text>
                    </View>
                </TouchableHighlight>
                
            </Modal>
            <View style={styles.cards}>
                <Text style={styles.title}>打卡记录</Text>
                <TouchableOpacity style={styles.punchButton} onPress={handlePunch}>
                    <Text style={styles.buttonText}>打卡</Text>
                </TouchableOpacity>
                {punchTime && <Text style={styles.punchTime}>上次打卡时间：{punchTime}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'black'
    },
    punchButton: {
        backgroundColor: '#F0BA38',
        paddingHorizontal: 80,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    punchTime: {
        marginTop: 20,
        fontSize: 16,
    },
    cards: {
        position: 'absolute',
        bottom: 60

    },
    datas: {
        // flex: 0.6 ,
        position: 'absolute',
        height: 640,
        top: 40
    },
    button: {
        alignItems:'flex-start',
        backgroundColor: "#fff",
        padding: 10,
        flexDirection:'row'
    },
    back:{
        width:30,
        height:30
    },
    backFont:{
        lineHeight:30,
        fontSize:16,
        marginLeft:6,
        fontWeight:'bold'
    }
});

export default PunchCardScreen;
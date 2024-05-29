import { NativeModules } from 'react-native';
 
function alipay(pay_url) {
    return new Promise((resolve, reject) => {
        NativeModules.PayModule.alipay(pay_url, res => {
            // '6001': '支付取消', '6002': '网络连接出错', '4000': '支付失败', '5000': '重复请求'
            if (res.resultStatus === '9000') {
                resolve(res)
            } else {
                reject(res)
            }
        });
    })
}
 
export default alipay;
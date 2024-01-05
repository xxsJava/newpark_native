/**
 * @author xxs18
 * @description: TODO
 * @date 2023/12/25 18:08
 */
package com.newpark_native.listener;

import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.newpark_native.module.IMSDKRNModule;

import io.openim.android.sdk.listener.OnConnListener;

/**
 * @author xxs18
 * @description: 连接 监听器
 * @date 2023/12/25 18:08
 */
public class IMConnLister implements OnConnListener {

    private final static String TAG = "IMConnLister";

    public static IMConnLister create(){
        return new IMConnLister();
    }

    @Override
    public void onConnectFailed(long l, String s) {
//                与服务器的连接失败
        Log.e(TAG, "服务器连接失败--->" + l + "-" + s);
        WritableMap params = Arguments.createMap();
        params.putString("code",l+"");
        params.putString("msg",s);
        IMSDKRNModule.create().sendEventRN("onConnectFailed",params);
    }

    @Override
    public void onConnectSuccess() {
//                已成功连接到服务器
        Log.i(TAG, "------------------->连接服务器成功");
        WritableMap params = Arguments.createMap();
        params.putString("msg","连接服务器成功");
        IMSDKRNModule.create().sendEventRN("onConnectServer",params);
    }

    @Override
    public void onConnecting() {
//                正在连接到服务器...
        Log.i(TAG, "------------------->正在连接服务器");
        WritableMap params = Arguments.createMap();
        params.putString("msg","正在连接服务器");
        IMSDKRNModule.create().sendEventRN("onConnectServer",params);
    }

    @Override
    public void onKickedOffline() {
//                当前用户被踢下线
        Log.i(TAG, "------------------->当前用户被踢下线");
        WritableMap params = Arguments.createMap();
        params.putString("msg","当前用户被踢下线");
        IMSDKRNModule.create().sendEventRN("onConnectServer",params);
    }

    @Override
    public void onUserTokenExpired() {
//                登录令牌已过期
        Log.i(TAG, "------------------->登录令牌已过期");
        WritableMap params = Arguments.createMap();
        params.putString("msg","登录令牌已过期");
        IMSDKRNModule.create().sendEventRN("onConnectServer",params);
    }
}

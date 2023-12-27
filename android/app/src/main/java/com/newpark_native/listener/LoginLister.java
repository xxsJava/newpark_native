/**
 * @author xxs18
 * @description: TODO
 * @date 2023/12/25 18:31
 */
package com.newpark_native.listener;

import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.newpark_native.module.IMSDKRNModule;

import io.openim.android.sdk.listener.OnBase;

/**
 * @author xxs18
 * @description: 登录监听
 * @date 2023/12/25 18:31
 */
public class LoginLister implements OnBase<String> {

    private final static String TAG = "LoginLister";

    public static LoginLister create(){
        return new LoginLister();
    }

    @Override
    public void onError(int i, String s) {
        Log.e(TAG, "IM登录失败"+"-------->"+i+"-"+s);
        WritableMap params = Arguments.createMap();
        params.putInt("code",i);
        params.putString("msg",s);
        IMSDKRNModule.create().sendEventRN("onErrorLogin",params);
    }

    @Override
    public void onSuccess(String data) {
        Log.i(TAG, "登录成功"+data);
        WritableMap params = Arguments.createMap();
        params.putString("data",data);
        IMSDKRNModule.create().sendEventRN("onSuccessLogin",params);
    }

}

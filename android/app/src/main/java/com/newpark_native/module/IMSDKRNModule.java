package com.newpark_native.module;

import android.app.Application;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.newpark_native.config.IMInitConfig;
import com.newpark_native.listener.IMConnLister;
import com.newpark_native.listener.IMListener;
import com.newpark_native.listener.LoginLister;
import com.newpark_native.service.IIMService;

import javax.annotation.Nullable;

import io.openim.android.sdk.OpenIMClient;

/**
 * @author xxs18
 * @description: IM-SDK-ANDROID 模块
 * @date 2023/12/25 18:27
 */
public class IMSDKRNModule extends ReactContextBaseJavaModule {

    private final static String TAG = "IM-SDK-RN";

    private static ReactApplicationContext reactContext;

    public static IMSDKRNModule create(){
        return new IMSDKRNModule(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "IMSDKRN";
    }

    public IMSDKRNModule(ReactApplicationContext reactContext) {
        super(reactContext);
        IMSDKRNModule.reactContext = reactContext;
    }

    @ReactMethod
    public void inItSDK() {
        Log.i(TAG, "------------------->IM初始化");
        //初始化IM
        Application application = new Application();
        //初始化sdk
        Boolean isInItSDK = OpenIMClient.getInstance().initSDK(application, IMInitConfig.create().initConfigs(), IMConnLister.create());
        Log.i(TAG, "IM初始化状态 ----------->" + isInItSDK);
        //监听器初始化
        IMListener.create().initListener();
        Log.i(TAG, "------------------->IM初始化完毕");
    }

    @ReactMethod
    public void login(String usrId,String token) {
        Log.i(TAG, "-------------->IM登录");
        OpenIMClient.getInstance().login(LoginLister.create(), usrId, token);
    }

    @ReactMethod
    public void doMethod(String methodName) {
        Log.i(TAG,"---------------->执行动态方法"+methodName);
        IIMService.create().doMethod(methodName);
    }

    public void sendEventRN(String eName,@Nullable WritableMap params){
        sendEvent(eName,params);
    }

    /**
     * 发送事件
     * @param eventName
     * @param params
     */
    protected void sendEvent(String eventName, @Nullable WritableMap params) {
        Log.i(TAG,"发送事件------>"+eventName);
        Log.i(TAG,"请求上下文------>"+reactContext);
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
    }

}

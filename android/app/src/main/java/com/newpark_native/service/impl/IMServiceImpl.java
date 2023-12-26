/**
 * @author xxs18
 * @description: TODO
 * @date 2023/12/26 11:25
 */
package com.newpark_native.service.impl;

import android.util.Log;

import com.newpark_native.service.IIMService;

import io.openim.android.sdk.OpenIMClient;
import io.openim.android.sdk.listener.OnBase;

/**
 * @author xxs18
 * @description: IM 业务
 * @date 2023/12/26 11:26
 */
public class IMServiceImpl implements IIMService {

    private final static String TAG = "IM-Service";

    @Override
    public void doMethod(String methodName){
        try {
            this.getClass().getMethod(methodName,new Class[]{}).invoke(this,new Object[]{});
        }catch (Exception e){
            Log.e(TAG,"--------------->方法调用失败");
        }
    }

    @Override
    public void logout() {

        OpenIMClient.getInstance().logout(new OnBase<String>() {
            @Override
            public void onError(int code, String error) {
                //Logout failed
                Log.e(TAG,"失败:code="+code+"msg="+error);
            }
            @Override
            public void onSuccess(String data) {
                //Logout successful
                Log.i(TAG,"退出成功------>"+data);
            }
        });
    }

}

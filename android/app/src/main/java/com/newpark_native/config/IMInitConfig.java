/**
 * @author xxs18
 * @description: TODO
 * @date 2023/12/25 18:14
 */
package com.newpark_native.config;

import android.content.Context;
import android.util.Log;

import java.io.File;

import io.openim.android.sdk.models.InitConfig;

/**
 * @author xxs18
 * @description: IM 初始化配置
 * @date 2023/12/25 18:14
 */
public class IMInitConfig {

    private final static String TAG = "IMInitConfig";

    /**
     * API 地址
     */
    private final String API_URL = "http://www.newpark.sougouhihg.top:10002/";

    /**
     * WebSocket 地址
     */
    private final String WS_URL = "ws://www.newpark.sougouhihg.top:10001";

    /**
     * 本地缓存地址
     */
    private final String STORAGE_DIR = "NewPark/data";

    private final String STORAGE_DIR_MSG = "NewPark/message";

    public static IMInitConfig create() {
        return new IMInitConfig();
    }

    public InitConfig initConfigs(Context context) {
        //配置
        InitConfig initConfig = new InitConfig(API_URL, WS_URL, getStorageDir(STORAGE_DIR,context));
        //创建消息存放目录
        getStorageDir(STORAGE_DIR_MSG,context);
        initConfig.isLogStandardOutput = true;
        return initConfig;
    }

    /**
     * 获取本地路径
     * @param dirStr
     * @return
     */
    private String getStorageDir(String dirStr, Context context) {
//        File dir = new File(Environment.getExternalStorageDirectory(),dirStr);
        File external = context.getExternalFilesDir(dirStr);

        assert external != null;
        if (!external.exists()) {
                if (external.mkdirs()) {
                    Log.i(TAG, "目录已创建！！！");
                    return external.getPath();
                }
                Log.i(TAG,"目录创建失败！！！");
        }
        Log.i(TAG, "目录已存在！！！");
        return external.getPath();
    }
}

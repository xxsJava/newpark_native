package com.newpark_native.pak;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.newpark_native.module.IMSDKRNModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


/**
 * @author xxs18
 * @description: IMSDk Package
 * @date 2023/12/25 14:40
 */
public class IMSDKPackage implements ReactPackage {
    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactApplicationContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new IMSDKRNModule(reactApplicationContext));
        return modules;
    }


    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactApplicationContext) {
        return Collections.emptyList();
    }
}

package com.newpark_native.service;

import com.newpark_native.service.impl.IMServiceImpl;

public interface IIMService {

    static IMServiceImpl create() {
        return new IMServiceImpl();
    }

    /**
     * 动态调用方法
     * @param methodName
     */
    void doMethod(String methodName);

    void logout();

}

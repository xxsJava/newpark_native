/*
 * @Author: xxs
 * @Date: 2024-02-20 16:51:02
 * @LastEditTime: 2024-02-20 16:52:13
 * @FilePath: \newpark_native\src\components\WebView\WebViewCompent.tsx
 * @Description: desc
 */

import React from "react";
import { Dimensions } from "react-native";
import WebView from "react-native-webview";
const windowWidth = Dimensions.get('window').width;

const WebViews = (props:any) => {
    return (
        <WebView
                style={{ height: props.h, width: windowWidth,zIndex:10 }}
                originWhitelist={ ['*'] }
                // 布尔值,指定WebView中是否启用JavaScript。只在Android上使用，因为在iOS上默认启用了JavaScript。
                javaScriptEnabled={ true }
                // 布尔值,指定是否开启DOM本地存储
                domStorageEnabled={ true }
                //  injectedJavaScript={handleInjectJavascript('hello world')}
                // 加载时强制使用loading转圈视图，如果为true，webview可能会加载失败，显示为空白
                startInLoadingState={true}
                source={ {uri:props.uri} }
                />
    )
}

export default WebViews;
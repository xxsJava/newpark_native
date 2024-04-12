import { Text, Toast } from "@gluestack-ui/themed";
import React, { ReactNode } from "react";

const ToastCompent = (text:string) : ReactNode =>{
    return (
        <Toast action="attention" variant="solid">
        <Text allowFontScaling={false}>{text}</Text>
      </Toast>
    )
}

export default ToastCompent;
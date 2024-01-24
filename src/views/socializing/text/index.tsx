import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import PopUp from "./popUp"

export default () => {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <Button title="打开弹窗" onPress={() => setVisible(true)} />
            <PopUp visible={visible} onClose={() => setVisible(false)}>
                <Text>占位</Text>
                <Text>占位</Text>
                <Text>占位</Text>
                <Text>占位</Text>
                <Text>占位</Text>
                <Text>占位</Text>
            </PopUp>
        </>
    )
}
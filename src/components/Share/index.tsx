/*
 * @Author: xxs
 * @Date: 2024-02-19 11:17:40
 * @LastEditTime: 2024-02-19 11:19:01
 * @FilePath: \newpark_native\src\components\Share\index.tsx
 * @Description: desc
 */
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText } from '@gluestack-ui/themed';
import React, { useState } from 'react';

const ActionSheet = ({ flag }: { flag: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(flag);

  const handleClose = () => {
    // 关闭动作表的逻辑
    setIsOpen(false);
  };

  const handleShare = () => {
    // 处理分享逻辑
    handleClose(); // 分享后关闭动作表
  };

  return (
    <Actionsheet isOpen={flag} onClose={handleClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <ActionsheetItem onPress={handleShare}>
          <ActionsheetItemText>Share</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
          <ActionsheetItemText>Delete</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
          <ActionsheetItemText>Play</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
          <ActionsheetItemText>Favourite</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
          <ActionsheetItemText>Cancel</ActionsheetItemText>
        </ActionsheetItem>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default ActionSheet;

import SocializingView from '../../../views/socializing/SocializingView';
import MyGoroup from '../../../views/socializing/components/myGroup';

/*
 * @Author: xxs
 * @Date: 2023-10-31 16:50:31
 * @LastEditTime: 2024-04-29 09:49:15
 * @FilePath: \newpark_native\src\config\routs-config\StackerRout\SocializingStackerRout.tsx
 * @Description: 消息子导航
 */

export default {
  SocializingStacker: {
    component: SocializingView,
    options: {
      title: '消息',
      headerShown: false,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
    },
  }
};

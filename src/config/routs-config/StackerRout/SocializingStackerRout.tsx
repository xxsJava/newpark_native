import SocializingView from '../../../views/socializing/SocializingView';

/*
 * @Author: xxs
 * @Date: 2023-10-31 16:50:31
 * @LastEditTime: 2023-10-31 16:50:38
 * @FilePath: \newpark_native\src\config\routs-config\StackerRout\SocializingStackerRout.tsx
 * @Description: 消息子导航
 */
export default {
  SocializingStacker: {
    component: SocializingView,
    options: {
      title: '消息',
      headerStyle: {
        backgroundColor: 'tomato',
      },
    },
  },
};

/*
 * @Author: xxs
 * @Date: 2023-10-31 14:48:55
 * @LastEditTime: 2023-10-31 18:02:47
 * @FilePath: \newpark_native\src\config\routs-config\StackerRout\ROOTStackerRoute.tsx
 * @Description: desc
 */
import {StyleSheet} from 'react-native';
import {BommonTab} from '../../../routes/stacker';
import StylesALL from '../../../styles';
import LoginView from '../../../views/login';
import Registered from '../../../views/login/components/Registered';
import Verification from '../../../views/login/components/Verification';
import ForgetPass from '../../../views/login/components/ForgetPass';

/*
 * @Author: xxs
 * @Date: 2023-10-31 14:48:55
 * @LastEditTime: 2023-10-31 15:05:30
 * @FilePath: \newpark_native\src\config\routs-config\StackerRouter-config.tsx
 * @Description: StackerRouter路由配置
 */
export default {
    LoginStacker: {
      component: LoginView,
      options: {
        headerShown: false,
      },
    },
    LoginHome: {
      component: BommonTab,
      options: {
        headerShown: false,
      },
    },
    Verification: {
      component: Verification,
      options: {
        title: '短信验证',
        // headerTitleAlign: 'center',
        headerTitleStyle: StylesALL.navText,
        headerStyle: StylesALL.BGCOLOR,
      },
    },
    Registered: {
      component: Registered,
      options: {
        title: '注册信息填写',
        // headerTitleAlign: 'center',
        headerTitleStyle: StylesALL.navText,
        headerStyle: StylesALL.BGCOLOR,
      },
    },
    ForgetPass:{
      component: ForgetPass,
      options: {
        title: '忘记密码',
      }
    }
};

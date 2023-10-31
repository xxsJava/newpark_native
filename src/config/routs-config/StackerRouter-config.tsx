import {StyleSheet} from 'react-native';
import {BommonTab} from '../../routes/stacker';
import HomeStacker from '../../routes/stacker/HomeStacker';
import MineStacker from '../../routes/stacker/MineStacker';
import NewPatkStacker from '../../routes/stacker/NewPatkStacker';
import PublishStacker from '../../routes/stacker/PublishStacker';
import SocializingStacker from '../../routes/stacker/SocializingStacker';
import StylesALL from '../../styles';
import LoginView from '../../views/login';
import Registered from '../../views/login/components/Registered';
import Verification from '../../views/login/components/Verification';

/*
 * @Author: xxs
 * @Date: 2023-10-31 14:48:55
 * @LastEditTime: 2023-10-31 15:05:30
 * @FilePath: \newpark_native\src\config\routs-config\StackerRouter-config.tsx
 * @Description: StackerRouter路由配置
 */
export default {
  //推荐
  HomeStackerRout: {
    HomeStacker: {
      component: HomeStacker,
      options: {},
    },
  },
  //新园
  NewPatkStackerRout: {
    NewPatkStacker: {
      component: NewPatkStacker,
      options: {},
    },
  },
  //发布
  PublishStackerRout: {
    PublishStacker: {
      component: PublishStacker,
      options: {},
    },
  },
  //消息
  SocializingStackerRout: {
    SocializingStacker: {
      component: SocializingStacker,
      options: {},
    },
  },
  //我的
  MineStackerRout: {
    MineStacker: {
      component: MineStacker,
      options: {},
    },
  },
  //登录
  LoginStackerRout: {
    LoginStacker: {
      component: LoginView,
      options:{
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
  },
};

/*
 * @Author: xxs
 * @Date: 2023-10-29 20:43:34
 * @LastEditTime: 2023-10-30 11:12:24
 * @FilePath: \newpark_native\src\config\routs-config\index.tsx
 * @Description: 路由表
 *  component 组件
 *
 */

import HomeStacker from '../../routes/stacker/HomeStacker';
import MineStacker from '../../routes/stacker/MineStacker';
import NewPatkStacker from '../../routes/stacker/NewPatkStacker';
import PublishStacker from '../../routes/stacker/PublishStacker';
import SocializingStacker from '../../routes/stacker/SocializingStacker';
import LoginView from '../../views/login';
import { LoginInterceptor } from '../routs/lib/filter/TestFilter';

export default {
  ROOT: {
  },
  Routes: {
    //推荐
    Home: {
      component: HomeStacker,
      label: 'homeTab.recommend',
      SelectedIcon: 'storefront',
      UnSelectedIcon: 'storefront-outline',
    },
    //新园
    NewPark: {
      component: NewPatkStacker,
      label: 'homeTab.newPark',
      SelectedIcon: 'disc-outline',
      UnSelectedIcon: 'radio-button-on',
    },
    //发布
    Publish: {
      component: PublishStacker,
      label: 'homeTab.publish',
      SelectedIcon: 'add-circle',
      UnSelectedIcon: 'add-circle-outline',
    },
    //消息
    Socializing: {
      component: SocializingStacker,
      label: 'homeTab.socializing',
      SelectedIcon: 'chatbubbles',
      UnSelectedIcon: 'chatbubbles-outline',
    },
    //我的
    Mine: {
      component: MineStacker,
      label: 'homeTab.mine',
      SelectedIcon: 'person',
      UnSelectedIcon: 'person-outline',
    },
  },
  //子导航
  Stacker: {},
  InitRoute: 'Home',
  Record:{
    interceptors:[
			{
				clazz: LoginInterceptor
			}
		],
    component: LoginView
  }
};

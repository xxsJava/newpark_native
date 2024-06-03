/*
 * @Author: xxs
 * @Date: 2023-10-29 20:43:34
 * @LastEditTime: 2024-05-29 10:22:10
 * @FilePath: \newpark_native\src\config\routs-config\index.tsx
 * @Description: 路由表
 *  component 组件
 *  label 标签
 *  SelectedIcon 选中图标
 *  UnSelectedIcon 未选中图标
 */

// import {BommonTab} from '../../routes/stacker';
import HomeStacker from '../../routes/stacker/HomeStacker';
import MineStacker from '../../routes/stacker/MineStacker';
import NewPatkStacker from '../../routes/stacker/NewPatkStacker';
import SocializingStacker from '../../routes/stacker/SocializingStacker';
import LoginView from '../../views/login';
import { LoginInterceptor } from '../routs/lib/filter/LoginFilter';


export default {
  //主路由
  ROOT: {
    
  },
  //底部路由
  Routes: {
    //推荐
    Home: {
      component: HomeStacker,
      label: 'homeTab.recommend',
      SelectedIcon: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/tab/home.png',
      UnSelectedIcon: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/tab/home-un.png',
    },
    //新园
    NewPark: {
      component: NewPatkStacker,
      label: 'homeTab.newPark',
      SelectedIcon: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/tab/newpark.png',
      UnSelectedIcon: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/tab/newpark-un.png',
    },
    //发布
    Publish: {
      component: ()=>null,
      label: '',
      SelectedIcon: '',
      UnSelectedIcon: '',
    },
    //消息
    Socializing: {
      component: SocializingStacker,
      label: 'homeTab.socializing',
      SelectedIcon: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/tab/msg.png',
      UnSelectedIcon: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/tab/msg-un.png',
    },
    //我的
    Mine: {
      component: MineStacker,
      label: 'homeTab.mine',
      SelectedIcon: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/tab/my.png',
      UnSelectedIcon: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/tab/my-un.png'
    }
  },
  //默认路由
  InitRoute: 'Home',
  //拦截器
  Record: {
    interceptors: [
      {
        clazz: LoginInterceptor,
      },
    ],
    component: LoginView,
  },
};

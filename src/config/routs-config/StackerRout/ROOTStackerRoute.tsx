/*
 * @Author: xxs
 * @Date: 2023-10-31 14:48:55
 * @LastEditTime: 2023-11-01 17:05:01
 * @FilePath: \newpark_native\src\config\routs-config\StackerRout\ROOTStackerRoute.tsx
 * @Description: desc
 */
import {StyleSheet} from 'react-native';
import {BommonTab} from '../../../routes/stacker';
import StylesALL from '../../../styles';
import LoginView from '../../../views/login';
import Registered from '../../../views/login/components/Registered';
import SchoolIndex from '../../../views/login/components/SchoolIndex/index';
import Gender from '../../../views/login/components/Gender/index';
import InterestsHobbies from '../../../views/login/components/InterestsHobbies'
import Verification from '../../../views/login/components/Verification';
import PaymentView from '../../../views/mine/components/oder/PaymentView';
import ReceiptView from '../../../views/mine/components/oder/ReceiptView';
import EvaluateView from '../../../views/mine/components/oder/EvaluateView';
import AfterSalesView from '../../../views/mine/components/oder/AfterSalesView';
import CustomerServiceView from '../../../views/mine/components/service/CustomerServiceView';
import FeedbackView from '../../../views/mine/components/service/FeedbackView';
import MemberServicesView from '../../../views/mine/components/service/MemberServicesView';
import MyOrderView from '../../../views/mine/components/service/MyOrderView';
import MyPostView from '../../../views/mine/components/service/MyPostView';
import WalletView from '../../../views/mine/components/service/WalletView';
import CollectionView from '../../../views/mine/components/service/CollectionView';
import AddressManagementView from '../../../views/mine/components/service/AddressManagementView';
import SearchView from '../../../views/socializing/components/SearchView';
import ForgetPass from '../../../views/login/components/ForgetPass';
import CheckView from '../../../views/socializing/check/index'
import ProductView from '../../../views/home/components/commodity/index'
import HelpCircleView from '../../../views/home/components/helping/index'
import DetailsView from '../../../views/home/page/DetailsView'
import ProductChat from '../../../views/home/page/ProductChat'
import ViewOrders from '../../../views/home/page/ViewOrders'
import PurchasePage from '../../../views/home/page/PurchasePage'
import PostDetails from '../../../views/home/page/PostDetails'
import { options } from '@react-native-community/cli-platform-android/build/commands/buildAndroid';
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
  SchoolRoute:{
    component:SchoolIndex,
    options:{
      title:'学校索引',
      headerShown: false,
    }
  },
  GenderRoute:{
    component:Gender,
    options:{
      title:'性别选择',
      headerShown: false,
    }
  },
  InterestsHobbies:{
    component:InterestsHobbies,
    options:{
      title:'兴趣爱好',
      headerShown: false,
    }
  },
  PaymentRoute: {
    component: PaymentView,
    options: {
      title: '我的订单',
    },
  },
  ReceiptRoute: {
    component: ReceiptView,
    options: {
      title: '我的订单',
    },
  },
  EvaluateRoute: {
    component: EvaluateView,
    options: {
      title: '我的订单',
    },
  },
  AfterSalesRoute: {
    component: AfterSalesView,
    options: {
      title: '我的订单',
    },
  },
  CustomerServiceRoute: {
    component: CustomerServiceView,
    options: {
      title: '我的订单',
    },
  },
  MemberServicesRoute: {
    component: MemberServicesView,
    options: {
      title: '我的订单',
    },
  },
  MyOrderRoute: {
    component: MyOrderView,
    options: {
      title: '我的订单',
      headerShown: false,
    },
  },
  MyPostRoute: {
    component: MyPostView,
    options: {
      title: '我的帖子',
      headerShown: false,
    },
  },
  WalletRoute: {
    component: WalletView,
    options: {
      title: '我的钱包',
      headerShown: false,
    },
  },
  CollectionRoute: {
    component: CollectionView,
    options: {
      title: '我的收藏',
      // headerLeft:require('../../../assets/images/search_in_circle.png')
      headerShown: false,
    },
  },
  AddressManagementRoute: {
    component: AddressManagementView,
    options: {
      title: '我的地址',
      headerShown: false,
    },
  },
  FeedbackRoute: {
    component: FeedbackView,
    options: {
      title: '意见反馈',
      headerShown: false,
    },
  },
  SearchView: {
    component: SearchView,
    options: {
      headerShown: false,
    },
  },
  ForgetPass: {
    component: ForgetPass,
    options: {
      title: '忘记密码',
    },
  },
  CheckRoute: {
    component:CheckView,
    options:{
      title:'消息聊天',
      headerShown: false,
    }
  },
  ProductRoute:{
    component:ProductView,
    options:{
      title:'快快来买',
      headerShown: false,
    }
  },
  HelpCircleRoute:{
    component:HelpCircleView,
    options:{
      title:'快来帮忙',
      headerShown: false,
    }
  },
  DetailsRoute:{
    component:DetailsView,
    options:{
      title:'商品详情',
      headerShown:false
    }
  },
  ProductChatRoute:{
    component:ProductChat,
    options:{
      title:'接单聊天',
      headerShown:false
    }
  },
  ViewOrdersRoute:{
    component:ViewOrders,
    options:{
      title:'查看订单',
      headerShown:false
    }
  },
  PurchasePageRoute:{
    component:PurchasePage,
    options:{
      title:'立即购买',
      headerShown:false
    }
  },
  PostDetailsRoute:{
    component:PostDetails,
    options:{
      title:'帖子详情',
      headerShown:false
    }
  }
};

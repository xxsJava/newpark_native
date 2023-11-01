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
<<<<<<< HEAD
import HomeView from '../../../views/home/HomeView';
import NewPatkView from '../../../views/newpark/NewPatkView';
import PublishView from '../../../views/publish/PublishView';
import SocializingView from '../../../views/socializing/SocializingView';
import MineVIew from '../../../views/mine/MineVIew';
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
import SearchView from '../../../routes/stacker/SearchView'
=======
import ForgetPass from '../../../views/login/components/ForgetPass';
>>>>>>> 730c22b2e88dadf99ce1f4112a858aa907cffc30

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
<<<<<<< HEAD
  },
  PaymentRoute: {
    component: PaymentView,
    options: {
      title:'我的订单'
    }
  },
  ReceiptRoute: {
    component: ReceiptView,
    options: {
      title:'我的订单'
    }
  },
  EvaluateRoute: {
    component: EvaluateView,
    options: {
      title:'我的订单'
    }
  },
  AfterSalesRoute: {
    component: AfterSalesView,
    options: {
      title:'我的订单'
    }
  },
  CustomerServiceRoute: {
    component: CustomerServiceView,
    options: {
      title:'我的订单'
    }
  },
  MemberServicesRoute: {
    component: MemberServicesView,
    options: {
      title:'我的订单'
    }
  },
  MyOrderRoute: {
    component: MyOrderView,
    options: {
      title:'我的订单'
    }
  },
  MyPostRoute: {
    component: MyPostView,
    options: {
      title:'我的订单'
    }
  },
  WalletRoute: {
    component: WalletView,
    options: {
      title:'我的订单'
    }
  },
  CollectionRoute: {
    component: CollectionView,
    options: {
      title:'我的订单'
    }
  },
  AddressManagementRoute: {
    component: AddressManagementView,
    options: {
      title:'我的订单'
    }
  },
  FeedbackRoute: {
    component: FeedbackView,
    options: {
      title:'我的订单'
    }
  },
  SearchView:{
    component:SearchView,
    options:{
      
    }
  }
=======
    ForgetPass:{
      component: ForgetPass,
      options: {
        title: '忘记密码',
      }
    }
>>>>>>> 730c22b2e88dadf99ce1f4112a858aa907cffc30
};

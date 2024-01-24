/*
 * @Author: xxs
 * @Date: 2023-10-31 14:48:55
 * @LastEditTime: 2024-01-23 18:29:10
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
// import passWord from '../../../views/login/passWord'
import PaymentView from '../../../views/mine/components/oder/PaymentView';
import ReceiptView from '../../../views/mine/components/oder/ReceiptView';
import ReviceCode from '../../../components/ReviceCode';
import EvaluateView from '../../../views/mine/components/oder/EvaluateView';
import AfterSalesView from '../../../views/mine/components/oder/AfterSalesView';
import CustomerServiceView from '../../../views/mine/components/service/CustomerServiceView';
import FeedbackView from '../../../views/mine/components/service/FeedbackView';
import MineThree from '../../../views/mine/components/MineThree';
import MemberServicesView from '../../../views/mine/components/service/MemberServicesView';
import MyOrderView from '../../../views/mine/components/service/MyOrderView';
import MyPostView from '../../../views/mine/components/service/MyPostView';
import WalletView from '../../../views/mine/components/service/WalletView';
import CallCustom from '../../../views/mine/components/service/CallCustom';
// import SanJiLiand from '../../../views/mine/components/service/sanJiLiand';
import SanJiLiand from '../../../views/mine/components/service/SanJiLiand'
import InviteFriends from '../../../views/mine/components/service/InviteFriends'
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
import SetUp from '../../../views/mine/components/setup';
import CommunityChannel from '../../../views/newpark/page/CommunityChannel'
import RewardView from '../../../views/publish/page/reward'
import PublishProducts from '../../../views/publish/page/commodity'
import ReleasePost from '../../../views/publish/page/post'
import ClockInView from '../../../views/publish/page/clockIn'
import RewardDetails from '../../../views/home/components/helping/RewardDetails'
import TakeOrderPart from '../../../views/home/components/helping/TakeOrderPart'
import CreateCommunity from '../../../views/socializing/components/more/CreateCommunity'
import ObjCard from '../../../views/socializing/components/ObjCard'
import CheckRecord from '../../../views/publish/page/clockIn/CheckRecord'
import Empty from '../../../components/Error/empty'
import SystemError from '../../../components/Error/SystemError'
import BeginOne from '../../../components/begin/BeginOne'
import Testone from '../../../views/mine/components/TestOne'
// import BeginTwo from '../../../components/begin/BeginTwo'
// import BeginThree from '../../../components/begin/BeginThree'
// import BeginFour from '../../../components/begin/BeginFour'
import PersonalData from '../../../views/mine/components/setup/PersonalData'
import Comment from '../../../components/Error/Comment'
import Collect from '../../../components/Error/Collect'
import NoNews from '../../../components/Error/NoNews'
import NoParents from '../../../components/Error/NoParents'
import AddNewAddress from '../../../views/mine/components/service/AddNewAddress'
import ThreeJiContent from '../../../views/mine/components/service/threeJiContent'
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
  AddNewAddress:{
    component: AddNewAddress,
     options: {
    //   headerShown: false,
    title: '新增收货地址',
     },
  },
  ThreeJiContent:{
    component: ThreeJiContent,
     options: {
    //   headerShown: false,
    title: '三级联动',
     },
  },
  SanJiLiand:{
    component: SanJiLiand,
     options: {
    //   headerShown: false,
    title: '三级联动测试版',
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
  // passWord:{
  //   component: passWord,
  //   options: {
  //     headerShown: false,
  //   },
  // },
  Registered: {
    component: Registered,
    options: {
      title: '注册信息填写',
      // headerTitleAlign: 'center',
      headerTitleStyle: StylesALL.navText,
      headerStyle: StylesALL.BGCOLOR,
    },
  },
  Testone:{
    component:Testone,
    options:{
      title:'测试复制页1',
      headerShown: true,
    }
  },
  BeginOne:{
    component:BeginOne,
    options:{
      title:'引导页1',
      headerShown: false,
    }
  },
  // BeginTwo:{
  //   component:BeginTwo,
  //   options:{
  //     title:'引导页2',
  //     headerShown: false,
  //   }
  // },
  // BeginThree:{
  //   component:BeginThree,
  //   options:{
  //     title:'引导页3',
  //     headerShown: false,
  //   }
  // },
  ReviceCode:{
    component:ReviceCode,
    options:{
      title:'收到验证码',
      headerShown: false,
    }
  },
  // BeginFour:{
  //   component:BeginFour,
  //   options:{
  //     title:'引导页4',
  //     headerShown: false,
  //   }
  // },
  PersonalData:{
    component:PersonalData,
    options:{
      title:'个人资料',
      // headerShown: false,
    }
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
      title: '我的订单'
    },
  },
  CustomerServiceRoute: {
    component: CustomerServiceView,
    options: {
      title: '新园客服',
      headerShown: false,
    },
  },
  MemberServicesRoute: {
    component: MemberServicesView,
    options: {
      title: '会员服务',
      headerShown: false,
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
  CallCustom:{
    component:CallCustom,
    options:{
      title:'新园客服',
      headerShown:false
    }
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
  InviteFriendsRoute: {
    component: InviteFriends,
    options: {
      title: '邀请好友',
      headerShown: true,
    },
  },
  MineThree:{
    component:MineThree,
    options:{
      title:'我的商品悬赏',
      headerShown: false,
    }
  },
  SearchView: {
    component: SearchView,
    options: {
      title: '全局搜索',
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
  },
  SetUpRoute:{
    component:SetUp,
    options:{
      title:'设置',
      headerShown:false
    }
  },
  CommunityChannelRoute:{
    component:CommunityChannel,
    options:{
      title:'社区频道',
      headerShown:false
    }
  },
  RewardRoute:{
    component:RewardView,
    options:{
      title:'发布悬赏',
      headerShown:false
    }
  },
  PublishProductsRoute:{
    component:PublishProducts,
    options:{
      title:'发布商品',
      headerShown:false
    }
  },
  ReleasePostRoute:{
    component:ReleasePost,
    options:{
      title:'发布帖子',
      headerShown:false
    }
  },
  ClockInViewRoute:{
    component:ClockInView,
    options:{
      title:'打卡',
      headerShown:false
    }
  },
  CheckRecordRoute:{
    component:CheckRecord,
    options:{
      title:'打卡记录',
      headerShown:false
    }
  },
  RewardDetailsRoute:{
    component:RewardDetails,
    options:{
      title:'悬赏详情页',
      headerShown:false
    }
  },
  TakeOrderPartRoute:{
    component:TakeOrderPart,
    options:{
      title:'悬赏进行中-接单人详情页',
      headerShown:false
    }
  },
  CreateCommunityRoute:{
    component:CreateCommunity,
    options:{
      title:'创建社区',
      headerShown:false
    }
  },
  ObjCard:{
    component:ObjCard,
    options:{
      title:'对方的卡片',
      headerShown:false
    }
  },
  Empty:{
    component:Empty,
    options:{
      title:'空空如也',
      headerShown:false
    }
  },
  SystemError:{
    component:SystemError,
    options:{
      title:'系统错误',
      headerShown:false
    }
  },
  Comment:{
    component:Comment,
    options:{
      title:'评论看法',
      headerShown:false
    }
  },
  Collect:{
    component:Collect,
    options:{
      title:'收藏',
      headerShown:false
    }
  },
  NoNews:{
    component:NoNews,
    options:{
      title:'没有消息',
      headerShown:false
    }
  },
  NoParents:{
    component:NoParents,
    options:{
      title:'没有伙伴',
      headerShown:false
    }
  }
};

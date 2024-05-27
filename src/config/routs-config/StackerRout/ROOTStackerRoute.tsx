/*
 * @Author: xxs
 * @Date: 2023-10-31 14:48:55
 * @LastEditTime: 2024-05-27 10:24:30
 * @FilePath: \newpark_native\src\config\routs-config\StackerRout\ROOTStackerRoute.tsx
 * @Description: desc
 */
// 测试选择学校
import MainMess from '../../../components/Bell/MainMess';
import Collect from '../../../components/Error/Collect';
import Comment from '../../../components/Error/Comment';
import NoNews from '../../../components/Error/NoNews';
import NoParents from '../../../components/Error/NoParents';
import SystemError from '../../../components/Error/SystemError';
import Empty from '../../../components/Error/empty';
import ReviceCode from '../../../components/ReviceCode';
import Uplode from '../../../components/post/uplode';
import { BommonTab } from '../../../routes/stacker';
import StylesALL from '../../../styles';
import Colors from '../../../styles/Color';
import Complain from '../../../views/home/components/Complain';
import JiaoyiData from '../../../views/home/components/commodity/JiaoyiData';
import RewardDetails from '../../../views/home/components/helping/RewardDetails';
import TakeOrderPart from '../../../views/home/components/helping/TakeOrderPart';
import HelpCircleView from '../../../views/home/components/helping/index';
import FastDating from '../../../views/home/components/typeComponents/FastDating';
import FastTakeOrders from '../../../views/home/components/typeComponents/FastTakeOrders';
import HotChatRoom from '../../../views/home/components/typeComponents/HotChatRoom';
import DetailsView from '../../../views/home/page/DetailsView';
import PostDetails from '../../../views/home/page/PostDetails';
import ProductChat from '../../../views/home/page/ProductChat';
import PurchasePage from '../../../views/home/page/PurchasePage';
import ViewOrders from '../../../views/home/page/ViewOrders';
import LoginView from '../../../views/login';
import ForgetPass from '../../../views/login/components/ForgetPass';
import Gender from '../../../views/login/components/Gender/index';
import InterestsHobbies from '../../../views/login/components/InterestsHobbies';
import Registered from '../../../views/login/components/Registered';
import Test1 from '../../../views/login/components/Registered/test';
import schoolData from '../../../views/login/components/SchoolIndex/IndexTableView';
import SchoolIndex from '../../../views/login/components/SchoolIndex/index';
import Verification from '../../../views/login/components/Verification';
import MineThree from '../../../views/mine/components/MineThree';
import LeaderBoard from '../../../views/mine/components/homepage/LeaderBoard';
import MoreView from '../../../views/mine/components/homepage/MoreView';
import About from '../../../views/mine/components/manage/About';
import Black from '../../../views/mine/components/manage/Black';
import AfterSalesView from '../../../views/mine/components/oder/AfterSalesView';
import EvaluateView from '../../../views/mine/components/oder/EvaluateView';
import ReceiptView from '../../../views/mine/components/oder/ReceiptView';
import AddNewAddress from '../../../views/mine/components/service/AddNewAddress';
import AddressManagementView from '../../../views/mine/components/service/AddressManagementView';
import CallCustom from '../../../views/mine/components/service/CallCustom';
import CollectionView from '../../../views/mine/components/service/CollectionView';
import CustomerServiceView from '../../../views/mine/components/service/CustomerServiceView';
import FeedbackView from '../../../views/mine/components/service/FeedbackView';
import InviteFriends from '../../../views/mine/components/service/InviteFriends';
import MemberServicesView from '../../../views/mine/components/service/MemberServicesView';
import MyPostView from '../../../views/mine/components/service/MyPostView';
import MyPubView from '../../../views/mine/components/service/MyPubView';
import MyPurView from '../../../views/mine/components/service/MyPurView';
import OrderDetails from '../../../views/mine/components/service/OrderDetails';
import SanJiLiand from '../../../views/mine/components/service/SanJiLiand';
import WalletView from '../../../views/mine/components/service/WalletView';
import SetUp from '../../../views/mine/components/setup';
import PersonalData from '../../../views/mine/components/setup/PersonalData';
import ChatRoom from '../../../views/newpark/components/ChatRoom';
import ChatHome from '../../../views/newpark/components/chatHome';
import CommunityChannel from '../../../views/newpark/page/CommunityChannel';
import ClockInView from '../../../views/publish/page/clockIn';
import CheckRecord from '../../../views/publish/page/clockIn/CheckRecord';
import { default as PubGood, default as PublishProducts } from '../../../views/publish/page/commodity';
import ReleasePost from '../../../views/publish/page/post';
import RewardView from '../../../views/publish/page/reward';
import NewApply from '../../../views/socializing/add/NewApply';
import PeopleList from '../../../views/socializing/add/PeopleList';
import Apply from '../../../views/socializing/add/apply';
import Addcomm from '../../../views/socializing/add/community';
import AddPeople from '../../../views/socializing/add/people';
import GroupChat from '../../../views/socializing/check/GroupChat';
import GroupMessage from '../../../views/socializing/check/GroupMessage';
import CheckView from '../../../views/socializing/check/index';
import CreateGroup from '../../../views/socializing/components/CreateGroup';
import FriProfile from '../../../views/socializing/components/Fripiofile';
import NewChatRoom from '../../../views/socializing/components/NewChatRoom';
import ObjCard from '../../../views/socializing/components/ObjCard';
import SearchView from '../../../views/socializing/components/SearchView';
import Myqunzu from '../../../views/socializing/components/contact/Myqunzu';
import MyqunzuSeach from '../../../views/socializing/components/contact/MyqunzuSeach';
import CreateCommunity from '../../../views/socializing/components/more/CreateCommunity';
import MyGoroup from '../../../views/socializing/components/myGroup';
import MyCommunity from '../../../views/socializing/components/page/MyCommunity';
import Remark from '../../../views/socializing/components/remark';
import SelectFriend from '../../../views/socializing/components/selectFriend';
import StartGroup from '../../../views/socializing/components/startGroup';
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
  // 这个是测试选择学校用的
  schoolData:{
    component: schoolData,
    options: {
      headerShown: true,
      title:'学校选择'
    },
  },
  //  headerTitleAlign: 'center'
  CreateGroup:{
    component:CreateGroup,
    options:{
      headerTitleAlign:'center',
      title:'发起群聊',
      headerShown:true
    }
  },
  FriProfile:{
    component:FriProfile,
    options:{
      headerShow:true,
      title:''
    }
  },
  // 这个是创建群聊
  startGroup:{
    component:StartGroup,
    options:{
      title:''
    }
  },
  NewChatRoom:{
    component:NewChatRoom,
    options:{
      title:'新的聊天室',
      headerTitleAlign: 'center'
    }
  },
  Myqunzu:{
    component:Myqunzu,
    options: {
      headerShown: true,
      title:'我的群组',
      headerTitleAlign: 'center',

    },
  },
  remark:{
    component:Remark,
    options:{
      title:'备注',
      headerTitleAlign: 'center'
    }
  },
  MyqunzuSeach:{
    component:MyqunzuSeach,
    options: {
      headerShown: false,
      title:'我的群组搜索的'
    },
  },
  JiaoyiData:{
    component:JiaoyiData,
    options:{
      headerShown: false,
      title:'交易圈的数据列表'
    }
  },
  Complain:{
    component:Complain,
    options:{
      headerShown:true,
      title:'举报',
      headerTitleAlign: 'center'
    }
  },
  NewApply:{
    component: NewApply,
    options: {
      title: '新的好友请求',
      headerTitleAlign: 'center'
    },
  },
  AddNewAddress:{
    component: AddNewAddress,
     options: {
    title: '新增收货地址',
     },
  },
  LeaderBoards:{
    component:LeaderBoard,
    options:{
      title:'排行榜',
      headerShown: false
    }
  },
  PeopleList:{
    component:PeopleList,
    options:{
      title:'添加牛友——牛友列表',
      // headerShown: false,
    }
  },
  MoreViews:{
    component:MoreView,
    options:{
      title:'更多'
    }
  },
  SelectFriend:{
    component:SelectFriend,
    options:{
      title:'我的好友',
      headerTitleAlign: 'center'
    }
  },
  GroupMessage:{
    component:GroupMessage,
    options:{
      title:'群聊信息'
    }
  },
  ChatRoom:{
    component: ChatRoom,
     options: {
    title: '创建聊天室',
     },
  },
  GroupChat:{
    component: GroupChat,
     options: {
      headerShown: false,
      title: '群聊页面',
     },
  },
  Black: {
    component: Black,
    options: {
      headerTitleAlign: 'center',
      title: '黑名单管理'
    },
  },
  MainMess:{
    component: MainMess,
    options: {
      headerShown: false,
      title: '待处理消息'
    },
  },
  About:{
    component: About,
    options: {
      headerTitleAlign: 'center',
      title: '关于我们'
    },
  },
  Uplode:{
    component: Uplode,
    options: {
   //   headerShown: false,
   title: '发布悬赏',
   headerTitleAlign: 'center',
    },
  },
  PubGood:{
    component: PubGood,
    options: {
     headerShown: false,
   title: '发布商品',
    },
  },
  Apply:{
    component: Apply,
    options: {
   //   headerShown: false,
   title: '新的好友',
    },
  },
  OrderDetails:{
    component:OrderDetails,
    options:{
      title:'商品详情页'
    }
  },
  AddPeople:{
    component: AddPeople,
    options: {
   //   headerShown: false,
   title: '添加好友',
    },
  },
  Addcomm:{
    component: Addcomm,
    options: {
   title: '加入社区',
    },
  },
  Test1:{
    component: Test1,
     options: {
    title: '测试头像',
     },
  },
  SanJiLiand:{
    component: SanJiLiand,
     options: {
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
      headerTitleStyle: StylesALL.navText,
      headerStyle: Colors.bMainColor,
    },
  },
  Registered: {
    component: Registered,
    options: {
      title: '注册信息填写',
      // headerTitleAlign: 'center',
      headerTitleStyle: StylesALL.navText,
      headerStyle: Colors.bMainColor,
      headerShown:false
    },
  },
  // BeginOne:{
  //   component:BeginOne,
  //   options:{
  //     title:'引导页1',
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
  ChatHome:{
    component:ChatHome,
    options:{
      title:'聊天室列表'
    }
  },
  PersonalData:{
    component:PersonalData,
    options:{
      title:'个人资料',
      headerTitleAlign: 'center'
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
  ReceiptRoute: {
    component: ReceiptView,
    options: {
      title: '我的订单',
      headerShown: false,
    },
  },
  EvaluateRoute: {
    component: EvaluateView,
    options: {
      title: '我的出售',
      headerShown: false,
    },
  },
  AfterSalesRoute: {
    component: AfterSalesView,
    options: {
      title: '售后',
      headerShown: false,
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
  MyPubRoute: {
    component: MyPubView,
    options: {
      title: '我的发布',
      headerShown: false,
    },
  },
  MyPurRoute:{
    component: MyPurView,
    options: {
      title: '我的购买',
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
      headerShown: false,
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
      // headerShown:false
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
  ReleasePost:{
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
      title:'资料设置',
      headerTitleAlign: 'center'
     
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
  },
  MyGroup:{
    component: MyGoroup,
    options:{
      title: '我的群组',
      headerShown: true,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
    }
  },
  MyCommunity:{
    component: MyCommunity,
    options:{
      title: '我的社区',
      headerShown: true,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
    }
  },
  FastDating:{
    component: FastDating,
    options:{
      title: '快速交友',
      headerShown: false
    }
  },
  FastTakeOrders:{
    component: FastTakeOrders,
    options:{
      title: '快速接单',
      headerShown: false
    }
  },
  HotChatRoom:{
    component: HotChatRoom,
    options:{
      title: '快速接单',
      headerShown: false
    }
  }
};

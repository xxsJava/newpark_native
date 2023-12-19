/*
 * @Author: xxs
 * @Date: 2023-10-25 14:01:51
 * @LastEditTime: 2023-10-25 14:02:03
 * @FilePath: \newpark_native\src\views\home\mock\index.tsx
 * @Description: 模拟数据
 */
export const postsData = [
    {title: 'O泡果奶', desc: '刚刚', key: 'item1',text:'刚刚和一位同学一起看这个犹如仙境的神鹿',labels:[{index:1,text:'仙境'},{index:2,text:'神鹿'},{index:3,text:'神仙'}],comments:[{index:1,name:'小学牛',text:'打卡留影'},{index:1,name:'小叮当猫',text:'许愿上岸'}]},
    {title: '小学牛', desc: '13分钟前', key: 'item2',text:'刚刚和一位同学一起看这个犹如仙境的神鹿',labels:[{index:1,text:'仙境'},{index:2,text:'神鹿'},{index:3,text:'神仙'}],comments:[{index:1,name:'小学牛',text:'打卡留影'},{index:1,name:'小叮当猫',text:'许愿上岸'}]},
    {title: 'O泡果奶1', desc: '刚刚', key: 'item3',text:'刚刚和一位同学一起看这个犹如仙境的神鹿',labels:[{index:1,text:'仙境'},{index:2,text:'神鹿'},{index:3,text:'神仙'}],comments:[{index:1,name:'小学牛',text:'打卡留影'},{index:1,name:'小叮当猫',text:'许愿上岸'}]},
    {title: '小学牛2', desc: '13分钟前', key: 'item4',text:'刚刚和一位同学一起看这个犹如仙境的神鹿',labels:[{index:1,text:'仙境'},{index:2,text:'神鹿'},{index:3,text:'神仙'}],comments:[{index:1,name:'小学牛',text:'打卡留影'},{index:1,name:'小叮当猫',text:'许愿上岸'}]},
]

export const commentData = [{
  index:1,
  name:'佩奇',
  time:'刚刚',
  num:'2.0w',
  image:require('../../../assets/images/avatar-nan.png'),
  text:'抬头和你分享一个月亮就很美好',
  itemData:[]
},{
  index:2,
  name:'佩奇',
  time:'刚刚',
  num:'2.0w',
  image:require('../../../assets/images/avatar-nan.png'),
  text:'抬头和你分享一个月亮就很美好',
  itemData:[{
      index:1,
      name:'咕子',
      text:6
  }]
}]
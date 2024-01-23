import {data} from './index';


export const province:any = [
    // { label: '北京', value: 'beijing' },
    // { label: '天津', value: 'tianjin' },
    // { label: '山东省', value: 'shandong' },
    // { label: '河北省', value: 'hebei' },
    // { label: '山西省', value: 'shanxi' },
    // { label: '内蒙古自治区', value: 'neimenggu' },
    // { label: '辽宁省', value: 'liaoning' },
    // { label: '吉林省', value: 'jilin' },
    // { label: '黑龙江省', value: 'heilongjiang' },
    // { label: '上海市', value: 'shanghai' },
    // { label: '江苏省', value: 'jiangsu' },
    // { label: '浙江省', value: 'zhejiang' },
    // { label: '安徽省', value: 'anhui' },
    // { label: '福建省', value: 'fujian' },
    // { label: '江西省', value: 'jiangxi' },
    // { label: '河南省', value: 'henan' },
    // { label: '湖北省', value: 'hubei' },
    // { label: '湖南省', value: 'hunan' },
    // { label: '广东省', value: 'guangdong' },
    // { label: '广西壮族自治区', value: 'guangxi' },
    // { label: '河南省', value: 'henan' },
    // { label: '重庆市', value: 'chongqing' },
    // { label: '四川省', value: 'sichuan' },
    // { label: '贵州省', value: 'guizhou' },
    // { label: '云南省', value: 'yunnan' },
    // { label: '西藏自治区', value: 'xizang' },
    // { label: '陕西省', value: 'shanxi' },
    // { label: '甘肃省', value: 'gansu' },
    // { label: '青海省', value: 'qinghai' },
    // { label: '宁夏回族自治区', value: 'ningxia' },
    // { label: '新疆维吾尔自治区', value: 'xingjiang' },
    // { label: '台湾省', value: 'taiwan' },
    // { label: '香港特别行政区', value: 'xianggang' },
    // { label: '澳门特别行政区', value: 'aomen' },
];
for (var i = 0; i < data.length; i++) {
  // console.log(data[i].value);
  let obj = {
    label:data[i].value,
    value:data[i].value,
    key:'0'+[i]
  }
// console.log('{ label:"' + data[i].value + '",value:"' + data[i].value + '" }');
province.push(obj)
}
console.log(province);

export const city:any = {
    // 北京市: [
    //     { label: '北京市', value: '北京市' },
    //   ],
    //   tianjin: [
    //     { label: '天津市', value: 'tianjin1' },
    //   ],
    //   shandong:[
    //     { label: '济南市', value: '济南市' },
    //     { label: '青岛市', value: '青岛市' },
    //     { label: '淄博市', value: '淄博市' },
    //     { label: '枣庄市', value: '枣庄市' },
    //     { label: '东营市', value: 'dongying' },
    //     { label: '烟台市', value: 'yantai' },
    //     { label: '潍坊市', value: 'weifang' },
    //     { label: '济宁市', value: 'jining' },
    //     { label: '泰安市', value: 'taian' },
    //     { label: '威海市', value: 'weihai' },
    //     { label: '日照市', value: 'rizhao' },
    //     { label: '临沂市', value: 'linyi' },
    //     { label: '德州市', value: 'dezhou' },
    //     { label: '聊城市', value: 'liaocheng' },
    //     { label: '滨州市', value: 'binzhou' },
    //     { label: '菏泽市', value: 'heze' }
    //   ]
    };
    for (var i = 0; i < data.length; i++) {
    //  city.key = data[i].value;
    //   city.value = data[i].children
      for(var j = 0 ; j <data[i].children.length; j++ ) {
        console.log(data[i].value + ':'+data[i].children[j].value);
        
      }
     for(var q = 0; q< data[i].children.length; q++){
    //   let city1 = {
    //     label:data[i].value,
    //     value:data[i].children[q].value
    //   }
    //  }
    //   let city2 = {
    //     label:data[i].value,
    //     value:data[i].children[q].value
    //   }
     }
      // console.log(data[i].value);
      // let obj1 = [{
      //   label:data[i].value,
      //   value:data[i].value,
      //   key:'0'+[i]
      // }]
    // console.log('{ label:"' + data[i].value + '",value:"' + data[i].value + '" }');
    // city.push(obj1)
    }
    console.log(city);
export const region = {
    beijing1: [
        { label: '东城区', value: '东城区' },
        { label: '西城区', value: '西城区' },
        { label: '朝阳区', value: '朝阳区' },
        { label: '丰台区', value: '丰台区' },
        { label: '石景山区', value: '石景山区' },
         { label: '海淀区', value: '海淀区' },
         { label: '门头沟区', value: '门头沟区' },
         { label: '房山区', value: '房山区' },
         { label: '通州区', value: '通州区' },
         { label: '顺义区', value: '顺义区' },
         { label: '昌平区', value: '昌平区' },
         { label: '大兴区', value: '大兴区' },
         { label: '怀柔区', value: '怀柔区' },
         { label: '平谷区', value: '平谷区' },
         { label: '密云区', value: '密云区' },
         { label: '延庆区', value: '延庆区' },
         { label: '其他区', value: '其他区' }

      ],
      tianjin1:[
        { label: '和平区', value: '和平区' },
        { label: '河东区', value: '河东区' },
        { label: '河西区', value: '河西区' },
        { label: '南开区', value: '南开区' },
        { label: '河北区', value: '河北区' },
        { label: '红桥区', value: '红桥区' },
        { label: '东丽区', value: '东丽区' },
        { label: '西青区', value: '西青区' },
        { label: '津南区', value: '津南区' },
        { label: '北辰区', value: '北辰区' },
        { label: '武清区', value: '武清区' },
        { label: '宝坻区', value: '宝坻区' },
        { label: '滨海新区', value: '滨海新区' },
        { label: '宁河区', value: '宁河区' },
        { label: '静海区', value: '静海区' },
        { label: '蓟州区', value: '蓟州区' }
      ],
      jinan:[
        { label: '历下区', value: 'heze' },
        { label: '市中区', value: 'heze' },
        { label: '槐荫区', value: 'heze' },
        { label: '天桥区', value: 'heze' },
        { label: '历城区', value: 'heze' },
        { label: '长清区', value: 'heze' },
        { label: '章丘区', value: 'heze' },
        { label: '济阳区', value: 'heze' },
        { label: '莱芜区', value: 'heze' },
        { label: '钢城区', value: 'heze' },
        { label: '平阴区', value: 'heze' },
        { label: '商河区', value: 'heze' },
        { label: '高新区', value: 'heze' }, 
         { label: '其他区', value: 'heze' }
      ],
      qingdao:[
        { label: '市南区', value: 'heze' },
        { label: '市北区', value: 'heze' },
        { label: '黄岛区', value: 'heze' },
        { label: '崂山区', value: 'heze' },
        { label: '李沧区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
        { label: '市南区', value: 'heze' },
      ]
}
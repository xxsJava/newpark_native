import axios from 'axios';
// import {data} from './index'
// 在组件中发起网络请求并处理返回的数据
var data:any = [];
export var province: any = [];
export var city = {};
export var region = {};

axios.get('https://gitee.com/zhang-haona/provincial-and-regional-data/raw/master/date.txt')
.then(response => {
  // 数据请求成功，可以在这里处理返回的数据
   data = response.data;
  // console.log(data,'!!!!!');
  // console.log('ceshi');
  
})
.catch(error => {
  // 处理请求错误
  console.error('出错误了!!!!!', error);
})

// 遍历出来的数据
var setAreaData = (data: any, val: number) => {
  if (val === 1) {
    // const province = [];
    // console.log(1111);
    
    data.forEach((provinceItem: any) => {
      province.push({
        label: provinceItem.value,
        // value: provinceItem.code,
        value: provinceItem.value,
      });
      if (provinceItem.children) {
        setAreaData(provinceItem, 2);
      }
    });
    // this.setState({
    //   province
    // });
  } else if (val > 1) {
    var arg: any;
    if (val === 2) {
      arg = city;
    } else {
      arg = region;
    }
    data.children.forEach((argitem: any) => {
      // if (arg[data.code]) {
        if (arg[data.value]) {
        // arg[data.code].push({
          arg[data.value].push({
          label: argitem.value,
          // value: argitem.code,
          value: argitem.value,
        });
      } else {
        // arg[data.code] = [
          arg[data.value] = [
          {
            label: argitem.value,
            // value: argitem.code,
            value: argitem.value,
          },
        ];
      }
      if (argitem.children) {
        setAreaData(argitem, 3);
      }
    });
    if (val === 2) {
      city = arg;
      // this.setState({
      //   city: arg
      // });
    } else {
      region = arg;
      // this.setState({
      //   region: arg
      // });
    }
  }
  
};
// 加入延时器

 setTimeout(() => {

  // console.log(data);
  
  setAreaData(data, 1);
   
  // console.log('province:', province);
  // console.log('city: ', city);
  // console.log('region: ', region);
  
  }, 700);





  console.log(data,'我是data');

 
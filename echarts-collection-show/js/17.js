var myChart17 = echarts.init(document.getElementById('line17'));


option17 = {
  title: {
    text: '攻击方式',
    x: 'center',
    y: 'center' 
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}'
  },
  // legend: {
  //   x: 'center',
  //   y: 'bottom'
  // },
  calculable: true,
  series: [
    {
      color: ['#fe8eae', '#fea1cc', '#fca8e1', '#de9cfd', '#d0a8fc', '#fcba61', '#f5d978', '#f5ed78', '#c8f578', '#9df174', '#6fea8e', '#78f597', '#65db99', '#78f5af', '#7bebc3', '#78f5d7', '#78f4f5', '#78d6f5', '#78bff5', '#7899f5'],
      type: 'pie',
      radius: [60, 160],
      center: ['50%', '50%'],
      roseType: 'radius',
      data: [
         {value: 76.3, name: 'SQL注入：76.3'},
         {value: 72.1, name: 'xss攻击：72.1'},
         {value: 60.7, name: '文件泄露：60.7'},
         {value: 77.9, name: '信息泄露：77.9'},
         {value: 70.3, name: '数据库被盗：70.3'},
         {value: 63, name: 'XSS攻击：63'},
         {value: 52.7, name: '病毒攻击：52.7'},
         {value: 72.8, name: 'WEB攻击：72.8'},
         {value: 71.3, name: '服务器攻击：71.3'},
         {value: 96.3, name: '数据攻击：96.3'},
         {value: 80.1, name: '内存泄露：80.1'},
         {value: 71.3, name: '模拟攻击：71.3'},
         {value: 92.1, name: '外部攻击：92.1'},
         {value: 71.3, name: '内部攻击：71.3'},
      ]
    }
  ]
}


myChart17.setOption(option17);
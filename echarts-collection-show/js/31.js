var myChart31 = echarts.init(document.getElementById('line31'),'macarons');


option31 = { 
  color:['#2ecc71','#1abc9c','#1abc9c','#4ba477','#3bbf7c'],
    title:{
text:'8563',
// subtext:'资产总量',
textStyle:{ //主标题
color:'#3E4956',
fontWeight:'bold',
fontSize:50,
 fontFamily:'Haettenschweiler',
},
subtextStyle:{//副标题
color:'#3E4956',
 fontSize:12,
},
itemGap:12,//主副标题之间的距离
 top:'36%',
left:'1%',
},
    tooltip: {
  trigger: 'item',
  formatter: "{b}: {c}"
},
calculable: true,
series: [
  {
    // name: '资产接入',
    type: 'treemap',
    width:'88%',
    height:'70%',
    left:'10%',
    show: false,
    //right:'30%',
    roam: false, //是否开启拖拽漫游（移动和缩放）
    nodeClick: false,//点击节点后的行为,false无反应 
    breadcrumb: {
      show: false
    },
    label: {
      normal: {
        textStyle: {fontWeight: 'bold',fontSize: '14',}
      }
    },
  itemStyle: {
    normal: {
      label: {
        show: true,
        formatter: "{b}"
      },
    borderWidth: 2,
  borderColor: '#ffffff',
    },
    /* emphasis: {
       label: {
         show: true
       },
       color: '#cc99cc',
       borderWidth: 3,
       borderColor: '#996699'
     }*/
  },
  data: [
    { value: 60,name: '防火墙',}, 
    { value: 60, name: '应用系统',}, 
    { value: 10, name: '安全设备',}, 
    { value: 10, name:'终端行为', }, 
    { value: 10, name: '业务系统',}
  ]
}]
};


myChart31.setOption(option31);
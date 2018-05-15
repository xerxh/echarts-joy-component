var myChart19 = echarts.init(document.getElementById('line19'));


option19 = {
  backgroundColor: {
        type: 'radial',
        x: 0.5,
        y: 0.4,
        r: 0.3,
        colorStops: [{
            offset: 0,
            color: '#895355' // 0% 处的颜色
        }, {
            offset: .2,
            color: '#593640' // 100% 处的颜色
        }, {
            offset: 1,
            color: '#39273d' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
  tooltip: {
      trigger: 'item',
      backgroundColor : 'rgba(0,0,250,0.2)'
  },
  legend: {
      show: false,
      bottom: 5,
      left: 16,
      itemWidth: 14,
      itemHeight: 10,
      itemGap: 48,
      width: 680,
      height: 80,
      align: 'auto',
      data: ['06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'],
      textStyle: {
          color: '#fff',
          fontSize: 14,
      },
      selectedMode: true,
      orient: 'horizontal',

  },
  textStyle: {
      color: '#4ac7f5',
      fontSize: 16,
  },
  visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      itemWidth: 14,
      itemHeight: 165,
      show: false,
      align: 'left',
      color: ['#3f4199','#5d54b5','#a0589e','#e76281','#fe846d','#feda5b'],
      right: 0,
      bottom: 0,
      textStyle: {
          color: '#4ac7f5',
          fontSize: 14,
      }
  },
  radar: {
     center: ['500', '350'],//中心（圆心）坐标
     radius: 215,//半径
     startAngle: 90,//坐标系起始角度，也就是第一个指示器轴的角度。
     nameGap: 16,//指示器名称和指示器轴的距离。
     splitNumber: 4,//指示器轴的分割段数
     shape: 'polygon',//雷达图绘制类型，支持 'polygon' 和 'circle'
     axisLine: { //坐标轴轴线
         show: true,
         lineStyle: {
             color: '#564d8e',
             width: 1,
         },
     },
     splitLine: {//坐标轴在 grid 区域中的分隔线。
         show: true,
         lineStyle: {
             color: '#4b476f',
             width: 1,
         },
     },
     splitArea: {//坐标轴在 grid 区域中的分隔区域，默认不显示。
         show: true,
         areaStyle: {
             color: '#2c2949'
         },
     },
     indicator : [
         { text: '超速', max: 100},
         { text: '变道 ', max: 100},
         { text: '起步不关门', max: 100},
         { text: '未停稳开门', max: 100},
         { text: '急加速', max: 100},
         { text: '急减速', max: 100}
      ]
  },
  series : {
              name:'违规占比雷达图',
              type: 'radar',
              symbol: 'none',
              areaStyle: {//区域填充样式
                  emphasis: {
                      opacity: 0.3,
                  },
              },
              lineStyle: {
                  normal: {
                      width: 0.8,
                  },
              },
              data: [
                  {name: '06:00',value: [100,80,30,30,40,80]},
        {name: '07:00',value: [95,75,35,35,45,75]},
        {name: '08:00',value: [90,72,40,40,50,70]},
        {name: '09:00',value: [85,70,45,45,55,65]},
        {name: '10:00',value: [80,68,50,50,60,60]},
        {name: '11:00',value: [75,65,55,55,65,55]},
        {name: '12:00',value: [70,62,60,60,70,50]},
        {name: '13:00',value: [65,60,65,65,75,45]},
        {name: '14:00',value: [60,58,70,70,80,40]},
        {name: '15:00',value: [55,55,75,75,85,35]},
        {name: '16:00',value: [50,52,80,80,90,30]},
        {name: '17:00',value: [45,50,85,85,95,25]},
        {name: '18:00',value: [40,48,90,90,100,20]},
        {name: '19:00',value: [35,45,95,93,95,15]}
              ]
  }
};




myChart19.setOption(option19);
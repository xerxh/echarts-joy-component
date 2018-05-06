var myChart11 = echarts.init(document.getElementById('line11'));

function data(){
  var d = [];
  for (var i = 0; i < 24; i++) {
      d.push({name:i+'~'+(i+1),value:Math.random()*100});
  }
  console.log(d);
  return d;
}
option11 = {
  title : {
      text: '攻击时间段分布',
      subtext: '数据纯属虚构',
      x:'center'
  },
  tooltip: {
      trigger: 'item',
      position: ['48.5%', '49.2%'],
      backgroundColor: 'rgba(50,50,50,0)',
      textStyle : {
          color: 'yellow',
          fontWeight: 'bold'
      },
      formatter: "{d}%"
  },
  series : [
      {
          name: '攻击时间',
          type: 'pie',
          radius : ['5%', '70%'],
          roseType: 'area',
          color:['#3fa7dc'],
          data:data(),
          labelLine: {
              normal: {
                  show: false
              }
          },
          label: {
              normal: {
                  show: false
              }
          },
          itemStyle: {
              normal: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      },
      {
          name: '',
          type: 'gauge',
          min: 0,
          max: 24,
          startAngle: 90,
          endAngle: 449.9,
          radius: '82%',
          splitNumber: 24,
          clockwise: false,
          animation: false,
          detail: {
              formatter: '{value}',
              textStyle: {
                  color: '#63869e'
              }
          },
          detail:{
              show: false
          },
          axisTick: {
              show: false
          },
          axisLine: {
              lineStyle: {
                  color: [
                      [0.25, '#63869e'],
                      [0.75, '#ffffff'],
                      [1, '#63869e']
                  ],
                  width: '40%',
                  shadowColor: '#0d4b81', //默认透明
                  shadowBlur: 40,
                  opacity: 1
              }
          },
          splitLine: {
              length: 5,
              lineStyle: {
                  color: '#ffffff',
                  width: 2
              }
          },
          axisLabel: {
              formatter: function(v){
                  return v?v:'';
              },
              textStyle: {
                  color: "red",
                  fontWeight: 700
              }
          },
          itemStyle: {
              normal: {
                  color: 'green',
                  width: 2
              }
          }
      },
      {
          name: '',
          type: 'gauge',
          min: 0,
          max: 24,
          startAngle: 90,
          endAngle: 449.9,
          radius: '72%',
          splitNumber: 24,
          clockwise: false,
          animation: false,
          detail: {
              formatter: '{value}',
              textStyle: {
                  color: '#63869e'
              }
          },
          detail:{
              show: false
          },
          axisTick: {
              show: false
          },
          axisLine: {
              lineStyle: {
                  color: [
                      [1, '#E8E8E8']
                  ],
                  width: '10%',
                  opacity:0.8
              }
          },
          splitLine: {
              show:true,
              length: '92%',
              lineStyle: {
                  color: 'grey',
                  width: '1'
              }
          },
          axisLabel: {
              show:false,
              formatter: function(v){
                  return v?v:'';
              },
              textStyle: {
                  color: "#fb5310",
                  fontWeight: 700
              }
          },
          itemStyle: {
              normal: {
                  color: 'green',
                  width: 2,
                  borderWidth: 3,
              }
          }
      }
  ]
};



myChart11.setOption(option11);
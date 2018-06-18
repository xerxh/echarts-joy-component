var myChart37 = echarts.init(document.getElementById('line37'),'macarons');

option37 = {
  tooltip: {
      formatter: "{a} <br/>{b} : {c}%"
  },
  series: [{
      name: '指标',
      type: 'gauge',
      axisLine: {
          show: true,
          lineStyle: {
              width: 30,
              shadowBlur: 0,
              color: [
                  [0.2, '#90ee90'],
                  [0.4, '#ffa500'],
                  [0.6, '#87ceeb'],
                  [0.8, '#87ceeb'],
                  [1, '#ff4500']
              ]
          }
      },
      axisLabel: {
          formatter: function(e) {
              switch (e + "") {
                  case "10":
                      return "弱";
                  case "30":
                      return "低";
                  case "60":
                      return "中";
                  case "90":
                      return "高";
                  default:
                      return "";
              }
          },
          textStyle: {
              fontSize: 15,
              fontWeight: ""
          }
      },
      startAngle: 140,
      endAngle: -140,
      axisTick: {
          splitNumber: 5
      },
      detail: {
          formatter: '{value}%',
          textStyle: {
              fontSize: 2,
              fontWeight: ""
          }
      },
      data: [{
          value: 4.46,
          name: '仪表盘'
      }]
  }]
};

myChart37.setOption(option37);
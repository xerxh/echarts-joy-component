var myChart32 = echarts.init(document.getElementById('line32'),'macarons');

var dataBJ = [
  [1,55,9,56,0.46,18,6],
  [2,25,11,21,0.65,34,9],
  [3,56,7,63,0.3,14,5],
  [4,33,7,29,0.33,16,6],
  [5,42,24,44,0.76,40,16],
  [6,82,58,90,1.77,68,33],
  [7,74,49,77,1.46,48,27],
  [8,78,55,80,1.29,59,29],
  [9,267,216,280,4.8,108,64],
  [10,185,127,216,2.52,61,27,],
  [11,39,19,38,0.57,31,15],
  [12,41,11,40,0.43,21,7],
  [13,64,38,74,1.04,46,22],
  [14,108,79,120,1.7,75,41],
  [15,108,63,116,1.48,44,26],
  [16,33,6,29,0.34,13,5],
  [17,94,66,110,1.54,62,31],
  [18,186,142,192,3.88,93,79],
  [19,57,31,54,0.96,32,14],
  [20,22,8,17,0.48,23,10],
  [21,39,15,36,0.61,29,13],
  [22,94,69,114,2.08,73,39],
  [23,99,73,110,2.43,76,48],
  [24,31,12,30,0.5,32,16],
  [25,42,27,43,1,53,22],
  [26,154,117,157,3.05,92,58],
  [27,234,185,230,4.09,123,69],
  [28,160,120,186,2.77,91,50],
  [29,134,96,165,2.76,83,41],
  [30,52,24,60,1.03,50,21],
  [31,46,5,49,0.28,10,6]
];


var schema = [
  {name: 'date', index: 0, text: '日期'},
  {name: 'AQIindex', index: 1, text: 'AQI'},
  {name: 'PM25', index: 2, text: 'PM2.5'},
  {name: 'PM10', index: 3, text: 'PM10'},
  {name: 'CO', index: 4, text: ' CO'},
  {name: 'NO2', index: 5, text: 'NO2'},
  {name: 'SO2', index: 6, text: 'SO2'}
];

var lineStyle = {
  normal: {
      width: 1,
      opacity: 0.5
  }
};

option32 = {
  backgroundColor: '#333',
  // legend: {
  //     bottom: 30,
  //     data: ['北京'],
  //     itemGap: 20,
  //     textStyle: {
  //         color: '#fff',
  //         fontSize: 14
  //     }
  // },
  tooltip: {
      padding: 10,
      backgroundColor: '#222',
      borderColor: '#777',
      borderWidth: 1,
      formatter: function (obj) {
          var value = obj[0].value;
          return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
              + obj[0].seriesName + ' ' + value[0] + '日期：'
              + value[7]
              + '</div>'
              + schema[1].text + '：' + value[1] + '<br>'
              + schema[2].text + '：' + value[2] + '<br>'
              + schema[3].text + '：' + value[3] + '<br>'
              + schema[4].text + '：' + value[4] + '<br>'
              + schema[5].text + '：' + value[5] + '<br>';
      }
  },
  // dataZoom: {
  //     show: true,
  //     orient: 'vertical',
  //     parallelAxisIndex: [0]
  // },
  parallelAxis: [
      {dim: 0, name: schema[0].text, inverse: true, max: 31, nameLocation: 'start'},
      {dim: 1, name: schema[1].text},
      {dim: 2, name: schema[2].text},
      {dim: 3, name: schema[3].text},
      {dim: 4, name: schema[4].text},
      {dim: 5, name: schema[5].text},
      {dim: 6, name: schema[6].text}
  ],
  visualMap: {
      show: true,
      min: 0,
      max: 150,
      dimension: 2,
      show: false,
      inRange: {
          color: ['#d94e5d','#eac736','#50a3ba'].reverse(),
          // colorAlpha: [0, 1]
      }
  },
  parallel: {
      left: '5%',
      right: '18%',
      bottom: 100,
      parallelAxisDefault: {
          type: 'value',
          name: 'AQI指数',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
              color: '#fff',
              fontSize: 12
          },
          axisLine: {
              lineStyle: {
                  color: '#aaa'
              }
          },
          axisTick: {
              lineStyle: {
                  color: '#777'
              }
          },
          splitLine: {
              show: false
          },
          axisLabel: {
              textStyle: {
                  color: '#fff'
              }
          }
      }
  },
  series: [
      {
          name: '北京',
          type: 'parallel',
          lineStyle: lineStyle,
          data: dataBJ
      }

  ]
};


myChart32.setOption(option32);
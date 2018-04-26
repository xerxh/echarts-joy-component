var myChart4 = echarts.init(document.getElementById('line4'));

var sourceData = [{
  name: '王小虎',
  sales: 142.56,
  services: 64.5
}, {
  name: '王小明',
  sales: 471.14,
  services: 76.2
}, {
  name: '王小乐',
  sales: 42.1,
  services: 34.8
}, {
  name: '王小波',
  sales: 63.2,
  services: 97.4
}, {
  name: '王小龙',
  sales: 97.3,
  services: 67.5
}, {
  name: '王小宇',
  sales: 782.1,
  services: 37.7
}, {
  name: '王小禾',
  sales: 41.1,
  services: 12.8
}]

var seriesData = sourceData.map(function(item, index, array) {
  return {
      name: item['name'],
      value: [item['sales'], item['services']]
  }
})

var computeServicesAvgLine = function() {
  let sum = 0
  sourceData.forEach(function(item) {
      sum += item['services']
  })
  return sum / sourceData.length
}

var computeSalesAvgLine = function() {
  let sum = 0
  sourceData.forEach(function(item) {
      sum += item['sales']
  })
  return sum / sourceData.length
}
var avg = {
  servicesAvgLine: computeServicesAvgLine(),
  salesAvgLine: computeSalesAvgLine()
}

option4 = {
  title: {
      text: '服务四象限图'
  },
  tooltip: {
      trigger: 'item',
      axisPointer: {
          show: true,
          type: 'cross',
          lineStyle: {
              type: 'dashed',
              width: 1
          },
      },
      formatter: function(obj) {
          if (obj.componentType == "series") {
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                  obj.name +
                  '</div>' +
                  '<span>' +
                  '销售额' +
                  '</span>' +
                  ' : ' + obj.data.value[0] + '（元）' +
                  '<br/>' +
                  '<span>' +
                  '服务能力' +
                  '</span>' +
                  ' : ' + obj.data.value[1] + '%'
          }
      }
  },
  label: {
      normal: {
          show: true,
          position: 'bottom',
          formatter: function(params) {
              return params.name
          }
      },
      emphasis: {
          show: true,
          position: 'bottom',
      }
  },
  xAxis: {
      name: '营业额',
      type: 'value',
      scale: true,
      axisLabel: {
          formatter: '{value} 元'
      },
      splitLine: {
          show: false
      },
      axisLine: {
          lineStyle: {
              color: '#3259B8'
          }
      }
  },
  yAxis: {
      name: '服务能力',
      type: 'value',
      scale: true,
      axisLabel: {
          formatter: '{value} %'
      },
      splitLine: {
          show: false
      },
      axisLine: {
          lineStyle: {
              color: '#3259B8'
          }
      }
  },
  toolbox: {
      feature: {
          dataZoom: {}
      }
  },
  visualMap: {
      min: 0,
      max: 800,
      dimension: 0,
      show: false,
      left: 'right',
      top: 'top',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: false,
      itemWidth: 18,
      itemHeight: 160,
      textStyle: {
          color: '#3259B8',
          height: 56,
          fontSize: 11,
          lineHeight: 60,
      },
      inRange: {
          color: ['#7AB7F7', '#b45ef7']
      },
      padding: [50, 20],
      orient: 'horizontal',
  },
  series: [{
      type: 'scatter',
      data: seriesData,
      symbolSize: 20,
      markLine: {
          label: {
              normal: {
                  formatter: function(params) {
                      if (params.dataIndex == 0) {
                          return params.value + "元";
                      } else if (params.dataIndex == 1) {
                          return params.value + "%";
                      }
                      return params.value;
                  }
              }
          },
          lineStyle: {
              normal: {
                  color: "#626c91",
                  type: 'solid',
                  width: 1,
              },
              emphasis: {
                  color: "#d9def7"
              }
          },
          data: [{
              xAxis: avg.salesAvgLine,
              name: '营业额平均线',
              itemStyle: {
                  normal: {
                      color: "#b84a58",
                  }
              }
          }, {
              yAxis: avg.servicesAvgLine,
              name: '服务能力平均线',
              itemStyle: {
                  normal: {
                      color: "#b84a58",
                  }
              }
          }]
      },
      markArea: {
          silent: true,
          data: [
              [{
                  name: '改进',
                  itemStyle: {
                      normal: {
                          color: 'transparent'
                      },
                  },
                  label: {
                      normal: {
                          show: true,
                          position: 'insideTopLeft',
                          fontStyle: 'normal',
                          color: "#409EFF",
                          fontSize: 20,
                      }
                  },
                  coord: [avg.salesAvgLine, avg.servicesAvgLine],
              }, {
                  coord: [Number.MAX_VALUE, 0],
              }],
              [{
                  name: '淘汰',
                  itemStyle: {
                      normal: {
                          color: 'transparent',
                      },
                  },
                  label: {
                      normal: {
                          show: true,
                          position: 'insideTopRight',
                          fontStyle: 'normal',
                          color: "#409EFF",
                          fontSize: 20,
                      }
                  },
                  coord: [0, 0],
              }, {
                  coord: [avg.salesAvgLine, avg.servicesAvgLine],
              }],
              [{
                  name: '保持',
                  itemStyle: {
                      normal: {
                          color: 'transparent',
                      },
                  },
                  label: {
                      normal: {
                          show: true,
                          position: 'insideBottomLeft',
                          fontStyle: 'normal',
                          color: "#409EFF",
                          fontSize: 20,
                      }
                  },
                  coord: [avg.salesAvgLine, avg.servicesAvgLine],
              }, {
                  coord: [Number.MAX_VALUE, Number.MAX_VALUE],
              }],
              [{
                  name: '激励',
                  itemStyle: {
                      normal: {
                          color: 'transparent',
                      },
                  },
                  label: {
                      normal: {
                          show: true,
                          position: 'insideBottomRight',
                          fontStyle: 'normal',
                          color: "#409EFF",
                          fontSize: 20,
                      }
                  },
                  coord: [0, Number.MAX_VALUE],
              }, {
                  coord: [avg.salesAvgLine, avg.servicesAvgLine],
              }],
          ]
      }
  }]
};

myChart4.setOption(option4);
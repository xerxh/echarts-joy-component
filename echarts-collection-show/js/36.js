var myChart36 = echarts.init(document.getElementById('line36'),'macarons');

option36 = {
  "tooltip": {
      "trigger": "axis",
      "axisPointer": {
          "type": "cross",
          "label": {
              "backgroundColor": "#6a7985"
          },
          "lineStyle": {
              "color": "#9eb2cb"
          }
      }
  },
 
  "legend": {
      "top": "bottom",
      "left": "2%",
      "textStyle": {
          "color": "#000"
      },
      "itemHeight": 10,
      "data":  ['展现','点击','访问','咨询','订单']
  },
  "grid": {
      "top": 24,
      "left": "2%",
      "right": 20,
      "bottom": 30,
      "containLabel": true,
      "borderWidth": 0.5
  },
  series: [
      {
          top:0,
          
          name: '',
          type: 'funnel',
          left: '10%',
          width: '80%',
          gap: 10,
          minSize: 114,
          maxSize: 390,
          label: {
              normal: {
                  color: '#353535',
                  position: 'left',
                 
              },
              emphasis: {
                  position:'left',
                  formatter: '{c}%'
              }
          },
          labelLine: {
              normal: {
                  length: 40,
                  position: 'left',
                  
                  lineStyle: {
                      width: 2
                      
                  }
              }
          },
          itemStyle: {
              normal: {
                 
              }
          },
          data: [
              {value: 60, name: '访问', 
                  itemStyle: {
                      normal: {
                          color: '#4e99de'
                      }
                  },
                 labelLine:{
                     normal: {
                         lineStyle: {
                             shadowColor: '#4e99de',
                             shadowOffsetX: 1
                         }
                     }
                 }
              },
              {value: 40, name: '咨询',
                   itemStyle: {
                      normal: {
                          color: '#4da7db'
                      }
                  },
                   labelLine:{
                     normal: {
                         lineStyle: {
                             shadowColor: '#4da7db',
                             shadowOffsetX: 1
                         }
                     }
                 }
              },
              {value: 20, name: '订单',
                   itemStyle: {
                      normal: {
                          color: '#53b8e2'
                      }
                  },
                   labelLine:{
                     normal: {
                         lineStyle: {
                             shadowColor: '#53b8e2',
                             shadowOffsetX: 1
                         }
                     }
                 }
              },
              {value: 80, name: '点击',
                   itemStyle: {
                      normal: {
                          color: '#398bd8'
                      }
                  },
                   labelLine:{
                     normal: {
                         lineStyle: {
                             shadowColor: '#398bd8',
                             shadowOffsetX: 1
                         }
                     }
                 }
              },
              {value: 100, name: '展现',
                   itemStyle: {
                      normal: {
                          color: '#0083c7'
                      }
                  },
                   labelLine:{
                     normal: {
                         lineStyle: {
                             shadowColor: '#0083c7',
                             shadowOffsetX: 1
                         }
                     }
                 }
              }
          ]
      },
      {
          name: '',
          type: 'funnel',
          top:0,
          gap: 10,
          label: {
              normal: {
                  position: 'inside',
                  formatter: '转化率：({c}%)',
                  textStyle: {
                      color: '#fff'
                  }
              }
            
          },
          labelLine: {
              normal: {
                
          
              }
          },
          itemStyle: {
              normal: {
                  color: 'transparent',
                  borderWidth:0,
                  opacity: 0
              }
          },
          data: [
              {value: 60, name: '访问'
          
              },
              {value: 40, name: '咨询'},
              {value: 20, name: '订单'},
              {value: 80, name: '点击'},
              {value: 100, name: '展现'}
          ]
      }
  ]
};



myChart36.setOption(option36);
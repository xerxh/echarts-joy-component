var myChart16 = echarts.init(document.getElementById('line16'));


option16 = {
  backgroundColor: 'rgb(43, 51, 59)',
  toolbox: {
      show: true,
      feature: {
          mark: {
              show: true
          },
          dataView: {
              show: true,
              readOnly: false
          },
          magicType: {
              show: true,
              type: ['pie', 'funnel']
          },
          restore: {
              show: true
          },
          saveAsImage: {
              show: true
          }
      }
  },
  calculable: true,
  "tooltip": {
      "trigger": "item",
      "formatter": "{a}<br/>{b}:{c}千万元"
  },
  "title": {
      "text": "南丁格尔玫瑰图--PieHalfRose",
      "left": "center",
      "top": 20,
      "textStyle": {
          "color": "#ccc"
      }
  },
  "calculable": true,
  // "legend": {
  //     "icon": "circle",
  //     "x": "center",
  //     "y": "15%",
  //     "data": [
  //         "义乌市1",
  //         "义乌市2",
  //         "义乌市3",
  //         "义乌市4",
  //         "义乌市5",
  //         "义乌市6",
  //         "义乌市7",
  //         "义乌市8",
  //         "义乌市9"
  //     ],
  //     "textStyle": {
  //         "color": "#fff"
  //     }
  // },
  "series": [{
      "name": "XX线索",
      "type": "pie",
      "radius": [
          37,
          155
      ],
      "avoidLabelOverlap": false,
      "startAngle": 0,
      "center": [
          "50.1%",
          "34%"
      ],
      "roseType": "area",
      "selectedMode": "single",
      "label": {
          "normal": {
              "show": true,
              "formatter": "{c}千万元"
          },
          "emphasis": {
              "show": true
          }
      },
      "labelLine": {
          "normal": {
              "show": true,
              "smooth": false,
              "length": 20,
              "length2": 10
          },
          "emphasis": {
              "show": true
          }
      },
      "data": [{
              "value": 600.58,
              "name": "义乌市1",
              "itemStyle": {
                  "normal": {
                      "color": "#f845f1"
                  }
              }
          },
          {
              "value": 1100.58,
              "name": "义乌市2",
              "itemStyle": {
                  "normal": {
                      "color": "#ad46f3"
                  }
              }
          },
          {
              "value": 1200.58,
              "name": "义乌市3",
              "itemStyle": {
                  "normal": {
                      "color": "#5045f6"
                  }
              }
          },
          {
              "value": 1300.58,
              "name": "义乌市4",
              "itemStyle": {
                  "normal": {
                      "color": "#4777f5"
                  }
              }
          },
          {
              "value": 1400.58,
              "name": "义乌市5",
              "itemStyle": {
                  "normal": {
                      "color": "#44aff0"
                  }
              }
          },
          {
              "value": 1500.58,
              "name": "义乌市6",
              "itemStyle": {
                  "normal": {
                      "color": "#45dbf7"
                  }
              }
          },
          {
              "value": 1500.58,
              "name": "义乌市7",
              "itemStyle": {
                  "normal": {
                      "color": "#f6d54a"
                  }
              }
          },
          {
              "value": 1600.58,
              "name": "义乌市8",
              "itemStyle": {
                  "normal": {
                      "color": "#f69846"
                  }
              }
          },
          {
              "value": 1800,
              "name": "义乌市9",
              "itemStyle": {
                  "normal": {
                      "color": "#ff4343"
                  }
              }
          },
          {
              "value": 0,
              "name": "",
              "itemStyle": {
                  "normal": {
                      "label": {
                          "show": false
                      },
                      "labelLine": {
                          "show": false
                      }
                  }
              }
          },
          {
              "value": 0,
              "name": "",
              "itemStyle": {
                  "normal": {
                      "label": {
                          "show": false
                      },
                      "labelLine": {
                          "show": false
                      }
                  }
              }
          },
          {
              "value": 0,
              "name": "",
              "itemStyle": {
                  "normal": {
                      "label": {
                          "show": false
                      },
                      "labelLine": {
                          "show": false
                      }
                  }
              }
          },
          {
              "value": 0,
              "name": "",
              "itemStyle": {
                  "normal": {
                      "label": {
                          "show": false
                      },
                      "labelLine": {
                          "show": false
                      }
                  }
              }
          },
          {
              "value": 0,
              "name": "",
              "itemStyle": {
                  "normal": {
                      "label": {
                          "show": false
                      },
                      "labelLine": {
                          "show": false
                      }
                  }
              }
          },
          {
              "value": 0,
              "name": "",
              "itemStyle": {
                  "normal": {
                      "label": {
                          "show": false
                      },
                      "labelLine": {
                          "show": false
                      }
                  }
              }
          },
          {
              "value": 0,
              "name": "",
              "itemStyle": {
                  "normal": {
                      "label": {
                          "show": false
                      },
                      "labelLine": {
                          "show": false
                      }
                  }
              }
          },
          {
              "value": 0,
              "name": "",
              "itemStyle": {
                  "normal": {
                      "label": {
                          "show": false
                      },
                      "labelLine": {
                          "show": false
                      }
                  }
              }
          },
          {
              "value": 0,
              "name": "",
              "itemStyle": {
                  "normal": {
                      "label": {
                          "show": false
                      },
                      "labelLine": {
                          "show": false
                      }
                  }
              }
          }
      ]
  }]
};


myChart16.setOption(option16);
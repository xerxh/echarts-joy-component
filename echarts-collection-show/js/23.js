var myChart23 = echarts.init(document.getElementById('line23'),'macarons');

var option23 = {
  title: {
     text: '不同冷藏箱的制冷与监测效果统计图'
 },
 animationDurationUpdate: 1500,
 animationEasingUpdate: 'quinticInOut',
 series: [{
     type: 'graph',
     tooltip: {},
     ribbonType: true,
     layout: 'circular',

     circular: {
         rotateLabel: true
     },
     symbolSize: 30,
     roam: true,
     focusNodeAdjacency: true,

     label: {
         normal: {
             position: 'center',
             fontWeight: 'bold',
             formatter: '{b}',
             normal: {
                 textStyle: {

                     fontFamily: '宋体'
                 }
             }
         }
     },

     edgeSymbol: ['circle'],
     edgeSymbolSize: [4, 10],
     edgeLabel: {
         normal: {
             textStyle: {
                 fontSize: 13,
                 fontWeight: 'bold',
                 fontFamily: '宋体'
             }
         }
     },

     itemStyle: {
         normal: {
             label: {
                 rotate: true,
                 show: true,
                 textStyle: {
                     color: '#333',
                     fontWeight: 'bold'
                 }
             },
             color: ["#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7","#85d6f7","#85d6f7","#85d6f7","#85d6f7","#85d6f7","#85d6f7","#85d6f7","#85d6f7"] /* 内的颜色#393f51，外的颜色#85d6f7 */
         },
         emphasis: {
             label: {
                 show: true
                     // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
             }
         }
     },

     data: [{
         name: 'FYL-YS-129A',
         itemStyle: {
             normal: {
                 color: '#393f51'
             }
         }
     }, {
         name: 'FYL-YS-105A',
         itemStyle: {
             normal: {
                 color: '#393f51'
             }
         }
     }, {
         name: 'FYL-YS-81A',
         itemStyle: {
             normal: {
                 color: '#393f51'
             }
         }
     }, {
         name: 'FYL-YS-117A',
         itemStyle: {
             normal: {
                 color: '#393f51'
             }
         }
     }, {
         name: 'FYL-YS-95A',
         itemStyle: {
             normal: {
                 color: '#393f51'
             }
         }
     }, {
         name: 'FYL-YS-73A',
         itemStyle: {
             normal: {
                 color: '#393f51'
             }
         }
     }, {
         name: 'FYL-YS-18A',
         itemStyle: {
             normal: {
                 color: '#393f51'
             }
         }
     }, {
         name: 'FYL-YS-18B',
         itemStyle: {
             normal: {
                 color: '#393f51'
             }
         }
     }, {
         name: 'KM-100',
         itemStyle: {
             normal: {
                 color: '#85d6f7'
             }
         }
     }, {
         name: 'KM-65',
         itemStyle: {
             normal: {
                 color: '#85d6f7'
             }
         }
     }, {
         name: 'KM-54',
         itemStyle: {
             normal: {
                 color: '#85d6f7'
             }
         }
     }, {
         name: 'KM-6',
         itemStyle: {
             normal: {
                 color: '#85d6f7'
             }
         }
     }, {
         name: 'KM-20',
         itemStyle: {
             normal: {
                 color: '#85d6f7'
             }
         }
     }, {
         name: 'RL-58GSP',
         itemStyle: {
             normal: {
                 color: 'orange'
             }
         }
     }, {
         name: 'GL-53GSP',
         itemStyle: {
             normal: {
                 color: 'orange'
             }
         }
     }, {
         name: '制冷',
         itemStyle: {
             normal: {
                 color: 'red'
             }
         }
     }, {
         name: '自动监测',
         itemStyle: {
             normal: {
                 color: 'red'
             }
         }
     }],
     // links: [],
     links: [{
             source: '制冷',
             target: 'FYL-YS-129A',
             name: '制冷',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: '#393f51'
                 }
             }
         }, {
             source: '制冷',
             target: 'FYL-YS-105A',
             name: '制冷',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: '#393f51'
                 }
             }
         }, {
             source: '制冷',
             target: 'FYL-YS-81A',
             name: '制冷',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: '#393f51'
                 }
             }
         }, {
             source: '制冷',
             target: 'FYL-YS-117A',
             name: '制冷',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: '#393f51'
                 }
             }
         }, {
             source: '制冷',
             target: 'FYL-YS-95A',
             name: '制冷',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: '#393f51'
                 }
             }
         }, {
             source: '制冷',
             target: 'FYL-YS-73A',
             name: '制冷',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: '#393f51'
                 }
             }
         }, {
             source: '制冷',
             target: 'FYL-YS-18A',
             name: '制冷',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: '#393f51'
                 }
             }
         }, {
             source: '制冷',
             target: 'FYL-YS-18B',
             name: '制冷',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: '#393f51'
                 }
             }
         }, {
             source: '自动监测',
             target: 'KM-100',
             name: '自动监测',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: '#85d6f7'
                 }
             }
         }, {
             source: '自动监测',
             target: 'KM-65',
             name: '自动监测',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: '#85d6f7'
                 }
             }
         }, {
             source: '自动监测',
             target: 'KM-54',
             name: '自动监测',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: '#85d6f7'
                 }
             }
         }, {
             source: '自动监测',
             target: 'KM-6',
             name: '自动监测',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: '#85d6f7'
                 }
             }
         }, {
             source: '自动监测',
             target: 'KM-20',
             name: '自动监测',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: '#85d6f7'
                 }
             }
         }, {
             source: '制冷',
             target: 'RL-58GSP',
             name: '制冷',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: 'orange'
                 }
             }
         }, {
             source: '制冷',
             target: 'GL-53GSP',
             name: '制冷',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: 'orange'
                 }
             }
         }, {
             source: '自动监测',
             target: 'RL-58GSP',
             name: '自动监测',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: 'orange'
                 }
             }
         }, {
             source: '自动监测',
             target: 'GL-53GSP',
             name: '自动监测',
             tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
             },
             symbolSize: [5, 20],
             label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
             },
             lineStyle: {
                 normal: {
                     width: 0.5,
                     curveness: 0.2,
                     color: 'orange'
                 }
             }
         }


     ]
 }]
};


myChart23.setOption(option23);
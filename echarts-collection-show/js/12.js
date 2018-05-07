var myChart12 = echarts.init(document.getElementById('line12'));


//某些图例是用到过dat.gui这个插件的，只是一直没找到教程，先用起来总是好事。
//下面的代码镶嵌在echart编辑器里面
//实际运用的时候可以不按照这个来，我觉得太繁琐了

//里面的的配置方法只是把下面的步骤包装了一次！
// 原有定义gui的步骤：
// 1.为控制板定义参数
// 2.控制板以什么样的形式展示参数（调色板，下拉框，输入栏等等）
// 3.为每一项控制板条目添加动作监控
//百度dat.gui会找到更好的教程，这里只做抛砖引玉.

//http://pan.baidu.com/s/1eRC5agU 密码：raat

//下面好像有个bug，把中间的圆环的label固定在中间会发生较大的偏移，另外仔细观察
//的话也会发现左右两个中间的标签也会发生偏移的现象，所以中间的标签用标题固定
//本来想左右也用标题的，发现对称不了，样式真是搞死我了，注意灵活运用就好

//求个赞啦！ >_< !
var app = {};
app.configParameters = {
  pie1Process: {
      min: 0,
      max: 100
  },
  pie2Process: {
      min: 0,
      max: 100
  },
  pie3Process: {
      min: 0,
      max: 100
  },
};

app.config = {
  message: 'dat.gui',
  pie1Process: 25,
  pie2Process: 50,
  pie3Process: 75,
  pie1Color: '#3dd4de',
  pie2Color: '#b697cd',
  pie3Color: '#a6f08f',
  onChange: function() {
      var tempOption = {
          title: {
              text: parseInt(app.config.pie2Process) + '%',
              textStyle: {
                  color: app.config.pie2Color,
              }
          },
          series: [{
              data: [{
                  value: parseInt(app.config.pie1Process),
                  itemStyle: {
                      normal: {
                          color: app.config.pie1Color,
                          shadowColor: app.config.pie1Color,
                      }
                  },
                  label: {
                  normal: {
                      formatter: '{d}%',
                      position: 'center',
                      show: true,
                      textStyle: {
                          fontSize: '35',
                          fontWeight: 'normal',
                          color: app.config.pie1Color
                      }
                  }
              },
              }, {
                  value: 100 - parseInt(app.config.pie1Process),
                  itemStyle: placeHolderStyle,

              }]
          }, {
              data: [{
                  value: parseInt(app.config.pie2Process),
                  itemStyle: {
                      normal: {
                          color: app.config.pie2Color,
                          shadowColor: app.config.pie2Color,
                      }
                  }
              }, {
                  value: 100 - parseInt(app.config.pie2Process),
                  itemStyle: placeHolderStyle,
              }]
          }, {
              data: [{
                  value: parseInt(app.config.pie3Process),
                  label: {
                  normal: {
                      formatter: '{d}%',
                      position: 'center',
                      show: true,
                      textStyle: {
                          fontSize: '35',
                          fontWeight: 'normal',
                          color: app.config.pie3Color
                      }
                  }
              },
                  itemStyle: {
                      normal: {
                          color: app.config.pie3Color,
                          shadowColor: app.config.pie3Color,
                      }
                  }
              }, {
                  value: 100 - parseInt(app.config.pie3Process),

                  itemStyle: placeHolderStyle,
              }]
          }]
      }
      myChart.setOption(tempOption);
  }
};


// 这里借鉴'5643我'和'小明的小可'两位大神的圆环图格式演示一下效果
var dataStyle = {
  normal: {
      label: {
          show: false
      },
      labelLine: {
          show: false
      },
      shadowBlur: 40,
      shadowColor: 'rgba(40, 40, 40, 0.5)',
  }
};

var placeHolderStyle = {
  normal: {
      color: 'rgba(44,59,70,1)', // 未完成的圆环的颜色
      label: {
          show: false
      },
      labelLine: {
          show: false
      }
  },
  emphasis: {
      color: 'rgba(44,59,70,1)' // 未完成的圆环的颜色
  }
};

option12 = {
  title: {
      text: '50%',
      x: 'center',
      y: 'center',
      textStyle: {
          fontWeight: 'normal',
          color: '#b697cd',
          fontSize: 35
      }
  },
  tooltip: {
      show: false,
  },
  toolbox: {
      show: false,
  },
  // color : ['#3dd4de','#b697cd','#a6f08f'],
  backgroundColor: 'rgba(0,0,0,0.8)',
  series: [{
      name: 'Pie1',
      type: 'pie',
      clockWise: false,
      radius: [80, 85],
      itemStyle: dataStyle,
      hoverAnimation: false,
      center: ['25%', '50%'],
      data: [{
          value: 25,
          label: {
              normal: {
                  formatter: '{d}%',
                  position: 'center',
                  show: true,
                  textStyle: {
                      fontSize: '35',
                      fontWeight: 'normal',
                      color: '#3dd4de'
                  }
              }
          },
          itemStyle: {
              normal: {
                  color: '#3dd4de',
                  shadowColor: '#3dd4de',
                  shadowBlur: 10
              }
          }
      }, {
          value: 75,
          name: 'invisible',
          itemStyle: placeHolderStyle,
      }]
  }, {
      name: 'Pie2',
      type: 'pie',
      clockWise: false,
      radius: [80, 85],
      itemStyle: dataStyle,
      hoverAnimation: false,
      center: ['50%', '50%'],
      data: [{
          value: 50,
          itemStyle: {
              normal: {
                  color: '#b697cd',
                  shadowColor: '#b697cd',
                  shadowBlur: 10
              }
          }
      }, {
          value: 50,
          name: 'invisible',
          itemStyle: placeHolderStyle,
      }]
  }, {
      name: 'Pie3',
      type: 'pie',
      clockWise: false,
      radius: [80, 85],
      itemStyle: dataStyle,
      hoverAnimation: false,
      center: ['75%', '50%'],
      data: [{
          value: 75,
          label: {
              normal: {
                  formatter: '{d}%',
                  position: 'center',
                  show: true,
                  textStyle: {
                      fontSize: '35',
                      fontWeight: 'normal',
                      color: '#a6f08f'
                  }
              }
          },
          itemStyle: {
              normal: {
                  color: '#a6f08f',
                  shadowColor: '#a6f08f',
                  shadowBlur: 10
              }
          }
      }, {
          value: 25,
          name: 'invisible',
          itemStyle: placeHolderStyle,
      }]
  }, ]
}


myChart12.setOption(option12);
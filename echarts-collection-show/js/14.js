var myChart14 = echarts.init(document.getElementById('line14'));


/*---------------------数据----------------------------*/
var echartData = [{
  value: 98,//时间
  name: '交卷时间'
}, {
  value: 50,
  name: '未交卷时间'
}];


/*---------------------颜色变量----------------------------*/
//蓝色
var innerColor = '#2bff8f'; //内层颜色
var outColor = "#50e0ff"; //外层边框色粗
var textColor = '#50e0ff'; //文字颜色
var startColor = 'rgba(73,223,240,0.1)'; //中间饼图渐变开始颜色
var endColor = 'rgba(73,223,240,0.8)'; //中间饼图渐变结束颜色
//绿色
// var innerColor = '#50e0ff'; //内层颜色
// var outColor = "#2bff8f"; //外层边框色粗
// var textColor = '#50e0ff'; //文字颜色
// var startColor = 'rgba(43,255,143,0.1)'; //中间饼图渐变开始颜色
// var endColor = 'rgba(43,255,143,0.8)'; //中间饼图渐变结束颜色


/*---------------------缩放----------------------------*/
var scale = 1;


/*---------------------颜色配置----------------------------*/
var color = [{
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [{
      offset: 0,
      color: startColor // 0% 处的颜色
  }, {
      offset: 1,
      color: endColor // 100% 处的颜色
  }],
  globalCoord: false // 缺省为 false
}, 'none'];
/*---------------------富文本----------------------------*/
var rich = {
  time: {
      color: innerColor,
      fontSize: 32 * scale,
      padding: [0, 0],
      fontWeight:'bold'
  },
  unit:{
      color: innerColor,
      fontSize: 14 * scale,
      padding: [0,0,0, 0],
      verticalAlign:'bottom',
  }
}


option14 = {
  backgroundColor: '#031f2d',
  title: [{
      text: '',
      x: '50%',
      y: '90%',
      textAlign: 'center',
      textStyle: {
          color: '#fff',
          textAlign: 'center',
          fontSize: 24 * scale,
          fontWeight: 'bold'
      },
  }],
  legend: {
      show: false,
      itemGap: 12,
      data: ['通过', '未通过']
  },
  series: [
      //内圈圆环
      {
          name: 'Line 0',
          type: 'pie',
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          center: ['50%', '50%'],
          radius: ['50%', '51.5%'],
          itemStyle: {
              normal: {
                  color: innerColor
              }
          },
          data: [{
              value: 10,
              name: '',
          }],
          label: {
              normal: {
                  formatter: function(params) {
                      var time = echartData[0].value;
                      return '{time|' + time + '}%';
                  },
                  position: 'center',
                  textStyle: {
                      fontSize: 38 * scale,
                      fontWeight: 'bold',
                      color: textColor
                  },
                  rich:rich
              }
          }
      },
      //中间圆环
      {
          name: 'Line 1',
          type: 'pie',
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          center: ['50%', '50%'],
          radius: ['75%', '65%'],
          color: color,
          itemStyle: {
              normal: {
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  },
              }
          },
          data:echartData,
      },
      //外层圆环
      {
          name: 'Line 2',
          type: 'pie',
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          center: ['50%', '50%'],
          radius: ['75%', '75%'],
          itemStyle: {
              normal: {
                  borderWidth: 2* scale,
                  borderColor: outColor,
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  },
              }
          },
          data: [{
              value: 10,
              name: '',

          }]
      }
  ],
};

myChart14.setOption(option14);
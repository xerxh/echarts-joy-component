

var myChart25 = echarts.init(document.getElementById('line25'), 'macarons');


option25 = {
  tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
  },
  legend: {
      data:['利润', '支出', '收入']
  },
  toolbox: {
      show : true,
      feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar']},
          restore : {show: true},
          saveAsImage : {show: true}
      }
  },
  calculable : true,
  xAxis : [
      {
          type : 'value'
      }
  ],
  yAxis : [
      {
          type : 'category',
          axisTick : {show: false},
          data : ['周一','周二','周三','周四','周五','周六','周日']
      }
  ],
  series : [
      {
          name:'利润',
          type:'bar',
          itemStyle : { normal: {label : {show: true, position: 'inside'}}},
          data:[200, 170, 240, 244, 200, 220, 210]
      },
      {
          name:'收入',
          type:'bar',
          stack: '总量',
          barWidth : 5,
          itemStyle: {normal: {
              label : {show: true}
          }},
          data:[320, 302, 341, 374, 390, 450, 420]
      },
      {
          name:'支出',
          type:'bar',
          stack: '总量',
          itemStyle: {normal: {
              label : {show: true, position: 'left'}
          }},
          data:[-120, -132, -101, -134, -190, -230, -210]
      }
  ]
};
                  


myChart25.setOption(option25);
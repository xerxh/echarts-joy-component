var myChart34 = echarts.init(document.getElementById('line34'),'macarons');

option34 = {
  title: {
      text: '漏斗分析图',
      subtext: '网站用户行为统计－纯属虚构',
      x:'center',
      textStyle: {
          color: '#fff'
      }
    
  },
  backgroundColor: '#522257',
  color: ['#efbb1a', '#d77169', '#c14f60', '#953f61', '#72355f', ],

  series : [
      {
          name:'漏斗图',
          type:'funnel',
          x: '10%',
          y: 60,
          //x2: 80,
          y2: 60,
          width: '80%',
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort : 'descending', // 'ascending', 'descending'
          gap :0,
          
          data:[
              {value:60, name:'访问'},
              {value:40, name:'咨询'},
              {value:20, name:'订单'},
              {value:80, name:'点击'},
              {value:100, name:'展现'}
              
             
          ].sort(function (a, b) { return a.value - b.value}),
          roseType: true,
          label: {
              normal: {
                  formatter: function (params) {
                      return params.name + ' ' + params.value + '%';
                  },
                  position: 'center'
              }
          },
          itemStyle: {
              normal: {
                  borderWidth: 0,
                  shadowBlur: 30,
                  shadowOffsetX: 0,
                  shadowOffsetY: 10,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
          
      }
      
  ]
};



myChart34.setOption(option34);
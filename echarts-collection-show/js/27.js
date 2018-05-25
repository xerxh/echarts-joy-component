var myChart27 = echarts.init(document.getElementById('line27'),'macarons');


var  option27 = {
  title: {
      text: '网络拓扑信息',
  },
  tooltip:{},
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series : [
      {
          type: 'graph',
          layout: 'none',
          symbolSize: 50,//图形的大小（示例中的圆的大小）
          roam: true,//鼠标缩放及平移
          focusNodeAdjacency:true,//是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
          label: {
              normal: {
                  show: true ,  //控制非高亮时节点名称是否显示
                  position:'top',
                  fontSize:20
              }
          },

          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [1, 10],    //箭头的大小
          edgeLabel: {
              normal:{
                  show:false
              },
              emphasis: {
                  textStyle: {
                      fontSize: 20  //边节点显示的字体大小
                  }
              }
          },

//节点信息

  data:
  [
      {
          name:'h1',
          ip:'10.108.50.101',
          isnode:true,
          x:100,
          y:300,
          // symbol:'image://服务器-20.png',
      },
      {
          name:'h2',
          ip:'10.108.50.102',
          isnode:true,
          x:200,
          y:470,
          // symbol:'image://服务器-20.png',
      },
      {
          name:'h3',
          ip:'10.108.50.103',
          isnode:true,
          x:400,
          y:470,
          // symbol:'image://服务器-20.png',
      },
      {
          name:'h4',
          ip:'10.108.50.104',
          isnode:true,
          x:500,
          y:300,
          // symbol:'image://服务器-20.png',
      },
      {
          name:'h5',
          ip:'10.108.50.105',
          isnode:true,
          x:400,
          y:130,
          // symbol:'image://服务器-20.png',
      },
      {
          name:'h6',
          ip:'10.108.50.106',
          isnode:true,
          x:200,
          y:130,
          // symbol:'image://服务器-20.png',
      },
      {
          name:'h7',
          ip:'10.108.50.107',
          isnode:true,
          x:300,
          y:300,
          // symbol:'image://服务器-20.png',
      },

  ],

  links:
      [
          {   
              source:'h1',
              target:'h2',
              islink:true,
              name:'链路1',
              bandwith:Math.round(Math.random()*50+50)+'M',//50-100间的随机整数
              timeout:Math.round(Math.random()*10)+1+'ms',   //1-10间的整数
              PacketLossRate:'0.0'+Math.round(Math.random()*10)+'%', //0.01%--0.09%
          },
          {
              source:'h2',
              target:'h3',
              islink:true,
              name:'链路2',
              bandwith:Math.round(Math.random()*50+50)+'M',//50-100间的随机整数
              timeout:Math.round(Math.random()*10)+1+'ms',   //1-10间的整数
              PacketLossRate:'0.0'+Math.round(Math.random()*10)+'%', //0.01%--0.09%
          },{
              source:'h3',
              target:'h4',
              islink:true,
              name:'链路3',
              bandwith:Math.round(Math.random()*50+50)+'M',//50-100间的随机整数
              timeout:Math.round(Math.random()*10)+1+'ms',   //1-10间的整数
              PacketLossRate:'0.0'+Math.round(Math.random()*10)+'%', //0.01%--0.09%
          },{
              source:'h4',
              target:'h5',
              islink:true,
              name:'链路4',
              bandwith:Math.round(Math.random()*50+50)+'M',//50-100间的随机整数
              timeout:Math.round(Math.random()*10)+1+'ms',   //1-10间的整数
              PacketLossRate:'0.0'+Math.round(Math.random()*10)+'%', //0.01%--0.09%
          },{
              source:'h5',
              target:'h6',
              islink:true,
              name:'链路5',
              bandwith:Math.round(Math.random()*50+50)+'M',//50-100间的随机整数
              timeout:Math.round(Math.random()*10)+1+'ms',   //1-10间的整数
              PacketLossRate:'0.0'+Math.round(Math.random()*10)+'%', //0.01%--0.09%
          },{
              source:'h6',
              target:'h1',
              islink:true,
              name:'链路6',
              bandwith:Math.round(Math.random()*50+50)+'M',//50-100间的随机整数
              timeout:Math.round(Math.random()*10)+1+'ms',   //1-10间的整数
              PacketLossRate:'0.0'+Math.round(Math.random()*10)+'%', //0.01%--0.09%
          },{
              source:'h1',
              target:'h7',
              islink:true,
              name:'链路7',
              bandwith:Math.round(Math.random()*50+50)+'M',//50-100间的随机整数
              timeout:Math.round(Math.random()*10)+1+'ms',   //1-10间的整数
              PacketLossRate:'0.0'+Math.round(Math.random()*10)+'%', //0.01%--0.09%
          },{
              source:'h2',
              target:'h7',
              islink:true,
              name:'链路8',
              bandwith:Math.round(Math.random()*50+50)+'M',//50-100间的随机整数
              timeout:Math.round(Math.random()*10)+1+'ms',   //1-10间的整数
              PacketLossRate:'0.0'+Math.round(Math.random()*10)+'%', //0.01%--0.09%
          },{
              source:'h3',
              target:'h7',
              islink:true,
              name:'链路9',
              bandwith:Math.round(Math.random()*50+50)+'M',//50-100间的随机整数
              timeout:Math.round(Math.random()*10)+1+'ms',   //1-10间的整数
              PacketLossRate:'0.0'+Math.round(Math.random()*10)+'%', //0.01%--0.09%
          },{
              source:'h7',
              target:'h5',
              islink:true,
              name:'链路10',
              bandwith:Math.round(Math.random()*50+50)+'M',//50-100间的随机整数
              timeout:Math.round(Math.random()*10)+1+'ms',   //1-10间的整数
              PacketLossRate:'0.0'+Math.round(Math.random()*10)+'%', //0.01%--0.09%
          },
      ],
          lineStyle: {
              normal: {
                  show:true,
                  color:
                  {       
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [
                          {
                              offset: 0, color: 'red' // 0% 处的颜色
                          }
                          ,{
                              offset: 1, color: 'blue' // 100% 处的颜色
                          }],
                          globalCoord: false // 缺省为 false
                      },
                
               // curveness: 0.2
                    
              },
              emphasis:{
                  color:'red',
                  width:3,
                  type:'dashed',//虚线

              }
          },
         
          tooltip:
          {
          position:'bottom',//悬浮时显示的位置
          backgroundColor:'green',
          textStyle:{fontSize:18,

          },

          formatter:function(params){//悬浮提示框显示的内容
             if (params.data.islink) {return '带宽：&nbsp'+params.data.bandwith+'<br />'+'时延：&nbsp'+params.data.timeout+'<br />'+'丢包率：'+params.data.PacketLossRate;}
             else if (params.data.isnode) {return params.data.ip;}
          }
          },//悬浮时的提示框，不设置时是随鼠标移动

      }
  ]
};



myChart27.setOption(option27);
var upColor = 'red';   // 红色柱
var downColor = 'green';　　// 绿色柱
var myChart = echarts.init(document.getElementById('line'));
refush()
function refush () {
    myChart.setOption(option = {
        backgroundColor: '#fff',
        animation: false,
        title: {
            text: '实时折线图',
            left: '1%',
            top: '6%',
            textStyle: {
                color: '#fff'
            }
            
        },
        legend: {
            right: '7%',
            top: '7%',
            // bottom: 10,  
            formatter: function(params){
                if(params == 'MA5'){
                    return params+'  8.9';
                }else if(params == 'MA10'){
                    return params+'  10.1';
                }else{
                    return params+'  8.85';
                }
            }, 
            data: [
                {
                    name:'k线图',
                    icon:'circle',
                },
                {name:'MA5',
                 icon:'circle',
              },{
                 name: 'MA10',
                 icon:'circle' 
              },
              {
                  name:'MA20',
                  icon: 'circle'
              }]
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                axis: 'x'
            },
            formatter: function (params){
                console.log(params)
                console.log(k(40))
                var res = params[0].seriesName + ' ' + params[0].name;
                res += '<br/>  开盘 : ' + params[0].value[1];
                res += '<br/>  最高 : ' + params[0].value[3];
                res += '<br/>  收盘 : ' + params[0].value[4] 
                res += '<br/> 最低 : ' + params[0].value[2];
                res += `<br/>${params[1].seriesName} : ${params[1].value}`;
                res += `<br/>${params[2].seriesName} : ${params[2].value}`;
                res += `<br/>${params[3].seriesName} : ${params[3].value}`;
                res += `<br/>${params[4].seriesName} : ${params[4].value[1]}`;
                console.log(params[4].value[1])
                return res;
            }
        },
        axisPointer: {
            link: {xAxisIndex: 'all'},
            label: {
                backgroundColor: '#777'
            }
        },


        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: false
                },
                brush: {
                    type: ['lineX', 'clear']
                }
            }
        },
        brush: {
            xAxisIndex: 'all',
            brushLink: 'all',
            outOfBrush: {
                colorAlpha: 0.1
            }
        },


        visualMap: {
            show: true,
            seriesIndex: 4,
            dimension: 2,
            pieces: [{
                value: 1,
                color: downColor
            }, {
                value: -1,
                color: upColor
            }]
        },
        grid: [
            {
                left: '10%',
                right: '8%',
                height: '50%'
            },
            {
                left: '10%',
                right: '8%',
                top: '73%',
                height: '10%'
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: time(1),
                scale: true,
                // gridIndex: 0,
                boundaryGap : false,
                axisLine: {onZero: false},
                splitLine: {show: false},
                splitNumber: 20,
                boundaryGap : [0.1,0.1],
                min: 'dataMin',
                max: 'dataMax',
                axisPointer: {
                    z: 100
                }
            },
            {
                type: 'category',
                gridIndex: 1,
                data: time(1),
                scale: true,
                boundaryGap : false,
                boundaryGap : [0.1,0.1],
                axisLine: {onZero: false},
                axisTick: {show: false},
                splitLine: {show: false},
                axisLabel: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            }
        ],
        yAxis: [
            {
                scale: true,
                splitArea: {
                    show: true
                }
            },
            {
                scale: true,
                gridIndex: 1,
                splitNumber: 2,
                axisLabel: {show: false},
                axisLine: {show: false},
                axisTick: {show: false},
                splitLine: {show: false}
            }
        ],
        dataZoom: [
            {
                type: 'inside',
                xAxisIndex: [0, 1],
                start: 0,
                end: 100
            },
            {
                show: true,
                xAxisIndex: [0, 1],
                type: 'slider',
                top: '85%',
                start: 0,
                end: 100
            }
        ],
        series: [
            {
                name: 'k线图',
                type: 'k',
                data: k(1),
                barMaxWidth: 20, 
                barMinWidth: 1, 
                itemStyle: {
                    normal: {
                        color: upColor,
                        color0: downColor,
                        borderColor: null,
                        borderColor0: null
                    }
                },
                tooltip: {
                    show: true,
                    formatter: function (param) {
                        param = param[0];
                        console.log(param[0])
                        return [
                            'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
                            'Open: ' + param.data[0] + '<br/>',
                            'Close: ' + param.data[1] + '<br/>',
                            'Lowest: ' + param.data[2] + '<br/>',
                            'Highest: ' + param.data[3] + '<br/>'
                        ].join('');
                    }
                }
            },
            {
                name: 'MA5',
                type: 'line',
                data: randomData(1),
                smooth: true,
                symbol: 'none',
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'MA10',
                type: 'line',
                data: randomData(1),
                smooth: true,
                symbol: 'none',
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'MA20',
                type: 'line',
                symbol: 'none',
                data: randomData(1),
                smooth: true,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            // {
            //     name: 'MA30',
            //     type: 'line',
            //     data: randomData(1),
            //     smooth: true,
            //     lineStyle: {
            //         normal: {opacity: 0.5}
            //     }
            // },
            {
                name: 'Volume',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barMaxWidth: 20, 
                barMinWidth: 1, 
                data: kRandomData(1)
            }
        ]
    }, true);
}

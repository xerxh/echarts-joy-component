var myChart = echarts.init(document.getElementById('main')); 
var series = "";
var color = ['yellow','#a6c84c', '#ffa022', '#46bee9'];
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = worldCoordData[dataItem[0].name];
        var toCoord = worldCoordData[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                name: dataItem[0].name,
                coord: fromCoord
            }, {
                name: dataItem[1].name,
                coord: toCoord
            }]);
        }
    }
    return res;
};
function changeCity (data) {
    data.forEach(function (item, i) {
        series = [        
            {  
                name: '遭受攻击',  
                type: 'map',  
                mapType: 'world',
                zlevel: 1, 
                zoom: 1.2,
                itemStyle: {
                    emphasis: {label: {show: true}}
                },
                label: {
                    normal: {
                       // show: true   //控制地图上的省份显示
                    },
                    emphasis: {
                        show: true   //高亮显示设置
                    }
                },
                data: EnglishData,
            },  
            // {

            // },
            {
                name: item[0],
                type: 'lines',
                zlevel: 3,   // 3
                effect: {
                        show: true,  //是否显示特效
                        period: 2,  //特效时间
                        trailLength: 0.7,  //特效尾迹长度
                        color: 'red',
                        symbol: 'triangle',
                        symbolSize: [7,10],   //特效标记的大小
                        animation: false,

                },
                lineStyle: {  //线两端的标记大小
                        normal: {
                            // color: color[1],
                            width: 0,  // 2
                            opacity: 0.8,
                            curveness: 0.3 //边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                        }
                },
                data: convertData(item[1]) //为了更好点支持多段线的配置，线数据的格式在 3.2.0 做了一定调整，如下：
            }, // 箭头后的拖尾
            {
                name: item[0],
                type: 'lines',
                zlevel: 2,
                // effect: {
                //         show: true,
                //         period: 1,
                //         trailLength: 0.7,
                //         //symbol: planePath,
                //         symbolSize: 5
                // },
                lineStyle: {
                    normal: {
                        color: '#78FAFA',
                        width: 5,
                        type: 'solid',
                        opacity: 0.8,
                        curveness: 0.3,
                    },
                },
                    data: convertData(item[1])
            },
            {   
                name: item[0], //我想在地图上标记的点
                type: 'effectScatter', 
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {  // 波纹动画
                    brushType: 'stroke', //波纹绘制方式
                    period: 4, //动画时间
                    scale: 10, //波纹最大缩放比例
                },
                symbol: 'circle', // 标记图像  默认是圆形
                label: {  // 图形上的文本标签
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) { //决定标记的大小
                    var value = val[2];
                    if(val[2] > 100){
                        value = 100;
                    }else{
                        return val[2] / 8;
                    }
                },
                itemStyle: {  //图标样式
                    normal: {
                        color: '#fff'
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: worldCoordData[dataItem[1].name].concat([dataItem[1].value])
                    };
                })  // 在地图安装坐标找出点
            }
        ];
    }); 
}
function AnalogData (city) {
    return [
        [
            {name:'澳大利亚'},
            {name: city,value: randomData() }
        ],
        [
            {name: '白俄罗斯'},
            {name: '澳大利亚',value: randomData()}
        ],
        [
            {name: '加拿大'},
            {name: '中国',value: randomData() }
        ],
        [
            {name:'中国'},
            {name: '玻利维亚',value: randomData() }
        ],
        [
            {name:'玻利维亚'},
            {name: '不丹',value: randomData() }
        ],
        [
            {name:'不丹'},
            {name: '马其顿',value: randomData() }
        ],
        [
            {name: '马其顿'},
            {name: '智利',value: randomData() }
        ],
        [
            {name: '智利'},
            {name: '澳大利亚',value: randomData() }
        ],
    ];
}
changeCity([['奥地利',AnalogData('美国')]]);
option = {
    geo: {
        map: 'world',
        zoom: 1.2,
        // show: false,
        // label: {
        //     emphasis: {
        //         show: false
        //     }
        // },
        nameMap: nameMap,
        itemStyle: {
            normal: {					// 普通状态下的样式
                areaColor: '#323c48',
                borderColor: '#111'
            },
            // emphasis: {					// 高亮状态下的样式
            //     areaColor: '#2a333d'
            // }
        },
    }, 
backgroundColor: '#404a59', 
title: {  
    text: '全局攻击态势分析',
    subtext: '世界地图',
    // sublink: '全局攻击态势分析',  // 富文本标题超链接
    left: 'center',  
    // top: 'top' ,
    // textStyle : {
    //     color: 'rgb(120, 250, 250)'
    // }
},  
tooltip: {    // 提示框组件
    trigger: 'item',    // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
    formatter: function (params) { 
        console.log(params);
        // var value = (params.value + '').split('.');  
        // value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')  
        //         + '.' + value[1]; 
       // var name = nameMap[params.name]; 
       var name  = params.name;
        return params.seriesName + '<br/>' + name + ' : '+params.value+'  次' ;  
    }  
},
// legend: {   // 图例组件  不同系列的标记
// }, 
visualMap: {  
    //show: false,
    min: 0,  
    max: 100,
    left: 'left',
    top: 'bottom',  
    text:['高','低'],  
    realtime: false,  // 拖拽时，是否实时更新
    calculable: true,  // 是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
    color: ['orangered','yellow','lightskyblue']  
},  
legend: {
    show: false,
    orient: 'vertical',
    top: 'bottom',
    left: 'right',
    data: 'legend',
    textStyle: {
        color: 'black'
    },
    selectedMode: 'multiple'
},
series: series,
// series: [  
//     {  
//     name: '攻击',  
//     type: 'map',  
//     mapType: 'world',  
//    // roam: true, 
//     label: {    //  悬停显示的攻击数据
//         normal: {
//         show: true,
//         position: 'bottom',
//         formatter: 'c',
//         fontSize: 11,
//         color: 'white',
//         backgroundColor: 'rgba(242,50,18,1)',
//         borderRadius: 4,
//         padding: [1, 2, 1, 2],
//         textStyle: {
//                         color: '#a6c84c'
//             }
//         }
//     },
//     data: [{name: '阿尔巴尼亚',value:  1}],
//     itemStyle:{  
//         emphasis:{label:{show:true}}  
//     }, 
     
//     data: EnglishData,
//     }  
// ]  
};  
myChart.setOption(option); 
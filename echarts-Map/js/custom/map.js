var color = ['#a6c84c', '#ffa022', '#46bee9'];
var series = []; // 保存option下series相关配置
var myChart = ""; // 用来保存map图的canvas初始化对象
var option = ""; // 用来保存图表的配置项
function AnalogData (city) {
    return [
        [
            {name:'青海'},
            {name: city,value: randomData() }
        ],
        [
            {name: '黑龙江'},
            {name: city,value: randomData()}
        ],
        [
            {name: '云南'},
            {name: city,value: randomData() }
        ],
        [
            {name:'广州'},
            {name: city,value: randomData() }
        ],
        [
            {name:'辽宁'},
            {name: city,value: randomData() }
        ],
        [
            {name:'新疆'},
            {name: city,value: randomData() }
        ],
        [
            {name: '天津'},
            {name: city,value: randomData() }
        ],
        [
            {name: '上海'},
            {name: city,value: randomData() }
        ],
    ];
}
function changeCity(data){
    data.forEach(function (item, i) {
        series = [        
        {  
            name: '遭受攻击',  
            type: 'map',  
            mapType: 'china',   
            // roam: true,  
            //   left: 5, //如果为0可最大化的在画布上显示地图，但也可能边缘处有的被隐藏，所以留一定的距离
            //   right: 5,  
            label: {    //  悬停显示的攻击数据
                normal: {
                show: true,
                position: 'bottom',
                formatter: 'c',
                fontSize: 11,
                color: 'white',
                backgroundColor: 'rgba(242,50,18,1)',
                borderRadius: 4,
                padding: [1, 2, 1, 2],
                textStyle: {
                                color: '#a6c84c'
                    }
                }
            },
            data: mydata,
            itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        areaColor: 'red'  //鼠标移到省份上的高亮颜色
                    }
                },
            },
            {
            name: item[0],
            type: 'lines',
            zlevel: 3,
            effect: {
                show: true,  //是否显示特效
                period: 2,  //特效时间
                trailLength: 0.4,  //特效尾迹长度
                color: '#fff',
                // symbol: 'arrow',
                symbolSize: [8,15]   //特效标记的大小
            },
            lineStyle: {  //线两端的标记大小
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    // curveness: 0.1 //边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                }
            },
            data: convertData(item[1]) //为了更好点支持多段线的配置，线数据的格式在 3.2.0 做了一定调整，如下：
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 1,
                trailLength: 0.7,
                //symbol: planePath,
                symbolSize: 5
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.8,
                    // curveness: 0.1
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0], //我想在地图上标记的点
            type: 'effectScatter', 
            coordinateSystem: 'geo',
            zlevel: 0.7,
            rippleEffect: {  // 波纹动画
                brushType: 'stroke', //波纹绘制方式
                period: 4, //动画时间
                scale: 15, //波纹最大缩放比例
            },
            symbol: 'circle', // 标记图像  默认是圆形
            // label: {  // 图形上的文本标签
            //     normal: {
            //         show: true,
            //         position: 'right',
            //         formatter: '{b}'
            //     }
            // },
            symbolSize: function (val) { //决定标记的大小
                return val[2] / 8;
            },
            // itemStyle: {  图标样式
            //     normal: {
            //         color: color[i]
            //     }
            // },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })  // 在地图安装坐标找出点
        }
        ];
    }); 
}
var convertData = function   (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
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
function refresh () {

    changeCity([['北京',AnalogData('北京')]]);
    myChart = echarts.init(document.getElementById('main'));
    option = {
        backgroundColor: '#404a59',
        title : {
            text: 'Web入侵检测与漏洞感知系统',
            subtext: '发现攻击  57  次',
            left: 'center',
            textStyle : {
                color: 'rgb(120, 250, 250)'
            }
        },
        tooltip : { // 提示框组件
            trigger: 'item'
        },
        legend: {
            // orient: 'vertical',
            // top: 'bottom',
            // left: 'right',
            // data:['北京 Top10', '上海 Top10', '广州 Top10'],
            // textStyle: {
            //     color: 'blue'
            // },
            // selectedMode: 'single'
        },
        geo: {
            map: 'china',
            //  left: 5, //如果为0可最大化的在画布上显示地图，但也可能边缘处有的被隐藏，所以留一定的距离
            //  right: 5, 
            // roam: true,  //是否支持缩放
        
        },
        series: series
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    //设置点击事件  
    myChart.on('click', function (params) {

        // 1.点击身份的同时更新攻击列表的数据
            // 1.1更新列表头部数据
        var title = document.getElementsByClassName('title')[0];
                // 找到攻击列表的DOM对象
        var  div = title.getElementsByTagName('div');
        console.log(div)
                // 用正则替换攻击次数
        div[0].innerHTML = div[0].innerHTML.replace(/\d+/,randomData());
                // 找到高危  中危 低危 
        var dataFather = div[1].querySelectorAll('[data-title]')[0];  //高危  中危 低危 的父元素
        dataTitle = dataFather.querySelectorAll('div')
        console.log(dataTitle);
               // 用循环进行替换数据
        for (var i = 0;i < dataTitle.length; i++){
            console.log(dataTitle[i].innerHTML)
            dataTitle[i].innerHTML = dataTitle[i].innerHTML.replace(/\d+/,randomData());
        }
            // 1.2更新数据列表数据
                // 获取数据列表父元素
        var list = document.getElementsByClassName('list')[0];
        console.log(list);
                // 获取数据列表数组
        var html = "";
        for (var i = 0; i < 5; i++){
           html += 
           `<ul class="row data">
                <li class="col-xs-2 col-md-2">${Math.random() > 0.5 ? '高' : '中'}</li>
                <li class="col-xs-2 col-md-2">${new Date().toLocaleString()}</li>
                <li class="col-xs-2 col-md-2">${Math.random() > 0.5 ? '上海' : '武汉'}</li>
                <li class="col-xs-2 col-md-2">北京</li>
                <li class="col-xs-2 col-md-2">${Math.random() > 0.5 ? 'SQL注入' : 'xss攻击'}</li>
                <li class="col-xs-2 col-md-2">127.0.0.1</li> 
            </ul>`
        }
        list.innerHTML = html;  

        // 2.更改城市地图
            // 2.1 更改目标城市的配置
        var city = params.name;  
        var data = AnalogData(city);
        console.log(data)
        changeCity([[city,data]]);
        console.log(series)
        option.series = series; 
        option.title.subtext = '发现攻击  '+randomData()+'  次';
        myChart.setOption(option);
            //2.2 改变城市的同时 改变饼状图的数据
        typeData = [
            {value: randomData(), name:'其他'},
            {value: randomData(), name:'sql注入'},
            {value: randomData(), name:'漏洞扫描'},
            {value: randomData(), name:'文件越权'},
            {value: randomData(), name:'暴力破解'},
            {value: randomData(), name:'信息泄露'},
            {value: randomData(), name:'xss跨站攻击'},
            {value: randomData(), name:'远程溢出'},
            {value: randomData(), name:'Web后门'},
        ];
        TypeOption.series[0].data = typeData
        TypeChart.setOption(TypeOption);
            // 2.3 改变城市的同时改变 危险指数图数据
        gaugeData = [{value: randomData(), name: '危险指数'}];
        console.log(gaugeData)
        GuageOption.series[0].data = gaugeData;
        GuageChart.setOption(GuageOption);
    });
}
refresh();
// 设置一个全局变量保存旧的页面可视区的数值
var oldValue = window.innerWidth;
// 设置一个监听页面可视区的定时器 来根据页面的视图大小调整绘制地图的大小 
var timer = setInterval(() => {
    var nowValue = window.innerWidth;
    if(nowValue != oldValue){
        oldValue = nowValue;
        // var main =  document.getElementById('main');
        // main.getElementsByTagName('div')[0].style.width = parseInt(nowValue*0.6)+'px';
        refresh();
        refreshGauge();
        refreshType();
    }
},50);
var GuageChart = ""; // 用来保存guage图的canvas初始化对象
var GuageOption = ""; // 用来保存图表的配置项
function refreshGauge () {

    GuageChart = echarts.init(document.getElementById('gauge'));

    // 指定图表的配置项和数据
    GuageOption = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        title : {
            text: '危险系数',
            // subtext: '纯属虚构',
            x:'center',
            top: '-10px'
        },
        toolbox: {
            feature: {
            //  restore: {},  //刷新图标
            //  saveAsImage: {}  //保存稳图片格式
            }
        },
        series: [
            {
                name: '危险指数',
                type: 'gauge',
                detail: {formatter:'{value}%'},
                data: gaugeData
            }
        ]
    };

    GuageChart.setOption(GuageOption);
}  
refreshGauge();  
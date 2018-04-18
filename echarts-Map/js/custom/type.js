var TypeChart = ""; // 用来保存echarts初始化的对象
var TypeOption = ""; // 用来保存图表的配置项
function refreshType () {

    TypeChart = echarts.init(document.getElementById('type'));
    function getName (typeData) {
        var res = [];
        for (var i = 0; i < typeData.length; i++){
            res.push(typeData[i].name)
        }
        return res;
    };
    // 指定图表的配置项和数据
    TypeOption = {
        title : {
            text: '攻击类型分布',
            // subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //     orient: 'vertical',
        //     left: 'left',
        //  data:  getName (typeData)  //是否显示筛选数据
        // },
        series : [
            {
                name: '',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data: typeData
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    TypeChart.setOption(TypeOption);
}
refreshType ();
var myChart35 = echarts.init(document.getElementById('line35'),'macarons');

option35 = { backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8","#FFDB5C",],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        data: ['展现','点击','访问','咨询','订单']
    },
    series: [
        {
            name: '预期',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
                normal: {
                    formatter: '{b}预期'
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}预期: {c}%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.7
                }
            },
            data: [
                {value: 60, name: '访问'},
                {value: 40, name: '咨询'},
                {value: 20, name: '订单'},
                {value: 80, name: '点击'},
                {value: 100, name: '展现'}
            ]
        },
        {
            name: '实际',
            type: 'funnel',
            left: '10%',
            width: '80%',
            maxSize: '80%',
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#777'
                    }
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}实际: {c}%'
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.4,
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            data: [
                {value: 30, name: '访问'},
                {value: 10, name: '咨询'},
                {value: 5, name: '订单'},
                {value: 50, name: '点击'},
                {value: 80, name: '展现'}
            ]
        }
    ]
};



myChart35.setOption(option35);
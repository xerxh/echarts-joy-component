var myChart10 = echarts.init(document.getElementById('line10'));

var scaleData = [{
    'name': '美国',
    'value': 10
    },
    {
        'name': '中国',
        'value': 20
    },
    {
        'name': '日本',
        'value': 20
    },
    {
        'name': '德国',
        'value': 27
    },
    {
        'name': '英国',
        'value': 23
    }
];
var rich = {
    white: {
        color: '#ddd',
        align: 'center',
        padding: [5, 0]
    }
};
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var data = [];
for (var i = 0; i < scaleData.length; i++) {
    data.push(
        {
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 30,
                    borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: '#7777eb'
                    }, {
                        offset: 1,
                        color: '#70ffac'
                    }]),
                    shadowColor: 'rgba(142, 152, 241, 0.6)'
                }
            }
        },
        {
        value: 4,
        name: '',
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [{
name: '',
type: 'pie',
clockWise: false,
radius: [195, 200],
hoverAnimation: false,
itemStyle: {
    normal: {
        label: {
            show: true,
            position: 'outside',
            color: '#ddd',
            formatter: function(params) {
                var percent = 0;
                var total = 0;
                for (var i = 0; i < scaleData.length; i++) {
                    total += scaleData[i].value;
                }
                percent = ((params.value / total) * 100).toFixed(0);
                if(params.name !== '') {
                    return params.name + '\n{white|' + '占比' + percent + '%}';
                }else {
                    return '';
                }
            },
            rich: rich
        },
        labelLine: {
            show: false
        }
    }
},
data: data
}];
option10 = {
    backgroundColor: '#04243E',
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}

myChart10.setOption(option10);



// myChart10.setOption(option10);
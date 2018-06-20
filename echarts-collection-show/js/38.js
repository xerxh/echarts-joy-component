var myChart38 = echarts.init(document.getElementById('line38'),'macarons');

var data = ["A", 25.411]
var data1 = ["B", 12]
var data2 = ["C", 60]
var data3 = ["D", 99]


var color = ['#af00a9','#ffb800','#00ed03'];

function getStyle(value) {
    if (value <= 30) {
        return {
            splitNumber: 3, //刻度数量
            min: 0,
            max: 30,
            startAngle: 225,
            endAngle: 144,
            color: [
                [1, color[0]]
            ]
        };
    } else if (value >= 90) {
        return {
            splitNumber: 1, //刻度数量
            min: 90,
            max: 100,
            startAngle: -18,
            endAngle: -45,
            color: [
                [1, color[1]]
            ]
        };
    } else {
        return {
            splitNumber: 6, //刻度数量
            min: 30,
            max: 90,
            startAngle: 144,
            endAngle: -18,
            color: [
                [1, color[2]]
            ]
        };
    }

}

var style = getStyle(data[1]);
var option38 = {
    backgroundColor: "black",
    title: {
        text: '可持续发展指数',
        subtext: '纯属虚构',
        left: '50%',
        top: '25%',
        textAlign: 'center',
        textStyle: {
            color: "#fff",
            fontWeight: 'normal',
        }
    },
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
        {
            name: data[0],
            type: 'gauge',
            splitNumber: 5, //刻度数量
            min: 0,
            max: 100,
            radius: '20%', //图表尺寸
            center:['20%','50%'],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    shadowBlur: 0,
                    color: [
                        [1, '#24273e']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#7887ae',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: '#7887ae',
                }
            },
            axisLabel: {
                distance: 2,
                textStyle: {
                    color: "#7887ae",
                    fontSize: "0",
                },
                formatter: function(e) {
                    switch (e + "") {
                        case "0":
                            return "0%";
                        default:
                            return e;
                    }
                }

            },
            pointer: { //仪表盘指针
                show: 0
            },

            detail: {
                show: false
            },
            data: [{
                name: "",
                value: data[1]
            }]
        },
        {
            name: data[0],
            type: 'gauge',
            splitNumber: getStyle(data[1]).splitNumber, //刻度数量
            min: getStyle(data[1]).min,
            max: getStyle(data[1]).max,
            startAngle: getStyle(data[1]).startAngle,
            endAngle: getStyle(data[1]).endAngle,
            radius: '20%', //图表尺寸
            center:['20%','50%'],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    shadowBlur: 0,
                    color: getStyle(data[1]).color
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 1,
                length: '70%',
                width: 2
            },
            detail: {
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,

                offsetCenter: [0, '30%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff',
                    fontSize: 10,
                },
                formatter: '{value}'
            },
            data: [{
                name: "",
                value: data[1]
            }]
        },
        {
            name: data1[0],
            type: 'gauge',
            splitNumber: 5, //刻度数量
            min: 0,
            max: 100,
            radius: '20%', //图表尺寸
            center:['40%','50%'],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    shadowBlur: 0,
                    color: [
                        [1, '#24273e']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#7887ae',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: '#7887ae',
                }
            },
            axisLabel: {
                distance: 2,
                textStyle: {
                    color: "#7887ae",
                    fontSize: "0",
                },
                formatter: function(e) {
                    switch (e + "") {
                        case "0":
                            return "0%";
                        default:
                            return e;
                    }
                }

            },
            pointer: { //仪表盘指针
                show: 0
            },

            detail: {
                show: false
            },
            data: [{
                name: "",
                value: data[1]
            }]
        },
        {
            name: data1[0],
            type: 'gauge',
            splitNumber: getStyle(data1[1]).splitNumber, //刻度数量
            min: getStyle(data1[1]).min,
            max: getStyle(data1[1]).max,
            startAngle: getStyle(data1[1]).startAngle,
            endAngle: getStyle(data1[1]).endAngle,
            radius: '20%', //图表尺寸
            center:['40%','50%'],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    shadowBlur: 0,
                    color: getStyle(data1[1]).color
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 1,
                length: '70%',
                width: 2
            },
            detail: {
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,

                offsetCenter: [0, '30%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff',
                    fontSize: 10,
                },
                formatter: '{value}'
            },
            data: [{
                name: "",
                value: data1[1]
            }]
        },
        {
            name: data2[0],
            type: 'gauge',
            splitNumber: 5, //刻度数量
            min: 0,
            max: 100,
            radius: '20%', //图表尺寸
            center:['60%','50%'],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    shadowBlur: 0,
                    color: [
                        [1, '#24273e']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#7887ae',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: '#7887ae',
                }
            },
            axisLabel: {
                distance: 2,
                textStyle: {
                    color: "#7887ae",
                    fontSize: "0",
                },
                formatter: function(e) {
                    switch (e + "") {
                        case "0":
                            return "0%";
                        default:
                            return e;
                    }
                }

            },
            pointer: { //仪表盘指针
                show: 0
            },

            detail: {
                show: false
            },
            data: [{
                name: "",
                value: data[1]
            }]
        },
        {
            name: data2[0],
            type: 'gauge',
            splitNumber: getStyle(data2[1]).splitNumber, //刻度数量
            min: getStyle(data2[1]).min,
            max: getStyle(data2[1]).max,
            startAngle: getStyle(data2[1]).startAngle,
            endAngle: getStyle(data2[1]).endAngle,
            radius: '20%', //图表尺寸
            center:['60%','50%'],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    shadowBlur: 0,
                    color: getStyle(data2[1]).color
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 1,
                length: '70%',
                width: 2
            },
            detail: {
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,

                offsetCenter: [0, '30%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff',
                    fontSize: 10,
                },
                formatter: '{value}'
            },
            data: [{
                name: "",
                value: data2[1]
            }]
        },
        {
            name: data3[0],
            type: 'gauge',
            splitNumber: 5, //刻度数量
            min: 0,
            max: 100,
            radius: '20%', //图表尺寸
            center:['80%','50%'],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    shadowBlur: 0,
                    color: [
                        [1, '#24273e']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#7887ae',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: '#7887ae',
                }
            },
            axisLabel: {
                distance: 2,
                textStyle: {
                    color: "#7887ae",
                    fontSize: "0",
                },
                formatter: function(e) {
                    switch (e + "") {
                        case "0":
                            return "0%";
                        default:
                            return e;
                    }
                }

            },
            pointer: { //仪表盘指针
                show: 0
            },

            detail: {
                show: false
            },
            data: [{
                name: "",
                value: data[1]
            }]
        },
        {
            name: data3[0],
            type: 'gauge',
            splitNumber: getStyle(data3[1]).splitNumber, //刻度数量
            min: getStyle(data3[1]).min,
            max: getStyle(data3[1]).max,
            startAngle: getStyle(data3[1]).startAngle,
            endAngle: getStyle(data3[1]).endAngle,
            radius: '20%', //图表尺寸
            center:['80%','50%'],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    shadowBlur: 0,
                    color: getStyle(data3[1]).color
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 1,
                length: '70%',
                width: 2
            },
            detail: {
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,

                offsetCenter: [0, '30%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff',
                    fontSize: 10,
                },
                formatter: '{value}'
            },
            data: [{
                name: "",
                value: data3[1]
            }]
        }
    ]
};


myChart38.setOption(option38);
var myChart21 = echarts.init(document.getElementById('line21'));

dataBJ = [

    [4, 6, 5, 1, 5,2,3],

];
indicatorData = [{
        name: '操作系统',
        max: 15
    }, {
        name: '服务器',
        max: 15
    }, {
        name: '应用服务器',
        max: 15
    }, {
        name: '数据库',
        max: 15
    }, {
        name: '网络设备',
        max: 15
    },{
        name: '安全设备',
        max: 15
    },
    {
        name: '其他',
        max: 15
    },

];
var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

option21 = {
   
    color: [],
    backgroundColor: '#091c3d',
    width:1300,
    height:1300,
    legend: {
        bottom: 0,
        orient: 'horizontal',
        itemWidth: 30,
        itemHeight: 20,

        data: [{
            name: '告警分布',
            icon: 'circle',
            textStyle: {
                color: "#fc20ff"
            }
        }]
    },
    tooltip: {},
    radar: {
        center: ['50%', '50%'],
        indicator: indicatorData,
        radius: '20%',
        splitNumber: 1,
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        splitLine: {

            lineStyle: {
                color: '#4f8bbe',
                opacity: 0.5
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: '#0d6dba',
                opacity: 0.1
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#4f8bbe',
                opacity: 0.5
            }
        }
    },
    series: [{
            name: '雷达线ALL',
            type: 'radar',
            silent: true,
            lineStyle: {
                normal: {
                    type: 'solid',
                    color: "#375f9a",
                    width: 2,
                    opacity: 1,

                }
            },
            data: [
                [12,12,12,12,12,12,12]
            ],

            itemStyle: {
                normal: {
                    opacity: 0

                }
            },
            areaStyle: {
                normal: {
                    color: '#0d6dba',
                    opacity: 0.1
                }
            }
        }, {
            name: '雷达线2',
            type: 'radar',
            silent: true,
            lineStyle: {
                normal: {
                    type: 'solid',
                    color: "#375f9a",
                    width: 2,
                    opacity: 0.8,

                }
            },
            data: [
                [10,10,10,10,10,10,10]
            ],

            itemStyle: {
                normal: {
                    opacity: 0

                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    opacity: 0.1
                }
            }
        }, {
            name: '雷达线3',
            type: 'radar',
            silent: true,
            lineStyle: {
                normal: {
                    type: 'solid',
                    color: "#375f9a",
                    width: 2,
                    opacity: 0.6,

                }
            },
            data: [
                [8,8,8,8,8,8,8]
            ],

            itemStyle: {
                normal: {
                    opacity: 0

                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    opacity: 0.1
                }
            }
        }, {
            name: '雷达线4',
            type: 'radar',
            silent: true,
            lineStyle: {
                normal: {
                    type: 'solid',
                    color: "#375f9a",
                    width: 2,
                    opacity: 0.4,

                }
            },
            data: [
                [6,6,6,6,6,6,6]
            ],

            itemStyle: {
                normal: {
                    opacity: 0

                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    opacity: 0.1
                }
            }
        }, {
            name: '雷达线5',
            type: 'radar',
            silent: true,
            lineStyle: {
                normal: {
                    type: 'solid',
                    color: "#375f9a",
                    width: 2,
                    opacity: 0.2,

                }
            },
            data: [
                [4,4,4,4,4,4,4]
            ],

            itemStyle: {
                normal: {
                    opacity: 0

                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    opacity: 0.1
                }
            }
        }, {
            name: '告警分布',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataBJ,
            symbolSize: 4,
            itemStyle: {
                normal: {
                    borderColor: '#fc20ff',
                    borderWidth: 4,

                }
            },
            areaStyle: {
                normal: {
                    color: '#fc20ff',
                    opacity: 0.5
                }
            }
        }, {
            name: '雷达线',
            type: 'radar',
            silent: true,
            lineStyle: {
                normal: {
                    type: 'dotted',
                    width: 4,
                    opacity: 0.3,

                }
            },
            data: [
                [2, 2, 2, 2, 2,2,2]
            ],

            itemStyle: {
                normal: {
                    opacity: 0

                }
            },
            areaStyle: {
                normal: {
                    color: '#a7c0dc',
                    opacity: 0.2
                }
            }
        }

    ]
};


myChart21.setOption(option21);
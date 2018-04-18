// 初始默认攻击北京 数据
var BJData = [  
    [
        {name: '青海'},
        {name: '北京',value: randomData() }
    ],
    [
        {name: '黑龙江'},
        {name: '北京',value: randomData() }
    ],
    [
        {name: '云南'},
        {name: '北京',value: randomData() }
    ],
    [
        {name:'广州'},
        {name: '北京',value: randomData() }
    ],
    [
        {name:'辽宁'},
        {name: '北京',value: randomData() }
    ],
    [
        {name:'新疆'},
        {name: '北京',value: randomData() }
    ],
    [
        {name: '天津'},
        {name: '北京',value: randomData() }
    ],
    [
        {name: '上海'},
        {name:'北京',value: randomData() }
    ],
];
// 所有省份的地图坐标
var geoCoordMap = {
    
    '甘肃':[103.73, 36.03],
    '青海':[101.74, 36.56],
    '四川':[104.06, 30.67],
    '河北':[114.48, 38.03],
    '云南':[102.73, 25.04],
    '贵州':[106.71, 26.57],
    '湖北':[114.31, 30.52],
    '河南':[113.65, 34.76],
    '山东':[117, 36.65],
    '江苏':[118.78, 32.04],
    '安徽':[117.27, 31.86],
    '浙江':[120.19, 30.26],
    '江西':[115.89, 28.68],
    '福建':[119.3, 26.08],
    '广东':[113.23, 23.16],
    '湖南':[113, 28.21],
    '海南':[110.35, 20.02],
    '辽宁':[123.38, 41.8],
    '吉林':[125.35, 43.88],
    '黑龙江':[126.63, 45.75],
    '山西':[112.53, 37.87],
    '陕西':[108.95, 34.27],
    '台湾':[121.30, 25.03],
    '北京':[116.46, 39.92],
    '上海':[121.48, 31.22],
    '重庆':[106.54, 29.59],
    '天津':[117.2, 39.13],
    '内蒙古':[111.65, 40.82],
    '广西':[108.33, 22.84],
    '西藏':[91.11, 29.97],
    '宁夏':[106.27, 38.47],
    '新疆':[87.68, 43.77],
    '香港':[114.17, 22.28],
    '澳门':[113.54, 22.19]
};
// 模拟数据的随机函数
function randomData() {

    return parseInt(Math.random() * 100);
};
// 鼠标悬停显示的攻击数据
var mydata = [  

    {name: '北京',value:  1},
    {name: '天津',value:  randomData() },  
    {name: '上海',value: 1 },
    {name: '重庆',value: randomData() },  
    {name: '河北',value: randomData() },
    {name: '河南',value: randomData() },  
    {name: '云南',value: randomData() },
    {name: '辽宁',value: randomData() },  
    {name: '黑龙江',value: randomData() },
    {name: '湖南',value: randomData() },  
    {name: '安徽',value: randomData() },
    {name: '山东',value: randomData() },  
    {name: '新疆',value: randomData() },
    {name: '江苏',value: randomData() },  
    {name: '浙江',value: randomData() },
    {name: '江西',value: randomData() },  
    {name: '湖北',value: randomData() },
    {name: '广西',value: randomData() },  
    {name: '甘肃',value: randomData() },
    {name: '山西',value: randomData() },  
    {name: '内蒙古',value: randomData() },
    {name: '陕西',value: randomData() },  
    {name: '吉林',value: randomData() },
    {name: '福建',value: randomData() },  
    {name: '贵州',value: randomData() },
    {name: '广东',value: randomData() },  
    {name: '青海',value: randomData() },
    {name: '西藏',value: randomData() },  
    {name: '四川',value: randomData() },
    {name: '宁夏',value: randomData() },  
    {name: '海南',value: 1 },
    {name: '台湾',value: randomData() },  
    {name: '香港',value: randomData() },
    {name: '澳门',value: 1 }  
];

// 攻击类型分布图数据
typeData = [
    {value:335, name:'其他'},
    {value:310, name:'sql注入'},
    {value:234, name:'漏洞扫描'},
    {value:135, name:'文件越权'},
    {value:1548, name:'暴力破解'},
    {value:256, name:'信息泄露'},
    {value:256, name:'xss跨站攻击'},
    {value:256, name:'远程溢出'},
    {value:256, name:'Web后门'},
];

// 风险指数图数据
gaugeData = [{value: 32, name: '危险指数'}];



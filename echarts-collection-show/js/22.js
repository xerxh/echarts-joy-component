var myChart22 = echarts.init(document.getElementById('line22'));


var hours = ['40', '50', '60', '70', '80', '90', '100'];
var days = ['财政税务学院','创新创业与实验教学中心','财经干部教育中心','法学院','工商管理学院（MBA教育中心）','公共管理学院','管理科学与工程学院','国际经济贸易学院','国际商务外语学院',
'国际商学院','国际教育学院、留学生办公室','高等职业技术学院','金融学院','经济学院','会计学院','马克思主义学院',
'培训与继续教育学院','萨里国际学院、旅游与酒店管理学院','数学学院','社会与行为跨学科研究中心','统计学院',
'投资工程管理学院','体育教学部','网络教育学院','新闻传播学院、人文学院'];

var data1=[];

for(var i=0;i<25;i++){

	

	data1.push([i,Math.floor(Math.random()*(6+1-0)+0),(Math.random()*(90+1-75)+75).toFixed(2)]);



}
data1 = data1.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});
option22= {
    tooltip: {
        position: 'top',
        formatter: function (params) {
            return  '学院：'+days[params.value[1]]+'<br/>'+ '人数：'+hours[params.value[0]]+'<br/>'+' 平均分： ' +params.value[2] ;
        }
    },
     title : {
        text: '成绩详细统计分析'
    },
    animation: false,
    grid: {
        left: '3%',       
        right: '8%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        },
        name:'人数'
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        },
        name:'学院'
    },
    visualMap: {
        min: 75,
        max: 100,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '1%'
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data1,
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};


myChart22.setOption(option22);
var myChart18 = echarts.init(document.getElementById('line18'));


option18 = {
  title: {
      // text: '分时统计',
      left: '49%',
      textAlign: 'center',
      top: '20%',
      // subtext: "共计防御 100 次"
  },
  tooltip: {
      trigger: 'item',
      formatter: function(params, ticket, callback) {
          return "在 " + params.name + " 至 " + params.name.substr(0, 3) +
              "59 时间段,共防御 " + params.data.value + " 次,占比 " +
              params.percent + "%";
      }
  },
  color: ['#22C3AA'],
  series: [{
      type: 'pie',
      roseType: 'area',
      itemStyle: {
          normal: {
              color: 'white',
              borderColor: '#22C3AA'
          }
      },
      labelLine: {
          normal: {
              show: false
          }
      },
      label: {
          normal: {
              show: false
          }
      },
      data: [{
          "name": "00:00",
          "value": "0"
      }, {
          "name": "01:00",
          "value": "0"
      }, {
          "name": "02:00",
          "value": "0"
      }, {
          "name": "03:00",
          "value": "0"
      }, {
          "name": "04:00",
          "value": "6"
      }, {
          "name": "05:00",
          "value": "0"
      }, {
          "name": "06:00",
          "value": "0"
      }, {
          "name": "07:00",
          "value": "0"
      }, {
          "name": "08:00",
          "value": "9"
      }, {
          "name": "09:00",
          "value": "5"
      }, {
          "name": "10:00",
          "value": "0"
      }, {
          "name": "11:00",
          "value": "25"
      }, {
          "name": "12:00",
          "value": "0"
      }, {
          "name": "13:00",
          "value": "4"
      }, {
          "name": "14:00",
          "value": "10"
      }, {
          "name": "15:00",
          "value": "0"
      }, {
          "name": "16:00",
          "value": "20"
      }, {
          "name": "17:00",
          "value": "10"
      }, {
          "name": "18:00",
          "value": "0"
      }, {
          "name": "19:00",
          "value": "0"
      }, {
          "name": "20:00",
          "value": "0"
      }, {
          "name": "21:00",
          "value": "40"
      }, {
          "name": "22:00",
          "value": "0"
      }, {
          "name": "23:00",
          "value": "0"
      }]
  }, {
      type: 'pie',
      radius: ['77%', '100%'],
      zlevel: -2,
      silent: true,
      itemStyle: {
          normal: {
              color: '#22C3AA',
              borderColor: 'white'
          }
      },
      label: {
          normal: {
              position: 'inside'
          }
      },
      data: [{
          "name": "00:00",
          "value": "1"
      }, {
          "name": "01:00",
          "value": "1"
      }, {
          "name": "02:00",
          "value": "1"
      }, {
          "name": "03:00",
          "value": "1"
      }, {
          "name": "04:00",
          "value": "1"
      }, {
          "name": "05:00",
          "value": "1"
      }, {
          "name": "06:00",
          "value": "1"
      }, {
          "name": "07:00",
          "value": "1"
      }, {
          "name": "08:00",
          "value": "1"
      }, {
          "name": "09:00",
          "value": "1"
      }, {
          "name": "10:00",
          "value": "1"
      }, {
          "name": "11:00",
          "value": "1"
      }, {
          "name": "12:00",
          "value": "1"
      }, {
          "name": "13:00",
          "value": "1"
      }, {
          "name": "14:00",
          "value": "1"
      }, {
          "name": "15:00",
          "value": "1"
      }, {
          "name": "16:00",
          "value": "1"
      }, {
          "name": "17:00",
          "value": "1"
      }, {
          "name": "18:00",
          "value": "1"
      }, {
          "name": "19:00",
          "value": "1"
      }, {
          "name": "20:00",
          "value": "1"
      }, {
          "name": "21:00",
          "value": "1"
      }, {
          "name": "22:00",
          "value": "1"
      }, {
          "name": "23:00",
          "value": "1"
      }]
  }]
};


myChart18.setOption(option18);
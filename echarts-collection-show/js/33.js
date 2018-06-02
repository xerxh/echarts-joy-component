var myChart33 = echarts.init(document.getElementById('line33'),'macarons');
// console.log(a);
option33 = {
  title: {
      text: 'Sankey Diagram'
  },
  tooltip: {
      trigger: 'item',
      formatter: "{b}"
  },
  series: [{
      right: 10,
      color: ['#d87c7c', '#919e8b', '#d7ab82', '#6e7074', '#61a0a8', '#efa18d', '#787464', '#cc7e63', '#724e58', '#4b565b'],
      type: 'sankey',
      layout: 'none',
      data: [{
          "name": "Germany",
          "value": "99",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Austria",
          "value": "90",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "United Kingdom",
          "value": "43",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Czech Republic",
          "value": "32",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Hungary",
          "value": "31",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "United States of America",
          "value": "28",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Netherlands",
          "value": "26",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Spain",
          "value": "24",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Italy",
          "value": "22",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Switzerland",
          "value": "21",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Slovakia",
          "value": "17",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Finland",
          "value": "15",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Slovenia",
          "value": "15",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "France",
          "value": "13",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Denmark",
          "value": "11",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Israel",
          "value": "10",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Sweden",
          "value": "10",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Estonia",
          "value": "10",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Poland",
          "value": "9",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Romania",
          "value": "8",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Russia",
          "value": "8",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Norway",
          "value": "8",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Greece",
          "value": "7",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Bulgaria",
          "value": "7",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Republic of Serbia",
          "value": "6",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Ireland",
          "value": "6",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Croatia",
          "value": "5",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Ukraine",
          "value": "4",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Belgium",
          "value": "3",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Portugal",
          "value": "3",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Mobility & Transportation",
          "index": 2,
          "type": "category",
          "itemStyle": {
              "normal": {
                  "color": "#9064AC"
              }
          },
          "label": {
              "normal": {
                  "position": "right"
              }
          }
      }, {
          "name": "Energy & Utilities",
          "index": 1,
          "type": "category",
          "itemStyle": {
              "normal": {
                  "color": "#3FAE6C"
              }
          },
          "label": {
              "normal": {
                  "position": "right"
              }
          }
      }, {
          "name": "Japan",
          "value": "2",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Latvia",
          "value": "2",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Brazil",
          "value": "2",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Turkey",
          "value": "2",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "South Africa",
          "value": "2",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Materials & Manufacturing",
          "index": 5,
          "type": "category",
          "itemStyle": {
              "normal": {
                  "color": "#F79D4E"
              }
          },
          "label": {
              "normal": {
                  "position": "right"
              }
          }
      }, {
          "name": "Australia",
          "value": "2",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Business & Productivity",
          "index": 4,
          "type": "category",
          "itemStyle": {
              "normal": {
                  "color": "#78CEC5"
              }
          },
          "label": {
              "normal": {
                  "position": "right"
              }
          }
      }, {
          "name": "Lifestyle & Entertainment",
          "index": 3,
          "type": "category",
          "itemStyle": {
              "normal": {
                  "color": "#EF54A2"
              }
          },
          "label": {
              "normal": {
                  "position": "right"
              }
          }
      }, {
          "name": "Lithuania",
          "value": "1",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Tunisia",
          "value": "1",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "South Korea",
          "value": "1",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "West Bank",
          "value": "1",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Morocco",
          "value": "1",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Iran",
          "value": "1",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Canada",
          "value": "1",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Hong Kong",
          "value": "1",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Colombia",
          "value": "1",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Macedonia",
          "value": "1",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Bosnia and Herzegovina",
          "value": "1",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "India",
          "value": "1",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Luxembourg",
          "value": "1",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "China",
          "value": "1",
          "type": "country",
          "itemStyle": {
              "normal": {
                  "color": "#D40404"
              }
          },
          "label": {
              "normal": {
                  "position": "left"
              }
          }
      }, {
          "name": "Financial Services",
          "index": 0,
          "type": "category",
          "itemStyle": {
              "normal": {
                  "color": "#DEE551"
              }
          },
          "label": {
              "normal": {
                  "position": "right"
              }
          }
      }],
      links: [{
          "source": "Financial Services",
          "target": "Switzerland",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Germany",
          "value": "16",
          "lineStyle": {
              "normal": {
                  "color": "#DEE551",
                  "opacity": 0.4
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Italy",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Netherlands",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Slovenia",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "United States of America",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Hungary",
          "value": "5",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "France",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Austria",
          "value": "9",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Latvia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Spain",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "United Kingdom",
          "value": "5",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Israel",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Czech Republic",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Denmark",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Finland",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Estonia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Sweden",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Financial Services",
          "target": "Slovakia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Switzerland",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "France",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Germany",
          "value": "10",
          "lineStyle": {
              "normal": {
                  "color": "#3FAE6C",
                  "opacity": 0.4
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Italy",
          "value": "6",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Finland",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Spain",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Russia",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Israel",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Czech Republic",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Sweden",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Austria",
          "value": "10",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "West Bank",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Netherlands",
          "value": "5",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Turkey",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Poland",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "United States of America",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Greece",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Energy & Utilities",
          "target": "Brazil",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Switzerland",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "United States of America",
          "value": "5",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Italy",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Finland",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Israel",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Russia",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "United Kingdom",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Austria",
          "value": "11",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Hungary",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Netherlands",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Germany",
          "value": "20",
          "lineStyle": {
              "normal": {
                  "color": "#9064AC",
                  "opacity": 0.4
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Sweden",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Estonia",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Slovakia",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Greece",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Czech Republic",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Slovenia",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Bulgaria",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Norway",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Romania",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Australia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Croatia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Lithuania",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Spain",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "France",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Denmark",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Mobility & Transportation",
          "target": "Republic of Serbia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Austria",
          "value": "44",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Austria",
          "value": "44",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Ukraine",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Germany",
          "value": "38",
          "lineStyle": {
              "normal": {
                  "color": "#EF54A2",
                  "opacity": 0.4
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Switzerland",
          "value": "12",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Canada",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Estonia",
          "value": "5",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Norway",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Russia",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "China",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "United Kingdom",
          "value": "21",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Portugal",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "United States of America",
          "value": "12",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Finland",
          "value": "6",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Spain",
          "value": "10",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Bulgaria",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Italy",
          "value": "10",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Romania",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Denmark",
          "value": "5",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "France",
          "value": "6",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Netherlands",
          "value": "8",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Hungary",
          "value": "14",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Czech Republic",
          "value": "7",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Slovenia",
          "value": "7",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Japan",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Sweden",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Morocco",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Australia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Slovakia",
          "value": "5",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Israel",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Belgium",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Latvia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Poland",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Greece",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Colombia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "South Africa",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Croatia",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Bosnia and Herzegovina",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Hong Kong",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Brazil",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Ukraine",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Germany",
          "value": "38",
          "lineStyle": {
              "normal": {
                  "color": "#EF54A2",
                  "opacity": 0.4
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Switzerland",
          "value": "12",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Canada",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Estonia",
          "value": "5",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Lifestyle & Entertainment",
          "target": "Norway",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Switzerland",
          "value": "12",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Austria",
          "value": "53",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "United Kingdom",
          "value": "30",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "France",
          "value": "7",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Germany",
          "value": "50",
          "lineStyle": {
              "normal": {
                  "color": "#78CEC5",
                  "opacity": 0.4
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Czech Republic",
          "value": "24",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Canada",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Finland",
          "value": "10",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Israel",
          "value": "6",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Estonia",
          "value": "6",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Denmark",
          "value": "7",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Netherlands",
          "value": "18",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "United States of America",
          "value": "16",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Romania",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Ukraine",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Portugal",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Norway",
          "value": "5",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Spain",
          "value": "15",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Sweden",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Italy",
          "value": "15",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Tunisia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Ireland",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Latvia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Slovakia",
          "value": "12",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Croatia",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Hungary",
          "value": "20",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Slovenia",
          "value": "8",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Japan",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Turkey",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Poland",
          "value": "7",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Morocco",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Russia",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Australia",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Bulgaria",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Belgium",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Iran",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Greece",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Colombia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "South Africa",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Macedonia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Bosnia and Herzegovina",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "India",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Republic of Serbia",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Luxembourg",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Hong Kong",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Business & Productivity",
          "target": "Brazil",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Switzerland",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Germany",
          "value": "23",
          "lineStyle": {
              "normal": {
                  "color": "#F79D4E",
                  "opacity": 0.4
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Austria",
          "value": "19",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "United Kingdom",
          "value": "9",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "France",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Czech Republic",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Spain",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Sweden",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Finland",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Italy",
          "value": "6",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Hungary",
          "value": "5",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Croatia",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Estonia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "United States of America",
          "value": "5",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Denmark",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Greece",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Slovenia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Bulgaria",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Israel",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Netherlands",
          "value": "4",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Slovakia",
          "value": "3",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Poland",
          "value": "2",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Romania",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "South Africa",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Ukraine",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }, {
          "source": "Materials & Manufacturing",
          "target": "Republic of Serbia",
          "value": "1",
          "lineStyle": {
              "normal": {
                  "color": null,
                  "opacity": 0.05
              }
          }
      }],
      itemStyle: {
          normal: {
              borderWidth: 1,
              borderColor: '#000'
          }
      },
      lineStyle: {
          normal: {
              curveness: 0.5
          }
      }
  }]
}


myChart33.setOption(option33);
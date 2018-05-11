var myChart15 = echarts.init(document.getElementById('line15'));


function getData(percent) {
  return [{
    value: percent,
    name: percent,
  }, {
    value: 1 - percent,
    label: {
      show: false
    },
    labelLine: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        color: 'transparent',
      }
    }
  }];
}
var colorL = ['#3eb4ff', '#009cff', '#0088ef', '#0074df', '#0057c8'];
var colorR = ['#0ce4ff', '#00c7ea', '#00a9d1', '#0098c2'];

var labelLine = {
  normal: {
    lineStyle: {
      color: '#cfd6d9',
      width: 2
    },
    smooth: 0.2,
    length: 50,
    length2: 50
  }
}
var label = {
  normal: {
    formatter: function(params) {
      if(params.color == "transparent")return;
      var splitParams = params.seriesName.split('-');
      return splitParams[1] + "( " + params.value+ " )" + splitParams[2];
    },
    textStyle: {
      color: '#39b0c1',
      fontSize:16
    }
  }
}
var giftImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAABgCAYAAADM3VaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAweSURBVHja7J15kBTVHcc/r3fYA3aXzcLK4YJCEEVRJBjBiIkgGFBjojEK3lHAaMQyaolRKJQcWjGJRowpLDURMUYtg2hSWOINKiLKsRTRRbkEz2V3gcWFPWbyx/vtMtM709d0z86O/a2amqNfv+5+3/d773e9N4oLVuI7FKCUvMd9NuJ+M1SSdwWGfDbkPMP0m6FsPnc41h1DlWOoCAa15Kk9Huro+JsyHVcW7+ZnT9Y2HhEb2iPhe4TcQxFwLnAWMBaoNB3fBawGXgT+BXyaSw9v5NCz5APXA9uBRcCUJGQC9AJ+CPwJ2AY8ChwWEppdOAX4H3AP0NvFeRHgUjn3WtIa/EJC/cIM4BVgcJrD9HxgoUh6SGgn4WpggY+6wMUyr+aFhGYep4lU+Y1zgN+GhGYWpcBjAUrSLJmXQ0IzhDlAvwDrV8D9XVFJ6oqE9pK5M2gcJ7ZsSGjAmAL0yNC1poeEBo+fZPBaE8WkCQkNcG47KYPXKwRGhYQGh8oMDrdtGBoSGqxClGkcEhIaHDrDLadCQoPD3k64ZkNIaHDYAkQ74ZohoQFhPzrUlUm8HxIaLF7M4LWq6GIZDZlOQTkOmAQcC5Sj00E+AVYALwHNDup4DPhVhu73cReCcSo6E+JIoA9QC+wE3gCeB3bnEqFjgbuBMRZlPkWHrRbYzJNrgNekAYNWwB50UO4s4A/AsBTHpwP1wF3AvcCBrj7kzhICxtiU6w88ACwDvmVT9pYMKEd3AnU2bXeXSN8wm7rKpOyrBBslCpzQu+VB3MQtx6NTSkotyryDzh8KCu+hk8iscK90Vjc4CXgd6NkVCb0AuMnjuceLtFrhViHeb3wFnA80WZS5BJjpsf4j0GkuXYrQIunB6eBC4HsWx5vQ+bcrfLzvz2WE2GxRphj4c5rXmURAUaOgCL0E6JtmHQq4zabMbuB04B8+3PNaUd422JS7GHepoqlwQ1ci9Fyf6jndZi4FaAR+Ltfc6uEaNTI1jAY+dlDeL8kaC1R0FUJP9NGs+o7DsovRoa5LxfZrtSlfjc5NOkIUoCaH1/ErPqoIINYahB1a6MDscAM3an6zOB4eE1NhjJDcS561Du2bXY1eBuGlvXr7+GyHdAVCW8RG7Gy3Yj3wgrz8QqvP9+h3fYE0egvwhY/17SR7EAN2+Fjfjs4gdLTYhMvRbrfn0Ku8rJSVNT7dX7MY+dmEV32qp8ni2YrEzl0uptQuKXu73ZAfsbElF4gJYjb6fwT8Gpiawrh/GjjDh4deCuzzcN5QYCQwRMynYqAA7Z/9Ch0QqJJGcutb/XeSNvGC/5I8eH4U8CzayR+PclEQrxXHxyvJNa3kK7jzgCXAmQ562eQOlSsKUGoTigFprOCOodT3MdQKByu4DQw1HkNdhKEmYnBoypXYeQmrtBsx1JsY6hkMnsJQtQ5WcOdhqCoUw9JYwR1DMQbFKtMK7n7AKpKvazWbaqcCq8wruFMNub90QCboHJ9Hge6m3w8AV8mc4xWPOPACtQ1NW9FO/cuBQ116tCYAf0NHex4SM8ZOkZnhwsxJhvuEODP+6IDMtvt+hCQ+8lSEuok3VsrQm2y4vNXjA78NXGdTZoo4Au4DBvgwBBYAVwIbpc4yi7IrgGs8dtgXgBtTmDBTXNRzDDDOCaFDgMNd3uTEFL/fBfwCZ4HrNjwrHqKvUxyvkM7yBMGEoiIi9RstngvgYeA83CWRPQicncJcOcWD1fEDJ4RWemgEq4ZdAHxXSIjZeG4uRLvwGiw07jVo53bQ6CfSNMdGQRqOXvltpVytFF3jKovO7cXJUOFEy/WSKrHH5vg60XoHS68fik7TqBM783V5aCvCJ4v2nMnMeQOYJ538mhSStQ24TEy58ej0mt6iUW+RTrHdwbVqPdzfLieEbhQJKXZR8bsOy20WiXWLSTIUd9b+BzNEP7VS9OqAZ+TlBSukbuXyHNsh9wDOk6PaTJdFATbmCGmkzt7MYrpIa1DYKaaiU2wBXnaq5c514Za6E+uAcDooAZ5MYhZ1Fm4LeP6+QRwfToToimSmUypP0ReijT1noyTNB+5weLOF6LDacDEzeoqB/Jl4bVYmmb/vSeIx6UwoUYCGmeavIlH8xqCT3SpE+dkFfChm2AYHZs4W0fCXAANTlGmQOfs1t66/NeLmm4WOMfaR36PAm8DvsY9kKOnR00QpKrQo+wGJ2XMnSy/MNlSIOTbdJFl2O6fsRIf1/moz+q0VG/N6dF7W0TKSbhM94m4sAhbK4eaNhvSYErQftN6WRqVORvEXFKMcuv6uQ6n5cW62lSg12ofNG61cf143b4yhGIGhquT33ii1HYMiB66/JpSaj+J2FA0ONm+MyGt/soNOXX9mRMW9VmVLJnQTF9ZynEfkd4mhHu+oGE32QqGDE22owXleU754itY7bJ+WVGSmkjw/UQz8R27Yjfr9lMkzdB3Zj5+ZHCoPuzx/EDpVxtedVtwQWiYPELHoeUtkUneLp00ek0ldgNAIcFHc9/dwlmQWj+5iko23mK9HohPKjpTRzzOhRWJQLxNPUB06InFAhos+pvL3W9yYnZcp3kD+KV1nH9/zTN+XeqgjH+1CNG8+uQj4Er2ccbkojXXopRdnpxoBUxF6OfCReHUmiDIUf84OEtNMzsH7nj5vk+jfnEjXwQkkLmvwmvTdU8yheJIeTVKuhwzRS8TMG25HaAHwd3n1t7iBeSb78t40GmW16ftJXYjQPJPy9m4adZ1MYibEMunsqXAi8I6q3nd2KkLzRDm53ObCa6R3tOEKCyPYCTbGfS7HY8b9y1MHELt5KLGbjuDW0eWOzjn/sO7ELhpAbGolr4zznPMcbztvdaORpvBExXNit5yxO/C0qt43ORmhc2RstsMTpu/p7rsXb2R/22slc96oaf987fE9yc+zV7JvPuZgntvsKs/rcQebzLt0MvmGmvSQxdhnRuQDC1X1vop4QgfifGlcfP7QMcnGcZeIDxuVeK3krZ2NvLBF55P16xHhkqOsqxrXt5BRvbS/f+ln+3mrxnNGiXnvpC99MIfasFs8R3boDcyOJ3S2jVuuDfvRsc02nObDPLTHD0IB5q446F69YVSZpSE861gtnTFg9rq0VsuXJnHCpINxSZRGJ7haVe/ra4ht4zSXZaN4LtowwmclI63g9arP9vP8x1pKjy7P58xByYM0I8rzOb2/7r+LP2nk/brmdC7rt3NmiKkd1js8rxtwniHuJ6eSUWMxf2QF5r65qz2kcePIsqRlbhxeigKiMZi7fne2PYIi8W9H3KzBOcXAXXiq1ma4SReN6Vaw5ssDLN6kU5JOrSxiZEVBwvGBxRGmDtIC8OS2r9lQ3+w3IXt8qCNewNwkgg8xcBc8jiYRcz/R5Eclt79dS1TE9JZRiVI68+gSIga0xGDu2vogJCzmQx1e27U0l/5ZqR1VNQd4qlpL6bmDezCwWHsSy/INZoj2u/CjBjbtbcm1R8/PSUIB7ninltYYRAzFzOO0d27aUSWUdjNoisb4zfo9OfncOUvoB7VN/PNDvXnntGEllBUYzByup/yHqhvY2tASEtrVMG9VHS3RGGUFBkvP6MvA4giNrTF+t253zj5zzvzdZGVJhPVXHk57wELeDKU/jOmjtd1uCjac0zHuMPblr9iYA1KbM4S2RGFzfbPO4YkjNM+A43sfNF3W1TYnBqnkc1M0FkpoNuHzfS2csHB7hwSvnoUG9TMGtZc7Ycmn1olg2QdX80NOz6HfROSMhB7SPY/Hf9w/YRhFKSKmLrtsch9dQMUPuYoZq+vY0tgaEpotKIwYTDjM3uk1oX/yP0oqjqhQQrMJO/Y2U37fxzIXIonOitJCg62XHfR1ly/a3n4sfg7d0xo9qFCFhHY+ojGo29/agaioiaO6A9HUSlEOCGmoFOWYUISEpo8eIaEhQkJDfMOUolTY3RRFPbA5cTlhKKGBoiiUq+wh9Gsf7iE/pMHfIfd5YJPD8p+bvjeHTRg4PsT5ioKWCDp1f0fYblmLJix2mfG6JD9EqBSFCAkN0YbSkNDcggoJDdFutqSrUqfrGGjMsTZdi97aIB3UdBah00KZ6IDZoVIUIiQ0REhoSGiIkNAQIaEhQkJDBGaH+o0a4KVOvP5eErftcYIPsqkB/z8AmtmCXRytUM0AAAAASUVORK5CYII=";

var option15 = {
  backgroundColor: '#0E2A43',
  tooltip: {
    trigger: 'item',
    formatter: function(params, ticket, callback) {
      if(params.color == "transparent")return;
      var splitParams = params.seriesName.split('-');
      return splitParams[1] + "( " + params.value+ ")" + splitParams[2];
    }
  },
  graphic: {
    elements: [{
      type: 'image',
      style: {
        image: giftImageUrl,
        width: 116,
        height: 96
      },
      left: 'center',
      top: 'center'
    }]
  },
  series: [{
      name: '余额-贫人困口-人',
      type: 'pie',
      clockWise: false, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [160, 175],
      label: label,
      labelLine: labelLine,
      itemStyle: {
        normal: {
          color: colorL[0]
        }
      },
      data: getData(0.22)
    }, {
      name: '余额-扶贫贷款-笔',
      type: 'pie',
      clockWise: false, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [140, 155],
      label: label,
      labelLine: labelLine,
      itemStyle: {
        normal: {
          color: colorL[1]
        }
      },
      data: getData(0.3),
    }, {
      name: '余额-扶贫贷款余额-万元',
      type: 'pie',
      clockWise: false, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [120, 135],
      label: label,
      labelLine: labelLine,
      itemStyle: {
        normal: {
          color: colorL[2]
        }
      },
      data: getData(0.4)
    }, {
      name: '余额-同比增长-%',
      type: 'pie',
      clockWise: false, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [100, 115],
      label: label,
      labelLine: labelLine,
      itemStyle: {
        normal: {
          color: colorL[3]
        }
      },
      data: getData(0.2)
    },

    {
      name: '发放额-发放贷款-笔',
      type: 'pie',
      clockWise: true, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [160, 175],
      label: label,
      labelLine: labelLine,
      itemStyle: {
        normal: {
          color: colorR[0]
        }
      },
      data: getData(0.28)
    }, {
      name: '发放额-发放贷款-万元',
      type: 'pie',
      clockWise: true, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [140, 155],
      label: label,
      labelLine: labelLine,
      itemStyle: {
        normal: {
          color: colorR[1]
        }
      },
      data: getData(0.3)
    }, {
      name: '发放额-同比增长-%',
      type: 'pie',
      clockWise: true, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [120, 135],
      label: label,
      labelLine: labelLine,
      itemStyle: {
        normal: {
          color: colorR[2]
        }
      },
      data: getData(0.8)
    }
  ]
};


myChart15.setOption(option15);
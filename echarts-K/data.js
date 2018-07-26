
function randomData(count){
  var array = [];
  for(var i = 0; i < count; i++){
    array[i] = Math.random()*10000+300;  
  }
  return array;
}
function time(count) {
  var array = [];
  for(var i = 0; i < count; i++){
    array.push('2017-3-'+i);
  }
  if(count < 10){
    for(var i = 0; i< 10; i++){
      array.push('')
    }
  }
  return array;
}
function kRandomData(count){
  var array = [];
  for(var i = 0; i < count; i++){
    var p = [];
    p[0] = i;
    p[1] = Math.random()*1000000+300;
    p[2] = Math.random()>0.5?1:-1;
    array.push(p);
  }
  return array;
}
function k(count){   // [// 开盘 // 收盘// 最低 // 最高]  
  var array = [];
  for(var i = 0; i < count; i++){
    var p = [];
    for(var j = 0;j<4; j++){
      p[j] = Math.random()*10000+300;
    }
    array.push(p);    
  }
  return array;
}
console.log(k(20))   // k线数据格式
console.log(kRandomData(20))

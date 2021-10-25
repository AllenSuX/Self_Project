function array_avg(a){
  var s = 0;
  for (var i=0; i < a.length; i++){
    s += a[i];
  }
  var avg = (s / a.length).toFixed(2);
  return avg;
}
function del_same_array(a){
  var line_ids_unique = [];
  for (let i=0; i < a.length ; i++){
    if(!line_ids_unique.includes(a[i])){
      line_ids_unique.push(a[i]);
    }
  }
  return line_ids_unique;
}

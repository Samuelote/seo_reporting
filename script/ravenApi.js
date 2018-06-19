

//ID = mozscape-9d10ffdf7e

//secret key = 748d306edf8bf3b207f838316b65544a



exports.ravenApi = () => {
  const accessID = 'mozscape-9d10ffdf7e';
  const secretKey = '748d306edf8bf3b207f838316b65544a';
  const expiration = Math.round(new Date().getTime()/1000.0)+500;
  encode(accessID, secretKey, expiration);
  const url = `https://lsapi.seomoz.com/linkscape/url-metrics/moz.com?Cols=4&Limit=10&AccessID=${accessID}&Signature=LmXYcPqc%2BkapNKzHzYz2BI4SXfC% 3D`
  const xhttp = new XMLHttpRequest();
  xhttp.addEventListener('load', start);
  xhttp.open("GET", "http://ravallifamilymedicine.com/");
  xhttp.send();

  function start(){

  }
}


function encode(id, key, time){
  
}

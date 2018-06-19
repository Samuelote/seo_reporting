const crypto = require('crypto');
const http = require('http');
const bigJs = require('big-js')


exports.callApi = () => {

  const id = 'mozscape-9d10ffdf7e';
  const secretKey = '748d306edf8bf3b207f838316b65544a';
  const expires = Math.floor(new Date().getTime()/1000)+300;

  const bitFlagExampleValues = ['144115188075855872', '68719476736', '34359738368'];

  const sumColumnValues = function(bitFlagValues) {
    return bitFlagValues.reduce(function (accu, bitFlag) {
      var accuValBig = new bigJs(accu);
      var bitFlagBig = new bigJs(bitFlag);
      var bigSum = accuValBig.plus(bitFlagBig);

      return bigSum.toString();
    }, 0);
  };

  const cols = sumColumnValues(bitFlagExampleValues);
  const stringToSign = `${id}\n${expires}`;

  let signature = crypto.createHmac('sha1', secretKey).update(stringToSign).digest('base64');
  signature = encodeURIComponent(signature);

  const postData = JSON.stringify(['www.beachtrans.com', "www.google.com/"]);

  const options = {
    hostname: 'lsapi.seomoz.com',
    path: '/linkscape/url-metrics/?Cols=' +
  			cols + '&AccessID=' + id +
  			'&Expires=' + expires + '&Signature=' + signature,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': postData.length
    }
  };

  let responseData = "";
  const req = http.request(options, function(response){
    response.setEncoding('utf8');
    response.on('data', function(chunk){
      responseData += chunk;
    });
    response.on('end', function(){
    	console.log(responseData, response);
    });
  });
  req.write(postData);
  req.end();
}

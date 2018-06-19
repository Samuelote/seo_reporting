const main = require('./class.js');
const moz = require('./mozApiCall.js');

// const xhttp = new XMLHttpRequest();
// xhttp.addEventListener('load', start);
// xhttp.open("GET", "http://ravallifamilymedicine.com/");
// xhttp.send();

function start(){
  // let xml = this.responseText;
  const instance = new main('http://ravallifamilymedicine.com/', 'xml');



  // const hash = CryptoJS.HmacSHA1("Message", stringToSign+secretKey);
  // const base64 = hash.toString(CryptoJS.enc.Base64);
  // const urlSafeSig = encodeURI(base64)
  // const objectURL = "www.beachtrans.com";
  // const cols = "103079215108";



  // instance.findSpeed();
  // instance.findBrokenLinks();
}
start();
moz.callApi()

// console.log()

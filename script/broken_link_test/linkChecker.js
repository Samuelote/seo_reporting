const blc  = require('broken-link-checker');
const axios = require('axios');
const url = 'http://www.beachtrans.com';

function loadingCall(site) {
    req = new XMLHttpRequest();
    req.addEventListener("load", regexLinks);
    req.open("GET", site);
    req.send('ng test -sm=false');
}

function regexLinks () {
  const re = /<a[^>]*>([^<]*)<\/a>/gi;
  const matches = this.responseText.match(re);

  console.log(matches)
}




loadingCall(url);

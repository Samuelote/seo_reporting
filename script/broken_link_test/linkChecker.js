const BrokenLinksChecker = require('bs-broken-links-checker').BrokenLinksChecker;
const brokenLinksChecker = new BrokenLinksChecker();
const axios = require('axios');
const url = 'http://beachtrans.com';

let sitePaths = [];
let linksToCheck = [];

function loadingCall(site, callback) {
    req = new XMLHttpRequest();
    req.addEventListener("load", callback);
    req.open("GET", site);
    req.send();
}

function sortLinks () {
  const re = /<a[^#>]*>([^<]*)<\/a>/gi;
  const matches = this.responseText.match(re);

  for (m in matches){
    // parses text tags to html
    const parser = new DOMParser()
    const el = parser.parseFromString(matches[m], "text/xml");
    const href = el.children[0].attributes.href.value
    const match = href.toString().toLowerCase();

    if (
      (match.includes(url) || (match[0] === '/' && !match.includes('.com')))
      && !sitePaths.includes(match)
    ){
      sitePaths.push(match);
    }

    linksToCheck.push(match)
  }
  // console.log(linksToCheck);
  if (!sortLinks.called) findRemainingLinks();
}

function findRemainingLinks() {
  sortLinks.called = true;

  for (let i = 0; i < sitePaths.length; i++){
    const parser = new DOMParser()
    path = sitePaths[i];

    if (sitePaths[i][0] === '/') path = url+sitePaths[i];
    loadingCall(path, sortLinks)
  }
  checkLinks();
}
function checkLinks(){
  for (let i = 0; i < linksToCheck.length; i++){
    path = linksToCheck[i];
    if (linksToCheck[i]){
      if (linksToCheck[i][0] === '/') path = url+linksToCheck[i];
    }
    console.log(path, )
  }
  loadingCall('http://beachtrans.com/wp-content/uploads/2016/08/legal-disclaimer.pdf', checkIfBroken)
}
function checkIfBroken(site){
    console.log(brokenLinksChecker.start(site));
}


// console.log(sitePaths.length)
// loadingCall(url, sortLinks);
checkIfBroken('http://beachtrans.com/wp-content/uploads/2016/08/legal-disclaimer.pdf')

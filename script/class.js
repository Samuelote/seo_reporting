const findSpeed = require('./speed_test/main.js');
const brokenLinks = require('./broken_link_test/linkChecker.js');
const ravenApi = require('./ravenApi.js');


module.exports = class Site {

  constructor(url, xml){
    this.url = url;
    this.xml = xml;
  }

  findSpeed(){
    findSpeed.speedTest();
  }

  findBrokenLinks(){
    brokenLinks.analyze();
  }

  gradeWebsite(){
    //https://website.grader.com/
  }

  scanHomepage(){
    //font style, keywords, 300 words
  }

  raven(){
    // https://raven-seo-tools.com/tools/m/login
    //user: catherdweb
    //pass: lFFDYR-6yqoDfNFj
    ravenApi();
  }

  localListings(){
    //https://moz.com/products/local

  }
}






//
// function loadSite(){
//   const xhttp = new XMLHttpRequest();
//   xhttp.addEventListener('load', reqListener);
//   xhttp.open("GET", "http://ravallifamilymedicine.com/");
//   xhttp.send();
// }
//
// function reqListener(){
//   const str = this.responseText;
//   const start = this.responseText.search(/<body .*>/g);
//   let body = [];
//   for (let i = start; i < str.length; i++){
//       body.push(str[i])
//       if (str[i] === '<' && str[i+1] === 's' && str[i+2] === 'c' && str[i+3] === 'r') break;
//   }
//   console.log(body.join(''))
// }
//
// loadSite();

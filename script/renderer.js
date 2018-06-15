
const { ipcRenderer } = require('electron');
const { writeFile } = require('fs');
const webview = document.querySelector('webview');
const process = require('electron').ipcRenderer;

function startSpeedTest(){
  let scriptStr = (
    `
    var input = document.querySelector('#urlinput');
    var btn = document.querySelector('.button-starttest');
    var grade = 'p';
    input.value = 'beachtrans.com';
    setTimeout(()=>btn.click(),4000);
    var content = document.querySelector('#content');
    console.log(content);
    (function tryToGrade() {
      var grade = document.querySelector('.rbc-summary-perfgrade.first div.rbc-summary-info-value');
      if (grade != null){
        grade = grade.innerText.split(' ')[1];
        console.log(grade);
        window.test = grade;
      } else {setTimeout(()=>tryToGrade(), 1000)}
    })();

    `
  );
  webview.addEventListener('dom-ready', () => {
    webview.executeJavaScript(scriptStr, ()=>{
      setTimeout(() => webview.send('speed-message'), 21000)
    });
    // webview.openDevTools()
  })
}

webview.addEventListener('ipc-message', (e)=>{
  const div = document.getElementById('speed');
  div.innerText = `Speed is ${e.channel}! \n`;
  console.log(e.channel, div);
});












// console.log(ipcRenderer.sendSync('synchronous-message', 'ping line 44 rend')) // prints "pong"

// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//   console.log(arg) // prints "pong"
// })
// ipcRenderer.send('asynchronous-message', 'ping line 49 render')

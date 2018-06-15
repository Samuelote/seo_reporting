const { ipcRenderer } = require('electron');

window.test = "Error. Please Run Again";

ipcRenderer.on('speed-message', (e) => {
  console.log(window.test, 'speed message. preload.js');
  ipcRenderer.sendToHost(window.test, 'window.test');
});

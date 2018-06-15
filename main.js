

// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, shell } = require('electron');


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// const webview = document.querySelector('webview');
// let scriptStr = (
//   "var input = document.querySelector('#urlinput');"+
//   "var btn = document.querySelector('.button-starttest');"+
//   "var grade = 'p';"+
//   "input.value = 'beachtrans.com';"+
//   "setTimeout(()=>btn.click(),4000);"+
//   "var content = document.querySelector('#content');"+
//   // "console.log(input);"+
//   "console.log(content);"+
//   "(function tryToGrade() {"+
//     "var grade = document.querySelector('.rbc-summary-perfgrade.first div.rbc-summary-info-value');"+
//     "if (grade != null){"+
//       "console.log('grade', grade.innerText.split(' ')[1]);"+
//     "} else {setTimeout(()=>tryToGrade(), 1000)}" +
//   "})();"
// );
// function init() {
//   console.log('fired init!')
//   webview.addEventListener('dom-ready', () => {
//     webview.executeJavaScript(scriptStr);
//     webview.openDevTools()
//   })
// }


function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('ping', 'whoooooooh!')
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

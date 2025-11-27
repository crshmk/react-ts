const { app, ipcMain } = require('electron')

const { callBashScript } = require('./callBashScript')
const { ping } = require('./ping')
const { uploadViaSftp } = require('./sftp')

function registerIpcEvents(window) {
  ipcMain.on('call-bash-script', callBashScript(window))
  ipcMain.on('to-main', ping(window))
  ipcMain.on('quit', app.quit)
  ipcMain.handle('upload-sftp', uploadViaSftp(window))
}

module.exports = { registerIpcEvents }
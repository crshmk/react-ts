require('dotenv').config()
const { app, BrowserWindow, Menu } = require('electron')

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'

const { createWindow } = require('./createWindow')
const { registerIpcEvents } = require('./ipcEvents/registerIpcEvents')

function setApplicationMenu() {
  const template = [
    {
      label: app.name,
      submenu: [
        {
          label: 'Quit',
          role: 'quit'
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

function launchApp() {
  const window = createWindow()
  setApplicationMenu()
  registerIpcEvents(window)
}

app.whenReady().then(launchApp)

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
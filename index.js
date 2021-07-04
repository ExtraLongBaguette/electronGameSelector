const { app, BrowserWindow, Menu, ipcMain, shell} = require("electron");

function createWindow () {
    const win = new BrowserWindow({
        width: 400,
        height: 600,
        minHeight: 600,
        minWidth: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    win.loadFile("index.html")
}

app.whenReady().then(() => {
    createWindow()
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
})

ipcMain.on('openGithub', (event, arg) => {
    shell.openExternal("https://github.com/ExtraLongBaguette");
})

const menuTemplate = [
    {
      label: "File",
      submenu: [
        {
          label: "Quit",
          accelerator: process.platform === "darwin" ? "Command+Q" : "Control+Q",
          click() {
           app.quit();
         }
       }
      ]
    }
  ];
  
if (process.platform === "darwin") {
menuTemplate.unshift({});
}
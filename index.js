const { app, BrowserWindow, Menu} = require("electron");

function createWindow () {
    const win = new BrowserWindow({
        width: 400,
        height: 600,
        minHeight: 600,
        minWidth: 400
    })
    win.loadFile("index.html")
    //win.setMenu(null);
}

app.whenReady().then(() => {
    createWindow()
})
import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { create } from 'domain';

let win: BrowserWindow;

function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600 });

  // fullscreen
  // win = new BrowserWindow({ fullscreen: true });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/../../dist/angular-electron/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  // open the chrome dev-tools
  win.webContents.openDevTools();

  // for MacOS applications
  win.on("closed", () => {
    win = null;
  });
}

app.on('ready', createWindow);

// for MacOS applications
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

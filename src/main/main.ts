import { app, BrowserWindow } from 'electron';
import installExtension, { VUEJS_DEVTOOLS }  from 'electron-devtools-installer';
import { createDashboardWindow } from './windows/dashboard';
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

let dashboardWindow: BrowserWindow;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const onAppReady = async () => {
  dashboardWindow = createDashboardWindow();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      dashboardWindow = createDashboardWindow();
    }
  })

  installExtension(VUEJS_DEVTOOLS)
    .then(() => {})
    .catch(err => {
      console.log('Unable to install `vue-devtools`: \n', err)
    });

  dashboardWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // open Dev Tools window
  dashboardWindow.webContents.openDevTools();
}

app.on('ready', onAppReady);

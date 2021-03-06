import { app, BrowserWindow, nativeImage } from 'electron'
//import iconPath from './1024x1024.png'

declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: any;

export const createDashboardWindow = () => {
  // TODO: figure out why webpack only likes this with an absolute path
  console.log(app.getAppPath() + '/src/main/1024x1024.png');
  const icon = nativeImage.createFromPath(app.getAppPath() + '/src/main/1024x1024.png');
  console.log(icon);
  console.log(icon.isEmpty());
  const window = new BrowserWindow({
    width: 1280 + 453, // 453 is dev tools width
    height: 720,
    icon: icon,
    webPreferences: {
      nodeIntegration: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    }
  })

  // OSX
  if (process.platform === 'darwin') {
    app.dock.setIcon(icon);
  }

  window.on('page-title-updated', (event) => {
    event.preventDefault();
  });
  window.setTitle('Novellia Dashboard');

  window.on('closed', () => {
    app.quit();
  });

  window.removeMenu();

  return window;
}

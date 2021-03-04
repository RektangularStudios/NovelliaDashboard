import { app, BrowserWindow, nativeImage } from 'electron'

export const createDashboardWindow = () => {
  // TODO: branch support here for all OS
  const icon = nativeImage.createFromPath(
    app.getAppPath() + "/build/assets/icons/1024x1024.png"
  );

  const window = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: icon,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // OSX
  //app.dock.setIcon(icon);

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

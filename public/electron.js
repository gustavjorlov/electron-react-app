const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { getThings } = require("../src/backend/api");

let mainWindow;

const retryLoading = (mainWindow, url) => {
  mainWindow.loadURL(url).catch((e) => {
    setTimeout(() => retryLoading(mainWindow, url), 500);
  });
};

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    minWidth: 575,
    minHeight: 145,
    darkTheme: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  retryLoading(mainWindow, "http://localhost:3000");

  mainWindow.on("closed", () => {
    mainWindow = null;
    quitApplication();
  });
  // mainWindow.webContents.openDevTools();
};

const quitApplication = () => {
  app.quit();
};

app.on("ready", () => {
  createWindow();
  ipcMain.handle("list:things", getThings);
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

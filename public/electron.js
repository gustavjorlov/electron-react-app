const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

const handleOnAppReady = () => {
  createWindow();
};

const createWindow = async () => {
  const windowOptions = {
    minWidth: 575,
    minHeight: 145,
    darkTheme: true,
    webPreferences: {
      preload: path.join(__dirname, "..", "/src/js/view/preload.js"),
    },
  };

  mainWindow = new BrowserWindow(windowOptions);

  mainWindow.loadURL(
    // isDev
    "http://localhost:3000"
    // `file://${path.join(__dirname, "../build/index.html")}`
  );

  mainWindow.on("close", () => {
    const argObj = { type: "QUIT" };
    mainWindow.webContents.send("backendMessages", argObj);
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
    quitApplication();
  });
  // mainWindow.webContents.openDevTools();
};

const quitApplication = () => {
  // if (process.platform !== 'darwin') {
  app.quit();
  // }
};

app.on("ready", handleOnAppReady);

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  listThings: (title) => ipcRenderer.invoke("list:things"),
});

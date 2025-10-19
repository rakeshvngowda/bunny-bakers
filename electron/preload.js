const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // You can expose safe APIs here
});

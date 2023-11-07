const contextBridge = require("electron").contextBridge;
const ipcRenderer = require("electron").ipcRenderer;
// window.ipcRenderer = require('electron').ipcRenderer;

const ipc = {
  render: {
    // 렌더에서 메인
    send: ["send", "setting:save"],
    // 메인에서 렌더
    receive: ["receive", "news:load", "news:update", "timezone:update"],
    // 렌더에서 메인 후 다시 렌더
    sendReceive: ["sendReceive", "news", "setting:change"],
  },
};

contextBridge.exposeInMainWorld(
  "ipcRender",
  {
    // 렌더에서 메인
    send: (channel, args) => {
      let validChannels = ipc.render.send;
      if (validChannels.includes(channel)) {
        ipcRenderer.send(channel, args);
        console.log("Send Accept")
      }
    },
    // 메인에서 렌더
    receive: (channel, listener) => {
      let validChannels = ipc.render.receive;
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`.
        ipcRenderer.on(channel, (event, ...args) => listener(...args));
      }
    },
    // 렌더에서 메인 후 다시 렌더
    invoke: (channel, args) => {
      let validChannels = ipc.render.sendReceive;
      if (validChannels.includes(channel)) {
        console.log("Invoke Accept");
        return ipcRenderer.invoke(channel, args);
      }
    },
  }
);


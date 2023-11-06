const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,

    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  console.log(process.env.mode);
  if (process.env.mode === "dev") {
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
  } else {
    win.loadFile(`${path.join(__dirname, "../build/index.html")}`);
  }
};

app.whenReady().then(() => {
  ipcMain.on("send", () => {
    console.log("send Complete");
  });

  ipcMain.handle("sendReceive", () => {
    console.log("invoke Accept");
    return 1;
  });

  ipcMain.handle("news", () => {
    console.log("invoke Accept");
    return CalNews();
  });

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

let Parser = require("rss-parser");
let parser = new Parser();

(async () => {
  let feed = await parser.parseURL("url");
  window.webContents.send("news:load", feed);
  console.log(feed.title);
})();

function newsUpdate() {
  let now = new Date();
  let time = 1000 * 60 * 60;
  let start = time - (now.getMinutes() * 60 + now.getSeconds()) * 1000 + now.getMilliseconds();
  setInterval(function reload() {
    setTimeout(reload, time);
  }, start);
}

async function CalNews() {
  try {
    let feed = await parser.parseURL(
      "https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ?hl=ko&gl=KR&ceid=KR:ko"
    );
    console.log(feed);
    return feed
    // window.webContents.send("news:load", feed);
  } catch (e) {
    console.error(e);
  }
}

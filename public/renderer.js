window.ipcRender.receive("receive", (data) => {
  console.log("receive Complete");
});

window.ipcRender.receive("news:update", (data) => {
  title.innerText = data.title;
  description.innerText = data.description;
  document.getElementById("qrcode").src = data.qrcode;
  document.getElementById("rsslogo").src = "" + data.rssname + ".jpg";
});

window.ipcRender.receive("news:load", () => {
  title.innerText = "검색 중입니다.";
  description.innerText = "";
  document.getElementById("qrcode").src = "";
  document.getElementById("rsslogo").src = "";
});

window.ipcRender.receive("timezone:update", (data) => {
  window.clockInterval;
  if (window.clockInterval) clearInterval(window.clockInterval);
  setTimezone(data);
  clockInterval = setInterval(() => updateClock(currentTime.utc), 100);
});

import { useState } from "react";
import QRCode from "react-qr-code";

export default function App() {
  return (
    <>
      <LoadNews />
      <h1>Hello, world!</h1>
      <div>
        <h2 id="title"></h2>
        <h3 id="description"></h3>
        <div id="qrcode" />
      </div>
      <CategoryBtn />
      <Send />
      <Invoke />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>You clicked me {count} times</button>;
}

function Send() {
  return <button onClick={() => window.ipcRender.send("send")}>Send</button>;
}

function Invoke() {
  return (
    <button
      onClick={() =>
        window.ipcRender.invoke("sendReceive").then((data) => {
          console.log(data);
        })
      }
    >
      Invoke
    </button>
  );
}

function LoadNews(arg) {
  window.ipcRender.invoke("news", arg).then((data) => {
    console.log(data);
    document.getElementById("title").innerText = data.articles[1].title;
    document.getElementById("description").innerText = data.articles[1].description;
  });
}

function GenerateQR(url) {
  return <QRCode value={url}></QRCode>;
}

function CategoryBtn() {
  const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  console.log(categories);
  return (
    <div>
      <button onClick={() => LoadNews(categories[0])}>Business</button>
      <button onClick={() => LoadNews(categories[1])}>entertainment</button>
      <button onClick={() => LoadNews(categories[2])}>general</button>
      <button onClick={() => LoadNews(categories[3])}>health</button>
      <button onClick={() => LoadNews(categories[4])}>science</button>
    </div>
  );
}

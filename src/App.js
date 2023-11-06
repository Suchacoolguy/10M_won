import { useState } from "react";
import { saveSetting, readSetting } from "./saveHandler.js";

import * as rssParser from "react-native-rss-parser";

export default function App() {
  return (
    <>
      <h1>Hello, world!</h1>
      <Send />
      <Invoke />
      <Receive />
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
  return <button onClick={() => window.ipcRender.invoke("sendReceive").then((data) => {
    console.log(data)
  })}>Invoke</button>;
}

function Receive() {
  return <button onClick={() => window.ipcRender.receive("news:load", (data) => {
      data.items.forEach((item) => {
    console.log(item.title + ":" + item.link);
  });
  })}></button>
}

// function Google() {
//   const feed = await Parser.parseURL(url);

//   feed.items.array.forEach(element => {
//     console.log(element.title);
//   });
// }
const url = "https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ?hl=ko&gl=KR&ceid=KR:ko";


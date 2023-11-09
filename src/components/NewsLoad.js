import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const News = () => {
  const [news, setNews] = useState("");
  const category = "general";
  let num;

  useEffect(() => {
    const newsResult = async () => {
      await window.ipcRender.invoke("news", category).then((data) => {
        setNews(data.articles);
        console.log(news);
      });
    };

    newsResult().catch(console.error);
  }, []);

  if (!news) return <NewsCard headline="Now Loading" snippet="Please Wait" newsLink="https://www.kumoh.ac.kr/ko/index.do"></NewsCard>;

  else {
    num = findLongNews(news);
    console.log(news[num])
    return <NewsCard headline={news[num].title} snippet={news[num].description} newsLink={news[num].url}></NewsCard>;
  }
};

export default News;

function findLongNews(news) {
    let len = Object.keys(news).length;
    let desLen;
    for(let i = 0; i < len; i++) {
        if(news[i].description != null)
            desLen = (news[i].description).length
        if(desLen > 150 && desLen < 250) {
            return i
        }
    }
}

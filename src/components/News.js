import React, { useState, useEffect } from "react";
import NewsItem from "../components/NewsItem";
import { Haberler } from "../data/HaberData";

const News = (props) => {
  const [news, setNews] = useState([]);

  useEffect(function () {
    //call api
    let response = Haberler;
    setNews(response);
  }, []);

  return (
    <div className="section section-news">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Haberler</h2>
          </div>
        </div>
        <div className="row">
          {news.map((item) => (
            <NewsItem
              id={item.id}
              title={item.title}
              desc={item.details}
              key={"haberler_" + item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

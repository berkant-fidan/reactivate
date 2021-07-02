import React from "react";
import { Link } from "react-router-dom";
import TruncateMarkup from "react-truncate-markup";

export default function NewsItem({ title, desc, id }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="news-item">
        <h3 className="news-title">{title}</h3>

        <TruncateMarkup lines={4}>
          <div>{desc}</div>
        </TruncateMarkup>

        <Link to={`/detail/${id}`}>Devamı için tıklayınız</Link>
      </div>
    </div>
  );
}

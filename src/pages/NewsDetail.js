import React, { useState, useEffect } from "react";
import { Haberler } from "../data/HaberData";

export default function NewsDetail(props) {
  const [data, setData] = useState({});

  useEffect(function () {
    //call api with ID parameter
    let response = Haberler[props.match.params.id];
    debugger;
    setData(response);
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h2>{data.id}</h2>
          <h3>{data.title}</h3>

          <p>{data.details}</p>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Slider from "../components/Slider";
import News from "../components/News";

const Homepage = () => {
  const [image, setImage] = useState(
    "https://via.placeholder.com/1365x260&text=Bannerx"
  );

  useEffect(function () {
    //call api
    let response = "https://via.placeholder.com/1365x260&text=Bannerxyz";
    setImage(response);
  }, []);

  return (
    <div>
      <Slider sliderImg={image} />

      <News />
    </div>
  );
};

export default Homepage;

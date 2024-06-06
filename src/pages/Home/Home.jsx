import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Caroussel from "../../components/Caroussel/Caroussel";

const Home = () => {
  const [category, setCategory] = useState("All");
  const images = [
    "src/components/Caroussel/img1.jpg",
    "src/components/Caroussel/img2.jpg",
    "src/components/Caroussel/img3.jpg",
  ];
  const videos = ["video1.mp4"];
  return (
    <div>
      <Header />
      <Caroussel images={images} videos={videos} />
      <ExploreMenu category={category} setCategory={setCategory} />

      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;

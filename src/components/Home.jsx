import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import mountains from "../images/mountains.jpg";
import "./Home.css";

const Home = () => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        className="Image"
        layers={[
          {
            image: mountains,
            amount: 0.5
          }
        ]}
        style={{
          height: "900px"
        }}
      >
        <h1>Banner Children</h1>
      </ParallaxBanner>
    </ParallaxProvider>
  );
};

export default Home;

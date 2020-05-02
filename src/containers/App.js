import React, { Component } from "react";
import ImageSplit from "../components/ImageSplit/ImageSplit";
import Carousel3D from "../components/Carousel3D/Carousel3D";
import Test from "../components/Test/Test";

class App extends Component {
  render() {
    return (
      <div
        style={{
          width: "75%",
          height: "75%",
          display: "grid",
          placeItems: "center",
          margin: "0 auto",
        }}
      >
        <Carousel3D />
      </div>
    );
  }
}

export default App;

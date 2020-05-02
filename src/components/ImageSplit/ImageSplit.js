import React, { Component } from "react";
import "./ImageSplit.css";

class ImageSplit extends Component {
  state = {
    elements: [],
  };

  componentDidMount() {
    this.initOrbit();
  }

  initOrbit = (selector) => {
    const elements = document.querySelectorAll(selector || "[data-orbit]");

    this.setState({ elements }, () => this.setupIntervals());
  };

  setupIntervals = () => {
    this.state.elements.forEach((el) => {
      this.update(el);
      this.interval = setInterval(() => {
        this.update(el);
      }, 5000);
    });
  };

  update = (element) => {
    let min = -1;
    let max = 1;

    // Get our rotate values
    let rotate = [
      Math.floor(Math.random() * (max - min + 1)) +
        min +
        "." +
        (Math.floor(Math.random() * 9) + 1),
      Math.floor(Math.random() * (max - min + 1)) +
        min +
        "." +
        (Math.floor(Math.random() * 9) + 1),
    ];

    // Set the transform
    element.style.webkitTransform =
      "rotate3d(" + rotate[0] + ", " + rotate[1] + ", 0, 1deg)";
    element.style.MozTransform =
      "rotate3d(" + rotate[0] + ", " + rotate[1] + ", 0, 1deg)";
    element.style.msTransform =
      "rotate3d(" + rotate[0] + ", " + rotate[1] + ", 0, 1deg)";
    element.style.OTransform =
      "rotate3d(" + rotate[0] + ", " + rotate[1] + ", 0, 1deg)";
    element.style.transform =
      "rotate3d(" + rotate[0] + ", " + rotate[1] + ", 0, 1deg)";
  };

  render() {
    return (
      <div style={{marginTop: '300px'}}>
        <div className="col">
          <div className="block--split-image block--split-image-1">
            <div className="block__content">
              <h2>
                Project 1
                <br />
                <small>(hover me)</small>
              </h2>
            </div>
            <div className="block__image" data-orbit>
              <div className="part part-1"></div>
              <div className="part part-2"></div>
              <div className="part part-3"></div>
              <div className="part part-4"></div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="block--split-image block--split-image-2">
            <div className="block__content">
              <h2>
                Project 2
                <br />
                <small>(hover me)</small>
              </h2>
            </div>
            <div className="block__image" data-orbit>
              <div className="part part-1"></div>
              <div className="part part-2"></div>
              <div className="part part-3"></div>
              <div className="part part-4"></div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="block--split-image block--split-image-3">
            <div className="block__content">
              <h2>
                Project 3
                <br />
                <small>(hover me)</small>
              </h2>
            </div>
            <div className="block__image" data-orbit>
              <div className="part part-1"></div>
              <div className="part part-2"></div>
              <div className="part part-3"></div>
              <div className="part part-4"></div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="block--split-image block--split-image-4">
            <div className="block__content">
              <h2>
                Project 4
                <br />
                <small>(hover me)</small>
              </h2>
            </div>
            <div className="block__image" data-orbit>
              <div className="part part-1"></div>
              <div className="part part-2"></div>
              <div className="part part-3"></div>
              <div className="part part-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSplit;

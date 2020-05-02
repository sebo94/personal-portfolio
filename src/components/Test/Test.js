import React, { Component } from "react";
import "./Test.css";

class Test extends Component {
  state = {
    scaleX: 1,
    position: "initial",
    top: "0",
    left: "0",
    width: "150%",
    height: "150%",
    cls: "example-enter",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    setTimeout(
      () =>
        this.setState({
          scaleX: 0.3,
          position: "absolute",
          top: "25px",
          left: "25px",
          height: "90%",
        }),
      500
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  handleScroll = (e) => {
    console.log(e);
    e.preventDefault();
    this.setState({ scaleX: 0.64, cls: "example-enter2" });
  };

  render() {
    return (
      <div>
        <div
          onScroll={this.handleScroll}
          className={this.state.cls}
          style={{
            transform: "scaleX(" + this.state.scaleX + ")",
            position: this.state.position,
            left: this.state.left,
            top: this.state.top,
            height: this.state.height,
            width: this.state.width,
            backgroundColor: "pink",
          }}
        ></div> 
      </div>
    );
  }
}

export default Test;

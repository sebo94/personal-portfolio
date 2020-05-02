import React, { Component } from "react";
import "./Carousel3D.css";

const applyTransform = (obj, tY, tX) => {
  // Constrain the angle of camera (between 0 and 180)
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
};

const playSpin = (yes, ospin) => {
  ospin.style.animationPlayState = yes ? "running" : "paused";
};

const init = (delayTime, aEle, radius) => {
  for (let i = 0; i < aEle.length; i++) {
    aEle[i].style.transform =
      "rotateY(" +
      i * (360 / aEle.length) +
      "deg) translateZ(" +
      radius +
      "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
};

class Carousel3D extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    // THIS NEED TO BE REFACTORED BIG TIME
    // RIGHT NOW WE ARE SHOWING THE INITIAL ANIMATION ON SCROLL ONLY
    // THE GOAL SHOULD BE MAKING IT HAPPEN AS SOON AS IT GETS RENDER
    // THE ISSUE WE FACED HAS TO DO WITH ACCESSING THE DOM
    // DEFINETLY GONNA FIND A WAY TO FIX THIS
    // You can change global letiables here:
    let radius = 240; // how big of the radius
    let autoRotate = true; // auto rotate or not
    let rotateSpeed = -60; // unit: seconds/360 degrees
    let imgWidth = 120; // width of images (unit: px)
    let imgHeight = 170; // height of images (unit: px)

    // ===================== start =======================
    // animation start after 1000 miliseconds

    let odrag = document.getElementById("drag-container");
    let ospin = document.getElementById("spin-container");
    let aImg = ospin.getElementsByTagName("img");
    let aEle = [...aImg]; // combine 2 arrays

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    // Size of ground - depend on radius
    let ground = document.getElementById("ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    let sX,
      sY,
      nX,
      nY,
      desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;

    if (autoRotate) {
      let animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      ospin.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
      )}s infinite linear`;
    }

    // setup events
    document.onpointerdown = (e) => {
      clearInterval(odrag.timer);
      e = e || window.event;
      let sX = e.clientX,
        sY = e.clientY;

      document.onpointermove = (e) => {
        e = e || window.event;
        let nX = e.clientX,
          nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(odrag, tY, tX);
        sX = nX;
        sY = nY;
      };

      document.onpointerup = (e) => {
        odrag.timer = setInterval(() => {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTransform(odrag, tY, tX);
          playSpin(false, ospin);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true, ospin);
          }
        }, 17);
        document.onpointermove = document.onpointerup = null;
      };

      return false;
    };

    document.onmousewheel = (e) => {
      e = e || window.event;
      let d = e.wheelDelta / 20 || -e.detail;
      radius += d;
      init(1, aEle, radius);
    };
    init(1, aEle, radius);

  }

  componentWillUnmount() {
    // Remove event listeners
  }

  render() {
    return (
      <div id="drag-container">
        <div id="spin-container">
          <img
            src="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />

          <a
            target="_blank"
            href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg"
          >
            <img
              src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </a>

          <p>OBEY</p>
        </div>
        <div id="ground"></div>

      </div>
    );
  }
}

export default Carousel3D;

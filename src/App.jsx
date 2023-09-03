import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState(-1 * (360 + 200));
  const [firstuse, setFirstuse] = useState(true);

  useEffect(() => {
    if (firstuse) {
      animate();
      setFirstuse(false);
    }
    encodedSlides();
  }, []);
  useEffect(() => {
    if (position > 0.5) setPosition(-1 * (360 + 200));
    shiftScroller(position);
  }, [position]);

  function animate() {
    const increase = 0.25;

    setPosition((currentPosition) => currentPosition + increase);
    requestAnimationFrame(animate);
  }

  function shiftScroller(position) {
    const scroller = document.querySelectorAll(".slider__scroller");
    scroller.forEach((scrol, item) => {
      scrol.style.transform = `translateX(${position}px)`;
    });
  }

  function encodedSlides() {
    const encodedslides = document.querySelectorAll(".enc");

    encodedslides.forEach((slide) => {
      let string = makeid(400);
      slide.innerHTML = string;
    });
  }

  function makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      if (Math.random() > 0.95) {
        result +=
          "<strong>" +
          characters.charAt(Math.floor(Math.random() * charactersLength)) +
          "</strong>";
      } else {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      result += " ";
      counter += 1;
    }
    return result;
  }

  return (
    <>
      <div className="slider__parent visible-p">
        <div className="slider">
          <div className="slider__scroller">
            <div className="slide">
              <img src="/card.png" alt="" />
            </div>
            <div className="slide">
              <img src="/card.png" alt="" />
            </div>
            <div className="slide">
              <img src="/card.png" alt="" />
            </div>
            <div className="slide">
              <img src="/card.png" alt="" />
            </div>
            <div className="slide">
              <img src="/card.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="slider__parent encrypted-p">
        <div className="slider">
          <div className="slider__scroller">
            <div className="slide enc">a a a a a a a a a a a a a</div>
            <div className="slide enc">a a a a a a a a a a a a a</div>
            <div className="slide enc">a a a a a a a a a a a a a</div>
            <div className="slide enc">a a a a a a a a a a a a a</div>
            <div className="slide enc">a a a a a a a a a a a a a</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

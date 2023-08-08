import { useState } from "react";
import "./Value.css";

export default function Value() {
    const [active, setActive] = useState({first : true, second : false, third : false});

    function toggleText(key) {
        active.key ? "" : setActive((prev) => {
            const newActive = {...prev}
            for (let keys in newActive) {
                if (newActive[keys] === true && keys !== key) {
                    newActive[keys] = false;
                }
                else if (keys === key) {
                    newActive[keys] = true;
                }
            }
            return newActive;
        })
    }

  return (
    <>
      <div className="value-wrapper" id="value">
        <div className="value-container innerWidth">
          {/* Left side */}
          <div className="left">
            <img src="./value.png" alt="house" />
          </div>
          {/* Right side */}
          <div className="right">
            <div className="orangeText">Our Value</div>
            <div className="primaryText">Value We Give To You</div>
            <div className="secondaryText">
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </div>
            
            <div className="textContainer">
              <div className="textController" onClick={() => toggleText("first")}>
                Best interest rates on the market
              </div>
              <div className={`secondaryText ${active.first ? "text-active" : "text-noactive"}`}>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </div>
            </div>
            <div className="textContainer">
              <div className="textController" onClick={() => toggleText("second")}>
                Prevent unstable prices
            </div>
              <div className={`secondaryText ${active.second ? "text-active" : "text-noactive"}`}>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </div>
            </div>
            <div className="textContainer">
              <div className="textController" onClick={() => toggleText("third")}>
                Best price on the market
                </div>
              <div className={`secondaryText ${active.third ? "text-active" : "text-noactive"}`}>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

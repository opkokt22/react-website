import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";

export default function Hero() {
    return (
        <>
            <div className="hero-wrapper">
                <div className="hero-container innerWidth">
                    {/* Left side */}
                    <div className="left">
                        <h1>
                            Discover<br/>Most Suitable<br/>Property
                            <div className="orangeCircle"></div>
                        </h1>
                        <div className="secondaryText">Find a variety of properties that suit you very easilty
                            Forget all difficulties in finding a residence for you
                        </div>
                        <div className="geoTextBox">
                            <HiLocationMarker color="var(--blue)" size={25}/>
                            <input type="text" />
                            <button className="btn">Serach</button>
                        </div>
                        <div className="data">
                            <div>
                                <div className="primary">9000 <span>+</span></div>
                                <div className="secondaryText">Premium Product</div>
                            </div>
                            <div>
                                <div className="primary">2000 <span>+</span></div>
                                <div className="secondaryText">Happy Customer</div>
                            </div>
                            <div>
                                <div className="primary">28 <span>+</span></div>
                                <div className="secondaryText">Awards Winning</div>
                            </div>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="right">
                        <img src="./hero-image.png" alt="building" />
                    </div>
                </div>
            </div>
        </>
    )
}
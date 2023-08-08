import { useState } from "react"
import "./Header.css"
import {BiMenuAltRight} from "react-icons/bi"
import OutsideClickHandler from "react-outside-click-handler";

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <>
            <div className="header-wrapper">
                <div className="header-container innerWidth">
                    <a href="#">
                        <img src="./logo.png" alt="Company Logo" />
                    </a>
                    {/* responsive menu */}
                    <OutsideClickHandler onOutsideClick={() => setMenuActive(false)}>
                        <button className="menubtn" onClick={() => setMenuActive((prev) => !prev)}>
                            <BiMenuAltRight size={50}/>
                        </button>
                    </OutsideClickHandler>

                    <ul style={{right: menuActive && "2rem"}}>
                        <li><a href="#carousel">Residencies</a></li>
                        <li><a href="#value">Our Value</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#subscribe">Get Started</a></li>
                        <li>
                            <a href="mailto: opkokt22@gmail.com?subject=Offer&body=You got the offer">
                                <button className="btn">Contact</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
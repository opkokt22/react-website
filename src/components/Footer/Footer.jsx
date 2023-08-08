import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-container innerWidth">
          <div className="left">
            <img src="./logo2.png" alt="Homyz" />
            <div className="secondaryText">
              Our vision is to make all people the best place to live for them.
            </div>
          </div>
          <div className="right">
            <div className="primaryText">Information</div>
            <div className="secondaryText">145 New York, FL 5467, USA</div>
            <ul>
                <li><a href="#">Property</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

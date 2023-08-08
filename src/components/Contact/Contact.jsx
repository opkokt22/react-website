import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-wrapper" id="contact">
        <div className="contact-container innerWidth">
            {/* Left side */}
          <div className="left">
            <div className="orangeText">Contact Us</div>
            <div className="primaryText">Easy to contact us</div>
            <div className="secondaryText">
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </div>
            <div className="contact">
                <div className="contactBox">
                    <div>Call</div>
                    <div className="secondaryText">021 123 145 14</div>
                    <a href="tel:+02112314514">
                        <button>Call Now</button>
                    </a>
                </div>
                <div className="contactBox">
                    <div>Chat</div>
                    <div className="secondaryText">021 123 145 14</div>
                    <a href="https://api.whatsapp.com/send?phone=02112314514&text=Hi" target="_blank">
                        <button>Chat Now</button>
                    </a>
                </div>
                <div className="contactBox">
                    <div>Video Call</div>
                    <div className="secondaryText">021 123 145 14</div>
                    <a href="facetime:+02112314514">
                        <button>Video Call Now</button>
                    </a>
                </div>
                <div className="contactBox">
                    <div>Message</div>
                    <div className="secondaryText">021 123 145 14</div>
                    <a href="sms:+02112314514">
                        <button>Message now</button>
                    </a>
                </div>
            </div>
          </div>
          {/* Right side */}
          <div className="right">
            <img src="./contact.jpg" alt="house" />
          </div>
        </div>
      </div>
    </>
  );
}

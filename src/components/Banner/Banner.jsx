import "./Banner.css";

export default function Banner() {
  return (
    <>
      <div className="banner-wrapper">
        <div className="banner-container innerWidth">
          <img src="./prologis.png" alt="Prologis" />
          <img src="./tower.png" alt="American Tower" />
          <img src="./equinix.png" alt="Equinix" />
          <img src="./realty.png" alt="Digital Realty" />
        </div>
      </div>
    </>
  );
}

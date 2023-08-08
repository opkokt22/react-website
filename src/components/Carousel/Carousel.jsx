import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Carousel.css";
import slide from "../../assets/slider.json";

export default function Carousel() {
  // Responsive setting for carousel slides
  const carouselSetting = {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      750: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <>
      <div className="carousel-wrapper" id="carousel">
        <div className="carousel-container innerWidth">
          <div className="orangeText">Best Choices</div>
          <div className="primaryText">Popular Residencies</div>
          <Swiper {...carouselSetting}>
            <SwiperController />
            {slide.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="carousel-slide">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <span className="orangeText">$</span>
                      {item.price}
                    </div>
                    <div className="primaryText">{item.name}</div>
                    <div>{item.detail}</div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

// button component that control slides (because useSwiper should inside Swiper tag)
function SwiperController() {
  const swiper = useSwiper();
  return (
    <div className="slideController">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
}

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceCards = ({ ServiceCardsData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: true,
    beforeChange: (_, nextIndex) => setCurrentSlide(nextIndex),

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          padding: "0",
          zIndex: 30,
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: "flex", gap: "2px" }}>
          {dots}
        </ul>
      </div>
    ),

    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full border-blue-500 border-2 ${
          currentSlide === i ? "bg-blue-500" : ""
        } transition duration-300`}
      />
    ),

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {ServiceCardsData.map((service) => {
        return (
          <div key={service.id} className="px-3 mt-10">
            <div className="border border-white overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  className="w-full h-[392px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
                />
              </div>
              <div className="space-y-5 ml-2 mt-5 pb-5 block">
                <h1 className="text-white font-bold text-4xl">
                  {service.name}
                </h1>
                <p className="text-white font-light text-md">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default ServiceCards;

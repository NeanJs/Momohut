"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BodyWrapper, ContentWrapper } from "./ui/Wrapper";

const slides = [
  {
    id: 1,
    title: "Delicious Nepalese & Indian Cuisine",
    subtitle: "Authentic flavors cooked with passion",
    image:
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Fresh & Organic Ingredients",
    subtitle: "We use only the best quality ingredients",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Order Online & Enjoy Your Meal",
    subtitle: "Fast & convenient delivery service",
    image:
      "https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <BodyWrapper className="relative w-screen h-screen md:h-[800px] overflow-hidden">
      <img
        src={"https://momohut.ca/wp-content/uploads/2022/11/feature_bg_1.png"}
        alt=""
        className="w-screen h-full object-cover scale-125 absolute -z-10 top-0 left-0"
      />
      <ContentWrapper className="h-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="h-full flex items-center justify-center md:justify-between relative overflow-hidden flex-col md:flex-row">
                <div className="flex flex-col h-full md:w-2/4  items-start justify-center text-momo_gray px-6 leading-loose">
                  <span className="text-momo_red text-2xl mb-4 font-medium tracking-wide">
                    Special Menu Offers
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mt-2">{slide.subtitle}</p>
                  <button className="mt-4 bg-momo_red hover:bg-red-700 px-6 py-2 text-white rounded-lg">
                    Order Now
                  </button>
                </div>
                <img src="bowl.png" alt="" className="w-[500px]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContentWrapper>
    </BodyWrapper>
  );
}

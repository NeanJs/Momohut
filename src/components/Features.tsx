"use client";
import React, { useEffect } from "react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLeaf, FaCheck, FaRegStar, FaTachometerAlt } from "react-icons/fa";
import { BodyWrapper, ContentWrapper, FlexibleWrapper } from "./ui/Wrapper";

const features = [
  {
    id: 1,
    icon: <FaLeaf className="text-4xl text-green-600 mb-4" />,
    title: "Organic Products",
    description: "Fresh ingredients sourced locally",
    animation: "fade-up",
  },
  {
    id: 2,
    icon: <FaCheck className="text-4xl text-blue-600 mb-4" />,
    title: "Food Law Certified",
    description: "Certified to meet health standards",
    animation: "fade-up",
  },
  {
    id: 3,
    icon: <FaRegStar className="text-4xl text-yellow-500 mb-4" />,
    title: "5-Star Rating",
    description: "Customer satisfaction is our priority",
    animation: "fade-up",
  },
  {
    id: 4,
    icon: <FaTachometerAlt className="text-4xl text-momo_red mb-4" />,
    title: "Fast Delivery",
    description: "Hot and fresh, delivered quickly",
    animation: "fade-up",
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({
      // duration: 1000,
      once: true,
    });
  }, []);
  return (
    <BodyWrapper className="bg-white min-h-[400px] flex flex-col justify-center">
      <ContentWrapper>
        <div className="container mx-auto text-center flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Why We Are The Best
          </h2>
          <FlexibleWrapper className="min-h-fit gap-8 justify-between md:w-full features">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center border border-momo_gray p-6 rounded-lg w-72 h-40"
                data-aos="fade-up"
                data-aos-delay={feature.id * 200}
              >
                {feature.icon}
                <h3 className="text-lg font-medium text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </FlexibleWrapper>
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default Features;

import React from "react";
import { BodyWrapper, ContentWrapper } from "./ui/Wrapper";
import Link from "next/link";

const About = () => {
  return (
    <BodyWrapper className="bg-white py-20">
      <ContentWrapper className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 h-full">
            <img
              src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="w-full h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 items-start text-left md:pl-10">
            <h3 className="text-momo_red font-semibold leading-3">About Us</h3>
            <h1 className="font-extrabold text-5xl text-black">
              Journey of Momohut
            </h1>
            <p className="text-lg text-momo_gray leading-8">
              The legacy continues with the grand re-opening of BC’s first-ever
              Nepalese restaurant, Café Kathmandu, serving customers since 2006.
              Now, after a decade of operation, the establishment is rebranding
              itself as ‘Momo Hut,’ and remains committed to serving the finest
              Nepalese cuisine available for both dine-in and takeout. Momo Hut
              proudly welcomes everyone to experience the best of Nepalese
              cuisine at its Fraser Street location in Vancouver.
            </p>
            <Link
              href={"/about"}
              className="bg-momo_red text-white px-8 py-3 rounded-lg hover:bg-red-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default About;

import React from "react";
import { FaLeaf, FaCheck, FaRegStar, FaTachometerAlt } from "react-icons/fa";
import { BodyWrapper, ContentWrapper, FlexibleWrapper } from "./ui/Wrapper";

const Features = () => {
  return (
    <BodyWrapper className="bg-white min-h-[400px] flex flex-col justify-center">
      <ContentWrapper>
        <div className="container mx-auto text-center flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Why We Are The Best
          </h2>
          <FlexibleWrapper className="min-h-fit gap-8 justify-between">
            <div className="flex flex-col items-center">
              <FaLeaf className="text-4xl text-green-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-800">
                Organic Products
              </h3>
              <p className="text-gray-600">Fresh ingredients sourced locally</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCheck className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-800">
                Food Law Certified
              </h3>
              <p className="text-gray-600">
                Certified to meet health standards
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaRegStar className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-lg font-medium text-gray-800">
                5-Star Rating
              </h3>
              <p className="text-gray-600">
                Customer satisfaction is our priority
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaTachometerAlt className="text-4xl text-momo_red mb-4" />
              <h3 className="text-lg font-medium text-gray-800">
                Fast Delivery
              </h3>
              <p className="text-gray-600">Hot and fresh, delivered quickly</p>
            </div>
          </FlexibleWrapper>
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default Features;

import React from "react";
import { BodyWrapper, ContentWrapper, FlexibleWrapper } from "./ui/Wrapper";

interface MenuItem {
  image: any;
  price: String;
  name: String;
  orderlink: String;
}
const SpecialsMenu = () => {
  const MenuItem = ({ image, price, name, orderlink }: MenuItem) => {
    return (
      <div className="bg-white rounded-lg shadow-lg w-96 pb-4">
        <img
          src={image}
          alt="Margarita Pizza"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600">${price}</p>
          <button className="mt-4 bg-momo_red text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  return (
    <BodyWrapper className="bg-gray-50 py-20">
      <ContentWrapper>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Our Specials Menu
          </h2>
          <FlexibleWrapper className="w-full flex justify-between md:grid-cols-3 gap-8 min-h-fit">
            <MenuItem
              image="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              price="12.99"
              name="Momo"
              orderlink={""}
            />
            <MenuItem
              image="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              price="12.99"
              name="Momo"
              orderlink={""}
            />{" "}
            <MenuItem
              image="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              price="12.99"
              name="Momo"
              orderlink={""}
            />
            {/* Add other menu items similarly */}
          </FlexibleWrapper>
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default SpecialsMenu;

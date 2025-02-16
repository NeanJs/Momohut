// app/page.tsx (Home Page)

import About from "@/components/About";
import Blog from "@/components/Blog";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Quality from "@/components/Quality";
import SpecialsMenu from "@/components/SpecialMenu";
import Navbar from "@/components/ui/Navbar";
import { BodyWrapper, ContentWrapper } from "@/components/ui/Wrapper";

export default function HomePage() {
  return (
    <div>
      {/* <BodyWrapper className="h-full grid grid-cols-1 "> */}
      <Hero />
      <SpecialsMenu />
      <Quality />
      <Features />
      <About />
      <Newsletter />
      <Blog />
      {/* </BodyWrapper> */}
    </div>
  );
}

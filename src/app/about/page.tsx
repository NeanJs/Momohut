import About from "@/components/About";

import Newsletter from "@/components/Newsletter";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Banner from "@/components/global/Banner";

export default function AboutPage() {
  return (
    <>
      <Banner
        title="About Us"
        subtitle="Learn more about our story and passion for food."
        backgroundImage="/about-banner.jpg"
      />
      <About />
      <Team />
      <Testimonials />
      <Newsletter />
    </>
  );
}

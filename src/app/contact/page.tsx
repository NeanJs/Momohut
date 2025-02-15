import Newsletter from "@/components/Newsletter";
import Reservation from "@/components/Reservation";
import Banner from "@/components/global/Banner";

export default function ContactPage() {
  return (
    <>
     <Banner 
        title="Contact Us"
        subtitle="Reach out to us"
        backgroundImage="/about-banner.jpg"
      />
      <Reservation />
      <Newsletter />
    </>
  );
}

import Newsletter from "@/components/Newsletter";
import Quality from "@/components/Quality";
import SpecialsMenu from "@/components/SpecialMenu";
import Banner from "@/components/global/Banner";

export default function MenuPage() {
  return (
    <>
      <Banner
        title="Our Menu"
        subtitle="Explore the delights of Indo-Nepalese Cuisine at Momohut"
        backgroundImage="/about-banner.jpg"
      />
      <SpecialsMenu />
      <Quality />
      <Newsletter />
    </>
  );
}

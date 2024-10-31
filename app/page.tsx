import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Happy from "@/components/happy";
import Mission from "@/components/mission";
import ProductReview from "@/components/product-review";
import ShopNow from "@/components/shop-now";
import Testimonials from "@/components/testimonials";
import Visit from "@/components/visit";

export default function Home() {
  return (
    <>
      <Banner />
      <Happy />
      <Testimonials />
      <ShopNow />
      <Mission />
      <Visit />
      <ProductReview />
      <Footer />
    </>
  );
}

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CardsSection from "../components/CardsSection";
import Footer from "../components/Footer";

import AyurvedaFeatures from "../components/AyurvedaFeatures";
import AyurvedicConsultations from "../components/AyurvedicConsultations";

import Harmoney from "../components/Harmoney";
import AyurvedicApproach from "../components/AyurvedicApproach";
import Testimonials from "../components/Testimonials";
import AyurvedaExperts from "../components/AyurvedaExperts";
import AppPromotion from "../components/AppPromotion";


const Home = () => (
  <>
    <Header />
    <HeroSection />
    <CardsSection />
    <AyurvedaFeatures />
    <AyurvedicConsultations />
    <Harmoney/>
    <AyurvedicApproach/>
    <Testimonials/>
    <AyurvedaExperts/>
    <AppPromotion/>
    <Footer />

  </>
);

export default Home;

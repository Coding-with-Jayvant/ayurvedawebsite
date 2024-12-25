import rightDesktop from "../assets/dsk-hero.png";
import rightMobile from "../assets/mobile-hero.png";

const HeroSection = () => (
  <div className="relative w-full h-screen bg-[#FFF7E2] overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <picture>
        <source srcSet={rightMobile} media="(max-width: 768px)" />
        <img
          src={rightDesktop}
          alt="Ayurveda Background"
          className="w-full h-full object-cover"
        />
      </picture>
    </div>

    {/* Content Section */}
    <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 space-y-6 md:space-y-8 z-10">
      <p className="text-xl md:text-2xl text-[#FFF7E2] font-light">
        Namaste, Welcome to Amrutam
      </p>
      <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug md:leading-relaxed text-shadow-md">
        Step into Holistic Healing with Ayurveda
        <br />
        Book Consultation With Certified Experts.
      </h1>
      <p className="text-lg md:text-xl text-[#C9C9C9] font-medium max-w-2xl">
        Dive into the world of Ayurveda and experience personalized health
        solutions and holistic guidance from trusted Ayurvedic doctors, anytime,
        anywhere.
      </p>
      <button className="bg-[#3A643B] text-white text-lg md:text-xl font-medium uppercase py-3 px-6 md:px-10 rounded-lg hover:bg-[#2f5030] focus:outline-none focus:ring-4 focus:ring-[#6b946c]">
        Book an Appointment
      </button>
    </div>

    {/* Overlay for better text contrast */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
  </div>
);

export default HeroSection;

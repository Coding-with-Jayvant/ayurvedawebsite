import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import girlImage from "../assets/mobile-hero.png";

export default function AyurvedicApproach() {
  const steps = [
    {
      number: "1",
      title: "Make Appointment",
      description:
        "You must make an appointment in advance, to choose the service and date.",
    },
    {
      number: "2",
      title: "Consultations",
      description:
        "The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
      number: "3",
      title: "Treatment Planning",
      description:
        "The Ayurvedic practitioner creates a personalized treatment plan for you.",
    },
    {
      number: "4",
      title: "Maintenance",
      description:
        "These visits allow for assessment of progress, adjustments to the treatment.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="relative bg-white py-10 lg:py-16">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={girlImage}
          alt="Background Girl"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Title and Description */}
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
          Our Ayurvedic Approach
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>

        {/* Cards - Slider on Mobile */}
        <div className="block lg:hidden">
          <Slider {...sliderSettings}>
            {steps.map((step, index) => (
              <div key={index} className="p-4">
                <div className="bg-[#FFF7E2] shadow-md rounded-lg p-6 text-center">
                  <div className="text-green-800 text-3xl font-bold mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-green-700 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Cards - Grid on Larger Screens */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#FFF7E2] shadow-md rounded-lg p-6 text-center"
            >
              <div className="text-white text-3xl font-bold mb-2">
                <span className="bg-green-800 pl-4 pr-4 px-1 py-1 rounded-full ">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

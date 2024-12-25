import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import expertt from "../assets/experttt.png";

export default function AyurvedaExperts() {
  const experts = [
    {
      name: "Dr. Vaishali Sharma",
      title: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      specialty: "Skin Specialist",
      rating: 4.5,
      image: { expertt }, // Replace with the actual image URL
    },
    {
      name: "Dr. Amit Kumar",
      title: "Ayurveda Consultant (BAMS, PhD)",
      experience: "15 years of experience",
      specialty: "Digestive Health",
      rating: 4.7,
      image: { expertt },
    },
    {
      name: "Dr. Pooja Singh",
      title: "Ayurveda Doctor (BAMS, MS)",
      experience: "20 years of experience",
      specialty: "Mental Wellness",
      rating: 4.8,
      image: { expertt },
    },
    {
      name: "Dr. Rajesh Gupta",
      title: "Ayurveda Expert (BAMS, MD)",
      experience: "18 years of experience",
      specialty: "Joint Pain Management",
      rating: 4.6,
      image: { expertt },
    },
  ];

  const mobileSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const desktopSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-green-800 rounded-full p-2`}
        style={{ ...style, right: "10px" }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-green-800 rounded-full p-2`}
        style={{ ...style, left: "10px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  }

  return (
    <section className="py-10 bg-beige">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800">
          Meet Our Ayurveda Experts
        </h2>
      </div>
      <div className="container mx-auto px-4">
        {/* Slider for Mobile */}
        <div className="block lg:hidden">
          <Slider {...mobileSliderSettings}>
            {experts.map((expert, index) => (
              <div key={index} className="p-4">
                <div className="bg-[#FFF7E2] shadow-md rounded-lg p-6 text-center">
                  <img
                    src={expertt}
                    alt={expert.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <div className="bg-black text-white px-2 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {expert.rating} <span className="text-yellow-500">★</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    {expert.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{expert.title}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    {expert.experience}
                  </p>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs inline-block mb-4">
                    {expert.specialty}
                  </div>
                  <br />
                  <button className="bg-green-800 text-white px-4 py-2 rounded-full">
                    Book a session
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Slider for Desktop */}
        <div className="hidden lg:block">
          <Slider {...desktopSliderSettings}>
            {experts.map((expert, index) => (
              <div key={index} className="p-4">
                <div className="bg-[#FFF7E2] shadow-md rounded-[30px] p-6 text-center">
                  <img
                    src={expertt}
                    alt={expert.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <div className="bg-black text-white px-2 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {expert.rating} <span className="text-yellow-500">★</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    {expert.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{expert.title}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    {expert.experience}
                  </p>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs inline-block mb-4">
                    {expert.specialty}
                  </div>
                  <br />
                  <button className="bg-green-800 text-white px-4 py-2 rounded-full">
                    Book a session
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Find More Experts Button */}
        <div className="text-center mt-8">
          <button className="border border-green-800 bg-green-200 text-green-800 px-6 py-2 rounded-sm hover:bg-green-800 hover:text-white transition">
            Find more experts
          </button>
        </div>
      </div>
    </section>
  );
}

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      category: "Skin",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      title: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipiscing.",
    },
    {
      category: "Hair",
      name: "Sophie Moore",
      location: "Mumbai",
      date: "17/02/24",
      rating: 5,
      title: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipiscing.",
    },
    {
      category: "Hair",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      title: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipiscing.",
    },
    {
      category: "Skin",
      name: "John Doe",
      location: "Delhi",
      date: "18/02/24",
      rating: 4,
      title: "Excellent Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula consequat eros.",
    },
    {
      category: "Hair",
      name: "Jane Smith",
      location: "Bangalore",
      date: "19/02/24",
      rating: 5,
      title: "Highly Recommend",
      description:
        "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="py-10 bg-beige bg-[#FFF7E2]">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800">
          Stories from our valued customers!
        </h2>
      </div>
      <div className="container mx-auto px-4">
        {/* Unified Slider for All Screens */}
        <Slider {...sliderSettings}>
          {testimonials.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-md rounded-lg p-6">
                <div
                  className={`text-sm font-medium mb-4 ${
                    item.category === "Skin" ? "bg-purple-100" : "bg-green-100"
                  } p-2 rounded`}
                >
                  Consulted for {item.category}
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="ml-4 text-left">
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-gray-600 text-sm">{item.location}</p>
                  </div>
                  <div className="ml-auto text-gray-500 text-sm">
                    {item.date}
                  </div>
                </div>
                <div className="text-yellow-500 mb-2">
                  {"★".repeat(item.rating)}{" "}
                  {"☆".repeat(5 - item.rating)}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

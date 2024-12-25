import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

const cardsData = [
  {
    id: 1,
    image: card1,
    text: "Convenient Online & In-Clinic Consultations",
  },
  {
    id: 2,
    image: card2,
    text: "Safe And Effective Treatment",
  },
  {
    id: 3,
    image: card3,
    text: "Experienced Ayurvedic Practitioners",
  },
  {
    id: 4,
    image: card4,
    text: "Personalized Treatment Plans & Guidance",
  },
];

export default function CardsSection() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-6 bg-[#FFF7E2]">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="flex items-center gap-4 w-full sm:w-[45%] md:w-[30%] lg:w-[22%]  rounded-lg hover:shadow-lg transition-shadow"
        >
          {/* Image */}
          <img
            src={card.image}
            alt={card.text}
            className="w-[50px] h-[50px] object-cover flex-shrink-0"
          />
          {/* Text */}
          <span className="text-[#3A643B] text-sm md:text-base font-bold">
            {card.text}
          </span>
        </div>
      ))}
    </div>
  );
}

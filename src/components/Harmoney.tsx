import backgroundImage from "../assets/harmoney.png"; // Replace with your actual image path

export default function Harmoney() {
  return (
    <div
      className="relative bg-cover bg-center h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-bold mb-4">
          Ready to restore harmony 
        </h2>
        <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-bold mb-4">
         in your mind, body, and spirit?
        </h2>
        <button className="px-6 py-2 mt-3 bg-[#3A643B] text-white text-sm md:text-base font-semibold rounded-lg shadow-lg hover:bg-[#2E5130]">
          Book a consultation
        </button>
      </div>
    </div>
  );
}

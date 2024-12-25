
const InfoSection = () => (
  <section className="py-12 bg-white flex flex-col md:flex-row items-center">
    <div className="p-6">
      <h2 className="text-2xl font-bold">Discover Ayurveda with Us</h2>
      <p className="mt-4 text-gray-700">
        Experience holistic healing through personalized approaches and traditional methods.
      </p>
    </div>
    <div className="p-6">
      <img
        src="https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80"
        alt="Ayurveda"
        className="rounded"
      />
    </div>
  </section>
);
export default InfoSection;

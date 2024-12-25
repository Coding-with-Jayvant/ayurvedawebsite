import appstore from '../assets/appstore.svg';
import googleplay from '../assets/googleplay.svg';
import iphone from '../assets/iphone.svg';

export default function AppPromotion() {
  return (
    <section className="py-12 bg-[#FFF7E2]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center">
        {/* Mobile View Layout */}
        <div className="flex flex-col lg:hidden items-center text-center">
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-bold text-green-800 mb-4">
            Amrutam Home App
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-base md:text-lg mb-6">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>

          {/* Mobile Image */}
          <div className="mb-6">
            <img src={iphone} alt="Mobile App" className="w-64 md:w-80 mx-auto" />
          </div>

          {/* Get Diet Text */}
          <p className="text-green-800 text-lg font-semibold mb-6">
            Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe
          </p>

          {/* Get App Now Section */}
          <p className="text-lg font-bold text-green-800 mb-4">Get The App Now</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="inline-block">
              <img src={googleplay} alt="Google Play" className="w-40" />
            </a>
            <a href="#" className="inline-block">
              <img src={appstore} alt="App Store" className="w-40" />
            </a>
          </div>
        </div>

        {/* Desktop View Layout */}
        <div className="hidden lg:flex lg:flex-row items-center w-full m-[10px]">
          {/* Text Section */}
          <div className="lg:w-1/2 text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-green-800 mb-4">
              Amrutam Home App
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              The Amrutam Home App is your one-stop app for all things Ayurveda!
              Apart from mimicking the significant characteristics of our website,
              this app offers a wide range of additional features.
            </p>
            <p className="text-green-800 text-lg font-semibold mb-8">
              Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe
            </p>
            <p className="text-lg font-bold text-green-800 mb-4">Get The App Now</p>
            <div className="flex gap-4">
              <a href="#" className="inline-block">
                <img src={googleplay} alt="Google Play" className="w-40" />
              </a>
              <a href="#" className="inline-block">
                <img src={appstore} alt="App Store" className="w-40" />
              </a>
            </div>
          </div>

          {/* Image Section with Ellipses */}
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
            {/* Ellipses */}
            <div className="absolute bg-black opacity-10 rounded-full w-64 h-64 lg:w-80 lg:h-80 -top-[15px] -left-[-100px]"></div>
            <div className="absolute bg-black opacity-10 rounded-full w-48 h-48 lg:w-64 lg:h-64 top-[280px] left-[390px]"></div>

            {/* iPhone Image */}
            <img src={iphone} alt="Mobile App" className="relative z-10 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

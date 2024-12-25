import twogirl from '../assets/meditation/twogirl.svg';
import med from '../assets/meditation/medicien.svg';
import gitl from '../assets/meditation/girl.svg';
export default function AyurvedicConsultation() {
    return (
        <div className="relative w-screen min-h-[1000px] bg-gradient-to-r from-[#FFF7E2] to-[#FFFAEE]">
            <div className="container mx-auto px-4 pt-20">
                {/* Title Section */}
                <div className="relative text-center mb-16">
                    <h1 className="text-[36px] sm:text-[48px] font-bold text-[#3A643B] mb-4">
                        What sets Ayurvedic consultations apart?
                    </h1>
                    <div className="w-full h-[5px] bg-[#C3D0C4] mx-auto"></div>
                </div>

                {/* Cards Grid */}
                <div className="flex flex-wrap gap-4 justify-center max-w-[1240px] mx-auto">
                    {/* Sanskrit Quote Card */}
                    <div className="flex-1 min-w-[280px] sm:min-w-[400px] lg:min-w-[522px] bg-white rounded-[20px] border-t-[5px] border-[#3A643B] shadow-md p-8 sm:p-10 lg:p-12">
                        <div className="flex flex-col items-center gap-5">
                            <p className="font-['Inknut_Antiqua'] text-[20px] sm:text-[24px] lg:text-[32px] text-[#3A643B] text-center leading-[159%]">
                                स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।
                            </p>
                            <p className="text-[14px] sm:text-[16px] text-[#3A643B] text-center">
                                [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]
                            </p>
                        </div>
                    </div>

                    {/* Image Card 1 */}
                    <div className="w-[90%] sm:w-[371px] h-[285px] rounded-[20px] shadow-md overflow-hidden">
                        <img
                            src={twogirl}
                            alt="Ayurvedic Treatment"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Precise Diagnosis Card */}
                    <div className="w-[90%] sm:w-[311px] bg-white rounded-[20px] border-t-[5px] border-[#3A643B] shadow-md p-6 sm:p-12">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[20px] sm:text-[24px] font-bold text-[#3A643B]">
                                Precise diagnosis
                            </h3>
                            <p className="text-[16px] sm:text-[20px] text-[#414141] leading-[26px]">
                                Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.
                            </p>
                        </div>
                    </div>

                    {/* Zero Side-effects Card */}
                    <div className="w-[90%] sm:w-[293px] bg-white rounded-[20px] border-t-[5px] border-[#3A643B] shadow-md p-6 sm:p-12">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[20px] sm:text-[24px] font-bold text-[#3A643B]">
                                Zero side-effects
                            </h3>
                            <p className="text-[16px] sm:text-[20px] text-[#414141] leading-[26px]">
                                Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs.
                            </p>
                        </div>
                    </div>

                    {/* Image Card 2 */}
                    <div className="w-[90%] sm:w-[293px] h-[274px] rounded-[20px] shadow-md overflow-hidden">
                        <img
                            src={med}
                            alt="Ayurvedic Herbs"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Individual Treatment Card */}
                    <div className="w-[90%] sm:w-[298px] bg-white rounded-[20px] border-t-[5px] border-[#3A643B] shadow-md p-6 sm:p-12">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[20px] sm:text-[24px] font-bold text-[#3A643B]">
                                Individual Treatment
                            </h3>
                            <p className="text-[16px] sm:text-[20px] text-[#414141] leading-[26px]">
                                All treatments are personalized based on a person's unique constitution and health concerns.
                            </p>
                        </div>
                    </div>

                    {/* Image Card 3 */}
                    <div className="w-[90%] sm:w-[294px] h-[276px] rounded-[20px] shadow-md overflow-hidden">
                        <img
                            src={gitl}
                            alt="Ayurvedic Consultation"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

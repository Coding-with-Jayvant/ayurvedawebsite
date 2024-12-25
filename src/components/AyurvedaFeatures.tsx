import {
    Heart,
    Leaf,
    Brain,
    HammerIcon as Mortar,
    Sparkles,
    Shield,
} from "lucide-react";
import MeditationPose from "../assets/MeditationPose.svg";

// Define the feature items
const features = [
    {
        title: "Personalized Wellness",
        description: "Get treatments made just for you based on your individual doshas (body type)",
        icon: Heart,
        iconColor: "text-blue-500",
        bgColor: "bg-blue-50",
        position: "left-12 top-1/4 -translate-y-1/2",
    },
    {
        title: "Focus on Prevention",
        description: "Stop problems even before they start!",
        icon: Leaf,
        iconColor: "text-green-500",
        bgColor: "bg-green-50",
        position: "left-9 top-2/4",
    },
    {
        title: "Mind-Body Connection",
        description: "Keep your mind and body in sync for a happy life",
        icon: Brain,
        iconColor: "text-red-500",
        bgColor: "bg-red-50",
        position: "left-9 top-3/4",
    },
    {
        title: "Holistic Healing",
        description: "Fix the root problem for long-lasting health",
        icon: Sparkles,
        iconColor: "text-purple-500",
        bgColor: "bg-purple-50",
        position: "right-9 top-1/4 -translate-y-1/2",
    },
    {
        title: "Natural Remedies",
        description: "Using herbs and natural therapies for healing",
        icon: Mortar,
        iconColor: "text-orange-500",
        bgColor: "bg-orange-50",
        position: "right-9 top-2/4",
    },
    {
        title: "Boosting Immunity",
        description: "Stay strong and healthy for life, not just for today",
        icon: Shield,
        iconColor: "text-emerald-500",
        bgColor: "bg-emerald-50",
        position: "right-9 top-3/4",
    },
];

const AyurvedaFeatures = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 underline decoration-green-200 decoration-4 underline-offset-8">
                    Discover Ayurveda&apos;s Magic With Us
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                    Ayurvedic treatment aims to balance your body and mind, bringing
                    harmony and vitality. It&apos;s like a journey to better health using
                    ancient wisdom, a totally effective approach for a better life.
                </p>
            </div>

            <div className="relative">
                {/* Desktop Layout */}
                <div className="relative h-[250px] lg:h-[700px]">
                    {/* Center Image with Mandala */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px]">
                        <div className="relative w-full h-full">
                            <img
                                src={MeditationPose}
                                alt="Meditation pose"
                                className="object-cover rounded-full w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        {/* Left Side Features */}
                        <div className="absolute left-6 top-0 w-1/2 h-full">
                            {features.filter((_, index) => index < 3).map((feature) => (
                                <div
                                    key={feature.title}
                                    className={`absolute ${feature.position} w-64 transform transition-all duration-300 hover:scale-105`}
                                >
                                    <div className="flex items-center justify-end space-x-4 p-2 bg-white rounded-lg shadow-lg">
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                                                {feature.title}
                                            </h3>
                                            <p className="mt-1 text-sm sm:text-base text-gray-500">
                                                {feature.description}
                                            </p>
                                        </div>
                                        <div
                                            className={`flex-shrink-0 p-3 rounded-full ${feature.bgColor}`}
                                        >
                                            <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Side Features */}
                        <div className="absolute right-6 top-0 w-1/2 h-full">
                            {features.filter((_, index) => index >= 3).map((feature) => (
                                <div
                                    key={feature.title}
                                    className={`absolute ${feature.position} w-64 transform transition-all duration-300 hover:scale-105`}
                                >
                                    <div className="flex items-start space-x-4 p-2 bg-white rounded-lg shadow-lg">
                                        <div
                                            className={`flex-shrink-0 p-3 rounded-full ${feature.bgColor}`}
                                        >
                                            <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                                                {feature.title}
                                            </h3>
                                            <p className="mt-1 text-sm sm:text-base text-gray-500">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden flex flex-wrap justify-center gap-6">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg w-64 p-4">
                            <div className={`flex-shrink-0 p-3 rounded-full ${feature.bgColor} mt-4`}>
                                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                            </div>
                            <div className="ml-4 text-center">
                                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{feature.title}</h3>
                                <p className="mt-1 text-sm sm:text-base text-gray-500">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AyurvedaFeatures;

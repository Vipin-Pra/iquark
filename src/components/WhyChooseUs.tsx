import { FaCheck, FaUserGraduate, FaChalkboardTeacher, FaLaptop, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: FaChalkboardTeacher,
    title: "Expert Faculty",
    description: "Learn from IITians and subject matter experts with years of teaching experience",
  },
  {
    icon: FaUserGraduate,
    title: "Small Batch Size",
    description: "Maximum 15-20 students per batch for personalized attention and doubt clearing",
  },
  {
    icon: FaLaptop,
    title: "Hybrid Learning",
    description: "Flexible online and offline classes with recorded lectures for revision",
  },
  {
    icon: FaChartLine,
    title: "Regular Assessment",
    description: "Weekly tests, monthly exams, and detailed performance analysis",
  },
];

const benefits = [
  "Comprehensive study material and practice problems",
  "24/7 doubt resolution support",
  "Regular parent-teacher meetings",
  "Mock tests simulating actual exam patterns",
  "Counselling and career guidance sessions",
  "Scholarship opportunities for meritorious students",
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose iQuark?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the perfect blend of experienced faculty, personalized attention, and proven methodology
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <Icon size={30} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Benefits List */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Additional Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center mt-1">
                  <FaCheck size={12} />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

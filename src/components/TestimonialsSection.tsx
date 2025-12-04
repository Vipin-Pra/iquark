import { FaStar, FaQuoteLeft } from "react-icons/fa";

// TODO: Replace with actual student testimonials and photos
const testimonials = [
  {
    name: "Rahul Sharma",
    achievement: "AIR 47 in JEE Advanced",
    photo: "/images/testimonials/student1.jpg", // TODO: Add actual photo
    testimonial: "iQuark's teaching methodology and personalized attention helped me achieve my dream of getting into IIT. The faculty is excellent and always available for doubt clearing.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    achievement: "AIR 152 in NEET",
    photo: "/images/testimonials/student2.jpg", // TODO: Add actual photo
    testimonial: "The study material provided by iQuark is comprehensive and the regular tests helped me track my progress. I highly recommend this institute for NEET preparation.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    achievement: "Gold Medal in Physics Olympiad",
    photo: "/images/testimonials/student3.jpg", // TODO: Add actual photo
    testimonial: "The advanced problem-solving techniques taught here gave me the confidence to excel in Olympiads. The faculty's expertise is unmatched.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our successful students who achieved their dreams with iQuark
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-100">
                <FaQuoteLeft size={40} />
              </div>

              {/* Student Photo */}
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-500 text-sm">
                {/* TODO: Replace with actual image */}
                Photo
              </div>

              {/* Name and Achievement */}
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
                {testimonial.name}
              </h3>
              <p className="text-primary-600 font-semibold text-center mb-4">
                {testimonial.achievement}
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={18} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-center italic">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

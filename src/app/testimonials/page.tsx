import type { Metadata } from "next";
import { FaStar, FaQuoteLeft, FaTrophy } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Student Testimonials & Success Stories | iQuark",
  description: "Read success stories from our students who achieved top ranks in IIT-JEE, NEET, and Olympiads",
};

// TODO: Replace with actual student data
const testimonials = [
  {
    name: "Rahul Sharma",
    achievement: "AIR 47 in JEE Advanced 2024",
    course: "IIT-JEE",
    photo: "/images/testimonials/student1.jpg",
    testimonial: "iQuark's teaching methodology and personalized attention helped me achieve my dream of getting into IIT Bombay. The faculty is excellent, always available for doubt clearing, and the study material is comprehensive. The regular mock tests helped me build confidence and improve my time management skills.",
    rating: 5,
    college: "IIT Bombay - Computer Science",
  },
  {
    name: "Priya Patel",
    achievement: "AIR 152 in NEET 2024",
    course: "NEET",
    photo: "/images/testimonials/student2.jpg",
    testimonial: "The NCERT-focused approach at iQuark along with additional practice problems gave me a solid foundation. The Biology faculty is particularly amazing with clear explanations and excellent diagrams. Regular tests helped me track my progress and the counseling team guided me through the entire admission process.",
    rating: 5,
    college: "AIIMS Delhi - MBBS",
  },
  {
    name: "Arjun Mehta",
    achievement: "Gold Medal in Physics Olympiad",
    course: "Olympiad",
    photo: "/images/testimonials/student3.jpg",
    testimonial: "The advanced problem-solving techniques taught at iQuark gave me the edge needed for Olympiads. The faculty's expertise in handling challenging problems and their individual attention helped me develop analytical thinking. I highly recommend iQuark for students aiming for Olympiad success.",
    rating: 5,
    college: "Selected for International Physics Olympiad",
  },
  {
    name: "Sneha Reddy",
    achievement: "AIR 89 in JEE Advanced 2024",
    course: "IIT-JEE",
    photo: "/images/testimonials/student4.jpg",
    testimonial: "Joining iQuark was the best decision for my JEE preparation. The small batch size ensured I got personalized attention, and the faculty made even the toughest concepts easy to understand. The weekly tests and performance analysis helped me identify weak areas and improve consistently.",
    rating: 5,
    college: "IIT Delhi - Electrical Engineering",
  },
  {
    name: "Vikram Singh",
    achievement: "AIR 234 in NEET 2024",
    course: "NEET",
    photo: "/images/testimonials/student5.jpg",
    testimonial: "The structured approach to NEET preparation at iQuark is outstanding. From conceptual clarity to exam strategy, everything is covered systematically. The doubt clearing sessions were particularly helpful, and the faculty's dedication is unmatched. Thank you iQuark for making my medical dream come true!",
    rating: 5,
    college: "Maulana Azad Medical College - MBBS",
  },
  {
    name: "Anjali Kumar",
    achievement: "Silver Medal in Chemistry Olympiad",
    course: "Olympiad",
    photo: "/images/testimonials/student6.jpg",
    testimonial: "iQuark's Olympiad program goes beyond regular school curriculum and focuses on building deep conceptual understanding. The practice problems are challenging and really help in developing problem-solving skills. The faculty's guidance was instrumental in my success at the national level.",
    rating: 5,
    college: "Selected for International Chemistry Olympiad",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FaTrophy className="text-6xl mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-blue-100">
              Celebrating our students who achieved excellence in competitive examinations
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Top Selections</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">AIR Under 100</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Olympiad Medals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-xl transition-shadow"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-primary-100">
                  <FaQuoteLeft size={40} />
                </div>

                {/* Student Photo Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full mx-auto mb-4 flex items-center justify-center text-primary-700 font-bold text-2xl">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Name and Achievement */}
                <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-primary-600 font-semibold text-center mb-1">
                  {testimonial.achievement}
                </p>
                <p className="text-sm text-gray-500 text-center mb-4">
                  {testimonial.college}
                </p>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={18} />
                  ))}
                </div>

                {/* Course Tag */}
                <div className="text-center mb-4">
                  <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.course}
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join iQuark and achieve your dream of cracking competitive exams
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
          >
            Start Your Journey Today
          </a>
        </div>
      </section>
    </div>
  );
}

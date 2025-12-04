import type { Metadata } from "next";
import Link from "next/link";
import { FaDownload, FaCheck, FaClock, FaUsers, FaRupeeSign } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "IIT-JEE Coaching - Physics, Chemistry, Maths | iQuark",
  description: "Comprehensive IIT-JEE coaching for Main and Advanced with expert faculty and proven results",
};

export default function IITJEECoursePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">IIT-JEE Preparation</h1>
            <p className="text-xl mb-6">Master Physics, Chemistry & Mathematics for JEE Main & Advanced</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">1-2 Years Program</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Small Batches (15-20)</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">IITian Faculty</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
              <p className="text-gray-600 mb-4">
                Our IIT-JEE coaching program is meticulously designed to prepare students for both JEE Main 
                and JEE Advanced examinations. With a focus on conceptual clarity, problem-solving skills, 
                and regular assessments, we ensure comprehensive preparation.
              </p>
              <p className="text-gray-600">
                Taught by IIT alumni and experienced faculty, our course covers the entire syllabus with 
                advanced topics and tricks to excel in the examination.
              </p>
            </section>

            {/* Syllabus */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Detailed Syllabus</h2>
                <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
                  <FaDownload />
                  Download PDF
                </button>
              </div>

              <div className="space-y-6">
                {/* Physics */}
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Physics</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                    {[
                      "Mechanics & Kinematics",
                      "Newton's Laws of Motion",
                      "Work, Energy & Power",
                      "Rotational Motion",
                      "Gravitation",
                      "Properties of Matter",
                      "Thermodynamics",
                      "Kinetic Theory of Gases",
                      "Oscillations & Waves",
                      "Electrostatics",
                      "Current Electricity",
                      "Magnetic Effects of Current",
                      "Electromagnetic Induction",
                      "Alternating Current",
                      "Optics",
                      "Modern Physics",
                    ].map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <FaCheck className="text-green-500 flex-shrink-0" size={14} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Chemistry */}
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-3">Chemistry</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                    {[
                      "Physical Chemistry: Mole Concept",
                      "Atomic Structure",
                      "Chemical Bonding",
                      "Gaseous State",
                      "Thermodynamics & Thermochemistry",
                      "Chemical Equilibrium",
                      "Ionic Equilibrium",
                      "Electrochemistry",
                      "Chemical Kinetics",
                      "Solid State",
                      "Solutions",
                      "Organic Chemistry: Fundamentals",
                      "Hydrocarbons",
                      "Organic Compounds",
                      "Inorganic Chemistry: Periodic Table",
                      "Chemical Bonding & Coordination",
                    ].map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <FaCheck className="text-green-500 flex-shrink-0" size={14} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mathematics */}
                <div>
                  <h3 className="text-xl font-bold text-purple-600 mb-3">Mathematics</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                    {[
                      "Algebra: Complex Numbers",
                      "Quadratic Equations",
                      "Sequences & Series",
                      "Permutations & Combinations",
                      "Binomial Theorem",
                      "Matrices & Determinants",
                      "Trigonometry",
                      "Coordinate Geometry",
                      "3D Geometry",
                      "Vector Algebra",
                      "Calculus: Limits & Continuity",
                      "Differentiation",
                      "Applications of Derivatives",
                      "Integration",
                      "Differential Equations",
                      "Probability & Statistics",
                    ].map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <FaCheck className="text-green-500 flex-shrink-0" size={14} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">What You Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Comprehensive study material",
                  "Daily homework assignments",
                  "Weekly chapter tests",
                  "Monthly full-length mock tests",
                  "Previous year papers practice",
                  "Doubt clearing sessions",
                  "Online recorded lectures",
                  "Performance analysis reports",
                  "Parent-teacher meetings",
                  "Career counseling",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <FaCheck className="text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Course Info */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Course Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaClock className="text-primary-600 mt-1" />
                    <div>
                      <div className="font-semibold">Duration</div>
                      <div className="text-gray-600">1-2 Years</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaUsers className="text-primary-600 mt-1" />
                    <div>
                      <div className="font-semibold">Batch Size</div>
                      <div className="text-gray-600">15-20 Students</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaRupeeSign className="text-primary-600 mt-1" />
                    <div>
                      <div className="font-semibold">Fee Structure</div>
                      <div className="text-gray-600">Available on request</div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="block mt-6 bg-accent-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>

              {/* Contact Form */}
              <ContactForm title="Request Callback" submitButtonText="Request Callback" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

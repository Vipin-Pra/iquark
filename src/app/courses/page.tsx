import type { Metadata } from "next";
import Link from "next/link";
import { FaBook, FaMicroscope, FaTrophy, FaGraduationCap, FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Our Courses - IIT-JEE, NEET, Olympiad Coaching | iQuark",
  description: "Explore our comprehensive courses for IIT-JEE, NEET, Olympiad, and Foundation programs with expert faculty",
};

const courses = [
  {
    id: "iit-jee",
    title: "IIT-JEE Preparation",
    icon: FaGraduationCap,
    description: "Comprehensive coaching for JEE Main & JEE Advanced with experienced IITian faculty",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    duration: "1-2 Years",
    batchSize: "15-20 students",
    features: [
      "Complete syllabus coverage for JEE Main & Advanced",
      "Daily practice problems and homework assignments",
      "Weekly chapter tests and monthly mock exams",
      "Previous year question paper analysis",
      "Doubt clearing sessions every week",
      "Study material and online resources",
    ],
    color: "bg-blue-500",
  },
  {
    id: "neet",
    title: "NEET Preparation",
    icon: FaMicroscope,
    description: "Complete medical entrance preparation with NCERT focus and conceptual clarity",
    subjects: ["Physics", "Chemistry", "Biology"],
    duration: "1-2 Years",
    batchSize: "15-20 students",
    features: [
      "NCERT-based comprehensive coaching",
      "Detailed coverage of Biology (Botany & Zoology)",
      "Regular tests following NEET pattern",
      "Previous year NEET questions practice",
      "Biology diagrams and illustrations",
      "Medical college counseling guidance",
    ],
    color: "bg-green-500",
  },
  {
    id: "olympiad",
    title: "Olympiad Training",
    icon: FaTrophy,
    description: "Advanced training for NSEP, NSEC, NSEB, and international Olympiads",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
    duration: "6-12 Months",
    batchSize: "10-15 students",
    features: [
      "Advanced problem-solving techniques",
      "Training for NSEP, NSEC, NSEB, RMO",
      "Conceptual depth beyond school syllabus",
      "Previous Olympiad problems practice",
      "Competition strategy and time management",
      "International Olympiad preparation",
    ],
    color: "bg-purple-500",
  },
  {
    id: "foundation",
    title: "Foundation Courses",
    icon: FaBook,
    description: "Strong conceptual foundation for classes 8-10 to prepare early for competitive exams",
    subjects: ["Science", "Mathematics"],
    duration: "1 Year",
    batchSize: "20-25 students",
    features: [
      "NCERT curriculum with competitive edge",
      "Basic concepts building for JEE/NEET",
      "Regular tests and assessments",
      "Interactive learning sessions",
      "School exam preparation included",
      "Smooth transition to advanced courses",
    ],
    color: "bg-orange-500",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl text-blue-100">
              Choose from our comprehensive range of courses designed for competitive exam success
            </p>
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-6xl mx-auto">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="md:flex">
                    {/* Course Icon/Header */}
                    <div className={`${course.color} p-8 md:w-1/3 flex flex-col justify-center items-center text-white`}>
                      <Icon size={80} className="mb-4" />
                      <h2 className="text-2xl font-bold text-center">{course.title}</h2>
                    </div>

                    {/* Course Details */}
                    <div className="p-8 md:w-2/3">
                      <p className="text-gray-600 text-lg mb-6">{course.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Subjects</h4>
                          <p className="text-gray-600 text-sm">{course.subjects.join(", ")}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                          <p className="text-gray-600 text-sm">{course.duration}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Batch Size</h4>
                          <p className="text-gray-600 text-sm">{course.batchSize}</p>
                        </div>
                      </div>

                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={`/courses/${course.id}`}
                        className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                      >
                        View Detailed Syllabus
                        <FaArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Course is Right for You?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our counseling team will help you choose the best course based on your goals
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
          >
            Get Free Counseling
          </Link>
        </div>
      </section>
    </div>
  );
}

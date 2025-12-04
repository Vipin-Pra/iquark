import Link from "next/link";
import { FaBook, FaMicroscope, FaTrophy, FaGraduationCap, FaArrowRight } from "react-icons/fa";

const courses = [
  {
    id: "iit-jee",
    title: "IIT-JEE Preparation",
    icon: FaGraduationCap,
    description: "Comprehensive coaching for JEE Main & Advanced with experienced faculty and proven methodology.",
    features: ["Physics", "Chemistry", "Mathematics"],
    color: "bg-blue-500",
  },
  {
    id: "neet",
    title: "NEET Preparation",
    icon: FaMicroscope,
    description: "Complete medical entrance preparation with focus on NCERT and conceptual clarity.",
    features: ["Physics", "Chemistry", "Biology"],
    color: "bg-green-500",
  },
  {
    id: "olympiad",
    title: "Olympiad Training",
    icon: FaTrophy,
    description: "Advanced training for NSEP, NSEC, NSEB, and other national & international Olympiads.",
    features: ["Problem Solving", "Advanced Concepts", "Competition Strategy"],
    color: "bg-purple-500",
  },
  {
    id: "foundation",
    title: "Foundation Courses",
    icon: FaBook,
    description: "Strong conceptual foundation for classes 8-10 to prepare for competitive exams early.",
    features: ["Basic Concepts", "NCERT Focus", "Regular Tests"],
    color: "bg-orange-500",
  },
];

export default function CoursesOverview() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of courses designed to help you excel in competitive examinations
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden group"
              >
                <div className={`${course.color} p-6 text-white`}>
                  <Icon size={40} className="mb-4" />
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/courses/${course.id}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                  >
                    Learn More
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

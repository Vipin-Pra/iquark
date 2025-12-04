import type { Metadata } from "next";
import { FaGraduationCap, FaUsers, FaLightbulb, FaHeart, FaTrophy, FaChalkboardTeacher } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us - iQuark Coaching Institute",
  description: "Learn about iQuark's mission, vision, and our dedicated approach to competitive exam coaching",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About iQuark</h1>
            <p className="text-xl text-blue-100">
              Empowering students to achieve excellence in competitive examinations since 2008
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Founded in 2008, iQuark has been at the forefront of competitive exam coaching in India. 
                What started as a small coaching center with just 15 students has now grown into one of 
                the most trusted names in IIT-JEE, NEET, and Olympiad preparation.
              </p>
              <p>
                Our journey has been driven by a simple yet powerful mission: to provide quality education 
                that transforms aspiring students into successful professionals. With over 5000 students 
                taught and a 95% success rate, we continue to set new benchmarks in educational excellence.
              </p>
              <p>
                At iQuark, we believe that every student is unique and deserves personalized attention. 
                Our small batch sizes, expert faculty, and comprehensive study material ensure that each 
                student receives the guidance they need to excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6">
                <FaLightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide world-class coaching that nurtures talent, builds confidence, and 
                enables students to achieve their academic goals through innovative teaching 
                methodologies and personalized mentorship.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6">
                <FaTrophy size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as India's most trusted coaching institute, known for producing 
                top rankers and shaping future leaders through excellence in education and 
                character development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from teaching to student support
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Honesty and transparency form the foundation of our relationship with students
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student-First</h3>
              <p className="text-gray-600">
                Every decision we make prioritizes the success and well-being of our students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <FaChalkboardTeacher className="text-primary-600" size={48} />
              <h2 className="text-3xl font-bold text-gray-900">Our Teaching Philosophy</h2>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Conceptual Clarity First</h3>
                <p>
                  We focus on building strong fundamentals rather than rote learning. Our teaching 
                  methodology ensures students understand the 'why' behind every concept.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Practice & Problem Solving</h3>
                <p>
                  Regular practice with diverse problem sets helps students develop analytical 
                  thinking and problem-solving skills essential for competitive exams.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Assessment</h3>
                <p>
                  Weekly tests and detailed performance analysis help students track progress 
                  and identify areas for improvement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Mentorship</h3>
                <p>
                  Small batch sizes allow our faculty to provide individual attention and 
                  customize teaching approaches based on each student's learning style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Students Taught</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Top Selections</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Faculty</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

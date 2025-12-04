import type { Metadata } from "next";
import Link from "next/link";
import { FaPlay, FaDownload, FaCalendar, FaBook } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Sample Class & Demo - Try Before You Enroll | iQuark",
  description: "Book a free demo class and experience our teaching methodology before enrolling",
};

export default function SampleClassPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience Our Teaching</h1>
            <p className="text-xl text-blue-100 mb-8">
              Book a free demo class and see why thousands of students choose iQuark
            </p>
            <a
              href="#book-demo"
              className="inline-block bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors text-lg"
            >
              Book Free Demo Class
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Sample Video Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Watch Sample Lecture</h2>
            
            {/* Video Placeholder */}
            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center mb-6 relative overflow-hidden group cursor-pointer hover:bg-gray-300 transition-colors">
              <div className="text-center">
                <FaPlay className="text-6xl text-primary-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-gray-600 font-semibold">
                  {/* TODO: Add actual video embed (YouTube/Vimeo) */}
                  Click to Watch Sample Lecture
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center gap-3 mb-2">
                  <FaPlay className="text-primary-600" />
                  <h3 className="font-bold text-gray-900">Physics - Mechanics</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Watch our expert faculty explain Newton's Laws with real-world applications
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center gap-3 mb-2">
                  <FaPlay className="text-primary-600" />
                  <h3 className="font-bold text-gray-900">Chemistry - Organic Chemistry</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Learn reaction mechanisms with easy-to-understand visual aids
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center gap-3 mb-2">
                  <FaPlay className="text-primary-600" />
                  <h3 className="font-bold text-gray-900">Mathematics - Calculus</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Master differentiation techniques with step-by-step problem solving
                </p>
              </div>
            </div>
          </div>

          {/* Book Demo Form */}
          <div id="book-demo">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Free Demo Class</h2>
              <p className="text-gray-600 mb-6">
                Experience our teaching methodology first-hand. No commitment required.
              </p>
              <ContactForm title="" submitButtonText="Book Demo Class" />
            </div>

            {/* What to Expect */}
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect in Demo Class</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    1
                  </span>
                  <span className="text-gray-700">Interactive teaching session with live problem solving</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    2
                  </span>
                  <span className="text-gray-700">Introduction to our teaching methodology and study material</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    3
                  </span>
                  <span className="text-gray-700">Q&A session with faculty and current students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    4
                  </span>
                  <span className="text-gray-700">Campus tour and facility overview</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    5
                  </span>
                  <span className="text-gray-700">One-on-one counseling for course selection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="max-w-6xl mx-auto mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Free Study Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBook size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sample Syllabus</h3>
              <p className="text-gray-600 mb-4">
                Download detailed course syllabus for all programs
              </p>
              <button className="flex items-center gap-2 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 mx-auto">
                <FaDownload />
                Download
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBook size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Practice Problems</h3>
              <p className="text-gray-600 mb-4">
                Get sample practice problems with solutions
              </p>
              <button className="flex items-center gap-2 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 mx-auto">
                <FaDownload />
                Download
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendar size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Batch Schedule</h3>
              <p className="text-gray-600 mb-4">
                View upcoming batch timings and availability
              </p>
              <button className="flex items-center gap-2 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 mx-auto">
                <FaDownload />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

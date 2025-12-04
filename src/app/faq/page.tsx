"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Admissions",
    question: "What is the admission process?",
    answer: "The admission process involves filling out an online application form, attending a counseling session, and taking an entrance test (if applicable). Our team will guide you through each step."
  },
  {
    category: "Admissions",
    question: "When do new batches start?",
    answer: "New batches typically start in April/May for the academic year and in November/December for the crash course batches. Please contact us for specific batch timings."
  },
  {
    category: "Admissions",
    question: "Is there an entrance test for admission?",
    answer: "For regular courses, we conduct a basic aptitude test to assess the current level. This helps us place students in appropriate batches and customize our teaching approach."
  },
  {
    category: "Fees",
    question: "What is the fee structure?",
    answer: "Fee structure varies based on the course, duration, and batch type. Please contact our admissions team for detailed fee information and available payment plans."
  },
  {
    category: "Fees",
    question: "Are there any scholarships available?",
    answer: "Yes, we offer merit-based scholarships for deserving students. Scholarships are awarded based on entrance test performance and previous academic records."
  },
  {
    category: "Fees",
    question: "Can I pay fees in installments?",
    answer: "Yes, we offer flexible payment options including monthly, quarterly, and annual installment plans. Discuss your preferred payment schedule with our accounts team."
  },
  {
    category: "Classes",
    question: "What is the batch size?",
    answer: "We maintain small batch sizes of 15-20 students for IIT-JEE and NEET courses, and 10-15 students for Olympiad training to ensure personalized attention."
  },
  {
    category: "Classes",
    question: "Are classes available online?",
    answer: "Yes, we offer both online and offline modes. Online classes are conducted live with interactive sessions, and recordings are made available for revision."
  },
  {
    category: "Classes",
    question: "What are the class timings?",
    answer: "Class timings vary by batch and course. Typically, weekday batches run from 4 PM to 8 PM, and weekend batches from 9 AM to 5 PM. Flexible timings can be arranged."
  },
  {
    category: "Course Content",
    question: "Do you provide study material?",
    answer: "Yes, comprehensive study material including theory notes, practice problems, previous year papers, and reference books are provided to all enrolled students."
  },
  {
    category: "Course Content",
    question: "How often are tests conducted?",
    answer: "We conduct weekly chapter tests, monthly full-length mock tests, and quarterly comprehensive assessments. All tests are followed by detailed performance analysis."
  },
  {
    category: "Course Content",
    question: "Is doubt clearing available?",
    answer: "Yes, dedicated doubt clearing sessions are conducted weekly. Students can also reach faculty through our online portal for individual queries."
  },
  {
    category: "Refund Policy",
    question: "What is your refund policy?",
    answer: "Refunds are available within 15 days of joining if you're not satisfied with our teaching. 80% of the fee will be refunded after deducting administrative charges."
  },
  {
    category: "Refund Policy",
    question: "Can I change my course after enrollment?",
    answer: "Yes, course changes are allowed within the first month of enrollment subject to availability in the desired course batch."
  },
  {
    category: "Results",
    question: "What is your success rate?",
    answer: "We maintain a 95% success rate with over 500 top selections in IIT-JEE, NEET, and Olympiads. Our results speak for our quality of teaching and student dedication."
  },
  {
    category: "Results",
    question: "Do you provide counseling for college admissions?",
    answer: "Yes, we offer comprehensive career counseling and college admission guidance including JoSAA counseling, NEET counseling, and college selection strategy."
  },
];

function FAQAccordion({ faq }: { faq: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <span className="font-semibold text-gray-900">{faq.question}</span>
        {isOpen ? (
          <FaChevronUp className="text-primary-600 flex-shrink-0 ml-4" />
        ) : (
          <FaChevronDown className="text-primary-600 flex-shrink-0 ml-4" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredFAQs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about our courses, admissions, and policies
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === "All"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, idx) => (
            <FAQAccordion key={idx} faq={faq} />
          ))}
        </div>

        {/* Still Have Questions? */}
        <div className="max-w-4xl mx-auto mt-12 text-center bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

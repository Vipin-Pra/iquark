import type { Metadata } from "next";
import Link from "next/link";
import { FaCalendar, FaUser, FaClock, FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Blog - Exam Tips, Study Strategies & Resources | iQuark",
  description: "Read expert tips, study strategies, and free resources for IIT-JEE, NEET, and Olympiad preparation",
};

// TODO: Replace with actual blog posts from CMS or database
const blogPosts = [
  {
    slug: "jee-advanced-preparation-strategy",
    title: "JEE Advanced Preparation Strategy: A Complete Guide",
    excerpt: "Discover proven strategies to crack JEE Advanced with tips on time management, subject-wise preparation, and practice techniques.",
    author: "Dr. Amit Kumar",
    date: "2024-11-15",
    readTime: "8 min read",
    category: "IIT-JEE",
    image: "/images/blog/jee-strategy.jpg",
  },
  {
    slug: "neet-biology-preparation-tips",
    title: "NEET Biology Preparation: Master Botany and Zoology",
    excerpt: "Essential tips and tricks to excel in NEET Biology with focus on NCERT, diagrams, and conceptual clarity.",
    author: "Dr. Priya Sharma",
    date: "2024-11-10",
    readTime: "6 min read",
    category: "NEET",
    image: "/images/blog/neet-biology.jpg",
  },
  {
    slug: "physics-olympiad-problem-solving",
    title: "Problem Solving Techniques for Physics Olympiad",
    excerpt: "Advanced problem-solving approaches and strategies used by Olympiad medalists to tackle challenging physics problems.",
    author: "Prof. Rajesh Gupta",
    date: "2024-11-05",
    readTime: "10 min read",
    category: "Olympiad",
    image: "/images/blog/physics-olympiad.jpg",
  },
  {
    slug: "time-management-competitive-exams",
    title: "Time Management Secrets for Competitive Exam Success",
    excerpt: "Learn how to create an effective study schedule, prioritize topics, and balance preparation with school work.",
    author: "Mentor Team",
    date: "2024-10-28",
    readTime: "5 min read",
    category: "Study Tips",
    image: "/images/blog/time-management.jpg",
  },
  {
    slug: "chemistry-organic-reactions",
    title: "Mastering Organic Chemistry Reactions for JEE & NEET",
    excerpt: "A systematic approach to learning and remembering organic chemistry reactions with mnemonics and patterns.",
    author: "Dr. Sneha Patel",
    date: "2024-10-20",
    readTime: "7 min read",
    category: "Chemistry",
    image: "/images/blog/organic-chemistry.jpg",
  },
  {
    slug: "mathematics-calculus-tips",
    title: "Calculus Made Easy: Tips for JEE Mathematics",
    excerpt: "Break down complex calculus concepts with simple explanations, shortcuts, and practice strategies.",
    author: "Prof. Vikram Singh",
    date: "2024-10-15",
    readTime: "9 min read",
    category: "Mathematics",
    image: "/images/blog/calculus.jpg",
  },
];

const categories = ["All", "IIT-JEE", "NEET", "Olympiad", "Study Tips", "Chemistry", "Mathematics", "Physics"];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Resources</h1>
            <p className="text-xl text-blue-100">
              Expert tips, study strategies, and free resources for competitive exam success
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-semibold bg-gray-200 text-gray-700 hover:bg-primary-600 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                <span className="text-white text-sm">
                  {/* TODO: Add actual blog post images */}
                  Featured Image
                </span>
              </div>

              <div className="p-6">
                {/* Category Tag */}
                <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {post.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <FaUser size={12} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <FaCalendar size={12} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                >
                  Read More
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-8">
            Get the latest study tips, exam strategies, and free resources delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
              required
            />
            <button
              type="submit"
              className="bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

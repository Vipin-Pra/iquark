import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">iQuark</h3>
            <p className="text-sm mb-4">
              Premier coaching institute for IIT-JEE, NEET, and Olympiads with personalized attention and proven results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-primary-400 transition-colors">Courses</Link></li>
              <li><Link href="/testimonials" className="hover:text-primary-400 transition-colors">Testimonials</Link></li>
              <li><Link href="/sample-class" className="hover:text-primary-400 transition-colors">Sample Class</Link></li>
              <li><Link href="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
              <li><Link href="/recruitment" className="hover:text-primary-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses/iit-jee" className="hover:text-primary-400 transition-colors">IIT-JEE Preparation</Link></li>
              <li><Link href="/courses/neet" className="hover:text-primary-400 transition-colors">NEET Preparation</Link></li>
              <li><Link href="/courses/olympiad" className="hover:text-primary-400 transition-colors">Olympiad Training</Link></li>
              <li><Link href="/courses/foundation" className="hover:text-primary-400 transition-colors">Foundation Courses</Link></li>
              <li><Link href="/blog" className="hover:text-primary-400 transition-colors">Study Resources</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>123 Education Street, Knowledge City, State - 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary-400 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="flex-shrink-0" />
                <a href="mailto:info@iquark.co.in" className="hover:text-primary-400 transition-colors">info@iquark.co.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} iQuark. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

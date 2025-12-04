import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | iQuark",
  description: "iQuark's privacy policy and data protection practices",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: December 2, 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
              <p>
                iQuark ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our 
                website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Personal Information</h3>
              <p>We may collect personal information that you provide to us, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, and phone number</li>
                <li>Academic information (class, board, previous exam scores)</li>
                <li>Course enrollment and payment information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Usage Information</h3>
              <p>We automatically collect certain information about your device and usage patterns:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Browser type and version</li>
                <li>IP address and location data</li>
                <li>Pages visited and time spent</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>To provide and maintain our services</li>
                <li>To process enrollments and payments</li>
                <li>To communicate about courses, schedules, and updates</li>
                <li>To send educational content and study materials</li>
                <li>To improve our website and services</li>
                <li>To respond to inquiries and provide customer support</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share 
                information with:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our website and services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to improve user experience. You can 
                control cookies through your browser settings, but disabling them may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
              <p>
                Our services are designed for students of various ages. We take additional precautions 
                to protect information from users under 18 and obtain parental consent where required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new policy on this page with an updated "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <ul className="list-none space-y-1">
                <li><strong>Email:</strong> privacy@iquark.co.in</li>
                <li><strong>Phone:</strong> +91 98765 43210</li>
                <li><strong>Address:</strong> 123 Education Street, Knowledge City, State - 110001</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

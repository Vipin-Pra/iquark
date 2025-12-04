import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | iQuark",
  description: "Terms and conditions for using iQuark coaching services",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          
          <div className="prose max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: December 2, 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using iQuark's website and services, you accept and agree to be bound 
                by these Terms and Conditions. If you do not agree with any part of these terms, you 
                may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services</h2>
              <p>
                iQuark provides coaching services for competitive examinations including but not limited 
                to IIT-JEE, NEET, and various Olympiads. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Classroom and online coaching</li>
                <li>Study materials and resources</li>
                <li>Regular assessments and mock tests</li>
                <li>Doubt clearing sessions</li>
                <li>Career counseling</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Enrollment and Fees</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3.1 Enrollment</h3>
              <p>
                Enrollment is confirmed only upon payment of the required fees. We reserve the right 
                to refuse admission to any student.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3.2 Fees</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Fees must be paid as per the agreed schedule</li>
                <li>Late payment may result in suspension of services</li>
                <li>Fees are non-transferable to other students</li>
                <li>Fee structure is subject to change with prior notice</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3.3 Refund Policy</h3>
              <p>
                Refunds are available within 15 days of joining, subject to 20% administrative charges. 
                No refunds will be provided after this period except in exceptional circumstances at 
                management's discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Student Responsibilities</h2>
              <p>Students are expected to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Attend classes regularly and punctually</li>
                <li>Complete homework and assignments on time</li>
                <li>Maintain discipline and respect for faculty and peers</li>
                <li>Not engage in any form of malpractice during tests</li>
                <li>Take care of institute property and study materials</li>
                <li>Inform the institute promptly about any extended absence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
              <p>
                All study materials, lectures, videos, and content provided by iQuark are proprietary 
                and protected by copyright laws. Students may not:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Reproduce, distribute, or share materials without permission</li>
                <li>Record lectures or classes without explicit authorization</li>
                <li>Use materials for commercial purposes</li>
                <li>Claim ownership of any iQuark content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Code of Conduct</h2>
              <p>
                We maintain a zero-tolerance policy for harassment, discrimination, or any form of 
                misconduct. Violation may result in immediate termination of enrollment without refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                While we strive for excellent results, iQuark does not guarantee specific exam scores 
                or selections. Success depends on individual effort, aptitude, and various external factors. 
                We are not liable for any direct or indirect damages arising from use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Online Services</h2>
              <p>For online classes and digital services:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Students are responsible for their internet connectivity</li>
                <li>We are not liable for technical issues beyond our control</li>
                <li>Recorded sessions are for personal use only</li>
                <li>Login credentials must not be shared</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Modifications to Services</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of our services at any 
                time. We will provide reasonable notice of significant changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Termination</h2>
              <p>
                We reserve the right to terminate a student's enrollment for serious misconduct, 
                non-payment of fees, or violation of these terms without refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Governing Law</h2>
              <p>
                These terms are governed by the laws of India. Any disputes shall be subject to the 
                exclusive jurisdiction of courts in [Your City].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Changes to Terms</h2>
              <p>
                We may update these Terms and Conditions from time to time. Continued use of our services 
                after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <p>For questions about these Terms and Conditions, contact us:</p>
              <ul className="list-none space-y-1">
                <li><strong>Email:</strong> legal@iquark.co.in</li>
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

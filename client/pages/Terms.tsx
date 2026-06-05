import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function Terms() {
  useSEO({
    title: "Terms of Service | AxifleetX",
    description: "Review the terms and conditions that govern your use of AxifleetX services and website.",
    canonical: "https://axifleetx.com/terms",
  });

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Terms of Service</h1>
            <p className="text-xl text-slate-600">Last updated: January 2024</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-600 leading-relaxed">
                  By accessing and using the AxifleetX website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use License</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on AxifleetX's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Disclaimer</h2>
                <p className="text-slate-600 leading-relaxed">
                  The materials on AxifleetX's website are provided on an 'as is' basis. AxifleetX makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitations</h2>
                <p className="text-slate-600 leading-relaxed">
                  In no event shall AxifleetX or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AxifleetX's website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Accuracy of Materials</h2>
                <p className="text-slate-600 leading-relaxed">
                  The materials appearing on AxifleetX's website could include technical, typographical, or photographic errors. AxifleetX does not warrant that any of the materials on its website are accurate, complete, or current. AxifleetX may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact Us</h2>
                <p className="text-slate-600 leading-relaxed">
                  If you have questions about these Terms of Service, please contact us at legal@axifleetx.com.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

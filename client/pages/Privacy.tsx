import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function Privacy() {
  useSEO({
    title: "Privacy Policy | AxifleetX",
    description: "Read our comprehensive privacy policy to understand how AxifleetX collects, uses, and protects your personal data.",
    canonical: "https://axifleetx.com/privacy",
  });

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-slate-600">Last updated: January 2024</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p className="text-slate-600 leading-relaxed">
                  AxifleetX ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process personal information in connection with our website and services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Create an account or profile</li>
                  <li>Contact us for support or inquiries</li>
                  <li>Fill out forms or surveys</li>
                  <li>Subscribe to newsletters or updates</li>
                  <li>Make transactions or payments</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-slate-600 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about updates and promotions</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraudulent or unauthorized access</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
                <p className="text-slate-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
                <p className="text-slate-600 leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or export your data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact Us</h2>
                <p className="text-slate-600 leading-relaxed">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at privacy@axifleetx.com.
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

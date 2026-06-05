import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { CheckCircle } from "lucide-react";

export default function Compliance() {
  useSEO({
    title: "Compliance | AxifleetX",
    description: "AxifleetX maintains compliance with industry standards, regulations, and best practices to ensure customer safety and data protection.",
    canonical: "https://axifleetx.com/compliance",
  });

  const complianceItems = [
    "GDPR Compliance",
    "CCPA Compliance",
    "ISO 27001 Certification",
    "SOC 2 Type II",
    "HIPAA Compliance",
    "PCI DSS Compliance",
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Compliance & Standards</h1>
            <p className="text-xl text-slate-600">AxifleetX is committed to maintaining the highest standards of compliance and regulatory adherence.</p>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Certifications & Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-electric flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Privacy Regulations</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  AxifleetX is fully compliant with major data privacy regulations including:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong>GDPR:</strong> General Data Protection Regulation compliance for EU residents</li>
                  <li><strong>CCPA:</strong> California Consumer Privacy Act compliance for California residents</li>
                  <li><strong>LGPD:</strong> Brazilian data protection law compliance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Security Standards</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our information security practices align with internationally recognized standards:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong>ISO 27001:</strong> Information security management system certification</li>
                  <li><strong>SOC 2 Type II:</strong> Service Organization Control audit compliance</li>
                  <li><strong>PCI DSS:</strong> Payment Card Industry Data Security Standard compliance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Industry Compliance</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Depending on your industry, AxifleetX maintains compliance with:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong>HIPAA:</strong> For healthcare data privacy</li>
                  <li><strong>FINRA:</strong> Financial Industry Regulatory Authority standards</li>
                  <li><strong>SOX:</strong> Sarbanes-Oxley Act compliance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Audit & Assessment</h2>
                <p className="text-slate-600 leading-relaxed">
                  We undergo regular third-party audits and security assessments to verify compliance and identify areas for continuous improvement. Our compliance posture is regularly reviewed and updated to meet evolving regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions About Compliance?</h2>
            <p className="text-slate-600 mb-6">
              For compliance-related inquiries and documentation, please contact our compliance team.
            </p>
            <a href="/get-started" className="inline-block px-8 py-3 bg-electric hover:bg-electric-dark text-white rounded-lg font-semibold transition-colors">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

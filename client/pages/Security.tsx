import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { Shield, Lock, Eye, AlertCircle } from "lucide-react";

export default function Security() {
  useSEO({
    title: "Security | AxifleetX",
    description: "Learn about AxifleetX's comprehensive security measures and best practices to protect your data.",
    canonical: "https://axifleetx.com/security",
  });

  const securityFeatures = [
    {
      icon: Lock,
      title: "Data Encryption",
      description: "All data in transit and at rest is encrypted using industry-standard protocols.",
    },
    {
      icon: Shield,
      title: "Access Control",
      description: "Multi-factor authentication and role-based access control protect your accounts.",
    },
    {
      icon: Eye,
      title: "Monitoring",
      description: "24/7 security monitoring and threat detection across all systems.",
    },
    {
      icon: AlertCircle,
      title: "Incident Response",
      description: "Rapid response protocols to address any security incidents or threats.",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-red-50 to-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Security at AxifleetX</h1>
            <p className="text-xl text-slate-600">We take your security seriously. Learn about our comprehensive security measures.</p>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Security Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="p-6 border border-slate-200 rounded-lg hover:border-electric transition-colors">
                    <Icon className="w-8 h-8 text-electric mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Security Commitments</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Data Protection</h3>
                <p className="text-slate-600 leading-relaxed">
                  We implement comprehensive data protection measures including encryption, secure transmission protocols, and regular security audits to ensure your information remains safe.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Compliance</h3>
                <p className="text-slate-600 leading-relaxed">
                  AxifleetX complies with industry-leading security standards and regulations to maintain the highest level of data protection for our users.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Transparency</h3>
                <p className="text-slate-600 leading-relaxed">
                  We believe in transparent communication about security practices and promptly notify users of any potential security issues that may affect them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Continuous Improvement</h3>
                <p className="text-slate-600 leading-relaxed">
                  We continuously update and improve our security infrastructure to protect against emerging threats and vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Report Security Issue */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Report a Security Issue</h2>
            <p className="text-slate-600 mb-6">
              If you discover a security vulnerability, please email us at security@axifleetx.com with detailed information.
            </p>
            <p className="text-sm text-slate-500">
              Please do not publicly disclose the issue until we have had a chance to address it.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

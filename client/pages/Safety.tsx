import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function Safety() {
  useSEO({
    title: "Business Intelligence & Dashboard Development | AxifleetX",
    description: "Create powerful dashboards and BI solutions that help organizations monitor performance and make informed decisions.",
    canonical: "https://axifleetx.com/safety",
  });
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-red-50 to-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Engineered for Extreme Environments. Built for Absolute Safety.
            </h1>
            <p className="text-xl text-slate-600">
              Military-grade safety standards meet real-world operational reliability.
            </p>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Advanced Safety Architecture</h2>
            <div className="space-y-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Predictive Thermal Management</h3>
                <p className="text-slate-600 mb-4">
                  AxiSense BMS (Battery Management System) predicts thermal events days before they happen. Advanced AI algorithms monitor battery health continuously.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Real-time temperature monitoring</li>
                  <li>✓ Predictive failure prevention</li>
                  <li>✓ Automatic thermal throttling</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Military-Grade Swap Cabinets</h3>
                <p className="text-slate-600 mb-4">
                  Automated fire-suppression and surge protection in every battery swap station.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Automated fire suppression system</li>
                  <li>✓ Multi-level surge protection</li>
                  <li>✓ Redundant safety interlocks</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">IP67 Weatherproofing</h3>
                <p className="text-slate-600 mb-4">
                  Hermetically sealed against Indian monsoons and localized flooding. Fully waterproof and dustproof design.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ IP67 rated sealed enclosures</li>
                  <li>✓ Monsoon-tested reliability</li>
                  <li>✓ Flood-resistant battery housings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Stats */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Safety by the Numbers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <div className="text-4xl font-bold text-electric mb-2">99.9%</div>
                <p className="text-slate-600 font-semibold">Thermal Event Prevention Rate</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <div className="text-4xl font-bold text-electric mb-2">Zero</div>
                <p className="text-slate-600 font-semibold">Fire Incidents on Record</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <div className="text-4xl font-bold text-electric mb-2">IP67</div>
                <p className="text-slate-600 font-semibold">Weatherproofing Rating</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

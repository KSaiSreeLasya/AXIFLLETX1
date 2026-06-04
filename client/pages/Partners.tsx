import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Partners() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Join the Zero-Emission Network
            </h1>
            <p className="text-xl text-slate-600">
              Build your business on the AxifleetX platform and scale sustainably.
            </p>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Partnership Opportunities</h2>
            <div className="space-y-8">
              {/* Real Estate & Infrastructure */}
              <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Real Estate & Infrastructure Host</h3>
                    <p className="text-slate-600 mb-4">
                      Monetize your space by hosting a Battery Swap Cabinet. Generate recurring revenue from idle real estate.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li>✓ Premium location incentives</li>
                      <li>✓ Recurring monthly revenue</li>
                      <li>✓ Minimal maintenance required</li>
                      <li>✓ Brand association with sustainability</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certified Service Partner */}
              <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Certified Service Partner</h3>
                    <p className="text-slate-600 mb-4">
                      Guaranteed, high-volume mechanical work driven by predictive BMS alerts. Build a sustainable service business.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li>✓ Steady, predictable workload</li>
                      <li>✓ Training and certification provided</li>
                      <li>✓ Premium service margins</li>
                      <li>✓ Technical support from AxifleetX</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Franchise & City Operator */}
              <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Franchise & City Operator</h3>
                    <p className="text-slate-600 mb-4">
                      Bring AxifleetX to new markets using our proven hardware/software playbook. Scale rapidly with enterprise support.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li>✓ Exclusive territory rights</li>
                      <li>✓ Complete playbook & operations manual</li>
                      <li>✓ Technology & platform support</li>
                      <li>✓ Significant growth potential</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Why Partner with AxifleetX?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Market-Leading Technology</h3>
                <p className="text-slate-600">Access our proprietary BMS, AI-driven fleet management, and edge computing platform.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Growing Demand</h3>
                <p className="text-slate-600">Zero-emission logistics is the fastest-growing segment in modern supply chains.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Strong Support</h3>
                <p className="text-slate-600">Dedicated partner success team, training, and continuous technical assistance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Sustainability Mission</h3>
                <p className="text-slate-600">Be part of the energy transition and build a business that matters.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-electric/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Become an AxifleetX Partner</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Partner with us to build the future of zero-emission logistics. Multiple partnership models available to suit your business.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
              className="px-8 py-3 bg-electric hover:bg-electric-dark text-white rounded-lg font-medium transition-colors"
            >
              Explore Partnership Options
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

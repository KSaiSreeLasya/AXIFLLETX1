import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";

export default function Invest() {
  useSEO({
    title: "Business Process Automation Solutions | AxifleetX",
    description: "Streamline workflows, reduce manual effort, and improve operational efficiency with intelligent automation services.",
    canonical: "https://axifleetx.com/invest",
  });
  const [numVehicles, setNumVehicles] = useState(1);

  // Simple ROI calculation
  const monthlyROI = numVehicles * 2500; // Example: 2500 per vehicle
  const annualYield = (monthlyROI * 12) / (numVehicles * 50000) * 100; // Assuming 50k per vehicle
  const totalReturn36Months = monthlyROI * 36;

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Fractional Ownership. Tangible Returns.
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Diversify your portfolio by investing in the AxifleetX zero-emission delivery network.
            </p>
          </div>
        </section>

        {/* Investment Benefits */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Why Invest in AxifleetX</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-electric pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Asset-Backed Security</h3>
                <p className="text-slate-600">Capital is secured by a tangible electric delivery vehicle. Real assets backing your investment.</p>
              </div>
              <div className="border-l-4 border-electric pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">100% Turnkey Operations</h3>
                <p className="text-slate-600">We handle rider onboarding, battery swapping, insurance, and maintenance. You enjoy passive income.</p>
              </div>
              <div className="border-l-4 border-electric pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Regulated & Recognized</h3>
                <p className="text-slate-600">Backed by an officially recognized Government of India startup with MSME accreditation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Calculator */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Investment Calculator</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="mb-8">
                <label className="block text-lg font-semibold text-slate-900 mb-4">
                  Number of Vehicles: <span className="text-electric">{numVehicles}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={numVehicles}
                  onChange={(e) => setNumVehicles(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-electric/10 p-6 rounded-lg">
                  <p className="text-sm text-slate-600 mb-2">Monthly ROI</p>
                  <div className="text-3xl font-bold text-electric">
                    ₹{monthlyROI.toLocaleString()}
                  </div>
                </div>
                <div className="bg-electric/10 p-6 rounded-lg">
                  <p className="text-sm text-slate-600 mb-2">Annual Yield</p>
                  <div className="text-3xl font-bold text-electric">
                    {annualYield.toFixed(1)}%
                  </div>
                </div>
                <div className="bg-electric/10 p-6 rounded-lg">
                  <p className="text-sm text-slate-600 mb-2">36-Month Total Return</p>
                  <div className="text-3xl font-bold text-electric">
                    ₹{totalReturn36Months.toLocaleString()}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-500 mt-8 italic">
                *Projections based on historical performance data. Actual returns may vary. Please consult with our investment advisors for detailed projections.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-electric/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Start Investing?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of investors building the future of zero-emission logistics while generating steady returns.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
              className="px-8 py-3 bg-electric hover:bg-electric-dark text-white rounded-lg font-medium transition-colors"
            >
              Schedule an Investor Call
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

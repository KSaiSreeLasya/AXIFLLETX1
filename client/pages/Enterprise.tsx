import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function Enterprise() {
  useSEO({
    title: "AI & Data Analytics Services | AxifleetX",
    description: "Explore AI development, predictive analytics, automation, dashboard creation, and digital transformation services tailored to your business goals.",
    canonical: "https://axifleetx.com/enterprise",
  });
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Precision Mobility for the Zero-Emission Supply Chain
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Premium e-scooter leasing and intelligent fleet management engineered to decarbonize last-mile delivery, fast commerce, and corporate logistics.
            </p>
          </div>
        </section>

        {/* The Green Mile Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">The Green Mile (ESG)</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Eradicating Scope 3 Emissions</h3>
                    <p className="text-slate-600">Replace diesel last-mile fleets with zero-emission alternatives.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Automated Carbon Accounting</h3>
                    <p className="text-slate-600">Real-time tracking and reporting of carbon offsets for corporate ESG goals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Circular Battery Lifecycle</h3>
                    <p className="text-slate-600">Sustainable battery management with full recycling and refurbishment programs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Enterprise Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Operational Efficiency</h3>
                <p className="text-slate-600">Streamline your last-mile logistics with intelligent fleet management and predictive maintenance.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Cost Optimization</h3>
                <p className="text-slate-600">Reduce operational costs through leasing models and predictive maintenance alerts.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Regulatory Compliance</h3>
                <p className="text-slate-600">Meet emission standards and sustainability targets with our certified zero-emission fleet.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Scale Rapidly</h3>
                <p className="text-slate-600">Expand operations across cities without capital investment in vehicle procurement.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

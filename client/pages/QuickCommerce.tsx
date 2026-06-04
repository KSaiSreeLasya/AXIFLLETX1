import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function QuickCommerce() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              The Backbone of the 10-Minute City
            </h1>
            <p className="text-xl text-slate-600">
              Built for ultra-fast delivery with extreme reliability and operational excellence.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Hyperlocal Logistics Features</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-electric pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Sub-60 Second Swaps</h3>
                <p className="text-slate-600">Ergonomic battery architecture to keep delivery SLAs flawless. Swap a dead battery in under 60 seconds and get back on the road.</p>
              </div>
              <div className="border-l-4 border-electric pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">High-Torque Payload Tuning</h3>
                <p className="text-slate-600">Motor controllers software-tuned for heavy groceries and double-stacked orders. Designed to handle the weight demands of quick commerce.</p>
              </div>
              <div className="border-l-4 border-electric pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Geo-Fenced Speed Governance</h3>
                <p className="text-slate-600">Native telematics automatically limit speeds in residential zones. Safety-first approach with intelligent zone-based speed control.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Why Quick Commerce Riders Choose AxifleetX</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 text-center">
                <div className="text-4xl font-bold text-electric mb-2">60s</div>
                <p className="text-slate-600">Average Battery Swap Time</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 text-center">
                <div className="text-4xl font-bold text-electric mb-2">150kg+</div>
                <p className="text-slate-600">Payload Capacity</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 text-center">
                <div className="text-4xl font-bold text-electric mb-2">50+</div>
                <p className="text-slate-600">Cities Deployed</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

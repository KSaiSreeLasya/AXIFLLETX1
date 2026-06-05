import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, Zap, Shield, Bike, Users, TrendingUp, Network } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const heroBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroBgRef.current) {
        const rect = heroBgRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleOpenContactForm = () => {
      setContactFormOpen(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("openContactForm", handleOpenContactForm);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("openContactForm", handleOpenContactForm);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
          </div>

          <div
            ref={heroBgRef}
            className="relative"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,180,219,0.1) 0%, transparent 50%)`,
              transition: "background-image 0.1s ease-out",
            }}
          >
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-electric/10 text-electric font-semibold text-sm border border-electric/20">
                  ⚡ The Future of Zero-Emission Logistics
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight max-w-4xl">
                Precision Mobility for the
                <span className="block bg-gradient-to-r from-electric to-blue-500 bg-clip-text text-transparent">
                  Zero-Emission Supply Chain
                </span>
              </h1>

              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Premium e-scooter leasing and intelligent fleet management engineered to
                decarbonize last-mile delivery, fast commerce, and corporate logistics.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <button onClick={() => setContactFormOpen(true)} className="px-8 py-4 bg-electric hover:bg-electric-dark text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-electric/30 group">
                  Start Your Fleet Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => setContactFormOpen(true)} className="px-8 py-4 border-2 border-slate-300 hover:border-electric text-slate-900 rounded-lg font-semibold transition-all">
                  Watch Demo
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-12 flex flex-col md:flex-row gap-8 md:gap-12">
                {[
                  { label: "Vehicles Deployed", value: "5,000+" },
                  { label: "Daily Operations", value: "50+ Cities" },
                  { label: "Carbon Offset", value: "2.5M kg" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="animate-fade-in"
                    style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                  >
                    <p className="text-3xl font-bold text-electric">{stat.value}</p>
                    <p className="text-slate-600 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Green Mile Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Eradicating Scope 3 Emissions",
                description: "Direct integration with your supply chain to eliminate emissions from last-mile delivery.",
              },
              {
                icon: TrendingUp,
                title: "Automated Carbon Accounting",
                description: "Real-time ESG reporting and emissions tracking for regulatory compliance.",
              },
              {
                icon: Bike,
                title: "Circular Battery Lifecycle",
                description: "Zero-waste battery ecosystem with industry-leading recycling programs.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group p-8 rounded-xl bg-white border border-slate-200 hover:border-electric hover:shadow-xl transition-all animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center group-hover:bg-electric group-hover:text-white transition-colors mb-4">
                    <Icon className="w-6 h-6 text-electric group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Commerce Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                The Backbone of the
                <span className="block text-electric">10-Minute City</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Purpose-built for hyperlocal logistics and fast commerce. Our vehicles achieve sub-60 second battery swaps with ergonomic architecture that keeps delivery SLAs flawless.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Sub-60 Second Swaps: Lightning-fast battery architecture",
                  "High-Torque Payload Tuning: 150kg+ capacity",
                  "Geo-Fenced Speed Governance: Native telematics",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 animate-slide-in-right"
                    style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-electric text-white flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">
                      ✓
                    </div>
                    <p className="text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-electric to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white flex items-center justify-center min-h-96">
                <div className="text-center">
                  <Bike className="w-20 h-20 mx-auto mb-4 animate-pulse" />
                  <p className="text-xl font-semibold">3D Scooter Visualization</p>
                  <p className="text-sm text-slate-400 mt-2">Interactive model coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Engineered for Extreme Environments.
              <span className="block text-electric">Built for Absolute Safety.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Military-grade thermal management and predictive failure detection for zero downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Predictive Thermal Management",
                description: "AxiSense BMS predicts thermal events days before they happen.",
              },
              {
                icon: Zap,
                title: "Military-Grade Swap Cabinets",
                description: "Automated fire-suppression and surge protection in every station.",
              },
              {
                icon: TrendingUp,
                title: "IP67 Weatherproofing",
                description: "Hermetically sealed against monsoons and localized flooding.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-xl bg-white/10 border border-white/20 hover:border-electric hover:bg-white/15 transition-all backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-electric/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-electric" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rider App Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-electric to-green-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white flex items-center justify-center min-h-96">
                <div className="text-center">
                  <Bike className="w-20 h-20 mx-auto mb-4 animate-bounce" />
                  <p className="text-xl font-semibold">Rider App Demo</p>
                  <p className="text-sm text-slate-400 mt-2">Mobile experience showcase</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Own Your Hustle.
                <span className="block text-electric">Electrify Your Ride.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Zero upfront capital. Unlimited battery swaps. Zero maintenance costs. Platform ready for Swiggy, Zepto, and Blinkit integration.
              </p>

              <div className="space-y-3 pt-4">
                {[
                  "Zero Upfront Capital",
                  "Unlimited Battery Swaps",
                  "Zero Maintenance Costs",
                  "Platform Ready (Swiggy, Zepto, Blinkit)",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 animate-slide-in-right"
                    style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-electric"></div>
                    <p className="text-slate-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Fractional Ownership.
              <span className="block text-electric">Tangible Returns.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Diversify your portfolio by investing in the AxifleetX zero-emission delivery network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Asset-Backed Security",
                  description: "Capital is secured by a tangible electric delivery vehicle.",
                },
                {
                  title: "100% Turnkey Operations",
                  description:
                    "We handle rider onboarding, battery swapping, insurance, and maintenance.",
                },
                {
                  title: "Regulated & Recognized",
                  description:
                    "Backed by an officially recognized Government of India startup with MSME accreditation.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg border border-slate-200 hover:border-electric hover:shadow-lg transition-all animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="relative group animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-electric to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Investment Calculator</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Number of Vehicles
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      defaultValue="10"
                      className="w-full accent-electric"
                    />
                    <p className="text-right text-lg font-semibold text-electric mt-2">
                      10 Vehicles
                    </p>
                  </div>

                  <div className="border-t border-slate-700 pt-6 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Monthly ROI</span>
                      <span className="font-semibold text-electric">₹15,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Annual Yield</span>
                      <span className="font-semibold text-electric">12-18%</span>
                    </div>
                    <div className="flex justify-between bg-electric/10 p-3 rounded border border-electric/20">
                      <span className="text-slate-200 font-medium">
                        36-Month Total Return
                      </span>
                      <span className="font-bold text-electric">₹5,40,000</span>
                    </div>
                  </div>

                  <button onClick={() => setContactFormOpen(true)} className="w-full mt-6 px-4 py-3 bg-electric hover:bg-electric-dark text-white rounded-lg font-semibold transition-colors">
                    Invest Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Ecosystem Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join the Zero-Emission Network
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Multiple partnership models to grow with AxifleetX.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                title: "Real Estate & Infrastructure Host",
                description: "Monetize space by hosting a Battery Swap Cabinet.",
              },
              {
                icon: Shield,
                title: "Certified Service Partner",
                description:
                  "Guaranteed, high-volume mechanical work driven by predictive BMS alerts.",
              },
              {
                icon: Users,
                title: "Franchise & City Operator",
                description: "Bring AxifleetX to new markets using our hardware/software playbook.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-xl bg-white/10 border border-white/20 hover:border-electric hover:bg-white/15 transition-all backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-electric/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-electric" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Institutional Investor Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-electric/10 to-blue-500/10 border border-electric/30 rounded-2xl p-12 md:p-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Accelerating the Energy Transition
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl leading-relaxed mb-8">
              Growth trajectory of 200%+ YoY. Rigorous corporate governance. Proprietary scalable tech stack. Officially recognized Government of India startup with MSME accreditation.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Funding Raised", value: "$10M+" },
                { label: "Growth Rate", value: "200% YoY" },
                { label: "Team Size", value: "150+ experts" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-lg border border-slate-200 animate-fade-in"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <p className="text-slate-600 text-sm font-medium mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-electric">{stat.value}</p>
                </div>
              ))}
            </div>

            <button onClick={() => setContactFormOpen(true)} className="mt-8 px-8 py-4 bg-electric hover:bg-electric-dark text-white rounded-lg font-semibold transition-colors flex items-center gap-2 group">
              Investor Relations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-electric to-blue-500 opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up">
            Ready to Electrify Your Supply Chain?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Join 5,000+ vehicles transforming last-mile delivery across 50+ cities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <button onClick={() => setContactFormOpen(true)} className="px-8 py-4 bg-electric hover:bg-electric-dark text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-electric/30 flex items-center justify-center gap-2 group">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => setContactFormOpen(true)} className="px-8 py-4 border-2 border-slate-300 hover:border-electric text-slate-900 rounded-lg font-semibold transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-600 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img src="https://cdn.builder.io/api/v1/image/assets%2Fe8b0f34e11e04fd5ad5fe77ca26e5a4c%2F73c13c7590b84504a1759227685c255e?format=webp&width=800&height=1200" alt="AxifleetX" className="w-14 h-14 flex-shrink-0" />
              </div>
              <p className="text-slate-600 text-sm">
                Precision Mobility for the Zero-Emission Supply Chain.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: [
                  "Enterprise Leasing",
                  "Quick Commerce",
                  "Safety Tech",
                  "Hardware",
                ],
              },
              {
                title: "Invest",
                links: [
                  "Fractional Ownership",
                  "Partnership",
                  "Investors",
                  "Careers",
                ],
              },
              {
                title: "Learn",
                links: ["Documentation", "Blog", "Case Studies", "FAQ"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "Compliance"],
              },
            ].map((col, i) => (
              <div key={i}>
                <h3 className="font-semibold mb-4 text-slate-900">{col.title}</h3>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="text-slate-600 hover:text-electric transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
            <p>© 2024 AxifleetX. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-600 hover:text-electric transition-colors">
                Twitter
              </a>
              <a href="#" className="text-slate-600 hover:text-electric transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-slate-600 hover:text-electric transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ContactForm isOpen={contactFormOpen} onClose={() => setContactFormOpen(false)} />
    </div>
  );
}

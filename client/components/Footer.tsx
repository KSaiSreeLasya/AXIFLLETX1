import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-electric to-electric-dark rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">Axi</span>
              </div>
              <span className="font-bold text-lg text-white">AxifleetX</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Precision mobility for the zero-emission supply chain.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-electric transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-slate-400 hover:text-electric transition-colors text-sm">
                  Enterprise Leasing
                </Link>
              </li>
              <li>
                <Link to="/quick-commerce" className="text-slate-400 hover:text-electric transition-colors text-sm">
                  Quick Commerce
                </Link>
              </li>
              <li>
                <Link to="/invest" className="text-slate-400 hover:text-electric transition-colors text-sm">
                  Fractional Ownership
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/partners" className="text-slate-400 hover:text-electric transition-colors text-sm">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-slate-400 hover:text-electric transition-colors text-sm">
                  Safety & Compliance
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-electric transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-electric transition-colors text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-electric transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-electric transition-colors text-sm">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-electric transition-colors text-sm">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-electric transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-6">Get in Touch</h4>
            <Link
              to="/get-started"
              className="block w-full px-4 py-2 bg-electric hover:bg-electric-dark text-white rounded-lg font-medium transition-colors text-sm mb-4 text-center"
            >
              Get Started
            </Link>
            <p className="text-xs text-slate-400">
              Have questions? Our team is here to help.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">
              © 2024 AxifleetX. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="text-slate-400 hover:text-electric transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-electric transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-electric transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

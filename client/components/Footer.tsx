import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-electric to-electric-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Axi</span>
              </div>
              <span className="font-bold text-lg text-white">AxifleetX</span>
            </Link>
            <p className="text-sm">Precision mobility for the zero-emission supply chain.</p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/enterprise" className="hover:text-electric transition-colors">
                  Enterprise Leasing
                </Link>
              </li>
              <li>
                <Link to="/quick-commerce" className="hover:text-electric transition-colors">
                  Quick Commerce
                </Link>
              </li>
              <li>
                <Link to="/invest" className="hover:text-electric transition-colors">
                  Fractional Ownership
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/partners" className="hover:text-electric transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-electric transition-colors">
                  Safety
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
                  className="hover:text-electric transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © 2024 AxifleetX. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-slate-400 hover:text-electric transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-electric transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

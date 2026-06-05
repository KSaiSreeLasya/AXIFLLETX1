import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 mt-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
              <img src="https://cdn.builder.io/api/v1/image/assets%2Fe8b0f34e11e04fd5ad5fe77ca26e5a4c%2F73c13c7590b84504a1759227685c255e?format=webp&width=800&height=1200" alt="AxifleetX" className="w-20 h-20 flex-shrink-0" />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              Precision mobility for the zero-emission supply chain.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-slate-900 font-semibold text-sm uppercase tracking-wide mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/enterprise" className="text-slate-600 hover:text-electric transition-colors text-sm">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link to="/quick-commerce" className="text-slate-600 hover:text-electric transition-colors text-sm">
                  Quick Commerce
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-slate-600 hover:text-electric transition-colors text-sm">
                  Safety
                </Link>
              </li>
              <li>
                <Link to="/invest" className="text-slate-600 hover:text-electric transition-colors text-sm">
                  Invest
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-slate-900 font-semibold text-sm uppercase tracking-wide mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/partners" className="text-slate-600 hover:text-electric transition-colors text-sm">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/get-started" className="text-slate-600 hover:text-electric transition-colors text-sm">
                  Get Started
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-electric transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-electric transition-colors text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-slate-900 font-semibold text-sm uppercase tracking-wide mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-slate-600 hover:text-electric transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-600 hover:text-electric transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-slate-600 hover:text-electric transition-colors text-sm">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-slate-600 hover:text-electric transition-colors text-sm">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 font-semibold text-sm uppercase tracking-wide mb-6">Get in Touch</h4>
            <Link
              to="/get-started"
              className="block w-full px-4 py-2 bg-electric hover:bg-electric-dark text-white rounded-lg font-medium transition-colors text-sm mb-4 text-center"
            >
              Get Started
            </Link>
            <p className="text-xs text-slate-600">
              Have questions? Our team is here to help.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-600">
              © 2024 AxifleetX. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <Link to="/privacy" className="text-slate-600 hover:text-electric transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-600 hover:text-electric transition-colors">
                Terms of Service
              </Link>
              <Link to="/security" className="text-slate-600 hover:text-electric transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

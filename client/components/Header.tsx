import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Enterprise", href: "/" },
    { label: "Quick Commerce", href: "/" },
    { label: "Safety", href: "/" },
    { label: "Hardware", href: "/" },
    { label: "Invest", href: "/" },
    { label: "Partners", href: "/" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-electric to-electric-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Axi</span>
            </div>
            <span className="font-bold text-lg text-slate-900">AxifleetX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-electric transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
              Login
            </button>
            <button className="px-6 py-2 bg-electric hover:bg-electric-dark text-white rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-slate-600 hover:text-electric py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
              <button className="w-full px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-electric hover:bg-electric-dark text-white rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-electric to-blue-500 bg-clip-text text-transparent">
              404
            </h1>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Page not found
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            The page you're looking for doesn't exist yet. Head back to explore
            AxifleetX.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric-dark text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-electric/30 group"
          >
            Back to Home
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

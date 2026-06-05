import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";

export default function GetStarted() {
  useSEO({
    title: "Get Started with AxifleetX | AI & Analytics Solutions",
    description: "Start your digital transformation journey with AxifleetX. Get in touch with our experts for AI development, analytics consulting, automation, and digital transformation solutions.",
    canonical: "https://axifleetx.com/get-started",
  });
  const [formData, setFormData] = useState({
    company_name: "",
    contact_person: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postal_code: "",
    company_type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

      const response = await fetch(`${supabaseUrl}/rest/v1/contact_form_submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseKey}`,
          apikey: supabaseKey,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setFormData({
        company_name: "",
        contact_person: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
        company_type: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-20 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get Started with AxifleetX
            </h1>
            <p className="text-lg text-slate-600">
              Join hundreds of companies transforming their logistics with zero-emission solutions.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            {submitted && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">
                  ✓ Thank you! Your request has been submitted successfully. Our team will contact you soon.
                </p>
              </div>
            )}

            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-semibold">Error: {error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="border-b pb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Company Information</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contact_person"
                      value={formData.contact_person}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company Type *
                    </label>
                    <select
                      name="company_type"
                      value={formData.company_type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric"
                    >
                      <option value="">Select company type</option>
                      <option value="logistics">Logistics & Delivery</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="foodtech">Food Tech / Quick Commerce</option>
                      <option value="corporat">Corporate</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="border-b pb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Contact Details</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric"
                      placeholder="Street address"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric"
                        placeholder="City"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        State/Province *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric"
                        placeholder="State"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        name="postal_code"
                        value={formData.postal_code}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric"
                        placeholder="Postal code"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="border-b pb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Additional Information</h2>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric"
                    placeholder="Tell us about your logistics needs and how AxifleetX can help..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-electric hover:bg-electric-dark text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
                <button
                  type="reset"
                  className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg font-medium transition-colors"
                >
                  Clear Form
                </button>
              </div>

              <p className="text-sm text-slate-500">
                * Required fields. We'll use your information to contact you about our services.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

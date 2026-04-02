import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Our Office",
    value: "No. 396/3, Galle Road, Thalpitiya, Wadduwa, Sri Lanka",
    href: "https://maps.google.com/?q=Thalpitiya+Wadduwa+Sri+Lanka",
    linkText: "Get directions →",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 XX XXX XXXX",
    href: "tel:+94XXXXXXXXX",
    linkText: "Call now →",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@tdlhomeland.lk",
    href: "mailto:info@tdlhomeland.lk",
    linkText: "Send email →",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: "https://wa.me/94XXXXXXXXX",
    linkText: "Open WhatsApp →",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Sat: 8:00 AM – 6:00 PM",
    href: null,
    linkText: null,
  },
];

const interests = [
  "Buying a House",
  "Buying Land",
  "Selling Property",
  "Construction Services",
  "Property Valuation",
  "General Inquiry",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", interest: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with real API later
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-slate-950 py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 text-xs font-medium tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-slate-400 text-lg max-w-md">
            Reach out for a free consultation, property viewing, or any question — we respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left - Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="section-tag text-emerald-600">Direct Contact</p>
                <h2 className="font-serif text-3xl font-semibold text-slate-900 mb-3">
                  We'd love to hear from you
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Visit us at our Galle Road office, call us directly, or send a message and we'll get back to you the same day.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-cyan-200 transition-all hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-slate-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-slate-500 mb-1">{item.label}</p>
                      <p className="text-slate-800">{item.value}</p>
                      {item.href && item.linkText && (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-cyan-600 hover:text-cyan-700 text-sm font-medium mt-2 inline-block"
                        >
                          {item.linkText}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/94XXXXXXXXX?text=Hi%20TDL%20Home%20Land%2C%20I%27d%20like%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1da851] text-white py-4 rounded-2xl text-sm font-semibold transition-all"
              >
                <MessageCircle size={18} fill="white" stroke="none" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="min-h-[480px] flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-3xl p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                    <CheckCircle2 size={42} className="text-emerald-600" />
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-slate-900 mb-3">
                    Message Received!
                  </h3>
                  <p className="text-slate-600 max-w-xs leading-relaxed">
                    Thank you, <strong>{form.name}</strong>. We'll get back to you within 24 hours. 
                    For urgent enquiries, please WhatsApp us directly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", email: "", interest: "", message: "" });
                    }}
                    className="mt-8 btn-outline px-8 py-3"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-slate-50 border border-slate-200 rounded-3xl p-10 space-y-6"
                >
                  <div>
                    <p className="section-tag text-cyan-600">Send a Message</p>
                    <h2 className="font-serif text-3xl font-semibold text-slate-900">
                      Free Consultation Request
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Eg: Chamara Perera"
                        className="w-full px-5 py-3 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+94 77 XXX XXXX"
                        className="w-full px-5 py-3 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-5 py-3 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      I'm Interested In <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {interests.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setForm({ ...form, interest: item })}
                          className={`py-3 px-4 rounded-2xl text-sm font-medium border transition-all ${
                            form.interest === item
                              ? "bg-cyan-600 text-white border-cyan-600"
                              : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your requirements — budget, location preference, type of property..."
                      className="w-full px-5 py-3 bg-white border border-slate-300 rounded-3xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !form.name || !form.phone || !form.interest}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="mb-8">
            <p className="section-tag text-cyan-600">Our Location</p>
            <h2 className="font-serif text-3xl font-semibold text-slate-900">Find Us on the Map</h2>
          </div>
          
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <iframe
              title="TDL Home Land Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5!2d79.9200!3d6.6300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzcnNDguMCJOIDc5wrA1NScxMi4wIkU!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
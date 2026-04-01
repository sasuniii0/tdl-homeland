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
    // Simulate submission — replace with real API/EmailJS/Formspree call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-forest-800 py-14 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl font-bold text-white mb-2">
            Contact Us
          </h1>
          <p className="text-forest-300 text-sm max-w-md">
            Reach out for a free consultation, property viewing, or any
            question — we respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — contact info */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <p className="section-tag">Direct Contact</p>
                <h2 className="font-serif text-2xl font-semibold text-forest-800 mb-2">
                  We'd love to hear from you
                </h2>
                <p className="text-forest-500 text-sm leading-relaxed">
                  Visit us at our Galle Road office, call us directly, or send a
                  message and we'll get back to you the same day.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 bg-sand-50 border border-sand-200
                               rounded-xl p-4 hover:border-forest-200 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-forest-100 flex items-center justify-center flex-shrink-0">
                      <item.icon size={15} className="text-forest-700" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-forest-500 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-forest-800">{item.value}</p>
                      {item.href && item.linkText && (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-xs text-gold-600 hover:text-gold-700 font-medium mt-1 inline-block"
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
                className="flex items-center justify-center gap-3 w-full
                           bg-[#25D366] hover:bg-[#1da851] text-white
                           py-3.5 rounded-xl text-sm font-medium transition-colors"
              >
                <MessageCircle size={17} fill="white" stroke="none" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full min-h-[420px] flex flex-col items-center justify-center
                                bg-forest-50 border border-forest-100 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-forest-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-forest-800 mb-3">
                    Message Received!
                  </h3>
                  <p className="text-forest-500 text-sm max-w-xs leading-relaxed mb-6">
                    Thank you, <strong className="text-forest-700">{form.name}</strong>. We'll
                    get back to you within 24 hours. For urgent enquiries, please WhatsApp us directly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",interest:"",message:"" }); }}
                    className="btn-outline-dark text-sm px-6 py-2.5"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-sand-50 border border-sand-200 rounded-2xl p-8 space-y-5"
                >
                  <div>
                    <p className="section-tag">Send a Message</p>
                    <h2 className="font-serif text-2xl font-semibold text-forest-800">
                      Free Consultation Request
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-forest-600 mb-1.5">
                        Full Name <span className="text-gold-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Eg: Chamara Perera"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-sand-300
                                   rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-300
                                   focus:border-forest-400 placeholder:text-forest-300"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-medium text-forest-600 mb-1.5">
                        Phone Number <span className="text-gold-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+94 77 XXX XXXX"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-sand-300
                                   rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-300
                                   focus:border-forest-400 placeholder:text-forest-300"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-forest-600 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 text-sm bg-white border border-sand-300
                                 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-300
                                 focus:border-forest-400 placeholder:text-forest-300"
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="block text-xs font-medium text-forest-600 mb-1.5">
                      I'm Interested In <span className="text-gold-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {interests.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setForm({ ...form, interest: item })}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all duration-150 ${
                            form.interest === item
                              ? "bg-forest-700 text-white border-forest-700"
                              : "bg-white text-forest-600 border-sand-300 hover:border-forest-300"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-forest-600 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your requirements — budget, location preference, type of property..."
                      className="w-full px-4 py-2.5 text-sm bg-white border border-sand-300
                                 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-300
                                 focus:border-forest-400 placeholder:text-forest-300 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading || !form.name || !form.phone || !form.interest}
                    className="w-full btn-primary justify-center py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-forest-400">
                    We typically respond within a few hours during business hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map embed */}
      <section className="bg-sand-50 border-t border-sand-200">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-12">
          <div className="mb-6">
            <p className="section-tag">Our Location</p>
            <h2 className="font-serif text-2xl font-semibold text-forest-800">
              Find Us on the Map
            </h2>
            <p className="text-forest-500 text-sm mt-1">
              No. 396/3, Galle Road, Thalpitiya, Wadduwa, Sri Lanka
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-sand-200 shadow-card">
            <iframe
              title="TDL Home Land Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5!2d79.9200!3d6.6300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzcnNDguMCJOIDc5wrA1NScxMi4wIkU!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-xs text-forest-400 mt-3 text-center">
            On Galle Road between Wadduwa and Panadura — easy to find, plenty of parking.
          </p>
        </div>
      </section>
    </div>
  );
}

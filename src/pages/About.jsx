import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { stats } from "../data";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    "Transparency in every transaction",
    "Deed-verified listings only",
    "Legal guidance included",
    "No hidden fees or commissions",
    "Local market expertise",
    "End-to-end property support",
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-forest-800 py-14 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-3">Our Story</p>
          <h1 className="font-serif text-4xl font-bold text-white mb-2">About TDL Home Land</h1>
          <p className="text-forest-300 text-sm max-w-md">
            Your trusted property partner on Galle Road, Wadduwa.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-tag">Who We Are</p>
              <h2 className="section-heading mb-5">Built on Trust, Driven by Results</h2>
              <p className="text-forest-600 text-sm leading-relaxed mb-4">
                TDL Home Land is a full-service property company based at No. 396/3, Galle Road, Thalpitiya, Wadduwa. We specialise in buying, selling, and construction of houses and land across the Western Province coastal corridor.
              </p>
              <p className="text-forest-600 text-sm leading-relaxed mb-4">
                Whether you're a first-time buyer, a family upgrading your home, or an investor seeking land, our team provides honest advice, transparent pricing, and complete transactional support.
              </p>
              <p className="text-forest-600 text-sm leading-relaxed">
                We also offer construction services — from architectural planning to final handover — making us a true one-stop property partner for Sri Lanka's Southern coastal belt.
              </p>
            </div>

            {/* Values card */}
            <div className="bg-sand-50 rounded-2xl p-8 border border-sand-200">
              <h3 className="text-sm font-semibold text-forest-800 mb-5">Our Commitments</h3>
              <ul className="space-y-3">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-forest-700">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-forest-800">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-4xl font-bold text-gold-400 mb-1">{s.num}</div>
              <div className="text-forest-400 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Address */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="max-w-lg mx-auto text-center mb-10">
            <p className="section-tag">Find Us</p>
            <h2 className="section-heading">Our Office</h2>
          </div>
          <div className="max-w-md mx-auto bg-sand-50 rounded-2xl p-8 border border-sand-200 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-forest-800">Address</p>
                <p className="text-sm text-forest-600">No. 396/3, Galle Road, Thalpitiya, Wadduwa, Sri Lanka</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gold-500 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-forest-800">Phone</p>
                <a href="tel:+94XXXXXXXXX" className="text-sm text-gold-600 hover:underline">+94 XX XXX XXXX</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gold-500 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-forest-800">Email</p>
                <a href="mailto:info@tdlhomeland.lk" className="text-sm text-gold-600 hover:underline">info@tdlhomeland.lk</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/contact" className="btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

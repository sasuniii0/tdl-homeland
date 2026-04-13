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
      <div className="bg-slate-950 py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 text-xs font-medium tracking-widest uppercase mb-3">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">About TDL Home Land</h1>
          <p className="text-slate-400 text-lg max-w-md">
            Your trusted property partner on Galle Road, Wadduwa.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-tag text-emerald-600">Who We Are</p>
              <h2 className="section-heading text-slate-900 mb-6">Built on Trust, Driven by Results</h2>
              
              <p className="text-slate-600 leading-relaxed mb-5">
                TDL Home Land is a full-service property company based at No. 396/3, Galle Road, Thalpitiya, Wadduwa. We specialise in buying, selling, and construction of houses and land across the Western Province coastal corridor.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Whether you're a first-time buyer, a family upgrading your home, or an investor seeking land, our team provides honest advice, transparent pricing, and complete transactional support.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We also offer construction services — from architectural planning to final handover — making us a true one-stop property partner for Sri Lanka's Southern coastal belt.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Our Commitments</h3>
              <ul className="space-y-4">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-5xl font-bold text-white mb-2">{s.num}</div>
              <div className="text-slate-400 text-sm tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info / Office */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="max-w-lg mx-auto text-center mb-12">
            <p className="section-tag text-cyan-600">Find Us</p>
            <h2 className="section-heading text-slate-900">Our Office</h2>
          </div>

          <div className="max-w-md mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-10 space-y-8">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-900">Address</p>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  No. 396/3, Galle Road, Thalpitiya, Wadduwa, Sri Lanka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={20} className="text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-900">Phone</p>
                <a href="tel:+94741141827" className="text-slate-700 hover:text-cyan-600 transition-colors">
                  +94741141827 
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail size={20} className="text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-900">Email</p>
                <a href="mailto:info@tdlhomeland.lk" className="text-slate-700 hover:text-cyan-600 transition-colors">
                  info@tdlhomeland.lk
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronDown, 
  Star, 
  CheckCircle2,
  MapPin,
  FileCheck,
  Handshake,
  Award,
  Home as HomeIcon,     // ← Renamed to avoid conflict
  Landmark,
  Hammer
} from "lucide-react";
import { motion } from "framer-motion";
import PropertyCard from "../components/PropertyCard";
import { FadeUp, StaggerGrid, StaggerItem } from "../components/Animate";
import { properties, services, stats, testimonials } from "../data";

function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 flex flex-col justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `radial-gradient(circle at 25px 25px, #22d3ee 1px, transparent 0)`, backgroundSize: "60px 60px" }}
      />
      
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-24 pb-16 flex justify-center">
        <div className="max-w-3xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-cyan-300 text-xs font-medium tracking-widest uppercase px-6 py-2.5 rounded-full mb-8 mx-auto"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Wadduwa · Thalpitiya · Galle Road
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
          >
            Your Property<br />Partner in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Sri Lanka</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-slate-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Buying, selling and construction of houses & land. Trusted experts along the Galle Road coastal corridor serving families and investors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <Link to="/properties" className="btn-primary">Browse Properties <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn-outline-white">Free Consultation</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            {["Deed-Verified Listings", "Legal Guidance Included", "Free Property Valuation"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                <CheckCircle2 size={16} className="text-emerald-400" />{item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative border-t border-slate-800 bg-slate-900/80 backdrop-blur-md mt-auto">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
              className="text-center"
            >
              <div className="font-serif text-4xl font-bold text-white">{s.num}</div>
              <div className="text-slate-400 text-sm mt-1 tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <FadeUp className="mb-12 text-center">
          <p className="section-tag text-emerald-600">What We Do</p>
          <h2 className="section-heading text-slate-900">Complete Property Solutions</h2>
          <p className="section-sub text-slate-600 mt-3">From finding your dream home to building it from the ground up — we handle every step.</p>
        </FadeUp>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <StaggerItem key={svc.id}>
              <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform text-emerald-600">
                  {svc.icon === "home" && <HomeIcon size={48} />}
                  {svc.icon === "sell" && <Landmark size={48} />}
                  {svc.icon === "land-plot" && <MapPin size={48} />}
                  {svc.icon === "construction" && <Hammer size={48} />}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{svc.title}</h3>
                <p className="text-slate-600 leading-relaxed">{svc.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

function FeaturedListings() {
  const featured = properties.filter((p) => p.featured);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="section-tag text-cyan-600">Featured Listings</p>
            <h2 className="section-heading text-slate-900">Properties Available Now</h2>
          </div>
          <Link to="/properties" className="btn-outline">
            View All <ArrowRight size={16} />
          </Link>
        </FadeUp>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p) => (
            <StaggerItem key={p.id}><PropertyCard property={p} /></StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    { icon: <MapPin size={48} />, title: "Local Expertise", desc: "Deep roots in Wadduwa — we know every street, plot value, and development plan." },
    { icon: <FileCheck size={48} />, title: "Clear Deeds Only", desc: "Every listing is legally verified before it reaches you. Zero hidden complications." },
    { icon: <Handshake size={48} />, title: "End-to-End Service", desc: "Search, negotiate, build — one team handles everything under one roof." },
    { icon: <Award size={48} />, title: "Proven Track Record", desc: "300+ satisfied clients and 150+ successful transactions since our founding." },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <FadeUp className="mb-12 text-center">
          <p className="section-tag text-cyan-400">Why Choose Us</p>
          <h2 className="section-heading !text-white">Trusted. Local. Experienced.</h2>
          <p className="section-sub !text-slate-400">We know every road, every neighbourhood, and every regulation in the Wadduwa corridor.</p>
        </FadeUp>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, index) => (
            <StaggerItem key={index}>
              <div className="bg-slate-900 border border-slate-800 hover:border-cyan-500/30 rounded-3xl p-8 transition-all hover:bg-slate-800/80 h-full">
                <div className="text-emerald-500 mb-6">{r.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{r.title}</h3>
                <p className="text-slate-400">{r.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <FadeUp className="text-center mb-12">
          <p className="section-tag text-emerald-600">Client Stories</p>
          <h2 className="section-heading text-slate-900">What Our Clients Say</h2>
        </FadeUp>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 flex-1">"{t.text}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section className="bg-gradient-to-r from-cyan-600 to-emerald-600 py-20">
      <FadeUp>
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to find your perfect property?
          </h2>
          <p className="text-cyan-100 text-lg mb-10">Contact TDL Home Land today for a free, no-obligation consultation.</p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-4 rounded-2xl font-semibold transition-all">
              Get Free Consultation
            </Link>
            <a href="https://wa.me/94XXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#1da851] px-10 py-4 rounded-2xl font-semibold transition-all flex items-center gap-3">
              WhatsApp Us
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedListings />
      <WhyUs />
      <Testimonials />
      <CTABand />
    </>
  );
}
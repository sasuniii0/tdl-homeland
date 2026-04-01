import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import PropertyCard from "../components/PropertyCard";
import { FadeUp, StaggerGrid, StaggerItem } from "../components/Animate";
import { properties, services, stats, testimonials } from "../data";

function Hero() {
  return (
    <section className="relative min-h-screen bg-forest-800 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`, backgroundSize: "50px 50px" }}
      />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-forest-500/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/25 text-gold-300 text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Wadduwa · Thalpitiya · Galle Road
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Your Property<br />Partner in{" "}
            <em className="text-gold-400 not-italic">Sri Lanka</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-forest-200 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
          >
            Buying, selling and construction of houses & land. Trusted experts along the Galle Road coastal corridor serving families and investors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3 mb-16"
          >
            <Link to="/properties" className="btn-gold">Browse Properties <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn-outline">Free Consultation</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-5"
          >
            {["Deed-Verified Listings", "Legal Guidance Included", "Free Property Valuation"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-forest-300 text-sm">
                <CheckCircle2 size={14} className="text-gold-400" />{item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative border-t border-forest-700/60 bg-forest-900/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
              className="text-center md:text-left"
            >
              <div className="font-serif text-3xl font-bold text-gold-400">{s.num}</div>
              <div className="text-forest-400 text-xs mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-forest-400 animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <FadeUp className="mb-10">
          <p className="section-tag">What We Do</p>
          <h2 className="section-heading mb-3">Complete Property Solutions</h2>
          <p className="section-sub">From finding your dream home to building it from the ground up — we handle every step.</p>
        </FadeUp>
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc) => (
            <StaggerItem key={svc.id}>
              <div className={`${svc.color} border rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-200 h-full`}>
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3 className={`text-sm font-semibold mb-2 ${svc.accent}`}>{svc.title}</h3>
                <p className="text-forest-600 text-xs leading-relaxed">{svc.desc}</p>
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="section-tag">Featured Listings</p>
            <h2 className="section-heading">Properties Available Now</h2>
          </div>
          <Link to="/properties" className="btn-outline-dark self-start md:self-auto">
            View All <ArrowRight size={15} />
          </Link>
        </FadeUp>
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    { icon: "📍", title: "Local Expertise", desc: "Deep roots in Wadduwa — we know every street, plot value, and development plan." },
    { icon: "📄", title: "Clear Deeds Only", desc: "Every listing is legally verified before it reaches you. Zero hidden complications." },
    { icon: "🤝", title: "End-to-End Service", desc: "Search, negotiate, build — one team handles everything under one roof." },
    { icon: "🏆", title: "Proven Track Record", desc: "300+ satisfied clients and 150+ successful transactions since our founding." },
  ];
  return (
    <section className="py-20 bg-forest-800">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <FadeUp className="mb-10">
          <p className="section-tag !text-gold-400">Why Choose Us</p>
          <h2 className="section-heading !text-white">Trusted. Local. Experienced.</h2>
          <p className="section-sub !text-forest-300">We know every road, every neighbourhood, and every regulation in the Wadduwa corridor.</p>
        </FadeUp>
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <StaggerItem key={r.title}>
              <div className="bg-forest-700/50 border border-forest-600/40 rounded-2xl p-6 hover:bg-forest-700 transition-colors h-full">
                <div className="text-2xl mb-4">{r.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-2">{r.title}</h3>
                <p className="text-forest-300 text-xs leading-relaxed">{r.desc}</p>
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
    <section className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <FadeUp className="text-center mb-12">
          <p className="section-tag">Client Stories</p>
          <h2 className="section-heading">What Our Clients Say</h2>
        </FadeUp>
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="bg-white rounded-2xl p-6 border border-sand-200 shadow-card h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-gold-500 fill-gold-500" />)}
                </div>
                <p className="text-forest-700 text-sm leading-relaxed mb-5 italic flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-forest-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-forest-800">{t.name}</p>
                    <p className="text-xs text-forest-500">{t.role}</p>
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
    <section className="bg-gold-500 py-16">
      <FadeUp>
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Ready to find your perfect property?</h2>
          <p className="text-gold-100 text-sm mb-8 max-w-lg mx-auto">Contact TDL Home Land today for a free, no-obligation consultation.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="bg-white text-gold-600 hover:bg-gold-50 px-8 py-3 rounded-lg text-sm font-medium transition-colors">
              Get Free Consultation
            </Link>
            <a href="https://wa.me/94XXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#1da851] px-8 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
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

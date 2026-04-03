import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/",           label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/about",      label: "About" },
  { to: "/contact",    label: "Contact" },
];

export default function Navbar({ transparent = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);

      // Smart hide on scroll down
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Force solid background on non-home pages
  const isHome = location.pathname === "/";
  const shouldBeTransparent = transparent && isHome;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || !shouldBeTransparent
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200"
          : "bg-transparent"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className={`w-8 h-8 rounded-2xl flex items-center justify-center transition-all duration-300 ${
            scrolled || !shouldBeTransparent ? "bg-slate-900" : "bg-white shadow-md"
          }`}>
            <span className={`text-lg font-bold transition-colors ${
              scrolled || !shouldBeTransparent ? "text-white" : "text-slate-900"
            }`}>T</span>
          </div>
          <span className={`font-serif text-2xl font-bold tracking-tighter transition-colors ${
            scrolled || !shouldBeTransparent ? "text-slate-900" : "text-white"
          }`}>
            TDL <span className="text-cyan-500">Home</span> Land
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-200 hover:text-cyan-600 ${
                  isActive
                    ? (scrolled || !shouldBeTransparent) ? "text-cyan-600 font-semibold" : "text-white"
                    : (scrolled || !shouldBeTransparent) ? "text-slate-600" : "text-white/80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+94741141827"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled || !shouldBeTransparent 
                ? "text-slate-700 hover:text-slate-900" 
                : "text-white/80 hover:text-white"
            }`}
          >
            <Phone size={16} />
            Call Us
          </a>
          
          <Link
            to="/contact"
            className="btn-primary text-sm px-6 py-2.5"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors rounded-xl ${
            scrolled || !shouldBeTransparent 
              ? "text-slate-900 hover:bg-slate-100" 
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-8 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-5 py-4 rounded-2xl text-base font-medium transition-all ${
                  isActive
                    ? "bg-cyan-50 text-cyan-700 font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="pt-6 border-t border-slate-100">
            <a
              href="tel:+94741141827"
              className="flex items-center justify-center gap-3 w-full py-4 text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors font-medium"
            >
              <Phone size={20} /> Call Us Now
            </a>
          </div>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary w-full justify-center py-3.5 mt-4"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
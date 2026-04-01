import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/",           label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/about",      label: "About" },
  { to: "/contact",    label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-sand-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-forest-700 flex items-center justify-center">
            <span className="text-white text-sm font-bold">T</span>
          </div>
          <span
            className={`font-serif text-lg font-bold tracking-tight transition-colors ${
              scrolled ? "text-forest-800" : "text-white"
            }`}
          >
            TDL <span className="text-gold-500">Home</span> Land
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-gold-500"
                    : scrolled
                    ? "text-forest-700 hover:text-forest-900"
                    : "text-white/80 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+94XXXXXXXXX"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? "text-forest-700" : "text-white/80"
            }`}
          >
            <Phone size={14} />
            Call Us
          </a>
          <Link
            to="/contact"
            className="btn-gold text-sm px-5 py-2.5"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors ${
            scrolled ? "text-forest-800" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-sand-200 px-5 pb-5 pt-3 shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-sm font-medium border-b border-sand-100 ${
                  isActive ? "text-gold-500" : "text-forest-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-gold w-full justify-center mt-4 py-3"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}

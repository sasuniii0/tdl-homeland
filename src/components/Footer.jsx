import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">T</span>
              </div>
              <span className="font-serif text-lg font-bold">
                TDL <span className="text-gold-400">Home</span> Land
              </span>
            </div>
            <p className="text-forest-300 text-sm leading-relaxed mb-5">
              Buying, selling & construction of houses and land. Your trusted property partner in the Wadduwa coastal corridor.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-forest-700 hover:bg-gold-500 transition-colors flex items-center justify-center">
                <FaFacebook size={15} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-forest-700 hover:bg-gold-500 transition-colors flex items-center justify-center">
                <FaInstagram size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/properties", label: "Properties" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-forest-300 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-forest-300 text-sm">
                <MapPin size={14} className="mt-0.5 text-gold-400 flex-shrink-0" />
                No. 396/3, Galle Road, Thalpitiya, Wadduwa, Sri Lanka
              </li>
              <li className="flex items-center gap-3 text-forest-300 text-sm">
                <Phone size={14} className="text-gold-400 flex-shrink-0" />
                <a href="tel:+94XXXXXXXXX" className="hover:text-gold-400 transition-colors">
                  +94 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3 text-forest-300 text-sm">
                <Mail size={14} className="text-gold-400 flex-shrink-0" />
                <a href="mailto:info@tdlhomeland.lk" className="hover:text-gold-400 transition-colors">
                  info@tdlhomeland.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-forest-400 text-xs">
            © {new Date().getFullYear()} TDL Home Land. All rights reserved.
          </p>
          <p className="text-forest-500 text-xs">
            No. 396/3, Galle Road, Thalpitiya, Wadduwa
          </p>
        </div>
      </div>
    </footer>
  );
}

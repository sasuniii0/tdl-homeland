import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-inner">
                <span className="text-white text-xl font-bold">T</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tighter">
                TDL <span className="text-cyan-400">Home</span> Land
              </span>
            </div>
            
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-xs">
              Buying, selling & construction of houses and land. 
              Your trusted property partner along the Galle Road coastal corridor.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              <a 
                href="https://www.facebook.com/share/g/18GF3ZTvwd/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-slate-900 hover:bg-cyan-600 transition-all flex items-center justify-center"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-2xl bg-slate-900 hover:bg-cyan-600 transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-slate-400 mb-5">QUICK LINKS</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/properties", label: "Properties" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-300 hover:text-white transition-colors text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-slate-400 mb-5">CONTACT US</h4>
            <ul className="space-y-5 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-[15px] leading-relaxed">
                  No. 396/3, Galle Road,<br />Thalpitiya, Wadduwa, Sri Lanka
                </span>
              </li>
              
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-400 flex-shrink-0" />
                <a 
                  href="tel:+94741141827" 
                  className="hover:text-cyan-400 transition-colors text-[15px]"
                >
                  +94 74 114 1827
                </a>
              </li>
              
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-400 flex-shrink-0" />
                <a 
                  href="mailto:info@tdlhomeland.lk" 
                  className="hover:text-cyan-400 transition-colors text-[15px]"
                >
                  info@tdlhomeland.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-slate-500">
            © {new Date().getFullYear()} TDL Home Land. All rights reserved.
          </p>
          <p className="text-slate-500 text-center md:text-right">
            No. 396/3, Galle Road, Thalpitiya, Wadduwa
          </p>
        </div>
      </div>
    </footer>
  );
}
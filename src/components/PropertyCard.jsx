import { Bed, Bath, Maximize2, MapPin, ArrowUpRight } from "lucide-react";

export default function PropertyCard({ property }) {
  const { title, location, price, priceShort, type, status, beds, baths, perches, sqft, tag, emoji, gradient, featured } = property;

  return (
    <div className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      
      {/* Thumbnail */}
      <div className={`relative h-56 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        <span className="text-6xl select-none drop-shadow-md">{emoji}</span>

        {/* Status & Tag Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="bg-slate-900/90 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md">
            {status}
          </span>
          {tag && (
            <span className="bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md">
              {tag}
            </span>
          )}
        </div>

        {/* Type Pill */}
        <div className="absolute bottom-4 right-4">
          <span className="bg-white/95 backdrop-blur-md text-slate-700 text-xs font-semibold px-3.5 py-1 rounded-full capitalize shadow-sm">
            {type}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
            <ArrowUpRight size={20} className="text-slate-700" />
          </div>
        </div>

        {/* Featured Ribbon */}
        {featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
            FEATURED
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Price */}
        <div className="flex items-baseline justify-between mb-3">
          <span className="font-serif text-2xl font-semibold text-slate-900">
            LKR {priceShort}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-slate-800 line-clamp-2 group-hover:text-cyan-700 transition-colors mb-2 min-h-[42px]">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-slate-500 mb-4">
          <MapPin size={15} className="flex-shrink-0" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-5 text-sm border-t border-slate-100 pt-4">
          {beds !== null && (
            <div className="flex items-center gap-1.5 text-slate-600">
              <Bed size={16} />
              <span>{beds}</span>
            </div>
          )}
          
          {baths !== null && (
            <div className="flex items-center gap-1.5 text-slate-600">
              <Bath size={16} />
              <span>{baths}</span>
            </div>
          )}

          {sqft && (
            <div className="flex items-center gap-1.5 text-slate-600">
              <Maximize2 size={16} />
              <span>{sqft.toLocaleString()}</span>
            </div>
          )}

          {perches && (
            <div className="flex items-center gap-1 text-slate-600">
              <span>{perches} Perch</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
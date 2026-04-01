import { Bed, Bath, Maximize2, MapPin, ArrowUpRight } from "lucide-react";

export default function PropertyCard({ property }) {
  const { title, location, price, priceShort, type, status, beds, baths, perches, sqft, tag, emoji, gradient, featured } = property;

  return (
    <div className="prop-card group">
      {/* Thumbnail */}
      <div className={`relative h-44 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        <span className="text-5xl select-none">{emoji}</span>

        {/* Tag badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-forest-700 text-white text-[10px] font-medium px-2.5 py-1 rounded-full tracking-wide">
            {status}
          </span>
          {tag && (
            <span className="bg-gold-500 text-white text-[10px] font-medium px-2.5 py-1 rounded-full tracking-wide">
              {tag}
            </span>
          )}
        </div>

        {/* Type pill */}
        <div className="absolute bottom-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-forest-700 text-[10px] font-medium px-2.5 py-1 rounded-full capitalize">
            {type}
          </span>
        </div>

        {/* Hover overlay arrow */}
        <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/10 transition-all duration-300 flex items-center justify-center">
          <div className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
            <ArrowUpRight size={16} className="text-forest-700" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        {/* Price */}
        <div className="flex items-center justify-between mb-1">
          <span className="font-serif text-xl font-semibold text-gold-600">
            LKR {priceShort}
          </span>
          {featured && (
            <span className="text-[10px] font-medium text-gold-500 bg-gold-50 border border-gold-200 px-2 py-0.5 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-sm font-medium text-forest-800 mb-1.5 group-hover:text-forest-600 transition-colors">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-forest-500 mb-3">
          <MapPin size={11} />
          <span className="text-xs">{location}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-sand-200 pt-3">
          <div className="flex items-center gap-4">
            {beds !== null && (
              <div className="flex items-center gap-1 text-forest-500">
                <Bed size={12} />
                <span className="text-xs">{beds} Bed</span>
              </div>
            )}
            {baths !== null && (
              <div className="flex items-center gap-1 text-forest-500">
                <Bath size={12} />
                <span className="text-xs">{baths} Bath</span>
              </div>
            )}
            {sqft && (
              <div className="flex items-center gap-1 text-forest-500">
                <Maximize2 size={11} />
                <span className="text-xs">{sqft.toLocaleString()} sqft</span>
              </div>
            )}
            {perches && (
              <div className="flex items-center gap-1 text-forest-500">
                <span className="text-xs">{perches} Perch</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

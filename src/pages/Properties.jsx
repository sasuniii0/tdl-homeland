import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data";

const TYPES = ["All", "House", "Land", "Villa"];

export default function Properties() {
  const [search, setSearch] = useState("");
  const [activeType, setType] = useState("All");

  const filtered = properties.filter((p) => {
    const matchType =
      activeType === "All" ||
      p.type.toLowerCase() === activeType.toLowerCase();
    const matchSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-slate-950 py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 text-xs font-medium tracking-widest uppercase mb-3">Our Listings</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">Properties for Sale</h1>
          <p className="text-slate-400 text-lg max-w-md">
            Browse houses, villas and land across Wadduwa, Panadura and the Western Province coastal belt.
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-2xl
                         focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                         placeholder:text-slate-400"
            />
          </div>

          {/* Type Filter Tabs */}
          <div className="flex gap-2 flex-wrap">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-6 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200 ${
                  activeType === t
                    ? "bg-cyan-600 text-white shadow-md"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-400">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg font-medium text-slate-600">No properties match your search.</p>
            <p className="text-sm mt-2">Try adjusting your filters or search term.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-slate-500 mb-8">
              Showing <span className="font-semibold text-slate-700">{filtered.length}</span> properties
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
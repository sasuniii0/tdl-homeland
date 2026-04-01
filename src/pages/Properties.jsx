import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data";

const TYPES = ["All", "House", "Land", "Villa"];

export default function Properties() {
  const [search, setSearch]     = useState("");
  const [activeType, setType]   = useState("All");

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
      {/* Page header */}
      <div className="bg-forest-800 py-14 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-3">Our Listings</p>
          <h1 className="font-serif text-4xl font-bold text-white mb-2">Properties for Sale</h1>
          <p className="text-forest-300 text-sm max-w-md">
            Browse houses, villas and land across Wadduwa, Panadura and the Western Province coastal belt.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-sand-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-forest-400" />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-sand-50 border border-sand-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-forest-400
                         placeholder:text-forest-400"
            />
          </div>

          {/* Type tabs */}
          <div className="flex gap-2">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-150 ${
                  activeType === t
                    ? "bg-forest-700 text-white"
                    : "bg-sand-50 text-forest-600 hover:bg-sand-100 border border-sand-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-forest-400">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-sm">No properties match your search.</p>
          </div>
        ) : (
          <>
            <p className="text-xs text-forest-500 mb-6">
              Showing <span className="font-medium text-forest-700">{filtered.length}</span> properties
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

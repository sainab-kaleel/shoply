import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import SortDropdown from "./components/SortDropdown";
import ProductGrid from "./components/ProductGrid";
import EmptyState from "./components/EmptyState";
import { products } from "./data/products";

export default function App() {
const [search, setSearch] = useState("");
const [debouncedSearch, setDebouncedSearch] = useState("");

useEffect(() => {
  const t = setTimeout(() => setDebouncedSearch(search), 200);
  return () => clearTimeout(t);
}, [search]);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    const q = search.trim().toLowerCase();
    if (q) {
      result = result.filter((p) => p.name.toLowerCase().includes(q));
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [search, category, sort]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero search={search} setSearch={setSearch} />

      < main id="shop" main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-4">
          <CategoryFilter value={category} onChange={setCategory} />
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {loading
              ? "Loading..."
              : `${filtered.length} product${filtered.length !== 1 ? "s" : ""} found`}
          </p>
          <SortDropdown value={sort} onChange={setSort} />
        </div>

        {loading ? (
          <ProductGrid loading />
        ) : filtered.length === 0 ? (
          <EmptyState term={search} onClear={clearFilters} />
        ) : (
          <ProductGrid products={filtered} />
        )}
      </main>
    </div>
  );
}
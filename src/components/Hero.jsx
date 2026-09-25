import SearchBar from "./SearchBar";

export default function Hero({ search, setSearch }) {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-16 sm:pb-12">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-brand-600 dark:text-brand-400 mb-2">
            Better Products, Brighter Days
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Discover something you'll love
          </h1>
          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Browse our collection of carefully selected products, designed for your everyday life.
          </p>

          <div className="mt-6">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>
      </div>

      {/* Soft background glow */}
      
    </section>
  );
}
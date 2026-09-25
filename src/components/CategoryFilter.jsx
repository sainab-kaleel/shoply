import { categories } from "../data/products";

export default function CategoryFilter({ value, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((cat) => {
        const active = value === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active
                ? "bg-brand-600 text-white shadow-sm"
                : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-brand-400"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}